import fs from 'fs';
import path from 'path';
import { Database } from './database.js';
import type { DatabaseType } from './__test__/types.js';
import { CanSocket } from './index.js';

let file = fs.readFileSync(
  path.join(process.cwd(), './js/__test__/files/model-y.kcd'),
  'utf-8',
);
let db = Database.loadString<DatabaseType>(file.replace(/>\s+</g, '><').trim());

let state = {
  isMovingSeat: false,
};

let socket = new CanSocket('vcan1');
socket.on('message', (frame) => {
  if (frame.id !== 0x3c2) {
    return;
  }
  let signals = db.decodeMessageById(frame.id, frame.data);
  if (
    signals.VCLEFT_switchStatusIndex === 'VCLEFT_SWITCH_STATUS_INDEX_1' &&
    signals.VCLEFT_2RowSeatLeftFoldFlatSwitc === 1 &&
    !state.isMovingSeat
  ) {
    let message = db.getMessageByName('ID4F3SeatControl');
    let forward = message.encode({
      frontLeftSeatTrackForward: 1,
      frontLeftSeatTrackBackward: 0,
    });
    let backward = message.encode({
      frontLeftSeatTrackForward: 0,
      frontLeftSeatTrackBackward: 1,
    });

    state.isMovingSeat = true;
    let startTime = Date.now();
    let intervalId = setInterval(() => {
      if (Date.now() - startTime > 10000) {
        console.log('done');
        state.isMovingSeat = false;
        clearInterval(intervalId);
      } else if (Date.now() - startTime > 5000) {
        console.log('moving seat backward');
        socket.write(message.frameId, backward);
      } else {
        console.log('moving seat forward');
        socket.write(message.frameId, forward);
      }
    }, 20);
  }
});

process.on('SIGINT', () => {
  socket.close();
  process.exit(0);
})
