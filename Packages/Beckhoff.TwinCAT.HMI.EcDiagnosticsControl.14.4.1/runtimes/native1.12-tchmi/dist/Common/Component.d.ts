import type { Master } from './Master.js';
import type { Slave } from './Slave.js';
import type { SlaveGroup } from './SlaveGroup.js';
import type { Port } from './Port.js';
import type { Trace } from './Trace.js';
import type { EcDiagnostics } from './main.js';
import type { ComponentDesign } from './Appearance.js';
import type { MatrixCoordinates } from './Drawing.js';
export declare abstract class Component {
    protected __index: number;
    constructor(index: number);
    abstract get master(): Master;
    get main(): EcDiagnostics;
    protected abstract __ports: Port[];
    protected abstract __trace: Trace | null;
    protected abstract __pos: any;
    get index(): number;
    abstract set startCoordinates(coordinates: MatrixCoordinates);
    private __redundancyPort;
    get redundancyPort(): Port | null;
    set redundancyPort(port: Port | null);
    private __outgoingEBusPort;
    get outgoingEBusPort(): Port | null;
    set outgoingEBusPort(port: Port | null);
    private __outgoingConfiguredEBusPort;
    get outgoingConfiguredEBusPort(): Port | null;
    set outgoingConfiguredEBusPort(port: Port | null);
    private __cableLinkPorts;
    get cableLinkPorts(): Port[];
    addCableLinkPort(port: Port): number;
    private __outgoingConfiguredCableLinkPorts;
    get outgoingConfiguredCableLinkPorts(): Port[];
    addOutgoingConfiguredCableLinkPort(port: Port): number;
    protected __hasOutgoingConfiguredEBusPort: boolean;
    get hasOutgoingConfiguredEBusPort(): boolean;
    protected __hasIncomingCableLinkPort: boolean;
    get hasIncomingCableLinkPort(): boolean;
    protected __numOfOutgoingConfiguredCableLinkPorts: number;
    get numOfOutgoingConfiguredCableLinkPorts(): number;
    protected __numOfCableLinkPorts: number;
    get numOfCableLinkPorts(): number;
    protected __numOfConfiguredPorts: number;
    get numOfConfiguredPorts(): number;
    protected abstract __design: ComponentDesign;
    get design(): ComponentDesign;
    abstract follow(xOffset?: number): void;
    reset(): void;
}
export type Components = Master | Slave | SlaveGroup;
export declare const StateMachineStateNameReverse: {
    Init: number;
    PreOp: number;
    Boot: number;
    SafeOp: number;
    Operational: number;
    Invalid: number;
};
export declare enum StateMachineStateType {
    'init' = 1,
    'preOp' = 2,
    'boot' = 3,
    'safeOp' = 4,
    'operational' = 8
}
export declare enum StateMachineStateName {
    'Init' = 1,
    'PreOp' = 2,
    'Boot' = 3,
    'SafeOp' = 4,
    'Operational' = 8,
    'Invalid' = 9
}
