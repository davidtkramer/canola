import fs from 'fs';
import path from 'path';
import { Database } from './database.js';
import type { DatabaseType } from './__test__/types.js';
import { CanSocket } from './index.js';

let file = fs.readFileSync(path.join(process.cwd(), './js/__test__/files/model-y.kcd'), 'utf-8');
let db = Database.loadString<DatabaseType>(file.replace(/>\s+</g, '><').trim());

let socket = new CanSocket('can1');
socket.on('message', (frame) => {
  switch (frame.id) {
    case 0x3C2:
      let signals = db.decodeMessageById(frame.id, frame.data);
      switch (signals.VCLEFT_switchStatusIndex) {
        case 'VCLEFT_SWITCH_STATUS_INDEX_0': {
          console.log('frontOccupancySwitch', signals.VCLEFT_frontOccupancySwitch);
          console.log('frontSeatBackrestForward', signals.VCLEFT_frontSeatBackrestForward);
          console.log('frontSeatTrackBack', signals.VCLEFT_frontSeatTrackBack);
          console.log('frontSeatTrackForward', signals.VCLEFT_frontSeatTrackForward);
          break;
        }
        case 'VCLEFT_SWITCH_STATUS_INDEX_1': {
          console.log('2RowSeatRightFoldFlatSwit', signals.VCLEFT_2RowSeatRightFoldFlatSwit);
          console.log('2RowSeatLeftFoldFlatSwitc', signals.VCLEFT_2RowSeatLeftFoldFlatSwitc);
          console.log('2RowSeatBothFoldFlatSwitc', signals.VCLEFT_2RowSeatBothFoldFlatSwitc);
          break;
        }
      }
  }
})