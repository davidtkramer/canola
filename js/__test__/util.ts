export function waitFor(callback, { timeout = 4000, interval = 50 } = {}) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  return new Promise((resolve, reject) => {
    let lastError: any;
    const timeoutId = setTimeout(handleTimeout, timeout);

    checkCallback();
    const intervalId = setInterval(checkCallback, interval);

    function checkCallback() {
      try {
        const result = callback();
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        resolve(result);
      } catch (error) {
        lastError = error;
      }
    }

    function handleTimeout() {
      const error = lastError || new Error("Timed out in waitFor.");
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      reject(error);
    }
  });
}

export function sleep(timeout: number) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    // Busy wait
  }
}
