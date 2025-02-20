import { type TestAPI, type TestFunction, test as originalTest } from 'vitest';
import { execSync } from 'child_process';
export { h } from './jsx-runtime.js';
import './matchers.js';
import type { MessageSchema } from '../../message-schema.js';
import type { TestMessages } from '../files/generated/index.js';
import { createMessageSchema, type ToUpperCamelCase } from './test-wrapper.js';
import type { h } from './jsx-runtime.js';

export function waitFor(callback: any, { timeout = 4000, interval = 50 } = {}) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  return new Promise((resolve, reject) => {
    let lastError: any;
    let timeoutId = setTimeout(handleTimeout, timeout);

    checkCallback();
    let intervalId = setInterval(checkCallback, interval);

    function checkCallback() {
      try {
        let result = callback();
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        resolve(result);
      } catch (error) {
        lastError = error;
      }
    }

    function handleTimeout() {
      let error = lastError || new Error('Timed out in waitFor.');
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      reject(error);
    }
  });
}

export function sleep(timeout: number) {
  let start = Date.now();
  while (Date.now() - start < timeout) {
    // Busy wait
  }
}

export function buffer(data: string) {
  return Buffer.from(data.replaceAll(/\s/g, ''), 'hex');
}

export function throttle(bytes: number) {
  let sudo = process.env['CI'] ? '' : 'sudo ';
  execSync(`${sudo}./test-scripts.sh throttle ${bytes}`);
}

export function unthrottle() {
  let sudo = process.env['CI'] ? '' : 'sudo ';
  execSync(`${sudo}./test-scripts.sh unthrottle`);
}

export type CreateMessageSchema<Name extends string> = {
  (node: h.JSX.Element): MessageSchema<TestMessages[ToUpperCamelCase<Name>]>;
};
function _test<Name extends string>(
  name: Name,
  fn: TestFunction<{ createMessageSchema: CreateMessageSchema<Name> }>,
) {
  originalTest(name, (context) => {
    let _createMessageSchema: CreateMessageSchema<Name> = (node) =>
      createMessageSchema(name, node);
    (context as any).createMessageSchema = _createMessageSchema;
    fn(context as any);
  });
}

export const test: typeof _test & TestAPI = Object.assign(_test, originalTest);
