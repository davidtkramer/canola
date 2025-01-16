import { test, expect, describe } from "vitest";
import { BitStruct } from "../parser/bitstruct.js";
import { buffer } from "./util.js";

test("packing and unpacking", () => {
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
  expect(packed).toEqual(buffer("a8e1489f407e0818710fcd35a85880"));

  let unpacked = struct.unpack(packed);
  expect(unpacked.a).toBe(data.a);
  expect(unpacked.b).toBe(data.b);
  expect(unpacked.c).toBe(data.c);
  expect(unpacked.d).toBe(data.d);
  expect(unpacked.e).toBe(data.e);
  expect(unpacked.f).toBe(2000.123046875);
  expect(unpacked.g).toBe(data.g);
});

describe("unsigned integers", () => {
  test("packing unsigned integer into large buffer", () => {
    let struct = new BitStruct([{ name: "foo", type: "u", size: 64 }]);
    let packed = struct.pack({ foo: 3 });
    expect(packed).toEqual(buffer("0000000000000003"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: 3 });
  });

  test("packing unsigned integer > Number.MAX_SAFE_INTEGER", () => {
    let struct = new BitStruct([{ name: "num", type: "u", size: 64 }]);
    let packed = struct.pack({ num: 2n ** 64n - 1n });
    expect(packed).toEqual(buffer("ffffffffffffffff"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ num: 2n ** 64n - 1n });
  });

  test("packing unsigned integer outside allowed range", () => {
    let struct = new BitStruct([{ name: "num", type: "u", size: 64 }]);
    expect(() => {
      struct.pack({ num: 2n ** 64n });
    }).toThrowError(
      "u64 requires 0 <= integer <= 18446744073709551615 (got 18446744073709551616)"
    );
  });
});

describe("signed integers", () => {
  test("packing signed integer into large buffer", () => {
    let struct = new BitStruct([{ name: "foo", type: "s", size: 64 }]);
    let packed = struct.pack({ foo: -100 });
    console.log("packed", packed);
    expect(packed).toEqual(buffer("ffffffffffffff9c"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: -100 });
  });

  test("packing signed integer > Number.MAX_SAFE_INTEGER", () => {
    let struct = new BitStruct([{ name: "num", type: "s", size: 64 }]);
    let packed = struct.pack({ num: -(2n ** 63n) });
    expect(packed).toEqual(buffer("8000000000000000"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ num: -(2n ** 63n) });
  });

  test("packing signed integer outside allowed range", () => {
    let struct = new BitStruct([{ name: "num", type: "s", size: 64 }]);
    expect(() => {
      struct.pack({ num: -(2n ** 63n + 1n) });
    }).toThrowError(
      "s64 requires -9223372036854775808 <= integer <= 9223372036854775807 (got -9223372036854775809)"
    );
  });
});

describe("floats", () => {
  test("packing 32-bit float", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 32 }]);
    let packed = struct.pack({ foo: 3.14 });
    expect(packed).toEqual(buffer("4048f5c3"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: 3.140000104904175 });
  });

  test("packing 64-bit float", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 64 }]);
    let packed = struct.pack({ foo: 3.14159265359 });
    expect(packed).toEqual(buffer("400921fb54442eea"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: 3.14159265359 });
  });

  test("packing maximum 64-bit float value", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 64 }]);
    let packed = struct.pack({ foo: Number.MAX_VALUE });
    expect(packed).toEqual(buffer("7fefffffffffffff"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: Number.MAX_VALUE });
  });

  test("packing minimum 64-bit float value", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 64 }]);
    let packed = struct.pack({ foo: -Number.MAX_VALUE });
    expect(packed).toEqual(buffer("ffefffffffffffff"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: -Number.MAX_VALUE });
  });

  test("packing float into large buffer", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 64 }]);
    let packed = struct.pack({ foo: 0.3 });
    expect(packed).toEqual(buffer("3fd3333333333333"));
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: 0.3 });
  });

  test("packing small float with high precision", () => {
    let struct = new BitStruct([{ name: "foo", type: "f", size: 64 }]);
    let packed = struct.pack({ foo: 0.1 + 0.2 });
    let unpacked = struct.unpack(packed);
    expect(unpacked).toEqual({ foo: 0.30000000000000004 });
  });

  test("packing invalid float size", () => {
    expect(() => {
      let struct = new BitStruct([{ name: "foo", type: "f", size: 16 }]);
      struct.pack({ foo: 1.0 });
    }).toThrowError("Expected float size of 32 or 64 bits (got 16)");
  });
});
