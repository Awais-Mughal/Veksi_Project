import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Decrement a binding value.
 * @param ctx Context object which provides context specific data and functions.
 * @param symbol
 * @param minValue
 * @param stepWidth
 */
export declare function Decrement(ctx: SelectableRequired<Context, 'success' | 'error'>, symbol: Symbol | null, minValue?: number | null, stepWidth?: number | null): void;
declare const _Decrement: typeof Decrement;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Decrement: typeof _Decrement;
        type Decrement = typeof _Decrement;
    }
}
export {};
//# sourceMappingURL=Decrement.d.ts.map