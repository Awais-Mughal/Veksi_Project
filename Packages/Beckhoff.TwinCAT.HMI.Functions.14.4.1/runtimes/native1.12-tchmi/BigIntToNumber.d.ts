/**
 * Converts a bigint value to number
 * @param value Value to be converted.
 */
export declare function BigIntToNumber(value: bigint): number;
declare const _BigIntToNumber: typeof BigIntToNumber;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let BigIntToNumber: typeof _BigIntToNumber;
        type BigIntToNumber = typeof _BigIntToNumber;
    }
}
export {};
//# sourceMappingURL=BigIntToNumber.d.ts.map