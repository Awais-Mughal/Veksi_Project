import type { SolidColor } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Converts a number value to solid color object
 * @param value Value to be converted.
 */
export declare function NumberToSolidColor(value: number): SolidColor;
declare const _NumberToSolidColor: typeof NumberToSolidColor;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let NumberToSolidColor: typeof _NumberToSolidColor;
        type NumberToSolidColor = typeof _NumberToSolidColor;
    }
}
export {};
//# sourceMappingURL=NumberToSolidColor.d.ts.map