// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************

/**
 * Class that buffers a value until it needs to be processed.
 */
export declare class ValueBuffer<T> {
    protected __processingPoint: InputProcessingPoint;
    protected __setter: (valueNew: T) => void;
    protected __value: T | undefined;
    protected __onValueSet: Callback.Collection<(value: T) => void>;
    onValueSet: Readonly<{
        add: (callback: (value: T) => void) => () => void;
        remove: (callback: (value: T) => void) => void;
    }>;
    /**
     * Creates a new ValueBuffer.
     * @param processingPoint When to process the value.
     * @param setter The setter to call when the value should be processed.
     */
    constructor(processingPoint: InputProcessingPoint, setter: (valueNew: T) => void);
    /**
     * When to process the value.
     * @param processingPoint When to process the value.
     */
    set processingPoint(processingPoint: InputProcessingPoint);
    /**
     * When to process the value.
     */
    get processingPoint(): InputProcessingPoint;
    /**
     * Sets a new value to be buffered. If processingPoint is set to Change it will be immediately processed.
     * @param value The value to be buffered.
     */
    setValue(value: T): void;
    /**
     * Gets the currently buffered value.
     * @returns
     */
    getValue(): T | undefined;
    /**
     * Tells the buffer that the user interaction is finished. If processingPoint is set to InteractionFinished, the
     * value will then be processed.
     */
    interactionFinished(): void;
}
export declare enum InputProcessingPoint {
    Change = 0,
    InteractionFinished = 1
}
declare const _ValueBuffer: typeof ValueBuffer;
type tValueBuffer<T> = ValueBuffer<T>;
declare const _InputProcessingPoint: typeof InputProcessingPoint;
type tInputProcessingPoint = InputProcessingPoint;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ValueBuffer: typeof _ValueBuffer;
        type ValueBuffer<T> = tValueBuffer<T>;
        let InputProcessingPoint: typeof _InputProcessingPoint;
        type InputProcessingPoint = tInputProcessingPoint;
    }
}
export {};
