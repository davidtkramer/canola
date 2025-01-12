export type ByteOrder = "little_endian" | "big_endian";
export type Comments = Record<string, string>;
export type Choices = Record<number, string>;

export interface BaseConversion {
  scale: number;
  offset: number;
  isFloat: boolean;
  choices?: Choices;
  rawToScaled(raw_value: number, decode_choices?: boolean): number | string;
  scaledToRaw(scaled_value: number | string): number;
  choiceToNumber(choice: string): number;
}

export interface Signal {
  name: string;
  start: number;
  length: number;
  byteOrder: ByteOrder;
  isSigned: boolean;
  rawInitial?: number;
  rawInvalid?: number;
  conversion: BaseConversion;
  minimum?: number;
  maximum?: number;
  unit?: string;
  receivers: string[];
  isMultiplexer: boolean;
  multiplexerIds?: number[];
  multiplexerSignal?: string;
  spn?: number;
  comments?: Comments;
}

export interface Message {
  frame_id: number;
  name: string;
  length: number;
  signals: Signal[];
  containedMessages?: Message[];
  headerId?: number;
  headerByteOrder?: ByteOrder;
  unusedBitPattern?: number;
  comments?: Comments;
  senders?: string[];
  sendType?: string;
  cycleTime?: number;
  isExtendedFrame?: boolean;
  isFd?: boolean;
  busName?: string;
  strict?: boolean;
  protocol?: string;
}

export interface Bus {
  name: string;
  comment?: string;
  comments?: Comments;
  baudrate?: number;
  fdBaudrate?: number;
}

export interface Node {
  id?: string;
  name?: string;
  comment?: string;
  comments?: Comments;
}

export interface InternalDatabase {
  messages: Message[];
  nodes: Node[];
  buses: Bus[];
  version?: string;
}
