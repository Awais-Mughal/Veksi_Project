import type { Slave } from '../../Slave.js';
import type { Localization } from '../../Localization.js';
import '../OptionalBoolInput/OptionalBoolInput.js';
export interface EntryGroups {
    prev: {
        names: string[];
        wrapper: HTMLElement[];
    };
    current: {
        names: string[];
        wrapper: HTMLElement[];
    };
}
export declare class ProcessDataView extends HTMLElement {
    constructor(slave: Slave, localization: Localization);
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __ecdiagnostics;
    private __slave;
    private __localization;
    private __pdo_types;
    private __allForceBtns;
    private __allReleaseBtns;
    private __onTargetAdsSysServiceChange;
    private __createTableHeaders;
    private __createTableEntries;
    private __createTableEntryParent;
    private __createTableEntry;
    private __messageWrapper;
    private __init;
    private __setAllValues;
    private __forceAllValues;
    private __releaseAllValues;
    private __setValue;
    private __forceValue;
    private __releaseValue;
    private __addProcessDataHistoryChart;
    private __drawProcessDataHistoryChart;
    private __removeProcessDataHistoryChart;
}
