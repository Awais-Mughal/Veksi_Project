import { Component } from './Component.js';
import type { Trace } from './Trace.js';
import { SlaveTerminalGroup } from './SlaveGroup.js';
import { type PortConnection, PortSlave, type PortName } from './Port.js';
import type { ConfigDetails, SlaveAddrs, SR_Slave, Slave_ProcessData, Slave_ProcessDataObject, Slave_ProcessDataObjectEntry } from './ServerRespondDef.js';
import { type OnlineEntry } from './DOMUtility.js';
import type { XY } from './Vector.js';
import type { StatusButton } from './WebComponents/StatusButton/StatusButton.js';
import type { ComponentDesign } from './Appearance.js';
import type { MatrixCoordinates } from './Drawing.js';
export declare class Slave extends Component {
    constructor(srSlaveData: SR_Slave, trace: Trace, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, parentSubSlaves: Slave[]);
    /**
     * Shorten a string but try to keep important information
     * @param type
     */
    static getShortSlaveType(type: string): string;
    protected __trace: Trace;
    get trace(): Trace;
    get topology(): import("./Topology.js").Topology;
    get network(): import("./Network.js").Network;
    get master(): import("./Master.js").Master;
    private __subSlaves;
    get subSlaves(): Slave[];
    get numOfSubSlaves(): number;
    private __slaveTerminalGroup;
    get slaveTerminalGroup(): SlaveTerminalGroup | null;
    private __expansion;
    get expansion(): boolean;
    set expansion(value: boolean);
    toggleExpansion(): void;
    private __specialTerminals;
    private __initPorts;
    protected __pos: {
        slave: XY | null;
        traceXOffset: number;
        trace: XY | null;
        networkTraceXOffset: number;
        network: XY;
    };
    set networkPos(value: XY);
    get networkPos(): XY;
    get pos(): {
        slave: XY | null;
        traceXOffset: number;
        trace: XY | null;
        networkTraceXOffset: number;
        network: XY;
    };
    get coordinates(): {
        col: number;
        row: import("./Drawing.js").MatrixRow;
    } | null;
    get syncUnitIds(): number[];
    private __data;
    get data(): SlaveData;
    get name(): string;
    get addr(): number;
    get autoIncAddr(): number;
    private __processDataSubscription;
    readProcessDataValues(updateForcedState?: boolean): void;
    hasProcessDataObjects(): boolean | undefined;
    __processDataValuesSubscriptionCounter: number;
    subscribeToProcessDataValues(): void;
    unsubscribeProcessValueSubscription(): void;
    private __removeProcessDataValues;
    private __hasForcedProcessData;
    set hasForcedProcessData(value: boolean);
    get hasForcedProcessData(): boolean;
    couplerGroupHasForcedProcessData(): boolean;
    setProcessDataValues(values: {
        io: string;
        objectIndex: string;
        entryIndex: string;
        entrySubIndex: string;
        entryValue: any;
    }[], cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
    forceProcessDataValues(values: {
        io: string;
        objectIndex: string;
        entryIndex: string;
        entrySubIndex: string;
        entryValue: any;
    }[], cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
    releaseProcessDataValues(values: {
        io: keyof Slave_ProcessData;
        objectIndex: string;
        entryIndex: string;
        entrySubIndex: string;
    }[], cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
    getProcessDataObjects(io: keyof Slave_ProcessData): Slave_ProcessDataObject[] | undefined;
    getProcessDataObject(objects: Slave_ProcessDataObject[], index: string): Slave_ProcessDataObject | null;
    getProcessDataObjectEntry(object: Slave_ProcessDataObject, index: string, subIndex: string): Slave_ProcessDataObjectEntry | null;
    private __processProcessDataValues;
    private __processDataValues;
    getProcessDataValues(pdoType: string, objectIndex: string, entryIndex: string, entrySubIndex: string): any;
    setProcessDataValue(entry: Slave_ProcessDataObjectEntry, value: any, forced: boolean): boolean;
    updateProcessDataValuesOnlineElements(entry: Slave_ProcessDataObjectEntry): boolean;
    addProcessDataValueElement(entry: OnlineEntry<any>, el: HTMLElement): void;
    private __errorMessages;
    get onlineData(): SlaveData_online;
    get processData(): Slave_ProcessData | undefined;
    getStateMachineState(hexString: string): string;
    processScannedIdentity(scannedIdentity: SlaveScannedIdentity | null): void;
    processOnlineChanges(changes: SlaveOnlineChanges | null): void;
    private setScannedIdentityCheck;
    private __addErrorElement;
    private __clearErrorMessages;
    get isPresent(): boolean;
    get isNotPresent(): boolean | null;
    get isDisabled(): boolean | null;
    get hasNotPresentSlavesBefore(): boolean | null;
    get hasInvalidIdentity(): boolean | null;
    get hasInvalidIdentityBefore(): boolean | null;
    get crcSum(): number | null;
    get crcHighestWarningLevel(): number | null;
    protected __design: ComponentDesign;
    private __calculateDesign;
    protected __ports: PortSlave[];
    get ports(): PortSlave[];
    private __electricalCurrent;
    private __dependentSlaves;
    get dependentSlaves(): Slave[] | null;
    set dependentSlaves(slaves: Slave[] | null);
    private __remainingCurrent;
    set remainingCurrent(remainingCurrent: number | null);
    get remainingCurrent(): number | null;
    get electricalCurrent(): number | null;
    set electricalCurrent(electricalCurrent: number | null);
    get identity(): SlaveData_Identity;
    getPortByIndex(index: PortName): PortSlave;
    getPortPhysByIndex(index: PortName): number;
    get staticInfo(): SlaveData_EtherCAT;
    private __visibility;
    get visibility(): boolean;
    set visibility(value: boolean);
    set startCoordinates(coordinates: MatrixCoordinates);
    follow(xOffset: number): void;
    followPorts(xOffset: number): void;
}
export interface SlaveOnlineChanges {
    current?: {
        stateMachine?: number;
        presence?: {
            notPresent?: boolean;
            notPresentOnPrevSlaves?: number;
        };
        identity?: {
            isInvalid?: boolean;
            isInvalidOnPrevSlaves?: number;
        };
        disabled?: boolean;
        initError?: boolean;
        signalsError?: boolean;
    };
    requested?: {
        stateMachine?: number;
    };
    counter?: {
        abnormalChanges: number;
        connectionLosses: number;
    };
    ports?: PortOnlineChanges[];
    syncUnits?: Record<string, SyncUnitOnlineChanges>;
}
export interface PortOnlineChanges {
    current?: {
        unexpectedLink?: boolean;
        missingLink?: boolean;
        linkError?: boolean;
    };
    counter?: {
        crc?: {
            total?: number;
            errorOnPrevPort?: boolean;
        };
    };
}
export interface SyncUnitOnlineChanges {
    frameMissedCounter?: number;
    wcFaultCounter?: number;
    error?: boolean;
}
export interface SlaveData {
    EtherCAT: SlaveData_EtherCAT;
    online: SlaveData_online;
    processData?: Slave_ProcessData;
    scannedIdentity: SlaveScannedIdentity | null;
}
export interface SlaveData_EtherCAT {
    hotConnect: SlaveData_HotConnect;
    identity: SlaveData_Identity;
    syncUnitsAssignment: number[];
}
export interface SlaveData_Identity {
    /** For example { auto_inc: 0, phys: 1001 } */
    addrs: SlaveAddrs;
    /** For example "Term (EL1262)" */
    name: OnlineEntry<string>;
    /** For example "EL1262" */
    type: OnlineEntry<string>;
    vendor: SlaveData_Vendor;
    product: OnlineEntry<number>;
    revision: OnlineEntry<number>;
    serial: OnlineEntry<number>;
}
export interface SlaveData_Vendor {
    /** For example 2 */
    id: OnlineEntry<number>;
    /** For example "Beckhoff Automation GmbH & Co. KG" */
    memberNameLong: OnlineEntry<string>;
    /** For example "Beckhoff" */
    memberNameShort: OnlineEntry<string>;
}
export interface SlaveData_HotConnect {
    isHotConnectHead: boolean;
    isHotConnectSlave: boolean;
    slaveCountActual: number;
    slaveCountConfig: number;
}
export interface SlaveData_online {
    current: {
        stateMachine: {
            code: OnlineEntry<number | null>;
            name: OnlineEntry<string | null>;
        };
        presence: {
            notPresent: OnlineEntry<boolean | null>;
            notPresentOnPrevSlaves: OnlineEntry<boolean | null>;
        };
        identity: {
            isInvalid: OnlineEntry<boolean | null>;
            isInvalidOnPrevSlaves: OnlineEntry<boolean | null>;
        };
        disabled: OnlineEntry<boolean | null>;
        initError: OnlineEntry<boolean | null>;
        signalsError: OnlineEntry<boolean | null>;
    };
    requested: {
        stateMachine: {
            code: OnlineEntry<number | null>;
            name: OnlineEntry<string | null>;
        };
    };
    counter: {
        crc: {
            sum: OnlineEntry<number | null>;
            highestWarningLevel: OnlineEntry<number | null>;
        };
        abnormalChanges: OnlineEntry<number | null>;
        connectionLosses: OnlineEntry<number | null>;
    };
    syncUnits: Map<number, SyncUnitFaultCount>;
    labels: SlaveLabel[];
    messages: OnlineEntry<string | null>;
}
export interface SyncUnitFaultCount {
    error: OnlineEntry<boolean>;
    faultCounter: OnlineEntry<number>;
    framesMissedCount: OnlineEntry<number>;
}
export interface SlaveLabel {
    warningLevel: number;
    text: string;
}
export interface SlavesScannedIdentity {
    config: ConfigDetails;
    updated: string;
    slaves: SlaveScannedIdentity[];
}
export interface SlaveScannedIdentity {
    addr: number;
    productCode: number;
    revisionNumber: number;
    serialNumber: number;
    vendorId: number;
    vendorLabelName: string;
    vendorMemberName: string;
}
