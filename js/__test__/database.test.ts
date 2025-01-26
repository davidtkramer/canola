import { expect, test } from 'vitest';
import { Database } from '../database.js';
import { buffer } from './utils.js';
import {
  Messages,
  ID3C2VCLEFT_switchStatus_Signals,
  ID3C2VCLEFT_switchStatus_Signals_0,
} from './types.js';

test('encodes and decodes multiplexed messages', async () => {
  let db = Database.loadFile<Messages>('js/__test__/files/model-y.kcd');
  let message = db.getMessageByName('ID3C2VCLEFT_switchStatus');

  let data1: ID3C2VCLEFT_switchStatus_Signals = {
    VCLEFT_switchStatusIndex: 'VCLEFT_SWITCH_STATUS_INDEX_1',
    VCLEFT_swcLeftTiltRight: 'SWITCH_OFF',
    VCLEFT_swcLeftPressed: 'SWITCH_OFF',
    VCLEFT_swcRightTiltLeft: 'SWITCH_OFF',
    VCLEFT_swcRightTiltRight: 'SWITCH_OFF',
    VCLEFT_swcRightPressed: 'SWITCH_OFF',
    VCLEFT_swcLeftTiltLeft: 'SWITCH_OFF',
    VCLEFT_swcLeftScrollTicks: 0,
    VCLEFT_swcRightScrollTicks: 0,
    VCLEFT_btnWindowUpLR: 0,
    VCLEFT_btnWindowAutoUpLR: 0,
    VCLEFT_btnWindowDownLR: 0,
    VCLEFT_btnWindowAutoDownLR: 0,
    VCLEFT_2RowSeatReclineSwitch: 0,
    VCLEFT_2RowSeatCenterSwitch: 0,
    VCLEFT_2RowSeatLeftFoldFlatSwitch: 1,
    VCLEFT_2RowSeatRightFoldFlatSwitch: 0,
    VCLEFT_2RowSeatBothFoldFlatSwitch: 0,
    VCLEFT_swcLeftDoublePress: 0,
    VCLEFT_swcRightDoublePress: 0,
  };
  let encoded1 = message.encode(data1);
  expect(encoded1).toEqual(buffer('2955000040000000'));
  let decoded1 = message.decode(encoded1);
  expect(decoded1).toEqual(data1);

  let data0: ID3C2VCLEFT_switchStatus_Signals_0 = {
    VCLEFT_switchStatusIndex: 'VCLEFT_SWITCH_STATUS_INDEX_0',
    VCLEFT_hornSwitchPressed: 0,
    VCLEFT_hazardButtonPressed: 0,
    VCLEFT_brakeSwitchPressed: 0,
    VCLEFT_rightMirrorTilt: 'MIRROR_TILT_STOP',
    VCLEFT_frontSeatTrackBack: 'SWITCH_ON',
    VCLEFT_frontSeatTrackForward: 'SWITCH_OFF',
    VCLEFT_frontSeatTiltDown: 'SWITCH_OFF',
    VCLEFT_frontSeatTiltUp: 'SWITCH_OFF',
    VCLEFT_frontSeatLiftDown: 'SWITCH_OFF',
    VCLEFT_frontSeatLiftUp: 'SWITCH_OFF',
    VCLEFT_frontSeatBackrestBack: 'SWITCH_OFF',
    VCLEFT_frontSeatBackrestForward: 'SWITCH_OFF',
    VCLEFT_frontSeatLumbarDown: 'SWITCH_OFF',
    VCLEFT_frontSeatLumbarUp: 'SWITCH_OFF',
    VCLEFT_frontSeatLumbarIn: 'SWITCH_OFF',
    VCLEFT_frontSeatLumbarOut: 'SWITCH_OFF',
    VCLEFT_btnWindowSwPackUpLF: 0,
    VCLEFT_btnWindowSwPackAutoUpLF: 0,
    VCLEFT_btnWindowSwPackDownLF: 0,
    VCLEFT_btnWindowSwPackAutoDownLF: 0,
    VCLEFT_btnWindowSwPackUpLR: 0,
    VCLEFT_btnWindowSwPackAutoUpLR: 0,
    VCLEFT_btnWindowSwPackDownLR: 0,
    VCLEFT_btnWindowSwPackAutoDownLR: 0,
    VCLEFT_btnWindowSwPackUpRF: 0,
    VCLEFT_btnWindowSwPackAutoUpRF: 0,
    VCLEFT_btnWindowSwPackDownRF: 0,
    VCLEFT_btnWindowSwPackAutoDownRF: 0,
    VCLEFT_btnWindowSwPackUpRR: 0,
    VCLEFT_btnWindowSwPackAutoUpRR: 0,
    VCLEFT_btnWindowSwPackDownRR: 0,
    VCLEFT_btnWindowSwPackAutoDownRR: 0,
    VCLEFT_frontBuckleSwitch: 'SWITCH_OFF',
    VCLEFT_frontOccupancySwitch: 'SWITCH_ON',
    VCLEFT_rearLeftBuckleSwitch: 'SWITCH_OFF',
    VCLEFT_rearCenterOccupancySwitch: 'SWITCH_OFF',
    VCLEFT_rearLeftOccupancySwitch: 1,
    VCLEFT_rearRightOccupancySwitch: 'SWITCH_OFF',
    VCLEFT_brakePressed: 0,
    VCLEFT_rearHVACButtonPressed: 0,
    VCLEFT_rearCenterBuckleSwitch: 'SWITCH_OFF',
  };
  let encoded0 = message.encode(data0);
  expect(encoded0).toEqual(buffer('0056555500005945'));
  let decoded0 = message.decode(buffer('0056555500005945'));
  expect(decoded0).toEqual(data0);
});

test('seat controls', async () => {
  let db = Database.loadFile<Messages>('js/__test__/files/model-y.kcd');
  let message = db.getMessageByName('ID4F3SeatControl');

  let encodedForward = message.encode({
    frontLeftSeatTrackForward: 1,
    frontLeftSeatTrackBackward: 0,
  });
  expect(encodedForward).toEqual(buffer('040000'));

  let encodedBackward = message.encode({
    frontLeftSeatTrackForward: 0,
    frontLeftSeatTrackBackward: 1,
  });
  expect(encodedBackward).toEqual(buffer('080000'));
});
