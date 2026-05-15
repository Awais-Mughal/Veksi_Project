import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
/**
 * Enables the decorated method to be used as an event handler by binding its this to the class it is defined on.
 * @param options Options for the event handler.
 */
export declare function EventHandler<R, R2 extends R>(options?: R extends void | undefined ? EventHandlerOptions : EventHandlerOptions & ReturningEventHandlerOptions<R2>): <This extends baseTcHmiControl, Args extends any[]>(originalMethod: (this: This, ...args: Args) => R, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => R>) => (this: This, ...args: Args) => R;
/**
 * Enables the decorated method to be used as a callback by binding its this to the class it is defined on.
 * @param _originalMethod The method to decorate.
 * @param context The decorator context.
 */
export declare function CallbackMethod<This extends any, Args extends any[], R>(_originalMethod: (this: This, ...args: Args) => R, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => R>): void;
/**
 * Options for the event handler decorator.
 * Not exported because it is not needed as an type.
 */
interface EventHandlerOptions {
    /**
     * Whether to check if the control is enabled before running the event handler.
     */
    checkIsEnabled?: boolean;
    /**
     * Set this to a non-empty string to check whether the control has this access right or an array of strings
     * to check whether the control has all of the access rights in the array.
     */
    checkAccess?: string | string[];
    /**
     * Whether to check if the control is not in read only mode before running the event handler. Only supported
     * on controls that have the IsReadOnly attribute.
     */
    checkIsReadOnly?: boolean;
}
/**
 * Extension for the event handler options that is used when an event handler is decorated that returns a value.
 * Not exported because it is not needed as an type.
 */
interface ReturningEventHandlerOptions<R> {
    /**
     * Value that should be returned if the event handler returns early because one of its checks fails.
     */
    earlyReturnValue: R;
}
export {};
//# sourceMappingURL=Decorators.d.ts.map