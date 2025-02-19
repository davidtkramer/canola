export type ScaledSignedInteger_Signals = {
    temp: number;
};

export type ScaledSignedInteger = {
    frameId: 291;
    name: "ScaledSignedInteger";
    signals: ScaledSignedInteger_Signals;
};

export type Messages = ScaledSignedInteger;

declare module "./index.js" {
    export interface TestMessages {
        ScaledSignedInteger: Messages;
    }
}
