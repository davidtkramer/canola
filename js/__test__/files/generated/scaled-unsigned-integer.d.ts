export type ScaledUnsignedInteger_Signals = {
    signal: number;
};

export type ScaledUnsignedInteger = {
    frameId: 291;
    name: "ScaledUnsignedInteger";
    signals: ScaledUnsignedInteger_Signals;
};

export type Messages = ScaledUnsignedInteger;

declare module "./index.js" {
    export interface TestMessages {
        ScaledUnsignedInteger: Messages;
    }
}
