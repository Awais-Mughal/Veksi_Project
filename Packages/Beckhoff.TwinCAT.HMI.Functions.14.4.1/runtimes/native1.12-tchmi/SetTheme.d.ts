/**
 * Set a new Theme.
 * @param themeName
 */
export declare function SetTheme(themeName: string): void;
declare const _SetTheme: typeof SetTheme;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let SetTheme: typeof _SetTheme;
        type SetTheme = typeof _SetTheme;
    }
}
export {};
//# sourceMappingURL=SetTheme.d.ts.map