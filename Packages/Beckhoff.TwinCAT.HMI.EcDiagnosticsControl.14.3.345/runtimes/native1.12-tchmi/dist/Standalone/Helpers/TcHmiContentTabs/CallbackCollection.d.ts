declare abstract class CallbackCollectionBase<C extends (...args: any[]) => any> {
    protected __callbacks: Set<C>;
    /**
     * Adds a callback.
     * @param callback The callback to add.
     */
    add(callback: C): DestroyFunction;
    /**
     * Removes the callback.
     * @param callback The callback to remove.
     */
    remove(callback: C): void;
    /**
     * Removes all callbacks.
     */
    clear(): void;
    /**
     * Returns a frozen object containig the add and remove methods. Useful for exposing these methods to the public
     * without also exposing the trigger method.
     */
    getManipulators(): Readonly<{
        add: (callback: C) => DestroyFunction;
        remove: (callback: C) => void;
    }>;
}
/**
 * A collection of callbacks.
 */
export declare class CallbackCollection<C extends (...args: any[]) => any> extends CallbackCollectionBase<C> {
    /**
     * Calls all registered callbacks with the provided arguments.
     * @param args The parametes for the callback invocations.
     */
    trigger(...args: Parameters<C>): PromiseSettledResult<ReturnType<C>>[];
}
/**
 * A collection of asynchronous callbacks.
 */
export declare class AsyncCallbackCollection<C extends (...args: any[]) => Promise<any>> extends CallbackCollectionBase<C> {
    /**
     * Calls all registered callbacks with the provided arguments.
     * @param args The parametes for the callback invocations.
     */
    trigger(...args: Parameters<C>): Promise<PromiseSettledResult<Awaited<ReturnType<C>>>[]>;
}
/**
 * A function that removes the callback from the collection when called.
 */
type DestroyFunction = () => void;
export {};
//# sourceMappingURL=CallbackCollection.d.ts.map