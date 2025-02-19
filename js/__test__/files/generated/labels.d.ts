export type Labels_Signals = {
    signal: "OFF" | "ON";
};

export type Labels = {
    frameId: 291;
    name: "Labels";
    signals: Labels_Signals;
};

export type Messages = Labels;

declare module "./index.js" {
    export interface TestMessages {
        Labels: Messages;
    }
}
