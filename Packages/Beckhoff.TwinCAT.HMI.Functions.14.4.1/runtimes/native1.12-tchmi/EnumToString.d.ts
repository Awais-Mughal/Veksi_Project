import type { EnumMapping } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Converts numerical enumeration values to their string names.
 * @param value Value to be converted.
 * @param mapping An object that maps numerical enum values to strings.
 */
export declare function EnumToString(value: number, mapping: EnumMapping): string;
declare const _EnumToString: typeof EnumToString;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let EnumToString: typeof _EnumToString;
        type EnumToString = typeof _EnumToString;
    }
}
export {};
//# sourceMappingURL=EnumToString.d.ts.map