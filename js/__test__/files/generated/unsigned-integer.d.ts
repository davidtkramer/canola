export type UnsignedInteger_Signals = {
    signalA: number;
};

export type UnsignedInteger = {
    frameId: 291;
    name: "UnsignedInteger";
    signals: UnsignedInteger_Signals;
};

export type Messages = UnsignedInteger;

declare module "./index.js" {
    export interface TestMessages {
        UnsignedInteger: Messages;
    }
}
