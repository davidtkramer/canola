import type { NamedSignalValue } from "./named-signal-value.js";

export type Choices = Record<number, string>;
export type SignalValueType = number | string | NamedSignalValue;
export type ByteOrder = "little_endian" | "big_endian";
export type Comments = Record<string, string>;