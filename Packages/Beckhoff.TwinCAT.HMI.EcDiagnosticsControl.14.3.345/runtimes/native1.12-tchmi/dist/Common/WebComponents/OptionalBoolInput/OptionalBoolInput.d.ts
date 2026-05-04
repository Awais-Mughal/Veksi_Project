import type { ProcessDataOnlineEntry } from '../../DOMUtility.js';
export declare const enum OptionalBoolStateOrder {
    'TrueFalseNull' = 0,
    'FalseTrueNull' = 1
}
export declare class OptionalBoolInput extends HTMLElement {
    constructor();
    private __state;
    private __mappedValue;
    private __stateOrder;
    get value(): boolean | null;
    set value(value: boolean | null);
    connectedCallback(): void;
    mapValue(mappedValue: ProcessDataOnlineEntry<any> | undefined): void;
    private __updateDom;
    __goToNextState(): void;
}
