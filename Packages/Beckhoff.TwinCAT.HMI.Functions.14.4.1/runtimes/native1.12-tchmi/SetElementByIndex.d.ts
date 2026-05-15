import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Inserts the value at the array index position.
 * @param ctx Context object which provides context specific data and functions.
 * @param arraySymbol
 * @param arrayIndex
 * @param value
 */
export declare function SetElementByIndex(ctx: SelectableRequired<Context, 'success' | 'error'>, arraySymbol: Symbol<any[]> | null, arrayIndex: number | null, value: any): void;
//# sourceMappingURL=SetElementByIndex.d.ts.map