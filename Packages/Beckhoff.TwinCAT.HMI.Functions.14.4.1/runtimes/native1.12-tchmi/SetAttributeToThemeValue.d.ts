import type { Controls } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Sets the default value of a property and change it (if needed) on theme change.
 * @param control
 * @param propertyName
 */
export declare function SetAttributeToThemeValue(control: Controls.System.baseTcHmiControl, propertyName: string): void;
declare const _SetAttributeToThemeValue: typeof SetAttributeToThemeValue;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let SetAttributeToThemeValue: typeof _SetAttributeToThemeValue;
        type SetAttributeToThemeValue = typeof _SetAttributeToThemeValue;
    }
}
export {};
//# sourceMappingURL=SetAttributeToThemeValue.d.ts.map