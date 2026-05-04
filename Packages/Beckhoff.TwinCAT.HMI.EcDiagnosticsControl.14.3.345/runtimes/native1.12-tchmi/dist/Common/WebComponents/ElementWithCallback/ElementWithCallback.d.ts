export declare class ElementWithCallback extends HTMLElement {
    constructor();
    addFnToCallOnRemove(fn: (...args: any[]) => void): void;
    private __fnToCallOnRemove;
    __executeFnToCallOnRemove(): void;
    disconnectedCallback(): void;
    remove(): void;
}
