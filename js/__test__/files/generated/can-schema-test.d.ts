export type RegularMessage_Signals = {
    signalA: number;
    signalB: number;
};

export type RegularMessage = {
    frameId: 512;
    name: "RegularMessage";
    signals: RegularMessage_Signals;
};

export type Messages = RegularMessage;

declare module "./index.js" {
    export interface TestMessages {
        CanSchemaTest: Messages;
    }
}
