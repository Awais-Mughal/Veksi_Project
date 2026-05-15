import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Starts a timer and signals success once the timer has expired.
 * Signals success once that time has passed.
 * Can be used to delay subsequent actions.
 * @param ctx Context
 * @param time Time in milliseconds.
 */
export declare function Wait(ctx: SelectableRequired<Context, 'success' | 'error'>, time?: number): void;
declare const _Wait: typeof Wait;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Wait: typeof _Wait;
        type Wait = typeof _Wait;
    }
}
export {};
//# sourceMappingURL=Wait.d.ts.map