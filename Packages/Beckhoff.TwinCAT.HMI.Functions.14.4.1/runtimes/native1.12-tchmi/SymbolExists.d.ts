import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Checks if a specific symbol exists
 * @param ctx Context object which provides context specific data and functions.
 * @param symbol
 */
export declare function SymbolExists(ctx: SelectableRequired<Context<boolean>, 'success' | 'error'>, symbol: Symbol | null): void;
declare const _SymbolExists: typeof SymbolExists;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let SymbolExists: typeof _SymbolExists;
        type SymbolExists = typeof _SymbolExists;
    }
}
export {};
//# sourceMappingURL=SymbolExists.d.ts.map