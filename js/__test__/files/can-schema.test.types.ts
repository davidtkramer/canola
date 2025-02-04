export type SwitchStatus_Signals_0 = {
  switchStatusIndex: 'INDEX_0';
  hazardButtonPressed: number;
  brakeSwitchPressed: number;
  frontSeatTrackBack: 'SNA' | 'OFF' | 'ON' | 'FAULT';
};

export type SwitchStatus_Signals_1 = {
  switchStatusIndex: 'INDEX_1';
  swcLeftTiltRight: 'SNA' | 'OFF' | 'ON' | 'FAULT';
  swcLeftScrollTicks: number;
  swcRightScrollTicks: number;
};

export type SwitchStatus_Signals_2 = {
  switchStatusIndex: 'INDEX_INVALID';
};

export type SwitchStatus_Signals =
  | SwitchStatus_Signals_0
  | SwitchStatus_Signals_1
  | SwitchStatus_Signals_2;

export type SwitchStatus = {
  frameId: 962;
  name: 'SwitchStatus';
  signals: SwitchStatus_Signals;
};

export type Messages = SwitchStatus;
