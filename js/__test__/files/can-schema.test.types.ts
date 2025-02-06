export type RegularMessage_Signals = {
  signalA: number;
  signalB: number;
};

export type RegularMessage = {
  frameId: 512;
  name: 'RegularMessage';
  signals: RegularMessage_Signals;
};

export type MultiplexMessage_Signals_0 = {
  muxIndex: 'INDEX_0';
  signalA: number;
};

export type MultiplexMessage_Signals_1 = {
  muxIndex: 'INDEX_1';
  signalB: number;
};

export type MultiplexMessage_Signals =
  | MultiplexMessage_Signals_0
  | MultiplexMessage_Signals_1;

export type MultiplexMessage = {
  frameId: 513;
  name: 'MultiplexMessage';
  signals: MultiplexMessage_Signals;
};

export type Messages = RegularMessage | MultiplexMessage;
