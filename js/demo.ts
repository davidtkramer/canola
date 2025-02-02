import { CanSchema } from './can-schema.js';
import type { Messages } from './__test__/types.js';
import { CanSocket } from './index.js';

let schema = CanSchema.loadFile<Messages>('js/__test__/files/model-y.kcd');
let state = { isMovingSeat: false };

let socket = new CanSocket('can1', {
  filters: [{ id: 0x3c2, mask: 0x7ff }],
});

socket.on('message', async (frame) => {
  let { data } = schema.decode(frame);

  if (
    data.switchStatusIndex === 'INDEX_1' &&
    data.secondRowSeatLeftFoldFlatSwitch === 1 &&
    !state.isMovingSeat
  ) {
    try {
      state.isMovingSeat = true;
      await frontLeftSeatTrackForward.start();
      await frontLeftSeatTrackBackward.start();
    } finally {
      state.isMovingSeat = false;
    }
  }
});

let frontLeftSeatTrackForward = socket.createBroadcast({
  message: schema.encodeByName('ID4F3SeatControl', {
    frontLeftSeatTrackForward: 1,
    frontLeftSeatTrackBackward: 0,
  }),
  interval: 50,
  duration: 7000,
});

let frontLeftSeatTrackBackward = socket.createBroadcast({
  message: schema.encodeByName('ID4F3SeatControl', {
    frontLeftSeatTrackForward: 0,
    frontLeftSeatTrackBackward: 1,
  }),
  interval: 50,
  duration: 7000,
});
