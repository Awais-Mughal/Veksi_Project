import { ElementWithCallback } from '../ElementWithCallback/ElementWithCallback.js';
import type { Localization } from '../../Localization.js';
export declare class PopUp extends ElementWithCallback {
    constructor();
    private __firstAttach;
    connectedCallback(): void;
    private readonly __innerFrame;
    private readonly __header;
    private readonly __title;
    private readonly __closeBtn;
    private readonly __removeTargets;
    setTitle(localization: Localization, contentKey: string): void;
    private __removeTargetFn;
    close(): void;
    getScrollTop(): number;
    setScrollTop(scrollTop: number): void;
}
