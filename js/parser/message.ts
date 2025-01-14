import { Signal } from "./signal.js";
import type { ByteOrder, Comments } from "./types.js";

interface Codec {
  signals: Array<Signal>;
  formats: SignalFormat;
  multiplexers: Record<string, Record<number, Codec>>;
}
interface SignalFormat {
  paddingMask: number;
  signalMasks: Map<string, number>;
}
type SignalValue = number | string;
type SignalMapping = Record<string, SignalValue>;

export class Message {
  public frameId: number;
  public headerId?: number;
  public headerByteOrder: ByteOrder;
  public isExtendedFrame: boolean;
  public isFd: boolean;
  public name: string;
  public length: number;
  public unusedBitPattern: number;
  public signals: Array<Signal>;
  public signalDict: Map<string, Signal>; // TODO: change back to private?
  private containedMessages?: Array<Message>;
  public comments?: Comments;
  public senders: Array<string>;
  public sendType?: string;
  public cycleTime?: number;
  public busName?: string;
  private strict: boolean;
  public protocol?: string;
  public codecs?: Codec; // TODO: change back to private
  public signalTree?: Array<
    string | Record<string, Record<number, Array<string>>>
  >;

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
    const frameIdBitLength = params.frameId.toString(2).length;
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

  // Properties
  get isContainer(): boolean {
    return this.containedMessages !== undefined;
  }

  get comment(): string | undefined {
    if (!this.comments) {
      return undefined;
    }
    return (
      this.comments["_default"] ??
      this.comments["FOR-ALL"] ??
      this.comments["EN"]
    );
  }

  set comment(value: string | undefined) {
    if (value === undefined) {
      this.comments = undefined;
    } else {
      this.comments = { _default: value };
    }
  }

  // Methods for working with signals
  getSignalByName(name: string): Signal {
    const signal = this.signalDict.get(name);
    if (!signal) {
      throw new Error(`Signal ${name} not found in message ${this.name}`);
    }
    return signal;
  }

  isMultiplexed(): boolean {
    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }
    return Object.keys(this.codecs.multiplexers).length > 0;
  }

  // Methods for contained messages
  getContainedMessageByHeaderId(headerId: number): Message | undefined {
    if (!this.containedMessages) {
      return undefined;
    }

    const matches = this.containedMessages.filter(
      (msg) => msg.headerId === headerId
    );
    if (matches.length > 1) {
      throw new Error(
        `Container message "${
          this.name
        }" contains multiple contained messages with id 0x${headerId.toString(
          16
        )}`
      );
    }

    return matches[0];
  }

  getContainedMessageByName(name: string): Message | undefined {
    if (!this.containedMessages) {
      return undefined;
    }

    const matches = this.containedMessages.filter((msg) => msg.name === name);
    if (matches.length > 1) {
      throw new Error(
        `Container message "${this.name}" contains multiple contained messages named "${name}"`
      );
    }

    return matches[0];
  }

  decode(
    data: Uint8Array,
    decodeChoices: boolean = true,
    scaling: boolean = true
  ): SignalMapping {
    if (this.isContainer) {
      throw new Error("Cannot decode container message directly");
    }

    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }

    // Convert byte array to number
    const value = parseInt(
      Array.from(data)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join(""),
      16
    );

    return this.decodeValue(value, this.codecs, decodeChoices, scaling);
  }

  _encode(data: SignalMapping, scaling: boolean = true) {

  }

  // Encoding/Decoding methods
  encode(data: SignalMapping, scaling: boolean = true): Uint8Array {
    if (this.isContainer) {
      throw new Error("Cannot encode container message directly");
    }

    if (!this.codecs) {
      throw new Error("Codec is not initialized");
    }

    // Encode data using codecs
    let encoded = this.gatherAndEncodeSignals(data, this.codecs, scaling);

    // TODO: fix padding pattern
    // Apply padding pattern if specified
    // if (this.unusedBitPattern !== 0) {
    //   const paddingMask = this.codecs.formats.paddingMask;
    //   const paddingPattern = Array(this.length).fill(this.unusedBitPattern);
    //   encoded = encoded | (paddingMask & paddingPattern);
    // }

    // Convert to byte array
    return new Uint8Array(
      encoded
        .toString(16)
        .padStart(this.length * 2, "0")
        .match(/.{2}/g)!
        .map((byte) => parseInt(byte, 16))
    );
  }

  private gatherAndEncodeSignals(
    data: SignalMapping,
    codec: Codec,
    scaling: boolean
  ): number {
    let result = 0;

    // Encode regular signals
    for (const signal of codec.signals) {
      const value = data[signal.name];
      if (value === undefined) {
        throw new Error(`Missing value for signal ${signal.name}`);
      }

      const encoded = scaling
        ? signal.scaledToRaw(value)
        : typeof value === "string"
        ? signal.choiceToNumber(value)
        : value;

      result |= this.encodeSignalValue(encoded, signal);
    }

    // Handle multiplexed signals
    for (const [muxName, muxCodecs] of Object.entries(codec.multiplexers)) {
      const muxValue = data[muxName];
      if (muxValue === undefined) {
        throw new Error(`Missing multiplexer value for ${muxName}`);
      }

      const muxId =
        typeof muxValue === "string"
          ? this.getSignalByName(muxName).choiceToNumber(muxValue)
          : muxValue;

      const muxCodec = muxCodecs[muxId];
      if (!muxCodec) {
        throw new Error(`Invalid multiplexer ID ${muxId} for ${muxName}`);
      }

      result |= this.gatherAndEncodeSignals(data, muxCodec, scaling);
    }

    return result;
  }

  private encodeSignalValue(value: number, signal: Signal): number {
    // Implement bit manipulation for encoding
    // This would need proper implementation based on byte order and bit position
    return value << signal.start;
  }

  private decodeValue(
    value: number,
    codec: Codec,
    decodeChoices: boolean,
    scaling: boolean
  ): SignalMapping {
    const result: SignalMapping = {};

    // Decode regular signals
    for (const signal of codec.signals) {
      const raw = this.decodeSignalValue(value, signal);
      result[signal.name] = scaling
        ? signal.rawToScaled(raw, decodeChoices)
        : raw;

      // Handle multiplexers
      if (signal.isMultiplexer) {
        const muxId = result[signal.name];
        const muxCodec =
          codec.multiplexers[signal.name]?.[
            typeof muxId === "string" ? signal.choiceToNumber(muxId) : muxId
          ];

        if (muxCodec) {
          Object.assign(
            result,
            this.decodeValue(value, muxCodec, decodeChoices, scaling)
          );
        }
      }
    }

    return result;
  }

  private decodeSignalValue(value: number, signal: Signal): number {
    // Implement bit manipulation for decoding
    // This would need proper implementation based on byte order and bit position
    return (value >> signal.start) & ((1 << signal.length) - 1);
  }

  refresh(): void {
    // Rebuild internal state
    this.signalDict = new Map(
      this.signals.map((signal) => [signal.name, signal])
    );
    this.codecs = createCodec(this.signals);
    this.signalTree = createSignalTree(this.codecs);

    if (this.strict) {
      this.validateSignals();
    }
  }

  private validateSignals(): void {
    // Implement signal validation
    // Check for overlapping signals and ensure they fit within message length
  }
}

export function sortSignalsByStartBit(signals: Signal[]): Signal[] {
  return [...signals].sort((a, b) => getStartBit(a) - getStartBit(b));
}

export function getStartBit(signal: Signal): number {
  if (signal.byteOrder === "big_endian") {
    return 8 * Math.floor(signal.start / 8) + (7 - (signal.start % 8));
  }
  return signal.start;
}

export function createSignalFormats(
  signals: Signal[],
  messageLength: number
): SignalFormat {
  // Implementation for creating signal formats
  // This would create the bit masks and positions for encoding/decoding
  return {
    paddingMask: 0, // This needs proper implementation
    signalMasks: new Map(),
  };
}

function createCodec(
  signals: Array<Signal>,
  parentSignal?: string,
  multiplexerId?: number
): Codec {
  const relevantSignals = signals.filter(
    (signal) =>
      signal.multiplexerSignal === parentSignal &&
      (!multiplexerId || signal.multiplexerIds?.includes(multiplexerId))
  );

  const multiplexers: Record<string, Record<number, Codec>> = {};

  // Handle multiplexer signals
  for (const signal of relevantSignals) {
    if (signal.isMultiplexer) {
      multiplexers[signal.name] = {};

      // Find all possible multiplexer IDs
      const childIds = new Set<number>();
      for (const s of signals) {
        if (s.multiplexerSignal === signal.name && s.multiplexerIds) {
          s.multiplexerIds.forEach((id) => childIds.add(id));
        }
      }

      // Create codecs for each multiplexer ID
      for (const id of childIds) {
        multiplexers[signal.name]![id] = createCodec(signals, signal.name, id);
      }
    }
  }

  return {
    signals: relevantSignals,
    formats: createSignalFormats(relevantSignals, 0), // message length needs to be passed
    multiplexers,
  };
}

function createSignalTree(
  codec: Codec
): Array<string | Record<string, Record<number, string[]>>> {
  const nodes: Array<string | Record<string, Record<number, string[]>>> = [];

  for (const signal of codec.signals) {
    if (signal.name in codec.multiplexers) {
      const node: Record<string, Record<number, string[]>> = {
        [signal.name]: Object.fromEntries(
          Object.entries(codec.multiplexers[signal.name]!).map(
            ([mux, muxCodec]) => [mux, createSignalTree(muxCodec)]
          )
        ),
      };
      nodes.push(node);
    } else {
      nodes.push(signal.name);
    }
  }

  return nodes;
}
