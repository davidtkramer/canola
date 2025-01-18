import type { ByteOrder, Comments, SignalValue } from "./types.js";
import { BaseConversion, IdentityConversion } from "./conversions.js";

/**
 * A CAN signal with position, size, unit and other information.
 * A signal is part of a message.
 *
 * Signal bit numbering in a message:
 *
 * Byte:       0        1        2        3        4        5        6        7
 *        +--------+--------+--------+--------+--------+--------+--------+--------+--- - -
 *        |        |        |        |        |        |        |        |        |
 *        +--------+--------+--------+--------+--------+--------+--------+--------+--- - -
 * Bit:    7      0 15     8 23    16 31    24 39    32 47    40 55    48 63    56
 *
 * Big endian signal with start bit 2 and length 5 (0=LSB, 4=MSB):
 *
 * Byte:       0        1        2        3
 *        +--------+--------+--------+--- - -
 *        |    |432|10|     |        |
 *        +--------+--------+--------+--- - -
 * Bit:    7      0 15     8 23    16 31
 *
 * Little endian signal with start bit 2 and length 9 (0=LSB, 8=MSB):
 *
 * Byte:       0        1        2        3
 *        +--------+--------+--------+--- - -
 *        |543210| |    |876|        |
 *        +--------+--------+--------+--- - -
 * Bit:    7      0 15     8 23    16 31
 */
export class Signal {
  // The signal name as a string
  public name: string;

  // The conversion instance for raw/scaled value conversion
  public conversion: BaseConversion;

  // The scaled minimum value of the signal, or undefined if unavailable
  public minimum?: number;

  // The scaled maximum value of the signal, or undefined if unavailable
  public maximum?: number;

  // The start bit position of the signal within its message
  public start: number;

  // The length of the signal in bits
  public length: number;

  // Signal byte order as 'little_endian' or 'big_endian'
  public byteOrder: ByteOrder;

  // True if the signal is signed, false otherwise
  public isSigned: boolean;

  // The internal representation of the initial value of the signal
  public rawInitial?: number;

  // The initial value of the signal in physical units
  public initial?: SignalValue;

  // The raw value representing that the signal is invalid
  public rawInvalid?: number;

  // The scaled value representing that the signal is invalid
  public invalid?: SignalValue;

  // The unit of the signal as a string
  public unit?: string;

  // A list of all receiver nodes of this signal
  public receivers: string[];

  // True if this is the multiplexer signal in a message
  public isMultiplexer: boolean;

  // The multiplexer ids list if part of a multiplexed message
  public multiplexerIds?: number[];

  // The multiplexer signal if part of a multiplexed message
  public multiplexerSignal?: string;

  // The J1939 Suspect Parameter Number (SPN) value
  public spn?: number;

  // Signal descriptions in multiple languages
  public comments?: Comments;

  constructor(params: {
    name: string;
    start: number;
    length: number;
    byteOrder: ByteOrder;
    isSigned: boolean;
    rawInitial?: number;
    rawInvalid?: number;
    conversion?: BaseConversion;
    minimum?: number;
    maximum?: number;
    unit?: string;
    comment?: string | Comments;
    receivers?: string[];
    isMultiplexer?: boolean;
    multiplexerIds?: number[];
    multiplexerSignal?: string;
    spn?: number;
  }) {
    this.name = params.name;
    this.conversion = params.conversion || new IdentityConversion(false);
    this.minimum = params.minimum;
    this.maximum = params.maximum;
    this.start = params.start;
    this.length = params.length;
    this.byteOrder = params.byteOrder ?? "little_endian";
    this.isSigned = params.isSigned ?? false;
    this.rawInitial = params.rawInitial;
    this.rawInvalid = params.rawInvalid;
    this.unit = params.unit;
    this.receivers = params.receivers || [];
    this.isMultiplexer = params.isMultiplexer ?? false;
    this.multiplexerIds = params.multiplexerIds;
    this.multiplexerSignal = params.multiplexerSignal;
    this.spn = params.spn;

    // Calculate initial and invalid values if raw values provided
    if (params.rawInitial !== undefined) {
      this.initial = this.conversion.rawToScaled(params.rawInitial);
    }
    if (params.rawInvalid !== undefined) {
      this.invalid = this.conversion.rawToScaled(params.rawInvalid);
    }

    // Handle comments similar to Python implementation
    if (typeof params.comment === "string") {
      this.comments = { _default: params.comment };
    } else {
      this.comments = params.comment;
    }
  }

  rawToScaled(
    rawValue: number,
    decodeChoices: boolean = true
  ): SignalValue {
    return this.conversion.rawToScaled(rawValue, decodeChoices);
  }

  scaledToRaw(scaledValue: SignalValue): number {
    return this.conversion.scaledToRaw(scaledValue);
  }

  get scale(): number {
    return this.conversion.scale;
  }

  set scale(value: number) {
    this.conversion = BaseConversion.factory(
      value,
      this.conversion.offset,
      this.conversion.choices,
      this.conversion.isFloat
    );
  }

  get offset(): number {
    return this.conversion.offset;
  }

  set offset(value: number) {
    this.conversion = BaseConversion.factory(
      this.conversion.scale,
      value,
      this.conversion.choices,
      this.conversion.isFloat
    );
  }

  get choices() {
    return this.conversion.choices;
  }

  set choices(value) {
    this.conversion = BaseConversion.factory(
      this.conversion.scale,
      this.conversion.offset,
      value,
      this.conversion.isFloat
    );
  }

  get isFloat(): boolean {
    return this.conversion.isFloat;
  }

  set isFloat(value: boolean) {
    this.conversion = BaseConversion.factory(
      this.conversion.scale,
      this.conversion.offset,
      this.conversion.choices,
      value
    );
  }

  get comment(): string | undefined {
    if (this.comments === undefined) {
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

  choiceToNumber(choice: string): number {
    try {
      return this.conversion.choiceToNumber(choice);
    } catch (error) {
      throw new Error(`Choice ${choice} not found in Signal ${this.name}`);
    }
  }
}
