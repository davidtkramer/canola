import { beforeAll, expect, test } from 'vitest';
import path from 'path';
import { CanSchema, generateTypes } from '..';
import { buffer } from './utils.js';
import type { Messages } from './files/can-schema.test.types.js';

let schema: CanSchema<Messages>;
beforeAll(async () => {
  schema = CanSchema.loadFile('js/__test__/files/can-schema.test.kcd');
  await generateTypes(
    schema.messages,
    path.join(process.cwd(), 'js/__test__/files/can-schema.test.types.ts'),
  );
});

test('encode by name', () => {
  let message = schema.encode({
    name: 'RegularMessage',
    data: { signalA: 1, signalB: 1 },
  });
  expect(message.id).toEqual(0x200);
  expect(message.name).toEqual('RegularMessage');
  expect(message.data).toEqual(buffer('03'));
});

test('encode by id', () => {
  let message = schema.encode({
    id: 0x200,
    data: { signalA: 1, signalB: 1 },
  });
  expect(message.id).toEqual(0x200);
  expect(message.name).toEqual('RegularMessage');
  expect(message.data).toEqual(buffer('03'));
});

test('decode by name', () => {
  let message = schema.decode({
    name: 'RegularMessage',
    data: buffer('03'),
  });
  expect(message.id).toEqual(0x200);
  expect(message.name).toEqual('RegularMessage');
  expect(message.data).toEqual({ signalA: 1, signalB: 1 });
});

test('decode by id', () => {
  let message = schema.decode({
    id: 0x200,
    data: buffer('03'),
  });
  expect(message.id).toEqual(0x200);
  expect(message.name).toEqual('RegularMessage');
  expect(message.data).toEqual({ signalA: 1, signalB: 1 });
});

test('throws error if id and name are both missing', () => {
  expect(() => {
    // @ts-expect-error
    schema.encode({ data: { signalA: 1 } });
  }).toThrowError('Either id or name must be provided');
  expect(() => {
    // @ts-expect-error
    schema.decode({ data: buffer('00') });
  }).toThrowError('Either id or name must be provided');
});

test('throws error if message name not found', () => {
  expect(() => {
    // @ts-expect-error
    schema.encode({ name: 'UnknownMessage', data: { signalA: 1 } });
  }).toThrowError("Unable to find message with name 'UnknownMessage'");
  expect(() => {
    // @ts-expect-error
    schema.decode({ name: 'UnknownMessage', data: buffer('00') });
  }).toThrowError("Unable to find message with name 'UnknownMessage'");
});

test('throws error if message id not found', () => {
  expect(() => {
    // @ts-expect-error
    schema.encode({ id: 0x000, data: { signalA: 1 } });
  }).toThrowError("Unable to find message with id '0'");
  expect(() => {
    schema.decode({ id: 0x000, data: buffer('00') });
  }).toThrowError("Unable to find message with id '0'");
});
