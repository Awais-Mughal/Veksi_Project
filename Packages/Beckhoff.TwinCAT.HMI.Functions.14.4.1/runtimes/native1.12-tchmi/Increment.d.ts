import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Increment a binding value.
 * @param ctx Context object which provides context specific data and functions.
 * @param symbol
 * @param maxValue
 * @param stepWidth
 */
export declare function Increment(ctx: SelectableRequired<Context, 'success' | 'error'>, symbol: Symbol<number> | null, maxValue?: number | null, stepWidth?: number | null): void;
declare const _Increment: typeof Increment;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Increment: typeof _Increment;
        type Increment = typeof _Increment;
    }
}
export {};
//# sourceMappingURL=Increment.d.ts.map