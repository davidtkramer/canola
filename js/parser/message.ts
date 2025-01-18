import { Signal } from "./signal.js";
import type { ByteOrder, Comments, SignalValue } from "./types.js";
import { BitStruct } from "./bitstruct.js";

interface Codec {
  signals: Array<Signal>;
  formats: SignalFormat;
  multiplexers: Record<string, Record<number, Codec>>;
}
interface SignalFormat {
  paddingMask: bigint;
  big: BitStruct;
  little: BitStruct;
}

type SignalMap = Record<string, SignalValue>;
export type SignalBranch = Record<string, Record<number, Array<SignalNode>>>;
export type SignalNode = string | SignalBranch;
type UnionKeys<T> = T extends any ? keyof T : never;

export class Message<T extends SignalMap = SignalMap> {
  public frameId: number;
  public headerId?: number;
  public headerByteOrder: ByteOrder;
  public isExtendedFrame: boolean;
  public isFd: boolean;
  public name: string;
  public length: number;
  public unusedBitPattern: number;
  public signals: Array<Signal>;
  private signalDict: Map<string, Signal>;
  private containedMessages?: Array<Message>;
  public comments?: Comments;
  public senders: Array<string>;
  public sendType?: string;
  public cycleTime?: number;
  public busName?: string;
  private strict: boolean;
  public protocol?: string;
  private codecs?: Codec;
  public signalTree?: Array<SignalNode>;

  constructor(params: {
    frameId: number;
    name: string;
    length: number;
    signals: Array<Signal>;
    containedMessages?: Array<Message>;
    headerId?: number;
    headerByteOrder?: ByteOrder;
    unusedBitPattern?: number;
    comment?: string | Comments;
    senders?: Array<string>;
    sendType?: string;
    cycleTime?: number;
    isExtendedFrame?: boolean;
    isFd?: boolean;
    busName?: string;
    strict?: boolean;
    protocol?: string;
    sortSignals?: boolean;
  }) {
    // Validate frame ID
    let frameIdBitLength = params.frameId.toString(2).length;
    if (params.isExtendedFrame && frameIdBitLength > 29) {
      throw new Error(
        `Extended frame id 0x${params.frameId.toString(
          16
        )} is more than 29 bits in message ${name}`
      );
    } else if (!params.isExtendedFrame && frameIdBitLength > 11) {
      throw new Error(
        `Standard frame id 0x${params.frameId.toString(
          16
        )} is more than 11 bits in message ${name}`
      );
    }

    this.frameId = params.frameId;
    this.headerId = params.headerId;
    this.headerByteOrder = params.headerByteOrder ?? "big_endian";
    this.isExtendedFrame = params.isExtendedFrame ?? false;
    this.isFd = params.isFd ?? false;
    this.name = params.name;
    this.length = params.length;
    this.unusedBitPattern = params.unusedBitPattern ?? 0x00;
    this.signals =
      params.sortSignals ?? true
        ? sortSignalsByStartBit(params.signals)
        : params.signals;
    this.signalDict = new Map();
    this.containedMessages = params.containedMessages;
    this.senders = params.senders ?? [];
    this.sendType = params.sendType;
    this.cycleTime = params.cycleTime;
    this.busName = params.busName;
    this.strict = params.strict ?? true;
    this.protocol = params.protocol;

    if (typeof params.comment === "string") {
      this.comments = { _default: params.comment };
    } else {
      this.comments = params.comment;
    }

    this.refresh();
  }

  refresh(): void {
    this.signalDict = new Map(
      this.signals.map((signal) => [signal.name, signal])
    );
    this.codecs = this.createCodec();
    this.signalTree = this.createSignalTree(this.codecs);

    if (this.strict) {
      this.validateSignals();
    }
  }

  private createCodec(parentSignal?: string, multiplexerId?: number): Codec {
    let signals: Array<Signal> = [];
    let multiplexers: Record<string, Record<number, Codec>> = {};

    // Handle multiplexer signals
    for (let signal of this.signals) {
      if (signal.multiplexerSignal != parentSignal) {
        continue;
      }

      if (
        multiplexerId !== undefined &&
        (signal.multiplexerIds === undefined ||
          !signal.multiplexerIds.includes(multiplexerId))
      ) {
        continue;
      }

      if (signal.isMultiplexer) {
        let childrenIds = new Set<number>();

        for (let s of this.signals) {
          if (s.multiplexerSignal != signal.name) {
            continue;
          }

          if (s.multiplexerIds !== undefined) {
            s.multiplexerIds.forEach((id) => childrenIds.add(id));
          }
        }

        // Some CAN messages will have muxes containing only
        // the multiplexer and no additional signals. At Tesla
        // these are indicated in advance by assigning them an
        // enumeration. Here we ensure that any named
        // multiplexer is included, even if it has no child
        // signals.
        if (signal.conversion.choices) {
          Object.keys(signal.conversion.choices).forEach((key) =>
            childrenIds.add(parseInt(key))
          );
        }

        for (let childId of childrenIds) {
          let codec = this.createCodec(signal.name, childId);

          if (!multiplexers[signal.name]) {
            multiplexers[signal.name] = {};
          }

          multiplexers[signal.name]![childId] = codec;
        }
      }

      signals.push(signal);
    }

    return {
      signals,
      formats: createEncodeDecodeFormats(signals, this.length),
      multiplexers,
    };
  }

  private createSignalTree(codec: Codec): Array<SignalNode> {
    let nodes: Array<SignalNode> = [];

    for (let signal of codec.signals) {
      let multiplexer = codec.multiplexers[signal.name];
      if (multiplexer !== undefined) {
        let node = {
          [signal.name]: Object.entries(multiplexer).reduce(
            (muxMap, [muxIndex, muxCodec]) => {
              muxMap[parseInt(muxIndex)] = this.createSignalTree(muxCodec);
              return muxMap;
            },
            {} as Record<number, Array<SignalNode>>
          ),
        };
        nodes.push(node);
      } else {
        nodes.push(signal.name);
      }
    }

    return nodes;
  }

  getSignalByName<K extends UnionKeys<T>>(name: K): Signal {
    let signal = this.signalDict.get(name.toString());
    if (!signal) {
      throw new Error(
        `Signal ${name.toString()} not found in message ${this.name}`
      );
    }
    return signal;
  }

  isContainer(): boolean {
    return this.containedMessages !== undefined;
  }

  isMultiplexed(): boolean {
    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }
    return Object.keys(this.codecs.multiplexers).length > 0;
  }

  decode(data: Buffer, scaling: boolean = true): T {
    if (this.isContainer()) {
      throw new Error("Container messages not yet supported");
    }

    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }

    return this._decode(this.codecs, data, scaling) as T;
  }

  private _decode(node: Codec, data: Buffer, scaling: boolean) {
    let decoded = this.unpackData(node, data, scaling);

    let multiplexers = node.multiplexers;

    for (let [signalName, codecMap] of Object.entries(multiplexers)) {
      let mux = this.getMuxNumber(decoded, signalName);

      if (codecMap[mux]) {
        node = codecMap[mux];
      } else {
        let ids = Object.keys(codecMap).join(", ");
        throw new Error(
          `Expected multiplexer id in [${ids}] for multiplexer "${signalName}" but got ${mux}`
        );
      }

      Object.assign(decoded, this._decode(node, data, scaling));
    }

    return decoded;
  }

  private unpackData(node: Codec, data: Buffer, scaling: boolean) {
    let actualLength = data.length;
    if (actualLength != this.length) {
      throw new Error(
        `Wrong data size: ${actualLength} instead of ${this.length} bytes`
      );
    }

    let unpacked = {
      ...node.formats.big.unpack(data),
      ...node.formats.little.unpack(Buffer.from(data).reverse()),
    };

    let decoded: SignalMap = {};

    for (let signal of node.signals) {
      let value = unpacked[signal.name];

      if (value === undefined) {
        // TODO: should this not be an error?
        continue;
      }

      if (scaling) {
        decoded[signal.name] = signal.conversion.rawToScaled(value as number);
      } else {
        decoded[signal.name] = value as number;
      }
    }

    return decoded;
  }

  encode(data: T, scaling: boolean = true, padding: boolean = false): Buffer {
    if (this.isContainer()) {
      // TODO: handle container messages
      throw new Error("Container messages not yet supported");
    }

    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }

    let [encoded, paddingMask] = this._encode(this.codecs, data, scaling);

    if (padding) {
      let paddingPattern = Buffer.alloc(
        this.length,
        this.unusedBitPattern
      ).readBigUInt64BE();
      encoded |= paddingMask & paddingPattern;
    }

    return bigIntToBuffer(encoded);
  }

  private _encode(
    node: Codec,
    data: SignalMap,
    scaling: boolean
  ): [bigint, bigint, Array<Signal>] {
    let encoded = this.packData(node, data, scaling);
    let paddingMask = node.formats.paddingMask;
    let multiplexers = node.multiplexers;

    let allSignals = node.signals;
    for (let [signalName, codecMap] of Object.entries(multiplexers)) {
      let mux = this.getMuxNumber(data, signalName);

      if (codecMap[mux]) {
        node = codecMap[mux];
      } else {
        let ids = Object.keys(codecMap).join(", ");
        throw new Error(
          `Expected multiplexer id in [${ids}] for multiplexer "${signalName}" but got ${mux}`
        );
      }

      let [muxEncoded, muxPaddingMask, muxSignals] = this._encode(
        node,
        data,
        scaling
      );
      allSignals.push(...muxSignals);

      encoded |= muxEncoded;
      paddingMask |= muxPaddingMask;
    }

    return [encoded, paddingMask, allSignals] as const;
  }

  private packData(node: Codec, signalMap: SignalMap, scaling: boolean) {
    if (node.signals.length === 0) {
      return 0n;
    }

    let rawSignalValues = this.encodeSignalValues(
      node.signals,
      signalMap,
      scaling
    );
    let bigPacked = node.formats.big.pack(rawSignalValues);
    let littlePacked = node.formats.little.pack(rawSignalValues);

    let packedUnion =
      bufferToBigInt(bigPacked) | bufferToBigInt(littlePacked, "little");

    return packedUnion;
  }

  private encodeSignalValues(
    signals: Array<Signal>,
    signalMap: SignalMap,
    scaling: boolean
  ): Record<string, number> {
    let rawValues: Record<string, number> = {};

    for (let signal of signals) {
      let name = signal.name;
      let conversion = signal.conversion;
      let value = signalMap[name];

      if (typeof value === "number") {
        if (scaling) {
          rawValues[name] = conversion.numericScaledToRaw(value);
        } else {
          rawValues[name] = conversion.isFloat ? value : Math.round(value);
        }
      } else if (typeof value === "string") {
        rawValues[name] = conversion.choiceToNumber(value);
      } else {
        throw new Error(
          `Unable to encode signal '${name}' with type '${typeof value}'`
        );
      }
    }

    return rawValues;
  }

  private getMuxNumber(data: SignalMap, signalName: string) {
    let mux = data[signalName]!;

    if (typeof mux === "string") {
      let signal = this.getSignalByName(signalName as UnionKeys<T>);
      mux = signal.conversion.choiceToNumber(mux);
    }

    return mux;
  }

  private validateSignals(): void {
    // Implement signal validation
    // Check for overlapping signals and ensure they fit within message length
  }
}

function sortSignalsByStartBit(signals: Signal[]): Signal[] {
  return [...signals].sort((a, b) => startBit(a) - startBit(b));
}

function startBit(signal: Signal): number {
  if (signal.byteOrder === "big_endian") {
    return 8 * Math.floor(signal.start / 8) + (7 - (signal.start % 8));
  }
  return signal.start;
}

function createEncodeDecodeFormats(
  signals: Array<Signal>,
  numberOfBytes: number
): SignalFormat {
  let formatLength = 8 * numberOfBytes;

  let createBig = () => {
    let items: any = [];
    let start = 0;

    let beSignals = signals.filter(
      (signal) => signal.byteOrder == "big_endian"
    );

    let sortedSignals = beSignals.sort(
      (a, b) =>
        sawtoothToNetworkBitnum(a.start) - sawtoothToNetworkBitnum(b.start)
    );

    for (let signal of sortedSignals) {
      let paddingLength = startBit(signal) - start;

      if (paddingLength > 0) {
        items.push({ type: "p", size: paddingLength });
      }

      let type = signal.conversion.isFloat ? "f" : signal.isSigned ? "s" : "u";
      items.push({ name: signal.name, type, size: signal.length });

      start = startBit(signal) + signal.length;
    }

    if (start < formatLength) {
      let length = formatLength - start;
      items.push({ type: "p", size: length });
    }

    return items;
  };

  let createLittle = () => {
    let items: any = [];
    let end = formatLength;

    for (let signal of [...signals].reverse()) {
      if (signal.byteOrder === "big_endian") {
        continue;
      }

      let paddingLength = end - (signal.start + signal.length);

      if (paddingLength > 0) {
        items.push({ type: "p", size: paddingLength });
      }

      let type = signal.conversion.isFloat ? "f" : signal.isSigned ? "s" : "u";
      items.push({ name: signal.name, type, size: signal.length });

      end = signal.start;
    }

    if (end > 0) {
      items.push({ type: "p", size: end });
    }

    return items;
  };

  let little = createLittle();
  let big = createBig();

  let littlePaddingMaskString = little
    .map((item: any) =>
      item.type === "p" ? "1".repeat(item.size) : "0".repeat(item.size)
    )
    .join("");
  let littlePaddingMask = BigInt("0b" + littlePaddingMaskString);
  if (formatLength > 0) {
    let struct = new BitStruct([
      { name: "pad", type: "u", size: littlePaddingMaskString.length },
    ]);
    let packed = struct.pack({ pad: littlePaddingMask });
    littlePaddingMask = bufferToBigInt(packed, "little");
  }

  let bigPaddingMaskString = big
    .map((item: any) =>
      item.type === "p" ? "1".repeat(item.size) : "0".repeat(item.size)
    )
    .join("");
  let bigPaddingMask = BigInt("0b" + bigPaddingMaskString);

  return {
    paddingMask: littlePaddingMask & bigPaddingMask,
    little: new BitStruct(little),
    big: new BitStruct(big),
  };
}

function sawtoothToNetworkBitnum(sawtoothBitnum: number): number {
  /*
   * Byte     |   0   |   1   |
   * Sawtooth |7 ... 0|15... 8|
   * Network  |0 ... 7|8 ...15|
   */
  return 8 * Math.floor(sawtoothBitnum / 8) + (7 - (sawtoothBitnum % 8));
}

function bufferToBigInt(
  buffer: Buffer,
  endian: "big" | "little" = "big"
): bigint {
  if (endian === "little") {
    // Reverse the buffer for little endian
    buffer = Buffer.from(buffer).reverse();
  }
  return BigInt("0x" + buffer.toString("hex"));
}

function bigIntToBuffer(integer: bigint) {
  return Buffer.from(integer.toString(16).padStart(2, "0"), "hex");
}
