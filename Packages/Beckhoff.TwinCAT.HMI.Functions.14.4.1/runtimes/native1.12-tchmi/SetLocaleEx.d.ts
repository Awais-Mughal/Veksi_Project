import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Sets the application locale. The function waits for loading of the language files.
 * @param ctx Context object which provides context specific data and functions.
 * @param locale
 */
export declare function SetLocaleEx(ctx: SelectableRequired<Context, 'success' | 'error'>, locale: string): void;
declare const _SetLocaleEx: typeof SetLocaleEx;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let SetLocaleEx: typeof _SetLocaleEx;
        type SetLocaleEx = typeof _SetLocaleEx;
    }
}
export {};
//# sourceMappingURL=SetLocaleEx.d.ts.map