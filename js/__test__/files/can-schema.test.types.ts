export type RegularMessage_Signals = {
    signalA: number;
    signalB: number;
};

export type RegularMessage = {
    frameId: 512;
    name: "RegularMessage";
    signals: RegularMessage_Signals;
};

export type MultiplexedMessage_Signals_0 = {
    muxIndex: "INDEX_0";
    signalA: number;
    signalB: number;
};

export type MultiplexedMessage_Signals_1 = {
    muxIndex: "INDEX_1";
    signalC: number;
    signalD: number;
};

export type MultiplexedMessage_Signals_2 = {
    muxIndex: "INDEX_INVALID";
};

export type MultiplexedMessage_Signals = MultiplexedMessage_Signals_0 | MultiplexedMessage_Signals_1 | MultiplexedMessage_Signals_2;

export type MultiplexedMessage = {
    frameId: 513;
    name: "MultiplexedMessage";
    signals: MultiplexedMessage_Signals;
};

export type Messages = RegularMessage | MultiplexedMessage;