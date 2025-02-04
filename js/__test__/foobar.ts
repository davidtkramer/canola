export type switchStatus_Signals_0 = {
    switchStatusIndex: "INDEX_0";
    hazardButtonPressed: number;
    brakeSwitchPressed: number;
    frontSeatTrackBack: "SNA" | "OFF" | "ON" | "FAULT";
};

export type switchStatus_Signals_1 = {
    switchStatusIndex: "INDEX_1";
    swcLeftTiltRight: "SNA" | "OFF" | "ON" | "FAULT";
    swcLeftScrollTicks: number;
    swcRightScrollTicks: number;
    btnWindowUpLR: number;
};

export type switchStatus_Signals_2 = {
    switchStatusIndex: "INDEX_INVALID";
};

export type switchStatus_Signals = switchStatus_Signals_0 | switchStatus_Signals_1 | switchStatus_Signals_2;

export type switchStatus = {
    frameId: 962;
    name: "switchStatus";
    signals: switchStatus_Signals;
};

export type Messages = switchStatus;