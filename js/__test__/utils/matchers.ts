import { expect } from 'vitest';
import { MessageSchema } from '../../message-schema.js';

interface CustomMatchers<R = unknown> {
  toRoundTrip: (
    data: R extends MessageSchema<infer T> ? T['signals'] : never,
    hex: string,
  ) => R;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
  toRoundTrip(schema: MessageSchema, data: Record<string, string | number>, hex: string) {
    let { isNot, equals } = this;

    let buffer = Buffer.from(hex.replaceAll(/\s/g, ''), 'hex');
    let encoded = schema.encode(data);
    if (!equals(encoded, buffer)) {
      let actual = encoded.toString('hex');
      let expected = buffer.toString('hex');
      return {
        pass: false,
        message: () => `Expected ${actual} to equal ${expected}`,
      };
    }

    let decoded = schema.decode(encoded);
    if (!equals(decoded, data)) {
      let actual = JSON.stringify(decoded);
      let expected = JSON.stringify(data);
      return {
        pass: false,
        message: () => `Expected ${actual} to equal ${expected}`,
      };
    }

    return {
      pass: true,
      message: () =>
        isNot ? `Expected data to not round trip to/from ${buffer.toString('hex')}` : '',
    };
  },
});
