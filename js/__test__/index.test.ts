import { test, expect } from "vitest";
import { promises as fs } from "fs";
import path from "path";
import { CanSocket, type CanFrame } from "../index.js";
import { loadString } from "../parser/database.js";
import { buffer, waitFor, sleep, throttle, unthrottle } from "./util.js";

test("loads kcd file", async () => {
  let file = await fs.readFile(
    path.join(__dirname, "./multiplex.kcd"),
    "utf-8"
  );
  let db = loadString(file.replace(/>\s+</g, "><").trim());
  let message = db.messages.find((message) => message.frameId === 0x3c2)!;

  let data = {
    VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_1",
    VCLEFT_swcLeftTiltRight: "SWITCH_OFF",
    VCLEFT_swcLeftPressed: "SWITCH_OFF",
    VCLEFT_swcRightTiltLeft: "SWITCH_OFF",
    VCLEFT_swcRightTiltRight: "SWITCH_OFF",
    VCLEFT_swcRightPressed: "SWITCH_OFF",
    VCLEFT_swcLeftTiltLeft: "SWITCH_OFF",
    VCLEFT_swcLeftScrollTicks: -1,
    VCLEFT_swcRightScrollTicks: 0,
    VCLEFT_btnWindowUpLR: 0,
    VCLEFT_btnWindowAutoUpLR: 0,
    VCLEFT_btnWindowDownLR: 0,
    VCLEFT_btnWindowAutoDownLR: 0,
    VCLEFT_2RowSeatReclineSwitch: 0,
    VCLEFT_2RowSeatCenterSwitch: 0,
    VCLEFT_2RowSeatLeftFoldFlatSwitc: 0,
    VCLEFT_2RowSeatRightFoldFlatSwit: 0,
    VCLEFT_2RowSeatBothFoldFlatSwitc: 0,
    VCLEFT_swcLeftDoublePress: 0,
    VCLEFT_swcRightDoublePress: 0,
  };
  let encoded = message.encode(data);
  console.log("encoded", encoded);

  // let decoded = message.decode(result)
  // console.log('decoded', decoded);
});

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

test.runIf(!process.env["CI"])(
  "queues messages when socket buffer is exhausted (EWOULDBLOCK, EAGAIN)",
  async (context) => {
    throttle(96);
    context.onTestFinished(unthrottle);

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
  }
);

test.runIf(!process.env["CI"])(
  "queues messages when system buffer is exhausted (ENOBUFS)",
  async (context) => {
    throttle(16);
    context.onTestFinished(unthrottle);

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
  }
);

// console.log("frameId", message.frameId);
// console.log("name", message.name);
// console.log("length", message.length);
// console.log("headerId", message.headerId);
// console.log("headerByteOrder", message.headerByteOrder);
// console.log("isFd", message.isFd);
// console.log("isExtendedFrame", message.isExtendedFrame);
// console.log("unusedBitPattern", message.unusedBitPattern);
// console.log("comments", message.comments);
// console.log("protocol", message.protocol);
// console.log('signalTree', JSON.stringify(message.signalTree, null, 2));
// console.log('signals', JSON.stringify(message.signals, null, 2));
// console.log("isContainer", message.isContainer);
// console.log("comment", message.comment);
// console.log("isMultiplexed", message.isMultiplexed());

// let data = {
//   VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_1",
//   VCLEFT_swcLeftTiltRight: "SWITCH_OFF",
//   VCLEFT_swcLeftPressed: "SWITCH_OFF",
//   VCLEFT_swcRightTiltLeft: "SWITCH_OFF",
//   VCLEFT_swcRightTiltRight: "SWITCH_OFF",
//   VCLEFT_swcRightPressed: "SWITCH_OFF",
//   VCLEFT_swcLeftTiltLeft: "SWITCH_OFF",
//   VCLEFT_swcLeftScrollTicks: -1,
//   VCLEFT_swcRightScrollTicks: 0,
//   VCLEFT_btnWindowUpLR: 0,
//   VCLEFT_btnWindowAutoUpLR: 0,
//   VCLEFT_btnWindowDownLR: 0,
//   VCLEFT_btnWindowAutoDownLR: 0,
//   VCLEFT_2RowSeatReclineSwitch: 0,
//   VCLEFT_2RowSeatCenterSwitch: 0,
//   VCLEFT_2RowSeatLeftFoldFlatSwitc: 0,
//   VCLEFT_2RowSeatRightFoldFlatSwit: 0,
//   VCLEFT_2RowSeatBothFoldFlatSwitc: 0,
//   VCLEFT_swcLeftDoublePress: 0,
//   VCLEFT_swcRightDoublePress: 0,
// };
// let result = message.encode(data);
