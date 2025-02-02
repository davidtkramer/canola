use libc::can_frame;
use napi::{bindgen_prelude::*, JsObject};
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
pub struct Broadcast {
  env: Env,
  running: Arc<AtomicBool>,
  handle: Option<thread::JoinHandle<Socket>>,
  socket: Option<Socket>,
  interval: Duration,
  duration: Option<Duration>,
  id: u32,
  data: Buffer,
}

#[napi]
impl Broadcast {
  pub fn new(
    env: Env,
    socket: Socket,
    id: u32,
    data: Buffer,
    interval: u32,
    duration: Option<u32>,
  ) -> Result<Self> {
    Ok(Broadcast {
      env,
      running: Arc::new(AtomicBool::new(false)),
      handle: None,
      interval: Duration::from_millis(interval as u64),
      duration: duration.map(|d| Duration::from_millis(d as u64)),
      socket: Some(socket),
      id,
      data,
    })
  }

  #[napi(ts_return_type = "Promise<number>")]
  pub fn start(&mut self) -> Result<JsObject> {
    if self.running.load(Ordering::SeqCst) {
      return Err(Error::from_reason("Broadcast is already running"));
    }
    self.running.store(true, Ordering::SeqCst);
    let running = self.running.clone();
    let mut socket = self.reset_socket();
    let interval = self.interval;
    let duration = self.duration;
    let id = self.id;
    let data = self.data.clone();

    let (deferred, promise) = self.env.create_deferred()?;

    self.handle = Some(thread::spawn(move || {
      let mut next_send = Instant::now();
      let end_time = duration.map(|d| next_send + d);

      while running.load(Ordering::SeqCst) && end_time.map_or(true, |e| Instant::now() < e) {
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
            running.store(false, Ordering::SeqCst);
            deferred.reject(Error::new(
              Status::GenericFailure,
              format!("Failed to send broadcast message: {}", e),
            ));
            return socket;
          }
        }
      }

      running.store(false, Ordering::SeqCst);
      deferred.resolve(|_| Ok(1));
      return socket;
    }));

    Ok(promise)
  }

  #[napi]
  pub fn stop(&mut self) {
    self.running.store(false, Ordering::SeqCst);
  }

  fn reset_socket(&mut self) -> Socket {
    match self.handle.take() {
      Some(handle) => handle.join().unwrap(),
      None => self.socket.take().unwrap(),
    }
  }
}
