import { beforeAll, expect, test } from 'vitest';
import path from 'path';
import { CanSchema } from '../can-schema.js';
import { generateTypes } from '../type-generator.js';
import { buffer } from './utils.js';
import {
  Messages,
  SwitchStatus_Signals_0,
  SwitchStatus_Signals_1
} from './files/can-schema.test.types.js';

beforeAll(async () => {
  await generateTypes(
    CanSchema.loadFile('js/__test__/files/multiplex.kcd').messages,
    path.join(process.cwd(), 'js/__test__/files/can-schema.test.types.ts'),
  );
});

test('encodes and decodes multiplexed messages', async () => {
  let cs = CanSchema.loadFile<Messages>('js/__test__/files/multiplex.kcd');
  let messageSchema = cs.getMessageSchemaByName('SwitchStatus');

  let data0: SwitchStatus_Signals_0 = {
    switchStatusIndex: 'INDEX_0',
    hazardButtonPressed: 1,
    brakeSwitchPressed: 1,
    frontSeatTrackBack: 'OFF'
  };
  let encoded0 = messageSchema.encode(data0);
  expect(encoded0).toEqual(buffer('1801000000000000'));
  let decoded0 = messageSchema.decode(encoded0);
  expect(decoded0).toEqual(data0);

  let data1: SwitchStatus_Signals_1 = {
    switchStatusIndex: 'INDEX_1',
    swcLeftTiltRight: "ON",
    swcLeftScrollTicks: -2,
    swcRightScrollTicks: 4,
    btnWindowUpLR: 1
  };
  let encoded1 = messageSchema.encode(data1);
  console.log(encoded1.toString('hex'));
  expect(encoded1).toEqual(buffer('11003e0401000000'));
  let decoded1 = messageSchema.decode(encoded1);
  expect(decoded1).toEqual(data1);
});
