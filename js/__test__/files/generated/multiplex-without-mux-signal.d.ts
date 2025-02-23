export type MultiplexWithoutMuxSignal_Signals_0 = {
    ABS_InfoMux: 0;
    Info0: number;
    Info1: number;
};

export type MultiplexWithoutMuxSignal_Signals_1 = {
    ABS_InfoMux: 1;
    Info2: number;
    Info3: number;
};

export type MultiplexWithoutMuxSignal_Signals_2 = {
    ABS_InfoMux: 2;
    Info4: number;
    Info5: number;
};

export type MultiplexWithoutMuxSignal_Signals_3 = {
    ABS_InfoMux: 3;
    Info6: number;
    Info7: number;
};

export type MultiplexWithoutMuxSignal_Signals = MultiplexWithoutMuxSignal_Signals_0 | MultiplexWithoutMuxSignal_Signals_1 | MultiplexWithoutMuxSignal_Signals_2 | MultiplexWithoutMuxSignal_Signals_3;

export type MultiplexWithoutMuxSignal = {
    frameId: 291;
    name: "MultiplexWithoutMuxSignal";
    signals: MultiplexWithoutMuxSignal_Signals;
};

export type Messages = MultiplexWithoutMuxSignal;

declare module "./index.js" {
    export interface TestMessages {
        MultiplexWithoutMuxSignal: Messages;
    }
}
