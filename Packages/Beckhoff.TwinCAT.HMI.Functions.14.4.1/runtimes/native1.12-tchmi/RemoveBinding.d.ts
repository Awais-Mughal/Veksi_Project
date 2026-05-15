import type { Controls } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Removes a binding between a symbol and a control attribute setter function by name of property.
 * @param control
 * @param propertyName
 */
export declare function RemoveBinding(control: Controls.System.baseTcHmiControl, propertyName: string): void;
declare const _RemoveBinding: typeof RemoveBinding;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let RemoveBinding: typeof _RemoveBinding;
        type RemoveBinding = typeof _RemoveBinding;
    }
}
export {};
//# sourceMappingURL=RemoveBinding.d.ts.map