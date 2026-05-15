import type { JsonSchema, JsonDataTypeNames } from './_Types.js';
/**
 * Generates a Javascript object or data primitive from the default values of a schema object.
 * Hint:
 * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
 * @param schema Schema so resolve
 * @preserve (Part of the public API)
 */
export declare function resolveDefault(schema: JsonSchema): any;
/**
 * Resolves the effective type value/s of a schema except those with additional conversion rules.
 * Hint:
 * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
 * @param schema Schema to resolve
 * @preserve (Part of the public API)
 */
export declare function resolveType(schema: JsonSchema): undefined | JsonDataTypeNames | JsonDataTypeNames[];
/**
 * Recurse a schema with its corresponding data
 * @param schema Schema to iterate
 * @param data data which is defined by the schema
 * @param action callback to call on each part
 */
export declare function recurseThroughSchema<T = unknown>(schema: JsonSchema, data: T, action: (subschema: JsonSchema, subdata: unknown, path: string) => RecurseSchemaResult<unknown>): RecurseSchemaResult<T>;
export interface RecurseSchemaResult<T extends any = any> {
    changedValue: boolean;
    value: T;
}
/**
 * Tests whether the given value fits into the type specified by the provided schema.
 * @param value The value to test.
 * @param schema The schema to test against.
 */
export declare function matchesSchemaType(value: any, schema: JsonSchema): boolean;
//# sourceMappingURL=Type.Schema.d.ts.map