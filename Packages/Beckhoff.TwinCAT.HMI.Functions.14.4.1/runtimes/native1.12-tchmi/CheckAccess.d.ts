import type { Controls } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Checks if a right is allowed for the current user on this control or its parents.
 * TypeScript or JavaScript code can use the API `TcHmi.Access.checkAccess`
 * @param control Control to check
 * @param AccessRightToCheck name of the access right
 */
export declare function CheckAccess(control: Controls.System.baseTcHmiControl, AccessRightToCheck: string): boolean;
declare const _CheckAccess: typeof CheckAccess;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let CheckAccess: typeof _CheckAccess;
        type CheckAccess = typeof _CheckAccess;
    }
}
export {};
//# sourceMappingURL=CheckAccess.d.ts.map