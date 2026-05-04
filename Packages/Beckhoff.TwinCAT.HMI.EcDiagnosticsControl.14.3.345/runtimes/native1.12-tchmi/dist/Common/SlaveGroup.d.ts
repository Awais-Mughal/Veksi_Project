import { Component } from './Component.js';
import type { Slave } from './Slave.js';
import type { Trace } from './Trace.js';
import type { Port } from './Port.js';
import type { ComponentDesign } from './Appearance.js';
import type { MatrixCoordinates } from './Drawing.js';
import type { XY } from './Vector.js';
export declare class SlaveGroup extends Component {
    constructor(firstSlave: Slave);
    private __grouped;
    get grouped(): boolean;
    group(): void;
    ungroup(): void;
    protected __subSlaves: Slave[];
    get subSlaves(): Slave[];
    get numOfSubSlaves(): number;
    addSubSlave(slave: Slave): void;
    get firstSubSlave(): Slave;
    protected __trace: Trace;
    get trace(): Trace;
    get topology(): import("./Topology.js").Topology;
    get network(): import("./Network.js").Network;
    get master(): import("./Master.js").Master;
    get name(): string;
    protected __pos: {
        networkTraceXOffset: number;
        network: XY;
    };
    set networkPos(value: XY);
    get networkPos(): XY;
    get lastSubSlave(): Slave;
    get pos(): {
        networkTraceXOffset: number;
        network: XY;
    };
    get coordinates(): {
        col: number;
        row: import("./Drawing.js").MatrixRow;
    } | null;
    get hasForcedProcessData(): boolean;
    protected __ports: Port[];
    set startCoordinates(coordinates: MatrixCoordinates);
    protected __design: ComponentDesign;
    follow(xOffset: number): void;
}
export declare class SlaveTerminalGroup extends SlaveGroup {
    constructor(firstSlave: Slave);
    group(): void;
    isSlaveGroup(): boolean;
}
