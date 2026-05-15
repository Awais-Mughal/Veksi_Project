import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Logout a different user or all from a TcHmiServer
 * @param ctx Context object which provides context specific data and functions.
 * @param username
 */
export declare function ForceLogoutEx(ctx: SelectableRequired<Context, 'success' | 'error'>, username: string | null | undefined): boolean;
declare const _ForceLogoutEx: typeof ForceLogoutEx;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ForceLogoutEx: typeof _ForceLogoutEx;
        type ForceLogoutEx = typeof _ForceLogoutEx;
    }
}
export {};
//# sourceMappingURL=ForceLogoutEx.d.ts.map