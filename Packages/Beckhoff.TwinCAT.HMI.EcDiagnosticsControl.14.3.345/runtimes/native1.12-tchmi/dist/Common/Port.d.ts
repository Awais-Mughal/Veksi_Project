import type { Master } from './Master.js';
import { Slave } from './Slave.js';
import type { SlaveTerminalGroup } from './SlaveGroup.js';
import type { Trace } from './Trace.js';
import type { SR_Slave, SR_Slave_Port } from './ServerRespondDef.js';
import type { InnerAlignment } from './Drawing.js';
import type { XY } from './Vector.js';
import { NotificationLevel } from './Notifications.js';
import type { Localization } from './Localization.js';
import type { OnlineEntry } from './DOMUtility.js';
export declare class Port {
    constructor(component: Master | Slave, index: 0 | 1 | 2 | 3, data: SR_Slave_Port | PortData, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, subSlaves: Slave[]);
    private __connection;
    get connection(): PortConnection | null;
    private __state;
    get state(): PortStates;
    set state(value: PortStates);
    private __isCableLink;
    get isCableLink(): boolean;
    private __isEBus;
    get isEBus(): boolean;
    private __exists;
    get exists(): boolean;
    private __hotConnectGroupStart;
    get hotConnectGroupStart(): boolean;
    private __orientation;
    get orientation(): PortOrientation;
    private __defineIncoming;
    private __defineOutgoing;
    private __evaluateAlignment;
    private __initNext;
    private __pos;
    get pos(): {
        rel: XY;
        slave: XY | null;
        trace: XY | null;
        network: XY;
    };
    private __configuredSlaveData;
    private __configuredComponent;
    get configuredComponent(): Master | Slave | null;
    private __nextSlave;
    get nextSlave(): Slave | null;
    private __nextTrace;
    get nextTrace(): Trace | null;
    get offsetNextSlave(): {
        x: number;
        y: number;
    };
    private __alignment;
    private __component;
    get component(): Master | Slave;
    private __master;
    private __index;
    get index(): 0 | 1 | 2 | 3;
    private __configured;
    get configured(): boolean;
    private __physic;
    get physic(): number;
    get typeName(): string;
    private __redundancy;
    get redundancy(): boolean;
    private __redundancyPath;
    get redundancyPath(): boolean;
}
export declare class PortMaster extends Port {
    constructor(master: Master, index: 0 | 1, physic: PortPhysic, connection: PortConnection | null, configuredSlaveData?: SR_Slave | null);
}
export declare class PortSlave extends Port {
    constructor(slave: Slave, index: 0 | 1 | 2 | 3, portData: SR_Slave_Port, connection: PortConnection | null, slaveTerminalGroup: SlaveTerminalGroup | null, subSlaves: Slave[]);
    private __online;
    get online(): SlavePortOnline;
    addMessage(localization: Localization, contentKeys: string[], errorLevel: NotificationLevel): void;
    clearMessages(): void;
    updateMessages(): void;
}
interface SlavePortOnline {
    current: {
        unexpectedLink: OnlineEntry<boolean | null>;
        missingLink: OnlineEntry<boolean | null>;
        linkError: OnlineEntry<boolean | null>;
    };
    counter: {
        crc: {
            total: OnlineEntry<number | null>;
            errorOnPrevPort: OnlineEntry<boolean | null>;
        };
    };
    messages: OnlineEntry<Set<HTMLElement>>;
}
export interface PortConnection {
    inPort: Port | null;
    outPort: Port;
    state: PortStates;
}
export declare enum PortStates {
    'notInitialized' = -1,
    'noError' = 0,
    'notPresent' = 1,
    'error' = 2
}
/** ports physic.. */
export declare enum PortPhysic {
    'NONE' = 0,
    'MII' = 1,
    'EBUS' = 3,
    'FastHotConnect' = 4
}
export declare enum PortName {
    'A' = 0,
    'D' = 1,
    'B' = 2,
    'C' = 3
}
export declare enum PortOrientation {
    'nirvana' = 0,
    'left' = 1,
    'right' = 2,
    'up' = 3,
    'down' = 4
}
export interface PortData {
    index: number;
    physic: PortPhysic;
    configured: boolean;
    configuredSlave: SR_Slave | null;
    redundancy: boolean;
    redundancyPath: boolean;
    autoIncAddr: number;
    alignment?: InnerAlignment;
}
export {};
