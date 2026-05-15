/**
 * Convert string value to uppercase.
 * @param value
 */
export declare function ToUpperCase(value: string): string | null;
declare const _ToUpperCase: typeof ToUpperCase;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ToUpperCase: typeof _ToUpperCase;
        type ToUpperCase = typeof _ToUpperCase;
    }
}
export {};
//# sourceMappingURL=ToUpperCase.d.ts.map