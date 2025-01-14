import { NamedSignalValue } from "./named-signal-value.js";
import type { Choices, SignalValueType } from "./types.js";

/**
 * The BaseConversion class defines the interface for all signal conversion classes.
 */
export abstract class BaseConversion {
  // The scaling factor of the conversion
  abstract scale: number;

  // The offset value of the conversion
  abstract offset: number;

  // True if raw value is float, false if integer
  abstract isFloat: boolean;

  // Optional mapping of raw values to text values
  abstract choices?: Choices;

  /**
   * Factory method that returns an instance of a conversion subclass
   * based on the given parameters.
   */
  static factory(
    scale: number = 1,
    offset: number = 0,
    choices?: Choices,
    isFloat: boolean = false
  ): BaseConversion {
    if (!choices) {
      if (scale === 1 && offset === 0) {
        return new IdentityConversion(isFloat);
      }

      if (isInteger(scale) && isInteger(offset) && !isFloat) {
        return new LinearIntegerConversion(scale, offset);
      }

      return new LinearConversion(scale, offset, isFloat);
    }

    return new NamedSignalConversion(scale, offset, choices, isFloat);
  }

  /**
   * Convert an internal raw value according to scaling or value table
   */
  abstract rawToScaled(
    raw_value: number,
    decode_choices?: boolean
  ): SignalValueType;

  /**
   * Convert a scaled value to the internal raw value
   */
  abstract scaledToRaw(scaled_value: SignalValueType): number;

  /**
   * Convert a numeric scaled value to the internal raw value
   */
  abstract numericScaledToRaw(scaled_value: number): number;

  /**
   * Convert a choice string/value to its numeric representation
   */
  choiceToNumber(choice: string | NamedSignalValue): number {
    throw new Error("Choice conversion not supported");
  }

  abstract toString(): string;
}

/**
 * Simple pass-through conversion with optional float handling
 */
export class IdentityConversion extends BaseConversion {
  scale = 1;
  offset = 0;
  choices?: Choices = undefined;

  constructor(public isFloat: boolean) {
    super();
  }

  rawToScaled(rawValue: number): number {
    return rawValue;
  }

  scaledToRaw(scaledValue: SignalValueType): number {
    if (typeof scaledValue !== "number") {
      throw new TypeError(
        `'scaled_value' must be number (is ${typeof scaledValue})`
      );
    }
    return this.numericScaledToRaw(scaledValue);
  }

  numericScaledToRaw(scaledValue: number): number {
    return this.isFloat ? scaledValue : Math.round(scaledValue);
  }

  toString(): string {
    return `IdentityConversion(is_float=${this.isFloat})`;
  }
}

/**
 * Integer-only linear conversion
 */
export class LinearIntegerConversion extends BaseConversion {
  isFloat = false;
  choices?: Choices = undefined;

  constructor(public scale: number, public offset: number) {
    super();
  }

  rawToScaled(rawValue: number): number {
    return rawValue * this.scale + this.offset;
  }

  scaledToRaw(scaledValue: SignalValueType): number {
    if (typeof scaledValue !== "number") {
      throw new TypeError(
        `'scaled_value' must be number (is ${typeof scaledValue})`
      );
    }
    return this.numericScaledToRaw(scaledValue);
  }

  numericScaledToRaw(scaled_value: number): number {
    // Try to avoid precision loss when possible
    const raw = scaled_value - this.offset;
    const quotient = Math.floor(raw / this.scale);
    const remainder = raw % this.scale;

    if (remainder === 0) {
      return quotient;
    }
    return Math.round(raw / this.scale);
  }

  toString(): string {
    return `LinearIntegerConversion(scale=${this.scale}, offset=${this.offset})`;
  }
}

/**
 * General linear conversion supporting both integer and float
 */
export class LinearConversion extends BaseConversion {
  choices?: Choices = undefined;

  constructor(
    public scale: number,
    public offset: number,
    public isFloat: boolean
  ) {
    super();
  }

  rawToScaled(rawValue: number): number {
    return rawValue * this.scale + this.offset;
  }

  scaledToRaw(scaledValue: SignalValueType): number {
    if (typeof scaledValue !== "number") {
      throw new TypeError(
        `'scaled_value' must be number (is ${typeof scaledValue})`
      );
    }
    return this.numericScaledToRaw(scaledValue);
  }

  numericScaledToRaw(scaledValue: number): number {
    const raw = (scaledValue - this.offset) / this.scale;
    return this.isFloat ? raw : Math.round(raw);
  }

  toString(): string {
    return `LinearConversion(scale=${this.scale}, offset=${this.offset}, isFloat=${this.isFloat})`;
  }
}

/**
 * Conversion supporting named values (choices)
 */
export class NamedSignalConversion extends BaseConversion {
  private inverseChoices: Map<string, number>;
  private conversion: BaseConversion;

  constructor(
    public scale: number,
    public offset: number,
    public choices: Choices,
    public isFloat: boolean
  ) {
    super();
    this.inverseChoices = new Map();
    this.updateChoices();

    this.conversion = BaseConversion.factory(
      this.scale,
      this.offset,
      undefined,
      isFloat
    );
  }

  rawToScaled(
    rawValue: number,
    decodeChoices: boolean = true
  ): SignalValueType {
    if (decodeChoices && this.choices && rawValue in this.choices) {
      return this.choices[rawValue]!;
    }
    return this.conversion.rawToScaled(rawValue, false);
  }

  scaledToRaw(scaledValue: SignalValueType): number {
    if (typeof scaledValue === "number") {
      return this.conversion.scaledToRaw(scaledValue);
    }

    if (scaledValue instanceof NamedSignalValue) {
      return scaledValue.value;
    }

    if (typeof scaledValue === "string") {
      return this.choiceToNumber(scaledValue);
    }

    throw new TypeError("Invalid scaled value type");
  }

  numericScaledToRaw(scaled_value: number): number {
    return this.conversion.scaledToRaw(scaled_value);
  }

  setChoices(choices: Choices): void {
    this.choices = choices;
    this.updateChoices();
  }

  private updateChoices(): void {
    this.inverseChoices = new Map(
      Object.entries(this.choices).map(([value, text]) => [
        String(text),
        Number(value),
      ])
    );
  }

  override choiceToNumber(choice: string | NamedSignalValue): number {
    const value = this.inverseChoices.get(String(choice));
    if (value === undefined) {
      throw new Error(`Choice "${choice}" not found`);
    }
    return value;
  }

  toString(): string {
    const choicesList = Object.entries(this.choices)
      .map(([value, text]) => `${value}: '${text}'`)
      .join(", ");

    return `NamedSignalConversion(scale=${this.scale}, offset=${this.offset}, choices={${choicesList}}, isFloat=${this.isFloat})`;
  }
}

/**
 * Helper to check if a number is an integer
 */
function isInteger(value: number): boolean {
  if (Number.isInteger(value)) {
    return true;
  }
  if (typeof value === "number") {
    return false;
  }
  throw new TypeError(`Value must be number (is ${typeof value})`);
}
