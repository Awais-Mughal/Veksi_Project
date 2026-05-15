import type { AllowSymbolExpressionsAsValues, DestroyFunction, IResultObject, JsonSchema, IResultObject as ApiIResultObject } from './_Types.js';
import { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
/**
 * Helper to resolve symbol expressions in objects.
 * Best used as TcHmi.ObjectResolver
 * @preserve (Part of the public API)
 */
export declare class ObjectResolver<T extends object | null> {
    /**
     * Creates a new ObjectResolver.
     * Best used as TcHmi.ObjectResolver
     * @param obj Object to resolve
     * @param parentControl When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
     * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
     */
    constructor(obj: AllowSymbolExpressionsAsValues<T>, parentControl?: baseTcHmiControl | null);
    /**
     * Creates a new ObjectResolver which resolves symbol expressions in objects.
     * Best used as TcHmi.ObjectResolver
     * @param obj Object to resolve
     * @param options Options
     * @param options.schema Schema that describes the expected object structure and types.
     * @param options.parentControl When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
     * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
     */
    constructor(obj: AllowSymbolExpressionsAsValues<T>, options?: ObjectResolver.IOptions | null);
    private __obj;
    private __clone;
    private __watchLastObj;
    private __watchSymbolInfoByRef;
    private __watchSymbolInfoByExpression;
    private __watchErrorsBySymbolInfo;
    private __watchPending;
    private __watchLoopActive;
    private __watcher;
    private __writeActiveCount;
    /**
     * Resolves all symbol expression refs in the current object.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
    resolve(callback?: (this: void, data: ObjectResolver.IResultObject<T>) => void): DestroyFunction;
    /**
     * Watches for changes of symbol expressions in the current object und returns the object with updated values.
     * Returns a destroy function to remove the watch.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
    watch(callback?: (this: void, data: ObjectResolver.IWatchResultObject<T>) => void): DestroyFunction;
    /**
     * Writes to the current object instance and reflects changes to possibly existing symbol expressions.
     * @param obj The new object value
     * @param dirtyPaths Paths in the object that have been changed. If not defined changes will be detected automatically.
     * @param callback Will be called when the object (and all symbols mentioned within the object) have completed writing.
     */
    write(obj: AllowSymbolExpressionsAsValues<T>, dirtyPaths?: string[], callback?: (data: IResultObject) => void): void;
    /**
     * Destroys the current object.
     * @preserve (Part of the public API)
     */
    destroy(): void;
}
export declare namespace ObjectResolver {
    interface IWatchResultObject<T extends object | null> extends ApiIResultObject {
        value?: T;
        /** A destroy function to remove the watch. Only set if there is no error. */
        destroy?: DestroyFunction;
    }
    interface IResultObject<T extends object | null> extends ApiIResultObject {
        value?: T;
    }
    interface IOptions {
        /**
         * When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
         * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
         */
        parentControl?: baseTcHmiControl | null;
        /** Schema that describes the expected object structure and types. When defined "type" will be ignored. */
        schema?: JsonSchema;
        /**
         * TwinCAT HMI Type Definition string that will be used to resolve the related schema. Will be ignored when "schema" is defined.
         */
        type?: string;
    }
}
//# sourceMappingURL=ObjectResolver.d.ts.map