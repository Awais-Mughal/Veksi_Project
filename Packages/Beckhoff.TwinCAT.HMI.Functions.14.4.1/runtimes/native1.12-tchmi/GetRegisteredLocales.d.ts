/**
 * Returns the list of registered locales as array of string.
 */
export declare function GetRegisteredLocales(): string[];
declare const _GetRegisteredLocales: typeof GetRegisteredLocales;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetRegisteredLocales: typeof _GetRegisteredLocales;
        type GetRegisteredLocales = typeof _GetRegisteredLocales;
    }
}
export {};
//# sourceMappingURL=GetRegisteredLocales.d.ts.map