import { test, expect } from "vitest";
import { execSync } from "child_process";

import { CanSocket, type CanFrame } from "../index.js";
import { waitFor, sleep } from "./util.js";

test("errors if can interface does not exist", () => {
  expect(() => {
    new CanSocket("fake");
  }).toThrowError("Could not find interface 'fake': No such device");
});

test("cannot send more than 8 bytes in can frame data", () => {
  let socket = new CanSocket("vcan0");
  expect(() => {
    socket.write(
      123,
      Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xee])
    );
  }).toThrowError("CAN frame data cannot exceed 8 bytes");
});

test("cannot write to a closed socket", () => {
  let socket = new CanSocket("vcan0");
  socket.close();
  expect(() => {
    socket.write(
      123,
      Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef])
    );
  }).toThrowError("Socket is closed");
});

test("reads and writes a message", async () => {
  let promise = new Promise<CanFrame>((resolve) => {
    let reader = new CanSocket("vcan0");
    reader.on("message", (frame) => {
      resolve(frame);
    });
  });

  let socket = new CanSocket("vcan0");
  socket.write(
    123,
    Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef])
  );

  let frame = await promise;

  expect(frame.id).toBe(123);
  expect(frame.data).toEqual(
    Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef])
  );
});

test("queues messages when socket buffer is exhausted (EWOULDBLOCK, EAGAIN)", async (context) => {
  execSync("sudo ./test-scripts.sh throttle 96");
  context.onTestFinished(() => {
    execSync("sudo ./test-scripts.sh unthrottle");
  });

  let total = 0;
  let reader = new CanSocket("vcan0");
  reader.on("message", () => {
    total++;
  });

  let socket = new CanSocket("vcan0");
  socket.setSendBufferSize(2304);
  let buffer = Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef]);

  for (let i = 0; i < 14; i++) {
    socket.write(123, buffer);
  }
  expect(socket.getWriteQueueSize()).toBe(2);

  await waitFor(() => {
    expect(total).toBe(14);
  });
  expect(socket.getWriteQueueSize()).toBe(0);
});

test("queues messages when system buffer is exhausted (ENOBUFS)", async (context) => {
  execSync("sudo ./test-scripts.sh throttle 16");
  context.onTestFinished(() => {
    execSync("sudo ./test-scripts.sh unthrottle");
  });

  let total = 0;
  let reader = new CanSocket("vcan0");
  reader.on("message", () => {
    total++;
  });

  let socket = new CanSocket("vcan0");
  let buffer = Buffer.from([0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef]);

  for (let i = 0; i < 5; i++) {
    socket.write(123, buffer);
  }
  // can send 2 messages immediately and 3 are queued
  expect(socket.getWriteQueueSize()).toBe(3);
  // Block the main thread to prevent write polling while giving traffic
  // control time to process frames. This ensures the send buffer
  // has enough space to accept multiple queued messages when we resume.
  sleep(100);

  // Read frames and send pending writes
  await waitFor(() => {
    expect(total).toBe(5);
  });
  expect(socket.getWriteQueueSize()).toBe(0);
  sleep(100);

  for (let i = 0; i < 3; i++) {
    socket.write(123, buffer);
  }
  // Should be able to another 2 messages immediately and have 1 queued
  expect(socket.getWriteQueueSize()).toBe(1);
  sleep(100);

  await waitFor(() => {
    expect(total).toBe(8);
  });
  expect(socket.getWriteQueueSize()).toBe(0);
});
