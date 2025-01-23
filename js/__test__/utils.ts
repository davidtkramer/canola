import { execSync } from "child_process";

export function waitFor(callback, { timeout = 4000, interval = 50 } = {}) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
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
      let error = lastError || new Error("Timed out in waitFor.");
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
  return Buffer.from(data.replaceAll(/\s/g, ''), "hex");
}

export function throttle(bytes: number) {
  let sudo = process.env["CI"] ? "" : "sudo ";
  execSync(`${sudo}./test-scripts.sh throttle ${bytes}`);
}

export function unthrottle() {
  let sudo = process.env["CI"] ? "" : "sudo ";
  execSync(`${sudo}./test-scripts.sh unthrottle`);
}