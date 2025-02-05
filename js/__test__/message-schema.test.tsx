import { expect, test } from 'vitest';
import { buffer, kcd } from './utils.js';
import { h, Message, Signal, Value } from './jsx.js';

function s(args: any) {}

test('jsx', () => {
  let schema = s(
    Message({ id: '0x123', name: 'TestMessage', length: '4' }, [
      Signal({ name: 'signal', offset: '0', length: '32' }, [
        Value({ type: 'single', slope: '1.5', intercept: '10' }),
      ]),
    ]),
  );
});

test('enum', () => {});

test('unsigned integer', () => {});

test('double', () => {
  let schema = kcd.message`
    <Message id="0x123" name="TestMessage" length="8">
      <Signal name="signal" offset="0" length="64">
        <Value type="double" />
      </Signal>
    </Message>
  `;
  let data = { signal: Number.MAX_VALUE };
  expect(schema.encode(data)).toEqual(buffer('ffffffffffffef7f'));
  expect(schema.roundTrip(data)).toEqual(data);

  data = { signal: 3.141592653589793 };
  expect(schema.encode(data)).toEqual(buffer('182d4454fb210940'));
  expect(schema.roundTrip(data)).toEqual(data);
});

test('scaled unsigned integer', () => {
  let schema = kcd.message`
    <Message id="0x123" name="TestMessage" length="4">
      <Signal name="signal" offset="0" length="32">
        <Value type="single" slope="1.5" intercept="10" />
      </Signal>
    </Message>
  `;
  let data = { signal: 10 };
  expect(schema.encode(data)).toEqual(buffer('00000000'));
  expect(schema.roundTrip(data)).toEqual(data);

  data = { signal: 11.5 };
  expect(schema.encode(data)).toEqual(buffer('0000803f'));
  expect(schema.roundTrip(data)).toEqual(data);
});

test('scaled signed integer', () => {
  let schema = kcd.message`
    <Message id="0x123" name="TestMessage" length="4">
      <Signal name="Temperature" offset="7" length="12" endianess="big">
        <Value min="229.52" max="270.47" slope="0.01" intercept="250" unit="degK" type="signed" />
      </Signal>
    </Message>
  `;
  let data = { Temperature: 249.2 };
  expect(schema.encode(data)).toEqual(buffer('01f60000'));
  expect(schema.roundTrip(data)).toEqual(data);
});

test('scaled float', () => {});

test('scaled double', () => {});

test('multiplex with labeled mux signal', () => {
  let schema = kcd.message`
    <Message id="0x123" name="TestMessage" length="1">
      <Multiplex name="muxIndex" offset="0" length="2">
        <Value min="0" max="2" />
        <LabelSet>
          <Label name="INDEX_0" value="0" />
          <Label name="INDEX_1" value="1" />
        </LabelSet>
        <MuxGroup count="0">
          <Signal name="signalA" offset="3">
            <Value min="0" max="1" />
          </Signal>
        </MuxGroup>
        <MuxGroup count="1">
          <Signal name="signalB" offset="3" length="2">
            <Value min="0" max="3" />
          </Signal>
        </MuxGroup>
      </Multiplex>
    </Message>
  `;

  let data0 = { muxIndex: 'INDEX_0', signalA: 1 };
  expect(schema.encode(data0)).toEqual(buffer('08'));
  expect(schema.roundTrip(data0)).toEqual(data0);

  let data1 = { muxIndex: 'INDEX_1', signalB: 3 };
  expect(schema.encode(data1)).toEqual(buffer('19'));
  expect(schema.roundTrip(data1)).toEqual(data1);
});

test('multiplex without mux signal', () => {});

test('container messages', () => {});

test('validates min and max', () => {});

function hex(value: Buffer) {
  console.log(value.toString('hex'));
}
