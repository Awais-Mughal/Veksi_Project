import type { PortPhysic } from './Port.js';
import type { ProcessDataOnlineEntry } from './DOMUtility.js';
import type { OptionalBoolInput } from './WebComponents/OptionalBoolInput/OptionalBoolInput.js';
export interface ConfigDetails {
    targetNetId: string;
    masterNetId: string;
}
export interface TimestampValue {
    ts: number;
    value: number;
    forced: boolean;
}
export interface SlaveAddrs {
    /** For example 0 */
    autoInc: number;
    /** For example 1001 */
    phys: number;
}
export interface SelectedDevice {
    targetNetId: string;
    masterNetId: string;
}
export interface SR_Config_Devices {
    [key: string]: SR_Config_Device;
}
export interface SR_Config_Device {
    enabled: boolean;
    targetNetId: string;
    masterNetId: string;
}
export interface SR_GetTarget {
    available: boolean;
    config: {
        masterNetId: string;
    };
    name: string;
    netId: string;
    sysServiceAdsState: number;
}
export interface SR_GetMaster {
    netId: string;
    name: string;
}
export interface SR_GetSlaves {
    config: ConfigDetails;
    slavesCount: number;
    disabledSlaves: SR_Slave[];
    hotConnectGroups: SR_Slave[];
    master: SR_GetSlaves_Master;
}
export interface SR_GetSlaves_Master {
    configuredSlave: SR_Slave;
    portPhysic: PortPhysic;
}
export interface SR_Slave {
    EtherCAT: SR_Slave_EtherCAT;
    hotConnect: SR_Slave_HotConnect;
    ports: [SR_Slave_Port, SR_Slave_Port, SR_Slave_Port, SR_Slave_Port];
    processData?: Slave_ProcessData;
}
export interface SR_Slave_EtherCAT {
    identity: SR_Slave_Identity;
    syncUnitsAssignment: number[];
}
export interface Slave_ProcessData {
    input: Slave_ProcessDataObject[];
    output: Slave_ProcessDataObject[];
}
export interface Slave_ProcessDataObject {
    index: string;
    name: string;
    entries: Slave_ProcessDataObjectEntry[];
    atLeastOneEntryForced?: boolean;
    atLeastOneEntryForcedDomElements?: Set<HTMLElement>;
}
export interface Slave_ProcessDataObjectEntry {
    /**  For example 1 */
    bitLength: number;
    /** For example "#x6000" */
    index: string;
    /** For example "1"*/
    subIndex: string;
    /** For example "Output 1" */
    name: string;
    /** For example "BIT" */
    type: string;
    value?: ProcessDataOnlineEntry<any>;
    showValueAsHex?: boolean;
    preparedValue?: HTMLInputElement | OptionalBoolInput;
    historyValue?: TimestampValue[];
    historyChartUpdateInterval?: number;
    historyChartShowValuesRange?: boolean;
    historyChartsVisible?: Set<HTMLElement>;
}
export interface Slave_ProcessDataValueObjectEntry {
    index: string;
    subIndex: string;
    value: any;
    error?: {
        code?: number;
        message?: string;
        reason?: string;
    };
    forced: boolean;
}
export interface Slave_ProcessDataValueObject {
    entries: Slave_ProcessDataValueObjectEntry[];
    index: string;
}
export interface SR_GetProcessDataValues {
    input: Slave_ProcessDataValueObject[];
    output: Slave_ProcessDataValueObject[];
}
export interface SR_Slave_HotConnect {
    isHotConnectSlave: boolean;
    isHotConnectHead: boolean;
    slaveCountActual: number;
    slaveCountConfig: number;
}
export interface SR_Slave_Identity {
    addrs: SlaveAddrs;
    name: string;
    type: string;
    product: number;
    revision: number;
    serial: number;
    vendor: SR_Slave_Vendor;
}
export interface SR_Slave_Vendor {
    id: number;
    memberNameLong: string;
    memberNameShort: string;
}
export interface SR_Slave_Port {
    physAddr: number;
    autoIncAddr: number;
    physic: PortPhysic;
    configured: boolean;
    configuredSlave?: SR_Slave;
    redundancy?: boolean;
    redundancyPath?: boolean;
}
export interface SR_GetSlavesOnlineInfo {
    config: ConfigDetails;
    slaves: Record<string, SR_SlaveOnlineInfo>;
}
export interface SR_SlaveOnlineInfo {
    counter: {
        abnormalChanges: number;
        connectionLosses: number;
    };
    current: {
        disabled: boolean;
        identity: {
            isInvalid: boolean;
            isInvalidOnPrevSlaves: number;
        };
        initError: boolean;
        presence: {
            notPresent: boolean;
            notPresentOnPrevSlaves: number;
        };
        signalsError: boolean;
        stateMachine: number;
    };
    requested: {
        stateMachine: 0;
    };
    ports: [SR_PortOnlineInfo, SR_PortOnlineInfo, SR_PortOnlineInfo, SR_PortOnlineInfo];
    syncUnits: Record<string, SR_SyncUnitOnlineInfo>;
}
export interface SR_PortOnlineInfo {
    counter: {
        crc: {
            errorOnPrevPort: false;
            total: 0;
        };
    };
    current: {
        linkError: boolean;
        missingLink: boolean;
        unexpectedLink: boolean;
    };
}
export interface SR_SyncUnitOnlineInfo {
    frameMissedCounter: number;
    wcFaultCounter: number;
    error: boolean;
}
