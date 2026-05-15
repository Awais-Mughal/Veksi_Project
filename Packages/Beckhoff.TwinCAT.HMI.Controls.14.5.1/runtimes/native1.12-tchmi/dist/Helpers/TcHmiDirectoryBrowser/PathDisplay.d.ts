import { Display } from './Display.js';
import { DirectoryBrowser } from './DirectoryBrowser.js';
export declare class PathDisplay extends Display {
    protected __scrollContainer: HTMLDivElement;
    protected __itemListElement: HTMLUListElement;
    protected __mouseDragScrolling: {
        startX: number;
        mouseDown: boolean;
        dragging: boolean;
        ignoreClick: boolean;
    };
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    /**
     * Creates a new PathDisplay.
     * @param element The element that hosts the PathDisplay in the DOM.
     */
    constructor(element: HTMLDivElement, parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Event handler for the click event of __itemListElement.
     * @param event The event.
     */
    protected __onClick(event: MouseEvent): void;
    /**
     * Event handler for the mousedown event of __element.
     * @param event The event.
     */
    protected __onMouseDown(event: MouseEvent): void;
    /**
     * Event handler for the mouseup event of document.
     * @param event The event.
     */
    protected __onMouseUp(event: MouseEvent): void;
    /**
     * Event handler for the mousemove event of document.
     * @param event The event.
     */
    protected __onMouseMove(event: MouseEvent): void;
    /**
     * Removes all event listeners. Should be called when the owning control is detached or destroyed.
     * @param clear Set to true to remove all child elements from the path element.
     */
    suspend(clear?: boolean): void;
    /**
     * Re-adds event listeners that were previously removed by suspend. Should be called when owning control is reattached.
     */
    resume(): void;
    /**
     * Processes the directory.
     */
    protected __processDirectory(): void;
    /**
     * Updates the path display.
     */
    protected __updatePath(path: DirectoryBrowser.Item<unknown, unknown>[] | null | undefined): void;
    /**
     * Creates a new list element, or updates an existing one, to represent the given pathItem.
     * @param item The item to represent.
     * @param element Can be set to reuse an existing element.
     */
    protected __createOrUpdateListElement(item: DirectoryBrowser.Item<unknown, unknown>, element?: HTMLLIElement): HTMLLIElement;
}
declare const _PathDisplay: typeof PathDisplay;
type tPathDisplay = PathDisplay;
declare global {
    namespace TcHmi.Controls.Helpers {
        let PathDisplay: typeof _PathDisplay;
        type PathDisplay = tPathDisplay;
    }
}
export {};
//# sourceMappingURL=PathDisplay.d.ts.map