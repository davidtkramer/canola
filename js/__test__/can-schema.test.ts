import { expect, test } from 'vitest';
import { CanSchema } from '../can-schema.js';
import { buffer } from './utils.js';
import {
  Messages,
  ID3C2VCLEFT_switchStatus_Signals,
  ID3C2VCLEFT_switchStatus_Signals_0,
} from './types.js';

test('encodes and decodes multiplexed messages', async () => {
  let cs = CanSchema.loadFile<Messages>('js/__test__/files/model-y.kcd');
  let messageSchema = cs.getMessageSchemaByName('ID3C2VCLEFT_switchStatus');

  let data1: ID3C2VCLEFT_switchStatus_Signals = {
    switchStatusIndex: 'INDEX_1',
    swcLeftTiltRight: 'SWITCH_OFF',
    swcLeftPressed: 'SWITCH_OFF',
    swcRightTiltLeft: 'SWITCH_OFF',
    swcRightTiltRight: 'SWITCH_OFF',
    swcRightPressed: 'SWITCH_OFF',
    swcLeftTiltLeft: 'SWITCH_OFF',
    swcLeftScrollTicks: 0,
    swcRightScrollTicks: 0,
    btnWindowUpLR: 0,
    btnWindowAutoUpLR: 0,
    btnWindowDownLR: 0,
    btnWindowAutoDownLR: 0,
    secondRowSeatReclineSwitch: 0,
    secondRowSeatCenterSwitch: 0,
    secondRowSeatLeftFoldFlatSwitch: 1,
    secondRowSeatRightFoldFlatSwitch: 0,
    secondRowSeatBothFoldFlatSwitch: 0,
    swcLeftDoublePress: 0,
    swcRightDoublePress: 0,
  };
  let encoded1 = messageSchema.encode(data1);
  expect(encoded1).toEqual(buffer('2955000040000000'));
  let decoded1 = messageSchema.decode(encoded1);
  expect(decoded1).toEqual(data1);

  let data0: ID3C2VCLEFT_switchStatus_Signals_0 = {
    switchStatusIndex: 'INDEX_0',
    hornSwitchPressed: 0,
    hazardButtonPressed: 0,
    brakeSwitchPressed: 0,
    rightMirrorTilt: 'MIRROR_TILT_STOP',
    frontSeatTrackBack: 'SWITCH_ON',
    frontSeatTrackForward: 'SWITCH_OFF',
    frontSeatTiltDown: 'SWITCH_OFF',
    frontSeatTiltUp: 'SWITCH_OFF',
    frontSeatLiftDown: 'SWITCH_OFF',
    frontSeatLiftUp: 'SWITCH_OFF',
    frontSeatBackrestBack: 'SWITCH_OFF',
    frontSeatBackrestForward: 'SWITCH_OFF',
    frontSeatLumbarDown: 'SWITCH_OFF',
    frontSeatLumbarUp: 'SWITCH_OFF',
    frontSeatLumbarIn: 'SWITCH_OFF',
    frontSeatLumbarOut: 'SWITCH_OFF',
    btnWindowSwPackUpLF: 0,
    btnWindowSwPackAutoUpLF: 0,
    btnWindowSwPackDownLF: 0,
    btnWindowSwPackAutoDownLF: 0,
    btnWindowSwPackUpLR: 0,
    btnWindowSwPackAutoUpLR: 0,
    btnWindowSwPackDownLR: 0,
    btnWindowSwPackAutoDownLR: 0,
    btnWindowSwPackUpRF: 0,
    btnWindowSwPackAutoUpRF: 0,
    btnWindowSwPackDownRF: 0,
    btnWindowSwPackAutoDownRF: 0,
    btnWindowSwPackUpRR: 0,
    btnWindowSwPackAutoUpRR: 0,
    btnWindowSwPackDownRR: 0,
    btnWindowSwPackAutoDownRR: 0,
    frontBuckleSwitch: 'SWITCH_OFF',
    frontOccupancySwitch: 'SWITCH_ON',
    rearLeftBuckleSwitch: 'SWITCH_OFF',
    rearCenterOccupancySwitch: 'SWITCH_OFF',
    rearLeftOccupancySwitch: 1,
    rearRightOccupancySwitch: 'SWITCH_OFF',
    brakePressed: 0,
    rearHVACButtonPressed: 0,
    rearCenterBuckleSwitch: 'SWITCH_OFF',
  };
  let encoded0 = messageSchema.encode(data0);
  expect(encoded0).toEqual(buffer('0056555500005945'));
  let decoded0 = messageSchema.decode(buffer('0056555500005945'));
  expect(decoded0).toEqual(data0);
});

test('seat controls', async () => {
  let cs = CanSchema.loadFile<Messages>('js/__test__/files/model-y.kcd');
  let messageSchema = cs.getMessageSchemaByName('ID4F3SeatControl');

  let encodedForward = messageSchema.encode({
    frontLeftSeatTrackForward: 1,
    frontLeftSeatTrackBackward: 0,
  });
  expect(encodedForward).toEqual(buffer('040000'));

  let encodedBackward = messageSchema.encode({
    frontLeftSeatTrackForward: 0,
    frontLeftSeatTrackBackward: 1,
  });
  expect(encodedBackward).toEqual(buffer('080000'));
});
