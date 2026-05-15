import type { Controls, Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Creates a binding between a symbol and a control attribute setter function by name of property.
 * @param control
 * @param propertyName
 * @param symbol
 */
export declare function CreateBinding(control: Controls.System.baseTcHmiControl, propertyName: string, symbol: Symbol | null): void;
declare const _CreateBinding: typeof CreateBinding;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let CreateBinding: typeof _CreateBinding;
        type CreateBinding = typeof _CreateBinding;
    }
}
export {};
//# sourceMappingURL=CreateBinding.d.ts.map