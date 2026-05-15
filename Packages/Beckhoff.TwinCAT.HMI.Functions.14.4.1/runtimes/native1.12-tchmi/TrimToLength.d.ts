/**
 * Trims a string (from left or right side) to a specific length.
 * @param value
 * @param trimToLength
 */
export declare function TrimToLength(value: string | null, trimToLength: number | string | null): string | null;
declare const _TrimToLength: typeof TrimToLength;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TrimToLength: typeof _TrimToLength;
        type TrimToLength = typeof _TrimToLength;
    }
}
export {};
//# sourceMappingURL=TrimToLength.d.ts.map