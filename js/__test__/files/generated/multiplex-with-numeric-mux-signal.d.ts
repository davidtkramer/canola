export type MultiplexWithNumericMuxSignal_Signals_0 = {
    ABS_InfoMux: 0;
    Info0: number;
    Info1: number;
};

export type MultiplexWithNumericMuxSignal_Signals_1 = {
    ABS_InfoMux: 1;
    Info2: number;
    Info3: number;
};

export type MultiplexWithNumericMuxSignal_Signals_2 = {
    ABS_InfoMux: 2;
    Info4: number;
    Info5: number;
};

export type MultiplexWithNumericMuxSignal_Signals_3 = {
    ABS_InfoMux: 3;
    Info6: number;
    Info7: number;
};

export type MultiplexWithNumericMuxSignal_Signals = MultiplexWithNumericMuxSignal_Signals_0 | MultiplexWithNumericMuxSignal_Signals_1 | MultiplexWithNumericMuxSignal_Signals_2 | MultiplexWithNumericMuxSignal_Signals_3;

export type MultiplexWithNumericMuxSignal = {
    frameId: 291;
    name: "MultiplexWithNumericMuxSignal";
    signals: MultiplexWithNumericMuxSignal_Signals;
};

export type Messages = MultiplexWithNumericMuxSignal;

declare module "./index.js" {
    export interface TestMessages {
        MultiplexWithNumericMuxSignal: Messages;
    }
}
