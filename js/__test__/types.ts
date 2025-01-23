export type ID00CUI_status = {
    UI_touchActive: number;
    UI_audioActive: number;
    UI_bluetoothActive: number;
    UI_cellActive: number;
    UI_displayReady: number;
    UI_displayOn: number;
    UI_wifiActive: number;
    UI_wifiConnected: number;
    UI_systemActive: number;
    UI_readyForDrive: number;
    UI_cellConnected: number;
    UI_vpnActive: number;
    UI_autopilotTrial: "NONE" | "START" | "STOP" | "ACTIVE";
    UI_factoryReset: "NONE_SNA" | "DEVELOPER" | "DIAGNOSTIC" | "CUSTOMER";
    UI_gpsActive: number;
    UI_screenshotActive: number;
    UI_radioActive: number;
    UI_cellNetworkTechnology: "CELL_NETWORK_NONE" | "CELL_NETWORK_GPRS" | "CELL_NETWORK_EDGE" | "CELL_NETWORK_UMTS" | "CELL_NETWORK_HSDPA" | "CELL_NETWORK_HSUPA" | "CELL_NETWORK_HSPA" | "CELL_NETWORK_LTE" | "CELL_NETWORK_GSM" | "CELL_NETWORK_CDMA" | "CELL_NETWORK_WCDMA" | "CELL_NETWORK_SNA";
    UI_cellReceiverPower: number;
    UI_falseTouchCounter: number;
    UI_developmentCar: number;
    UI_cameraActive: number;
    UI_cellSignalBars: "ZERO" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SNA";
    UI_pcbTemperature: number;
    UI_cpuTemperature: number;
};

export type ID353UI_status = {
    UI_touchActive: number;
    UI_audioActive: number;
    UI_bluetoothActive: number;
    UI_cellActive: number;
    UI_displayReady: number;
    UI_displayOn: number;
    UI_wifiActive: number;
    UI_wifiConnected: number;
    UI_systemActive: number;
    UI_readyForDrive: number;
    UI_cellConnected: number;
    UI_vpnActive: number;
    UI_autopilotTrial: number;
    UI_factoryReset: number;
    UI_gpsActive: number;
    UI_screenshotActive: number;
    UI_radioActive: number;
    UI_cellNetworkTechnology: number;
    UI_cellReceiverPower: number;
    UI_falseTouchCounter: number;
    UI_developmentCar: number;
    UI_cameraActive: number;
    UI_cellSignalBars: number;
    UI_pcbTemperature: number;
    UI_cpuTemperature: number;
};

export type ID016DI_bmsRequest = {
    DI_bmsRequestInterfaceVersion: number;
    DI_bmsOpenContactorsRequest: number;
};

export type ID082UI_tripPlanning = {
    UI_tripPlanningActive: number;
    UI_navToSupercharger: number;
    UI_requestActiveBatteryHeating: number;
    UI_predictedEnergy: "TRIP_TOO_LONG" | "SNA";
    UI_hindsightEnergy: "TRIP_TOO_LONG" | "SNA";
    UI_energyAtDestination: "TRIP_TOO_LONG" | "SNA";
};

export type ID101RCM_inertial1 = {
    RCM_yawRate: "SNA";
    RCM_pitchRate: "SNA";
    RCM_rollRate: "SNA";
    RCM_rollRateQF: "INIT" | "VALID" | "TEMP_INVALID" | "FAULTED";
    RCM_yawRateQF: "FAULTED" | "NOT_FAULTED";
    RCM_pitchRateQF: "INIT" | "VALID" | "TEMP_INVALID" | "FAULTED";
    RCM_inertial1Counter: number;
    RCM_inertial1Checksum: number;
};

export type ID111RCM_inertial2 = {
    RCM_longitudinalAccel: "SNA";
    RCM_lateralAccel: "SNA";
    RCM_verticalAccel: "SNA";
    RCM_longitudinalAccelQF: "FAULTED" | "NOT_FAULTED";
    RCM_lateralAccelQF: "FAULTED" | "NOT_FAULTED";
    RCM_verticalAccelQF: "FAULTED" | "NOT_FAULTED";
    RCM_inertial2Counter: number;
    RCM_inertial2Checksum: number;
};

export type RCM_inertial2New = {
    RCM_longitudinalAccel: number;
    RCM_lateralAccel: number;
    RCM_verticalAccel: number;
    RCM_longitudinalAccelQF: number;
    RCM_lateralAccelQF: number;
    RCM_verticalAccelQF: number;
    RCM_inertial2Counter: number;
    RCM_inertial2Checksum: number;
};

export type ID102VCLEFT_doorStatus = {
    VCLEFT_frontLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCLEFT_rearLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCLEFT_frontLatchSwitch: number;
    VCLEFT_rearLatchSwitch: number;
    VCLEFT_frontHandlePulled: number;
    VCLEFT_rearHandlePulled: number;
    VCLEFT_frontRelActuatorSwitch: number;
    VCLEFT_rearRelActuatorSwitch: number;
    VCLEFT_frontHandlePWM: number;
    VCLEFT_rearHandlePWM: number;
    VCLEFT_frontIntSwitchPressed: number;
    VCLEFT_rearIntSwitchPressed: number;
    VCLEFT_mirrorTiltXPosition: number;
    VCLEFT_mirrorTiltYPosition: number;
    VCLEFT_mirrorState: "MIRROR_STATE_IDLE" | "MIRROR_STATE_TILT_X" | "MIRROR_STATE_TILT_Y" | "MIRROR_STATE_FOLD_UNFOLD" | "MIRROR_STATE_RECALL";
    VCLEFT_mirrorFoldState: "MIRROR_FOLD_STATE_UNKNOWN" | "MIRROR_FOLD_STATE_FOLDED" | "MIRROR_FOLD_STATE_UNFOLDED" | "MIRROR_FOLD_STATE_FOLDING" | "MIRROR_FOLD_STATE_UNFOLDING";
    VCLEFT_mirrorRecallState: "MIRROR_RECALL_STATE_INIT" | "MIRROR_RECALL_STATE_RECALLING_AXIS_1" | "MIRROR_RECALL_STATE_RECALLING_AXIS_2" | "MIRROR_RECALL_STATE_RECALLING_COMPLETE" | "MIRROR_RECALL_STATE_RECALLING_FAILED" | "MIRROR_RECALL_STATE_RECALLING_STOPPED";
    VCLEFT_mirrorHeatState: "HEATER_STATE_SNA" | "HEATER_STATE_ON" | "HEATER_STATE_OFF" | "HEATER_STATE_OFF_UNAVAILABLE" | "HEATER_STATE_FAULT";
    VCLEFT_mirrorDipped: number;
    VCLEFT_frontHandlePulledPersist: number;
};

export type ID103VCRIGHT_doorStatus = {
    VCRIGHT_frontLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCRIGHT_rearLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCRIGHT_frontLatchSwitch: number;
    VCRIGHT_rearLatchSwitch: number;
    VCRIGHT_frontHandlePulled: number;
    VCRIGHT_rearHandlePulled: number;
    VCRIGHT_frontRelActuatorSwitch: number;
    VCRIGHT_rearRelActuatorSwitch: number;
    VCRIGHT_frontHandlePWM: number;
    VCRIGHT_rearHandlePWM: number;
    VCRIGHT_reservedForBackCompat: number;
    VCRIGHT_frontHandlePulledPersist: number;
    VCRIGHT_frontIntSwitchPressed: number;
    VCRIGHT_rearIntSwitchPressed: number;
    VCRIGHT_mirrorTiltXPosition: number;
    VCRIGHT_mirrorTiltYPosition: number;
    VCRIGHT_mirrorState: "MIRROR_STATE_IDLE" | "MIRROR_STATE_TILT_X" | "MIRROR_STATE_TILT_Y" | "MIRROR_STATE_FOLD_UNFOLD" | "MIRROR_STATE_RECALL";
    VCRIGHT_mirrorFoldState: "MIRROR_FOLD_STATE_UNKNOWN" | "MIRROR_FOLD_STATE_FOLDED" | "MIRROR_FOLD_STATE_UNFOLDED" | "MIRROR_FOLD_STATE_FOLDING" | "MIRROR_FOLD_STATE_UNFOLDING";
    VCRIGHT_trunkLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCRIGHT_mirrorRecallState: "MIRROR_RECALL_STATE_INIT" | "MIRROR_RECALL_STATE_RECALLING_AXIS_1" | "MIRROR_RECALL_STATE_RECALLING_AXIS_2" | "MIRROR_RECALL_STATE_RECALLING_COMPLETE" | "MIRROR_RECALL_STATE_RECALLING_FAILED" | "MIRROR_RECALL_STATE_RECALLING_STOPPED";
    VCRIGHT_mirrorDipped: number;
};

export type ID113GTW_bmpDebug = {
    GTW_bmpState: "BMP_STATE_OFF" | "BMP_STATE_ON" | "BMP_STATE_ASLEEP" | "BMP_STATE_MIA" | "BMP_STATE_RESET" | "BMP_STATE_POWER_CYCLE" | "DUMMY";
    GTW_BMP_AWAKE_PIN: number;
    GTW_BMP_PGOOD_PIN: number;
    GTW_BMP_PERIPH_nRST_3V3_PIN: number;
    GTW_BMP_GTW_PMIC_THERMTRIP: number;
    GTW_BMP_GTW_SOC_PWROK: number;
    GTW_BMP_GTW_PMIC_ERROR: number;
    GTW_BMP_GTW_nSUSPWR: number;
    GTW_BMP_PMIC_PWR_ON: number;
    GTW_BMP_GTW_PMIC_ON: number;
};

export type ID119VCSEC_windowRequests = {
    VCSEC_windowRequestLF: number;
    VCSEC_windowRequestLR: number;
    VCSEC_windowRequestRF: number;
    VCSEC_windowRequestRR: number;
    VCSEC_windowRequestType: "WINDOW_REQUEST_IDLE" | "WINDOW_REQUEST_GOTO_PERCENT" | "WINDOW_REQUEST_GOTO_CRACKED" | "WINDOW_REQUEST_GOTO_CLOSED";
    VCSEC_windowRequestPercent: "SNA";
    VCSEC_hvacRunScreenProtectOnly: number;
};

export type ID122VCLEFT_doorStatus2 = {
    VCLEFT_frontLatchRelDuty: number;
    VCLEFT_rearLatchRelDuty: number;
    VCLEFT_vehicleInMotion: number;
    VCLEFT_frontDoorState: "DOOR_STATE_UNKNOWN" | "DOOR_STATE_CLOSED" | "DOOR_STATE_WAIT_FOR_SHORT_DROP" | "DOOR_STATE_RELEASING_LATCH" | "DOOR_STATE_OPEN_OR_AJAR";
    VCLEFT_rearDoorState: "DOOR_STATE_UNKNOWN" | "DOOR_STATE_CLOSED" | "DOOR_STATE_WAIT_FOR_SHORT_DROP" | "DOOR_STATE_RELEASING_LATCH" | "DOOR_STATE_OPEN_OR_AJAR";
    VCLEFT_frontHandleRawStatus: "EXTERIOR_HANDLE_STATUS_SNA" | "EXTERIOR_HANDLE_STATUS_INDETERMINATE" | "EXTERIOR_HANDLE_STATUS_NOT_ACTIVE" | "EXTERIOR_HANDLE_STATUS_ACTIVE" | "EXTERIOR_HANDLE_STATUS_DISCONNECTED" | "EXTERIOR_HANDLE_STATUS_FAULT";
    VCLEFT_rearHandleRawStatus: "EXTERIOR_HANDLE_STATUS_SNA" | "EXTERIOR_HANDLE_STATUS_INDETERMINATE" | "EXTERIOR_HANDLE_STATUS_NOT_ACTIVE" | "EXTERIOR_HANDLE_STATUS_ACTIVE" | "EXTERIOR_HANDLE_STATUS_DISCONNECTED" | "EXTERIOR_HANDLE_STATUS_FAULT";
    VCLEFT_frontHandleDebounceStatus: "EXTERIOR_HANDLE_STATUS_SNA" | "EXTERIOR_HANDLE_STATUS_INDETERMINATE" | "EXTERIOR_HANDLE_STATUS_NOT_ACTIVE" | "EXTERIOR_HANDLE_STATUS_ACTIVE" | "EXTERIOR_HANDLE_STATUS_DISCONNECTED" | "EXTERIOR_HANDLE_STATUS_FAULT";
    VCLEFT_rearHandleDebounceStatus: "EXTERIOR_HANDLE_STATUS_SNA" | "EXTERIOR_HANDLE_STATUS_INDETERMINATE" | "EXTERIOR_HANDLE_STATUS_NOT_ACTIVE" | "EXTERIOR_HANDLE_STATUS_ACTIVE" | "EXTERIOR_HANDLE_STATUS_DISCONNECTED" | "EXTERIOR_HANDLE_STATUS_FAULT";
    VCLEFT_frontHandle5vEnable: number;
    VCLEFT_rearHandle5vEnable: number;
    VCLEFT_mirrorFoldMaxCurrent: number;
};

export type ID123UI_alertMatrix1 = {
    UI_a001_DriverDoorOpen: number;
    UI_a002_DoorOpen: number;
    UI_a003_TrunkOpen: number;
    UI_a004_FrunkOpen: number;
    UI_a005_HeadlightsOnDoorOpen: number;
    UI_a006_RemoteServiceAlert: number;
    UI_a007_SoftPackConfigMismatch: number;
    UI_a008_TouchScreenError: number;
    UI_a009_SquashfsError: number;
    UI_a010_MapsMissing: number;
    UI_a011_IncorrectMap: number;
    UI_a012_NotOnPrivateProperty: number;
    UI_a013_TPMSHardWarning: number;
    UI_a014_TPMSSoftWarning: number;
    UI_a015_TPMSOverPressureWarning: number;
    UI_a016_TPMSTemperatureWarning: number;
    UI_a017_TPMSSystemFault: number;
    UI_a018_SlipStartOn: number;
    UI_a019_ParkBrakeFault: number;
    UI_a020_SteeringReduced: number;
    UI_a021_RearSeatbeltUnbuckled: number;
    UI_a022_ApeFusesEtc: number;
    UI_a023_CellInternetCheckFailed: number;
    UI_a024_WifiInternetCheckFailed: number;
    UI_a025_WifiOnlineCheckFailed: number;
    UI_a026_ModemResetLoopDetected: number;
    UI_a027_AutoSteerMIA: number;
    UI_a028_FrontTrunkPopupClosed: number;
    UI_a029_ModemMIA: number;
    UI_a030_ModemVMCrash: number;
    UI_a031_BrakeFluidLow: number;
    UI_a032_CellModemRecoveryResets: number;
    UI_a033_ApTrialExpired: number;
    UI_a034_WakeupProblem: number;
    UI_a035_AudioWatchdogKernelError: number;
    UI_a036_AudioWatchdogHfpError: number;
    UI_a037_AudioWatchdogXrunStormEr: number;
    UI_a038_AudioWatchdogA2bI2cLocku: number;
    UI_a039_AudioA2bNeedRediscovery: number;
    UI_a040_HomelinkTransmit: number;
    UI_a041_AudioDmesgXrun: number;
    UI_a042_AudioDmesgRtThrottling: number;
    UI_a043_InvalidMapDataOverride: number;
    UI_a044_AudioDmesgDspException: number;
    UI_a045_ECallNeedsService: number;
    UI_a046_BackupCameraStreamError: number;
    UI_a047_CellRoamingDisallowed: number;
    UI_a048_AudioPremiumAmpCheckFail: number;
    UI_a049_BrakeShiftRequired: number;
    UI_a050_BackupCameraIPUTimeout: number;
    UI_a051_BackupCameraFrameTimeout: number;
    UI_a052_KernelPanicReported: number;
    UI_a053_QtCarExitError: number;
    UI_a054_AudioBoostPowerBad: number;
    UI_a055_ManualECallDisabled: number;
    UI_a056_ManualECallButtonDisconn: number;
    UI_a057_CellAntennaDisconnected: number;
    UI_a058_GPSAntennaDisconnected: number;
    UI_a059_ECallSpeakerDisconnected: number;
    UI_a060_ECallMicDisconnected: number;
    UI_a061_SIMTestFailed: number;
    UI_a062_ENSTestFailed: number;
    UI_a063_CellularTestFailed: number;
    UI_a064_ModemFirmwareTestFailed: number;
};

export type ID142VCLEFT_liftgateStatus_0 = {
    VCLEFT_liftgateStatusIndex: "LIFTGATE_STATUS_INDEX_0";
    VCLEFT_liftgateState: "PLG_STATE_INIT" | "PLG_STATE_OFF" | "PLG_STATE_BACKOFF" | "PLG_STATE_OPENING" | "PLG_STATE_CLOSING" | "PLG_STATE_CLOSED" | "PLG_STATE_LATCH_OPENING" | "PLG_STATE_LATCH_CLOSING" | "PLG_STATE_NOT_INSTALLED" | "PLG_STATE_UNKNOWN" | "PLG_STATE_LATCH_EXIT" | "PLG_STATE_END_OF_TRAVEL" | "PLG_STATE_LATCH_ENTRY";
    VCLEFT_liftgateRequestSource: "PLG_REQUEST_SOURCE_NONE" | "PLG_REQUEST_SOURCE_MCU_SWITCH" | "PLG_REQUEST_SOURCE_EXTERIOR" | "PLG_REQUEST_SOURCE_SHUTFACE" | "PLG_REQUEST_SOURCE_KEY_TRUNK_BUTTON" | "PLG_REQUEST_SOURCE_CLOSE_ALL" | "PLG_REQUEST_SOURCE_MCU_CLOSE" | "PLG_REQUEST_SOURCE_UDS";
    VCLEFT_liftgateStoppingCondition: "PLG_STOPPING_CONDITION_NONE" | "PLG_STOPPING_CONDITION_PINCH" | "PLG_STOPPING_CONDITION_OBSTACLE_STALL" | "PLG_STOPPING_CONDITION_LOW_12V" | "PLG_STOPPING_CONDITION_STATE_TIMEOUT" | "PLG_STOPPING_CONDITION_VEHICLE_AT_SPEED" | "PLG_STOPPING_CONDITION_OBSTACLE_CURRENT" | "PLG_STOPPING_CONDITION_OBSTACLE_TRAJ_POS" | "PLG_STOPPING_CONDITION_OBSTACLE_TRAJ_VEL" | "PLG_STOPPING_CONDITION_UNCALIBRATED" | "PLG_STOPPING_CONDITION_LATCH_FAULT" | "PLG_STOPPING_CONDITION_COUNT";
    VCLEFT_liftgateMvmntNotAllowedCo: "PLG_MVMT_NOT_ALLOWED_NONE" | "PLG_MVMT_NOT_ALLOWED_LOW_12V" | "PLG_MVMT_NOT_ALLOWED_VEHICLE_AT_SPEED" | "PLG_MVMT_NOT_ALLOWED_UNCALIBRATED" | "PLG_MVMT_NOT_ALLOWED_EXTERIOR_PRESS_AT_MAX_OPEN" | "PLG_MVMT_NOT_ALLOWED_LOCKED";
    VCLEFT_liftgatePositionCalibrate: number;
    VCLEFT_liftgateUIChimeRequest: "LIFTGATE_CHIME_REQUEST_NONE" | "LIFTGATE_CHIME_REQUEST_ONE_SHORT" | "LIFTGATE_CHIME_REQUEST_TWO_SHORT" | "LIFTGATE_CHIME_REQUEST_THREE_SHORT" | "LIFTGATE_CHIME_REQUEST_ONE_LONG";
    VCLEFT_liftgatePhysicalChimeRequ: "LIFTGATE_CHIME_REQUEST_NONE" | "LIFTGATE_CHIME_REQUEST_ONE_SHORT" | "LIFTGATE_CHIME_REQUEST_TWO_SHORT" | "LIFTGATE_CHIME_REQUEST_THREE_SHORT" | "LIFTGATE_CHIME_REQUEST_ONE_LONG";
    VCLEFT_liftgateLatchRequest: "LATCH_REQUEST_NONE" | "LATCH_REQUEST_CINCH" | "LATCH_REQUEST_RELEASE" | "LATCH_REQUEST_FORCE_RELEASE" | "LATCH_REQUEST_RESET";
};

export type ID142VCLEFT_liftgateStatus_1 = {
    VCLEFT_liftgateStatusIndex: "LIFTGATE_STATUS_INDEX_1";
    VCLEFT_liftgateStrutDutyCycle: number;
    VCLEFT_liftgateStrutCurrent: number;
    VCLEFT_liftgatePosition: number;
    VCLEFT_liftgateSpeed: number;
};

export type ID142VCLEFT_liftgateStatus_2 = {
    VCLEFT_liftgateStatusIndex: "LIFTGATE_STATUS_INDEX_INVALID";
};

export type ID142VCLEFT_liftgateStatus = ID142VCLEFT_liftgateStatus_0 | ID142VCLEFT_liftgateStatus_1 | ID142VCLEFT_liftgateStatus_2;

export type ID145ESP_status = {
    ESP_statusChecksum: number;
    ESP_statusCounter: number;
    ESP_espModeActive: "ESP_MODE_00_NORMAL" | "ESP_MODE_01" | "ESP_MODE_02" | "ESP_MODE_03";
    ESP_stabilityControlSts2: "INIT" | "ON" | "ENGAGED" | "FAULTED";
    ESP_ebdFaultLamp: "EBD_FAULT_LAMP_OFF" | "EBD_FAULT_LAMP_ON";
    ESP_absFaultLamp: "ABS_FAULT_LAMP_OFF" | "ABS_FAULT_LAMP_ON";
    ESP_espFaultLamp: "ESP_FAULT_LAMP_OFF" | "ESP_FAULT_LAMP_ON";
    ESP_hydraulicBoostEnabled: number;
    ESP_espLampFlash: "ESP_LAMP_OFF" | "ESP_LAMP_FLASH";
    ESP_brakeLamp: "LAMP_OFF" | "LAMP_ON";
    ESP_absBrakeEvent2: "ABS_EVENT_NOT_ACTIVE" | "ABS_EVENT_ACTIVE_FRONT_REAR" | "ABS_EVENT_ACTIVE_FRONT" | "ABS_EVENT_ACTIVE_REAR";
    ESP_longitudinalAccelQF: "UNDEFINABLE_ACCURACY" | "IN_SPEC";
    ESP_lateralAccelQF: "UNDEFINABLE_ACCURACY" | "IN_SPEC";
    ESP_yawRateQF: "UNDEFINABLE_ACCURACY" | "IN_SPEC";
    ESP_steeringAngleQF: "UNDEFINABLE_ACCURACY" | "IN_SPEC";
    ESP_brakeDiscWipingActive: "BDW_INACTIVE" | "BDW_ACTIVE";
    ESP_driverBrakeApply: "NotInit_orOff" | "Not_Applied" | "Driver_applying_brakes" | "Faulty_SNA";
    ESP_brakeApply: "BLS_INACTIVE" | "BLS_ACTIVE";
    ESP_cdpStatus: "CDP_IS_NOT_AVAILABLE" | "CDP_IS_AVAILABLE" | "ACTUATING_EPB_CDP" | "CDP_COMMAND_INVALID";
    ESP_ptcTargetState: "FAULT" | "BACKUP" | "ON" | "SNA";
    ESP_btcTargetState: "OFF" | "BACKUP" | "ON" | "SNA";
    ESP_ebrStandstillSkid: "NO_STANDSTILL_SKID" | "STANDSTILL_SKID_DETECTED";
    ESP_ebrStatus: "EBR_IS_NOT_AVAILABLE" | "EBR_IS_AVAILABLE" | "ACTUATING_DI_EBR" | "EBR_COMMAND_INVALID";
    ESP_brakeTorqueTarget: "SNA";
};

export type ID1D6DI_limits = {
    DI_limitPCBTemp: number;
    DI_limitInverterTemp: number;
    DI_limitStatorTemp: number;
    DI_limitPoleTemp: number;
    DI_limitLimpMode: number;
    DI_limitDeltaFluidTemp: number;
    DI_limitDischargePower: number;
    DI_limitRegenPower: number;
    DI_limitMotorCurrent: number;
    DI_limitMotorVoltage: number;
    DI_limitDriveTorque: number;
    DI_limitRegenTorque: number;
    DI_limitTCDrive: number;
    DI_limitTCRegen: number;
    DI_limitShift: number;
    DI_limitBaseSpeed: number;
    DI_limitIBat: number;
    DI_limitDcCapTemp: number;
    DI_limitVBatLow: number;
    DI_limitVBatHigh: number;
    DI_limitMotorSpeed: number;
    DI_limitVehicleSpeed: number;
    DI_limitDiff: number;
    DI_limitGracefulPowerOff: number;
    DI_limitIGBTJunctTemp: number;
    DI_limitShockTorque: number;
    DI_limitOilPumpFluidTemp: number;
    DI_limitStatorFrequency: number;
    DI_limitClutch: number;
    DI_limitObstacleDetection: number;
    DI_limitphaseOutBusbarTemp: number;
    DI_limitphaseOutBusBarWeldTemp: number;
    DI_limitphaseOutLugTemp: number;
    DI_limitdcLinkCapTemp: number;
    DI_limitnegDcBusbarTemp: number;
    DI_limitposDcBusbarTemp: number;
    DI_limitRotorTemp: number;
    DI_limithvDcCableTemp: number;
};

export type ID20AHVP_contactorState = {
    HVP_packContNegativeState: "CONTACTOR_STATE_SNA" | "CONTACTOR_STATE_OPEN" | "CONTACTOR_STATE_PRECHARGE" | "CONTACTOR_STATE_BLOCKED" | "CONTACTOR_STATE_PULLED_IN" | "CONTACTOR_STATE_OPENING" | "CONTACTOR_STATE_ECONOMIZED" | "CONTACTOR_STATE_WELDED";
    HVP_packContPositiveState: "CONTACTOR_STATE_SNA" | "CONTACTOR_STATE_OPEN" | "CONTACTOR_STATE_PRECHARGE" | "CONTACTOR_STATE_BLOCKED" | "CONTACTOR_STATE_PULLED_IN" | "CONTACTOR_STATE_OPENING" | "CONTACTOR_STATE_ECONOMIZED" | "CONTACTOR_STATE_WELDED";
    HVP_fcContPositiveAuxOpen: number;
    HVP_fcContNegativeAuxOpen: number;
    HVP_packContactorSetState: "CONTACTOR_SET_STATE_SNA" | "CONTACTOR_SET_STATE_OPEN" | "CONTACTOR_SET_STATE_CLOSING" | "CONTACTOR_SET_STATE_BLOCKED" | "CONTACTOR_SET_STATE_OPENING" | "CONTACTOR_SET_STATE_CLOSED" | "CONTACTOR_SET_STATE_PARTIAL_WELD" | "CONTACTOR_SET_STATE_WELDED" | "CONTACTOR_SET_STATE_POSITIVE_CLOSED" | "CONTACTOR_SET_STATE_NEGATIVE_CLOSED";
    HVP_fcContNegativeState: "CONTACTOR_STATE_SNA" | "CONTACTOR_STATE_OPEN" | "CONTACTOR_STATE_PRECHARGE" | "CONTACTOR_STATE_BLOCKED" | "CONTACTOR_STATE_PULLED_IN" | "CONTACTOR_STATE_OPENING" | "CONTACTOR_STATE_ECONOMIZED" | "CONTACTOR_STATE_WELDED";
    HVP_fcContPositiveState: "CONTACTOR_STATE_SNA" | "CONTACTOR_STATE_OPEN" | "CONTACTOR_STATE_PRECHARGE" | "CONTACTOR_STATE_BLOCKED" | "CONTACTOR_STATE_PULLED_IN" | "CONTACTOR_STATE_OPENING" | "CONTACTOR_STATE_ECONOMIZED" | "CONTACTOR_STATE_WELDED";
    HVP_fcContactorSetState: "CONTACTOR_SET_STATE_SNA" | "CONTACTOR_SET_STATE_OPEN" | "CONTACTOR_SET_STATE_CLOSING" | "CONTACTOR_SET_STATE_BLOCKED" | "CONTACTOR_SET_STATE_OPENING" | "CONTACTOR_SET_STATE_CLOSED" | "CONTACTOR_SET_STATE_PARTIAL_WELD" | "CONTACTOR_SET_STATE_WELDED" | "CONTACTOR_SET_STATE_POSITIVE_CLOSED" | "CONTACTOR_SET_STATE_NEGATIVE_CLOSED";
    HVP_fcCtrsRequestStatus: "REQUEST_NOT_ACTIVE" | "REQUEST_ACTIVE" | "REQUEST_COMPLETED";
    HVP_fcCtrsResetRequestRequired: number;
    HVP_fcCtrsOpenNowRequested: number;
    HVP_fcCtrsOpenRequested: number;
    HVP_fcCtrsClosingAllowed: number;
    HVP_packCtrsRequestStatus: "REQUEST_NOT_ACTIVE" | "REQUEST_ACTIVE" | "REQUEST_COMPLETED";
    HVP_packCtrsResetRequestRequired: number;
    HVP_packCtrsOpenNowRequested: number;
    HVP_packCtrsOpenRequested: number;
    HVP_packCtrsClosingAllowed: number;
    HVP_dcLinkAllowedToEnergize: number;
    HVP_pyroTestInProgress: number;
    HVP_hvilStatus: "UNKNOWN" | "STATUS_OK" | "CURRENT_SOURCE_FAULT" | "INTERNAL_OPEN_FAULT" | "VEHICLE_OPEN_FAULT" | "PENTHOUSE_LID_OPEN_FAULT" | "UNKNOWN_LOCATION_OPEN_FAULT" | "VEHICLE_NODE_FAULT" | "NO_12V_SUPPLY" | "VEHICLE_OR_PENTHOUSE_LID_OPEN_FAULT";
    HVP_fcLinkAllowedToEnergize: "FC_LINK_ENERGY_NONE" | "FC_LINK_ENERGY_AC" | "FC_LINK_ENERGY_DC";
};

export type ID20EPARK_sdiFront = {
    PARK_sdiSensor1RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor2RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor3RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor4RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor5RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor6RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiFrontCounter: number;
    PARK_sdiFrontChecksum: number;
};

export type ID219VCSEC_TPMSData_0 = {
    VCSEC_TPMSDataIndex: "TPMS_DATA_SENSOR_0";
    VCSEC_TPMSPressure0: "SNA";
    VCSEC_TPMSTemperature0: "SNA";
    VCSEC_TPMSBatVoltage0: "SNA";
    VCSEC_TPMSLocation0: "LOCATION_FL" | "LOCATION_FR" | "LOCATION_RL" | "LOCATION_RR" | "LOCATION_UNKNOWN";
};

export type ID219VCSEC_TPMSData_1 = {
    VCSEC_TPMSDataIndex: "TPMS_DATA_SENSOR_1";
    VCSEC_TPMSPressure1: "SNA";
    VCSEC_TPMSTemperature1: "SNA";
    VCSEC_TPMSBatVoltage1: "SNA";
    VCSEC_TPMSLocation1: "LOCATION_FL" | "LOCATION_FR" | "LOCATION_RL" | "LOCATION_RR" | "LOCATION_UNKNOWN";
};

export type ID219VCSEC_TPMSData_2 = {
    VCSEC_TPMSDataIndex: "TPMS_DATA_SENSOR_2";
    VCSEC_TPMSPressure2: "SNA";
    VCSEC_TPMSTemperature2: "SNA";
    VCSEC_TPMSBatVoltage2: "SNA";
    VCSEC_TPMSLocation2: "LOCATION_FL" | "LOCATION_FR" | "LOCATION_RL" | "LOCATION_RR" | "LOCATION_UNKNOWN";
};

export type ID219VCSEC_TPMSData_3 = {
    VCSEC_TPMSDataIndex: "TPMS_DATA_SENSOR_3";
    VCSEC_TPMSPressure3: "SNA";
    VCSEC_TPMSTemperature3: "SNA";
    VCSEC_TPMSBatVoltage3: "SNA";
    VCSEC_TPMSLocation3: "LOCATION_FL" | "LOCATION_FR" | "LOCATION_RL" | "LOCATION_RR" | "LOCATION_UNKNOWN";
};

export type ID219VCSEC_TPMSData = ID219VCSEC_TPMSData_0 | ID219VCSEC_TPMSData_1 | ID219VCSEC_TPMSData_2 | ID219VCSEC_TPMSData_3;

export type ID204PCS_chgStatus = {
    PCS_chgMainState: "PCS_CHG_STATE_INIT" | "PCS_CHG_STATE_IDLE" | "PCS_CHG_STATE_STARTUP" | "PCS_CHG_STATE_WAIT_FOR_LINE_VOLTAGE" | "PCS_CHG_STATE_QUALIFY_LINE_CONFIG" | "PCS_CHG_STATE_SYSTEM_CONFIG" | "PCS_CHG_STATE_ENABLE" | "PCS_CHG_STATE_SHUTDOWN" | "PCS_CHG_STATE_FAULTED" | "PCS_CHG_STATE_CLEAR_FAULTS";
    PCS_hvChargeStatus: "PCS_CHARGE_STANDBY" | "PCS_CHARGE_BLOCKED" | "PCS_CHARGE_ENABLED" | "PCS_CHARGE_FAULTED";
    PCS_gridConfig: "GRID_CONFIG_SNA" | "GRID_CONFIG_SINGLE_PHASE" | "GRID_CONFIG_THREE_PHASE" | "GRID_CONFIG_THREE_PHASE_DELTA";
    PCS_chgPHAEnable: number;
    PCS_chgPHBEnable: number;
    PCS_chgPHCEnable: number;
    PCS_chgInstantAcPowerAvailable: number;
    PCS_chgMaxAcPowerAvailable: number;
    PCS_chgPHALineCurrentRequest: number;
    PCS_chgPHBLineCurrentRequest: number;
    PCS_chgPHCLineCurrentRequest: number;
    PCS_chgPwmEnableLine: number;
    PCS_chargeShutdownRequest: "NO_SHUTDOWN_REQUESTED" | "GRACEFUL_SHUTDOWN_REQUESTED" | "EMERGENCY_SHUTDOWN_REQUESTED";
    PCS_hwVariantType: "PCS_48A_SINGLE_PHASE_VARIANT" | "PCS_32A_SINGLE_PHASE_VARIANT" | "PCS_THREE_PHASES_VARIANT" | "PCS_HW_VARIANT_TYPE_SNA";
};

export type ID22AHVP_pcsControl = {
    HVP_dcLinkVoltageRequest: number;
    HVP_pcsControlRequest: "SHUTDOWN" | "SUPPORT" | "PRECHARGE" | "DISCHARGE";
    HVP_pcsChargeHwEnabled: number;
    HVP_pcsDcdcHwEnabled: number;
    HVP_dcLinkVoltageFiltered: "SNA";
};

export type ID232BMS_contactorRequest = {
    BMS_fcContactorRequest: "SET_REQUEST_SNA" | "SET_REQUEST_CLOSE" | "SET_REQUEST_OPEN" | "SET_REQUEST_OPEN_IMMEDIATELY" | "SET_REQUEST_CLOSE_NEGATIVE_ONLY" | "SET_REQUEST_CLOSE_POSITIVE_ONLY";
    BMS_packContactorRequest: "SET_REQUEST_SNA" | "SET_REQUEST_CLOSE" | "SET_REQUEST_OPEN" | "SET_REQUEST_OPEN_IMMEDIATELY" | "SET_REQUEST_CLOSE_NEGATIVE_ONLY" | "SET_REQUEST_CLOSE_POSITIVE_ONLY";
    BMS_gpoHasCompleted: number;
    BMS_ensShouldBeActiveForDrive: number;
    BMS_pcsPwmDisable: number;
    BMS_internalHvilSenseV: "SNA";
    BMS_fcLinkOkToEnergizeRequest: "FC_LINK_ENERGY_NONE" | "FC_LINK_ENERGY_AC" | "FC_LINK_ENERGY_DC";
};

export type ID273UI_vehicleControl = {
    UI_accessoryPowerRequest: number;
    UI_frontFogSwitch: number;
    UI_summonActive: number;
    UI_frunkRequest: number;
    UI_wiperMode: "WIPER_MODE_SNA" | "WIPER_MODE_SERVICE" | "WIPER_MODE_NORMAL" | "WIPER_MODE_PARK";
    UI_steeringBacklightEnabled: "STEERING_BACKLIGHT_DISABLED" | "STEERING_BACKLIGHT_ENABLED";
    UI_steeringButtonMode: "STEERING_BUTTON_MODE_OFF" | "STEERING_BUTTON_MODE_STEERING_COLUMN_ADJ" | "STEERING_BUTTON_MODE_MIRROR_LEFT" | "STEERING_BUTTON_MODE_MIRROR_RIGHT" | "STEERING_BUTTON_MODE_HEADLIGHT_LEFT" | "STEERING_BUTTON_MODE_HEADLIGHT_RIGHT";
    UI_walkUpUnlock: number;
    UI_walkAwayLock: number;
    UI_unlockOnPark: number;
    UI_globalUnlockOn: number;
    UI_childDoorLockOn: number;
    UI_lockRequest: "UI_LOCK_REQUEST_IDLE" | "UI_LOCK_REQUEST_LOCK" | "UI_LOCK_REQUEST_UNLOCK" | "UI_LOCK_REQUEST_REMOTE_UNLOCK" | "UI_LOCK_REQUEST_REMOTE_LOCK" | "UI_LOCK_REQUEST_SNA";
    UI_alarmEnabled: number;
    UI_intrusionSensorOn: number;
    UI_stop12vSupport: number;
    UI_rearFogSwitch: number;
    UI_mirrorFoldRequest: "MIRROR_FOLD_REQUEST_IDLE" | "MIRROR_FOLD_REQUEST_RETRACT" | "MIRROR_FOLD_REQUEST_PRESENT" | "MIRROR_FOLD_REQUEST_SNA";
    UI_mirrorHeatRequest: number;
    UI_remoteStartRequest: "UI_REMOTE_START_REQUEST_IDLE" | "UI_REMOTE_START_REQUEST_START" | "UI_REMOTE_START_REQUEST_SNA";
    UI_seeYouHomeLightingOn: number;
    UI_powerOff: number;
    UI_displayBrightnessLevel: "SNA";
    UI_ambientLightingEnabled: number;
    UI_autoHighBeamEnabled: number;
    UI_frontLeftSeatHeatReq: "HEATER_REQUEST_OFF" | "HEATER_REQUEST_LEVEL1" | "HEATER_REQUEST_LEVEL2" | "HEATER_REQUEST_LEVEL3";
    UI_frontRightSeatHeatReq: "HEATER_REQUEST_OFF" | "HEATER_REQUEST_LEVEL1" | "HEATER_REQUEST_LEVEL2" | "HEATER_REQUEST_LEVEL3";
    UI_rearLeftSeatHeatReq: "HEATER_REQUEST_OFF" | "HEATER_REQUEST_LEVEL1" | "HEATER_REQUEST_LEVEL2" | "HEATER_REQUEST_LEVEL3";
    UI_rearCenterSeatHeatReq: "HEATER_REQUEST_OFF" | "HEATER_REQUEST_LEVEL1" | "HEATER_REQUEST_LEVEL2" | "HEATER_REQUEST_LEVEL3";
    UI_rearRightSeatHeatReq: "HEATER_REQUEST_OFF" | "HEATER_REQUEST_LEVEL1" | "HEATER_REQUEST_LEVEL2" | "HEATER_REQUEST_LEVEL3";
    UI_autoFoldMirrorsOn: number;
    UI_mirrorDipOnReverse: number;
    UI_remoteClosureRequest: "UI_REMOTE_CLOSURE_REQUEST_IDLE" | "UI_REMOTE_CLOSURE_REQUEST_REAR_TRUNK_MOVE" | "UI_REMOTE_CLOSURE_REQUEST_FRONT_TRUNK_MOVE" | "UI_REMOTE_CLOSURE_REQUEST_SNA";
    UI_wiperRequest: "WIPER_REQUEST_SNA" | "WIPER_REQUEST_OFF" | "WIPER_REQUEST_AUTO" | "WIPER_REQUEST_SLOW_INTERMITTENT" | "WIPER_REQUEST_FAST_INTERMITTENT" | "WIPER_REQUEST_SLOW_CONTINUOUS" | "WIPER_REQUEST_FAST_CONTINUOUS";
    UI_domeLightSwitch: "DOME_LIGHT_SWITCH_OFF" | "DOME_LIGHT_SWITCH_ON" | "DOME_LIGHT_SWITCH_AUTO";
    UI_honkHorn: number;
    UI_driveStateRequest: "DRIVE_STATE_REQ_IDLE" | "DRIVE_STATE_REQ_START";
    UI_rearWindowLockout: number;
};

export type ID27DCP_dcChargeLimits = {
    CP_evseMaxDcCurrentLimit: number;
    CP_evseMinDcCurrentLimit: number;
    CP_evseMaxDcVoltageLimit: number;
    CP_evseMinDcVoltageLimit: number;
    CP_evseInstantDcCurrentLimit: number;
};

export type ID2BDCP_dcPowerLimits = {
    CP_evseInstantDcPowerLimit: number;
    CP_evseMaxDcPowerLimit: number;
};

export type ID42AVCSEC_TPMSConnectionData = {
    VCSEC_TPMSSensorState0: "SENSOR_NOT_PAIRED" | "SENSOR_WAIT_FOR_ADV" | "SENSOR_WAIT_FOR_CONN" | "SENSOR_CONNECTED" | "SENSOR_DISCONNECTING";
    VCSEC_TPMSRSSI0: number;
    VCSEC_TPMSConnectionTypeCurrent0: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSConnectionTypeDesired0: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSSensorState1: "SENSOR_NOT_PAIRED" | "SENSOR_WAIT_FOR_ADV" | "SENSOR_WAIT_FOR_CONN" | "SENSOR_CONNECTED" | "SENSOR_DISCONNECTING";
    VCSEC_TPMSRSSI1: number;
    VCSEC_TPMSConnectionTypeCurrent1: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSConnectionTypeDesired1: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSSensorState2: "SENSOR_NOT_PAIRED" | "SENSOR_WAIT_FOR_ADV" | "SENSOR_WAIT_FOR_CONN" | "SENSOR_CONNECTED" | "SENSOR_DISCONNECTING";
    VCSEC_TPMSRSSI2: number;
    VCSEC_TPMSConnectionTypeCurrent2: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSConnectionTypeDesired2: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSSensorState3: "SENSOR_NOT_PAIRED" | "SENSOR_WAIT_FOR_ADV" | "SENSOR_WAIT_FOR_CONN" | "SENSOR_CONNECTED" | "SENSOR_DISCONNECTING";
    VCSEC_TPMSRSSI3: number;
    VCSEC_TPMSConnectionTypeCurrent3: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
    VCSEC_TPMSConnectionTypeDesired3: "CONNECTIONTYPE_FAST" | "CONNECTIONTYPE_SLOW" | "CONNECTIONTYPE_UNKNOWN";
};

export type ID22EPARK_sdiRear = {
    PARK_sdiSensor7RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor8RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor9RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor10RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor11RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiSensor12RawDistData: "BLOCKED" | "NEAR_DETECTION" | "NO_OBJECT_DETECTED" | "SNA";
    PARK_sdiRearCounter: number;
    PARK_sdiRearChecksum: number;
};

export type ID238UI_driverAssistMapData = {
    UI_mapSpeedLimitDependency: "NONE" | "SCHOOL" | "RAIN" | "SNOW" | "TIME" | "SEASON" | "LANE" | "SNA";
    UI_roadClass: "UNKNOWN_INVALID_SNA" | "CLASS_1_MAJOR" | "CLASS_2" | "CLASS_3" | "CLASS_4" | "CLASS_5" | "CLASS_6_MINOR";
    UI_inSuperchargerGeofence: number;
    UI_mapSpeedUnits: "MPH" | "KPH";
    UI_mapSpeedLimit: "UNKNOWN" | "LESS_OR_EQ_5" | "LESS_OR_EQ_7" | "LESS_OR_EQ_10" | "LESS_OR_EQ_15" | "LESS_OR_EQ_20" | "LESS_OR_EQ_25" | "LESS_OR_EQ_30" | "LESS_OR_EQ_35" | "LESS_OR_EQ_40" | "LESS_OR_EQ_45" | "LESS_OR_EQ_50" | "LESS_OR_EQ_55" | "LESS_OR_EQ_60" | "LESS_OR_EQ_65" | "LESS_OR_EQ_70" | "LESS_OR_EQ_75" | "LESS_OR_EQ_80" | "LESS_OR_EQ_85" | "LESS_OR_EQ_90" | "LESS_OR_EQ_95" | "LESS_OR_EQ_100" | "LESS_OR_EQ_105" | "LESS_OR_EQ_110" | "LESS_OR_EQ_115" | "LESS_OR_EQ_120" | "LESS_OR_EQ_130" | "LESS_OR_EQ_140" | "LESS_OR_EQ_150" | "LESS_OR_EQ_160" | "UNLIMITED" | "SNA";
    UI_mapSpeedLimitType: "REGULAR" | "ADVISORY" | "DEPENDENT" | "BUMPS" | "UNKNOWN_SNA";
    UI_countryCode: "UNKNOWN" | "SNA";
    UI_streetCount: number;
    UI_gpsRoadMatch: number;
    UI_navRouteActive: number;
    UI_parallelAutoparkEnabled: number;
    UI_perpendicularAutoparkEnabled: number;
    UI_nextBranchDist: "SNA";
    UI_controlledAccess: number;
    UI_nextBranchLeftOffRamp: number;
    UI_nextBranchRightOffRamp: number;
    UI_rejectLeftLane: number;
    UI_rejectRightLane: number;
    UI_rejectHPP: number;
    UI_rejectNav: number;
    UI_rejectLeftFreeSpace: number;
    UI_rejectRightFreeSpace: number;
    UI_rejectAutosteer: number;
    UI_rejectHandsOn: number;
    UI_acceptBottsDots: number;
    UI_autosteerRestricted: number;
    UI_pmmEnabled: number;
    UI_scaEnabled: number;
    UI_mapDataCounter: number;
    UI_mapDataChecksum: number;
};

export type ID239DAS_lanes = {
    DAS_leftLaneExists: number;
    DAS_rightLaneExists: number;
    DAS_virtualLaneWidth: number;
    DAS_virtualLaneViewRange: number;
    DAS_virtualLaneC0: number;
    DAS_virtualLaneC1: number;
    DAS_virtualLaneC2: number;
    DAS_virtualLaneC3: number;
    DAS_leftLineUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_rightLineUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_leftFork: "LEFT_FORK_NONE" | "LEFT_FORK_AVAILABLE" | "LEFT_FORK_SELECTED" | "LEFT_FORK_UNAVAILABLE";
    DAS_rightFork: "RIGHT_FORK_NONE" | "RIGHT_FORK_AVAILABLE" | "RIGHT_FORK_SELECTED" | "RIGHT_FORK_UNAVAILABLE";
    DAS_lanesCounter: number;
};

export type ID24ADAS_visualDebug = {
    DAS_autosteerVehiclesUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_autosteerHPPUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_autosteerNavigationUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_autosteerModelUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_autosteerBottsDotsUsage: "REJECTED_UNAVAILABLE" | "AVAILABLE" | "FUSED" | "BLACKLISTED";
    DAS_offsetSide: "NO_OFFSET" | "OFFSET_RIGHT_OBJECT" | "OFFSET_LEFT_OBJECT" | "OFFSET_BOTH_OBJECTS";
    DAS_roadSurfaceType: "ROAD_SURFACE_SNA" | "ROAD_SURFACE_NORMAL" | "ROAD_SURFACE_ENHANCED";
    DAS_autosteerHealthAnomalyLevel: number;
    DAS_autosteerHealthState: "HEALTH_UNAVAILABLE" | "HEALTH_NOMINAL" | "HEALTH_DEGRADED" | "HEALTH_SEVERELY_DEGRADED" | "HEALTH_ABORTING" | "HEALTH_FAULT";
    DAS_lastLinePreferenceReason: "OTHER_LANE_DISAGREES_WITH_MODEL" | "AGREEMENT_WITH_NEIGHBOR_LANES" | "NEIGHBOR_LANE_PROBABILIY" | "NAVIGATION_BRANCH" | "AVOID_ONCOMING_LANES" | "COUNTRY_DRIVING_SIDE" | "NONE";
    DAS_plannerState: "TP_EXTSTATE_DISABLED" | "TP_EXTSTATE_VL" | "TP_EXTSTATE_FOLLOW" | "TP_EXTSTATE_LANECHANGE_REQUESTED" | "TP_EXTSTATE_LANECHANGE_IN_PROGRESS" | "TP_EXTSTATE_LANECHANGE_WAIT_FOR_SIDE_OBSTACLE" | "TP_EXTSTATE_LANECHANGE_WAIT_FOR_FWD_OBSTACLE" | "TP_EXTSTATE_LANECHANGE_ABORT";
    DAS_lastAutosteerAbortReason: "UI_ABORT_REASON_HM_LANE_VIEW_RANGE" | "UI_ABORT_REASON_HM_VIRTUAL_LANE_NO_INPUTS" | "UI_ABORT_REASON_HM_STEERING_ERROR" | "UI_ABORT_REASON_APP_ME_STATE_NOT_VISION" | "UI_ABORT_REASON_ME_MAIN_STATE_NOT_VISION" | "UI_ABORT_REASON_CAM_MSG_MIA" | "UI_ABORT_REASON_CAM_WATCHDOG" | "UI_ABORT_REASON_TRAILER_MODE" | "UI_ABORT_REASON_SIDE_COLLISION_IMMINENT" | "UI_ABORT_REASON_EPAS_EAC_DENIED" | "UI_ABORT_REASON_COMPONENT_MIA" | "UI_ABORT_REASON_CRUISE_FAULT" | "UI_ABORT_REASON_CID_SWITCH_DISABLED" | "UI_ABORT_REASON_DRIVING_OFF_NAV" | "UI_ABORT_REASON_VEHICLE_SPEED_ABOVE_MAX" | "UI_ABORT_REASON_FOLLOWER_OUTPUT_INVALID" | "UI_ABORT_REASON_PLANNER_OUTPUT_INVALID" | "UI_ABORT_REASON_EPAS_ERROR_CODE" | "UI_ABORT_REASON_ACC_CANCEL" | "UI_ABORT_REASON_CAMERA_FAILSAFES" | "UI_ABORT_REASON_NO_ABORT" | "UI_ABORT_REASON_AEB" | "UI_ABORT_REASON_SEATBELT_UNBUCKLED" | "UI_ABORT_REASON_USER_OVERRIDE_STRIKEOUT";
    DAS_devAppInterfaceEnabled: number;
    DAS_navAvailable: "DAS_NAV_UNAVAILABLE" | "DAS_NAV_AVAILABLE";
    DAS_navDistance: number;
    DAS_accSmartSpeedActive: number;
    DAS_accSmartSpeedState: "NOT_ACTIVE" | "ACTIVE_OFFRAMP" | "ACTIVE_INTEGRATING" | "ACTIVE_ONRAMP" | "SET_SPEED_SET_REQUESTED" | "OFFRAMP_DELAY" | "SNA";
    DAS_ulcInProgress: "ULC_INACTIVE" | "ULC_ACTIVE";
    DAS_behaviorType: "DAS_BEHAVIOR_INVALID" | "DAS_BEHAVIOR_IN_LANE" | "DAS_BEHAVIOR_LANE_CHANGE_LEFT" | "DAS_BEHAVIOR_LANE_CHANGE_RIGHT";
    DAS_ulcType: "ULC_TYPE_NONE" | "ULC_TYPE_NAV" | "ULC_TYPE_SPEED";
    DAS_rearVehDetectedThisCycle: "VEHICLE_NOT_DETECTED" | "VEHICLE_DETECTED";
    DAS_rearLeftVehDetectedCurrent: "VEHICLE_NOT_DETECTED" | "VEHICLE_DETECTED";
    DAS_rearRightVehDetectedTrip: "VEHICLE_NOT_DETECTED" | "VEHICLE_DETECTED";
    DAS_rearLeftVehDetectedTrip: "VEHICLE_NOT_DETECTED" | "VEHICLE_DETECTED";
};

export type ID25BAPP_environment = {
    APP_environmentRainy: number;
    APP_environmentSnowy: number;
};

export type ID25DCP_status = {
    CP_type: "CP_TYPE_US_TESLA" | "CP_TYPE_EURO_IEC" | "CP_TYPE_GB" | "CP_TYPE_IEC_CCS";
    CP_insertEnableLine: number;
    CP_chargeCablePresent: "CABLE_NOT_PRESENT" | "CABLE_PRESENT";
    CP_chargeCableSecured: number;
    CP_latchState: "CP_LATCH_SNA" | "CP_LATCH_DISENGAGED" | "CP_LATCH_ENGAGED" | "CP_LATCH_BLOCKING";
    CP_permanentPowerRequest: number;
    CP_latch2State: "CP_LATCH_SNA" | "CP_LATCH_DISENGAGED" | "CP_LATCH_ENGAGED" | "CP_LATCH_BLOCKING";
    CP_chargeDoorOpen: number;
    CP_doorControlState: "CP_doorInit" | "CP_doorIdle" | "CP_doorOpenRequested" | "CP_doorOpening" | "CP_doorSenseOpen" | "CP_doorClosing" | "CP_doorSenseClosed";
    CP_chargeCableState: "CHARGE_CABLE_UNKNOWN_SNA" | "CHARGE_CABLE_NOT_CONNECTED" | "CHARGE_CABLE_CONNECTED";
    CP_latchControlState: "CP_latchInit" | "CP_latchIdle" | "CP_latchDisengageRequested" | "CP_latchDisengaging" | "CP_latchDisengaged" | "CP_latchEngaging";
    CP_latch2ControlState: "CP_latchInit" | "CP_latchIdle" | "CP_latchDisengageRequested" | "CP_latchDisengaging" | "CP_latchDisengaged" | "CP_latchEngaging";
    CP_apsVoltage: number;
    CP_doorButtonPressed: number;
    CP_ledColor: "CP_LEDS_OFF" | "CP_LEDS_RED" | "CP_LEDS_GREEN" | "CP_LEDS_BLUE" | "CP_LEDS_WHITE" | "CP_LEDS_FLASHING_GREEN" | "CP_LEDS_FLASHING_AMBER" | "CP_LEDS_AMBER" | "CP_LEDS_RAVE" | "CP_LEDS_DEBUG" | "CP_LEDS_FLASHING_BLUE";
    CP_swcanRelayClosed: number;
    CP_UHF_controlState: "CP_UHF_INIT" | "CP_UHF_CONFIG" | "CP_UHF_IDLE" | "CP_UHF_CALIBRATE" | "CP_UHF_PREPARE_RX" | "CP_UHF_RX" | "CP_UHF_CHECK_RX" | "CP_UHF_READ_RXFIFO" | "CP_UHF_HANDLE_FOUND" | "CP_UHF_SLEEP" | "CP_UHF_FAULT";
    CP_UHF_handleFound: number;
    CP_doorOpenRequested: number;
    CP_faultLineSensed: "FAULT_LINE_CLEARED" | "FAULT_LINE_SET";
    CP_inductiveDoorState: "CP_INDUCTIVE_DOOR_INIT" | "CP_INDUCTIVE_DOOR_INIT_FROM_CHARGE" | "CP_INDUCTIVE_DOOR_INIT_FROM_DRIVE" | "CP_INDUCTIVE_DOOR_PRESENT" | "CP_INDUCTIVE_DOOR_NOT_PRESENT" | "CP_INDUCTIVE_DOOR_OFF_DRIVE" | "CP_INDUCTIVE_DOOR_OFF_CHARGE" | "CP_INDUCTIVE_DOOR_FAULT";
    CP_inductiveSensorState: "CP_INDUCTIVE_SENSOR_INIT" | "CP_INDUCTIVE_SENSOR_POLL" | "CP_INDUCTIVE_SENSOR_SHUTDOWN" | "CP_INDUCTIVE_SENSOR_PAUSE" | "CP_INDUCTIVE_SENSOR_WAIT_FOR_INIT" | "CP_INDUCTIVE_SENSOR_FAULT" | "CP_INDUCTIVE_SENSOR_RESET" | "CP_INDUCTIVE_SENSOR_CONFIG";
    CP_chargeDoorOpenUI: number;
    CP_vehicleUnlockRequest: number;
    CP_numAlertsSet: number;
    CP_coldWeatherMode: "CP_COLD_WEATHER_NONE" | "CP_COLD_WEATHER_LATCH_MITIGATION";
    CP_hvInletExposed: number;
    CP_latchEngaged: number;
    CP_coverClosed: number;
};

export type ID29DCP_dcChargeStatus = {
    CP_evseOutputDcCurrent: number;
    CP_evseOutputDcVoltage: number;
    CP_evseOutputDcCurrentStale: number;
};

export type ID2B4PCS_dcdcRailStatus = {
    PCS_dcdcLvBusVolt: number;
    PCS_dcdcHvBusVolt: number;
    PCS_dcdcLvOutputCurrent: number;
};

export type ID2B9DAS_control = {
    DAS_setSpeed: "SNA";
    DAS_accState: "ACC_CANCEL_GENERIC" | "ACC_CANCEL_CAMERA_BLIND" | "ACC_CANCEL_RADAR_BLIND" | "ACC_HOLD" | "ACC_ON" | "APC_BACKWARD" | "APC_FORWARD" | "APC_COMPLETE" | "APC_ABORT" | "APC_PAUSE" | "APC_UNPARK_COMPLETE" | "APC_SELFPARK_START" | "ACC_CANCEL_PATH_NOT_CLEAR" | "ACC_CANCEL_GENERIC_SILENT" | "ACC_CANCEL_OUT_OF_CALIBRATION" | "FAULT_SNA";
    DAS_aebEvent: "AEB_NOT_ACTIVE" | "AEB_ACTIVE" | "AEB_FAULT" | "AEB_SNA";
    DAS_jerkMin: "SNA";
    DAS_jerkMax: "SNA";
    DAS_accelMin: "SNA";
    DAS_accelMax: "SNA";
    DAS_controlCounter: number;
    DAS_controlChecksum: number;
};

export type ID2D3UI_solarData = {
    UI_solarAzimuthAngle: "SNA";
    UI_solarAzimuthAngleCarRef: "SNA";
    UI_isSunUp: "SUN_DOWN" | "SUN_UP" | "SUN_SNA";
    UI_solarElevationAngle: "SNA";
    UI_screenPCBTemperature: number;
    UI_minsToSunset: number;
    UI_minsToSunrise: number;
};

export type ID309DAS_object_0 = {
    DAS_objectId: "LEAD_VEHICLES";
    DAS_leadVehType: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN" | "IPSO";
    DAS_leadVehRelevantForControl: number;
    DAS_leadVehDx: "SNA";
    DAS_leadVehVxRel: "SNA";
    DAS_leadVehDy: number;
    DAS_leadVehId: "SNA";
    DAS_leadVeh2Type: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_leadVeh2RelevantForControl: number;
    DAS_leadVeh2Dx: "SNA";
    DAS_leadVeh2VxRel: "SNA";
    DAS_leadVeh2Dy: number;
    DAS_leadVeh2Id: "SNA";
};

export type ID309DAS_object_1 = {
    DAS_objectId: "LEFT_VEHICLES";
    DAS_leftVehType: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_leftVehRelevantForControl: number;
    DAS_leftVehDx: "SNA";
    DAS_leftVehVxRel: "SNA";
    DAS_leftVehDy: number;
    DAS_leftVehId: "SNA";
    DAS_leftVeh2Type: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_leftVeh2RelevantForControl: number;
    DAS_leftVeh2Dx: "SNA";
    DAS_leftVeh2VxRel: "SNA";
    DAS_leftVeh2Dy: number;
    DAS_leftVeh2Id: "SNA";
};

export type ID309DAS_object_2 = {
    DAS_objectId: "RIGHT_VEHICLES";
    DAS_rightVehType: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_rightVehRelevantForControl: number;
    DAS_rightVehDx: "SNA";
    DAS_rightVehVxRel: "SNA";
    DAS_rightVehDy: number;
    DAS_rightVehId: "SNA";
    DAS_rightVeh2Type: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_rightVeh2RelevantForControl: number;
    DAS_rightVeh2Dx: "SNA";
    DAS_rightVeh2VxRel: "SNA";
    DAS_rightVeh2Dy: number;
    DAS_rightVeh2Id: "SNA";
};

export type ID309DAS_object_3 = {
    DAS_objectId: "CUTIN_VEHICLE";
    DAS_cutinVehType: "UNKNOWN" | "TRUCK" | "CAR" | "MOTORCYCLE" | "BICYCLE" | "PEDESTRIAN";
    DAS_cutinVehRelevantForControl: number;
    DAS_cutinVehDx: "SNA";
    DAS_cutinVehVxRel: "SNA";
    DAS_cutinVehDy: number;
    DAS_cutinVehId: "SNA";
};

export type ID309DAS_object_4 = {
    DAS_objectId: "ROAD_SIGN";
    DAS_roadSignColor: "NONE" | "RED" | "YELLOW" | "GREEN" | "RED_YELLOW";
    DAS_roadSignId: "STOP_SIGN" | "TRAFFIC_LIGHT" | "SNA";
    DAS_roadSignStopLineDist: "SNA";
    DAS_roadSignControlActive: number;
    DAS_roadSignSource: "NONE" | "NAV" | "VISION";
    DAS_roadSignArrow: "CIRCLE" | "LEFT" | "RIGHT" | "STRAIGHT" | "UNKNOWN";
    DAS_roadSignOrientation: "UNKNOWN" | "VERTICAL_3_LIGHT" | "HORIZONTAL_3_LIGHT";
};

export type ID309DAS_object_5 = {
    DAS_objectId: "VEHICLE_HEADINGS";
    DAS_leadVehHeading: "SNA";
    DAS_leadVeh2Heading: "SNA";
    DAS_leftVehHeading: "SNA";
    DAS_leftVeh2Heading: "SNA";
    DAS_rightVehHeading: "SNA";
    DAS_rightVeh2Heading: "SNA";
    DAS_cutinVehHeading: "SNA";
};

export type ID309DAS_object = ID309DAS_object_0 | ID309DAS_object_1 | ID309DAS_object_2 | ID309DAS_object_3 | ID309DAS_object_4 | ID309DAS_object_5;

export type ID389DAS_status2 = {
    DAS_accSpeedLimit: "NONE" | "SNA";
    DAS_pmmObstacleSeverity: "PMM_NONE" | "PMM_IMMINENT_REAR" | "PMM_IMMINENT_FRONT" | "PMM_BRAKE_REQUEST" | "PMM_CRASH_REAR" | "PMM_CRASH_FRONT" | "PMM_ACCEL_LIMIT" | "PMM_SNA";
    DAS_pmmLoggingRequest: "FALSE" | "TRUE";
    DAS_activationFailureStatus: "LC_ACTIVATION_IDLE" | "LC_ACTIVATION_FAILED_1" | "LC_ACTIVATION_FAILED_2";
    DAS_pmmUltrasonicsFaultReason: "PMM_ULTRASONICS_NO_FAULT" | "PMM_ULTRASONICS_BLOCKED_FRONT" | "PMM_ULTRASONICS_BLOCKED_REAR" | "PMM_ULTRASONICS_BLOCKED_BOTH" | "PMM_ULTRASONICS_INVALID_MIA";
    DAS_pmmRadarFaultReason: "PMM_RADAR_NO_FAULT" | "PMM_RADAR_BLOCKED_FRONT" | "PMM_RADAR_INVALID_MIA";
    DAS_pmmSysFaultReason: "PMM_FAULT_NONE" | "PMM_FAULT_DAS_DISABLED" | "PMM_FAULT_SPEED" | "PMM_FAULT_DI_FAULT" | "PMM_FAULT_STEERING_ANGLE_RATE" | "PMM_FAULT_DISABLED_BY_USER" | "PMM_FAULT_ROAD_TYPE" | "PMM_FAULT_BRAKE_PEDAL_INHIBIT";
    DAS_pmmCameraFaultReason: "PMM_CAMERA_NO_FAULT" | "PMM_CAMERA_BLOCKED_FRONT" | "PMM_CAMERA_INVALID_MIA";
    DAS_ACC_report: "ACC_REPORT_TARGET_NONE" | "ACC_REPORT_TARGET_CIPV" | "ACC_REPORT_TARGET_IN_FRONT_OF_CIPV" | "ACC_REPORT_TARGET_MCVL" | "ACC_REPORT_TARGET_MCVR" | "ACC_REPORT_TARGET_CUTIN" | "ACC_REPORT_TARGET_TYPE_STOP_SIGN" | "ACC_REPORT_TARGET_TYPE_TRAFFIC_LIGHT" | "ACC_REPORT_TARGET_TYPE_IPSO" | "ACC_REPORT_TARGET_TYPE_FAULT" | "ACC_REPORT_CSA" | "ACC_REPORT_LC_HANDS_ON_REQD_STRUCK_OUT" | "ACC_REPORT_LC_EXTERNAL_STATE_ABORTING" | "ACC_REPORT_LC_EXTERNAL_STATE_ABORTED" | "ACC_REPORT_LC_EXTERNAL_STATE_ACTIVE_RESTRICTED" | "ACC_REPORT_RADAR_OBJ_ONE" | "ACC_REPORT_RADAR_OBJ_TWO" | "ACC_REPORT_TARGET_MCP" | "ACC_REPORT_FLEET_SPEEDS" | "ACC_REPORT_MCVLR_DPP" | "ACC_REPORT_MCVLR_IN_PATH" | "ACC_REPORT_CIPV_CUTTING_OUT" | "ACC_REPORT_RADAR_OBJ_FIVE" | "ACC_REPORT_CAMERA_ONLY" | "ACC_REPORT_BEHAVIOR_REPORT";
    DAS_relaxCruiseLimits: number;
    DAS_csaState: "CSA_EXTERNAL_STATE_UNAVAILABLE" | "CSA_EXTERNAL_STATE_AVAILABLE" | "CSA_EXTERNAL_STATE_ENABLE" | "CSA_EXTERNAL_STATE_HOLD";
    DAS_radarTelemetry: "RADAR_TELEMETRY_IDLE" | "RADAR_TELEMETRY_NORMAL" | "RADAR_TELEMETRY_URGENT";
    DAS_robState: "ROB_STATE_INHIBITED" | "ROB_STATE_MEASURE" | "ROB_STATE_ACTIVE" | "ROB_STATE_MAPLESS";
    DAS_driverInteractionLevel: "DRIVER_INTERACTING" | "DRIVER_NOT_INTERACTING" | "CONTINUED_DRIVER_NOT_INTERACTING";
    DAS_ppOffsetDesiredRamp: "PP_NO_OFFSET";
    DAS_longCollisionWarning: "FCM_LONG_COLLISION_WARNING_NONE" | "FCM_LONG_COLLISION_WARNING_VEHICLE_UNKNOWN" | "FCM_LONG_COLLISION_WARNING_PEDESTRIAN" | "FCM_LONG_COLLISION_WARNING_IPSO" | "FCM_LONG_COLLISION_WARNING_STOPSIGN_STOPLINE" | "FCM_LONG_COLLISION_WARNING_TFL_STOPLINE" | "FCM_LONG_COLLISION_WARNING_VEHICLE_CIPV" | "FCM_LONG_COLLISION_WARNING_VEHICLE_CUTIN" | "FCM_LONG_COLLISION_WARNING_VEHICLE_MCVL" | "FCM_LONG_COLLISION_WARNING_VEHICLE_MCVL2" | "FCM_LONG_COLLISION_WARNING_VEHICLE_MCVR" | "FCM_LONG_COLLISION_WARNING_VEHICLE_MCVR2" | "FCM_LONG_COLLISION_WARNING_VEHICLE_CIPV2" | "FCM_LONG_COLLISION_WARNING_SNA";
    DAS_status2Counter: number;
    DAS_status2Checksum: number;
};

export type ID399DAS_status = {
    DAS_autopilotState: "DISABLED" | "UNAVAILABLE" | "AVAILABLE" | "ACTIVE_NOMINAL" | "ACTIVE_RESTRICTED" | "ACTIVE_NAV" | "ABORTING" | "ABORTED" | "FAULT" | "SNA";
    DAS_blindSpotRearLeft: "NO_WARNING" | "WARNING_LEVEL_1" | "WARNING_LEVEL_2" | "SNA";
    DAS_blindSpotRearRight: "NO_WARNING" | "WARNING_LEVEL_1" | "WARNING_LEVEL_2" | "SNA";
    DAS_fusedSpeedLimit: "UNKNOWN_SNA" | "NONE";
    DAS_suppressSpeedWarning: "Do_Not_Suppress" | "Suppress_Speed_Warning";
    DAS_summonObstacle: number;
    DAS_summonClearedGate: number;
    DAS_visionOnlySpeedLimit: "UNKNOWN_SNA" | "NONE";
    DAS_heaterState: "HEATER_OFF_SNA" | "HEATER_ON";
    DAS_forwardCollisionWarning: "NONE" | "FORWARD_COLLISION_WARNING" | "SNA";
    DAS_autoparkReady: "AUTOPARK_UNAVAILABLE" | "AUTOPARK_READY";
    DAS_autoParked: number;
    DAS_autoparkWaitingForBrake: number;
    DAS_summonFwdLeashReached: number;
    DAS_summonRvsLeashReached: number;
    DAS_lssState: "LSS_STATE_FAULT" | "LSS_STATE_LDW" | "LSS_STATE_LKA" | "LSS_STATE_ELK" | "LSS_STATE_MONITOR" | "LSS_STATE_BLINDSPOT" | "LSS_STATE_ABORT" | "LSS_STATE_OFF";
    DAS_sideCollisionAvoid: "NONE" | "AVOID_LEFT" | "AVOID_RIGHT" | "SNA";
    DAS_sideCollisionWarning: "NONE" | "WARN_LEFT" | "WARN_RIGHT" | "WARN_LEFT_RIGHT";
    DAS_sideCollisionInhibit: "NO_INHIBIT" | "INHIBIT";
    DAS_laneDepartureWarning: "NONE" | "LEFT_WARNING" | "RIGHT_WARNING" | "LEFT_WARNING_SEVERE" | "RIGHT_WARNING_SEVERE" | "SNA";
    DAS_fleetSpeedState: "FLEETSPEED_UNAVAILABLE" | "FLEETSPEED_AVAILABLE" | "FLEETSPEED_ACTIVE" | "FLEETSPEED_HOLD";
    DAS_autopilotHandsOnState: "LC_HANDS_ON_NOT_REQD" | "LC_HANDS_ON_REQD_DETECTED" | "LC_HANDS_ON_REQD_NOT_DETECTED" | "LC_HANDS_ON_REQD_VISUAL" | "LC_HANDS_ON_REQD_CHIME_1" | "LC_HANDS_ON_REQD_CHIME_2" | "LC_HANDS_ON_REQD_SLOWING" | "LC_HANDS_ON_REQD_STRUCK_OUT" | "LC_HANDS_ON_SUSPENDED" | "LC_HANDS_ON_REQD_ESCALATED_CHIME_1" | "LC_HANDS_ON_REQD_ESCALATED_CHIME_2" | "LC_HANDS_ON_SNA";
    DAS_autoLaneChangeState: "ALC_UNAVAILABLE_DISABLED" | "ALC_UNAVAILABLE_NO_LANES" | "ALC_UNAVAILABLE_SONICS_INVALID" | "ALC_UNAVAILABLE_TP_FOLLOW" | "ALC_UNAVAILABLE_EXITING_HIGHWAY" | "ALC_UNAVAILABLE_VEHICLE_SPEED" | "ALC_AVAILABLE_ONLY_L" | "ALC_AVAILABLE_ONLY_R" | "ALC_AVAILABLE_BOTH" | "ALC_IN_PROGRESS_L" | "ALC_IN_PROGRESS_R" | "ALC_WAITING_FOR_SIDE_OBST_TO_PASS_L" | "ALC_WAITING_FOR_SIDE_OBST_TO_PASS_R" | "ALC_WAITING_FOR_FWD_OBST_TO_PASS_L" | "ALC_WAITING_FOR_FWD_OBST_TO_PASS_R" | "ALC_ABORT_SIDE_OBSTACLE_PRESENT_L" | "ALC_ABORT_SIDE_OBSTACLE_PRESENT_R" | "ALC_ABORT_POOR_VIEW_RANGE" | "ALC_ABORT_LC_HEALTH_BAD" | "ALC_ABORT_BLINKER_TURNED_OFF" | "ALC_ABORT_OTHER_REASON" | "ALC_UNAVAILABLE_SOLID_LANE_LINE" | "ALC_BLOCKED_VEH_TTC_L" | "ALC_BLOCKED_VEH_TTC_AND_USS_L" | "ALC_BLOCKED_VEH_TTC_R" | "ALC_BLOCKED_VEH_TTC_AND_USS_R" | "ALC_BLOCKED_LANE_TYPE_L" | "ALC_BLOCKED_LANE_TYPE_R" | "ALC_WAITING_HANDS_ON" | "ALC_ABORT_TIMEOUT" | "ALC_ABORT_MISSION_PLAN_INVALID" | "ALC_SNA";
    DAS_summonAvailable: number;
    DAS_statusCounter: number;
    DAS_statusChecksum: number;
};

export type ID39DIBST_status = {
    IBST_statusChecksum: number;
    IBST_statusCounter: number;
    IBST_iBoosterStatus: "IBOOSTER_OFF" | "IBOOSTER_INIT" | "IBOOSTER_FAILURE" | "IBOOSTER_DIAGNOSTIC" | "IBOOSTER_ACTIVE_GOOD_CHECK" | "IBOOSTER_READY" | "IBOOSTER_ACTUATION";
    IBST_driverBrakeApply: "NOT_INIT_OR_OFF" | "BRAKES_NOT_APPLIED" | "DRIVER_APPLYING_BRAKES" | "FAULT";
    IBST_internalState: "NO_MODE_ACTIVE" | "PRE_DRIVE_CHECK" | "LOCAL_BRAKE_REQUEST" | "EXTERNAL_BRAKE_REQUEST" | "DIAGNOSTIC" | "TRANSITION_TO_IDLE" | "POST_DRIVE_CHECK";
    IBST_sInputRodDriver: number;
};

export type ID3A1VCFRONT_vehicleStatus = {
    VCFRONT_bmsHvChargeEnable: number;
    VCFRONT_preconditionRequest: number;
    VCFRONT_APGlassHeaterState: "HEATER_STATE_SNA" | "HEATER_STATE_ON" | "HEATER_STATE_OFF" | "HEATER_STATE_OFF_UNAVAILABLE" | "HEATER_STATE_FAULT";
    VCFRONT_thermalSystemType: "LEGACY_THERMAL_SYSTEM" | "HEAT_PUMP_THERMAL_SYSTEM";
    VCFRONT_standbySupplySupported: number;
    VCFRONT_driverPresent: number;
    VCFRONT_passengerPresent: number;
    VCFRONT_accPlusAvailable: number;
    VCFRONT_diPowerOnState: "DI_POWERED_OFF" | "DI_POWERED_ON_FOR_SUMMON" | "DI_POWERED_ON_FOR_STATIONARY_HEAT" | "DI_POWERED_ON_FOR_DRIVE" | "DI_POWER_GOING_DOWN";
    VCFRONT_driverIsLeavingAnySpeed: number;
    VCFRONT_12vStatusForDrive: "NOT_READY_FOR_DRIVE_12V" | "READY_FOR_DRIVE_12V" | "EXIT_DRIVE_REQUESTED_12V";
    VCFRONT_pcs12vVoltageTarget: number;
    VCFRONT_batterySupportRequest: number;
    VCFRONT_driverIsLeaving: number;
    VCFRONT_ota12VSupportRequest: number;
    VCFRONT_driverBuckleStatus: "UNBUCKLED" | "BUCKLED";
    VCFRONT_driverDoorStatus: "DOOR_OPEN" | "DOOR_CLOSED";
    VCFRONT_driverUnbuckled: "CHIME_NONE" | "CHIME_OCCUPIED_AND_UNBUCKLED" | "CHIME_SNA";
    VCFRONT_passengerUnbuckled: "CHIME_NONE" | "CHIME_OCCUPIED_AND_UNBUCKLED" | "CHIME_SNA";
    VCFRONT_2RowLeftUnbuckled: "CHIME_NONE" | "CHIME_OCCUPIED_AND_UNBUCKLED" | "CHIME_SNA";
    VCFRONT_2RowCenterUnbuckled: "CHIME_NONE" | "CHIME_OCCUPIED_AND_UNBUCKLED" | "CHIME_SNA";
    VCFRONT_2RowRightUnbuckled: "CHIME_NONE" | "CHIME_OCCUPIED_AND_UNBUCKLED" | "CHIME_SNA";
    VCFRONT_pcsEFuseVoltage: "SNA";
    VCFRONT_vehicleStatusCounter: number;
    VCFRONT_vehicleStatusChecksum: number;
};

export type ID3D9UI_gpsVehicleSpeed = {
    UI_gpsHDOP: number;
    UI_gpsVehicleHeading: number;
    UI_gpsVehicleSpeed: number;
    UI_userSpeedOffset: number;
    UI_mapSpeedLimitUnits: "MPH" | "KPH";
    UI_userSpeedOffsetUnits: "MPH" | "KPH";
    UI_mppSpeedLimit: number;
    UI_gpsNmeaMIA: number;
    UI_gpsAntennaDisconnected: number;
    UI_conditionalLimitActive: number;
    UI_conditionalSpeedLimit: "SNA";
};

export type ID3E2VCLEFT_lightStatus = {
    VCLEFT_brakeLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_tailLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_turnSignalStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_FLMapLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_FRMapLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_RLMapLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_RRMapLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_FLMapLightSwitchPressed: number;
    VCLEFT_FRMapLightSwitchPressed: number;
    VCLEFT_RLMapLightSwitchPressed: number;
    VCLEFT_RRMapLightSwitchPressed: number;
    VCLEFT_leftTurnTrailerLightStatu: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_rightTrnTrailerLightStatu: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_brakeTrailerLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_tailTrailerLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_fogTrailerLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_frontRideHeight: "SNA";
    VCLEFT_rearRideHeight: "SNA";
    VCLEFT_dynamicBrakeLightStatus: "DYNAMIC_BRAKE_LIGHT_OFF" | "DYNAMIC_BRAKE_LIGHT_ACTIVE_LOW" | "DYNAMIC_BRAKE_LIGHT_ACTIVE_HIGH";
    VCLEFT_trailerDetected: "TRAILER_LIGHT_DETECTION_SNA" | "TRAILER_LIGHT_DETECTION_FAULT" | "TRAILER_LIGHT_DETECTION_DETECTED" | "TRAILER_LIGHT_DETECTION_NOT_DETECTED";
    VCLEFT_rideHeightSensorFault: number;
    VCLEFT_reverseTrailerLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCLEFT_tailLightOutageStatus: number;
};

export type ID3E9DAS_bodyControls = {
    DAS_headlightRequest: "DAS_HEADLIGHT_REQUEST_OFF" | "DAS_HEADLIGHT_REQUEST_ON" | "DAS_HEADLIGHT_REQUEST_INVALID";
    DAS_hazardLightRequest: "DAS_REQUEST_HAZARDS_OFF" | "DAS_REQUEST_HAZARDS_ON" | "DAS_REQUEST_HAZARDS_UNUSED" | "DAS_REQUEST_HAZARDS_SNA";
    DAS_wiperSpeed: "DAS_WIPER_SPEED_OFF" | "DAS_WIPER_SPEED_1" | "DAS_WIPER_SPEED_2" | "DAS_WIPER_SPEED_3" | "DAS_WIPER_SPEED_4" | "DAS_WIPER_SPEED_5" | "DAS_WIPER_SPEED_6" | "DAS_WIPER_SPEED_7" | "DAS_WIPER_SPEED_8" | "DAS_WIPER_SPEED_9" | "DAS_WIPER_SPEED_10" | "DAS_WIPER_SPEED_11" | "DAS_WIPER_SPEED_12" | "DAS_WIPER_SPEED_13" | "DAS_WIPER_SPEED_14" | "DAS_WIPER_SPEED_INVALID";
    DAS_turnIndicatorRequest: "DAS_TURN_INDICATOR_NONE" | "DAS_TURN_INDICATOR_LEFT" | "DAS_TURN_INDICATOR_RIGHT" | "DAS_TURN_INDICATOR_CANCEL" | "DAS_TURN_INDICATOR_DEFER";
    DAS_highLowBeamDecision: "DAS_HIGH_BEAM_UNDECIDED" | "DAS_HIGH_BEAM_OFF" | "DAS_HIGH_BEAM_ON" | "DAS_HIGH_BEAM_SNA";
    DAS_heaterRequest: "DAS_HEATER_SNA" | "DAS_HEATER_OFF" | "DAS_HEATER_ON";
    DAS_highLowBeamOffReason: "HIGH_BEAM_ON" | "HIGH_BEAM_OFF_REASON_MOVING_VISION_TARGET" | "HIGH_BEAM_OFF_REASON_MOVING_RADAR_TARGET" | "HIGH_BEAM_OFF_REASON_AMBIENT_LIGHT" | "HIGH_BEAM_OFF_REASON_HEAD_LIGHT" | "HIGH_BEAM_OFF_REASON_SNA";
    DAS_turnIndicatorRequestReason: "DAS_NONE" | "DAS_ACTIVE_NAV_LANE_CHANGE" | "DAS_ACTIVE_SPEED_LANE_CHANGE" | "DAS_ACTIVE_FORK" | "DAS_CANCEL_LANE_CHANGE" | "DAS_CANCEL_FORK" | "DAS_ACTIVE_MERGE" | "DAS_CANCEL_MERGE" | "DAS_ACTIVE_COMMANDED_LANE_CHANGE" | "DAS_ACTIVE_INTERSECTION" | "DAS_CANCEL_INTERSECTION" | "DAS_ACTIVE_SUMMMON" | "DAS_CANCEL_SUMMMON";
    DAS_dynamicBrakeLightRequest: number;
    DAS_radarHeaterRequest: number;
    DAS_ahlbOverride: number;
    DAS_mirrorFoldRequest: "NONE" | "FOLD" | "UNFOLD" | "SNA";
    DAS_bodyControlsCounter: number;
    DAS_bodyControlsChecksum: number;
};

export type ID3F3UI_odo = {
    UI_odometer: "SNA";
};

export type ID3F5VCFRONT_lighting = {
    VCFRONT_indicatorLeftRequest: "TURN_SIGNAL_OFF" | "TURN_SIGNAL_ACTIVE_LOW" | "TURN_SIGNAL_ACTIVE_HIGH";
    VCFRONT_indicatorRightRequest: "TURN_SIGNAL_OFF" | "TURN_SIGNAL_ACTIVE_LOW" | "TURN_SIGNAL_ACTIVE_HIGH";
    VCFRONT_hazardLightRequest: "HAZARD_REQUEST_NONE" | "HAZARD_REQUEST_BUTTON" | "HAZARD_REQUEST_LOCK" | "HAZARD_REQUEST_UNLOCK" | "HAZARD_REQUEST_MISLOCK" | "HAZARD_REQUEST_CRASH" | "HAZARD_REQUEST_CAR_ALARM" | "HAZARD_REQUEST_DAS" | "HAZARD_REQUEST_UDS";
    VCFRONT_ambientLightingBrightnes: "SNA";
    VCFRONT_switchLightingBrightness: "SNA";
    VCFRONT_courtesyLightingRequest: number;
    VCFRONT_approachLightingRequest: number;
    VCFRONT_seeYouHomeLightingReq: number;
    VCFRONT_hazardSwitchBacklight: number;
    VCFRONT_lowBeamLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_lowBeamRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_highBeamLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_highBeamRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_DRLLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_DRLRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_fogLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_fogRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_sideMarkersStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_sideRepeaterLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_sideRepeaterRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_turnSignalLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_turnSignalRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_parkLeftStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_parkRightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCFRONT_highBeamSwitchActive: number;
    VCFRONT_simLatchingStalk: "SIMULATED_LATCHING_STALK_IDLE" | "SIMULATED_LATCHING_STALK_LEFT" | "SIMULATED_LATCHING_STALK_RIGHT" | "SIMULATED_LATCHING_STALK_SNA";
    VCFRONT_lowBeamsOnForDRL: number;
    VCFRONT_lowBeamsCalibrated: number;
};

export type ID3F8UI_driverAssistControl = {
    UI_autopilotControlRequest: "LEGACY_LAT_CTRL" | "NEXT_GEN_CTRL";
    UI_ulcStalkConfirm: number;
    UI_summonHeartbeat: number;
    UI_curvSpeedAdaptDisable: "CSA_ON" | "CSA_OFF";
    UI_dasDeveloper: number;
    UI_enableVinAssociation: number;
    UI_lssLkaEnabled: "LKA_OFF" | "LKA_ON";
    UI_lssLdwEnabled: "LDW_OFF" | "LDW_ON";
    UI_coastToCoast: number;
    UI_autoSummonEnable: number;
    UI_exceptionListEnable: "EXCEPTION_LIST_OFF" | "EXCEPTION_LIST_ON";
    UI_roadCheckDisable: "RC_ON" | "RC_OFF";
    UI_driveOnMapsEnable: "DOM_OFF" | "DOM_ON";
    UI_handsOnRequirementDisable: "HANDS_ON_REQ_ON" | "HANDS_ON_REQ_OFF";
    UI_ulcOffHighway: number;
    UI_fuseLanesDisable: "FUSE_LANES_ON" | "FUSE_LANES_OFF";
    UI_fuseHPPDisable: "FUSE_HPP_ON" | "FUSE_HPP_OFF";
    UI_fuseVehiclesDisable: "FUSE_VEH_ON" | "FUSE_VEH_OFF";
    UI_visionSpeedType: "VISION_SPEED_DISABLED" | "VISION_SPEED_ONE_SECOND" | "VISION_SPEED_TWO_SECOND" | "VISION_SPEED_OPTIMIZED";
    UI_curvatureDatabaseOnly: "OFF" | "ON";
    UI_lssElkEnabled: "ELK_OFF" | "ELK_ON";
    UI_summonExitType: "STRAIGHT" | "TURN_RIGHT" | "TURN_LEFT" | "SNA";
    UI_summonEntryType: "STRAIGHT" | "TURN_RIGHT" | "TURN_LEFT" | "SNA";
    UI_selfParkRequest: "NONE" | "SELF_PARK_FORWARD" | "SELF_PARK_REVERSE" | "ABORT" | "PRIME" | "PAUSE" | "RESUME" | "AUTO_SUMMON_FORWARD" | "AUTO_SUMMON_REVERSE" | "AUTO_SUMMON_CANCEL" | "AUTO_SUMMON_PRIMED" | "SMART_SUMMON" | "SMART_SUMMON_NO_OP" | "SNA";
    UI_summonReverseDist: "SNA";
    UI_undertakeAssistEnable: number;
    UI_adaptiveSetSpeedEnable: number;
    UI_drivingSide: "DRIVING_SIDE_LEFT" | "DRIVING_SIDE_RIGHT" | "DRIVING_SIDE_UNKNOWN";
    UI_enableClipTelemetry: number;
    UI_enableTripTelemetry: number;
    UI_enableRoadSegmentTelemetry: number;
    UI_accFollowDistanceSetting: "DISTANCE_SETTING_1" | "DISTANCE_SETTING_2" | "DISTANCE_SETTING_3" | "DISTANCE_SETTING_4" | "DISTANCE_SETTING_5" | "DISTANCE_SETTING_6" | "DISTANCE_SETTING_7" | "DISTANCE_SETTING_SNA";
    UI_hasDriveOnNav: number;
    UI_followNavRouteEnable: "NAV_ROUTE_OFF" | "NAV_ROUTE_ON";
    UI_ulcSpeedConfig: "SPEED_BASED_ULC_DISABLED" | "SPEED_BASED_ULC_MILD" | "SPEED_BASED_ULC_AVERAGE" | "SPEED_BASED_ULC_MAD_MAX";
    UI_ulcBlindSpotConfig: "STANDARD" | "AGGRESSIVE" | "MAD_MAX";
    UI_alcOffHighwayEnable: number;
    UI_validationLoop: number;
    UI_smartSummonType: "PIN_DROP" | "FIND_ME" | "SMART_AUTOPARK";
    UI_enableVisionOnlyStops: number;
    UI_source3D: "Z_FROM_MAP" | "Z_FROM_PATH_PREDICTION" | "XYZ_PREDICTION";
    UI_enableBrakeLightPulse: number;
};

export type ID3FDUI_autopilotControl_0 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_0";
    UI_hovEnabled: "HOV_OFF" | "HOV_ON";
    UI_donDisableAutoWiperDuration: "DON_DISABLE_AUTO_WIPER_DURATION_DEFAULT" | "DON_DISABLE_AUTO_WIPER_DURATION_5_S" | "DON_DISABLE_AUTO_WIPER_DURATION_15_S" | "DON_DISABLE_AUTO_WIPER_DURATION_30_S" | "DON_DISABLE_AUTO_WIPER_DURATION_60_S" | "DON_DISABLE_AUTO_WIPER_DURATION_120_S" | "DON_DISABLE_AUTO_WIPER_DURATION_OFF";
    UI_donDisableOnAutoWiperSpeed: "DAS_WIPER_SPEED_OFF" | "DAS_WIPER_SPEED_1" | "DAS_WIPER_SPEED_2" | "DAS_WIPER_SPEED_3" | "DAS_WIPER_SPEED_4" | "DAS_WIPER_SPEED_5" | "DAS_WIPER_SPEED_6" | "DAS_WIPER_SPEED_7" | "DAS_WIPER_SPEED_8" | "DAS_WIPER_SPEED_9" | "DAS_WIPER_SPEED_10" | "DAS_WIPER_SPEED_11" | "DAS_WIPER_SPEED_12" | "DAS_WIPER_SPEED_13" | "DAS_WIPER_SPEED_14" | "DAS_WIPER_SPEED_INVALID";
    UI_blindspotMinSpeed: "BLINDSPOT_MIN_SPEED_DEFAULT" | "BLINDSPOT_MIN_SPEED_5_KPH" | "BLINDSPOT_MIN_SPEED_10_KPH" | "BLINDSPOT_MIN_SPEED_15_KPH" | "BLINDSPOT_MIN_SPEED_20_KPH" | "BLINDSPOT_MIN_SPEED_25_KPH" | "BLINDSPOT_MIN_SPEED_30_KPH" | "BLINDSPOT_MIN_SPEED_35_KPH" | "BLINDSPOT_MIN_SPEED_40_KPH" | "BLINDSPOT_MIN_SPEED_45_KPH" | "BLINDSPOT_MIN_SPEED_OFF";
    UI_blindspotDistance: "BLINDSPOT_DISTANCE_DEFAULT" | "BLINDSPOT_DISTANCE_0P5_M" | "BLINDSPOT_DISTANCE_1_M" | "BLINDSPOT_DISTANCE_2_M" | "BLINDSPOT_DISTANCE_4_M" | "BLINDSPOT_DISTANCE_OFF";
    UI_blindspotTTC: "BLINDSPOT_TTC_DEFAULT" | "BLINDSPOT_TTC_0P5_S" | "BLINDSPOT_TTC_1_S" | "BLINDSPOT_TTC_2_S" | "BLINDSPOT_TTC_4_S" | "BLINDSPOT_TTC_3_S" | "BLINDSPOT_TTC_5_S" | "BLINDSPOT_TTC_OFF";
    UI_donStopEndOfRampBuffer: "DON_STOP_END_OF_RAMP_BUFFER_DEFAULT" | "DON_STOP_END_OF_RAMP_BUFFER_15_M" | "DON_STOP_END_OF_RAMP_BUFFER_30_M" | "DON_STOP_END_OF_RAMP_BUFFER_45_M" | "DON_STOP_END_OF_RAMP_BUFFER_OFF";
    UI_donDisableCutin: "DON_DISABLE_CUTIN_OFF" | "DON_DISABLE_CUTIN_ON";
    UI_donMinGoreWidthForAbortMap: "DON_MIN_GORE_WIDTH_FOR_ABORT_DEFAULT" | "DON_MIN_GORE_WIDTH_FOR_ABORT_0_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_0P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_1_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_1P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_2_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_2P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_3_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_3P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_4_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_4P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_5_M";
    UI_donAlcProgGoreAbortThres: "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_DEFAULT" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P00" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P05" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P10" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P15" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P20" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P25" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P30" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P35" | "DON_ALC_PROGRESS_GORE_ABORT_THRESHOLD_0P40";
    UI_donMinGoreWidthForAbortNotMap: "DON_MIN_GORE_WIDTH_FOR_ABORT_DEFAULT" | "DON_MIN_GORE_WIDTH_FOR_ABORT_0_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_0P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_1_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_1P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_2_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_2P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_3_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_3P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_4_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_4P5_M" | "DON_MIN_GORE_WIDTH_FOR_ABORT_5_M";
    UI_fsdVisualizationEnabled: number;
    UI_fsdStopsControlEnabled: number;
    UI_homelinkNearby: "HOMELINK_NOT_NEARBY" | "HOMELINK_NEARBY";
};

export type ID3FDUI_autopilotControl_1 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_1";
    UI_driverMonitorConfirmation: number;
    UI_applyEceR79: number;
    UI_enableMapStops: number;
    UI_disableMain: number;
    UI_disableNarrow: number;
    UI_disableFisheye: number;
    UI_disableLeftPillar: number;
    UI_disableRightPillar: number;
    UI_disableLeftRepeater: number;
    UI_disableRightRepeater: number;
    UI_disableBackup: number;
    UI_disableRadar: number;
    UI_noStalkConfirmAlertHaptic: number;
    UI_ulcSnooze: number;
    UI_noStalkConfirmAlertChime: number;
    UI_factorySummonEnable: number;
    UI_apmv3Branch: "LIVE" | "STAGE" | "DEV" | "STAGE2" | "EAP" | "DEMO";
    UI_enableCabinCamera: number;
    UI_enableAutopilotStopWarning: number;
    UI_showLaneGraph: number;
    UI_showTrackLabels: number;
    UI_hardCoreSummon: number;
    UI_enableCabinCameraTelemetry: number;
};

export type ID3FDUI_autopilotControl_2 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_2";
};

export type ID3FDUI_autopilotControl_3 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_3";
};

export type ID3FDUI_autopilotControl_4 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_4";
};

export type ID3FDUI_autopilotControl_5 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_5";
};

export type ID3FDUI_autopilotControl_6 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_6";
};

export type ID3FDUI_autopilotControl_7 = {
    UI_autopilotControlIndex: "AUTOPILOT_CONTROL_7";
};

export type ID3FDUI_autopilotControl = ID3FDUI_autopilotControl_0 | ID3FDUI_autopilotControl_1 | ID3FDUI_autopilotControl_2 | ID3FDUI_autopilotControl_3 | ID3FDUI_autopilotControl_4 | ID3FDUI_autopilotControl_5 | ID3FDUI_autopilotControl_6 | ID3FDUI_autopilotControl_7;

export type ID267DI_vehicleEstimates = {
    DI_mass: number;
    DI_tireFitment: "FITMENT_SQUARE" | "FITMENT_STAGGERED" | "FITMENT_SNA";
    DI_trailerDetected: "TRAILER_NOT_DETECTED" | "TRAILER_DETECTED";
    DI_vehicleEstimatesCounter: number;
    DI_relativeTireTreadDepth: "SNA";
    DI_massConfidence: "MASS_NOT_CONFIDED" | "MASS_CONFIDED";
    DI_gradeEst: number;
    DI_vehicleEstimatesChecksum: number;
    DI_gradeEstInternal: number;
    DI_steeringAngleOffset: number;
};

export type ID282VCLEFT_hvacBlowerFeedback_0 = {
    VCLEFT_blowerIndex: "HVAC_FEEDBACK_SIGNALS";
    VCLEFT_hvacBlowerEnabled: number;
    VCLEFT_hvacBlowerOutputDuty: "SNA";
    VCLEFT_hvacBlowerRPMTarget: "SNA";
    VCLEFT_hvacBlowerRPMActual: number;
    VCLEFT_hvacBlowerTorque: "SNA";
    VCLEFT_hvacBlowerFETTemp: "SNA";
    VCLEFT_hvacBlowerITerm: "SNA";
    VCLEFT_hvacBlowerInitd: number;
    VCLEFT_hvacBlowerFault: number;
    VCLEFT_hvacBlowerLimitFETTemps: number;
    VCLEFT_hvacBlowerPowerOn: number;
    VCLEFT_hvacBlowerSpiError: number;
};

export type ID282VCLEFT_hvacBlowerFeedback_1 = {
    VCLEFT_blowerIndex: "HVAC_VARS";
    VCLEFT_hvacBlowerRs: "SNA";
    VCLEFT_hvacBlowerIPhase0: "SNA";
    VCLEFT_hvacBlowerIPhase1: "SNA";
    VCLEFT_hvacBlowerIPhase2: "SNA";
    VCLEFT_hvacBlower_IO_CBC_HEAD: number;
    VCLEFT_hvacBlower_IO_CBC_TAIL: number;
    VCLEFT_hvacBlower_IO_CBC_TAIL_va: number;
    VCLEFT_hvacBlower_IO_CBC_Status: "IDLE" | "RX";
    VCLEFT_hvacBlower_IO_CBC_numUart: number;
    VCLEFT_hvacBlowerCBCEstState: "ERROR" | "IDLE" | "ROVERL" | "RS" | "RAMPUP" | "IDRATED" | "RATEDFLUX_OL" | "RATEDFLUX" | "RAMPDOWN" | "LOCKROTOR" | "INDUCTANCE_EST" | "ROTOR_RESISTANCE" | "MOTOR_IDENTIFIED" | "ONLINE" | "COUNT";
    VCLEFT_hvacBlowerCBCCtrlState: "ERROR" | "IDLE" | "OFFLINE" | "ONLINE" | "COUNT";
    VCLEFT_hvacBlowerRsOnlineActive: number;
};

export type ID282VCLEFT_hvacBlowerFeedback = ID282VCLEFT_hvacBlowerFeedback_0 | ID282VCLEFT_hvacBlowerFeedback_1;

export type ID2F3UI_hvacRequest = {
    UI_hvacReqTempSetpointLeft: "LO" | "HI";
    UI_hvacReqTempSetpointRight: "LO" | "HI";
    UI_hvacReqAirDistributionMode: "AUTO" | "MANUAL_FLOOR" | "MANUAL_PANEL" | "MANUAL_PANEL_FLOOR" | "MANUAL_DEFROST" | "MANUAL_DEFROST_FLOOR" | "MANUAL_DEFROST_PANEL" | "MANUAL_DEFROST_PANEL_FLOOR";
    UI_hvacReqBlowerSegment: "OFF" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "AUTO";
    UI_hvacReqRecirc: "AUTO" | "RECIRC" | "FRESH";
    UI_hvacReqACDisable: "AUTO" | "OFF" | "ON";
    UI_hvacReqManualDefogState: "NONE" | "DEFOG" | "DEFROST";
    UI_hvacReqUserPowerState: "OFF" | "ON" | "PRECONDITION" | "OVERHEAT_PROTECT_FANONLY" | "OVERHEAT_PROTECT";
    UI_hvacReqSecondRowState: "AUTO" | "OFF" | "LOW" | "MED" | "HIGH";
    UI_hvacUseModeledDuctTemp: number;
    UI_hvacReqKeepClimateOn: "KEEP_CLIMATE_ON_REQ_OFF" | "KEEP_CLIMATE_ON_REQ_ON" | "KEEP_CLIMATE_ON_REQ_DOG" | "KEEP_CLIMATE_ON_REQ_PARTY";
};

export type ID313UI_trackModeSettings = {
    UI_trackModeRequest: "TRACK_MODE_REQUEST_IDLE" | "TRACK_MODE_REQUEST_ON" | "TRACK_MODE_REQUEST_OFF";
    UI_trackRotationTendency: number;
    UI_trackStabilityAssist: number;
    UI_trackPostCooling: "TRACK_MODE_POST_COOLING_OFF" | "TRACK_MODE_POST_COOLING_ON";
    UI_trackCmpOverclock: "TRACK_MODE_CMP_OVERCLOCK_OFF" | "TRACK_MODE_CMP_OVERCLOCK_ON";
    UI_trackModeSettingsCounter: number;
    UI_trackModeSettingsChecksum: number;
};

export type ID335RearDIinfo_0 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_0";
};

export type ID335RearDIinfo_1 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_1";
};

export type ID335RearDIinfo_2 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_2";
};

export type ID335RearDIinfo_3 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_3";
};

export type ID335RearDIinfo_4 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_4";
};

export type ID335RearDIinfo_5 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_5";
};

export type ID335RearDIinfo_6 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_6";
};

export type ID335RearDIinfo_7 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_7";
};

export type ID335RearDIinfo_8 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_8";
};

export type ID335RearDIinfo_9 = {
    DIR_infoIndex: "DI_INFO_DEPRECATED_9";
};

export type ID335RearDIinfo_10 = {
    DIR_infoIndex: "DI_INFO_BUILD_HWID_COMPONENTID";
    DIR_buildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    DIR_buildConfigurationId: number;
    DIR_hardwareId: "CONFIGURABLE_HWID_PLACEHOLDER";
    DIR_componentId: number;
};

export type ID335RearDIinfo_11 = {
    DIR_infoIndex: "DI_INFO_PCBAID_ASSYID_USAGEID";
    DIR_pcbaId: number;
    DIR_assemblyId: number;
    DIR_usageId: number;
    DIR_subUsageId: number;
};

export type ID335RearDIinfo_13 = {
    DIR_infoIndex: "DI_INFO_APP_CRC";
    DIR_applicationCrc: number;
};

export type ID335RearDIinfo_14 = {
    DIR_infoIndex: "DI_INFO_BOOTLOADER_SVN";
};

export type ID335RearDIinfo_15 = {
    DIR_infoIndex: "DI_INFO_BOOTLOADER_CRC";
};

export type ID335RearDIinfo_16 = {
    DIR_infoIndex: "DI_INFO_SUBCOMPONENT";
    DIR_oilPumpBuildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    DIR_oilPumpAppCrc: number;
    DIR_FPGA_version: "FPGA_VERSION_LOCAL_BUILD" | "FPGA_VERSION_SNA";
};

export type ID335RearDIinfo_17 = {
    DIR_infoIndex: "DI_INFO_APP_GITHASH";
    DIR_appGitHash: number;
};

export type ID335RearDIinfo_18 = {
    DIR_infoIndex: "DI_INFO_BOOTLOADER_GITHASH";
    DIR_bootGitHash: number;
};

export type ID335RearDIinfo_19 = {
    DIR_infoIndex: "DI_INFO_VERSION_DEPRECATED";
    DIR_platformTyp: number;
};

export type ID335RearDIinfo_20 = {
    DIR_infoIndex: "DI_INFO_UDS_PROTOCOL_BOOTCRC";
    DIR_infoBootLdUdsProtocolVersion: number;
    DIR_bootloaderCrc: number;
};

export type ID335RearDIinfo_23 = {
    DIR_infoIndex: "DI_INFO_SUBCOMPONENT2";
};

export type ID335RearDIinfo_31 = {
    DIR_infoIndex: "DI_INFO_SUBCOMPONENT_GITHASH";
    DIR_subcomponentGitHash: number;
};

export type ID335RearDIinfo_255 = {
    DIR_infoIndex: "DI_INFO_END";
};

export type ID335RearDIinfo = ID335RearDIinfo_0 | ID335RearDIinfo_1 | ID335RearDIinfo_2 | ID335RearDIinfo_3 | ID335RearDIinfo_4 | ID335RearDIinfo_5 | ID335RearDIinfo_6 | ID335RearDIinfo_7 | ID335RearDIinfo_8 | ID335RearDIinfo_9 | ID335RearDIinfo_10 | ID335RearDIinfo_11 | ID335RearDIinfo_13 | ID335RearDIinfo_14 | ID335RearDIinfo_15 | ID335RearDIinfo_16 | ID335RearDIinfo_17 | ID335RearDIinfo_18 | ID335RearDIinfo_19 | ID335RearDIinfo_20 | ID335RearDIinfo_23 | ID335RearDIinfo_31 | ID335RearDIinfo_255;

export type ID383VCRIGHT_thsStatus = {
    VCRIGHT_thsActive: number;
    VCRIGHT_thsTemperature: "SNA";
    VCRIGHT_thsHumidity: "SNA";
    VCRIGHT_estimatedVehicleSituatio: "VEHICLE_SITUATION_UNKNOWN" | "VEHICLE_SITUATION_INDOOR" | "VEHICLE_SITUATION_OUTDOOR";
    VCRIGHT_thsSolarLoadInfrared: "SNA";
    VCRIGHT_thsSolarLoadVisible: "SNA";
    VCRIGHT_estimatedThsSolarLoad: "SNA";
};

export type ID3B3UI_vehicleControl2 = {
    UI_gloveboxRequest: number;
    UI_trunkRequest: number;
    UI_UMCUpdateInhibit: number;
    UI_WCUpdateInhibit: number;
    UI_soundHornOnLock: number;
    UI_locksPanelActive: number;
    UI_PINToDriveEnabled: number;
    UI_PINToDrivePassed: number;
    UI_lightSwitch: "LIGHT_SWITCH_AUTO" | "LIGHT_SWITCH_ON" | "LIGHT_SWITCH_PARKING" | "LIGHT_SWITCH_OFF" | "LIGHT_SWITCH_SNA";
    UI_readyToAddKey: number;
    UI_alarmTriggerRequest: number;
    UI_VCSECFeature1: number;
    UI_VCLEFTFeature1: number;
    UI_summonState: "SNA" | "IDLE" | "PRE_PRIMED" | "ACTIVE";
    UI_userPresent: number;
    UI_freeRollModeRequest: number;
    UI_windowRequest: "WINDOW_REQUEST_IDLE" | "WINDOW_REQUEST_GOTO_PERCENT" | "WINDOW_REQUEST_GOTO_VENT" | "WINDOW_REQUEST_GOTO_CLOSED" | "WINDOW_REQUEST_GOTO_OPEN";
    UI_batteryPreconditioningRequest: number;
    UI_coastDownMode: number;
    UI_autopilotPowerStateRequest: "AUTOPILOT_NOMINAL" | "AUTOPILOT_SENTRY" | "AUTOPILOT_SUSPEND";
    UI_shorted12VCellTestMode: "SHORTED_CELL_TEST_MODE_DISABLED" | "SHORTED_CELL_TEST_MODE_SHADOW" | "SHORTED_CELL_TEST_MODE_ACTIVE";
    UI_autoRollWindowsOnLockEnable: number;
    UI_efuseMXResistanceEstArmed: number;
    UI_conditionalLoggingEnabledVCSE: number;
};

export type ID3C3VCRIGHT_switchStatus = {
    VCRIGHT_frontSeatTrackBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatTrackForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatTiltDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatTiltUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLiftDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLiftUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatBackrestBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatBackrestForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLumbarDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLumbarUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLumbarIn: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontSeatLumbarOut: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_btnWindowUpRF: number;
    VCRIGHT_btnWindowAutoUpRF: number;
    VCRIGHT_btnWindowDownRF: number;
    VCRIGHT_btnWindowAutoDownRF: number;
    VCRIGHT_btnWindowUpRR: number;
    VCRIGHT_btnWindowAutoUpRR: number;
    VCRIGHT_btnWindowDownRR: number;
    VCRIGHT_btnWindowAutoDownRR: number;
    VCRIGHT_btnWindowSwPackUpLF: number;
    VCRIGHT_btnWindowSwPackAutoUpLF: number;
    VCRIGHT_btnWindowSwPackDownLF: number;
    VCRIGHT_btnWindowSwPackAutoDwnLF: number;
    VCRIGHT_btnWindowSwPackUpLR: number;
    VCRIGHT_btnWindowSwPackAutoUpLR: number;
    VCRIGHT_btnWindowSwPackDownLR: number;
    VCRIGHT_btnWindowSwPackAutoDwnLR: number;
    VCRIGHT_frontBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_frontOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_rearCenterBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_rearRightBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCRIGHT_trunkExtReleasePressed: number;
    VCRIGHT_btnWindowSwPackUpRR: number;
    VCRIGHT_btnWindowSwPackAutoUpRR: number;
    VCRIGHT_btnWindowSwPackDownRR: number;
    VCRIGHT_btnWindowSwPackAutoDwnRR: number;
    VCRIGHT_liftgateShutfaceSwitchPr: number;
    VCRIGHT_2RowSeatReclineSwitch: number;
};

export type ID3E3VCRIGHT_lightStatus = {
    VCRIGHT_brakeLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCRIGHT_tailLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCRIGHT_turnSignalStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCRIGHT_reverseLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCRIGHT_rearFogLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
    VCRIGHT_interiorTrunkLightStatus: "LIGHT_OFF" | "LIGHT_ON" | "LIGHT_FAULT" | "LIGHT_SNA";
};

export type ID656FrontDIinfo_0 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_0";
};

export type ID656FrontDIinfo_1 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_1";
};

export type ID656FrontDIinfo_2 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_2";
};

export type ID656FrontDIinfo_3 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_3";
};

export type ID656FrontDIinfo_4 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_4";
};

export type ID656FrontDIinfo_5 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_5";
};

export type ID656FrontDIinfo_6 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_6";
};

export type ID656FrontDIinfo_7 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_7";
};

export type ID656FrontDIinfo_8 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_8";
};

export type ID656FrontDIinfo_9 = {
    DIF_infoIndex: "DI_INFO_DEPRECATED_9";
};

export type ID656FrontDIinfo_10 = {
    DIF_infoIndex: "DI_INFO_BUILD_HWID_COMPONENTID";
    DIF_buildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    DIF_buildConfigurationId: number;
    DIF_hardwareId: "CONFIGURABLE_HWID_PLACEHOLDER";
    DIF_componentId: number;
};

export type ID656FrontDIinfo_11 = {
    DIF_infoIndex: "DI_INFO_PCBAID_ASSYID_USAGEID";
    DIF_pcbaId: number;
    DIF_assemblyId: number;
    DIF_usageId: number;
    DIF_subUsageId: number;
};

export type ID656FrontDIinfo_13 = {
    DIF_infoIndex: "DI_INFO_APP_CRC";
    DIF_applicationCrc: number;
};

export type ID656FrontDIinfo_14 = {
    DIF_infoIndex: "DI_INFO_BOOTLOADER_SVN";
};

export type ID656FrontDIinfo_15 = {
    DIF_infoIndex: "DI_INFO_BOOTLOADER_CRC";
};

export type ID656FrontDIinfo_16 = {
    DIF_infoIndex: "DI_INFO_SUBCOMPONENT";
    DIF_oilPumpBuildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    DIF_oilPumpAppCrc: number;
    DIF_FPGA_version: "FPGA_VERSION_LOCAL_BUILD" | "FPGA_VERSION_SNA";
};

export type ID656FrontDIinfo_17 = {
    DIF_infoIndex: "DI_INFO_APP_GITHASH";
    DIF_appGitHash: number;
};

export type ID656FrontDIinfo_18 = {
    DIF_infoIndex: "DI_INFO_BOOTLOADER_GITHASH";
    DIF_bootGitHash: number;
};

export type ID656FrontDIinfo_19 = {
    DIF_infoIndex: "DI_INFO_VERSION_DEPRECATED";
    DIF_platformTyp: number;
};

export type ID656FrontDIinfo_20 = {
    DIF_infoIndex: "DI_INFO_UDS_PROTOCOL_BOOTCRC";
    DIF_infoBootLdUdsProtocolVersion: number;
    DIF_bootloaderCrc: number;
};

export type ID656FrontDIinfo_23 = {
    DIF_infoIndex: "DI_INFO_SUBCOMPONENT2";
};

export type ID656FrontDIinfo_31 = {
    DIF_infoIndex: "DI_INFO_SUBCOMPONENT_GITHASH";
    DIF_subcomponentGitHash: number;
};

export type ID656FrontDIinfo_255 = {
    DIF_infoIndex: "DI_INFO_END";
};

export type ID656FrontDIinfo = ID656FrontDIinfo_0 | ID656FrontDIinfo_1 | ID656FrontDIinfo_2 | ID656FrontDIinfo_3 | ID656FrontDIinfo_4 | ID656FrontDIinfo_5 | ID656FrontDIinfo_6 | ID656FrontDIinfo_7 | ID656FrontDIinfo_8 | ID656FrontDIinfo_9 | ID656FrontDIinfo_10 | ID656FrontDIinfo_11 | ID656FrontDIinfo_13 | ID656FrontDIinfo_14 | ID656FrontDIinfo_15 | ID656FrontDIinfo_16 | ID656FrontDIinfo_17 | ID656FrontDIinfo_18 | ID656FrontDIinfo_19 | ID656FrontDIinfo_20 | ID656FrontDIinfo_23 | ID656FrontDIinfo_31 | ID656FrontDIinfo_255;

export type ID300BMS_info_0 = {
    BMS_infoIndex: "INFO_DEPRECATED_0";
};

export type ID300BMS_info_1 = {
    BMS_infoIndex: "INFO_DEPRECATED_1";
};

export type ID300BMS_info_2 = {
    BMS_infoIndex: "INFO_DEPRECATED_2";
};

export type ID300BMS_info_3 = {
    BMS_infoIndex: "INFO_DEPRECATED_3";
};

export type ID300BMS_info_4 = {
    BMS_infoIndex: "INFO_DEPRECATED_4";
};

export type ID300BMS_info_5 = {
    BMS_infoIndex: "INFO_DEPRECATED_5";
};

export type ID300BMS_info_6 = {
    BMS_infoIndex: "INFO_DEPRECATED_6";
};

export type ID300BMS_info_7 = {
    BMS_infoIndex: "INFO_DEPRECATED_7";
};

export type ID300BMS_info_8 = {
    BMS_infoIndex: "INFO_DEPRECATED_8";
};

export type ID300BMS_info_9 = {
    BMS_infoIndex: "INFO_DEPRECATED_9";
};

export type ID300BMS_info_10 = {
    BMS_infoIndex: "INFO_BUILD_HWID_COMPONENTID";
    BMS_buildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    BMS_buildConfigId: number;
    BMS_hardwareId: number;
    BMS_componentId: number;
};

export type ID300BMS_info_11 = {
    BMS_infoIndex: "INFO_PCBAID_ASSYID_USAGEID";
    BMS_pcbaId: number;
    BMS_assemblyId: number;
    BMS_usageId: number;
    BMS_subUsageId: number;
};

export type ID300BMS_info_13 = {
    BMS_infoIndex: "INFO_APP_CRC";
    BMS_platformType: number;
    BMS_appCrc: number;
};

export type ID300BMS_info_14 = {
    BMS_infoIndex: "INFO_BOOTLOADER_SVN";
};

export type ID300BMS_info_15 = {
    BMS_infoIndex: "INFO_BOOTLOADER_CRC";
};

export type ID300BMS_info_16 = {
    BMS_infoIndex: "INFO_SUBCOMPONENT";
};

export type ID300BMS_info_17 = {
    BMS_infoIndex: "INFO_APP_GITHASH";
    BMS_appGitHash: number;
};

export type ID300BMS_info_18 = {
    BMS_infoIndex: "INFO_BOOTLOADER_GITHASH";
    BMS_bootGitHash: number;
};

export type ID300BMS_info_19 = {
    BMS_infoIndex: "INFO_VERSION_DEPRECATED";
};

export type ID300BMS_info_20 = {
    BMS_infoIndex: "INFO_UDS_PROTOCOL_BOOTCRC";
    BMS_bootUdsProtoVersion: number;
    BMS_bootCrc: number;
};

export type ID300BMS_info_22 = {
    BMS_infoIndex: "INFO_VARIANTCRC";
};

export type ID300BMS_info_25 = {
    BMS_infoIndex: "INFO_PACKAGE_PN_1_7";
};

export type ID300BMS_info_26 = {
    BMS_infoIndex: "INFO_PACKAGE_PN_8_14";
};

export type ID300BMS_info_27 = {
    BMS_infoIndex: "INFO_PACKAGE_PN_15_20";
};

export type ID300BMS_info_29 = {
    BMS_infoIndex: "INFO_PACKAGE_SN_1_7";
};

export type ID300BMS_info_30 = {
    BMS_infoIndex: "INFO_PACKAGE_SN_8_14";
};

export type ID300BMS_info_31 = {
    BMS_infoIndex: "INFO_SUBCOMPONENT_GITHASH";
};

export type ID300BMS_info_255 = {
    BMS_infoIndex: "INFO_END";
};

export type ID300BMS_info = ID300BMS_info_0 | ID300BMS_info_1 | ID300BMS_info_2 | ID300BMS_info_3 | ID300BMS_info_4 | ID300BMS_info_5 | ID300BMS_info_6 | ID300BMS_info_7 | ID300BMS_info_8 | ID300BMS_info_9 | ID300BMS_info_10 | ID300BMS_info_11 | ID300BMS_info_13 | ID300BMS_info_14 | ID300BMS_info_15 | ID300BMS_info_16 | ID300BMS_info_17 | ID300BMS_info_18 | ID300BMS_info_19 | ID300BMS_info_20 | ID300BMS_info_22 | ID300BMS_info_25 | ID300BMS_info_26 | ID300BMS_info_27 | ID300BMS_info_29 | ID300BMS_info_30 | ID300BMS_info_31 | ID300BMS_info_255;

export type ID212BMS_status = {
    BMS_hvacPowerRequest: number;
    BMS_notEnoughPowerForDrive: number;
    BMS_notEnoughPowerForSupport: number;
    BMS_preconditionAllowed: number;
    BMS_updateAllowed: number;
    BMS_activeHeatingWorthwhile: number;
    BMS_cpMiaOnHvs: number;
    BMS_pcsPwmEnabled: number;
    BMS_contactorState: "BMS_CTRSET_SNA" | "BMS_CTRSET_OPEN" | "BMS_CTRSET_OPENING" | "BMS_CTRSET_CLOSING" | "BMS_CTRSET_CLOSED" | "BMS_CTRSET_WELDED" | "BMS_CTRSET_BLOCKED";
    BMS_uiChargeStatus: "BMS_DISCONNECTED" | "BMS_NO_POWER" | "BMS_ABOUT_TO_CHARGE" | "BMS_CHARGING" | "BMS_CHARGE_COMPLETE" | "BMS_CHARGE_STOPPED";
    BMS_ecuLogUploadRequest: "REQUEST_PRIORITY_NONE" | "REQUEST_PRIORITY_1" | "REQUEST_PRIORITY_2" | "REQUEST_PRIORITY_3";
    BMS_hvState: "HV_DOWN" | "HV_COMING_UP" | "HV_GOING_DOWN" | "HV_UP_FOR_DRIVE" | "HV_UP_FOR_CHARGE" | "HV_UP_FOR_DC_CHARGE" | "HV_UP";
    BMS_isolationResistance: "SNA";
    BMS_chargeRequest: number;
    BMS_keepWarmRequest: number;
    BMS_state: "BMS_STANDBY" | "BMS_DRIVE" | "BMS_SUPPORT" | "BMS_CHARGE" | "BMS_FEIM" | "BMS_CLEAR_FAULT" | "BMS_FAULT" | "BMS_WELD" | "BMS_TEST" | "BMS_SNA" | "BMS_DIAG";
    BMS_diLimpRequest: "LIMP_REQUEST_NONE" | "LIMP_REQUEST_WELDED";
    BMS_okToShipByAir: number;
    BMS_okToShipByLand: number;
    BMS_chgPowerAvailable: "SNA";
    BMS_chargeRetryCount: number;
    BMS_smStateRequest: "BMS_STANDBY" | "BMS_DRIVE" | "BMS_SUPPORT" | "BMS_CHARGE" | "BMS_FEIM" | "BMS_CLEAR_FAULT" | "BMS_FAULT" | "BMS_WELD" | "BMS_TEST" | "BMS_SNA" | "BMS_DIAG";
};

export type ID31CCC_chgStatus = {
    CC_currentLimit: "SNA";
    CC_pilotState: "CC_PILOT_STATE_READY" | "CC_PILOT_STATE_IDLE" | "CC_PILOT_STATE_FAULTED" | "CC_PILOT_STATE_SNA";
    CC_numPhases: "SNA";
    CC_line1Voltage: "SNA";
    CC_gridGrounding: "CC_GRID_GROUNDING_TN_TT" | "CC_GRID_GROUNDING_IT_SplitPhase" | "CC_GRID_GROUNDING_SNA";
    CC_deltaTransformer: number;
    CC_numVehCharging: number;
    CC_line2Voltage: "SNA";
    CC_line3Voltage: "SNA";
};

export type ID23DCP_chargeStatus = {
    CP_hvChargeStatus: "CP_CHARGE_INACTIVE" | "CP_CHARGE_CONNECTED" | "CP_CHARGE_STANDBY" | "CP_EXT_EVSE_TEST_ACTIVE" | "CP_EVSE_TEST_PASSED" | "CP_CHARGE_ENABLED" | "CP_CHARGE_FAULTED";
    CP_chargeShutdownRequest: "NO_SHUTDOWN_REQUESTED" | "GRACEFUL_SHUTDOWN_REQUESTED" | "EMERGENCY_SHUTDOWN_REQUESTED";
    CP_acChargeCurrentLimit: number;
    CP_internalMaxCurrentLimit: number;
    CP_vehicleIsoCheckRequired: number;
    CP_vehiclePrechargeRequired: number;
};

export type ID13DCP_chargeStatus = {
    CP_hvChargeStatus: "CP_CHARGE_INACTIVE" | "CP_CHARGE_CONNECTED" | "CP_CHARGE_STANDBY" | "CP_EXT_EVSE_TEST_ACTIVE" | "CP_EVSE_TEST_PASSED" | "CP_CHARGE_ENABLED" | "CP_CHARGE_FAULTED";
    CP_chargeShutdownRequest: "NO_SHUTDOWN_REQUESTED" | "GRACEFUL_SHUTDOWN_REQUESTED" | "EMERGENCY_SHUTDOWN_REQUESTED";
    CP_acChargeCurrentLimit: number;
    CP_internalMaxDcCurrentLimit: number;
    CP_vehicleIsoCheckRequired: number;
    CP_vehiclePrechargeRequired: number;
    CP_internalMaxAcCurrentLimit: number;
    CP_evseChargeType: "NO_CHARGER_PRESENT" | "DC_CHARGER_PRESENT" | "AC_CHARGER_PRESENT";
};

export type ID43DCP_chargeStatusLog = {
    CP_hvChargeStatus_log: "CP_CHARGE_INACTIVE" | "CP_CHARGE_CONNECTED" | "CP_CHARGE_STANDBY" | "CP_EXT_EVSE_TEST_ACTIVE" | "CP_EVSE_TEST_PASSED" | "CP_CHARGE_ENABLED" | "CP_CHARGE_FAULTED";
    CP_chargeShutdownRequest_log: "NO_SHUTDOWN_REQUESTED" | "GRACEFUL_SHUTDOWN_REQUESTED" | "EMERGENCY_SHUTDOWN_REQUESTED";
    CP_acChargeCurrentLimit_log: number;
    CP_internalMaxDcCurrentLimit_log: number;
    CP_vehicleIsoCheckRequired_log: number;
    CP_vehiclePrechargeRequired_log: number;
    CP_internalMaxAcCurrentLimit_log: number;
    CP_evseChargeType_log: "NO_CHARGER_PRESENT" | "DC_CHARGER_PRESENT" | "AC_CHARGER_PRESENT";
};

export type ID21DCP_evseStatus = {
    CP_evseAccept: number;
    CP_evseRequest: number;
    CP_proximity: "CHG_PROXIMITY_SNA" | "CHG_PROXIMITY_DISCONNECTED" | "CHG_PROXIMITY_UNLATCHED" | "CHG_PROXIMITY_LATCHED";
    CP_pilot: "CHG_PILOT_NONE" | "CHG_PILOT_FAULTED" | "CHG_PILOT_LINE_CHARGE" | "CHG_PILOT_FAST_CHARGE" | "CHG_PILOT_IDLE" | "CHG_PILOT_INVALID" | "CHG_PILOT_UNUSED_6" | "CHG_PILOT_SNA";
    CP_pilotCurrent: number;
    CP_cableType: "CHG_CABLE_TYPE_IEC" | "CHG_CABLE_TYPE_SAE" | "CHG_CABLE_TYPE_GB_AC" | "CHG_CABLE_TYPE_GB_DC" | "CHG_CABLE_TYPE_SNA";
    CP_cableCurrentLimit: number;
    CP_digitalCommsAttempts: number;
    CP_teslaSwcanState: "TESLA_SWCAN_INACTIVE" | "TESLA_SWCAN_ACCEPT" | "TESLA_SWCAN_RECEIVE" | "TESLA_SWCAN_ESTABLISHED" | "TESLA_SWCAN_FAULT" | "TESLA_SWCAN_GO_TO_SLEEP" | "TESLA_SWCAN_OFFBOARD_UPDATE_IN_PROGRESS";
    CP_digitalCommsEstablished: number;
    CP_evseChargeType_UI: "NO_CHARGER_PRESENT" | "DC_CHARGER_PRESENT" | "AC_CHARGER_PRESENT";
    CP_acNumRetries: number;
    CP_gbState: "GBDC_INACTIVE" | "GBDC_WAIT_FOR_COMMS" | "GBDC_COMMS_RECEIVED" | "GBDC_HANDSHAKING_EXT_ISO" | "GBDC_RECOGNITION" | "GBDC_CHARGE_PARAM_CONFIG" | "GBDC_VEH_PACK_PRECHARGE" | "GBDC_READY_TO_CHARGE" | "GBDC_CHARGING" | "GBDC_STOP_CHARGE_REQUESTED" | "GBDC_CHARGE_DISABLING" | "GBDC_END_OF_CHARGE" | "GBDC_ERROR_HANDLING" | "GBDC_RETRY_CHARGE" | "GBDC_FAULTED" | "GBDC_TESTER_PRESENT";
    CP_gbdcStopChargeReason: "GBDC_STOP_REASON_NONE" | "GBDC_VEH_REQUESTED" | "GBDC_EVSE_REQUESTED" | "GBDC_COMMS_TIMEOUT" | "GBDC_EVSE_FAULT" | "GBDC_EVSE_CRITICAL_FAULT" | "GBDC_LIVE_DISCONNECT" | "GBDC_SUPERCHARGER_COMMS_TIMEOUT";
    CP_gbdcFailureReason: "GBDC_FAILURE_NONE" | "GBDC_ATTEMPTS_EXPIRED" | "GBDC_SHUTDOWN_FAILURE" | "GBDC_CRITICAL_FAILURE";
    CP_gbdcChargeAttempts: number;
    CP_acChargeState: "AC_CHARGE_INACTIVE" | "AC_CHARGE_CONNECTED_CHARGE_BLOCKED" | "AC_CHARGE_STANDBY" | "AC_CHARGE_ENABLED" | "AC_CHARGE_ONBOARD_CHARGER_SHUTDOWN" | "AC_CHARGE_VEH_SHUTDOWN" | "AC_CHARGE_FAULT";
    CP_teslaDcState: "TESLA_DC_INACTIVE" | "TESLA_DC_CONNECTED_CHARGE_BLOCKED" | "TESLA_DC_STANDBY" | "TESLA_DC_EXT_TESTS_ENABLED" | "TESLA_DC_EXT_TEST_ACTIVE" | "TESLA_DC_EXT_PRECHARGE_ACTIVE" | "TESLA_DC_ENABLED" | "TESLA_DC_EVSE_SHUTDOWN" | "TESLA_DC_VEH_SHUTDOWN" | "TESLA_DC_EMERGENCY_SHUTDOWN" | "TESLA_DC_FAULT";
    CP_iecComboState: "IEC_COMBO_INACTIVE" | "IEC_COMBO_CONNECTED" | "IEC_COMBO_V2G_SESSION_SETUP" | "IEC_COMBO_SERVICE_DISCOVERY" | "IEC_COMBO_PAYMENT_SELECTION" | "IEC_COMBO_CHARGE_PARAM_DISCOVERY" | "IEC_COMBO_CABLE_CHECK" | "IEC_COMBO_PRECHARGE" | "IEC_COMBO_ENABLED" | "IEC_COMBO_SHUTDOWN" | "IEC_COMBO_END_OF_CHARGE" | "IEC_COMBO_FAULT" | "IEC_COMBO_WAIT_RESTART";
};

export type ID743VCRIGHT_recallStatus = {
    VCRIGHT_systemRecallStatus: "RECALL_SNA" | "RECALL_IN_PROGRESS" | "RECALL_COMPLETE" | "RECALL_INTERRUPTED";
    VCRIGHT_seatRecallStatus: "RECALL_SNA" | "RECALL_IN_PROGRESS" | "RECALL_COMPLETE" | "RECALL_INTERRUPTED";
    VCRIGHT_mirrorRecallStatus: "RECALL_SNA" | "RECALL_IN_PROGRESS" | "RECALL_COMPLETE" | "RECALL_INTERRUPTED";
};

export type ID75DCP_sensorData_0 = {
    CP_sensorDataSelect: "CP_SENSOR_DOOR_COUNTS";
    CP_doorCountsFiltered: number;
    CP_doorCountsDebounced: number;
};

export type ID75DCP_sensorData_1 = {
    CP_sensorDataSelect: "CP_SENSOR_PIN_TEMP";
    CP_pinTemperature1: number;
    CP_pinTemperature2: number;
    CP_pinTemperature3: number;
    CP_boardTemperature: number;
};

export type ID75DCP_sensorData_2 = {
    CP_sensorDataSelect: "CP_SENSOR_DOOR";
    CP_doorPot: number;
    CP_doorI: number;
    CP_doorLastRequestMaxI: number;
};

export type ID75DCP_sensorData_3 = {
    CP_sensorDataSelect: "CP_SENSOR_LATCH";
    CP_latchI: number;
    CP_latch2I: number;
};

export type ID75DCP_sensorData_4 = {
    CP_sensorDataSelect: "CP_SENSOR_INDUCTIVE_DOOR";
    CP_inductiveSensor_raw: number;
};

export type ID75DCP_sensorData_5 = {
    CP_sensorDataSelect: "CP_SENSOR_SAFETY";
    CP_faultLineV: number;
    CP_backCoverCounts: number;
    CP_backCover2Counts: number;
};

export type ID75DCP_sensorData_6 = {
    CP_sensorDataSelect: "CP_SENSOR_UHF";
    CP_UHF_chipState: number;
    CP_UHF_rssi: number;
    CP_UHF_rxOverflow: number;
    CP_UHF_rxNumBytes: number;
    CP_UHF_fifoData: number;
    CP_UHF_selfTestRssi: number;
};

export type ID75DCP_sensorData_7 = {
    CP_sensorDataSelect: "CP_SENSOR_RAILS";
    CP_refVoltage: number;
};

export type ID75DCP_sensorData_8 = {
    CP_sensorDataSelect: "CP_SENSOR_PROX";
    CP_proximityV: number;
    CP_proximityV_intervalMin10s: number;
    CP_proximityV_intervalMax10s: number;
    CP_proxConn1Sense: number;
    CP_proxEn: number;
};

export type ID75DCP_sensorData_9 = {
    CP_sensorDataSelect: "CP_SENSOR_PILOT";
    CP_pilotPulseWidth: number;
    CP_pilotPeriod: number;
    CP_pilotLowValue: number;
    CP_pilotHighValue: number;
};

export type ID75DCP_sensorData_10 = {
    CP_sensorDataSelect: "CP_SENSOR_PILOT2";
    CP_pilotLowValue_intervalMax10s: number;
    CP_pilotLowValue_intervalMin10s: number;
    CP_pilotHighValue_intervalMax10s: number;
    CP_pilotHighValue_intervalMin10s: number;
};

export type ID75DCP_sensorData_11 = {
    CP_sensorDataSelect: "CP_SENSOR_PROX_GB";
    CP_proximityV_GBCC1: number;
    CP_proximityV_GBCC2: number;
};

export type ID75DCP_sensorData_12 = {
    CP_sensorDataSelect: "CP_SENSOR_INLET_HARNESS_ID";
    CP_inlet1HarnessIdState: "HARNESS_PEDIGREE_UNKNOWN_SNA" | "HARNESS_PEDIGREE_INVALID" | "HARNESS_PEDIGREE_VALID";
    CP_inlet1HarnessIdValue: number;
    CP_inlet1HarnessV: number;
    CP_inlet2HarnessIdState: "HARNESS_PEDIGREE_UNKNOWN_SNA" | "HARNESS_PEDIGREE_INVALID" | "HARNESS_PEDIGREE_VALID";
    CP_inlet2HarnessIdValue: number;
    CP_inlet2HarnessV: number;
};

export type ID75DCP_sensorData = ID75DCP_sensorData_0 | ID75DCP_sensorData_1 | ID75DCP_sensorData_2 | ID75DCP_sensorData_3 | ID75DCP_sensorData_4 | ID75DCP_sensorData_5 | ID75DCP_sensorData_6 | ID75DCP_sensorData_7 | ID75DCP_sensorData_8 | ID75DCP_sensorData_9 | ID75DCP_sensorData_10 | ID75DCP_sensorData_11 | ID75DCP_sensorData_12;

export type ID287PTCcabinHeatSensorStatus = {
    PTC_leftTempIGBT: number;
    PTC_tempOCP: number;
    PTC_rightTempIGBT: number;
    PTC_tempPCB: number;
    PTC_voltageHV: number;
    PTC_leftCurrentHV: number;
    PTC_rightCurrentHV: number;
};

export type ID333UI_chargeRequest = {
    UI_openChargePortDoorRequest: number;
    UI_closeChargePortDoorRequest: number;
    UI_chargeEnableRequest: number;
    UI_brickVLoggingRequest: "FALSE" | "TRUE";
    UI_brickBalancingDisabled: "FALSE" | "TRUE";
    UI_acChargeCurrentLimit: "SNA";
    UI_chargeTerminationPct: number;
    UI_smartAcChargingEnabled: number;
    UI_scheduledDepartureEnabled: number;
    UI_socSnapshotExpirationTime: number;
    UI_cpInletHeaterRequest: number;
};

export type ID334UI_powertrainControl = {
    UI_systemPowerLimit: "SNA";
    UI_pedalMap: "CHILL" | "SPORT" | "PERFORMANCE";
    UI_systemTorqueLimit: "SNA";
    UI_closureConfirmed: "CONFIRMED_NONE" | "CONFIRMED_FRUNK" | "CONFIRMED_PROX";
    UI_speedLimit: "SNA";
    UI_regenTorqueMax: number;
    UI_limitMode: "LIMIT_NORMAL" | "LIMIT_VALET" | "LIMIT_FACTORY" | "LIMIT_SERVICE";
    UI_motorOnMode: "MOTORONMODE_NORMAL" | "MOTORONMODE_FRONT_ONLY" | "MOTORONMODE_REAR_ONLY";
    UI_wasteMode: "WASTE_TYPE_NONE" | "WASTE_TYPE_PARTIAL" | "WASTE_TYPE_FULL";
    UI_wasteModeRegenLimit: "MAX_REGEN_CURRENT_MAX" | "MAX_REGEN_CURRENT_30A" | "MAX_REGEN_CURRENT_10A" | "MAX_REGEN_CURRENT_0A";
    UI_stoppingMode: "STANDARD" | "CREEP" | "HOLD";
    UI_DIAppSliderDebug: number;
    UI_powertrainControlCounter: number;
    UI_powertrainControlChecksum: number;
};

export type ID33AUI_rangeSOC = {
    UI_Range: number;
    UI_idealRange: number;
    UI_ratedWHpM: number;
    UI_SOC: number;
    UI_uSOE: number;
};

export type ID241VCFRONT_coolant = {
    VCFRONT_coolantFlowBatActual: number;
    VCFRONT_coolantFlowBatTarget: number;
    VCFRONT_coolantFlowBatReason: "NONE" | "COOLANT_AIR_PURGE" | "NO_FLOW_REQ" | "OVERRIDE_BATT" | "ACTIVE_MANAGER_BATT" | "PASSIVE_MANAGER_BATT" | "BMS_FLOW_REQ" | "DAS_FLOW_REQ" | "OVERRIDE_PT" | "ACTIVE_MANAGER_PT" | "PASSIVE_MANAGER_PT" | "PCS_FLOW_REQ" | "DI_FLOW_REQ" | "DIS_FLOW_REQ" | "HP_FLOW_REQ";
    VCFRONT_coolantFlowPTActual: number;
    VCFRONT_coolantFlowPTTarget: number;
    VCFRONT_coolantFlowPTReason: "NONE" | "COOLANT_AIR_PURGE" | "NO_FLOW_REQ" | "OVERRIDE_BATT" | "ACTIVE_MANAGER_BATT" | "PASSIVE_MANAGER_BATT" | "BMS_FLOW_REQ" | "DAS_FLOW_REQ" | "OVERRIDE_PT" | "ACTIVE_MANAGER_PT" | "PASSIVE_MANAGER_PT" | "PCS_FLOW_REQ" | "DI_FLOW_REQ" | "DIS_FLOW_REQ" | "HP_FLOW_REQ";
    VCFRONT_wasteHeatRequestType: "WASTE_TYPE_NONE" | "WASTE_TYPE_PARTIAL" | "WASTE_TYPE_FULL";
    VCFRONT_coolantHasBeenFilled: number;
    VCFRONT_radiatorIneffective: number;
    VCFRONT_coolantAirPurgeBatState: "AIR_PURGE_STATE_INACTIVE" | "AIR_PURGE_STATE_ACTIVE" | "AIR_PURGE_STATE_COMPLETE" | "AIR_PURGE_STATE_INTERRUPTED" | "AIR_PURGE_STATE_PENDING";
};

export type ID3BBUI_power = {
    UI_powerExpected: number;
    UI_powerIdeal: number;
};

export type ID5D5RearDItemps = {
    DI_ph1Temp: number;
    DI_ph2Temp: number;
    DI_ph3Temp: number;
    DI_pcbTemp2: number;
    DI_IGBTJunctTemp: "SNA";
};

export type ID556FrontDItemps = {
    DIF_ph1Temp: number;
    DIF_ph2Temp: number;
    DIF_ph3Temp: number;
    DIF_pcbTemp2: number;
    DIF_IGBTJunctTemp: "SNA";
    DIF_lashAngle: number;
    DIF_lashCheckCount: number;
};

export type ID557FrontThermalControl = {
    DIS_passiveInletTempReq: number;
    DIS_activeInletTempReq: number;
    DIS_coolantFlowReq: number;
    DIS_oilFlowReq: number;
};

export type ID5D7RearThermalControl = {
    DI_passiveInletTempReq: number;
    DI_activeInletTempReq: number;
    DI_coolantFlowReq: number;
    DI_oilFlowReq: number;
};

export type ID7D5DIR_debug_32 = {
    DIR_debugSelector: 32;
    DIR_offsetA: number;
    DIR_motorIA: number;
    DIR_motorIB: number;
    DIR_motorIC: number;
};

export type ID7D5DIR_debug_33 = {
    DIR_debugSelector: 33;
    DIR_offsetB: number;
    DIR_statorIDref: number;
    DIR_statorIDfdb: number;
    DIR_torquePerAmp: number;
};

export type ID7D5DIR_debug_34 = {
    DIR_debugSelector: 34;
    DIR_rsScale: number;
    DIR_statorIQref: number;
    DIR_statorIQfdb: number;
    DIR_motorV: number;
};

export type ID7D5DIR_debug_35 = {
    DIR_debugSelector: 35;
    DIR_tqScaleDifferential: number;
    DIR_statorFluxRef: number;
    DIR_statorFluxFdb: number;
    DIR_systemTorqueCommand: number;
};

export type ID7D5DIR_debug_36 = {
    DIR_debugSelector: 36;
    DIR_lmScale: number;
    DIR_statorVQ: number;
    DIR_statorVD: number;
    DIR_peakFlux: number;
};

export type ID7D5DIR_debug_37 = {
    DIR_debugSelector: 37;
    DIR_gainScale: number;
    DIR_dcCableCurrentEst: number;
    DIR_loadAngleMargin: number;
    DIR_internalAngleFilt: number;
};

export type ID7D5DIR_debug_38 = {
    DIR_debugSelector: 38;
    DIR_ssmState: "SSM_STATE_START" | "SSM_STATE_UNAVAILABLE" | "SSM_STATE_IDLE" | "SSM_STATE_STANDBY" | "SSM_STATE_ENABLE" | "SSM_STATE_ABORT" | "SSM_STATE_WAIT_FOR_RETRY" | "SSM_STATE_RETRY" | "SSM_STATE_FAULT";
    DIR_usmState: "USM_STATE_START" | "USM_STATE_STANDBY" | "USM_STATE_RETRY" | "USM_STATE_ABORT" | "USM_STATE_ENABLE" | "USM_STATE_FAULT" | "USM_STATE_UNAVAILABLE" | "USM_STATE_WAIT_FOR_RETRY";
    DIR_peakIQref: number;
    DIR_motorIAavg: number;
    DIR_motorIBavg: number;
};

export type ID7D5DIR_debug_39 = {
    DIR_debugSelector: 39;
    DIR_tqSatThermal: number;
    DIR_pwrSatMaxDischargePower: number;
    DIR_pwrSatMaxRegenPower: number;
    DIR_tqSatMotorVoltage: number;
    DIR_tqSatMotorCurrent: number;
    DIR_pwrSatMaxBusVoltage: number;
    DIR_pwrSatMinBusVoltage: number;
};

export type ID7D5DIR_debug_40 = {
    DIR_debugSelector: 40;
    DIR_pwrSatDischargeCurrent: number;
    DIR_tcMaxRequest: "SNA";
    DIR_tcMinRequest: "SNA";
    DIR_tqSatUiDriveTorque: number;
    DIR_tqSatUiRegenTorque: number;
    DIR_tqScaleMaxMotorSpeed: number;
    DIR_tqScaleShift: number;
};

export type ID7D5DIR_debug_41 = {
    DIR_debugSelector: 41;
    DIR_veMassInvRaw: number;
    DIR_veResForce: number;
    DIR_currentLimit: number;
    DIR_wasteCurrentLimit: number;
};

export type ID7D5DIR_debug_42 = {
    DIR_debugSelector: 42;
    DIR_pwrSatChargeCurrent: number;
    DIR_fluxState: "DI_FLUXSTATE_START" | "DI_FLUXSTATE_TEST" | "DI_FLUXSTATE_STANDBY" | "DI_FLUXSTATE_FLUX_UP" | "DI_FLUXSTATE_FLUX_DOWN" | "DI_FLUXSTATE_ENABLED" | "DI_FLUXSTATE_ICONTROL" | "DI_FLUXSTATE_VCONTROL" | "DI_FLUXSTATE_FAULT" | "DI_FLUXSTATE_STATIONARY_WASTE";
    DIR_llsScale: number;
    DIR_llrScale: number;
    DIR_loadAngle: number;
    DIR_brakeSwitchNO: number;
    DIR_brakeSwitchNC: number;
};

export type ID7D5DIR_debug_43 = {
    DIR_debugSelector: 43;
    DIR_rotorOffsetEst: number;
    DIR_rotorOffsetMean: number;
};

export type ID7D5DIR_debug_46 = {
    DIR_debugSelector: 46;
    DIR_oilPumpMotorSpeed: number;
    DIR_oilPumpPhaseVoltage: "SNA";
    DIR_oilPumpPressureEstimateMax: "SNA";
    DIR_oilPumpPressureExpectedMin: "SNA";
};

export type ID7D5DIR_debug_47 = {
    DIR_debugSelector: 47;
    DIR_rotorFlux: number;
    DIR_dcCableHeat: number;
    DIR_magnetTempEst: "SNA";
};

export type ID7D5DIR_debug_48 = {
    DIR_debugSelector: 48;
    DIR_resolverOffsetCos: number;
    DIR_resolverOffsetSin: number;
    DIR_resolverPhaseOffset: number;
    DIR_resolverCommonGain: number;
    DIR_resolverReady: number;
    DIR_resolverNoCarrier: number;
    DIR_resolverNoPhaseLock: number;
    DIR_resolverClaMIA: number;
};

export type ID7D5DIR_debug_49 = {
    DIR_debugSelector: 49;
    DIR_soptTimeToTrip: number;
    DIR_soptTripDelay: number;
    DIR_soptTimeToOff: number;
    DIR_soptMaxCurrentMagSqrd: number;
};

export type ID7D5DIR_debug_50 = {
    DIR_debugSelector: 50;
    DIR_gateDriveSupplyState: "PSTG_GD_SUPPLY_DOWN" | "PSTG_GD_SUPPLY_RISING" | "PSTG_GD_SUPPLY_UP" | "PSTG_GD_SUPPLY_FALLING";
    DIR_gateDriveState: "PSTG_GD_STATE_INIT" | "PSTG_GD_STATE_SELFTEST" | "PSTG_GD_STATE_CONFIGURING" | "PSTG_GD_STATE_CONFIGURED" | "PSTG_GD_STATE_NOT_CONFIGURED";
    DIR_powerStageSafeState: "PSTG_SAFESTATE_NONE" | "PSTG_SAFESTATE_ALL_OFF" | "PSTG_SAFESTATE_3PS_HIGH" | "PSTG_SAFESTATE_3PS_LOW";
    DIR_sysHeatPowerOptimal: number;
};

export type ID7D5DIR_debug_52 = {
    DIR_debugSelector: 52;
    DIR_resolverCosRmsSquared: number;
    DIR_resolverSinRmsSquared: number;
    DIR_resolverCosFiltered: number;
    DIR_resolverSinFiltered: number;
    DIR_resolverErrorRmsSquared: number;
};

export type ID7D5DIR_debug_63 = {
    DIR_debugSelector: 63;
    DIR_rotorOffsetLearningState: "ROL_STATE_INIT" | "ROL_STATE_WAIT" | "ROL_STATE_ACCELERATE" | "ROL_STATE_SHIFT" | "ROL_STATE_MEASURE" | "ROL_STATE_CORRECT" | "ROL_STATE_VERIFY" | "ROL_STATE_WRITE" | "ROL_STATE_DONE" | "ROL_NUM_STATES";
    DIR_statorVDFiltered: number;
    DIR_statorVQFiltered: number;
    DIR_pwmState: "PWMSTATE_SVPWM" | "PWMSTATE_DPWM2" | "PWMSTATE_OPWM1" | "PWMSTATE_OPWM2";
};

export type ID7D5DIR_debug_64 = {
    DIR_debugSelector: 64;
    DIR_dcCapTemp: number;
    DIR_busbarTemp: number;
    DIR_pcsTemp: number;
    DIR_statorTemp1: number;
    DIR_statorTemp2: number;
};

export type ID7D5DIR_debug_66 = {
    DIR_debugSelector: 66;
    DIR_cpu10HzMin: number;
    DIR_cpu10HzAvg: number;
    DIR_cpu100HzMin: number;
    DIR_cpu100HzAvg: number;
    DIR_cpu10msMin: number;
    DIR_module10HzStack: number;
};

export type ID7D5DIR_debug_67 = {
    DIR_debugSelector: 67;
    DIR_cpu1kHzMin: number;
    DIR_cpu1kHzAvg: number;
    DIR_cpu20kHzMin: number;
    DIR_cpu20kHzAvg: number;
    DIR_controlStack: number;
};

export type ID7D5DIR_debug_68 = {
    DIR_debugSelector: 68;
    DIR_systemStack: number;
    DIR_idleStack: number;
    DIR_decodeHardwareStack: number;
    DIR_eepromStack: number;
    DIR_udsStack: number;
    DIR_xcpStack: number;
    DIR_immobilizerStack: number;
};

export type ID7D5DIR_debug_69 = {
    DIR_debugSelector: 69;
    DIR_hwFaultCount: number;
    DIR_driveUnitOdometer: number;
};

export type ID7D5DIR_debug_70 = {
    DIR_debugSelector: 70;
    DIR_phaseOutBusbarTemp: number;
    DIR_phaseOutBusbarWeldTemp: number;
    DIR_phaseOutLugTemp: number;
    DIR_dcLinkCapTemp: number;
    DIR_hvDcCableTemp: number;
    DIR_negDcBusbarTemp: number;
    DIR_posDcBusbarTemp: number;
};

export type ID7D5DIR_debug_72 = {
    DIR_debugSelector: 72;
    DIR_statorEndWindingTemp: number;
    DIR_rotorMaxMagnetTemp: number;
};

export type ID7D5DIR_debug_128 = {
    DIR_debugSelector: 128;
    DIR_motorType: "DI_MOTOR_SNA" | "DI_MOTOR_ROADSTER_BASE" | "DI_MOTOR_ROADSTER_SPORT" | "DI_MOTOR_M7M3" | "DI_MOTOR_M7M4" | "DI_MOTOR_M7M5" | "DI_MOTOR_M8A" | "DI_MOTOR_M7M6" | "DI_MOTOR_F1A" | "DI_MOTOR_SSR1A" | "DI_MOTOR_F1AC" | "DI_MOTOR_F2AB" | "DI_MOTOR_F2AC" | "DI_MOTOR_F2AD" | "DI_MOTOR_F2AE" | "DI_MOTOR_F2APMSRM" | "DI_MOTOR_PM216A" | "DI_MOTOR_IM100A" | "DI_MOTOR_PM216B" | "DI_MOTOR_IM100B" | "DI_MOTOR_IM216A" | "DI_MOTOR_PM216C" | "DI_MOTOR_IM130C" | "DI_MOTOR_PM216D" | "DI_MOTOR_IM130D" | "DI_MOTOR_IM130D_AL" | "DI_MOTOR_F2AE_AL" | "DI_MOTOR_IM130D_AL_POSCO" | "DI_MOTOR_PM275B" | "DI_MOTOR_PM350B" | "DI_MOTOR_PM216CSR" | "DI_MOTOR_PM216CSR_N42" | "DI_MOTOR_PM228B";
    DIR_cpu1HzMin: number;
    DIR_cpu1HzAvg: number;
};

export type ID7D5DIR_debug_131 = {
    DIR_debugSelector: 131;
    DIR_cpuIDWord0: number;
    DIR_crc: number;
};

export type ID7D5DIR_debug_132 = {
    DIR_debugSelector: 132;
    DIR_cpuIDWord1: number;
    DIR_cpuIDWord2: number;
    DIR_cpuIDWord3: number;
};

export type ID7D5DIR_debug = ID7D5DIR_debug_32 | ID7D5DIR_debug_33 | ID7D5DIR_debug_34 | ID7D5DIR_debug_35 | ID7D5DIR_debug_36 | ID7D5DIR_debug_37 | ID7D5DIR_debug_38 | ID7D5DIR_debug_39 | ID7D5DIR_debug_40 | ID7D5DIR_debug_41 | ID7D5DIR_debug_42 | ID7D5DIR_debug_43 | ID7D5DIR_debug_46 | ID7D5DIR_debug_47 | ID7D5DIR_debug_48 | ID7D5DIR_debug_49 | ID7D5DIR_debug_50 | ID7D5DIR_debug_52 | ID7D5DIR_debug_63 | ID7D5DIR_debug_64 | ID7D5DIR_debug_66 | ID7D5DIR_debug_67 | ID7D5DIR_debug_68 | ID7D5DIR_debug_69 | ID7D5DIR_debug_70 | ID7D5DIR_debug_72 | ID7D5DIR_debug_128 | ID7D5DIR_debug_131 | ID7D5DIR_debug_132;

export type ID757DIF_debug_32 = {
    DIF_debugSelector: 32;
    DIF_offsetA: number;
    DIF_motorIA: number;
    DIF_motorIB: number;
    DIF_motorIC: number;
};

export type ID757DIF_debug_33 = {
    DIF_debugSelector: 33;
    DIF_offsetB: number;
    DIF_statorIDref: number;
    DIF_statorIDfdb: number;
    DIF_torquePerAmp: number;
};

export type ID757DIF_debug_34 = {
    DIF_debugSelector: 34;
    DIF_rsScale: number;
    DIF_statorIQref: number;
    DIF_statorIQfdb: number;
    DIF_motorV: number;
};

export type ID757DIF_debug_35 = {
    DIF_debugSelector: 35;
    DIF_tqScaleDifferential: number;
    DIF_statorFluxRef: number;
    DIF_statorFluxFdb: number;
    DIF_systemTorqueCommand: number;
};

export type ID757DIF_debug_36 = {
    DIF_debugSelector: 36;
    DIF_lmScale: number;
    DIF_statorVQ: number;
    DIF_statorVD: number;
    DIF_peakFlux: number;
};

export type ID757DIF_debug_37 = {
    DIF_debugSelector: 37;
    DIF_gainScale: number;
    DIF_dcCableCurrentEst: number;
    DIF_loadAngleMargin: number;
    DIF_internalAngleFilt: number;
};

export type ID757DIF_debug_38 = {
    DIF_debugSelector: 38;
    DIF_ssmState: "SSM_STATE_START" | "SSM_STATE_UNAVAILABLE" | "SSM_STATE_IDLE" | "SSM_STATE_STANDBY" | "SSM_STATE_ENABLE" | "SSM_STATE_ABORT" | "SSM_STATE_WAIT_FOR_RETRY" | "SSM_STATE_RETRY" | "SSM_STATE_FAULT";
    DIF_usmState: "USM_STATE_START" | "USM_STATE_STANDBY" | "USM_STATE_RETRY" | "USM_STATE_ABORT" | "USM_STATE_ENABLE" | "USM_STATE_FAULT" | "USM_STATE_UNAVAILABLE" | "USM_STATE_WAIT_FOR_RETRY";
    DIF_peakIQref: number;
    DIF_motorIAavg: number;
    DIF_motorIBavg: number;
};

export type ID757DIF_debug_39 = {
    DIF_debugSelector: 39;
    DIF_tqSatThermal: number;
    DIF_pwrSatMaxDischargePower: number;
    DIF_pwrSatMaxRegenPower: number;
    DIF_tqSatMotorVoltage: number;
    DIF_tqSatMotorCurrent: number;
    DIF_pwrSatMaxBusVoltage: number;
    DIF_pwrSatMinBusVoltage: number;
};

export type ID757DIF_debug_40 = {
    DIF_debugSelector: 40;
    DIF_pwrSatDischargeCurrent: number;
    DIF_tcMaxRequest: "SNA";
    DIF_tcMinRequest: "SNA";
    DIF_tqSatUiDriveTorque: number;
    DIF_tqSatUiRegenTorque: number;
    DIF_tqScaleMaxMotorSpeed: number;
    DIF_tqScaleShift: number;
};

export type ID757DIF_debug_41 = {
    DIF_debugSelector: 41;
    DIF_veMassInvRaw: number;
    DIF_veResForce: number;
    DIF_currentLimit: number;
    DIF_wasteCurrentLimit: number;
};

export type ID757DIF_debug_42 = {
    DIF_debugSelector: 42;
    DIF_pwrSatChargeCurrent: number;
    DIF_fluxState: "DI_FLUXSTATE_START" | "DI_FLUXSTATE_TEST" | "DI_FLUXSTATE_STANDBY" | "DI_FLUXSTATE_FLUX_UP" | "DI_FLUXSTATE_FLUX_DOWN" | "DI_FLUXSTATE_ENABLED" | "DI_FLUXSTATE_ICONTROL" | "DI_FLUXSTATE_VCONTROL" | "DI_FLUXSTATE_FAULT" | "DI_FLUXSTATE_STATIONARY_WASTE";
    DIF_llsScale: number;
    DIF_llrScale: number;
    DIF_loadAngle: number;
    DIF_brakeSwitchNO: number;
    DIF_brakeSwitchNC: number;
};

export type ID757DIF_debug_43 = {
    DIF_debugSelector: 43;
    DIF_rotorOffsetEst: number;
    DIF_rotorOffsetMean: number;
};

export type ID757DIF_debug_46 = {
    DIF_debugSelector: 46;
    DIF_oilPumpMotorSpeed: number;
    DIF_oilPumpPhaseVoltage: "SNA";
    DIF_oilPumpPressureEstimateMax: "SNA";
    DIF_oilPumpPressureExpectedMin: "SNA";
};

export type ID757DIF_debug_47 = {
    DIF_debugSelector: 47;
    DIF_rotorFlux: number;
    DIF_dcCableHeat: number;
    DIF_magnetTempEst: "SNA";
};

export type ID757DIF_debug_48 = {
    DIF_debugSelector: 48;
    DIF_resolverOffsetCos: number;
    DIF_resolverOffsetSin: number;
    DIF_resolverPhaseOffset: number;
    DIF_resolverCommonGain: number;
    DIF_resolverReady: number;
    DIF_resolverNoCarrier: number;
    DIF_resolverNoPhaseLock: number;
    DIF_resolverClaMIA: number;
};

export type ID757DIF_debug_49 = {
    DIF_debugSelector: 49;
    DIF_soptTimeToTrip: number;
    DIF_soptTripDelay: number;
    DIF_soptTimeToOff: number;
    DIF_soptMaxCurrentMagSqrd: number;
};

export type ID757DIF_debug_50 = {
    DIF_debugSelector: 50;
    DIF_gateDriveSupplyState: "PSTG_GD_SUPPLY_DOWN" | "PSTG_GD_SUPPLY_RISING" | "PSTG_GD_SUPPLY_UP" | "PSTG_GD_SUPPLY_FALLING";
    DIF_gateDriveState: "PSTG_GD_STATE_INIT" | "PSTG_GD_STATE_SELFTEST" | "PSTG_GD_STATE_CONFIGURING" | "PSTG_GD_STATE_CONFIGURED" | "PSTG_GD_STATE_NOT_CONFIGURED";
    DIF_powerStageSafeState: "PSTG_SAFESTATE_NONE" | "PSTG_SAFESTATE_ALL_OFF" | "PSTG_SAFESTATE_3PS_HIGH" | "PSTG_SAFESTATE_3PS_LOW";
    DIF_sysHeatPowerOptimal: number;
};

export type ID757DIF_debug_52 = {
    DIF_debugSelector: 52;
    DIF_resolverCosRmsSquared: number;
    DIF_resolverSinRmsSquared: number;
    DIF_resolverCosFiltered: number;
    DIF_resolverSinFiltered: number;
    DIF_resolverErrorRmsSquared: number;
};

export type ID757DIF_debug_63 = {
    DIF_debugSelector: 63;
    DIF_rotorOffsetLearningState: "ROL_STATE_INIT" | "ROL_STATE_WAIT" | "ROL_STATE_ACCELERATE" | "ROL_STATE_SHIFT" | "ROL_STATE_MEASURE" | "ROL_STATE_CORRECT" | "ROL_STATE_VERIFY" | "ROL_STATE_WRITE" | "ROL_STATE_DONE" | "ROL_NUM_STATES";
    DIF_statorVDFiltered: number;
    DIF_statorVQFiltered: number;
    DIF_pwmState: "PWMSTATE_SVPWM" | "PWMSTATE_DPWM2" | "PWMSTATE_OPWM1" | "PWMSTATE_OPWM2";
};

export type ID757DIF_debug_64 = {
    DIF_debugSelector: 64;
    DIF_dcCapTemp: number;
    DIF_busbarTemp: number;
    DIF_pcsTemp: number;
    DIF_statorTemp1: number;
    DIF_statorTemp2: number;
};

export type ID757DIF_debug_66 = {
    DIF_debugSelector: 66;
    DIF_cpu10HzMin: number;
    DIF_cpu10HzAvg: number;
    DIF_cpu100HzMin: number;
    DIF_cpu100HzAvg: number;
    DIF_cpu10msMin: number;
    DIF_module10HzStack: number;
};

export type ID757DIF_debug_67 = {
    DIF_debugSelector: 67;
    DIF_cpu1kHzMin: number;
    DIF_cpu1kHzAvg: number;
    DIF_cpu20kHzMin: number;
    DIF_cpu20kHzAvg: number;
    DIF_controlStack: number;
};

export type ID757DIF_debug_68 = {
    DIF_debugSelector: 68;
    DIF_systemStack: number;
    DIF_idleStack: number;
    DIF_decodeHardwareStack: number;
    DIF_eepromStack: number;
    DIF_udsStack: number;
    DIF_xcpStack: number;
    DIF_immobilizerStack: number;
};

export type ID757DIF_debug_69 = {
    DIF_debugSelector: 69;
    DIF_hwFaultCount: number;
    DIF_driveUnitOdometer: number;
};

export type ID757DIF_debug_70 = {
    DIF_debugSelector: 70;
    DIF_phaseOutBusbarTemp: number;
    DIF_phaseOutBusbarWeldTemp: number;
    DIF_phaseOutLugTemp: number;
    DIF_dcLinkCapTemp: number;
    DIF_hvDcCableTemp: number;
    DIF_negDcBusbarTemp: number;
    DIF_posDcBusbarTemp: number;
};

export type ID757DIF_debug_72 = {
    DIF_debugSelector: 72;
    DIF_statorEndWindingTemp: number;
    DIF_rotorMaxMagnetTemp: number;
};

export type ID757DIF_debug_128 = {
    DIF_debugSelector: 128;
    DIF_motorType: "DI_MOTOR_SNA" | "DI_MOTOR_ROADSTER_BASE" | "DI_MOTOR_ROADSTER_SPORT" | "DI_MOTOR_M7M3" | "DI_MOTOR_M7M4" | "DI_MOTOR_M7M5" | "DI_MOTOR_M8A" | "DI_MOTOR_M7M6" | "DI_MOTOR_F1A" | "DI_MOTOR_SSR1A" | "DI_MOTOR_F1AC" | "DI_MOTOR_F2AB" | "DI_MOTOR_F2AC" | "DI_MOTOR_F2AD" | "DI_MOTOR_F2AE" | "DI_MOTOR_F2APMSRM" | "DI_MOTOR_PM216A" | "DI_MOTOR_IM100A" | "DI_MOTOR_PM216B" | "DI_MOTOR_IM100B" | "DI_MOTOR_IM216A" | "DI_MOTOR_PM216C" | "DI_MOTOR_IM130C" | "DI_MOTOR_PM216D" | "DI_MOTOR_IM130D" | "DI_MOTOR_IM130D_AL" | "DI_MOTOR_F2AE_AL" | "DI_MOTOR_IM130D_AL_POSCO" | "DI_MOTOR_PM275B" | "DI_MOTOR_PM350B" | "DI_MOTOR_PM216CSR" | "DI_MOTOR_PM216CSR_N42" | "DI_MOTOR_PM228B";
    DIF_cpu1HzMin: number;
    DIF_cpu1HzAvg: number;
};

export type ID757DIF_debug_131 = {
    DIF_debugSelector: 131;
    DIF_cpuIDWord0: number;
    DIF_crc: number;
};

export type ID757DIF_debug_132 = {
    DIF_debugSelector: 132;
    DIF_cpuIDWord1: number;
    DIF_cpuIDWord2: number;
    DIF_cpuIDWord3: number;
};

export type ID757DIF_debug = ID757DIF_debug_32 | ID757DIF_debug_33 | ID757DIF_debug_34 | ID757DIF_debug_35 | ID757DIF_debug_36 | ID757DIF_debug_37 | ID757DIF_debug_38 | ID757DIF_debug_39 | ID757DIF_debug_40 | ID757DIF_debug_41 | ID757DIF_debug_42 | ID757DIF_debug_43 | ID757DIF_debug_46 | ID757DIF_debug_47 | ID757DIF_debug_48 | ID757DIF_debug_49 | ID757DIF_debug_50 | ID757DIF_debug_52 | ID757DIF_debug_63 | ID757DIF_debug_64 | ID757DIF_debug_66 | ID757DIF_debug_67 | ID757DIF_debug_68 | ID757DIF_debug_69 | ID757DIF_debug_70 | ID757DIF_debug_72 | ID757DIF_debug_128 | ID757DIF_debug_131 | ID757DIF_debug_132;

export type ID2B6DI_chassisControlStatus = {
    DI_vdcTelltaleFlash: number;
    DI_vdcTelltaleOn: number;
    DI_tcTelltaleFlash: number;
    DI_tcTelltaleOn: number;
    DI_tractionControlModeUI: "NORMAL" | "SLIP_START" | "DEV_MODE_1" | "DEV_MODE_2" | "ROLLS_MODE" | "DYNO_MODE" | "OFFROAD_ASSIST";
    DI_ptcStateUI: "FAULTED" | "BACKUP" | "ON" | "SNA";
    DI_btcStateUI: number;
    DI_vehicleHoldTelltaleOn: number;
};

export type ID284UIvehicleModes = {
    UIfactoryMode284: number;
    UItransportMode284: number;
    UIshowroomMode284: number;
    UIserviceMode284: number;
    UIisDelivered284: number;
    UIsentryMode284: number;
    UIhomelinkV2Command0284: number;
    UIhomelinkV2Command1284: number;
    UIhomelinkV2Command2284: number;
    UIcarWashModeRequest284: number;
    UIvaletMode284: number;
    UIgameMode284: number;
};

export type ID221VCFRONT_LVPowerState_0 = {
    VCFRONT_LVPowerStateIndex: "Mux0";
    VCFRONT_parkLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_espLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_radcLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_hvacCompLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_ptcLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_sccmLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_tpmsLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_rcmLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_iBoosterLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_tunerLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_amplifierLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_das1HighCurrentLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_das2HighCurrentLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_dirLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_difLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_oilPumpFrontLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_oilPumpRearLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_ocsLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_vcleftHiCurrentLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_vcrightHiCurrentLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_uiHiCurrentLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
};

export type ID221VCFRONT_LVPowerState_1 = {
    VCFRONT_LVPowerStateIndex: "Mux1";
    VCFRONT_cpLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_epasLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_hvcLVRequest: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_tasLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_pcsLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCFRONT_CMPDLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
};

export type ID221VCFRONT_LVPowerState = ID221VCFRONT_LVPowerState_0 | ID221VCFRONT_LVPowerState_1;

export type ID225VCRIGHT_LVPowerState = {
    VCRIGHT_ptcLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_ocsLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_amplifierLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_rearOilPumpLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_tunerLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_hvcLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_rcmLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_lumbarLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCRIGHT_cntctrPwrState: number;
    VCRIGHT_eFuseLockoutStatus: "EFUSE_LOCKOUT_STATUS_IDLE" | "EFUSE_LOCKOUT_STATUS_PENDING" | "EFUSE_LOCKOUT_STATUS_ACTIVE";
    VCRIGHT_swEnStatus: number;
    VCRIGHT_vehiclePowerStateDBG: "VEHICLE_POWER_STATE_OFF" | "VEHICLE_POWER_STATE_CONDITIONING" | "VEHICLE_POWER_STATE_ACCESSORY" | "VEHICLE_POWER_STATE_DRIVE";
};

export type ID2F1VCFRONT_eFuseDebugStatus_0 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_VCRIGHT";
    VCFRONT_rightControllerState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_rightControllerFault: number;
    VCFRONT_vcrightSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_rightControllerTemp: number;
    VCFRONT_rightControllerVoltage: number;
    VCFRONT_rightControllerCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_1 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_VCLEFT";
    VCFRONT_leftControllerState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_leftControllerFault: number;
    VCFRONT_vcleftSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_leftControllerTemp: number;
    VCFRONT_leftControllerVoltage: number;
    VCFRONT_leftControllerCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_2 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_PCS";
    VCFRONT_PCSState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_PCSFault: number;
    VCFRONT_pcsSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_PCSTemp: number;
    VCFRONT_PCSVoltage: number;
    VCFRONT_PCSCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_3 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_IBOOSTER";
    VCFRONT_iBoosterState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_iBoosterFault: number;
    VCFRONT_iBoosterSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_iBoosterTemp: number;
    VCFRONT_iBoosterVoltage: number;
    VCFRONT_iBoosterCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_4 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_EPAS3P";
    VCFRONT_EPAS3PState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_EPAS3PFault: number;
    VCFRONT_EPAS3PSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_EPAS3PTemp: number;
    VCFRONT_EPAS3PVoltage: number;
    VCFRONT_EPAS3PCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_5 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_EPAS3S";
    VCFRONT_EPAS3SState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_EPAS3SFault: number;
    VCFRONT_EPAS3SSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_EPAS3STemp: number;
    VCFRONT_EPAS3SVoltage: number;
    VCFRONT_EPAS3SCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_6 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_ESP_MOTOR";
    VCFRONT_ESPMotorState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_ESPMotorFault: number;
    VCFRONT_ESPMotorSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_ESPMotorTemp: number;
    VCFRONT_ESPMotorVoltage: number;
    VCFRONT_ESPMotorCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_7 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_ESP_VALVE";
    VCFRONT_ESPValveState: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_ESPValveFault: number;
    VCFRONT_ESPValveTemp: number;
    VCFRONT_ESPValveVoltage: number;
    VCFRONT_ESPValveCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_8 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_AUTOPILOT_1";
    VCFRONT_autopilot1State: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_autopilot1Fault: number;
    VCFRONT_autopilot1Temp: number;
    VCFRONT_autopilot1Voltage: number;
    VCFRONT_autopilot1Current: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_9 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_AUTOPILOT_2";
    VCFRONT_autopilot2State: "EFUSE_STATE_OFF" | "EFUSE_STATE_ON" | "EFUSE_STATE_LOCKED_OUT";
    VCFRONT_autopilot2Fault: number;
    VCFRONT_autopilot2Temp: number;
    VCFRONT_autopilot2Voltage: number;
    VCFRONT_autopilot2Current: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_10 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_SLEEP_BYPASS";
    VCFRONT_sleepBypassState: number;
    VCFRONT_sleepBypassFault: number;
    VCFRONT_sleepBypassVoltage: number;
    VCFRONT_sleepBypassCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_11 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_UI";
    VCFRONT_uiAudioState: number;
    VCFRONT_uiAudioFault: number;
    VCFRONT_uiAudioCurrent: number;
    VCFRONT_uiState: number;
    VCFRONT_uiFault: number;
    VCFRONT_uiCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_12 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_HEADLAMPS";
    VCFRONT_headlampLeftState: number;
    VCFRONT_headlampLeftFault: number;
    VCFRONT_headlampLeftCurrent: number;
    VCFRONT_headlampLeftVoltage: "SNA";
    VCFRONT_headlampRightState: number;
    VCFRONT_headlampRightFault: number;
    VCFRONT_headlampRightCurrent: number;
    VCFRONT_headlampRightVoltage: "SNA";
    VCFRONT_headlampLeftTemperature: "SNA";
    VCFRONT_headlampRightTemperature: "SNA";
};

export type ID2F1VCFRONT_eFuseDebugStatus_13 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_VBAT_FUSED_HIGH_CURRENT";
    VCFRONT_vbatFusedHighState: number;
    VCFRONT_vbatFusedHighFault: number;
    VCFRONT_vbatFusedSelfTestResult: "EFUSE_SELF_TEST_EFUSE_RESULT_NOT_RUN" | "EFUSE_SELF_TEST_EFUSE_RESULT_RUNNING" | "EFUSE_SELF_TEST_EFUSE_RESULT_PASSED" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_RAILS_UNSTABLE" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_EFUSE_OUTPUT_SHORT" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_STUCK_ON" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_LOW_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_POWER_FET_CHANNEL_OPEN" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_ENABLE_HIGH_MALFUNCTION" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_TURN_OFF_PATH_TOO_SLOW" | "EFUSE_SELF_TEST_EFUSE_RESULT_FAILED_NOT_LATCHED" | "EFUSE_SELF_TEST_EFUSE_RESULT_SKIPPED";
    VCFRONT_vbatFusedHighTemp: number;
    VCFRONT_vbatFusedHighVoltage: number;
    VCFRONT_vbatFusedHighCurrent: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_14 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_PUMPS";
    VCFRONT_pump1AndFanState: number;
    VCFRONT_pump1AndFanCurrent: number;
    VCFRONT_pump1AndFanVoltage: number;
    VCFRONT_pump2AndAirCompState: number;
    VCFRONT_pump2AndAirCompCurrent: number;
    VCFRONT_pump2AndAirCompVoltage: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_15 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_RAILS_A_B";
    VCFRONT_railA_12v: number;
    VCFRONT_railB_12v: number;
    VCFRONT_railA_5v: number;
    VCFRONT_railB_5v: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_16 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_MISC_RAILS";
    VCFRONT_eFuseLockoutVoltage: number;
    VCFRONT_ChargePumpVoltage: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_17 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_LV_BATTERY_DEBUG";
    VCFRONT_chargedIBSAmpHours: number;
    VCFRONT_dischargedIBSAmpHours: number;
    VCFRONT_IBSUnfilteredTemperature: number;
};

export type ID2F1VCFRONT_eFuseDebugStatus_18 = {
    VCFRONT_eFuseDebugStatusIndex: "VCF_DBG_STS_INVALID";
};

export type ID2F1VCFRONT_eFuseDebugStatus = ID2F1VCFRONT_eFuseDebugStatus_0 | ID2F1VCFRONT_eFuseDebugStatus_1 | ID2F1VCFRONT_eFuseDebugStatus_2 | ID2F1VCFRONT_eFuseDebugStatus_3 | ID2F1VCFRONT_eFuseDebugStatus_4 | ID2F1VCFRONT_eFuseDebugStatus_5 | ID2F1VCFRONT_eFuseDebugStatus_6 | ID2F1VCFRONT_eFuseDebugStatus_7 | ID2F1VCFRONT_eFuseDebugStatus_8 | ID2F1VCFRONT_eFuseDebugStatus_9 | ID2F1VCFRONT_eFuseDebugStatus_10 | ID2F1VCFRONT_eFuseDebugStatus_11 | ID2F1VCFRONT_eFuseDebugStatus_12 | ID2F1VCFRONT_eFuseDebugStatus_13 | ID2F1VCFRONT_eFuseDebugStatus_14 | ID2F1VCFRONT_eFuseDebugStatus_15 | ID2F1VCFRONT_eFuseDebugStatus_16 | ID2F1VCFRONT_eFuseDebugStatus_17 | ID2F1VCFRONT_eFuseDebugStatus_18;

export type ID242VCLEFT_LVPowerState = {
    VCLEFT_rcmLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_tpmsLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_sccmLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_diLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_cpLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_swcLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_lumbarLVState: "LV_OFF" | "LV_ON" | "LV_GOING_DOWN" | "LV_FAULT";
    VCLEFT_vehiclePowerStateDBG: "VEHICLE_POWER_STATE_OFF" | "VEHICLE_POWER_STATE_CONDITIONING" | "VEHICLE_POWER_STATE_ACCESSORY" | "VEHICLE_POWER_STATE_DRIVE";
};

export type ID243VCRIGHT_hvacStatus_0 = {
    VCRIGHT_hvacStatusIndex: "STATUS_UI";
    VCRIGHT_hvacQdotLeft: number;
    VCRIGHT_hvacQdotRight: number;
    VCRIGHT_hvacCabinTempEst: number;
    VCRIGHT_hvacAirDistributionMode: "NONE" | "FLOOR" | "PANEL" | "PANEL_FLOOR" | "DEFROST" | "DEFROST_FLOOR" | "DEFROST_PANEL" | "DEFROST_PANEL_FLOOR";
    VCRIGHT_hvacBlowerSegment: "OFF" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
    VCRIGHT_hvacRecirc: "AUTO" | "RECIRC" | "FRESH";
    VCRIGHT_hvacACRunning: "OFF" | "ON";
    VCRIGHT_hvacPowerState: "OFF" | "ON" | "PRECONDITION" | "OVERHEAT_PROTECT_FANONLY" | "OVERHEAT_PROTECT";
    VCRIGHT_hvacVentStatus: "BOTH" | "LEFT" | "RIGHT";
    VCRIGHT_hvacSecondRowState: "AUTO" | "OFF" | "LOW" | "MED" | "HIGH";
    VCRIGHT_hvacSystemNominal: number;
    VCRIGHT_hvacModelInitStatus: "NOT_INIT_WAIT_FOR_SENSORS" | "NOT_INIT_WAIT_FOR_GTW" | "INIT_FROM_SENSORS" | "INIT_FROM_SENSORS_PREDICTION_ERROR" | "INIT_FORWARD_CALC" | "INIT_WAITING_FOR_SENSORS";
    VCRIGHT_hvacOverheatProtActive: number;
};

export type ID243VCRIGHT_hvacStatus_1 = {
    VCRIGHT_hvacStatusIndex: "STATUS_VCFRONT";
    VCRIGHT_hvacMassflowRefrigSystem: number;
    VCRIGHT_hvacRecircDoorPercent: number;
    VCRIGHT_tempDuctLeft: "SNA";
    VCRIGHT_tempDuctLeftLower: "SNA";
    VCRIGHT_tempDuctRight: "SNA";
    VCRIGHT_tempDuctRightLower: "SNA";
    VCRIGHT_hvacDuctTargetLeft: "SNA";
    VCRIGHT_hvacDuctTargetRight: "SNA";
};

export type ID243VCRIGHT_hvacStatus_2 = {
    VCRIGHT_hvacStatusIndex: "STATUS_VCFRONT2";
    VCRIGHT_tempDuctLeftUpper: "SNA";
    VCRIGHT_tempDuctRightUpper: "SNA";
    VCRIGHT_hvacEvapInletTempEstimat: "SNA";
};

export type ID243VCRIGHT_hvacStatus_3 = {
    VCRIGHT_hvacStatusIndex: "END";
};

export type ID243VCRIGHT_hvacStatus = ID243VCRIGHT_hvacStatus_0 | ID243VCRIGHT_hvacStatus_1 | ID243VCRIGHT_hvacStatus_2 | ID243VCRIGHT_hvacStatus_3;

export type ID20CVCRIGHT_hvacRequest = {
    VCRIGHT_wattsDemandEvap: number;
    VCRIGHT_hvacEvapEnabled: number;
    VCRIGHT_conditioningRequest: number;
    VCRIGHT_tempEvaporator: "SNA";
    VCRIGHT_tempEvaporatorTarget: "SNA";
    VCRIGHT_hvacBlowerSpeedRPMReq: number;
    VCRIGHT_hvacPerfTestRunning: number;
    VCRIGHT_evapPerformanceLow: number;
    VCRIGHT_tempAmbientRaw: "SNA";
    VCRIGHT_hvacHeatingEnabledLeft: number;
    VCRIGHT_hvacHeatingEnabledRight: number;
    VCRIGHT_hvacPerfTestState: "STOPPED" | "WAITING" | "BLOWING";
    VCRIGHT_hvacUnavailable: number;
};

export type ID2E1VCFRONT_status_0 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_BODY_CONTROLS";
    VCFRONT_frunkLatchStatus: "LATCH_SNA" | "LATCH_OPENED" | "LATCH_CLOSED" | "LATCH_CLOSING" | "LATCH_OPENING" | "LATCH_AJAR" | "LATCH_TIMEOUT" | "LATCH_DEFAULT" | "LATCH_FAULT";
    VCFRONT_wiperSpeed: "WIPER_SPEED_SNA" | "WIPER_SPEED_OFF" | "WIPER_SPEED_1" | "WIPER_SPEED_2" | "WIPER_SPEED_3" | "WIPER_SPEED_4" | "WIPER_SPEED_5" | "WIPER_SPEED_LOW" | "WIPER_SPEED_HIGH";
    VCFRONT_wiperPosition: "WIPER_POSITION_SNA" | "WIPER_POSITION_SERVICE" | "WIPER_POSITION_DEPRESSED_PARK" | "WIPER_POSITION_DELAYED_REST" | "WIPER_POSITION_WIPING";
    VCFRONT_wiperState: "WIPER_STATE_SNA" | "WIPER_STATE_SERVICE" | "WIPER_STATE_FAULT" | "WIPER_STATE_DELAYED_REST" | "WIPER_STATE_PARK" | "WIPER_STATE_WASH" | "WIPER_STATE_MOMENTARY_WIPE" | "WIPER_STATE_INTERMITTENT_HIGH" | "WIPER_STATE_INTERMITTENT_LOW" | "WIPER_STATE_CONT_FAST" | "WIPER_STATE_CONT_SLOW" | "WIPER_STATE_INT_AUTO_LOW" | "WIPER_STATE_INT_AUTO_HIGH";
    VCFRONT_crashDetectedType: "CRASH_DETECTED_TYPE_NONE" | "CRASH_DETECTED_TYPE_MINOR_1" | "CRASH_DETECTED_TYPE_MINOR_2" | "CRASH_DETECTED_TYPE_SEVERE";
    VCFRONT_crashState: "CRASH_STATE_IDLE" | "CRASH_STATE_MINOR_1" | "CRASH_STATE_MINOR_2" | "CRASH_STATE_SEVERE";
    VCFRONT_crashUnlockOverrideSet: number;
    VCFRONT_airCompressorStatus: "VCFRONT_AIR_COMPRESSOR_STATUS_OFF" | "VCFRONT_AIR_COMPRESSOR_STATUS_ON" | "VCFRONT_AIR_COMPRESSOR_STATUS_TURNING_OFF" | "VCFRONT_AIR_COMPRESSOR_STATUS_TURNING_ON" | "VCFRONT_AIR_COMPRESSOR_STATUS_FAULT" | "VCFRONT_AIR_COMPRESSOR_STATUS_RETRY_AVAILABLE" | "VCFRONT_AIR_COMPRESSOR_STATUS_SNA";
    VCFRONT_headlightLeftVPosition: number;
    VCFRONT_headlightRightVPosition: number;
    VCFRONT_frunkInteriorRelSwitch: number;
    VCFRONT_anyClosureOpen: number;
    VCFRONT_anyDoorOpen: number;
    VCFRONT_hornOn: number;
    VCFRONT_radarHeaterState: "HEATER_STATE_SNA" | "HEATER_STATE_ON" | "HEATER_STATE_OFF" | "HEATER_STATE_OFF_UNAVAILABLE" | "HEATER_STATE_FAULT";
    VCFRONT_passengerBuckleStatus: "UNBUCKLED" | "BUCKLED";
    VCFRONT_frunkLatchType: "FRUNK_LATCH_TYPE_UNKNOWN" | "FRUNK_LATCH_TYPE_DOUBLE_ACTUATOR" | "FRUNK_LATCH_TYPE_DOUBLE_PULL";
    VCFRONT_headlampLeftFanStatus: number;
    VCFRONT_headlampRightFanStatus: number;
    VCFRONT_frunkAccessPost: number;
    VCFRONT_isActiveHeatingBattery: number;
};

export type ID2E1VCFRONT_status_1 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_VEHICLE_STATE";
    VCFRONT_iBoosterWakeLine: number;
    VCFRONT_epasWakeLine: number;
    VCFRONT_iBoosterStateDBG: "IBOOSTER_OFF" | "IBOOSTER_ON" | "IBOOSTER_GOING_DOWN" | "IBOOSTER_WRITING_DATA_SHUTDOWN" | "IBOOSTER_FORCE_OFF";
    VCFRONT_vehicleStatusDBG: "VEHICLE_STATUS_INIT" | "VEHICLE_STATUS_LOW_POWER_STANDBY" | "VEHICLE_STATUS_SILENT_WAKE" | "VEHICLE_STATUS_BATTERY_POST_WAKE" | "VEHICLE_STATUS_SYSTEM_CHECKS" | "VEHICLE_STATUS_SLEEP_SHUTDOWN" | "VEHICLE_STATUS_SLEEP_STANDBY" | "VEHICLE_STATUS_LV_SHUTDOWN" | "VEHICLE_STATUS_LV_AWAKE" | "VEHICLE_STATUS_HV_UP_STANDBY" | "VEHICLE_STATUS_ACCESSORY" | "VEHICLE_STATUS_ACCESSORY_PLUS" | "VEHICLE_STATUS_CONDITIONING" | "VEHICLE_STATUS_DRIVE" | "VEHICLE_STATUS_CRASH" | "VEHICLE_STATUS_OTA" | "VEHICLE_STATUS_TURN_ON_RAILS" | "VEHICLE_STATUS_RESET";
    VCFRONT_batterySMState: "BATTERY_SM_STATE_INIT" | "BATTERY_SM_STATE_CHARGE" | "BATTERY_SM_STATE_DISCHARGE" | "BATTERY_SM_STATE_STANDBY" | "BATTERY_SM_STATE_RESISTANCE_ESTIMATION" | "BATTERY_SM_STATE_OTA_STANDBY" | "BATTERY_SM_STATE_DISCONNECTED_BATTERY_TEST" | "BATTERY_SM_STATE_SHORTED_CELL_TEST" | "BATTERY_SM_STATE_FAULT";
    VCFRONT_timeSpentSleeping: number;
    VCFRONT_sleepCurrent: number;
};

export type ID2E1VCFRONT_status_2 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_HOMELINK";
    VCFRONT_homelinkV2Response0: number;
    VCFRONT_homelinkV2Response1: number;
    VCFRONT_homelinkV2Response2: number;
    VCFRONT_homelinkV2Response3: number;
    VCFRONT_homelinkV2Response4: number;
    VCFRONT_homelinkCommStatus: "HOMELINK_COMM_STATUS_SNA" | "HOMELINK_COMM_STATUS_OFF" | "HOMELINK_COMM_STATUS_ON" | "HOMELINK_COMM_STATUS_FAULT";
};

export type ID2E1VCFRONT_status_3 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_REFRIGERANT_SYSTEM";
    VCFRONT_maxEvapHeatRejection: number;
    VCFRONT_minEvapHeatRejection: number;
    VCFRONT_freezeEvapITerm: number;
    VCFRONT_isEvapOperationAllowed: number;
    VCFRONT_chillerDemandActive: number;
    VCFRONT_compPerfRecoveryLimited: number;
    VCFRONT_hvacModeNotAttainable: number;
    VCFRONT_hasLowRefrigerant: number;
    VCFRONT_isColdStartRunning: number;
    VCFRONT_isHeatPumpOilPurgeActive: number;
    VCFRONT_pressureRefrigSuction: "SNA";
    VCFRONT_pressureRefrigDischarge: "SNA";
    VCFRONT_hvacPerfTestCommand: "NOT_STARTED" | "INIT" | "BLOW" | "STOP";
    VCFRONT_coolantFillRoutineStatus: "NOT_READY" | "MOVING_TO_FILL_POSITION" | "READY_TO_FILL" | "FAULTED";
    VCFRONT_refrigFillRoutineStatus: "NOT_READY" | "MOVING_TO_FILL_POSITION" | "READY_TO_FILL" | "FAULTED";
};

export type ID2E1VCFRONT_status_4 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_LV_BATTERY";
    VCFRONT_tempCompTargetVoltage: number;
    VCFRONT_chargeNeeded: number;
    VCFRONT_PCSMia: number;
    VCFRONT_IBSFault: number;
    VCFRONT_12VOverchargeCounter: number;
    VCFRONT_voltageDropCounter: number;
    VCFRONT_voltageFloorReachedCount: number;
    VCFRONT_voltageProfile: "VOLTAGE_PROFILE_CHARGE" | "VOLTAGE_PROFILE_FLOAT" | "VOLTAGE_PROFILE_REDUCED_FLOAT" | "VOLTAGE_PROFILE_ALWAYS_CLOSED_CONTACTORS";
    VCFRONT_reverseBatteryFault: number;
    VCFRONT_silentWakeIBSCurrent: number;
    VCFRONT_shortedCellFaultCounter: number;
};

export type ID2E1VCFRONT_status_5 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_SYSTEM_HEALTH";
    VCFRONT_5VARailStable: number;
    VCFRONT_5VBRailStable: number;
    VCFRONT_12VARailStable: number;
    VCFRONT_12VBRailStable: number;
    VCFRONT_railAState: number;
    VCFRONT_railBState: number;
    VCFRONT_ChargePumpVoltageStable: number;
    VCFRONT_PEResetLineState: number;
    VCFRONT_HSDInitCompleteU13: number;
    VCFRONT_HSDInitCompleteU16: number;
    VCFRONT_vbatMonitorVoltage: "SNA";
    VCFRONT_AS8510Voltage: "SNA";
    VCFRONT_vbatProt: number;
};

export type ID2E1VCFRONT_status_6 = {
    VCFRONT_statusIndex: "VCF_STS_IDX_INVALID";
};

export type ID2E1VCFRONT_status = ID2E1VCFRONT_status_0 | ID2E1VCFRONT_status_1 | ID2E1VCFRONT_status_2 | ID2E1VCFRONT_status_3 | ID2E1VCFRONT_status_4 | ID2E1VCFRONT_status_5 | ID2E1VCFRONT_status_6;

export type ID381VCFRONT_logging1Hz_0 = {
    VCFRONT_logging1HzIndex: "COOLANT";
    VCFRONT_modeTransitionID: "PARALLEL_F1_noFlowRequest" | "SERIES_F2_faultPumps" | "SERIES_F3_faultTempSensors" | "SERIES_1_drive_batteryWantsCool" | "SERIES_2_drive_batteryNeedsHeat" | "SERIES_3_drive_batteryWantsHeat" | "PARALLEL_2_drive_batteryWantsHeat" | "PARALLEL_3_drive_batteryWantsCool" | "PARALLEL_4_drive_batteryNeedsCool" | "SERIES_4_charge_batteryNeedsHeat" | "SERIES_5_charge_batteryWantsHeat" | "PARALLEL_5_charge_batteryWantsHeat" | "PARALLEL_6_charge_batteryWantsCool" | "SERIES_6_fastCharge_batteryNeedsHeat" | "SERIES_7_fastCharge_batteryWantsCool" | "PARALLEL_7_fastCharge_batteryWantsCool" | "PARALLEL_8_fastCharge_batteryWantsHeat" | "SERIES_8_preConditioning_batteryNeedsHeat" | "SERIES_9_drive_driveUnitThermalLimiting" | "PARALLEL_9_drive_batteryThermalLimiting" | "INIT" | "OVERRIDE" | "UNDEFINED" | "ENTER_AMBIENTSOURCE" | "EXIT_AMBIENTSOURCE" | "SER_1_drive_battNeedsActiveCooling_evapEnabled" | "SER_2_drive_battBelowHotStagnationTemp" | "SER_3_drive_chillerPassivelyCools" | "SER_4_drive_radPassivelyCoolsBatt" | "SER_5_FC_battHeatingNeeded" | "SER_6_FC_battNeedsActiveCooling_evapDisabled" | "SER_7_FC_battNeedsActiveCooling_evapEnabled" | "SER_8_charge_battBelowPassiveTarget" | "PAR_1_drive_battNeedsActiveCooling_evapDisabled" | "PAR_2_drive_ptNeedsActiveCooling" | "PAR_3_drive_chillerPassivelyCoolsBatt" | "PAR_4_drive_cannotPassivelyCoolBatt" | "PAR_5_drive_battAboveHotStagnationTemp" | "PAR_6_FC_battNeedsActiveCooling_evapDisabled" | "PAR_7_FC_battNeedsActiveCooling_evapEnabled" | "PAR_8_charge_battAbovePassiveTarget";
    VCFRONT_modeDesired: "SERIES" | "PARALLEL" | "BLEND" | "AMBIENT_SOURCE";
    VCFRONT_targetPTActiveCool: number;
    VCFRONT_targetPTPassive: number;
    VCFRONT_targetBatActiveCool: number;
    VCFRONT_targetBatPassive: number;
    VCFRONT_targetBatActiveHeat: number;
    VCFRONT_coolantLevelVoltage: number;
};

export type ID381VCFRONT_logging1Hz_1 = {
    VCFRONT_logging1HzIndex: "FAN_DEMAND_CONDENSER_AND_FET_TEMPS";
    VCFRONT_condenserPressureLimit: number;
    VCFRONT_fanDemandCondenser: number;
    VCFRONT_fanDemandRadiator: number;
    VCFRONT_tempRefrigSuction: "SNA";
    VCFRONT_pumpBatteryFETTemp: "SNA";
    VCFRONT_pumpPowertrainFETTemp: "SNA";
    VCFRONT_radiatorFanFETTemp: "SNA";
    VCFRONT_radiatorFanRunReason: "NONE" | "ACTIVE_MANAGER" | "AMBIENT_SNIFF" | "NVH_MASKING" | "HEAT_PUMP" | "COAST_MODE" | "MIN_ON_GLOBAL" | "MIN_ON_NVH" | "UDS";
};

export type ID381VCFRONT_logging1Hz_2 = {
    VCFRONT_logging1HzIndex: "COOLANT_VALVE";
    VCFRONT_coolantValveRecalReason: "UNDEFINED" | "MAX_TRAVEL" | "GENERAL_FAULT" | "CALIBRATION_FAULT_NO_TRAVEL" | "SELF_TEST" | "MOTOR_FEEDBACK_INTERRUPTED" | "NVRAM_LOSS" | "SYSTEM_LEVEL_FAULT_RESPONSE";
    VCFRONT_coolantValveCountRange: "SNA";
    VCFRONT_coolantValveAngleDrift: number;
    VCFRONT_coolantValveRecalCount: number;
    VCFRONT_coolantValveWindupEstL: number;
    VCFRONT_coolantValveWindupEstR: number;
    VCFRONT_coolantValveRadBypass: "SNA";
};

export type ID381VCFRONT_logging1Hz_3 = {
    VCFRONT_logging1HzIndex: "HCML_LED_TEMPS";
    VCFRONT_HCML_lowBeamSpotTemp: "SNA";
    VCFRONT_HCML_highBeamTemp: "SNA";
    VCFRONT_HCML_turnTemp: "SNA";
    VCFRONT_HCML_bladeTemp: "SNA";
    VCFRONT_HCML_diffuseTemp: "SNA";
};

export type ID381VCFRONT_logging1Hz_4 = {
    VCFRONT_logging1HzIndex: "HCMR_LED_TEMPS";
    VCFRONT_HCMR_lowBeamSpotTemp: "SNA";
    VCFRONT_HCMR_highBeamTemp: "SNA";
    VCFRONT_HCMR_turnTemp: "SNA";
    VCFRONT_HCMR_bladeTemp: "SNA";
    VCFRONT_HCMR_diffuseTemp: "SNA";
};

export type ID381VCFRONT_logging1Hz_5 = {
    VCFRONT_logging1HzIndex: "HOMELINK";
    VCFRONT_homelinkRegionCode: "HOMELINK_REGION_CODE_UNKNOWN" | "HOMELINK_REGION_CODE_EUROPE" | "HOMELINK_REGION_CODE_AMERICAS" | "HOMELINK_REGION_CODE_REST_OF_WORLD" | "HOMELINK_REGION_CODE_CHINA";
};

export type ID381VCFRONT_logging1Hz_6 = {
    VCFRONT_logging1HzIndex: "HEADLAMP_AIM";
    VCFRONT_calibratedPositionHCML: number;
    VCFRONT_calibratedPositionHCMR: number;
    VCFRONT_currentPositionHCML: number;
    VCFRONT_currentPositionHCMR: number;
};

export type ID381VCFRONT_logging1Hz_7 = {
    VCFRONT_logging1HzIndex: "HP_EXV_RANGE";
    VCFRONT_chillerExvRange: number;
    VCFRONT_evapExvRange: number;
    VCFRONT_recircExvRange: number;
    VCFRONT_lccExvRange: number;
    VCFRONT_ccLeftExvRange: number;
    VCFRONT_ccRightExvRange: number;
};

export type ID381VCFRONT_logging1Hz_8 = {
    VCFRONT_logging1HzIndex: "HP_DATA_AND_ACCUMULATORS";
    VCFRONT_subcoolActual: number;
    VCFRONT_hpSubcoolTarget: number;
    VCFRONT_CMPDischargeSuperheat: number;
    VCFRONT_hpCOP: number;
    VCFRONT_hpBattStagTarget: number;
    VCFRONT_compEnergyDuringDrive: number;
    VCFRONT_cabinHeatEnergyDuringDri: number;
    VCFRONT_lowSideLiftEnergyDrive: number;
    VCFRONT_lowSideWattsLift: number;
};

export type ID381VCFRONT_logging1Hz_9 = {
    VCFRONT_logging1HzIndex: "HP_CONTROL_LOOP_AND_STATE";
    VCFRONT_exteriorQuietModeEnabled: number;
    VCFRONT_exteriorQuietModeAllowed: number;
    VCFRONT_CCQdotFdFrwrdTarget: number;
    VCFRONT_CCQdotFdbk: number;
    VCFRONT_CCQdotActual: number;
    VCFRONT_evapFdFrwrdTarget: number;
    VCFRONT_evapFdbk: number;
    VCFRONT_DIQdotA: number;
    VCFRONT_evapFdFrwrdTargetMinimum: number;
    VCFRONT_passiveCoolingState: "ChillerCoolsSeriesLoop" | "ChillerCoolsParallelBattLoop" | "ChillerAndRadCoolSeriesLoop" | "CannotCoolBattery";
    VCFRONT_totalLoadCoolingDominant: number;
    VCFRONT_feedfwdLoadCoolingDomina: number;
    VCFRONT_modelLoadCoolingDominant: number;
    VCFRONT_hpPotentialLowRefrig: number;
    VCFRONT_hpRefrigerantPurgeState: "IDLE" | "EVAP_PURGE" | "COMPLETE";
};

export type ID381VCFRONT_logging1Hz_10 = {
    VCFRONT_logging1HzIndex: "HP_CYCLE_MODEL";
    VCFRONT_estPressureLiq: number;
    VCFRONT_estPressureSuct: number;
    VCFRONT_estPressureDisch: number;
    VCFRONT_estTempLiq: number;
    VCFRONT_estTempSuct: number;
    VCFRONT_estTempDisch: number;
    VCFRONT_estCompressorRpm: number;
    VCFRONT_estQLift: number;
    VCFRONT_cycleModelConverged: number;
};

export type ID381VCFRONT_logging1Hz_11 = {
    VCFRONT_logging1HzIndex: "HP_EXV_CALIBRATION";
    VCFRONT_chillerExvCalibOffset: number;
    VCFRONT_evapExvCalibOffset: number;
    VCFRONT_recircExvCalibOffset: number;
    VCFRONT_lccExvCalibOffset: number;
    VCFRONT_ccLeftExvCalibOffset: number;
    VCFRONT_ccRightExvCalibOffset: number;
    VCFRONT_chillerExvCalibFailed: number;
    VCFRONT_evapExvCalibFailed: number;
    VCFRONT_recircExvCalibFailed: number;
    VCFRONT_lccExvCalibFailed: number;
    VCFRONT_ccLeftExvCalibFailed: number;
    VCFRONT_ccRightExvCalibFailed: number;
};

export type ID381VCFRONT_logging1Hz_12 = {
    VCFRONT_logging1HzIndex: "HP_DISSIPATION_AND_POWER";
    VCFRONT_battDissipation: number;
    VCFRONT_diDissipation: number;
    VCFRONT_chillerPassiveCoolPower: number;
    VCFRONT_lccPassiveHeatPower: number;
    VCFRONT_maxAllowedEvapPowerInSer: number;
    VCFRONT_minAllowedChillerPowerIn: number;
    VCFRONT_hpCompPowerIndexFiltered: number;
};

export type ID381VCFRONT_logging1Hz_13 = {
    VCFRONT_logging1HzIndex: "HP_TEMPS_AND_DEMANDS";
    VCFRONT_radPassiveRejectEstimate: number;
    VCFRONT_lccInletTempEstimate: number;
    VCFRONT_chillerInletTempEstimate: number;
    VCFRONT_feedFwdFanDemand: number;
    VCFRONT_feedFwdPumpDemand: number;
    VCFRONT_radActiveRejectEstimate: number;
};

export type ID381VCFRONT_logging1Hz_14 = {
    VCFRONT_logging1HzIndex: "HP_PRESSURE_CONTROL";
    VCFRONT_dischargePressureTarget: number;
    VCFRONT_evapDisabledLowPsCutout: number;
    VCFRONT_minFlowPDCont: number;
    VCFRONT_PDischargeControllerOutp: number;
    VCFRONT_suctionPressureTarget: number;
    VCFRONT_ambientSourcingDisabled: number;
    VCFRONT_chillerLiftDisabledLowPs: number;
    VCFRONT_PSuctionControllerOutput: number;
    VCFRONT_minAllowedSuctionPressur: number;
    VCFRONT_maxCompressorRPMAllowed: number;
};

export type ID381VCFRONT_logging1Hz_15 = {
    VCFRONT_logging1HzIndex: "HP_ARBITRATION";
    VCFRONT_feedFwdMDotEvaporator: number;
    VCFRONT_feedFwdMDotCabinCondense: number;
    VCFRONT_feedBackEvapTempControll: number;
    VCFRONT_feedBackDuctTempControll: number;
    VCFRONT_maxChillerCoolingPower: number;
    VCFRONT_fanControlRadCanCool: number;
    VCFRONT_fanControlFeedfwdActive: number;
    VCFRONT_fanControlRadiatorUa: number;
    VCFRONT_fanControlRadiatorInletT: number;
};

export type ID381VCFRONT_logging1Hz_16 = {
    VCFRONT_logging1HzIndex: "HP_MODE_SELECT_AND_ESTIMATES";
    VCFRONT_hpForceScavenge: number;
    VCFRONT_battOverStagUpperLimit: number;
    VCFRONT_battUnderStagUpperLimit: number;
    VCFRONT_ambientColderThanBatt: number;
    VCFRONT_ambientSourcingAvailable: number;
    VCFRONT_hpMode: "NONE" | "GENERAL" | "AMBIENT_SOURCE" | "CABIN_HEAT_SCAVENGE_ONLY" | "CABIN_HEAT_AMBIENT_SOURCE" | "CABIN_HEAT_REHEAT_SCAVENGE" | "CABIN_HEAT_REHEAT_AMBIENT_SOURCE" | "CABIN_HEAT_BLEND" | "CABIN_HEAT_COP1" | "CABIN_HEAT_BATTERY_HEAT_REHEAT_AMBIENT_SOURCE" | "CABIN_HEAT_BATTERY_COOL_REHEAT" | "CABIN_COOL_EVAPORATOR" | "CABIN_COOL_EVAPORATOR_REHEAT" | "BATTERY_HEAT_AMBIENT_SOURCE" | "BATTERY_HEAT_COP1" | "BATTERY_COOL" | "BATTERY_COOL_CABIN_CONDENSER_REHEAT" | "BATTERY_COOL_CABIN_CONDENSER" | "BATTERY_COOL_CABIN_REHEAT" | "BATTERY_COOL_EVAPORATOR";
    VCFRONT_battLoopWorthCooling: number;
    VCFRONT_ptLoopWorthCooling: number;
    VCFRONT_estCompRefrigMassflow: number;
    VCFRONT_pressureRefrigDischEst: number;
    VCFRONT_tempRefrigDischargeEst: number;
    VCFRONT_estCompPower: number;
    VCFRONT_hpCompPowerIndex: number;
    VCFRONT_hpAtSteadyState: number;
    VCFRONT_pressureRefrigSuctionEst: number;
    VCFRONT_suctionSuperheatEstPsSNA: number;
};

export type ID381VCFRONT_logging1Hz_17 = {
    VCFRONT_logging1HzIndex: "HP_MODE_OPTIONS_AND_ESTIMATES";
    VCFRONT_hpGeneral: number;
    VCFRONT_hpAmbientSource: number;
    VCFRONT_hpCabinHeatScavengeOnly: number;
    VCFRONT_hpCabinHeatAmbientSource: number;
    VCFRONT_hpCabinHeatReheatScaveng: number;
    VCFRONT_hpCabinHeatReheatAmbient: number;
    VCFRONT_hpCabinHeatBlend: number;
    VCFRONT_hpCabinHeatCOP1: number;
    VCFRONT_hpCabinHeatBatteryHeatRe: number;
    VCFRONT_hpCabinHeatBatteryCoolRe: number;
    VCFRONT_hpCabinCoolEvaporator: number;
    VCFRONT_hpCabinCoolEvaporatorReh: number;
    VCFRONT_hpBatteryHeatAmbientSour: number;
    VCFRONT_hpBatteryHeatCOP1: number;
    VCFRONT_hpBatteryCool: number;
    VCFRONT_hpBatteryCoolCabinConden: number;
    VCFRONT_hpBatteryCoolCabinReheat: number;
    VCFRONT_hpBatteryCoolEvaporator: number;
    VCFRONT_suctionSuperheatEstTsSNA: number;
    VCFRONT_tempRefrigSuctionEst: number;
    VCFRONT_hpBattOverTempHvacDisabl: number;
    VCFRONT_hpDiagLouverCalib: number;
};

export type ID381VCFRONT_logging1Hz_18 = {
    VCFRONT_logging1HzIndex: "BODY_CONTROL";
    VCFRONT_drlMode: "DRL_MODE_OFF" | "DRL_MODE_POSITION" | "DRL_MODE_DRL";
    VCFRONT_wiperCycles: number;
};

export type ID381VCFRONT_logging1Hz_19 = {
    VCFRONT_logging1HzIndex: "COOLANT_2";
    VCFRONT_passiveSeriesRegOn: number;
    VCFRONT_passiveDemandRadBypass: number;
    VCFRONT_lccActiveCoolTarget: number;
    VCFRONT_coolantValveOdometer: number;
    VCFRONT_coolantValveDailyAngleTr: number;
    VCFRONT_dischargePressureLimit: number;
};

export type ID381VCFRONT_logging1Hz_20 = {
    VCFRONT_logging1HzIndex: "END";
};

export type ID381VCFRONT_logging1Hz = ID381VCFRONT_logging1Hz_0 | ID381VCFRONT_logging1Hz_1 | ID381VCFRONT_logging1Hz_2 | ID381VCFRONT_logging1Hz_3 | ID381VCFRONT_logging1Hz_4 | ID381VCFRONT_logging1Hz_5 | ID381VCFRONT_logging1Hz_6 | ID381VCFRONT_logging1Hz_7 | ID381VCFRONT_logging1Hz_8 | ID381VCFRONT_logging1Hz_9 | ID381VCFRONT_logging1Hz_10 | ID381VCFRONT_logging1Hz_11 | ID381VCFRONT_logging1Hz_12 | ID381VCFRONT_logging1Hz_13 | ID381VCFRONT_logging1Hz_14 | ID381VCFRONT_logging1Hz_15 | ID381VCFRONT_logging1Hz_16 | ID381VCFRONT_logging1Hz_17 | ID381VCFRONT_logging1Hz_18 | ID381VCFRONT_logging1Hz_19 | ID381VCFRONT_logging1Hz_20;

export type ID318SystemTimeUTC = {
    UTCyear318: number;
    UTCmonth318: number;
    UTCseconds318: number;
    UTChour318: number;
    UTCday318: number;
    UTCminutes318: number;
};

export type ID528UnixTime = {
    UnixTimeSeconds528: number;
};

export type ID229GearLever = {
    GearLeverPosition229: "Center" | "Half Down" | "Full Down" | "Half Up" | "Full Up";
    GearLeverButton229: number;
};

export type ID249SCCMLeftStalk = {
    SCCM_leftStalkCrc: number;
    SCCM_leftStalkCounter: number;
    SCCM_highBeamStalkStatus: "IDLE" | "PULL" | "PUSH" | "SNA";
    SCCM_washWipeButtonStatus: "NOT_PRESSED" | "1ST_DETENT" | "2ND_DETENT" | "SNA";
    SCCM_turnIndicatorStalkStatus: "IDLE" | "UP_0_5" | "UP_1" | "UP_1_5" | "UP_2" | "DOWN_0_5" | "DOWN_1" | "DOWN_1_5" | "DOWN_2" | "SNA";
    SCCM_leftStalkReserved1: number;
};

export type ID186DIF_torque = {
    DIF_torqueChecksum: number;
    DIF_torqueCounter: number;
    DIF_torqueCommand: "SNA";
    DIF_axleSpeedQF: number;
    DIF_torqueActual: "SNA";
    DIF_axleSpeed: "SNA";
    DIF_slavePedalPos: "SNA";
};

export type ID396FrontOilPump = {
    FrontOilPumpState396: "OIL_PUMP_STANDBY" | "OIL_PUMP_ENABLE" | "OIL_PUMP_COLD_STARTUP" | "OIL_PUMP_FAULTED" | "OIL_PUMP_SNA";
    FrontOilPumpOilTempEstConfident3: number;
    FrontOilPumpLeadAngle396: number;
    FrontOilPumpDutyCycle396: number;
    FrontOilFlowActual396: number;
    FrontOilPumpFluidTemp396: number;
    FrontOilPumpOilTempEst396: number;
    FrontOilPumpPressureEstimate396: number;
    FrontOilPumpPressureExpected396: number;
    FrontOilPumpPhaseCurrent396: number;
};

export type ID395DIR_oilPump = {
    DIR_oilPumpState: "OIL_PUMP_STANDBY" | "OIL_PUMP_ENABLE" | "OIL_PUMP_COLD_STARTUP" | "OIL_PUMP_FAULTED" | "OIL_PUMP_SNA";
    DIR_oilPumpFluidTQF: "OIL_PUMP_FLUIDT_LOW_CONFIDENCE" | "OIL_PUMP_FLUIDT_HIGH_CONFIDENCE";
    DIR_oilPumpLeadAngle: number;
    DIR_oilPumpFlowTarget: number;
    DIR_oilPumpFlowActual: number;
    DIR_oilPumpFluidT: number;
    DIR_oilPumpPhaseCurrent: number;
    DIR_oilPumpPressureEstimate: number;
    DIR_oilPumpPressureExpected: number;
    DIR_oilPumpPressureResidual: number;
};

export type ID1D8RearTorque = {
    TorqueFlags1D8: number;
    RearTorqueRequest1D8: number;
    RearTorque1D8: number;
    Counter1D8: number;
    Checksum1D8: number;
};

export type ID155WheelAngles = {
    WheelAngleTicsFL155: number;
    WheelAngleTicsFR155: number;
    WheelAngleTicsRL155: number;
    WheelAngleTicsRR155: number;
    ESP_WheelRotationReR: "WR_FORWARD" | "WR_BACKWARD" | "WR_STANDSTILL" | "WR_NOT_DEFINABLE";
    ESP_WheelRotationReL: "WR_FORWARD" | "WR_BACKWARD" | "WR_STANDSTILL" | "WR_NOT_DEFINABLE";
    ESP_WheelRotationFrR: "WR_FORWARD" | "WR_BACKWARD" | "WR_STANDSTILL" | "WR_NOT_DEFINABLE";
    ESP_WheelRotationFrL: "WR_FORWARD" | "WR_BACKWARD" | "WR_STANDSTILL" | "WR_NOT_DEFINABLE";
    ESP_wheelSpeedsQF: "ONE_OR_MORE_WSS_INVALID" | "ALL_WSS_VALID";
    ESP_vehicleStandstillSts: "NOT_STANDSTILL" | "STANDSTILL";
    ESP_vehicleSpeed: "ESP_VEHICLE_SPEED_SNA";
    ESP_wheelRotationCounter: number;
    ESP_wheelRotationChecksum: number;
};

export type ID175WheelSpeed = {
    WheelSpeedFL175: "SNA";
    WheelSpeedFR175: "SNA";
    WheelSpeedRL175: "SNA";
    WheelSpeedRR175: "SNA";
    ESP_wheelSpeedsCounter: number;
    ESP_wheelSpeedsChecksum: number;
};

export type ID185ESP_brakeTorque = {
    ESP_brakeTorqueFrL: "SNA";
    ESP_brakeTorqueFrR: "SNA";
    ESP_brakeTorqueReL: "SNA";
    ESP_brakeTorqueReR: "SNA";
    ESP_brakeTorqueQF: "UNDEFINABLE_ACCURACY" | "IN_SPEC";
    ESP_brakeTorqueCounter: number;
    ESP_brakeTorqueChecksum: number;
};

export type ID1D4FrontTorqueOld = {
    RAWTorqueFront1D4: number;
};

export type ID1D5FrontTorque = {
    FrontTorqueRequest1D5: number;
    FrontTorque1D5: number;
};

export type ID281VCFRONT_CMPRequest = {
    VCFRONT_CMPTargetDuty: number;
    VCFRONT_CMPPowerLimit: number;
    VCFRONT_CMPReset: number;
    VCFRONT_CMPEnable: number;
};

export type ID3C2VCLEFT_switchStatus_0 = {
    VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_0";
    VCLEFT_hornSwitchPressed: number;
    VCLEFT_hazardButtonPressed: number;
    VCLEFT_brakeSwitchPressed: number;
    VCLEFT_rightMirrorTilt: "MIRROR_TILT_STOP" | "MIRROR_TILT_DOWN" | "MIRROR_TILT_UP" | "MIRROR_TILT_RIGHT" | "MIRROR_TILT_LEFT";
    VCLEFT_frontSeatTrackBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatTrackForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatTiltDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatTiltUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLiftDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLiftUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatBackrestBack: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatBackrestForward: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLumbarDown: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLumbarUp: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLumbarIn: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontSeatLumbarOut: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_btnWindowSwPackUpLF: number;
    VCLEFT_btnWindowSwPackAutoUpLF: number;
    VCLEFT_btnWindowSwPackDownLF: number;
    VCLEFT_btnWindowSwPackAutoDownLF: number;
    VCLEFT_btnWindowSwPackUpLR: number;
    VCLEFT_btnWindowSwPackAutoUpLR: number;
    VCLEFT_btnWindowSwPackDownLR: number;
    VCLEFT_btnWindowSwPackAutoDownLR: number;
    VCLEFT_btnWindowSwPackUpRF: number;
    VCLEFT_btnWindowSwPackAutoUpRF: number;
    VCLEFT_btnWindowSwPackDownRF: number;
    VCLEFT_btnWindowSwPackAutoDownRF: number;
    VCLEFT_btnWindowSwPackUpRR: number;
    VCLEFT_btnWindowSwPackAutoUpRR: number;
    VCLEFT_btnWindowSwPackDownRR: number;
    VCLEFT_btnWindowSwPackAutoDownRR: number;
    VCLEFT_frontBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_frontOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_rearLeftBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_rearCenterOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_rearLeftOccupancySwitch: number;
    VCLEFT_rearRightOccupancySwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_brakePressed: number;
    VCLEFT_rearHVACButtonPressed: number;
    VCLEFT_rearCenterBuckleSwitch: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
};

export type ID3C2VCLEFT_switchStatus_1 = {
    VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_1";
    VCLEFT_swcLeftTiltRight: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcLeftPressed: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcRightTiltLeft: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcRightTiltRight: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcRightPressed: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcLeftTiltLeft: "SWITCH_SNA" | "SWITCH_OFF" | "SWITCH_ON" | "SWITCH_FAULT";
    VCLEFT_swcLeftScrollTicks: number;
    VCLEFT_swcRightScrollTicks: number;
    VCLEFT_btnWindowUpLR: number;
    VCLEFT_btnWindowAutoUpLR: number;
    VCLEFT_btnWindowDownLR: number;
    VCLEFT_btnWindowAutoDownLR: number;
    VCLEFT_2RowSeatReclineSwitch: number;
    VCLEFT_2RowSeatCenterSwitch: number;
    VCLEFT_2RowSeatLeftFoldFlatSwitch: number;
    VCLEFT_2RowSeatRightFoldFlatSwitch: number;
    VCLEFT_2RowSeatBothFoldFlatSwitch: number;
    VCLEFT_swcLeftDoublePress: number;
    VCLEFT_swcRightDoublePress: number;
};

export type ID3C2VCLEFT_switchStatus_2 = {
    VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_INVALID";
};

export type ID3C2VCLEFT_switchStatus = ID3C2VCLEFT_switchStatus_0 | ID3C2VCLEFT_switchStatus_1 | ID3C2VCLEFT_switchStatus_2;

export type ID336MaxPowerRating = {
    DrivePowerRating336: number;
    DriveRegenRating336: number;
    DI_performancePackage: "BASE" | "PERFORMANCE" | "BASE_PLUS" | "SNA";
};

export type ID293UI_chassisControl = {
    UI_steeringTuneRequest: "STEERING_TUNE_COMFORT" | "STEERING_TUNE_STANDARD" | "STEERING_TUNE_SPORT";
    UI_tractionControlMode: "TC_NORMAL_SELECTED" | "TC_SLIP_START_SELECTED" | "TC_DEV_MODE_1_SELECTED" | "TC_DEV_MODE_2_SELECTED" | "TC_ROLLS_MODE_SELECTED" | "TC_DYNO_MODE_SELECTED" | "TC_OFFROAD_ASSIST_SELECTED";
    UI_parkBrakeRequest: "PARK_BRAKE_REQUEST_IDLE" | "PARK_BRAKE_REQUEST_PRESSED" | "PARK_BRAKE_REQUEST_SNA";
    UI_narrowGarages: number;
    UI_winchModeRequest: "WINCH_MODE_IDLE" | "WINCH_MODE_ENTER" | "WINCH_MODE_EXIT";
    UI_zeroSpeedConfirmed: "ZERO_SPEED_CANCELED" | "ZERO_SPEED_CONFIRMED" | "ZERO_SPEED_UNUSED" | "ZERO_SPEED_SNA";
    UI_trailerMode: "TRAILER_MODE_OFF" | "TRAILER_MODE_ON";
    UI_distanceUnits: "DISTANCEUNITS_KM" | "DISTANCEUNITS_MILES";
    UI_dasDebugEnable: number;
    UI_accOvertakeEnable: "ACC_OVERTAKE_OFF" | "ACC_OVERTAKE_ON" | "SNA";
    UI_aebEnable: "AEB_OFF" | "AEB_ON" | "SNA";
    UI_aesEnable: "AES_OFF" | "AES_ON" | "SNA";
    UI_ahlbEnable: "AHLB_OFF" | "AHLB_ON" | "SNA";
    UI_autoLaneChangeEnable: "OFF" | "ON" | "SNA";
    UI_rebootAutopilot: number;
    UI_autoParkRequest: "NONE" | "PARK_LEFT_PARALLEL" | "PARK_LEFT_CROSS" | "PARK_RIGHT_PARALLEL" | "PARK_RIGHT_CROSS" | "PARALLEL_PULL_OUT_TO_LEFT" | "PARALLEL_PULL_OUT_TO_RIGHT" | "ABORT" | "COMPLETE" | "SEARCH" | "PAUSE" | "RESUME" | "SNA";
    UI_bsdEnable: "BSD_OFF" | "BSD_ON" | "SNA";
    UI_fcwEnable: "FCW_OFF" | "FCW_ON" | "SNA";
    UI_fcwSensitivity: "AEB_SENSITIVITY_EARLY" | "AEB_SENSITIVITY_AVERAGE" | "AEB_SENSITIVITY_LATE" | "SNA";
    UI_latControlEnable: "LATERAL_CONTROL_OFF" | "LATERAL_CONTROL_ON" | "LATERAL_CONTROL_UNAVAILABLE" | "LATERAL_CONTROL_SNA";
    UI_ldwEnable: "NO_HAPTIC" | "LDW_TRIGGERS_HAPTIC" | "SNA";
    UI_pedalSafetyEnable: "PEDAL_SAFETY_OFF" | "PEDAL_SAFETY_ON" | "SNA";
    UI_redLightStopSignEnable: "RLSSW_OFF" | "RLSSW_ON" | "SNA";
    UI_selfParkTune: "SNA";
    UI_chassisControlCounter: number;
    UI_chassisControlChecksum: number;
};

export type ID268SystemPower = {
    SystemHeatPowerMax268: number;
    SystemHeatPower268: number;
    SystemDrivePowerMax268: number;
    DI_primaryUnitSiliconType: "MOSFET" | "IGBT";
    SystemRegenPowerMax268: number;
};

export type ID04FGPSLatLong = {
    GPSLatitude04F: number;
    GPSLongitude04F: number;
    GPSAccuracy04F: number;
};

export type ID3D2TotalChargeDischarge = {
    TotalDischargeKWh3D2: number;
    TotalChargeKWh3D2: number;
};

export type ID3F2BMSCounters_0 = {
    BMS_kwhCounter_Id: 0;
    BMS_acChargerKwhTotal: number;
};

export type ID3F2BMSCounters_1 = {
    BMS_kwhCounter_Id: 1;
    BMS_dcChargerKwhTotal: number;
};

export type ID3F2BMSCounters_2 = {
    BMS_kwhCounter_Id: 2;
    BMS_kwhRegenChargeTotal: number;
};

export type ID3F2BMSCounters_3 = {
    BMS_kwhCounter_Id: 3;
    BMS_kwhDriveDischargeTotal: number;
};

export type ID3F2BMSCounters_4 = {
    BMS_kwhCounter_Id: 4;
    BMS_kwhDischargeTotalModule1: number;
    BMS_kwhChargeTotalModule1: number;
};

export type ID3F2BMSCounters_5 = {
    BMS_kwhCounter_Id: 5;
    BMS_kwhAcChargeTotalModule1: number;
    BMS_kwhDcChargeTotalModule1: number;
};

export type ID3F2BMSCounters_6 = {
    BMS_kwhCounter_Id: 6;
    BMS_kwhDischargeTotalModule2: number;
    BMS_kwhChargeTotalModule2: number;
};

export type ID3F2BMSCounters_7 = {
    BMS_kwhCounter_Id: 7;
    BMS_kwhAcChargeTotalModule2: number;
    BMS_kwhDcChargeTotalModule2: number;
};

export type ID3F2BMSCounters_8 = {
    BMS_kwhCounter_Id: 8;
    BMS_kwhDischargeTotalModule3: number;
    BMS_kwhChargeTotalModule3: number;
};

export type ID3F2BMSCounters_9 = {
    BMS_kwhCounter_Id: 9;
    BMS_kwhAcChargeTotalModule3: number;
    BMS_kwhDcChargeTotalModule3: number;
};

export type ID3F2BMSCounters_10 = {
    BMS_kwhCounter_Id: 10;
    BMS_kwhDischargeTotalModule4: number;
    BMS_kwhChargeTotalModule4: number;
};

export type ID3F2BMSCounters_11 = {
    BMS_kwhCounter_Id: 11;
    BMS_kwhAcChargeTotalModule4: number;
    BMS_kwhDcChargeTotalModule4: number;
};

export type ID3F2BMSCounters = ID3F2BMSCounters_0 | ID3F2BMSCounters_1 | ID3F2BMSCounters_2 | ID3F2BMSCounters_3 | ID3F2BMSCounters_4 | ID3F2BMSCounters_5 | ID3F2BMSCounters_6 | ID3F2BMSCounters_7 | ID3F2BMSCounters_8 | ID3F2BMSCounters_9 | ID3F2BMSCounters_10 | ID3F2BMSCounters_11;

export type ID2D2BMSVAlimits = {
    MinVoltage2D2: number;
    MaxVoltage2D2: number;
    MaxChargeCurrent2D2: number;
    MaxDischargeCurrent2D2: number;
};

export type ID541FastChargeMaxLimits = {
    FCMaxPowerLimit541: number;
    FCMaxCurrentLimit541: number;
};

export type ID244FastChargeLimits = {
    FCPowerLimit244: number;
    FCCurrentLimit244: number;
    FCMaxVlimit244: number;
    FCMinVlimit244: number;
};

export type ID214FastChargeVA = {
    FC_protocolVersion: number;
    FC_statusCode: "FC_STATUS_NOTREADY_SNA" | "FC_STATUS_READY" | "FC_STATUS_UPDATE_IN_PROGRESS" | "FC_STATUS_DEPRECATED_3" | "FC_STATUS_DEPRECATED_4" | "FC_STATUS_INT_ISOACTIVE" | "FC_STATUS_EXT_ISOACTIVE" | "FC_STATUS_POST_OUT_OF_SERVICE" | "FC_STATUS_NOTCOMPATIBLE" | "FC_STATUS_MALFUNCTION" | "FC_STATUS_NODATA";
    FC_adapterLocked: number;
    FC_minCurrentLimit: number;
    FC_type: "FC_TYPE_SUPERCHARGER" | "FC_TYPE_CHADEMO" | "FC_TYPE_GB" | "FC_TYPE_CC_EVSE" | "FC_TYPE_COMBO" | "FC_TYPE_MC_EVSE" | "FC_TYPE_OTHER" | "FC_TYPE_SNA";
    FC_dcCurrent: number;
    FC_postID: "FC_POST_MASTER" | "FC_POST_SLAVE" | "FC_POST_ID_2" | "FC_POST_ID_SNA";
    FC_dcVoltage: number;
    FC_leakageTestNotSupported: number;
};

export type ID215FCisolation = {
    FCIsolation215: number;
};

export type ID217FC_status3_0 = {
    FC_status3DataSelect: "Mux0";
    FC_class: "FC_CLASS_SNA" | "FC_CLASS_SUPERCHARGER" | "FC_CLASS_URBANCHARGER";
    FC_brand: "FC_BRAND_SNA" | "FC_BRAND_TESLA";
    FC_coolingType: "FC_COOLING_TYPE_SNA" | "FC_COOLING_TYPE_LIQUID" | "FC_COOLING_TYPE_CONVECTION";
    FC_uiStopType: "FC_UI_STOP_TYPE_SNA" | "FC_UI_STOP_TYPE_TOGGLE" | "FC_UI_STOP_TYPE_MOMENTARY";
    FC_generation: "GENERATION_SNA";
};

export type ID217FC_status3_1 = {
    FC_status3DataSelect: "Mux1";
    FC_billingEnergy: number;
};

export type ID217FC_status3 = ID217FC_status3_0 | ID217FC_status3_1;

export type ID321VCFRONT_sensors = {
    VCFRONT_tempCoolantBatInlet: "SNA";
    VCFRONT_tempCoolantPTInlet: "SNA";
    VCFRONT_coolantLevel: "NOT_OK" | "FILLED";
    VCFRONT_brakeFluidLevel: "SNA" | "LOW" | "NORMAL";
    VCFRONT_tempAmbient: "SNA";
    VCFRONT_washerFluidLevel: "SNA" | "LOW" | "NORMAL";
    VCFRONT_tempAmbientFiltered: "SNA";
    VCFRONT_battSensorIrrational: number;
    VCFRONT_ptSensorIrrational: number;
};

export type ID301VCFRONT_info_0 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_0";
};

export type ID301VCFRONT_info_1 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_1";
};

export type ID301VCFRONT_info_2 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_2";
};

export type ID301VCFRONT_info_3 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_3";
};

export type ID301VCFRONT_info_4 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_4";
};

export type ID301VCFRONT_info_5 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_5";
};

export type ID301VCFRONT_info_6 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_6";
};

export type ID301VCFRONT_info_7 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_7";
};

export type ID301VCFRONT_info_8 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_8";
};

export type ID301VCFRONT_info_9 = {
    VCFRONT_infoIndex: "BC_INFO_DEPRECATED_9";
};

export type ID301VCFRONT_info_10 = {
    VCFRONT_infoIndex: "BC_INFO_BUILD_HWID_COMPONENTID";
    VCFRONT_infoBuildType: "INFO_UNKNOWN_BUILD" | "INFO_PLATFORM_BUILD" | "INFO_LOCAL_BUILD" | "INFO_TRACEABLE_CI_BUILD" | "INFO_MFG_BUILD";
    VCFRONT_infoBuildConfigId: number;
    VCFRONT_infoHardwareId: number;
    VCFRONT_infoComponentId: number;
};

export type ID301VCFRONT_info_11 = {
    VCFRONT_infoIndex: "BC_INFO_PCBAID_ASSYID_USAGEID";
    VCFRONT_infoPcbaId: number;
    VCFRONT_infoAssemblyId: "ASSEMBLY1" | "ASSEMBLY_SNA";
    VCFRONT_infoUsageId: number;
    VCFRONT_infoSubUsageId: number;
};

export type ID301VCFRONT_info_13 = {
    VCFRONT_infoIndex: "BC_INFO_APP_CRC";
    VCFRONT_infoAppCrc: number;
};

export type ID301VCFRONT_info_14 = {
    VCFRONT_infoIndex: "BC_INFO_BOOTLOADER_SVN";
};

export type ID301VCFRONT_info_15 = {
    VCFRONT_infoIndex: "BC_INFO_BOOTLOADER_CRC";
};

export type ID301VCFRONT_info_16 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT1";
    VCFRONT_hcmlAppCRC: number;
};

export type ID301VCFRONT_info_17 = {
    VCFRONT_infoIndex: "BC_INFO_APP_GITHASH";
    VCFRONT_infoAppGitHash: number;
};

export type ID301VCFRONT_info_18 = {
    VCFRONT_infoIndex: "BC_INFO_BOOTLOADER_GITHASH";
    VCFRONT_infoBootGitHash: number;
};

export type ID301VCFRONT_info_19 = {
    VCFRONT_infoIndex: "BC_INFO_VERSION_DEPRECATED";
    VCFRONT_infoPlatformType: number;
};

export type ID301VCFRONT_info_20 = {
    VCFRONT_infoIndex: "BC_INFO_UDS_PROTOCOL_BOOTCRC";
    VCFRONT_infoBootUdsProtoVersion: number;
    VCFRONT_infoBootCrc: number;
};

export type ID301VCFRONT_info_23 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT2";
    VCFRONT_hcmrAppCRC: number;
};

export type ID301VCFRONT_info_24 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT3";
    VCFRONT_infoSubcomponent3: number;
};

export type ID301VCFRONT_info_31 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT4";
    VCFRONT_infoSubcomponent4: number;
};

export type ID301VCFRONT_info_32 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT5";
    VCFRONT_infoSubcomponent5: number;
};

export type ID301VCFRONT_info_33 = {
    VCFRONT_infoIndex: "BC_INFO_SUBCOMPONENT6";
    VCFRONT_infoSubcomponent6: number;
};

export type ID301VCFRONT_info_255 = {
    VCFRONT_infoIndex: "BC_INFO_END";
};

export type ID301VCFRONT_info = ID301VCFRONT_info_0 | ID301VCFRONT_info_1 | ID301VCFRONT_info_2 | ID301VCFRONT_info_3 | ID301VCFRONT_info_4 | ID301VCFRONT_info_5 | ID301VCFRONT_info_6 | ID301VCFRONT_info_7 | ID301VCFRONT_info_8 | ID301VCFRONT_info_9 | ID301VCFRONT_info_10 | ID301VCFRONT_info_11 | ID301VCFRONT_info_13 | ID301VCFRONT_info_14 | ID301VCFRONT_info_15 | ID301VCFRONT_info_16 | ID301VCFRONT_info_17 | ID301VCFRONT_info_18 | ID301VCFRONT_info_19 | ID301VCFRONT_info_20 | ID301VCFRONT_info_23 | ID301VCFRONT_info_24 | ID301VCFRONT_info_31 | ID301VCFRONT_info_32 | ID301VCFRONT_info_33 | ID301VCFRONT_info_255;

export type ID201VCFRONT_loggingAndVitals10Hz_0 = {
    VCFRONT_loggingAndVitals10HzInde: "TARGETS_AND_ACTUALS_0";
    VCFRONT_pumpBatteryRPMActual: "SNA";
    VCFRONT_pumpPowertrainRPMActual: "SNA";
    VCFRONT_radiatorFanRPMActual: "SNA";
    VCFRONT_tempSuperheatActual: "SNA";
    VCFRONT_tempSuperheatTarget: number;
    VCFRONT_exvFlowTarget: number;
};

export type ID201VCFRONT_loggingAndVitals10Hz_1 = {
    VCFRONT_loggingAndVitals10HzInde: "TARGETS_SENSORS_AND_ACTUALS_1";
    VCFRONT_activeLouverOpenPosTarg: number;
    VCFRONT_activeLouverOpenPos: number;
    VCFRONT_tempRefrigLiquid: "SNA";
    VCFRONT_pressureRefrigLiquid: "SNA";
    VCFRONT_tempSuperheatActFiltered: number;
};

export type ID201VCFRONT_loggingAndVitals10Hz_2 = {
    VCFRONT_loggingAndVitals10HzInde: "STATES_AND_SENSORS";
    VCFRONT_tempRefrigDischarge: "SNA";
    VCFRONT_fanDemand: number;
    VCFRONT_compressorState: "STANDBY" | "READY" | "RUNNING" | "FAULT";
    VCFRONT_compDemandEvap: number;
    VCFRONT_exvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_solenoidEvapState: "UNDEFINED" | "OPENED" | "CLOSED" | "FAULTED";
    VCFRONT_compDemandChiller: number;
    VCFRONT_pressureRefrigSuctionVit: "SNA";
    VCFRONT_pressureRefrigDischargeV: "SNA";
    VCFRONT_coolantValveMode: "SERIES" | "PARALLEL" | "BLEND" | "AMBIENT_SOURCE";
};

export type ID201VCFRONT_loggingAndVitals10Hz_3 = {
    VCFRONT_loggingAndVitals10HzInde: "EXV_FLOW";
    VCFRONT_chillerExvFlow: number;
    VCFRONT_evapExvFlow: number;
    VCFRONT_recircExvFlow: number;
    VCFRONT_lccExvFlow: number;
    VCFRONT_cclExvFlow: number;
    VCFRONT_ccrExvFlow: number;
};

export type ID201VCFRONT_loggingAndVitals10Hz_4 = {
    VCFRONT_loggingAndVitals10HzInde: "HP_STATE";
    VCFRONT_hpHighSideHX: "NONE" | "LCC" | "CC" | "BOTH";
    VCFRONT_hpLowSideHX: "NONE" | "CHILLER" | "EVAP" | "BOTH";
    VCFRONT_hpDominantLoad: "NONE" | "EVAP" | "CHILLER" | "LOW_BOTH" | "LCC" | "CC" | "HIGH_BOTH";
    VCFRONT_hpBlendType: "HP_NONE" | "HP_PARTIAL" | "HP_FULL";
    VCFRONT_hpQuietModeEnabled: number;
    VCFRONT_hpCabinLoadType: "NONE" | "CC" | "REHEAT" | "EVAP";
    VCFRONT_hpBatteryLoadType: "NONE" | "BATT_HEAT" | "BATT_COOL";
    VCFRONT_hpReqCoolantMode: "ANY" | "SERIES_NO_BYPASS" | "SERIES_BYPASS" | "PARALLEL" | "AMBIENT_SOURCE";
};

export type ID201VCFRONT_loggingAndVitals10Hz_5 = {
    VCFRONT_loggingAndVitals10HzInde: "EXV_FLOW_TARGET";
    VCFRONT_chillerExvFlowTarget: number;
    VCFRONT_evapExvFlowTarget: number;
    VCFRONT_recircExvFlowTarget: number;
    VCFRONT_lccExvFlowTarget: number;
    VCFRONT_cclExvFlowTarget: number;
    VCFRONT_ccrExvFlowTarget: number;
};

export type ID201VCFRONT_loggingAndVitals10Hz_6 = {
    VCFRONT_loggingAndVitals10HzInde: "EXV_STATE";
    VCFRONT_chillerExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_evapExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_recircExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_lccExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_cclExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
    VCFRONT_ccrExvState: "UNINIT" | "INIT_OPEN" | "INIT_CLOSE" | "READY" | "FAULTED" | "WAIT" | "OVERDRIVING_SHUT" | "READY_SHUT" | "CALIB_CLOSE" | "CALIB_CLOSE_OVERDRIVE";
};

export type ID201VCFRONT_loggingAndVitals10Hz_7 = {
    VCFRONT_loggingAndVitals10HzInde: "END";
};

export type ID201VCFRONT_loggingAndVitals10Hz = ID201VCFRONT_loggingAndVitals10Hz_0 | ID201VCFRONT_loggingAndVitals10Hz_1 | ID201VCFRONT_loggingAndVitals10Hz_2 | ID201VCFRONT_loggingAndVitals10Hz_3 | ID201VCFRONT_loggingAndVitals10Hz_4 | ID201VCFRONT_loggingAndVitals10Hz_5 | ID201VCFRONT_loggingAndVitals10Hz_6 | ID201VCFRONT_loggingAndVitals10Hz_7;

export type ID3D8Elevation = {
    Elevation3D8: number;
};

export type ID261_12vBattStatus_0 = {
    VCFRONT_12VBatteryStatusIndex: 0;
    VCFRONT_voltageProfile: "CHARGE" | "FLOAT" | "REDUCED_FLOAT" | "ALWAYS_CLOSED_CONTACTORS";
    VCFRONT_12VOverchargeCounter: number;
    VCFRONT_voltageDropCounter: number;
    VCFRONT_isVehicleSupported: number;
    VCFRONT_shortedCellFaultCounter: number;
    v12vBattCurrent261: number;
    VCFRONT_silentWakeIBSCurrent: number;
    VCFRONT_firstChargeOTA: number;
    VCFRONT_firstChargePOR: number;
    VCFRONT_voltageFloorReachedCount: number;
};

export type ID261_12vBattStatus_1 = {
    VCFRONT_12VBatteryStatusIndex: 1;
    VCFRONT_IBSFault: number;
    VCFRONT_batterySupportRequest: number;
    VCFRONT_batterySMState: "INIT" | "CHARGE" | "DISCHARGE" | "STANDBY" | "RESISTANCE_ESTIMATION" | "OTA_STANDBY" | "DISCONNECTED_BATTERY_TEST" | "SHORTED_CELL_TEST" | "FAULT" | "RECOVERY";
    VCFRONT_targetCurrent: number;
    VCFRONT_IBSCurrent: number;
    v12vBattVoltage261: number;
    VCFRONT_PCSMia: number;
    VCFRONT_chargeNeeded: number;
    VCFRONT_reverseBatteryFault: number;
    VCFRONT_LVBatterySupported: number;
    VCFRONT_LVBatteryDisconnected: number;
};

export type ID261_12vBattStatus_2 = {
    VCFRONT_12VBatteryStatusIndex: 2;
    v12vBattAH261: number;
    v12vBattTemp261: number;
    VCFRONT_12VBatteryTargetVoltage: number;
};

export type ID261_12vBattStatus = ID261_12vBattStatus_0 | ID261_12vBattStatus_1 | ID261_12vBattStatus_2;

export type ID129SteeringAngle = {
    SteeringAngle129: number;
    SteeringSpeed129: number;
    SteeringSensorA129: number;
    SteeringSensorB129: number;
    SteeringSensorC129: number;
};

export type ID264ChargeLineStatus = {
    ChargeLineVoltage264: number;
    ChargeLineCurrent264: number;
    ChargeLinePower264: number;
    ChargeLineCurrentLimit264: number;
};

export type ID224PCSDCDCstatus = {
    DCDCPrechargeStatus224: number;
    DCDC12VSupportStatus224: number;
    DCDCHvBusDischargeStatus224: number;
    DCDCstate224: "Idle" | "12vChg" | "PrechargeStart" | "Precharge" | "HVactive" | "Shutdown" | "Error";
    DCDCSubState224: "PWR_UP_INIT" | "STANDBY" | "12V_SUPPORT_ACTIVE" | "DIS_HVBUS" | "PCHG_FAST_DIS_HVBUS" | "PCHG_SLOW_DIS_HVBUS" | "PCHG_DWELL_CHARGE" | "PCHG_DWELL_WAIT" | "PCHG_DI_RECOVERY_WAIT" | "PCHG_ACTIVE" | "PCHG_FLT_FAST_DIS_HVBUS" | "SHUTDOWN" | "12V_SUPPORT_FAULTED" | "DIS_HVBUS_FAULTED" | "PCHG_FAULTED" | "CLEAR_FAULTS" | "FAULTED" | "NUM";
    DCDCFaulted224: number;
    DCDCoutputCurrent224: number;
    DCDCOutputIsLimited224: number;
    DCDCoutputCurrentMax224: number;
    DCDCPrechargeRtyCnt224: number;
    DCDC12VSupportRtyCnt224: number;
    DCDCDischargeRtyCnt224: number;
    DCDCPwmEnableLine224: number;
    DCDCSupportingFixedLvTarget224: number;
    PCS_ecuLogUploadRequest224: number;
    DCDCPrechargeRestartCnt224: number;
    DCDCInitialPrechargeSubState224: number;
};

export type ID227CMP_state = {
    CMP_speedRPM: number;
    CMP_speedDuty: number;
    CMP_inverterTemperature: number;
    CMP_HVOverVoltage: number;
    CMP_HVUnderVoltage: number;
    CMP_overTemperature: number;
    CMP_underTemperature: number;
    CMP_VCFRONTCANTimeout: number;
    CMP_overCurrent: number;
    CMP_currentSensorCal: number;
    CMP_failedStart: number;
    CMP_motorVoltageSat: number;
    CMP_shortCircuit: number;
    CMP_repeatOverCurrent: number;
    CMP_state: "CMP_STATE_NONE" | "CMP_STATE_NORMAL" | "CMP_STATE_WAIT" | "CMP_STATE_FAULT" | "CMP_STATE_SOFT_START" | "CMP_STATE_SOFT_SHUTDOWN" | "CMP_STATE_SNA";
    CMP_ready: number;
};

export type ID118DriveSystemStatus = {
    DI_systemStatusChecksum: number;
    DI_systemStatusCounter: number;
    DI_driveBlocked: "DRIVE_BLOCKED_NONE" | "DRIVE_BLOCKED_FRUNK" | "DRIVE_BLOCKED_PROX";
    DI_systemState: "DI_SYS_UNAVAILABLE" | "DI_SYS_IDLE" | "DI_SYS_STANDBY" | "DI_SYS_FAULT" | "DI_SYS_ABORT" | "DI_SYS_ENABLE";
    DI_brakePedalState: "OFF" | "ON" | "INVALID";
    DI_gear: "DI_GEAR_INVALID" | "DI_GEAR_P" | "DI_GEAR_R" | "DI_GEAR_N" | "DI_GEAR_D" | "DI_GEAR_SNA";
    DI_regenLight: number;
    DI_immobilizerState: "DI_IMM_STATE_INIT_SNA" | "DI_IMM_STATE_REQUEST" | "DI_IMM_STATE_AUTHENTICATING" | "DI_IMM_STATE_DISARMED" | "DI_IMM_STATE_IDLE" | "DI_IMM_STATE_RESET" | "DI_IMM_STATE_FAULT";
    DI_accelPedalPos: "SNA";
    DI_tractionControlMode: "Standard" | "Slip Start" | "Dev1" | "Dev2" | "Rolls Mode" | "Dyno Mode" | "Offroad Assist";
    DI_epbRequest: "DI_EPBREQUEST_NO_REQUEST" | "DI_EPBREQUEST_PARK" | "DI_EPBREQUEST_UNPARK";
    DI_proximity: number;
    DI_keepDrivePowerStateRequest: "NO_REQUEST" | "KEEP_ALIVE";
    DI_trackModeState: "TRACK_MODE_UNAVAILABLE" | "TRACK_MODE_AVAILABLE" | "TRACK_MODE_ON";
};

export type ID352BMS_energyStatus = {
    BMS_nominalFullPackEnergy: "SNA";
    BMS_nominalEnergyRemaining: "SNA";
    BMS_expectedEnergyRemaining: "SNA";
    BMS_idealEnergyRemaining: "SNA";
    BMS_energyToChargeComplete: "SNA";
    BMS_energyBuffer: "SNA";
    BMS_fullChargeComplete: number;
};

export type ID37DCP_thermalStatus = {
    CP_dcPinTemperature: number;
    CP_acPinTemperature: number;
    CP_dTdt_dcPinActual: number;
    CP_dcPinTemperatureModeled: number;
    CP_dTdt_dcPinExpected: number;
};

export type ID392BMS_packConfig_0 = {
    BMS_packConfigMultiplexer: "Mux0";
    BMS_reservedConfig_0: "BMS_CONFIG_0" | "BMS_CONFIG_1" | "BMS_CONFIG_2" | "BMS_CONFIG_3" | "BMS_CONFIG_4" | "BMS_CONFIG_5" | "BMS_CONFIG_6" | "BMS_CONFIG_7" | "BMS_CONFIG_8" | "BMS_CONFIG_9" | "BMS_CONFIG_10" | "BMS_CONFIG_11" | "BMS_CONFIG_12" | "BMS_CONFIG_13" | "BMS_CONFIG_14" | "BMS_CONFIG_15" | "BMS_CONFIG_16" | "BMS_CONFIG_17" | "BMS_CONFIG_18" | "BMS_CONFIG_19" | "BMS_CONFIG_20" | "BMS_CONFIG_21" | "BMS_CONFIG_22" | "BMS_CONFIG_23" | "BMS_CONFIG_24" | "BMS_CONFIG_25" | "BMS_CONFIG_26" | "BMS_CONFIG_27" | "BMS_CONFIG_28" | "BMS_CONFIG_29" | "BMS_CONFIG_30" | "BMS_CONFIG_31";
};

export type ID392BMS_packConfig_1 = {
    BMS_packConfigMultiplexer: "Mux1";
    BMS_moduleType: "UNKNOWN" | "E3_NCT" | "E1_NCT" | "E3_CT" | "E1_CT" | "E1_CP";
    BMS_packMass: number;
    BMS_platformMaxBusVoltage: number;
};

export type ID392BMS_packConfig = ID392BMS_packConfig_0 | ID392BMS_packConfig_1;

export type ID252BMS_powerAvailable = {
    BMS_maxRegenPower: number;
    BMS_maxDischargePower: number;
    BMS_maxStationaryHeatPower: number;
    BMS_notEnoughPowerForHeatPump: number;
    BMS_powerLimitsState: "POWER_NOT_CALCULATED_FOR_DRIVE" | "POWER_CALCULATED_FOR_DRIVE";
    BMS_hvacPowerBudget: number;
};

export type ID312BMSthermal = {
    BMSdissipation312: number;
    BMSflowRequest312: number;
    BMSinletActiveCoolTarget312: number;
    BMSinletPassiveTarget312: number;
    BMSinletActiveHeatTarget312: number;
    BMSminPackTemperature: number;
    BMSmaxPackTemperature: number;
    BMSpcsNoFlowRequest312: number;
    BMSnoFlowRequest312: number;
};

export type ID292BMS_SOC = {
    SOCmin292: number;
    SOCUI292: number;
    SOCmax292: number;
    SOCave292: number;
    BattBeginningOfLifeEnergy292: "SNA";
    BMS_battTempPct: "SNA";
};

export type ID257DIspeed = {
    DI_speedChecksum: number;
    DI_speedCounter: number;
    DI_vehicleSpeed: "SNA";
    DI_uiSpeed: "DI_UI_SPEED_SNA";
    DI_uiSpeedUnits: "DI_SPEED_MPH" | "DI_SPEED_KPH";
    DI_uiSpeedHighSpeed: "DI_UI_HIGH_SPEED_SNA";
};

export type ID2A8CMPD_state = {
    CMPD_speedRPM: number;
    CMPD_speedDuty: number;
    CMPD_inputHVPower: number;
    CMPD_inputHVCurrent: number;
    CMPD_inputHVVoltage: number;
    CMPD_powerLimitActive: number;
    CMPD_state: "CMPD_STATE_INIT" | "CMPD_STATE_RUNNING" | "CMPD_STATE_STANDBY" | "CMPD_STATE_FAULT" | "CMPD_STATE_IDLE" | "CMPD_STATE_SNA";
    CMPD_wasteHeatState: "CMPD_WASTE_HEAT_STATE_OFF" | "CMPD_WASTE_HEAT_STATE_ACTIVE" | "CMPD_WASTE_HEAT_STATE_NOT_AVAILABLE" | "CMPD_WASTE_HEAT_STATE_UNUSED";
    CMPD_powerLimitTooLowToStart: number;
    CMPD_ready: number;
};

export type ID405VIN_16 = {
    mux405: 16;
    VINA405: number;
};

export type ID405VIN_17 = {
    mux405: 17;
    VINB405: number;
};

export type ID405VIN_18 = {
    mux405: 18;
    VINC405: number;
};

export type ID405VIN = ID405VIN_16 | ID405VIN_17 | ID405VIN_18;

export type ID51EFC_info_10 = {
    FC_infoIndex: 10;
    FC_infoBuildType: number;
    FC_infoBuildConfigID: number;
    FC_infoHardwareID: number;
    FC_infoComponentID: number;
};

export type ID51EFC_info_11 = {
    FC_infoIndex: 11;
    FC_infoPcbaID: number;
    FC_infoAssemblyID: number;
    FC_infoUsageID: number;
    FC_infoSubUsageID: number;
};

export type ID51EFC_info_13 = {
    FC_infoIndex: 13;
    FC_infoApplicationCRC: number;
};

export type ID51EFC_info_14 = {
    FC_infoIndex: 14;
    FC_infoBootSvnRev: number;
};

export type ID51EFC_info_15 = {
    FC_infoIndex: 15;
    FC_infoBootCRC: number;
};

export type ID51EFC_info_16 = {
    FC_infoIndex: 16;
    FC_infoCPLDVersionMajor: number;
    FC_infoCPLDVersionMinor: number;
};

export type ID51EFC_info_17 = {
    FC_infoIndex: 17;
    FC_infoAppGitHashBytes: number;
};

export type ID51EFC_info_18 = {
    FC_infoIndex: 18;
    FC_infoBootGitHashBytes: number;
};

export type ID51EFC_info_19 = {
    FC_infoIndex: 19;
    FC_infoPlatformType: number;
    FC_infoMajorVersion: number;
    FC_infoBranchOrigin: number;
    FC_infoMaturity: number;
    FC_infoHardwareRevision: number;
};

export type ID51EFC_info_20 = {
    FC_infoIndex: 20;
    FC_infoBootUdsProtoVersion: number;
};

export type ID51EFC_info_22 = {
    FC_infoIndex: 22;
    FC_infoVariantCRC: number;
};

export type ID51EFC_info_25 = {
    FC_infoIndex: 25;
    FC_partNumChar01: number;
    FC_partNumChar02: number;
    FC_partNumChar03: number;
    FC_partNumChar04: number;
    FC_partNumChar05: number;
    FC_partNumChar06: number;
    FC_partNumChar07: number;
};

export type ID51EFC_info_26 = {
    FC_infoIndex: 26;
    FC_partNumChar08: number;
    FC_partNumChar09: number;
    FC_partNumChar10: number;
    FC_partNumChar11: number;
    FC_partNumChar12: number;
    FC_partNumChar13: number;
    FC_partNumChar14: number;
};

export type ID51EFC_info_27 = {
    FC_infoIndex: 27;
    FC_partNumChar15: number;
    FC_partNumChar16: number;
    FC_partNumChar17: number;
    FC_partNumChar18: number;
    FC_partNumChar19: number;
    FC_partNumChar20: number;
};

export type ID51EFC_info = ID51EFC_info_10 | ID51EFC_info_11 | ID51EFC_info_13 | ID51EFC_info_14 | ID51EFC_info_15 | ID51EFC_info_16 | ID51EFC_info_17 | ID51EFC_info_18 | ID51EFC_info_19 | ID51EFC_info_20 | ID51EFC_info_22 | ID51EFC_info_25 | ID51EFC_info_26 | ID51EFC_info_27;

export type ID376FrontInverterTemps = {
    TempInvPCB376: number;
    TempInverter376: number;
    TempStator376: number;
    TempInvCapbank376: number;
    TempInvHeatsink376: number;
    TempPctInverter376: number;
    TempPctStator376: number;
    DIF_inverterTQF: "INVERTERT_INIT" | "INVERTERT_IRRATIONAL" | "INVERTERT_RATIONAL" | "INVERTERT_UNKNOWN";
};

export type ID315RearInverterTemps = {
    RearTempInvPCB315: number;
    RearTempInverter315: number;
    RearTempStator315: number;
    RearTempInvCapbank315: number;
    RearTempInvHeatsink315: number;
    RearTempPctInverter315: number;
    RearTempPctStator315: number;
    DIR_inverterTQF: "INVERTERT_INIT" | "INVERTERT_IRRATIONAL" | "INVERTERT_RATIONAL" | "INVERTERT_UNKNOWN";
};

export type ID154RearTorqueOld = {
    RAWTorqueRear154: number;
};

export type ID3B6odometer = {
    Odometer3B6: "SNA";
};

export type ID266RearInverterPower = {
    RearPower266: number;
    RearHeatPowerOptimal266: number;
    RearHeatPowerMax266: number;
    RearHeatPower266: number;
    RearExcessHeatCmd: number;
    RearPowerLimit266: number;
};

export type ID2E5FrontInverterPower = {
    FrontPower2E5: number;
    FrontHeatPowerOptimal2E5: number;
    FrontHeatPowerMax2E5: number;
    FrontHeatPower2E5: number;
    FrontExcessHeatCmd: number;
    FrontPowerLimit2E5: number;
};

export type ID2E6PlaidFrontPower = {
    PFrontPower: number;
    PFrontHeatPowerOptimal: number;
    PFrontHeatPowerMax: number;
    PFrontHeatPower: number;
    PFrontExcessHeatCmd: number;
    PFrontPowerLimit: number;
};

export type ID269LeftRearPower = {
    LeftRearPower: number;
    LeftRearHeatPowerOptimal: number;
    LeftRearPowerMax: number;
    LeftRearHeatPower: number;
    LeftRearExcessHeatCmd: number;
    LeftRearPowerLimit: number;
};

export type ID27CRightRearPower = {
    RightRearPower: number;
    RightRearHeatPowerOptimal: number;
    RightRearHeatPowerMax: number;
    RightRearHeatPower: number;
    RightRearExcessHeatCmd: number;
    RightRearPowerLimit: number;
};

export type ID108DIR_torque = {
    DIR_torqueChecksum: number;
    DIR_torqueCounter: number;
    DIR_torqueCommand: "SNA";
    DIR_axleSpeedQF: number;
    DIR_torqueActual: "SNA";
    DIR_axleSpeed: "SNA";
    DIR_slavePedalPos: "SNA";
};

export type ID132HVBattAmpVolt = {
    BattVoltage132: number;
    SmoothBattCurrent132: number;
    RawBattCurrent132: number;
    ChargeHoursRemaining132: number;
};

export type ID126RearHVStatus = {
    RearHighVoltage126: number;
    DIR_vBatQF: "NOT_QUALIFIED" | "QUALIFIED";
    RearMotorCurrent126: number;
    DIR_dcCableCurrentEst: number;
    DIR_switchingFrequency: number;
    DIR_targetFluxMode: number;
};

export type ID1A5FrontHVStatus = {
    FrontHighVoltage1A5: number;
    DIF_vBatQF: "NOT_QUALIFIED" | "QUALIFIED";
    FrontMotorCurrent1A5: number;
    DIF_dcCableCurrentEst: number;
    DIF_switchingFrequency: number;
    DIF_targetFluxMode: number;
};

export type ID127LeftRearHVStatus = {
    LeftRear_vBat: number;
    LeftRear_vBatQF: number;
    LeftRear_motorCurrent: number;
    LeftRear_dcCableCurrentEst: number;
    LeftRear_switchingFrequency: number;
    LeftRear_targetFluxMode: number;
};

export type ID12ARightRearHVStatus = {
    RightRear_vBat: number;
    RightRear_vBatQF: number;
    RightRear_motorCurrent: number;
    RightRear_dcCableCurrentEst: number;
    RightRear_switchingFrequency: number;
    RightRear_targetFluxMode: number;
};

export type ID31FTPMSsensors = {
    TPMSFLpressure31F: number;
    TPMSFLtemp31F: number;
    TPMSFRpressure31F: number;
    TPMSFRtemp31F: number;
    TPMSRLpressure31F: number;
    TPMSRLtemp31F: number;
    TPMSRRpressure31F: number;
    TPMSRRtemp31F: number;
};

export type ID3FEbrakeTemps = {
    BrakeTempFL3FE: number;
    BrakeTempFR3FE: number;
    BrakeTempRL3FE: number;
    BrakeTempRR3FE: number;
};

export type ID228EPBrightStatus = {
    EPBRunitStatus228: "DriveReleased" | "ParkEngaged" | "Engaging" | "Disengaging";
    EPBRunitFaultStatus228: number;
    EPBRsummonState228: number;
    EPBRdisconnected228: number;
    EPBRlockoutUnlockCount228: number;
    EPBResmCaliperRequest228: "idle" | "engaging" | "disengaging";
    EPBRcsmFaultReason228: number;
    EPBResmOperationTrigger228: "ParkEngaged" | "Released" | "SuperPark";
    EPBRsummonFaultReason228: number;
    EPBRlocalServiceModeActive228: number;
    EPBR12VFilt228: number;
    EPBRCDPQualified228: number;
    EPBRinternalCDPRequest228: number;
    EPBRinternalStatusCounter228: number;
    EPBRinternalStatusChecksum228: number;
};

export type ID288EPBleftStatus = {
    EPBLunitStatus288: "DriveReleased" | "ParkEngaged" | "Engaging" | "Disengaging";
    EPBLunitFaultStatus288: number;
    EPBLsummonState288: number;
    EPBLdisconnected288: number;
    EPBLlockoutUnlockCount288: number;
    EPBLesmCaliperRequest288: "idle" | "engaging" | "disengaging";
    EPBLcsmFaultReason288: number;
    EPBLesmOperationTrigger288: "ParkEngaged" | "Released" | "SuperPark";
    EPBLsummonFaultReason288: number;
    EPBLlocalServiceModeActive288: number;
    EPBL12VFilt288: number;
    EPBLCDPQualified288: number;
    EPBLinternalCDPRequest288: number;
    EPBLinternalStatusCounter288: number;
    EPBLinternalStatusChecksum288: number;
};

export type ID72ABMS_serialNumber_0 = {
    BMS_serialNumberMultiplexer: 0;
    BMS_packSerialNumberByte01: number;
    BMS_packSerialNumberByte02: number;
    BMS_packSerialNumberByte03: number;
    BMS_packSerialNumberByte04: number;
    BMS_packSerialNumberByte05: number;
    BMS_packSerialNumberByte06: number;
    BMS_packSerialNumberByte07: number;
};

export type ID72ABMS_serialNumber_1 = {
    BMS_serialNumberMultiplexer: 1;
    BMS_packSerialNumberByte08: number;
    BMS_packSerialNumberByte09: number;
    BMS_packSerialNumberByte10: number;
    BMS_packSerialNumberByte11: number;
    BMS_packSerialNumberByte12: number;
    BMS_packSerialNumberByte13: number;
    BMS_packSerialNumberByte14: number;
};

export type ID72ABMS_serialNumber = ID72ABMS_serialNumber_0 | ID72ABMS_serialNumber_1;

export type ID7FFcarConfig_1 = {
    GTW_carConfigMultiplexer: 1;
    GTW_deliveryStatus: "NOT_DELIVERED" | "DELIVERED";
    GTW_epasType: "MANDO_VGR69_GEN3";
    GTW_drivetrainType: "RWD" | "AWD";
    GTW_rightHandDrive: "LEFT" | "RIGHT";
    GTW_rearLightType: "NA" | "EU_CN" | "GLOBAL";
    GTW_headlamps: "BASE" | "PREMIUM";
    GTW_country: number;
    GTW_tireType: "UNKNOWN" | "MICHELIN_ALL_SEASON_18" | "MICHELIN_SUMMER_18" | "HANKOOK_SUMMER_19" | "CONTI_ALL_SEASON_19" | "MICHELIN_SUMMER_20" | "GOODYEAR_ALL_SEASON_20" | "PIRELLI_SUMMER_21" | "MICHELIN_ALL_SEASON_21";
    GTW_dasHw: "PARKER_PASCAL_2_5" | "TESLA_AP3";
    GTW_restraintsHardwareType: "NA_M3" | "EUROW_ECALL_M3" | "EUROW_NO_ECALL_M3" | "NA_MY_OLD" | "NA_MY" | "EUROW_ECALL_MY" | "EUROW_NO_ECALL_MY";
};

export type ID7FFcarConfig_2 = {
    GTW_carConfigMultiplexer: 2;
    GTW_frontSeatHeaters: "NONE" | "KONGSBERG_LOW_POWER";
    GTW_rearSeatHeaters: "NONE" | "KONGSBERG_LOW_POWER";
    GTW_tpmsType: "CONTI_2" | "TESLA_BLE";
    GTW_homelinkType: "NONE" | "HOMELINK_V_OPT_2";
    GTW_vdcType: "BOSCH_VDC" | "TESLA_VDC";
    GTW_xcpIbst: "FALSE" | "TRUE";
    GTW_xcpESP: "FALSE" | "TRUE";
    GTW_memoryMirrors: "NOT_INSTALLED" | "SMR";
    GTW_powerSteeringColumn: "NOT_INSTALLED" | "TK";
    GTW_frontFogLamps: "NOT_INSTALLED" | "INSTALLED";
    GTW_lumbarECUType: "NONE" | "ALFMEIER";
    GTW_auxParkLamps: "NA_BASE" | "NA_PREMIUM" | "EU" | "NONE";
    GTW_hvacPanelVaneType: "PARALLEL_V1" | "CONVERGENT_V1";
    GTW_cabinPTCHeaterType: "BORGWARNER" | "NONE";
    GTW_eBuckConfig: "NONE" | "DEV_BUCK";
    GTW_windshieldType: "SEKISUI_ACOUSTIC" | "EASTMAN_ACOUSTIC";
    GTW_activeHighBeam: "NOT_ACTIVE" | "ACTIVE";
    GTW_airbagCutoffSwitch: "CUTOFF_SWITCH_DISABLED" | "CUTOFF_SWITCH_ENABLED";
    GTW_intrusionSensorType: "NOT_INSTALLED" | "VODAFONE";
    GTW_spoilerType: "NOT_INSTALLED" | "PASSIVE";
    GTW_rearGlassType: "NX" | "TSA5_NOPET";
    GTW_rearFogLamps: "NOT_INSTALLED" | "INSTALLED";
    GTW_roofType: "METAL" | "FIXED_GLASS" | "PANORAMIC";
    GTW_autopilot: "NONE" | "HIGHWAY" | "ENHANCED" | "SELF_DRIVING" | "BASIC";
    GTW_superchargingAccess: "NOT_ALLOWED" | "ALLOWED" | "PAY_AS_YOU_GO";
    GTW_exteriorColor: "RED_MULTICOAT" | "SOLID_BLACK" | "SILVER_METALLIC" | "MIDNIGHT_SILVER" | "DEEP_BLUE" | "PEARL_WHITE";
    GTW_numberHVILNodes: "HVIL_NODES_0" | "HVIL_NODES_1" | "HVIL_NODES_2" | "HVIL_NODES_3" | "HVIL_NODES_4" | "HVIL_NODES_5";
    GTW_pedestrianWarningSound: "NONE" | "SPEAKER";
    GTW_steeringColumnUJointType: "B_SAMPLE_PHASING" | "C_SAMPLE_PHASING";
    GTW_bPillarNFCParam: "MODEL_3" | "MODEL_Y";
    GTW_interiorLighting: "BASE" | "PREMIUM" | "PREMIUM_NO_POCKET_LIGHT";
    GTW_brakeHWType: "BREMBO_P42_MANDO_43MOC" | "BREMBO_LARGE_P42_BREMBO_44MOC" | "BREMBO_LARGE_P42_MANDO_43MOC" | "BREMBO_LARGE_P42_BREMBO_LARGE_44MOC";
    GTW_roofGlassType: "TSA3_PET" | "TSA5_NOPET";
};

export type ID7FFcarConfig_3 = {
    GTW_carConfigMultiplexer: 3;
    GTW_mapRegion: "US" | "EU" | "NONE" | "CN" | "AU" | "JP" | "TW" | "KR" | "ME" | "HK" | "MO";
    GTW_performancePackage: "BASE" | "PERFORMANCE" | "LUDICROUS" | "BASE_PLUS" | "BASE_PLUS_AWD";
    GTW_towPackage: "NONE" | "TESLA_REV1";
    GTW_coolantPumpType: "DUAL" | "SINGLE_PUMP_BATT";
    GTW_chassisType: "MODEL_S_CHASSIS" | "MODEL_X_CHASSIS" | "MODEL_3_CHASSIS" | "MODEL_Y_CHASSIS";
    GTW_airSuspension: "NONE" | "TESLA_STANDARD" | "TESLA_ADAPTIVE";
    GTW_passengerOccupancySensorType: "OCS" | "RESISTIVE_PAD";
    GTW_autopilotCameraType: "RCCB_CAMERAS";
    GTW_connectivityPackage: "BASE" | "PREMIUM";
    GTW_plcSupportType: "NONE" | "ONBOARD_ADAPTER" | "NATIVE_CHARGE_PORT";
    GTW_audioType: "BASE" | "PREMIUM" | "BASE_WITH_PREMIUM200";
    GTW_packEnergy: "PACK_50_KWH" | "PACK_74_KWH" | "PACK_62_KWH" | "PACK_100_KWH" | "PACK_75_KWH";
    GTW_frontSeatReclinerHardware: "STANDARD_RANGE" | "RIGHT_SEAT_REDUCED_RANGE" | "LEFT_SEAT_REDUCED_RANGE" | "LEFT_RIGHT_SEAT_REDUCED_RANGE";
    GTW_brakeLineSwitchType: "DI_VC_SHARED" | "VC_ONLY";
    GTW_espValveType: "UNKNOWN" | "VALVE_TYPE_1" | "VALVE_TYPE_2";
    GTW_softRange: "STANDARD" | "RANGE_220_MILES" | "RANGE_93_MILES";
    GTW_refrigerantType: "Default" | "R134A" | "R1234YF";
    GTW_headlightLevelerType: "NONE" | "GEN1";
    GTW_wheelType: "PINWHEEL_18" | "STILETTO_19" | "STILETTO_20" | "STILETTO_20_DARK_STAGGERED" | "GEMINI_19_SQUARE" | "GEMINI_19_STAGGERED" | "STILETTO_20_DARK_SQUARE" | "INDUCTION_20_BLACK" | "UBERTURBINE_21_BLACK" | "APOLLO_19_SILVER" | "PINWHEEL_18_CAP_KIT" | "ZEROG_20_GUNPOWDER" | "APOLLO_19_SILVER_CAP_KIT";
    GTW_radarHeaterType: "NONE" | "BECKER_THIN_3M";
    GTW_immersiveAudio: "DISABLED" | "BASE" | "PREMIUM";
    GTW_frontSeatType: "BASE_TESLA" | "PREMIUM_TESLA" | "PREMIUM_L_YANFENG_R_TESLA" | "PREMIUM_L_TESLA_R_YANFENG" | "PREMIUM_YANFENG";
    GTW_twelveVBatteryType: "ATLASBX_B24_FLOODED" | "CLARIOS_B24_FLOODED";
};

export type ID7FFcarConfig_4 = {
    GTW_carConfigMultiplexer: 4;
    GTW_birthday: number;
    GTW_eCallEnabled: "DISABLED" | "ENABLED_OHC_SOS" | "ENABLED_UI_SOS";
    GTW_passengerAirbagType: "FULL_SUPPRESSION" | "SAFETY_VENT" | "EUROW";
    GTW_compressorType: "HANON_33CC" | "DENSO_41CC_8K" | "DENSO_41CC_11K";
    GTW_efficiencyPackage: "DEFAULT" | "M3_SR_PLUS_2020" | "M3_LR_2020" | "M3_LR_PERFORMANCE_2020";
    GTW_steeringColumnMotorType: "BOSCH" | "JE";
};

export type ID7FFcarConfig = ID7FFcarConfig_1 | ID7FFcarConfig_2 | ID7FFcarConfig_3 | ID7FFcarConfig_4;

export type ID332BattBrickMinMax_0 = {
    BattBrickMultiplexer332: 0;
    BattBrickempMaxNum332: number;
    BattBrickTempMinNum332: number;
    BattBrickTempMax332: number;
    BattBrickTempMin332: number;
    BattBrickModelTMax332: number;
    BattBrickModelTMin332: number;
};

export type ID332BattBrickMinMax_1 = {
    BattBrickMultiplexer332: 1;
    BattBrickVoltageMax332: number;
    BattBrickVoltageMin332: number;
    BattBrickVoltageMaxNum332: number;
    BattBrickVoltageMinNum332: number;
};

export type ID332BattBrickMinMax = ID332BattBrickMinMax_0 | ID332BattBrickMinMax_1;

export type ID401BrickVoltages_0 = {
    MultiplexSelector: 0;
    Brick0: number;
    Brick1: number;
    Brick2: number;
};

export type ID401BrickVoltages_1 = {
    MultiplexSelector: 1;
    Brick3: number;
    Brick4: number;
    Brick5: number;
};

export type ID401BrickVoltages_2 = {
    MultiplexSelector: 2;
    Brick6: number;
    Brick7: number;
    Brick8: number;
};

export type ID401BrickVoltages_3 = {
    MultiplexSelector: 3;
    Brick9: number;
    Brick10: number;
    Brick11: number;
};

export type ID401BrickVoltages_4 = {
    MultiplexSelector: 4;
    Brick12: number;
    Brick13: number;
    Brick14: number;
};

export type ID401BrickVoltages_5 = {
    MultiplexSelector: 5;
    Brick15: number;
    Brick16: number;
    Brick17: number;
};

export type ID401BrickVoltages_6 = {
    MultiplexSelector: 6;
    Brick18: number;
    Brick19: number;
    Brick20: number;
};

export type ID401BrickVoltages_7 = {
    MultiplexSelector: 7;
    Brick21: number;
    Brick22: number;
    Brick23: number;
};

export type ID401BrickVoltages_8 = {
    MultiplexSelector: 8;
    Brick24: number;
    Brick25: number;
    Brick26: number;
};

export type ID401BrickVoltages_9 = {
    MultiplexSelector: 9;
    Brick27: number;
    Brick28: number;
    Brick29: number;
};

export type ID401BrickVoltages_10 = {
    MultiplexSelector: 10;
    Brick30: number;
    Brick31: number;
    Brick32: number;
};

export type ID401BrickVoltages_11 = {
    MultiplexSelector: 11;
    Brick34: number;
    Brick33: number;
    Brick35: number;
};

export type ID401BrickVoltages_12 = {
    MultiplexSelector: 12;
    Brick36: number;
    Brick37: number;
    Brick38: number;
};

export type ID401BrickVoltages_13 = {
    MultiplexSelector: 13;
    Brick39: number;
    Brick40: number;
    Brick41: number;
};

export type ID401BrickVoltages_14 = {
    MultiplexSelector: 14;
    Brick42: number;
    Brick43: number;
    Brick44: number;
};

export type ID401BrickVoltages_15 = {
    MultiplexSelector: 15;
    Brick45: number;
    Brick46: number;
    Brick47: number;
};

export type ID401BrickVoltages_16 = {
    MultiplexSelector: 16;
    Brick48: number;
    Brick49: number;
    Brick50: number;
};

export type ID401BrickVoltages_17 = {
    MultiplexSelector: 17;
    Brick51: number;
    Brick52: number;
    Brick53: number;
};

export type ID401BrickVoltages_18 = {
    MultiplexSelector: 18;
    Brick54: number;
    Brick55: number;
    Brick56: number;
};

export type ID401BrickVoltages_19 = {
    MultiplexSelector: 19;
    Brick57: number;
    Brick58: number;
    Brick59: number;
};

export type ID401BrickVoltages_20 = {
    MultiplexSelector: 20;
    Brick60: number;
    Brick61: number;
    Brick62: number;
};

export type ID401BrickVoltages_21 = {
    MultiplexSelector: 21;
    Brick63: number;
    Brick64: number;
    Brick65: number;
};

export type ID401BrickVoltages_22 = {
    MultiplexSelector: 22;
    Brick66: number;
    Brick67: number;
    Brick68: number;
};

export type ID401BrickVoltages_23 = {
    MultiplexSelector: 23;
    Brick69: number;
    Brick70: number;
    Brick71: number;
};

export type ID401BrickVoltages_24 = {
    MultiplexSelector: 24;
    Brick72: number;
    Brick73: number;
    Brick74: number;
};

export type ID401BrickVoltages_25 = {
    MultiplexSelector: 25;
    Brick75: number;
    Brick76: number;
    Brick77: number;
};

export type ID401BrickVoltages_26 = {
    MultiplexSelector: 26;
    Brick78: number;
    Brick79: number;
    Brick80: number;
};

export type ID401BrickVoltages_27 = {
    MultiplexSelector: 27;
    Brick81: number;
    Brick82: number;
    Brick83: number;
};

export type ID401BrickVoltages_28 = {
    MultiplexSelector: 28;
    Brick84: number;
    Brick85: number;
    Brick86: number;
};

export type ID401BrickVoltages_29 = {
    MultiplexSelector: 29;
    Brick87: number;
    Brick88: number;
    Brick89: number;
};

export type ID401BrickVoltages_30 = {
    MultiplexSelector: 30;
    Brick90: number;
    Brick91: number;
    Brick92: number;
};

export type ID401BrickVoltages_31 = {
    MultiplexSelector: 31;
    Brick93: number;
    Brick94: number;
    Brick95: number;
};

export type ID401BrickVoltages_32 = {
    MultiplexSelector: 32;
    Brick96: number;
    Brick97: number;
    Brick98: number;
};

export type ID401BrickVoltages_33 = {
    MultiplexSelector: 33;
    Brick99: number;
    Brick100: number;
    Brick101: number;
};

export type ID401BrickVoltages_34 = {
    MultiplexSelector: 34;
    Brick102: number;
    Brick103: number;
    Brick104: number;
};

export type ID401BrickVoltages_35 = {
    MultiplexSelector: 35;
    Brick105: number;
    Brick106: number;
    Brick107: number;
};

export type ID401BrickVoltages_36 = {
    MultiplexSelector: 36;
    Brick108: number;
    Brick109: number;
    Brick110: number;
};

export type ID401BrickVoltages = ID401BrickVoltages_0 | ID401BrickVoltages_1 | ID401BrickVoltages_2 | ID401BrickVoltages_3 | ID401BrickVoltages_4 | ID401BrickVoltages_5 | ID401BrickVoltages_6 | ID401BrickVoltages_7 | ID401BrickVoltages_8 | ID401BrickVoltages_9 | ID401BrickVoltages_10 | ID401BrickVoltages_11 | ID401BrickVoltages_12 | ID401BrickVoltages_13 | ID401BrickVoltages_14 | ID401BrickVoltages_15 | ID401BrickVoltages_16 | ID401BrickVoltages_17 | ID401BrickVoltages_18 | ID401BrickVoltages_19 | ID401BrickVoltages_20 | ID401BrickVoltages_21 | ID401BrickVoltages_22 | ID401BrickVoltages_23 | ID401BrickVoltages_24 | ID401BrickVoltages_25 | ID401BrickVoltages_26 | ID401BrickVoltages_27 | ID401BrickVoltages_28 | ID401BrickVoltages_29 | ID401BrickVoltages_30 | ID401BrickVoltages_31 | ID401BrickVoltages_32 | ID401BrickVoltages_33 | ID401BrickVoltages_34 | ID401BrickVoltages_35 | ID401BrickVoltages_36;

export type ID4F3SeatControl = {
    frontLeftSeatTrackForward: number;
    frontLeftSeatTrackBackward: number;
};

export type MessagesByName = {
    ID00CUI_status: ID00CUI_status;
    ID353UI_status: ID353UI_status;
    ID016DI_bmsRequest: ID016DI_bmsRequest;
    ID082UI_tripPlanning: ID082UI_tripPlanning;
    ID101RCM_inertial1: ID101RCM_inertial1;
    ID111RCM_inertial2: ID111RCM_inertial2;
    RCM_inertial2New: RCM_inertial2New;
    ID102VCLEFT_doorStatus: ID102VCLEFT_doorStatus;
    ID103VCRIGHT_doorStatus: ID103VCRIGHT_doorStatus;
    ID113GTW_bmpDebug: ID113GTW_bmpDebug;
    ID119VCSEC_windowRequests: ID119VCSEC_windowRequests;
    ID122VCLEFT_doorStatus2: ID122VCLEFT_doorStatus2;
    ID123UI_alertMatrix1: ID123UI_alertMatrix1;
    ID142VCLEFT_liftgateStatus: ID142VCLEFT_liftgateStatus;
    ID145ESP_status: ID145ESP_status;
    ID1D6DI_limits: ID1D6DI_limits;
    ID20AHVP_contactorState: ID20AHVP_contactorState;
    ID20EPARK_sdiFront: ID20EPARK_sdiFront;
    ID219VCSEC_TPMSData: ID219VCSEC_TPMSData;
    ID204PCS_chgStatus: ID204PCS_chgStatus;
    ID22AHVP_pcsControl: ID22AHVP_pcsControl;
    ID232BMS_contactorRequest: ID232BMS_contactorRequest;
    ID273UI_vehicleControl: ID273UI_vehicleControl;
    ID27DCP_dcChargeLimits: ID27DCP_dcChargeLimits;
    ID2BDCP_dcPowerLimits: ID2BDCP_dcPowerLimits;
    ID42AVCSEC_TPMSConnectionData: ID42AVCSEC_TPMSConnectionData;
    ID22EPARK_sdiRear: ID22EPARK_sdiRear;
    ID238UI_driverAssistMapData: ID238UI_driverAssistMapData;
    ID239DAS_lanes: ID239DAS_lanes;
    ID24ADAS_visualDebug: ID24ADAS_visualDebug;
    ID25BAPP_environment: ID25BAPP_environment;
    ID25DCP_status: ID25DCP_status;
    ID29DCP_dcChargeStatus: ID29DCP_dcChargeStatus;
    ID2B4PCS_dcdcRailStatus: ID2B4PCS_dcdcRailStatus;
    ID2B9DAS_control: ID2B9DAS_control;
    ID2D3UI_solarData: ID2D3UI_solarData;
    ID309DAS_object: ID309DAS_object;
    ID389DAS_status2: ID389DAS_status2;
    ID399DAS_status: ID399DAS_status;
    ID39DIBST_status: ID39DIBST_status;
    ID3A1VCFRONT_vehicleStatus: ID3A1VCFRONT_vehicleStatus;
    ID3D9UI_gpsVehicleSpeed: ID3D9UI_gpsVehicleSpeed;
    ID3E2VCLEFT_lightStatus: ID3E2VCLEFT_lightStatus;
    ID3E9DAS_bodyControls: ID3E9DAS_bodyControls;
    ID3F3UI_odo: ID3F3UI_odo;
    ID3F5VCFRONT_lighting: ID3F5VCFRONT_lighting;
    ID3F8UI_driverAssistControl: ID3F8UI_driverAssistControl;
    ID3FDUI_autopilotControl: ID3FDUI_autopilotControl;
    ID267DI_vehicleEstimates: ID267DI_vehicleEstimates;
    ID282VCLEFT_hvacBlowerFeedback: ID282VCLEFT_hvacBlowerFeedback;
    ID2F3UI_hvacRequest: ID2F3UI_hvacRequest;
    ID313UI_trackModeSettings: ID313UI_trackModeSettings;
    ID335RearDIinfo: ID335RearDIinfo;
    ID383VCRIGHT_thsStatus: ID383VCRIGHT_thsStatus;
    ID3B3UI_vehicleControl2: ID3B3UI_vehicleControl2;
    ID3C3VCRIGHT_switchStatus: ID3C3VCRIGHT_switchStatus;
    ID3E3VCRIGHT_lightStatus: ID3E3VCRIGHT_lightStatus;
    ID656FrontDIinfo: ID656FrontDIinfo;
    ID300BMS_info: ID300BMS_info;
    ID212BMS_status: ID212BMS_status;
    ID31CCC_chgStatus: ID31CCC_chgStatus;
    ID23DCP_chargeStatus: ID23DCP_chargeStatus;
    ID13DCP_chargeStatus: ID13DCP_chargeStatus;
    ID43DCP_chargeStatusLog: ID43DCP_chargeStatusLog;
    ID21DCP_evseStatus: ID21DCP_evseStatus;
    ID743VCRIGHT_recallStatus: ID743VCRIGHT_recallStatus;
    ID75DCP_sensorData: ID75DCP_sensorData;
    ID287PTCcabinHeatSensorStatus: ID287PTCcabinHeatSensorStatus;
    ID333UI_chargeRequest: ID333UI_chargeRequest;
    ID334UI_powertrainControl: ID334UI_powertrainControl;
    ID33AUI_rangeSOC: ID33AUI_rangeSOC;
    ID241VCFRONT_coolant: ID241VCFRONT_coolant;
    ID3BBUI_power: ID3BBUI_power;
    ID5D5RearDItemps: ID5D5RearDItemps;
    ID556FrontDItemps: ID556FrontDItemps;
    ID557FrontThermalControl: ID557FrontThermalControl;
    ID5D7RearThermalControl: ID5D7RearThermalControl;
    ID7D5DIR_debug: ID7D5DIR_debug;
    ID757DIF_debug: ID757DIF_debug;
    ID2B6DI_chassisControlStatus: ID2B6DI_chassisControlStatus;
    ID284UIvehicleModes: ID284UIvehicleModes;
    ID221VCFRONT_LVPowerState: ID221VCFRONT_LVPowerState;
    ID225VCRIGHT_LVPowerState: ID225VCRIGHT_LVPowerState;
    ID2F1VCFRONT_eFuseDebugStatus: ID2F1VCFRONT_eFuseDebugStatus;
    ID242VCLEFT_LVPowerState: ID242VCLEFT_LVPowerState;
    ID243VCRIGHT_hvacStatus: ID243VCRIGHT_hvacStatus;
    ID20CVCRIGHT_hvacRequest: ID20CVCRIGHT_hvacRequest;
    ID2E1VCFRONT_status: ID2E1VCFRONT_status;
    ID381VCFRONT_logging1Hz: ID381VCFRONT_logging1Hz;
    ID318SystemTimeUTC: ID318SystemTimeUTC;
    ID528UnixTime: ID528UnixTime;
    ID229GearLever: ID229GearLever;
    ID249SCCMLeftStalk: ID249SCCMLeftStalk;
    ID186DIF_torque: ID186DIF_torque;
    ID396FrontOilPump: ID396FrontOilPump;
    ID395DIR_oilPump: ID395DIR_oilPump;
    ID1D8RearTorque: ID1D8RearTorque;
    ID155WheelAngles: ID155WheelAngles;
    ID175WheelSpeed: ID175WheelSpeed;
    ID185ESP_brakeTorque: ID185ESP_brakeTorque;
    ID1D4FrontTorqueOld: ID1D4FrontTorqueOld;
    ID1D5FrontTorque: ID1D5FrontTorque;
    ID281VCFRONT_CMPRequest: ID281VCFRONT_CMPRequest;
    ID3C2VCLEFT_switchStatus: ID3C2VCLEFT_switchStatus;
    ID336MaxPowerRating: ID336MaxPowerRating;
    ID293UI_chassisControl: ID293UI_chassisControl;
    ID268SystemPower: ID268SystemPower;
    ID04FGPSLatLong: ID04FGPSLatLong;
    ID3D2TotalChargeDischarge: ID3D2TotalChargeDischarge;
    ID3F2BMSCounters: ID3F2BMSCounters;
    ID2D2BMSVAlimits: ID2D2BMSVAlimits;
    ID541FastChargeMaxLimits: ID541FastChargeMaxLimits;
    ID244FastChargeLimits: ID244FastChargeLimits;
    ID214FastChargeVA: ID214FastChargeVA;
    ID215FCisolation: ID215FCisolation;
    ID217FC_status3: ID217FC_status3;
    ID321VCFRONT_sensors: ID321VCFRONT_sensors;
    ID301VCFRONT_info: ID301VCFRONT_info;
    ID201VCFRONT_loggingAndVitals10Hz: ID201VCFRONT_loggingAndVitals10Hz;
    ID3D8Elevation: ID3D8Elevation;
    ID261_12vBattStatus: ID261_12vBattStatus;
    ID129SteeringAngle: ID129SteeringAngle;
    ID264ChargeLineStatus: ID264ChargeLineStatus;
    ID224PCSDCDCstatus: ID224PCSDCDCstatus;
    ID227CMP_state: ID227CMP_state;
    ID118DriveSystemStatus: ID118DriveSystemStatus;
    ID352BMS_energyStatus: ID352BMS_energyStatus;
    ID37DCP_thermalStatus: ID37DCP_thermalStatus;
    ID392BMS_packConfig: ID392BMS_packConfig;
    ID252BMS_powerAvailable: ID252BMS_powerAvailable;
    ID312BMSthermal: ID312BMSthermal;
    ID292BMS_SOC: ID292BMS_SOC;
    ID257DIspeed: ID257DIspeed;
    ID2A8CMPD_state: ID2A8CMPD_state;
    ID405VIN: ID405VIN;
    ID51EFC_info: ID51EFC_info;
    ID376FrontInverterTemps: ID376FrontInverterTemps;
    ID315RearInverterTemps: ID315RearInverterTemps;
    ID154RearTorqueOld: ID154RearTorqueOld;
    ID3B6odometer: ID3B6odometer;
    ID266RearInverterPower: ID266RearInverterPower;
    ID2E5FrontInverterPower: ID2E5FrontInverterPower;
    ID2E6PlaidFrontPower: ID2E6PlaidFrontPower;
    ID269LeftRearPower: ID269LeftRearPower;
    ID27CRightRearPower: ID27CRightRearPower;
    ID108DIR_torque: ID108DIR_torque;
    ID132HVBattAmpVolt: ID132HVBattAmpVolt;
    ID126RearHVStatus: ID126RearHVStatus;
    ID1A5FrontHVStatus: ID1A5FrontHVStatus;
    ID127LeftRearHVStatus: ID127LeftRearHVStatus;
    ID12ARightRearHVStatus: ID12ARightRearHVStatus;
    ID31FTPMSsensors: ID31FTPMSsensors;
    ID3FEbrakeTemps: ID3FEbrakeTemps;
    ID228EPBrightStatus: ID228EPBrightStatus;
    ID288EPBleftStatus: ID288EPBleftStatus;
    ID72ABMS_serialNumber: ID72ABMS_serialNumber;
    ID7FFcarConfig: ID7FFcarConfig;
    ID332BattBrickMinMax: ID332BattBrickMinMax;
    ID401BrickVoltages: ID401BrickVoltages;
    ID4F3SeatControl: ID4F3SeatControl;
};

export type MessagesById = {
    12: ID00CUI_status;
    851: ID353UI_status;
    22: ID016DI_bmsRequest;
    130: ID082UI_tripPlanning;
    257: ID101RCM_inertial1;
    273: ID111RCM_inertial2;
    278: RCM_inertial2New;
    258: ID102VCLEFT_doorStatus;
    259: ID103VCRIGHT_doorStatus;
    275: ID113GTW_bmpDebug;
    281: ID119VCSEC_windowRequests;
    290: ID122VCLEFT_doorStatus2;
    291: ID123UI_alertMatrix1;
    322: ID142VCLEFT_liftgateStatus;
    325: ID145ESP_status;
    470: ID1D6DI_limits;
    522: ID20AHVP_contactorState;
    526: ID20EPARK_sdiFront;
    537: ID219VCSEC_TPMSData;
    516: ID204PCS_chgStatus;
    554: ID22AHVP_pcsControl;
    562: ID232BMS_contactorRequest;
    627: ID273UI_vehicleControl;
    637: ID27DCP_dcChargeLimits;
    701: ID2BDCP_dcPowerLimits;
    1066: ID42AVCSEC_TPMSConnectionData;
    558: ID22EPARK_sdiRear;
    568: ID238UI_driverAssistMapData;
    569: ID239DAS_lanes;
    586: ID24ADAS_visualDebug;
    603: ID25BAPP_environment;
    605: ID25DCP_status;
    669: ID29DCP_dcChargeStatus;
    692: ID2B4PCS_dcdcRailStatus;
    697: ID2B9DAS_control;
    723: ID2D3UI_solarData;
    777: ID309DAS_object;
    905: ID389DAS_status2;
    921: ID399DAS_status;
    925: ID39DIBST_status;
    929: ID3A1VCFRONT_vehicleStatus;
    985: ID3D9UI_gpsVehicleSpeed;
    994: ID3E2VCLEFT_lightStatus;
    1001: ID3E9DAS_bodyControls;
    1011: ID3F3UI_odo;
    1013: ID3F5VCFRONT_lighting;
    1016: ID3F8UI_driverAssistControl;
    1021: ID3FDUI_autopilotControl;
    615: ID267DI_vehicleEstimates;
    642: ID282VCLEFT_hvacBlowerFeedback;
    755: ID2F3UI_hvacRequest;
    787: ID313UI_trackModeSettings;
    821: ID335RearDIinfo;
    899: ID383VCRIGHT_thsStatus;
    947: ID3B3UI_vehicleControl2;
    963: ID3C3VCRIGHT_switchStatus;
    995: ID3E3VCRIGHT_lightStatus;
    1622: ID656FrontDIinfo;
    768: ID300BMS_info;
    530: ID212BMS_status;
    796: ID31CCC_chgStatus;
    573: ID23DCP_chargeStatus;
    317: ID13DCP_chargeStatus;
    1085: ID43DCP_chargeStatusLog;
    541: ID21DCP_evseStatus;
    1859: ID743VCRIGHT_recallStatus;
    1885: ID75DCP_sensorData;
    647: ID287PTCcabinHeatSensorStatus;
    819: ID333UI_chargeRequest;
    820: ID334UI_powertrainControl;
    826: ID33AUI_rangeSOC;
    577: ID241VCFRONT_coolant;
    955: ID3BBUI_power;
    1493: ID5D5RearDItemps;
    1366: ID556FrontDItemps;
    1367: ID557FrontThermalControl;
    1495: ID5D7RearThermalControl;
    2005: ID7D5DIR_debug;
    1879: ID757DIF_debug;
    694: ID2B6DI_chassisControlStatus;
    644: ID284UIvehicleModes;
    545: ID221VCFRONT_LVPowerState;
    549: ID225VCRIGHT_LVPowerState;
    753: ID2F1VCFRONT_eFuseDebugStatus;
    578: ID242VCLEFT_LVPowerState;
    579: ID243VCRIGHT_hvacStatus;
    524: ID20CVCRIGHT_hvacRequest;
    737: ID2E1VCFRONT_status;
    897: ID381VCFRONT_logging1Hz;
    792: ID318SystemTimeUTC;
    1320: ID528UnixTime;
    553: ID229GearLever;
    585: ID249SCCMLeftStalk;
    390: ID186DIF_torque;
    918: ID396FrontOilPump;
    917: ID395DIR_oilPump;
    472: ID1D8RearTorque;
    341: ID155WheelAngles;
    373: ID175WheelSpeed;
    389: ID185ESP_brakeTorque;
    468: ID1D4FrontTorqueOld;
    469: ID1D5FrontTorque;
    641: ID281VCFRONT_CMPRequest;
    962: ID3C2VCLEFT_switchStatus;
    822: ID336MaxPowerRating;
    659: ID293UI_chassisControl;
    616: ID268SystemPower;
    79: ID04FGPSLatLong;
    978: ID3D2TotalChargeDischarge;
    1010: ID3F2BMSCounters;
    722: ID2D2BMSVAlimits;
    1345: ID541FastChargeMaxLimits;
    580: ID244FastChargeLimits;
    532: ID214FastChargeVA;
    533: ID215FCisolation;
    535: ID217FC_status3;
    801: ID321VCFRONT_sensors;
    769: ID301VCFRONT_info;
    513: ID201VCFRONT_loggingAndVitals10Hz;
    984: ID3D8Elevation;
    609: ID261_12vBattStatus;
    297: ID129SteeringAngle;
    612: ID264ChargeLineStatus;
    548: ID224PCSDCDCstatus;
    551: ID227CMP_state;
    280: ID118DriveSystemStatus;
    850: ID352BMS_energyStatus;
    893: ID37DCP_thermalStatus;
    914: ID392BMS_packConfig;
    594: ID252BMS_powerAvailable;
    786: ID312BMSthermal;
    658: ID292BMS_SOC;
    599: ID257DIspeed;
    680: ID2A8CMPD_state;
    1029: ID405VIN;
    1310: ID51EFC_info;
    886: ID376FrontInverterTemps;
    789: ID315RearInverterTemps;
    340: ID154RearTorqueOld;
    950: ID3B6odometer;
    614: ID266RearInverterPower;
    741: ID2E5FrontInverterPower;
    742: ID2E6PlaidFrontPower;
    617: ID269LeftRearPower;
    636: ID27CRightRearPower;
    264: ID108DIR_torque;
    306: ID132HVBattAmpVolt;
    294: ID126RearHVStatus;
    421: ID1A5FrontHVStatus;
    295: ID127LeftRearHVStatus;
    298: ID12ARightRearHVStatus;
    799: ID31FTPMSsensors;
    1022: ID3FEbrakeTemps;
    552: ID228EPBrightStatus;
    648: ID288EPBleftStatus;
    1834: ID72ABMS_serialNumber;
    2047: ID7FFcarConfig;
    818: ID332BattBrickMinMax;
    1025: ID401BrickVoltages;
    1267: ID4F3SeatControl;
};

export type DatabaseType = {
    ByName: MessagesByName;
    ById: MessagesById;
};