/**
 * Checks if a bigint value fits safe into number.
 * @param value Value to be converted.
 */
export declare function IsSafeInteger(value: bigint): boolean;
declare const _IsSafeInteger: typeof IsSafeInteger;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let IsSafeInteger: typeof _IsSafeInteger;
        type IsSafeInteger = typeof _IsSafeInteger;
    }
}
export {};
//# sourceMappingURL=IsSafeInteger.d.ts.map