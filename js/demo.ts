import { Database } from './database.js';
import type { Messages } from './__test__/types.js';
import { CanSocket } from './index.js';

console.log('ready');
let db = Database.loadFile<Messages>('js/__test__/files/model-y.kcd');
let state = { isMovingSeat: false };

let socket = new CanSocket('can1', { filters: [{ id: 0x3c2, mask: 0x7ff }] });
socket.on('message', async (frame) => {
  let signals = db.decodeMessageById(frame.id, frame.data);
  if (
    signals.VCLEFT_switchStatusIndex === 'VCLEFT_SWITCH_STATUS_INDEX_1' &&
    signals.VCLEFT_2RowSeatLeftFoldFlatSwitch === 1 &&
    !state.isMovingSeat
  ) {
    state.isMovingSeat = true;
    await moveDriverSeatForward({ seconds: 5 });
    await moveDriverSeatBackward({ seconds: 5 });
    state.isMovingSeat = false;
  }
});

function moveDriverSeatForward(options: { seconds: number }): Promise<null> {
  let message = db.getMessageByName('ID4F3SeatControl');
  let data = message.encode({
    frontLeftSeatTrackForward: 1,
    frontLeftSeatTrackBackward: 0,
  });

  let startTime = Date.now();
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      if (Date.now() - startTime > options.seconds * 1000) {
        clearInterval(intervalId);
        resolve(null);
      } else {
        socket.write(message.frameId, data);
      }
    }, 100);
  });
}

function moveDriverSeatBackward(options: { seconds: number }): Promise<null> {
  let message = db.getMessageByName('ID4F3SeatControl');
  let data = message.encode({
    frontLeftSeatTrackForward: 0,
    frontLeftSeatTrackBackward: 1,
  });

  let startTime = Date.now();
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      if (Date.now() - startTime > options.seconds * 1000) {
        clearInterval(intervalId);
        resolve(null);
      } else {
        socket.write(message.frameId, data);
      }
    }, 100);
  });
}
