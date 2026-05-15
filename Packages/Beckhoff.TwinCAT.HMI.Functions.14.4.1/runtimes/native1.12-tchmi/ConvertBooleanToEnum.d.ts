/**
 * Converts boolean values to enumeration values.
 * @param value
 * @param trueValue
 * @param falseValue
 */
export declare function ConvertBooleanToEnum<T = any>(value: boolean, trueValue: T, falseValue: T): T;
declare const _ConvertBooleanToEnum: typeof ConvertBooleanToEnum;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ConvertBooleanToEnum: typeof _ConvertBooleanToEnum;
        type ConvertBooleanToEnum = typeof _ConvertBooleanToEnum;
    }
}
export {};
//# sourceMappingURL=ConvertBooleanToEnum.d.ts.map