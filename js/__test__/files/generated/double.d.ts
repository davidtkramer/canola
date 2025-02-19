export type Double_Signals = {
    signal: number;
};

export type Double = {
    frameId: 291;
    name: "Double";
    signals: Double_Signals;
};

export type Messages = Double;

declare module "./index.js" {
    export interface TestMessages {
        Double: Messages;
    }
}
