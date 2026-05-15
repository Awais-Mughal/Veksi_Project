import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Login server session. Reload on login is recommended for security reasons.
 * @param ctx Context object which provides context specific data and functions.
 * @param username
 * @param password
 * @param persistent
 * @param reload
 */
export declare function LoginEx(ctx: SelectableRequired<Context, 'success' | 'error'>, username: string | null, password: string | null, persistent?: boolean, reload?: boolean): void;
declare const _LoginEx: typeof LoginEx;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let LoginEx: typeof _LoginEx;
        type LoginEx = typeof _LoginEx;
    }
}
export {};
//# sourceMappingURL=LoginEx.d.ts.map