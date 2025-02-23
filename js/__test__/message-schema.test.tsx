import { expect } from 'vitest';
import { buffer, h, test } from './utils/index.js';

test('labels', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={1}>
      <signal name='signal' offset={0} length={1}>
        <value min={0} max={1} />
        <labelset>
          <label name='OFF' value={0} />
          <label name='ON' value={1} />
        </labelset>
      </signal>
    </message>,
  );

  expect(schema).toRoundTrip({ signal: 'ON' }, '01');
  expect(schema).toRoundTrip({ signal: 'OFF' }, '00');
});

test('unsigned integer', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={1}>
      <signal name='signalA' offset={0} length={8}>
        <value min={0} max={255} />
      </signal>
    </message>,
  );

  expect(schema).toRoundTrip({ signalA: 100 }, '64');
});

test('double', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={8}>
      <signal name='signal' offset={0} length={64}>
        <value type='double' />
      </signal>
    </message>,
  );

  expect(schema).toRoundTrip({ signal: Number.MAX_VALUE }, 'ffffffffffffef7f');
  expect(schema).toRoundTrip({ signal: 3.141592653589793 }, '182d4454fb210940');
});

test('scaled unsigned integer', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={4}>
      <signal name='signal' offset={0} length={32}>
        <value type='single' slope={1.5} intercept={10} />
      </signal>
    </message>,
  );
  expect(schema).toRoundTrip({ signal: 10 }, '00000000');
  expect(schema).toRoundTrip({ signal: 11.5 }, '0000803f');
});

test('scaled signed integer', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={4}>
      <signal name='temp' offset={7} length={12} endianess='big'>
        <value
          min={229.52}
          max={270.47}
          slope={0.01}
          intercept={250}
          unit='degK'
          type='signed'
        />
      </signal>
    </message>,
  );
  expect(schema).toRoundTrip({ temp: 249.2 }, '01f60000');
});

test('scaled float', () => {});

test('scaled double', () => {});

test('multiplex with labeled mux signal', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={1}>
      <multiplex name='muxIndex' offset={0} length={2}>
        <value min={0} max={2} />
        <labelset>
          <label name='INDEX_0' value={0} />
          <label name='INDEX_1' value={1} />
        </labelset>
        <muxgroup count={0}>
          <signal name='signalA' offset={3} length={1}>
            <value min={0} max={1} />
          </signal>
        </muxgroup>
        <muxgroup count={1}>
          <signal name='signalB' offset={3} length={2}>
            <value min={0} max={3} />
          </signal>
        </muxgroup>
      </multiplex>
    </message>,
  );

  expect(schema).toRoundTrip({ muxIndex: 'INDEX_0', signalA: 1 }, '08');
  expect(schema).toRoundTrip({ muxIndex: 'INDEX_1', signalB: 3 }, '19');
});

test('multiplex with numeric mux signal', (ctx) => {
  let schema = ctx.createMessageSchema(
    <message length={3}>
      <multiplex name='ABS_InfoMux' offset={16} length={2}>
        <muxgroup count={0}>
          <signal name='Info0' offset={0} length={8} />
          <signal name='Info1' offset={8} length={8} />
        </muxgroup>
        <muxgroup count={1}>
          <signal name='Info2' offset={0} length={8} />
          <signal name='Info3' offset={8} length={8} />
        </muxgroup>
        <muxgroup count={2}>
          <signal name='Info4' offset={0} length={8} />
          <signal name='Info5' offset={8} length={8} />
        </muxgroup>
        <muxgroup count={3}>
          <signal name='Info6' offset={0} length={8} />
          <signal name='Info7' offset={8} length={8} />
        </muxgroup>
      </multiplex>
    </message>,
  );

  let data = { ABS_InfoMux: 0, Info0: 1, Info1: 2 } as const;
  expect(schema.encode(data)).toEqual(buffer('0102'));
  expect(schema).toRoundTrip({ ABS_InfoMux: 0, Info0: 1, Info1: 2 }, '000102');
  expect(schema).toRoundTrip({ ABS_InfoMux: 1, Info2: 3, Info3: 4 }, '0304');
  expect(schema).toRoundTrip({ ABS_InfoMux: 2, Info4: 5, Info5: 6 }, '0506');
  expect(schema).toRoundTrip({ ABS_InfoMux: 3, Info6: 7, Info7: 8 }, '0708');
});

test('container messages', () => {});

test('validates min and max', () => {});
