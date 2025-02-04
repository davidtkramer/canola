export type ID3C2VCLEFT_switchStatus_Signals_0 = {
    switchStatusIndex: "INDEX_0";
    hornSwitchPressed: number;
    hazardButtonPressed: number;
    brakeSwitchPressed: number;
    rightMirrorTilt: "MIRROR_TILT_STOP" | "MIRROR_TILT_DOWN" | "MIRROR_TILT_UP" | "MIRROR_TILT_RIGHT" | "MIRROR_TILT_LEFT";
    frontSeatTrackBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatTrackForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatTiltDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatTiltUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLiftDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLiftUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatBackrestBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatBackrestForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLumbarDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLumbarUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLumbarIn: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontSeatLumbarOut: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    btnWindowSwPackUpLF: number;
    btnWindowSwPackAutoUpLF: number;
    btnWindowSwPackDownLF: number;
    btnWindowSwPackAutoDownLF: number;
    btnWindowSwPackUpLR: number;
    btnWindowSwPackAutoUpLR: number;
    btnWindowSwPackDownLR: number;
    btnWindowSwPackAutoDownLR: number;
    btnWindowSwPackUpRF: number;
    btnWindowSwPackAutoUpRF: number;
    btnWindowSwPackDownRF: number;
    btnWindowSwPackAutoDownRF: number;
    btnWindowSwPackUpRR: number;
    btnWindowSwPackAutoUpRR: number;
    btnWindowSwPackDownRR: number;
    btnWindowSwPackAutoDownRR: number;
    frontBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    frontOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    rearLeftBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    rearCenterOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    rearLeftOccupancySwitch: number;
    rearRightOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    brakePressed: number;
    rearHVACButtonPressed: number;
    rearCenterBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
};

export type ID3C2VCLEFT_switchStatus_Signals_1 = {
    switchStatusIndex: "INDEX_1";
    swcLeftTiltRight: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcLeftPressed: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcRightTiltLeft: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcRightTiltRight: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcRightPressed: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcLeftTiltLeft: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    swcLeftScrollTicks: number;
    swcRightScrollTicks: number;
    btnWindowUpLR: number;
    btnWindowAutoUpLR: number;
    btnWindowDownLR: number;
    btnWindowAutoDownLR: number;
    secondRowSeatReclineSwitch: number;
    secondRowSeatCenterSwitch: number;
    secondRowSeatLeftFoldFlatSwitch: number;
    secondRowSeatRightFoldFlatSwitch: number;
    secondRowSeatBothFoldFlatSwitch: number;
    swcLeftDoublePress: number;
    swcRightDoublePress: number;
};

export type ID3C2VCLEFT_switchStatus_Signals_2 = {
    switchStatusIndex: "INDEX_INVALID";
};

export type ID3C2VCLEFT_switchStatus_Signals = ID3C2VCLEFT_switchStatus_Signals_0 | ID3C2VCLEFT_switchStatus_Signals_1 | ID3C2VCLEFT_switchStatus_Signals_2;

export type ID3C2VCLEFT_switchStatus = {
    frameId: 962;
    name: "ID3C2VCLEFT_switchStatus";
    signals: ID3C2VCLEFT_switchStatus_Signals;
};

export type ID4F3SeatControl_Signals = {
    frontLeftSeatTrackForward: number;
    frontLeftSeatTrackBackward: number;
};

export type ID4F3SeatControl = {
    frameId: 1267;
    name: "ID4F3SeatControl";
    signals: ID4F3SeatControl_Signals;
};

export type Messages = ID3C2VCLEFT_switchStatus | ID4F3SeatControl;