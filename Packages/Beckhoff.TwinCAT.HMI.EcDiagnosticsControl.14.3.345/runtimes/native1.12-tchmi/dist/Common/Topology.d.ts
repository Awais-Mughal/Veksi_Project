import type { Network } from './Network.js';
import type { Components } from './Component.js';
import { Master } from './Master.js';
import { Trace } from './Trace.js';
import type { Port } from './Port.js';
import type { MatrixRow, Dimension } from './Drawing.js';
import type { SR_Slave } from './ServerRespondDef.js';
export declare class Topology {
    constructor(network: Network, firstData: Master | SR_Slave, type: TopologyType);
    private __firstComponent?;
    private __network;
    get network(): Network;
    get master(): Master;
    private __topologyType;
    private __matrixDesign;
    private __matrixComponentOrder;
    get componentOrder(): Components[];
    private __matrixRows;
    get matrixRows(): MatrixRow[];
    addRow(index: number, startDimension: Dimension): MatrixRow;
    private __matrixDimension;
    get matrixDimension(): Dimension;
    private __chronologicalPortList;
    get chronologicalPortList(): Port[];
    addPortToChronologicalPortList(port: Port): void;
    private __traces;
    get traces(): Traces;
    addTrace(): Trace;
    calcNetwork(): void;
    calcMatrix(): void;
    groupAllTerminalGroups(): void;
    ungroupAllTerminalGroups(): void;
    hasGroupedSlaves(): boolean;
}
export interface MatrixDesign {
    margin: number;
    marginRows: {
        top: number;
        bottom: number;
    };
}
export declare enum TopologyType {
    'master' = 0,
    'hotConnect' = 1,
    'disabled' = 2
}
export declare enum TopologyView {
    'None' = -1,
    'Target' = 0,
    'Master' = 1,
    'Network' = 2,
    'Trace' = 3,
    'Slave' = 4
}
export type Traces = Trace[];
