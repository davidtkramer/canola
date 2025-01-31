export type Choices = Record<number, string>;
export type SignalValue = number | string;
export type ByteOrder = 'little_endian' | 'big_endian';
export type Comments = Record<string, string>;

export type NodeSchema = {
  id?: string;
  name?: string;
  comment?: string;
  comments?: Comments;
};

export type BusSchema = {
  name: string;
  comment?: string;
  comments?: Comments;
  baudrate?: number;
  fdBaudrate?: number;
};

export type Reveal<T> = {
  [K in keyof T]: T[K];
} & {};