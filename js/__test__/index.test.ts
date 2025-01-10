import { test, expect } from "vitest";
import { execSync } from "child_process";
import { CanSocket, CanSocketNative, type CanFrame } from "../index.js";
import { buffer, waitFor, sleep } from "./util.js";

test.only("ci test", () => {
  console.log("CanSocketNative:")
  console.log(CanSocketNative);
})

test("errors if can interface does not exist", () => {
  expect(() => {
    new CanSocket("fake");
  }).toThrowError("Could not find interface 'fake': No such device");
});

test("cannot send more than 8 bytes in can frame data", () => {
  let socket = new CanSocket("vcan0");
  expect(() => {
    socket.write(123, buffer("deadbeefdeadbeeeef"));
  }).toThrowError("CAN frame data cannot exceed 8 bytes");
});

test("cannot write to a closed socket", () => {
  let socket = new CanSocket("vcan0");
  socket.close();
  expect(() => {
    socket.write(123, buffer("deadbeefdeadbeef"));
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
  socket.write(123, buffer("deadbeefdeadbeef"));

  let frame = await promise;

  expect(frame.id).toBe(123);
  expect(frame.data).toEqual(buffer("deadbeefdeadbeef"));
});

test("filters received messages", async () => {
  let frames: Array<CanFrame> = [];
  let reader = new CanSocket("vcan0");
  reader.setFilters([
    { id: 124, mask: 0x7ff },
    { id: 125, mask: 0x7ff },
  ]);
  reader.on("message", (frame) => {
    frames.unshift(frame);
  });

  let socket = new CanSocket("vcan0");
  socket.write(123, buffer("deadbeefdeadbeef"));
  socket.write(124, buffer("deadbeefdeadbeef"));
  socket.write(125, buffer("deadbeefdeadbeef"));

  // wait for last message to arrive
  await waitFor(() => {
    expect(frames[0]?.id).toBe(125);
  });
  expect(frames[1].id).toBe(124);
  expect(frames).toHaveLength(2);
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

  for (let i = 0; i < 14; i++) {
    socket.write(123, buffer("deadbeefdeadbeef"));
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
  for (let i = 0; i < 5; i++) {
    socket.write(123, buffer("deadbeefdeadbeef"));
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
    socket.write(123, buffer("deadbeefdeadbeef"));
  }
  // Should be able to another 2 messages immediately and have 1 queued
  expect(socket.getWriteQueueSize()).toBe(1);
  sleep(100);

  await waitFor(() => {
    expect(total).toBe(8);
  });
  expect(socket.getWriteQueueSize()).toBe(0);
});
