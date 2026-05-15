import * as IFunction from './IFunction.js';
import type { Context, DestroyFunction, FunctionDescription, IResultObject, SelectableRequired } from './_Types.js';
import { Destroyable } from './Destroyable.js';
/**
 * Used to execute functions based on a static JSON description.
 * @template R Type of the result of the function
 * @preserve (Part of the public API)
 */
export declare class Function<R = any> extends Destroyable {
    /**
     * constructor
     * @param functionCallDescription function definition
     */
    constructor(functionCallDescription: IFunction.IFunction<R>);
    private __processedWaitMode;
    private __lastExecuteId;
    private __isDestroying;
    /**
     * Will raise the function defined in constructor argument f: IFunction.
     * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
     * @preserve (Part of the public API)
     */
    execute(requiredArgs?: any[]): any;
    /**
     * Will raise the function defined in constructor argument f: IFunction and raises a callback afterwards.
     * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
     * @param callback Callback which will be called with the result
     * @preserve (Part of the public API)
     */
    executeEx(requiredArgs: any[] | undefined, callback: (this: Function<R>, data: Function.IExecuteResultObject<R>) => void): DestroyFunction;
    /**
     * Will raise the function defined in constructor argument f: IFunction and forward the context object defined in ctx: TcHmi.Context if the function supports this.
     * @param ctx Context object.
     * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
     * @preserve (Part of the public API)
     */
    executeEx2(ctx: SelectableRequired<Context, 'success' | 'error'>, requiredArgs?: any[]): DestroyFunction;
    /**
     * Resolved the processed wait mode of the function call description.
     * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
     * are added as additional parameter because parameters are resolved before the underlying function is called.
     */
    private __resolveProcessedWaitMode;
    /**
     * Returns true if the function call description will be processed asynchronous and false if not.
     * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
     * are added as additional parameter because parameters are resolved before the underlying function is called.
     * This function throws an exception if the function object was destroyed, the function call description is missing or the function description is missing.
     */
    isProcessedAsync(): boolean;
    /**
     * Releases all resources of the function
     * @preserve (Part of the public API)
     */
    destroy(): void;
    /**
     * Get the description of the function.
     * @preserve (Part of the public API)
     */
    getDescription(): FunctionDescription | undefined;
}
export declare namespace Function {
    /**
     * @template R Type of the result of the function
     */
    interface IExecuteResultObject<R = any> extends IResultObject {
        /** Result of the function */
        result?: R;
    }
}
//# sourceMappingURL=Function.d.ts.map