import { type BaseConversion, type Choices } from "./types.js";

export class IdentityConversion implements BaseConversion {
  constructor(
    public isFloat: boolean = false,
    public scale: number = 1,
    public offset: number = 0,
    public choices?: Choices
  ) {}

  rawToScaled(
    raw_value: number,
    decode_choices: boolean = true
  ): number | string {
    const scaled = this.isFloat ? raw_value : Math.floor(raw_value);

    if (decode_choices && this.choices && scaled in this.choices) {
      return this.choices[scaled]!;
    }

    return scaled;
  }

  scaledToRaw(scaled_value: number | string): number {
    if (typeof scaled_value === "string") {
      return this.choiceToNumber(scaled_value);
    }
    return scaled_value;
  }

  choiceToNumber(choice: string): number {
    const choiceStr = choice.toString();
    if (!this.choices) {
      throw new Error("No choices available for conversion");
    }

    const entry = Object.entries(this.choices).find(
      ([_, name]) => name === choiceStr
    );
    if (!entry) {
      throw new Error(`Choice "${choiceStr}" not found`);
    }

    return parseInt(entry[0]);
  }
}

export class LinearConversion extends IdentityConversion {
  constructor(
    public override isFloat: boolean = false,
    public override scale: number = 1,
    public override offset: number = 0,
    public override choices?: Choices
  ) {
    super(isFloat, scale, offset, choices);
  }

  override rawToScaled(
    raw_value: number,
    decode_choices: boolean = true
  ): number | string {
    const scaled = raw_value * this.scale + this.offset;

    if (decode_choices && this.choices && raw_value in this.choices) {
      return this.choices[raw_value]!;
    }

    return scaled;
  }

  override scaledToRaw(scaled_value: number | string): number {
    if (typeof scaled_value === "string") {
      return this.choiceToNumber(scaled_value);
    }
    return (scaled_value - this.offset) / this.scale;
  }
}

export function createConversion(
  scale: number = 1,
  offset: number = 0,
  choices?: Choices,
  is_float: boolean = false
): BaseConversion {
  if (choices) {
    return new LinearConversion(is_float, scale, offset, choices);
  }

  if (scale === 1 && offset === 0) {
    return new IdentityConversion(is_float);
  }

  return new LinearConversion(is_float, scale, offset);
}
