/**
 * Returns the current locale string for texts or undefined if no localized Symbol is available.
 */
export declare function GetLocale(): string | undefined;
declare const _GetLocale: typeof GetLocale;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetLocale: typeof _GetLocale;
        type GetLocale = typeof _GetLocale;
    }
}
export {};
//# sourceMappingURL=GetLocale.d.ts.map