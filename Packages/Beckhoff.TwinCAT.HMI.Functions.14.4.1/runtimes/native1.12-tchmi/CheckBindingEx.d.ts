import type { Controls, Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Checks if a specific symbol is bound to a control attribute.
 * @param control
 * @param propertyName
 * @param symbol
 */
export declare function CheckBindingEx(control: Controls.System.baseTcHmiControl, propertyName: string, symbol: Symbol | null): boolean;
declare const _CheckBindingEx: typeof CheckBindingEx;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let CheckBindingEx: typeof _CheckBindingEx;
        type CheckBindingEx = typeof _CheckBindingEx;
    }
}
export {};
//# sourceMappingURL=CheckBindingEx.d.ts.map