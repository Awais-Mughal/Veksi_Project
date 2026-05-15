/**
 * Returns a localized text by key.
 * @param key
 */
export declare function GetLocalizedText(key: string): string;
declare const _GetLocalizedText: typeof GetLocalizedText;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetLocalizedText: typeof _GetLocalizedText;
        type GetLocalizedText = typeof _GetLocalizedText;
    }
}
export {};
//# sourceMappingURL=GetLocalizedText.d.ts.map