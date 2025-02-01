#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use libc::{
  can_frame, if_nametoindex, sa_family_t, sockaddr_can, sockaddr_storage, socklen_t, AF_CAN,
  CAN_RAW, CAN_RAW_FILTER, SOL_CAN_RAW,
};
use napi::{bindgen_prelude::*, Env, Ref};
use socket2::{Domain, Protocol, SockAddr, Socket, Type};
use std::{
  collections::VecDeque,
  ffi,
  io::{Read, Write},
  mem,
  os::{fd::AsRawFd, raw::c_int},
  ptr, slice,
};
use uv_sys::sys::{
  uv_close, uv_handle_t, uv_loop_s, uv_poll_event, uv_poll_init_socket, uv_poll_start,
  uv_poll_stop, uv_poll_t,
};

mod periodic_task;
use periodic_task::PeriodicTask;

#[napi(js_name = "CanSocketNative")]
struct CanSocketProxy {
  socket: *mut CanSocket,
}

struct CanSocket {
  handle: *mut uv_poll_t,
  socket: Socket,
  env: Env,
  callback_ref: Ref<()>,
  write_queue: VecDeque<PendingWrite>,
  write_pending: bool,
}

#[napi(object)]
struct CanFilter {
  pub id: u32,
  pub mask: u32,
}

struct PendingWrite {
  frame: can_frame,
}

#[napi]
impl CanSocketProxy {
  #[napi(constructor)]
  pub fn new(
    env: Env,
    interface_name: String,
    filters: Vec<CanFilter>,
    #[napi(ts_arg_type = "(id: number, data: Buffer) => void")] callback: JsFunction,
  ) -> Result<Self> {
    Ok(Self {
      socket: CanSocket::new(env, interface_name, filters, callback)?,
    })
  }

  #[napi]
  pub fn write(&self, id: u32, data: Buffer) -> Result<()> {
    self.socket()?.write(id, data)
  }

  #[napi]
  pub fn send_periodic(&self, id: u32, data: Buffer) -> Result<PeriodicTask> {
    self.socket()?.send_periodic(id, data)
  }

  #[napi]
  pub fn close(&mut self) {
    if !self.socket.is_null() {
      unsafe {
        (*self.socket).close();
        self.socket = ptr::null_mut();
      }
    }
  }

  #[napi]
  pub fn set_filters(&self, filters: Vec<CanFilter>) -> Result<()> {
    self.socket()?.set_filters(filters)
  }

  #[napi]
  pub fn get_write_queue_size(&self) -> Result<i32> {
    let size = self.socket()?.get_write_queue_size();
    Ok(size)
  }

  #[napi]
  pub fn set_send_buffer_size(&self, size: i32) -> Result<()> {
    self.socket()?.set_send_buffer_size(size);
    Ok(())
  }

  fn socket(&self) -> Result<&mut CanSocket> {
    if !self.socket.is_null() {
      unsafe { Ok(&mut *self.socket) }
    } else {
      Err(Error::new(Status::InvalidArg, "Socket is closed"))
    }
  }
}

impl Drop for CanSocketProxy {
  fn drop(&mut self) {
    self.close();
  }
}

impl CanSocket {
  pub fn new(
    env: Env,
    interface_name: String,
    filters: Vec<CanFilter>,
    callback: JsFunction,
  ) -> Result<*mut CanSocket> {
    let socket = CanSocket::create_raw_socket(&interface_name)?;
    let socket_fd = socket.as_raw_fd();

    let handle = Box::into_raw(Box::new(unsafe { mem::zeroed::<uv_poll_t>() }));
    let this = Box::into_raw(Box::new(Self {
      handle,
      socket,
      env,
      callback_ref: env.create_reference(callback)?,
      write_queue: VecDeque::new(),
      write_pending: false,
    }));
    unsafe {
      (*handle).data = this as *mut _;
    }

    if !filters.is_empty() {
      unsafe {
        (*this).set_filters(filters)?;
      }
    }

    let uv_loop = env.get_uv_event_loop()? as *mut uv_loop_s;
    unsafe {
      uv_poll_init_socket(uv_loop, handle, socket_fd);
      uv_poll_start(handle, uv_poll_event::UV_READABLE as i32, Some(on_event));
    }

    Ok(this)
  }

  fn create_raw_socket(interface: &String) -> Result<Socket> {
    let socket = Socket::new_raw(
      Domain::from(AF_CAN),
      Type::RAW,
      Some(Protocol::from(CAN_RAW)),
    )?;

    let mut addr: sockaddr_can = unsafe { mem::zeroed() };
    addr.can_family = AF_CAN as sa_family_t;
    addr.can_ifindex = CanSocket::from_interface_name(interface)?;

    let sockaddr_can_length = mem::size_of::<sockaddr_can>();
    let storage = unsafe {
      let mut storage: sockaddr_storage = mem::zeroed();
      ptr::copy_nonoverlapping(
        &addr as *const _ as *const u8,
        &mut storage as *mut _ as *mut u8,
        sockaddr_can_length,
      );
      storage
    };
    let sock_addr = unsafe { SockAddr::new(storage, sockaddr_can_length as u32) };

    socket.bind(&sock_addr)?;
    socket.set_nonblocking(true)?; // TODO: might be done by uv_poll_init_socket automatically

    return Ok(socket);
  }

  fn from_interface_name(interface_name: &String) -> Result<i32> {
    let ifname = ffi::CString::new(interface_name.clone())?;
    let ifindex = unsafe { if_nametoindex(ifname.as_ptr()) } as i32;

    if ifindex == 0 {
      return Err(Error::new(
        Status::GenericFailure,
        format!(
          "Could not find interface '{}': {}",
          interface_name,
          std::io::Error::last_os_error()
        ),
      ));
    } else {
      return Ok(ifindex);
    }
  }

  pub fn handle_event(&mut self, status: i32, events: i32) -> Result<()> {
    if status < 0 {
      log!("error processing event");
      return Ok(());
    }

    // Handle reads - keep reading until we get EAGAIN
    if events & uv_poll_event::UV_READABLE as i32 != 0 {
      log!("\nreading frames...");
      loop {
        let mut frame: can_frame = unsafe { mem::zeroed() };
        match self.socket.read_exact(unsafe {
          slice::from_raw_parts_mut(&mut frame as *mut _ as *mut u8, mem::size_of::<can_frame>())
        }) {
          Ok(_) => {
            log!("read frame");
            self.env.run_in_scope(|| {
              let data = self
                .env
                .create_buffer_with_data(frame.data[..frame.can_dlc as usize].to_vec())?
                .into_raw();

              let callback: JsFunction = self.env.get_reference_value(&self.callback_ref)?;
              let _: () = callback.call2(frame.can_id, data)?;
              Ok(())
            })?
          }
          Err(ref e) if e.kind() == std::io::ErrorKind::WouldBlock => {
            log!("read all available frames");
            break;
          }
          Err(e) => {
            log!("read error: {}", e);
            break;
          }
        }
      }
    }

    if events & uv_poll_event::UV_WRITABLE as i32 != 0 {
      while let Some(PendingWrite { frame }) = self.write_queue.front() {
        match self.socket.write_all(unsafe {
          slice::from_raw_parts(frame as *const _ as *const u8, mem::size_of::<can_frame>())
        }) {
          Ok(_) => {
            log!("sent queued message");
            self.write_queue.pop_front();
          }
          Err(ref e)
            if e.kind() == std::io::ErrorKind::WouldBlock
              || e.raw_os_error() == Some(libc::ENOBUFS) =>
          {
            // Socket buffer is full, try again later
            break;
          }
          Err(_) => {
            self.write_queue.pop_front();
          }
        }
      }

      // If queue is empty, stop watching writes
      if self.write_pending && self.write_queue.is_empty() {
        log!("write polling stopped");
        self.write_pending = false;
        unsafe {
          uv_poll_start(
            self.handle,
            uv_poll_event::UV_READABLE as i32,
            Some(on_event),
          );
        }
      }
    }

    Ok(())
  }

  pub fn write(&mut self, id: u32, data: Buffer) -> Result<()> {
    let mut frame: can_frame = unsafe { mem::zeroed() };
    frame.can_id = id;
    frame.can_dlc = data.len() as u8;

    if frame.can_dlc > 8 {
      return Err(Error::new(
        Status::InvalidArg,
        "CAN frame data cannot exceed 8 bytes",
      ));
    }

    frame.data[..frame.can_dlc as usize].copy_from_slice(&data[..frame.can_dlc as usize]);

    log!("\nsending...");

    // If queue is not empty, we're already in "queuing mode"
    if self.write_pending {
      log!("frame added to write queue");
      self.write_queue.push_back(PendingWrite { frame });
      return Ok(());
    }

    // Try to send immediately
    match self.socket.write_all(unsafe {
      slice::from_raw_parts(&frame as *const _ as *const u8, mem::size_of::<can_frame>())
    }) {
      Ok(_) => {
        log!("sent");
        Ok(())
      }
      Err(ref e)
        if e.kind() == std::io::ErrorKind::WouldBlock
          || e.raw_os_error() == Some(libc::ENOBUFS) =>
      {
        log!("queuing writes: {}", e);
        self.write_pending = true;
        self.write_queue.push_back(PendingWrite { frame });
        log!("frame added to write queue");
        unsafe {
          uv_poll_start(
            self.handle,
            (uv_poll_event::UV_READABLE as i32) | (uv_poll_event::UV_WRITABLE as i32),
            Some(on_event),
          );
        }
        Ok(())
      }
      Err(e) => Err(Error::new(
        Status::GenericFailure,
        format!("Failed to write CAN frame: {}", e),
      )),
    }
  }

  pub fn send_periodic(&self, id: u32, data: Buffer) -> Result<PeriodicTask> {
    let socket = self.socket.try_clone()?;
    let mut task = PeriodicTask::new(100, socket, id, data);
    task.start();
    Ok(task)
  }

  pub fn close(&mut self) {
    unsafe {
      uv_poll_stop(self.handle);
      uv_close(self.handle as *mut uv_handle_t, Some(on_close));
    }
    self.callback_ref.unref(self.env).unwrap();
  }

  pub fn get_write_queue_size(&self) -> i32 {
    return self.write_queue.len() as i32;
  }

  pub fn set_send_buffer_size(&self, size: i32) {
    self.socket.set_send_buffer_size(size as usize).unwrap();
  }

  pub fn set_filters(&self, filters: Vec<CanFilter>) -> Result<()> {
    let libc_filters: Vec<libc::can_filter> = filters
      .into_iter()
      .map(|f| libc::can_filter {
        can_id: f.id,
        can_mask: f.mask,
      })
      .collect();

    self.set_socket_option_multi(SOL_CAN_RAW, CAN_RAW_FILTER, &libc_filters)
  }

  fn set_socket_option_multi<T>(&self, level: c_int, name: c_int, values: &[T]) -> Result<()> {
    let result = unsafe {
      libc::setsockopt(
        self.socket.as_raw_fd(),
        level,
        name,
        values.as_ptr().cast(),
        size_of_val(values) as socklen_t,
      )
    };

    match result {
      0 => Ok(()),
      _ => Err(Error::new(
        Status::GenericFailure,
        std::io::Error::last_os_error(),
      )),
    }
  }
}

extern "C" fn on_event(handle: *mut uv_poll_t, status: i32, events: i32) {
  let socket = unsafe { &mut *((*handle).data as *mut CanSocket) };
  let _ = socket.handle_event(status, events);
}

extern "C" fn on_close(handle: *mut uv_handle_t) {
  let handle = unsafe { Box::from_raw(handle) };
  let _socket = unsafe { Box::from_raw(handle.data) };
}

#[macro_export]
macro_rules! log {
    ($($arg:tt)*) => {
      if true {
        println!($($arg)*);
      }
    }
}
