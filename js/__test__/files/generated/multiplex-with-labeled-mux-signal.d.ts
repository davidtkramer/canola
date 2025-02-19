export type MultiplexWithLabeledMuxSignal_Signals_0 = {
    muxIndex: "INDEX_0";
    signalA: number;
};

export type MultiplexWithLabeledMuxSignal_Signals_1 = {
    muxIndex: "INDEX_1";
    signalB: number;
};

export type MultiplexWithLabeledMuxSignal_Signals = MultiplexWithLabeledMuxSignal_Signals_0 | MultiplexWithLabeledMuxSignal_Signals_1;

export type MultiplexWithLabeledMuxSignal = {
    frameId: 291;
    name: "MultiplexWithLabeledMuxSignal";
    signals: MultiplexWithLabeledMuxSignal_Signals;
};

export type Messages = MultiplexWithLabeledMuxSignal;

declare module "./index.js" {
    export interface TestMessages {
        MultiplexWithLabeledMuxSignal: Messages;
    }
}
