import { ElementWithCallback } from '../ElementWithCallback/ElementWithCallback.js';
export declare class CanvasTooltip extends ElementWithCallback {
    constructor();
    private __hoverEventListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    destroy(): void;
    private __removeEvents;
    hide(): void;
    show(content: HTMLElement, x: number, y: number): void;
}
