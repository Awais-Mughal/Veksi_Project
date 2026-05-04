import type { Target } from './Target.js';
import type { Slave, SlavesScannedIdentity } from './Slave.js';
import type { PortMaster } from './Port.js';
import type { ExtendedInfoOfMaster, ExtendedInfoOfSlave } from './ExtendedInfo.js';
import { Network } from './Network.js';
import { Component } from './Component.js';
import type { MatrixCoordinates } from './Drawing.js';
import type { XY } from './Vector.js';
import { SyncUnits } from './SyncUnits.js';
import type { Topology } from './Topology.js';
import type { ComponentDesign } from './Appearance.js';
import type { SR_GetSlaves, SR_GetSlavesOnlineInfo, ConfigDetails } from './ServerRespondDef.js';
import { type OnlineEntry } from './DOMUtility.js';
export declare class Master extends Component {
    constructor(target: Target, netId: string, name: string);
    reload(): void;
    resetView(): void;
    getNetIdAndName(): {
        netId: string;
        name: string;
    };
    getTargetAndMasterNetIdAndName(): {
        target: {
            netId: string;
            name: string;
        };
        master: {
            netId: string;
            name: string;
        };
    };
    set startCoordinates(coordinates: MatrixCoordinates);
    get coordinates(): MatrixCoordinates;
    set networkPos(value: XY);
    get networkPos(): XY;
    follow(): void;
    protected __pos: {
        coordinates: MatrixCoordinates;
        network: XY;
    };
    get pos(): {
        coordinates: MatrixCoordinates;
        network: XY;
    };
    private __topology;
    get topology(): Topology | null;
    set topology(value: Topology | null);
    private __network;
    get network(): Network;
    protected __trace: null;
    get trace(): null;
    /** key is the symbol name, value the subscription id */
    private __subscriptions;
    get main(): import("./main.js").EcDiagnostics;
    displayView(): void;
    hideView(): void;
    init_networkView(): void;
    private __deleteOldSlaveSubscriptions;
    private __syncUnits;
    get syncUnits(): SyncUnits;
    private __clearSyncUnits;
    addSlaveToSyncUnit(slave: Slave): void;
    private __selectedSyncUnit;
    set selectedSyncUnit(syncUnitId: number | null);
    get selectedSyncUnit(): number | null;
    private __target;
    get target(): Target;
    get netId(): string;
    private __name;
    get name(): string;
    get master(): this;
    private __data;
    get data(): MasterData;
    private __masterWriteValue;
    private __slaves;
    private __numOfSlaves;
    getSlave(addr: number): Slave | undefined;
    addSlave(slave: Slave): void;
    get slaves(): Map<number, Slave>;
    private __slavesSorted;
    addSortedSlave(slave: Slave): void;
    clearSlaves(): void;
    get numOfSlaves(): number;
    private __slavesScanned;
    get slavesScanned(): SlavesScannedIdentity | null;
    private __slavesScanInProgress;
    get isSlavesScanInProgress(): boolean;
    set slavesScanInProgress(value: boolean);
    private __extendedInfoOfMaster;
    private __extendedInfoOfSlave;
    private __extendedInfoTabName;
    setExtendedInfoTabName(component: keyof typeof this.__extendedInfoTabName, tabName: string): void;
    getExtendedInfoTabName(component: 'Master' | 'Slave'): string | null;
    getExtendedInfoOfMaster(): ExtendedInfoOfMaster | null;
    getExtendedInfoOfSlave(): ExtendedInfoOfSlave | null;
    setExtendedInfoOfMaster(extendedInfo: ExtendedInfoOfMaster): void;
    setExtendedInfoOfSlave(extendedInfo: ExtendedInfoOfSlave): void;
    removeExtendedInfoOfMaster(extendedInfo: ExtendedInfoOfMaster): void;
    removeExtendedInfoOfSlave(extendedInfo: ExtendedInfoOfSlave): void;
    private __netId;
    protected __ports: PortMaster[];
    get ports(): PortMaster[];
    setPort(index: number, port: PortMaster): void;
    checkPresence(): void;
    get isPresent(): boolean;
    checkPortState(): void;
    checkIdentity(): void;
    private __state;
    set state(state: number);
    protected __design: ComponentDesign;
    private __calculateDesign;
    private __subscriptionReadValues;
    private __subscriptionOldReadValues;
    private __removeSubscriptions;
    private __removeSubscription;
    destroy(): void;
    hide(): void;
    __updateSlaves(data?: SR_GetSlaves | null): void;
    updateMasterOnlineInfo(data?: MasterOnlineInfo | null): void;
    updateSlavesScanned(data: false | SlavesScannedIdentity): void;
    private __hasForcedProcessData;
    set hasForcedProcessData(value: boolean);
    get hasForcedProcessData(): boolean;
    configDetailsValid(config: ConfigDetails): boolean;
    forcedProcessDataCbs: Set<(data: number[]) => void>;
    updateSlavesWithForcedProcessData(data: {
        config: ConfigDetails;
        slaves: number[];
    }): void;
    updateSlavesOnlineInfo(data?: SR_GetSlavesOnlineInfo | null): void;
    findScannedSlaveByIdentity(vendor: number, product: number, revision: number, onlyIdentityInvalid?: boolean): Slave | null;
    findSlaveByIdentity(vendor: number, product: number, revision: number, onlyIdentityInvalidOrNotPresent?: boolean): Slave | null;
    findFirstNotPresentSlave(): Slave | null;
    processOnlineChanges(changes: MasterOnlineChanges): void;
}
export interface MasterData {
    online: {
        stateMachine: {
            code: OnlineEntry<number | null>;
            name: OnlineEntry<string | null>;
        };
        stateMachineRequested: {
            code: OnlineEntry<number | null>;
            name: OnlineEntry<string | null>;
        };
        frames: {
            total: {
                cyclic: OnlineEntry<number | null>;
                acyclic: OnlineEntry<number | null>;
            };
            missed: {
                cyclic: OnlineEntry<number | null>;
                acyclic: OnlineEntry<number | null>;
            };
            perSec: {
                cyclic: OnlineEntry<number | null>;
                acyclic: OnlineEntry<number | null>;
            };
            damaged: {
                sent: OnlineEntry<number | null>;
                received: OnlineEntry<number | null>;
            };
        };
    };
}
export interface MasterOnlineInfo {
    config: ConfigDetails;
    frames: {
        total: {
            cyclic: number;
            acyclic: number;
        };
        missed: {
            cyclic: number;
            acyclic: number;
        };
        perSec: {
            cyclic: number;
            acyclic: number;
        };
        damaged: {
            sent: number;
            received: number;
        };
    };
    stateMachine: number;
    stateMachineRequested: number;
}
export interface MasterOnlineChanges {
    config?: ConfigDetails;
    frames?: {
        total?: {
            cyclic?: number;
            acyclic?: number;
        };
        missed?: {
            cyclic?: number;
            acyclic?: number;
        };
        perSec?: {
            cyclic?: number;
            acyclic?: number;
        };
        damaged?: {
            sent?: number;
            received?: number;
        };
    };
    stateMachine?: number;
    stateMachineRequested?: number;
}
