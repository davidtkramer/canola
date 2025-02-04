import { beforeAll, expect, test } from 'vitest';
import path from 'path';
import { CanSchema, generateTypes } from '..';
import { buffer } from './utils.js';
import type {
  Messages,
  MultiplexedMessage_Signals_0,
  MultiplexedMessage_Signals_1
} from './files/can-schema.test.types.js';

beforeAll(async () => {
  await generateTypes(
    CanSchema.loadFile('js/__test__/files/can-schema.test.kcd').messages,
    path.join(process.cwd(), 'js/__test__/files/can-schema.test.types.ts'),
  );
});

test('encodes and decodes multiplexed messages', async () => {
  let cs = CanSchema.loadFile<Messages>('js/__test__/files/can-schema.test.kcd');
  let messageSchema = cs.getMessageSchemaByName('MultiplexedMessage');

  let data0: MultiplexedMessage_Signals_0 = {
    muxIndex: 'INDEX_0',
    signalA: 1,
    signalB: 1
  };
  let encoded0 = messageSchema.encode(data0);
  expect(encoded0).toEqual(buffer('18'));
  let decoded0 = messageSchema.decode(encoded0);
  expect(decoded0).toEqual(data0);

  let data1: MultiplexedMessage_Signals_1 = {
    muxIndex: 'INDEX_1',
    signalC: 2,
    signalD: 1,
  };
  let encoded1 = messageSchema.encode(data1);
  expect(encoded1).toEqual(buffer('31'));
  let decoded1 = messageSchema.decode(encoded1);
  expect(decoded1).toEqual(data1);
});
