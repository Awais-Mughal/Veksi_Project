import type { Dictionary, IResultObject as BaseIResultObject, AngleUnit, BorderStyleValue, DimensionUnit, FontFamily, FontSizeUnit, FontStyle, FontWeight, HorizontalAlignment, JsonSchema, ScaleModeString, SizeMode, SizeModeWithContent, ToggleState, VerticalAlignment, Visibility } from './_Types.js';
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
 * No content check will be done!
 * @param value The value to convert.
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObject<T extends object | undefined | null>(value: any): T | null;
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
 * No content check will be done!
 * @param value The value to convert.
 * @param defaultValue The fallback value
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObject<T extends object | undefined | null>(value: any, defaultValue: T): T;
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}. Returns a result object for error detection.
 * No content check will be done!
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObjectEx<T extends object | undefined | null>(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: T | null;
}): IResultObject<T | null>;
/** Returns a string representation of a function. */
export declare function toString(): ReturnType<typeof Object.toString>;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string = string>(value: T): T | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string | null | undefined = string>(value: any | null | undefined): NonNullable<T> | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toString(value: any): string | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string = string>(value: T, defaultValue: string | null): T | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string | null | undefined = string>(value: any | null | undefined, defaultValue: string | null): NonNullable<T> | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toString(value: any, defaultValue: string | null): string | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toStringEx(value?: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: string | null;
}): IResultObject<string | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnit(value: DimensionUnit | null): DimensionUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnit(value: DimensionUnit | null, defaultValue: DimensionUnit): DimensionUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnitEx(value: DimensionUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: DimensionUnit | null;
}): IResultObject<DimensionUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toAngleUnit(value: AngleUnit | null): AngleUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toAngleUnit(value: AngleUnit | null, defaultValue: AngleUnit): AngleUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toAngleUnitEx(value: AngleUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: AngleUnit | null;
}): IResultObject<AngleUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValue(value: BorderStyleValue | null): BorderStyleValue | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValue(value: BorderStyleValue | null, defaultValue: BorderStyleValue): BorderStyleValue;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValueEx(value: BorderStyleValue | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: BorderStyleValue | null;
}): IResultObject<BorderStyleValue | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontStyle(value: FontStyle | null): FontStyle | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontStyle(value: FontStyle | null, defaultValue: FontStyle): FontStyle;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontStyleEx(value: FontStyle | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: FontStyle | null;
}): IResultObject<FontStyle | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnit(value: FontSizeUnit | null): FontSizeUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnit(value: FontSizeUnit | null, defaultValue: FontSizeUnit): FontSizeUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnitEx(value: FontSizeUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: FontSizeUnit | null;
}): IResultObject<FontSizeUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontWeight(value: FontWeight | null): FontWeight | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontWeight(value: FontWeight | null, defaultValue: FontWeight): FontWeight;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontWeightEx(value: FontWeight | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: FontWeight | null;
}): IResultObject<FontWeight | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignment(value: HorizontalAlignment | null): HorizontalAlignment | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignment(value: HorizontalAlignment | null, defaultValue: HorizontalAlignment): HorizontalAlignment;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignmentEx(value: HorizontalAlignment | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: HorizontalAlignment | null;
}): IResultObject<HorizontalAlignment | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toScaleModeString(value: ScaleModeString | null): ScaleModeString | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toScaleModeString(value: ScaleModeString | null, defaultValue: ScaleModeString): ScaleModeString;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toScaleModeStringEx(value: ScaleModeString | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: ScaleModeString | null;
}): IResultObject<ScaleModeString | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toSizeMode(value: SizeMode | null): SizeMode | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeMode(value: SizeMode | null, defaultValue: SizeMode): SizeMode;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeEx(value: SizeMode | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: SizeMode | null;
}): IResultObject<SizeMode | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContent(value: SizeModeWithContent | null): SizeModeWithContent | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContent(value: SizeModeWithContent | null, defaultValue: SizeModeWithContent): SizeModeWithContent;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContentEx(value: SizeModeWithContent | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: SizeModeWithContent | null;
}): IResultObject<SizeModeWithContent | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignment(value: VerticalAlignment | null): VerticalAlignment | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignment(value: VerticalAlignment | null, defaultValue: VerticalAlignment): VerticalAlignment;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignmentEx(value: VerticalAlignment | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: VerticalAlignment | null;
}): IResultObject<VerticalAlignment | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toVisibility(value: Visibility | null): Visibility | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVisibility(value: Visibility | null, defaultValue: Visibility): Visibility;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVisibilityEx(value: Visibility | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: Visibility | null;
}): IResultObject<Visibility | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toToggleState(value: ToggleState | null): ToggleState | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toToggleState(value: ToggleState | null, defaultValue: ToggleState): ToggleState;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toToggleStateEx(value: ToggleState | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: ToggleState | null;
}): IResultObject<ToggleState | null>;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontFamily(value: FontFamily | null | undefined): FontFamily | null;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontFamily(value: FontFamily | null | undefined, defaultValue: FontFamily): FontFamily;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontFamilyEx(value: FontFamily | null | undefined, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: FontFamily | null;
}): IResultObject<FontFamily | null>;
/**
 * Converts a value to {number}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toNumber(value: any): number | null;
/**
 * Converts a value to {number}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to number (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toNumber(value: any, defaultValue: number): number;
/**
 * Converts a value to {number}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toNumberEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: number | null;
}): IResultObject<number | null>;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBoolean(value: any): boolean | null;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBoolean(value: any, defaultValue: boolean): boolean;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBooleanEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: boolean | null;
}): IResultObject<boolean | null>;
/**
 * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBigInt(value: any): bigint | null;
/**
 * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to {BigInt} and returns the 64 bit {BigInt} or null if the type of value is not compatible to {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigIntEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBigInt64(value: any): bigint | null;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt64(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt64Ex(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64(value: any): bigint | null;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64Ex(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or null if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: string input for Typescript string enum or js object "enum"
 * @param value The value to convert.
 * @param enumType Typescript string enum object or js object "enum"
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, string>>(value: undefined | null | string, enumType: T): keyof T | null;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or null if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: number or string input for Typescript number enum
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, number | string>>(value: undefined | null | number | string, enumType: T): T[keyof T] | null;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or the given default value if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: string input for Typescript string enum or js object "enum" with given defaults
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, string>, D>(value: undefined | null | string, enumType: T, defaultValue: D): keyof T;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or the given default value if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: number or string input for Typescript number enum with given defaults
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, number | string>, D>(value: undefined | null | number | string, enumType: T, defaultValue: D): T[keyof T];
/**
 * Converts a value to enum {number} and returns the enum {number} or null if the type of value is not compatible to enum {Object}.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * Returns a result object for error detection.
 * @param value The value to convert.
 * @param enumType Enum value to convert to
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnumEx<T extends Dictionary<any> = any>(value: any, enumType: T, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: any | null;
}): IResultObject<keyof T | null>;
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */
export declare function toType(value: any, typeName: string, options?: {
    readonly convertDirection?: ConvertDirection;
}): any | null;
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown. Returns a result object for error detection.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */
export declare function toTypeEx<T>(value: any, typeName: string, options?: {
    readonly convertDirection?: ConvertDirection;
}): IResultObject<T | null>;
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */
export declare function toSchemaType(value: any, schema: JsonSchema | null | undefined, options?: {
    /** Direction of conversion. */
    readonly convertDirection?: ConvertDirection;
    /** A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead. */
    readonly resolveFunctionWriteValue?: boolean;
}): any | null;
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching. Returns a result object for error detection.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */
export declare function toSchemaTypeEx(value: any, schema: JsonSchema | null | undefined, options?: {
    /** Direction of conversion. */
    readonly convertDirection?: ConvertDirection;
    /** A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead. */
    readonly resolveFunctionWriteValue?: boolean;
}): IResultObject;
export interface IResultObject<T extends any = any> extends BaseIResultObject {
    value: T | null;
}
export declare enum ConvertDirection {
    Forward = 0,
    Backward = 1
}
//# sourceMappingURL=ValueConverter.d.ts.map