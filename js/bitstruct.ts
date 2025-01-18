type Endian = "big" | "little";
type FormatItemPadding = {
  type: "p";
  size: number;
};
type FormatItemNumber = {
  type: "u" | "s" | "f";
  size: number;
  name: string;
  endian?: Endian;
};
type FormatItem = FormatItemPadding | FormatItemNumber;
type Format = Array<FormatItem>;

const MAX_SAFE_INT_AS_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);

export class BitStruct {
  items: Array<FormatType> = [];
  private size: number;

  constructor(format: Format) {
    for (let item of format) {
      if (item.size == 0) {
        let name = item.type === "p" ? "padding" : item.name;
        throw new Error(`Size cannot be zero in '${name}'`);
      }

      switch (item.type) {
        case "u": {
          let endian = item.endian ?? "big";
          this.items.push(new UnsignedInteger(item.size, item.name, endian));
          break;
        }
        case "s": {
          let endian = item.endian ?? "big";
          this.items.push(new SignedInteger(item.size, item.name, endian));
          break;
        }
        case "f": {
          let endian = item.endian ?? "big";
          this.items.push(new Float(item.size, item.name, endian));
          break;
        }
        case "p": {
          this.items.push(new ZeroPadding(item.size));
          break;
        }
        default:
          throw new Error(`Unsupported type '${(item as any).type}'`);
      }
    }

    this.size = this.items.reduce((sum, item) => sum + item.size, 0);
  }

  pack(data: Record<string, string | number | bigint>) {
    let bits = "";

    for (let item of this.items) {
      if (item.kind === "p") {
        bits += item.pack();
      } else {
        let value = data[item.name];
        if (value === undefined) {
          throw new Error(`Missing value for '${item.name}'`);
        }
        bits = this.packValue(item, value, bits);
      }
    }

    let tail = bits.length % 8;
    if (tail !== 0) {
      bits += "0".repeat(8 - tail);
    }

    return this.binaryToBytes(bits);
  }

  unpack(
    data: Buffer,
    offset: number = 0,
    allowTruncated = false
  ): Record<string, number | bigint> {
    let bits = "";
    for (let byte of data) {
      bits += byte.toString(2).padStart(8, "0");
    }
    if (offset != 0) {
      bits = bits.slice(offset);
    }

    if (!allowTruncated && this.size > bits.length) {
      throw new Error(
        `unpack requires at least ${this.size} bits (got ${bits.length})`
      );
    }

    offset = 0;
    let result: Record<string, number | bigint> = {};

    for (let item of this.items) {
      if (offset + item.size > bits.length) {
        // Stop unpacking if we ran out of bytes to unpack. Note that this condition will never trigger if `allow_truncated` is not `true` because of the sanity check above.
        return result;
      }

      if (item.kind !== "p") {
        let valueBits = "";

        let byteOrder = "big";
        if (byteOrder === "big") {
          valueBits = bits.slice(offset, offset + item.size);
        } else {
          let valueBitsTmp = bits.slice(offset, offset + item.size);
          let alignedOffset = item.size - ((offset + item.size) % 8);

          while (alignedOffset > 0) {
            valueBits += valueBitsTmp.slice(alignedOffset, alignedOffset + 8);
            valueBitsTmp = valueBitsTmp.slice(0, alignedOffset);
            alignedOffset -= 8;
          }

          valueBits += valueBitsTmp;
        }

        if (item.endian === "little") {
          valueBits = [...valueBits].reverse().join("");
        }

        result[item.name] = item.unpack(valueBits);
      }

      offset += item.size;
    }

    return result;
  }

  private packValue(
    item: Exclude<FormatType, ZeroPadding>,
    value: string | number | bigint,
    bits: string
  ): string {
    let valueBits = item.pack(value);

    if (item.endian === "little") {
      valueBits = [...valueBits].reverse().join("");
    }

    let byteOrder = "big"; // TODO: implement byte order option
    if (byteOrder === "big") {
      bits += valueBits;
    } else {
      let alignedOffset = valueBits.length - (8 - (bits.length % 8));
      while (alignedOffset > 0) {
        bits += valueBits.substring(alignedOffset);
        valueBits = valueBits.substring(0, alignedOffset);
        alignedOffset -= 8;
      }
      bits += valueBits;
    }

    return bits;
  }

  private binaryToBytes(bits: string): Buffer {
    let bytes = bits.match(/.{8}/g)!.map((byte) => parseInt(byte, 2));
    return Buffer.from(bytes);
  }
}

type FormatType = UnsignedInteger | SignedInteger | Float | ZeroPadding;

class UnsignedInteger {
  kind: "u" = "u";
  size: number;
  name: string;
  maximum: bigint;
  endian: Endian;

  constructor(size: number, name: string, endian: Endian) {
    this.size = size;
    this.name = name;
    this.endian = endian;
    this.maximum = (1n << BigInt(size)) - 1n;
  }

  pack(data: number | string | bigint): string {
    let value = BigInt(data);

    if (value < 0n || value > this.maximum) {
      throw new Error(
        `u${this.size} requires 0 <= integer <= ${this.maximum} (got ${data})`
      );
    }

    return (value + (1n << BigInt(this.size))).toString(2).slice(1);
  }

  unpack(bits: string): number | bigint {
    let value = BigInt(`0b${bits}`);

    if (value <= MAX_SAFE_INT_AS_BIGINT) {
      return Number(value);
    } else {
      return value;
    }
  }
}

class SignedInteger {
  kind: "s" = "s";
  name: string;
  minimum: bigint;
  maximum: bigint;
  endian: Endian;
  size: number;

  constructor(size: number, name: string, endian: Endian) {
    this.size = size;
    this.name = name;
    this.endian = endian;
    this.minimum = (-2n) ** (BigInt(size) - 1n);
    this.maximum = -this.minimum - 1n;
  }

  pack(data: number | string | bigint): string {
    let value = BigInt(data);

    if (value < this.minimum || value > this.maximum) {
      throw new Error(
        `s${this.size} requires ${this.minimum} <= integer <= ${this.maximum} (got ${data})`
      );
    }

    let size = BigInt(this.size);
    if (value < 0) {
      value += 1n << size;
    }
    value += 1n << size;

    return value.toString(2).slice(1);
  }

  unpack(bits: string): number | bigint {
    let value = BigInt(`0b${bits}`);

    if (bits[0] === "1") {
      value -= 1n << BigInt(bits.length);
    }

    if (value >= -MAX_SAFE_INT_AS_BIGINT && value <= MAX_SAFE_INT_AS_BIGINT) {
      return Number(value);
    } else {
      return value;
    }
  }
}

class Float {
  kind: "f" = "f";
  name: string;
  endian: Endian;
  size: number;

  constructor(size: number, name: string, endian: Endian) {
    this.size = size;
    this.name = name;
    this.endian = endian;
  }

  pack(data: number | string | bigint): string {
    let value =
      typeof data === "string"
        ? parseFloat(data)
        : typeof data === "bigint"
        ? Number(data)
        : data;

    let buffer = Buffer.alloc(this.size / 8);

    if (this.size === 32) {
      buffer.writeFloatBE(value, 0);
    } else if (this.size === 64) {
      buffer.writeDoubleBE(value, 0);
    } else {
      throw new Error(
        `Expected float size of 32 or 64 bits (got ${this.size})`
      );
    }

    let result = "";
    for (let byte of buffer) {
      result += byte.toString(2).padStart(8, "0");
    }
    return result;
  }

  unpack(bits: string): number {
    const buffer = Buffer.alloc(this.size / 8);
    for (let i = 0; i < bits.length; i += 8) {
      buffer[i / 8] = parseInt(bits.slice(i, i + 8), 2);
    }

    if (this.size === 32) {
      return buffer.readFloatBE(0);
    } else if (this.size === 64) {
      return buffer.readDoubleBE(0);
    } else {
      throw new Error(
        `Expected float size of 32 or 64 bits (got ${this.size})`
      );
    }
  }
}

class ZeroPadding {
  kind: "p" = "p";
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  pack(): string {
    return "0".repeat(this.size);
  }
}
