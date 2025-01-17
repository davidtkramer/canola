import { NamedSignalValue } from "./named-signal-value.js";
import type { Choices, SignalValue } from "./types.js";

export abstract class BaseConversion {
  abstract scale: number;

  abstract offset: number;

  // True if raw value is float, false if integer
  abstract isFloat: boolean;

  // Optional mapping of raw values to text values
  abstract choices?: Choices;

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

  abstract rawToScaled(
    rawValue: number,
    decodeChoices?: boolean
  ): SignalValue;

  abstract scaledToRaw(scaledValue: number | string): number;

  abstract numericScaledToRaw(scaledValue: number): number;

  choiceToNumber(choice: string | NamedSignalValue): number {
    throw new Error("Choice conversion not supported");
  }
}

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

  scaledToRaw(scaledValue: SignalValue): number {
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
}

export class LinearIntegerConversion extends BaseConversion {
  isFloat = false;
  choices?: Choices = undefined;

  constructor(public scale: number, public offset: number) {
    super();
  }

  rawToScaled(rawValue: number): number {
    return rawValue * this.scale + this.offset;
  }

  scaledToRaw(scaledValue: SignalValue): number {
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
}

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

  scaledToRaw(scaledValue: SignalValue): number {
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
}

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
    this.inverseChoices = new Map(
      Object.entries(this.choices).map(([value, text]) => [
        String(text),
        Number(value),
      ])
    );
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
  ): SignalValue {
    if (decodeChoices && this.choices && rawValue in this.choices) {
      return this.choices[rawValue]!;
    }
    return this.conversion.rawToScaled(rawValue, false);
  }

  scaledToRaw(scaledValue: SignalValue): number {
    if (typeof scaledValue === "number") {
      return this.conversion.scaledToRaw(scaledValue);
    }

    if (typeof scaledValue === "string") {
      return this.choiceToNumber(scaledValue);
    }

    throw new TypeError("Invalid scaled value type");
  }

  numericScaledToRaw(scaled_value: number): number {
    return this.conversion.scaledToRaw(scaled_value);
  }

  override choiceToNumber(choice: string): number {
    const value = this.inverseChoices.get(choice);
    if (value === undefined) {
      throw new Error(`Choice "${choice}" not found`);
    }
    return value;
  }
}

function isInteger(value: number): boolean {
  if (Number.isInteger(value)) {
    return true;
  }
  if (typeof value === "number") {
    return false;
  }
  throw new TypeError(`Value must be number (is ${typeof value})`);
}
