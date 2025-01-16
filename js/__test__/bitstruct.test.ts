import { test, expect } from "vitest";
import { BitStruct } from "../parser/bitstruct.js";

test("bit struct", () => {
  let struct = new BitStruct([
    { name: "a", type: "u", size: 4 },
    { name: "b", type: "u", size: 1 },
    { type: "p", size: 3 },
    { name: "c", type: "u", size: 2 },
    { name: "d", type: "u", size: 2 },
    { type: "p", size: 3 },
    { name: "e", type: "s", size: 4 },
    { name: "f", type: "f", size: 32 },
    { name: "g", type: "f", size: 64 },
  ]);

  let data = {
    a: 10,
    b: 1,
    c: 3,
    d: 2,
    e: -6,
    f: 2000.123,
    g: 10000.9876,
  };

  let packed = struct.pack(data);
  expect(packed).toEqual(
    Buffer.from([
      0xa8, 0xe1, 0x48, 0x9f, 0x40, 0x7e, 0x08, 0x18, 0x71, 0x0f, 0xcd, 0x35,
      0xa8, 0x58, 0x80,
    ])
  );

  let unpacked = struct.unpack(packed);
  expect(unpacked.a).toBe(data.a);
  expect(unpacked.b).toBe(data.b);
  expect(unpacked.c).toBe(data.c);
  expect(unpacked.d).toBe(data.d);
  expect(unpacked.e).toBe(data.e);
  expect(unpacked.f).toBe(2000.123046875);
  expect(unpacked.g).toBe(data.g);
});

test("foo", () => {
  let struct = new BitStruct([{ name: "foo", type: "u", size: 4 }]);
  let packed = struct.pack({ foo: 10 });
  console.log('packed', packed);
  let foo = packed.at(0);
  console.log("foo", foo?.toString(2));
});

test("padding", () => {
  let struct = new BitStruct([{ name: "foo", type: "u", size: 64 }]);
  let packed = struct.pack({ foo:100 });
  console.log("packed", packed);
  let unpacked = struct.unpack(packed);
  console.log("unpacked", unpacked);
});
