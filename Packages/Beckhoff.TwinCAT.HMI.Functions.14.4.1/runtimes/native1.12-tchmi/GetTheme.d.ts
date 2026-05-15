/**
 * Gets the current Themename.
 */
export declare function GetTheme(): string;
declare const _GetTheme: typeof GetTheme;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetTheme: typeof _GetTheme;
        type GetTheme = typeof _GetTheme;
    }
}
export {};
//# sourceMappingURL=GetTheme.d.ts.map