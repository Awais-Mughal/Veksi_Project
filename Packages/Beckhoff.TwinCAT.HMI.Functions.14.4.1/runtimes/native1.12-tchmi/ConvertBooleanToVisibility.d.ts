import type { Visibility } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Converts boolean values to visibility enumeration values.
 * @param value
 * @param falseValue
 */
export declare function ConvertBooleanToVisibility(value: boolean, falseValue?: 'Hidden' | 'Collapsed'): Visibility;
declare const _ConvertBooleanToVisibility: typeof ConvertBooleanToVisibility;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ConvertBooleanToVisibility: typeof _ConvertBooleanToVisibility;
        type ConvertBooleanToVisibility = typeof _ConvertBooleanToVisibility;
    }
}
export {};
//# sourceMappingURL=ConvertBooleanToVisibility.d.ts.map