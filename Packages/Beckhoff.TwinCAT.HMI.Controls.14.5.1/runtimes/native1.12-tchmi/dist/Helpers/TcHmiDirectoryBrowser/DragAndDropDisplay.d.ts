import { Callback } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Display } from './Display.js';
export declare abstract class DragAndDropDisplay extends Display {
    protected __dragAndDropAllowed: boolean;
    protected __draggedElement: HTMLElement | null;
    protected __dropElement: HTMLElement | null;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected readonly __onDragAndDropManager: Callback.Collection<(draggedItems: string[], droppedOnto: {
        name: string;
        isParent: boolean;
    }) => void>;
    readonly onDragAndDrop: Readonly<{
        add: (callback: (draggedItems: string[], droppedOnto: {
            name: string;
            isParent: boolean;
        }) => void) => () => void;
        remove: (callback: (draggedItems: string[], droppedOnto: {
            name: string;
            isParent: boolean;
        }) => void) => void;
    }>;
    /**
     * Creates a new DragAndDropDisplay.
     * @param __element The element that hosts the DragAndDropDisplay in the DOM.
     */
    constructor(element: HTMLElement, parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Event handler for the dragstart event of __element.
     * @param event The event
     */
    protected __onDragStart(event: DragEvent): void;
    /**
     * Event handler for the dragover event of __element.
     * @param event The event
     */
    protected __onDragOver(event: DragEvent): void;
    /**
     * Event handler for the drop event of __element.
     * @param event The event
     */
    protected __onDrop(event: DragEvent): void;
    /**
     * Event handler for the dragend event of __element.
     * @param event The event
     */
    protected __onDragEnd(_event: DragEvent): void;
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
     * Sets dragAndDropAllowed to control whether items can be dragged and dropped.
     * @param valueNew The new value for dragAndDropAllowed.
     */
    setDragAndDropAllowed(valueNew: boolean): void;
    /**
     * Gets the current value of dragAndDropAllowed.
     */
    getDragAndDropAllowed(): boolean;
    /**
     * Processes the current value of __dragAndDropAllowed
     */
    protected __processDragAndDropAllowed(): void;
    /**
     * Adds event handlers for drag and drop events.
     */
    protected __addDragAndDropHandlers(): void;
    /**
     * Removes event handlers for drag and drop events.
     */
    protected __removeDragAndDropHandlers(): void;
}
declare const _DragAndDropDisplay: typeof DragAndDropDisplay;
type tDragAndDropDisplay = DragAndDropDisplay;
declare global {
    namespace TcHmi.Controls.Helpers {
        let DragAndDropDisplay: typeof _DragAndDropDisplay;
        type DragAndDropDisplay = tDragAndDropDisplay;
    }
}
export {};
//# sourceMappingURL=DragAndDropDisplay.d.ts.map