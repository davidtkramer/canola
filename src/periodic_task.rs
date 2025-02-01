use libc::can_frame;
use napi::bindgen_prelude::*;
use socket2::Socket;
use std::{
  io::Write,
  mem, slice,
  sync::{
    atomic::{AtomicBool, Ordering},
    Arc,
  },
  thread,
  time::{Duration, Instant},
};

#[napi]
pub struct PeriodicTask {
  running: Arc<AtomicBool>,
  handle: Option<thread::JoinHandle<Socket>>,
  interval: Duration,
  socket: Option<Socket>,
  id: u32,
  data: Buffer,
}

#[napi]
impl PeriodicTask {
  pub fn new(interval: u64, socket: Socket, id: u32, data: Buffer) -> Self {
    PeriodicTask {
      running: Arc::new(AtomicBool::new(false)),
      handle: None,
      interval: Duration::from_millis(interval),
      socket: Some(socket),
      id,
      data,
    }
  }

  #[napi]
  pub fn start(&mut self) {
    if self.running.load(Ordering::SeqCst) {
      return;
    }
    self.reset_socket();

    self.running.store(true, Ordering::SeqCst);
    let running = self.running.clone();
    let interval = self.interval;
    let mut socket = self.socket.take().unwrap();
    let id = self.id;
    let data = self.data.clone();

    let handle = thread::spawn(move || {
      let mut next_send = Instant::now();

      while running.load(Ordering::SeqCst) {
        println!("sending periodic message");

        let mut frame: can_frame = unsafe { mem::zeroed() };
        frame.can_id = id;
        frame.can_dlc = data.len() as u8;
        frame.data[..frame.can_dlc as usize].copy_from_slice(&data[..frame.can_dlc as usize]);

        match socket.write_all(unsafe {
          slice::from_raw_parts(&frame as *const _ as *const u8, mem::size_of::<can_frame>())
        }) {
          Ok(_) => {
            next_send += interval;
            let now = Instant::now();
            if now < next_send {
              thread::sleep(next_send - now);
            } else {
              next_send = now + interval;
            }
          }
          Err(e) => {
            println!("Error writing to socket: {:?}", e);
            running.store(false, Ordering::SeqCst);
            break;
          }
        }
      }

      return socket;
    });

    self.handle = Some(handle);
  }

  #[napi]
  pub fn stop(&mut self) {
    self.running.store(false, Ordering::SeqCst);
  }

  fn reset_socket(&mut self) {
    if let Some(handle) = self.handle.take() {
      let socket = handle.join().unwrap();
      self.socket = Some(socket);
    }
  }
}
