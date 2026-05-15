import { CallbackCollection as Collection, AsyncCallbackCollection as AsyncCollection } from './CallbackCollection.js';
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */
export declare function callSafe<T extends object | null, A extends any[]>(callback: ICallback<T, A> | null | undefined, thisArg: T, ...args: A): Error | undefined;
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing and prints it to console for proper call stack.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */
export declare function callSafeEx<T extends object | null, A extends any[]>(callback: ICallback<T, A> | null | undefined, thisArg: T, ...args: A): Error | undefined;
/**
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 */
export interface ICallback<T extends object | null, A extends any[]> {
    (this: T, ...args: A): void;
}
export { Collection, AsyncCollection };
//# sourceMappingURL=Callback.d.ts.map