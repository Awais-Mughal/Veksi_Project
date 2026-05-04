import type { EcDiagnostics } from './main.js';
import { Master } from './Master.js';
import { TopologyView } from './Topology.js';
export declare class Target {
    constructor(main: EcDiagnostics, netId: string, name: string, available: boolean, sysServiceAdsState: number);
    private __init;
    getNetIdAndName(): {
        netId: string;
        name: string;
    };
    update(name: string, available: boolean, sysServiceAdsState: number, selectedDeviceChanged: boolean): void;
    updateView(master?: Master): void;
    displayView(): void;
    private __getMaster;
    private __clearMasters;
    private __subscriptions;
    private __subscriptionInitialized;
    private __available;
    private __sysServiceAdsState;
    get sysServiceAdsState(): number;
    private __targetSysServiceAdsStateOnChangeFns;
    addTargetSysServiceAdsStateOnChangeFn(cb: (targetSysServiceAdsState: number) => any): void;
    removeTargetSysServiceAdsStateOnChangeFn(cb: (targetSysServiceAdsState: number) => any): void;
    private get comObj();
    private __main;
    get main(): EcDiagnostics;
    private __netId;
    get netId(): string;
    private __name;
    get name(): string;
    private __masters;
    countMasters(): number;
    private __addMaster;
    private __deleteAllMasters;
    private __updateMaster;
    private __updateView;
    setView(view: TopologyView, masterNetId?: string | null): void;
    destroy(): void;
}
