import type { Directory } from './Directory.js';
export declare abstract class Display {
    protected __element: HTMLElement;
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    protected __suspended: boolean;
    protected __autoSuspended: boolean;
    protected __directory: Directory<unknown, unknown> | null;
    protected __directoryEventDestroyers: TcHmi.DestroyFunction[];
    protected __parentControlEventDestroyers: TcHmi.DestroyFunction[];
    /**
     * Creates a new Display.
     * @param __element The element that hosts the Display in the DOM.
     * @param __parentControl The control that owns this display.
     */
    constructor(__element: HTMLElement, __parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Removes all event listeners. Should be called when the owning control is detached or destroyed.
     * @param clear Set to true to remove all child elements from the element.
     */
    suspend(clear: boolean): void;
    /**
     * Re-adds event listeners that were previously removed by suspend. Should be called when owning control is reattached.
     * The display is initialised in a suspended state, so resume can be called from the constructor to add event listeners.
     */
    resume(): void;
    /**
     * Sets a new directory.
     */
    setDirectory(directory: Directory<unknown, unknown> | null): void;
    /**
     * Processes the directory.
     */
    protected abstract __processDirectory(): void;
}
declare const _Display: typeof Display;
type tDisplay = Display;
declare global {
    namespace TcHmi.Controls.Helpers {
        let Display: typeof _Display;
        type Display = tDisplay;
    }
}
export {};
//# sourceMappingURL=Display.d.ts.map