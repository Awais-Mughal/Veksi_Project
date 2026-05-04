import { Master } from '../../Master.js';
import type { Localization } from '../../Localization.js';
export declare enum AdsState {
    run = 5,
    config = 15
}
export declare class SlaveListView extends HTMLElement {
    constructor(master: Master, localization: Localization);
    private __forcedStateElements;
    private __forceStateInfo;
    private __releaseAllNotAvailableInfo;
    private __releaseAllProcessDataBtn;
    private __listViewWrapper;
    updateForcedStates: (data: number[]) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __onTargetAdsSysServiceChange;
    private __preInit;
    private __init;
    private __addSlaveList;
    private __insertComponentEntry;
    private __ecdiagnostics;
    private __master;
    private __localization;
}
