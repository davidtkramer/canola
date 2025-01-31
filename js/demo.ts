import { CanSchema } from './can-schema.js';
import type { Messages } from './__test__/types.js';
import { CanSocket } from './index.js';

console.log('ready');
let schema = CanSchema.loadFile<Messages>('js/__test__/files/model-y.kcd');
let state = { isMovingSeat: false };

let socket = new CanSocket('can1', {
  filters: [{ id: 0x3c2, mask: 0x7ff }],
});

socket.on('message', async (frame) => {
  let message = schema.decodeMessage(frame);

  if (
    message.data.switchStatusIndex === 'INDEX_1' &&
    message.data.secondRowSeatLeftFoldFlatSwitch === 1 &&
    !state.isMovingSeat
  ) {
    state.isMovingSeat = true;
    await moveDriverSeatForward({ seconds: 5 });
    await moveDriverSeatBackward({ seconds: 5 });
    state.isMovingSeat = false;
  }
});

function moveDriverSeatForward(options: { seconds: number }): Promise<null> {
  let message = schema.encodeMessage({
    name: 'ID4F3SeatControl',
    data: {
      frontLeftSeatTrackForward: 1,
      frontLeftSeatTrackBackward: 0,
    },
  });

  let startTime = Date.now();
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      if (Date.now() - startTime > options.seconds * 1000) {
        clearInterval(intervalId);
        resolve(null);
      } else {
        socket.write(message);
      }
    }, 100);
  });
}

function moveDriverSeatBackward(options: { seconds: number }): Promise<null> {
  let message = schema.encodeMessage({
    name: 'ID4F3SeatControl',
    data: {
      frontLeftSeatTrackForward: 0,
      frontLeftSeatTrackBackward: 1,
    },
  });

  let startTime = Date.now();
  return new Promise((resolve) => {
    let intervalId = setInterval(() => {
      if (Date.now() - startTime > options.seconds * 1000) {
        clearInterval(intervalId);
        resolve(null);
      } else {
        socket.write(message);
      }
    }, 100);
  });
}
