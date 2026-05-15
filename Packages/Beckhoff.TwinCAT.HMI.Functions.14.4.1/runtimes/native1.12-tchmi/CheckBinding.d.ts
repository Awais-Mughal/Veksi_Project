import type { Controls } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Returns true if a symbol is bound to the target control property.
 * @param control
 * @param propertyName
 */
export declare function CheckBinding(control: Controls.System.baseTcHmiControl, propertyName: string): boolean;
declare const _CheckBinding: typeof CheckBinding;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let CheckBinding: typeof _CheckBinding;
        type CheckBinding = typeof _CheckBinding;
    }
}
export {};
//# sourceMappingURL=CheckBinding.d.ts.map