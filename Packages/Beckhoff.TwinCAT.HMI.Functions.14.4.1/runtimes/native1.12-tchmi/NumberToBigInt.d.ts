/**
 * Converts a number value to bigint
 * @param value Value to be converted.
 */
export declare function NumberToBigInt(value: number): bigint;
declare const _NumberToBigInt: typeof NumberToBigInt;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let NumberToBigInt: typeof _NumberToBigInt;
        type NumberToBigInt = typeof _NumberToBigInt;
    }
}
export {};
//# sourceMappingURL=NumberToBigInt.d.ts.map