import type { Slave } from './Slave.js';
export declare class SyncUnits {
    constructor();
    private __syncUnits;
    add(id: number, syncUnit: SyncUnit): void;
    getAll(): Map<number, SyncUnit>;
    get(id: number): SyncUnit | undefined;
    getOrCreate(id: number): SyncUnit;
    remove(id: number): void;
    clear(): void;
    addSlave(id: number, slave: Slave): void;
}
export interface SyncUnit {
    slaves: Slave[];
    error?: boolean;
    faultCounter?: number;
}
