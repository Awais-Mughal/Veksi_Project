import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Logout server session. Will cause hmi to reload if reload parameter is not set to false.
 * @param ctx Context object which provides context specific data and functions.
 * @param reload
 */
export declare function LogoutEx(ctx: SelectableRequired<Context, 'success' | 'error'>, reload?: boolean): void;
declare const _LogoutEx: typeof LogoutEx;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let LogoutEx: typeof _LogoutEx;
        type LogoutEx = typeof _LogoutEx;
    }
}
export {};
//# sourceMappingURL=LogoutEx.d.ts.map