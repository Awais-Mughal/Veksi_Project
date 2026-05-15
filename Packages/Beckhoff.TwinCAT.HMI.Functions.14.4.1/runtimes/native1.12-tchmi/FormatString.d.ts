/**
 * Format a string.
 * Placeholder syntax in format string: '{' to begin placeholder, optional parameter-index with | as seperator, description and '}' to close the placeholder.
 * Example: {0|.1f}
 * @param formatString
 * @param args
 */
export declare function FormatString(formatString: string, ...args: any[]): string;
declare const _FormatString: typeof FormatString;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let FormatString: typeof _FormatString;
        type FormatString = typeof _FormatString;
    }
}
export {};
//# sourceMappingURL=FormatString.d.ts.map