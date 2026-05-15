/**
 * Converts string value to lowercase.
 * @param value
 */
export declare function ToLowerCase(value: string | null): string | null;
declare const _ToLowerCase: typeof ToLowerCase;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ToLowerCase: typeof _ToLowerCase;
        type ToLowerCase = typeof _ToLowerCase;
    }
}
export {};
//# sourceMappingURL=ToLowerCase.d.ts.map