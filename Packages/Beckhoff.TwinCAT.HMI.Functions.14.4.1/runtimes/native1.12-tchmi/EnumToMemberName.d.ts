import type { FunctionExpressionContext, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Resolves the corresponding enum member string of the current value of a given enum symbol.
 */
export declare function EnumToMemberName(ctx: SelectableRequired<FunctionExpressionContext, 'success' | 'error'>, symbol: Symbol): void;
declare const _EnumToMemberName: typeof EnumToMemberName;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let EnumToMemberName: typeof _EnumToMemberName;
        type EnumToMemberName = typeof _EnumToMemberName;
    }
}
export {};
//# sourceMappingURL=EnumToMemberName.d.ts.map