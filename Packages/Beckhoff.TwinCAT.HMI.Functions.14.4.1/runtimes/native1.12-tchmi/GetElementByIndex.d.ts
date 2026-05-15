import type { FunctionExpressionContext, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Return the value at the array index position.
 * @param ctx Context object which provides context specific data and functions.
 * @param arraySymbol
 * @param arrayIndex
 */
export declare function GetElementByIndex(ctx: SelectableRequired<FunctionExpressionContext, 'success' | 'error'>, arraySymbol: Symbol | null, arrayIndex: number | null): void;
declare const _GetElementByIndex: typeof GetElementByIndex;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetElementByIndex: typeof _GetElementByIndex;
        type GetElementByIndex = typeof _GetElementByIndex;
    }
}
export {};
//# sourceMappingURL=GetElementByIndex.d.ts.map