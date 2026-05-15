/**
 * Function Parser Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isStaticValue(value: Value): value is StaticValue;
/**
 * Function Parser  Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isSymbol(value: Value): value is Symbol;
/**
 * Function Parser Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isEventDataObject(value: Value): value is EventDataObject;
/**
 * Function Parser  Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isFunctionExpression(value: Value): value is FunctionExpression;
/**
 * @template R Type of the result of the function
 */
export interface IFunction<R = any> {
    objectType: 'Function';
    /** Should function be active? */
    active?: boolean;
    /** Registered name of the Function. */
    fn: string;
    fnParams: Value[];
}
export interface baseValue {
}
export type Value = StaticValue | Symbol | EventDataObject | FunctionExpression;
export interface StaticValue extends baseValue {
    objectType: 'StaticValue';
    /** Contains a value based on the defined valuetype. A value can be a string, number, boolean, array or an object. */
    value: any;
    /** Information about the used type as a tchmi reference name for re-edit scenarios while Engineering. */
    valueType?: string;
}
export interface Symbol extends baseValue {
    objectType: 'Symbol';
    /** A tchmi binding symbol expression string. Example: "%s%ADS::test1%s%" */
    symbolExpression: string;
}
export interface EventDataObject extends baseValue {
    objectType: 'EventDataObject';
    /** The name of the prooperty of the event object. */
    propertyPath: string;
}
export interface FunctionExpression extends baseValue {
    objectType: 'FunctionExpression';
    functionExpression: string;
}
//# sourceMappingURL=IFunction.d.ts.map