export {};
declare global {
    var tchmi_decode_control_characters: typeof _tchmi_decode_control_characters;
    var tchmi_encode_control_characters: typeof _tchmi_encode_control_characters;
    var tchmi_encode_html: typeof _tchmi_encode_html;
    var tchmi_decode_html: typeof _tchmi_decode_html;
    var tchmi_encode_uri_components: typeof _tchmi_encode_uri_components;
    var tchmi_text_to_html: typeof _tchmi_text_to_html;
    var tchmi_base64decode: typeof _tchmi_base64decode;
    var tchmi_base64encode: typeof _tchmi_base64encode;
    var tchmi_create_guid: typeof _tchmi_create_guid;
    var tchmi_equal: typeof _tchmi_equal;
    var tchmi_clone_object: typeof _tchmi_clone_object;
    var tchmi_compare_object: typeof _tchmi_compare_object;
    var tchmi_path: typeof _tchmi_path;
    var tchmi_css_escape_selector: typeof _tchmi_css_escape_selector;
    var tchmi_escape_regex: typeof _tchmi_escape_regex;
    var tchmi_format_string: typeof _tchmi_format_string;
    var tchmi_compare_version: typeof _tchmi_compare_version;
}
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * @param text The text to escape
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function _tchmi_decode_control_characters(text: string | null | undefined): string;
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * Some controls converted newline to space in all released tchmi versions.
 * So this helper can do this with the options.newlineToSpace, but
 * do not use that parameter for new controls.
 *
 * You also probably do not need options.preserveBackslash for controls.
 *
 * @param text The text to escape
 * @param options options
 * @param options.newlineToSpace Convert Newline to space
 * @param options.preserveBackslash Preserve an escaped backslash
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function _tchmi_decode_control_characters(text: string | null | undefined, options?: {
    newlineToSpace?: boolean;
    preserveBackslash?: boolean;
}): string;
/**
 * Converts tab/newline (HTML world) to string "\t"/"\n" (symbol world).
 * This supports escaping with "\\t"
 *
 * @param text The text to encode
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function _tchmi_encode_control_characters(text: string | null | undefined): string;
/**
 * Encodes HTML
 * @param html The html to encode
 * @returns The encoded representation of parameter html.
 * @preserve (Part of the public API)
 */
declare function _tchmi_encode_html(html: string): string;
/**
 * Decodes HTML
 * @param text The text to decode
 * @returns The decoded representation of parameter text.
 * "&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
 * "°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 * @preserve (Part of the public API)
 */
declare function _tchmi_decode_html(text: string): string;
/**
 * Encodes parts of uris including most reserved characters but will not encode '/' in path or '?', '&' and '=' in search parameters for example.
 * Only path will be encoded by default. Encoding of serch parameter values or hash can be activated optionally.
 * @param uri Uri
 * @param options Options
 * @param options.encodePath Is true by default. When true the path (except '/') will be encoded.
 * @param options.encodeSearchParams Is false by default. When true search parameter values will be encoded by default.
 * @param options.encodeHash Is false by default. When true the hash value will be encoded (except first '#') by default.
 * @preserve (Part of the public API)
 */
declare function _tchmi_encode_uri_components(uri: string, options?: {
    encodePath?: boolean;
    encodeSearchParams?: boolean;
    encodeHash?: boolean;
}): string;
/**
 * Converts formatted text to formatted html.
 * @param text The text which contains the formatting placeholders which shall be encoded.
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function _tchmi_text_to_html(text: string): string;
/**
 * Decode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryReader(input).readString()
 * @param input String to decode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */
declare function _tchmi_base64decode(input: string): string | null;
/**
 * Encode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryWriter().writeString(input).getEncodedString()
 * @param input String to encode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */
declare function _tchmi_base64encode(input: string): string;
/**
 * Creates a Guid string.
 * @returns Guid
 * @preserve (Part of the public API)
 */
declare function _tchmi_create_guid(): string;
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param typeSafeOrOptions A boolean or option object to define how the values should be compared.
 * If it is a boolean, a value of false will perform a type unsafe comparison, i.e. 1 == "1", while
 * a value of true will cause the function to only consider the values equal if their types are also equal.
 * @preserve (Part of the public API)
 */
declare function _tchmi_equal(a: any, b: any, typeSafeOrOptions?: boolean | {
    /**
     * A value of true will perform a type unsafe comparison, i.e. 1 == "1", while
     * a value of false will cause the function to only consider the values equal if their types are also equal.
     * Defaults to false if not specified.
     */
    convertPrimitives?: boolean;
    /**
     * If set, will cause the function to perform deep equality checking for maps.
     * To be considered equal, maps must have the same number and order of keys and values, which must be equal.
     * Use compareMaps.deepCompareKeys and compareMaps.deepCompareValues to specify how keys and values should be compared.
     * If not set, maps will only be considered equal if they are reference equal.
     */
    compareMaps?: {
        /**
         * A value of true will perform deep equality checks for map keys.
         * Otherwise maps are only considered equal if all their keys are reference equal.
         */
        deepCompareKeys: boolean;
        /**
         * A value of true will perform deep equality checks for map values.
         * Otherwise maps are only considered equal if all their values are reference equal.
         */
        deepCompareValues: boolean;
    };
    /**
     * If set, will cause the function to perform deep equality checking for sets.
     * To be considered equal, sets must have the same number and order of values, which must be equal.
     * Use compareSets.deepCompareValues to specify how values should be compared.
     * If not set, sets will only be considered equal if they are reference equal.
     */
    compareSets?: {
        /**
         * A value of true will perform deep equality checks for set values.
         * Otherwise sets are only considered equal if all their values are reference equal.
         */
        deepCompareValues: boolean;
    };
    /**
     * A value of true will compare dates by their unix epoch time in milliseconds.
     * Otherwise dates will only be considered equal if they are reference equal.
     * Defaults to false if not specified.
     */
    compareDates?: boolean;
}): boolean;
/**
 * Checks if the given object inherits from another object by comparing its prototype to the native object and array prototypes.
 * Internal function. Should only be used by the framework core.
 * @param obj The object to check.
 */
export declare const __tchmi_is_instanced_object: {
    (obj: unknown): obj is {
        new (...args: unknown[]): unknown;
        readonly prototype: unknown;
    };
    __objectPrototype?: any;
    __arrayPrototype?: any;
};
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * This function will not create clones of objects based on a prototype definition (like class instances) and function references
 * and return the original reference instead.
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @param obj The object to clone.
 * @param options Options to define what should be cloned and how it should be cloned.
 * @param options.cloneMaps If set, maps will be cloned. Otherwise maps will be returned unchanged.
 * @param options.cloneMaps.deepCloneKeys Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
 * @param options.cloneMaps.deepCloneValues Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
 * @param options.cloneSets If set, sets will be cloned. Otherwise sets will be returned unchanged.
 * @param options.cloneSets.deepCloneValues Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
 * @param options.cloneDates If true, dates will be cloned. Otherwise dates will be returned unchanged.
 * @param options.resolveRecursiveReferences If true, the function will keep track of all objects that are cloned and thus be able to detect and properly clone recursive references.
 * @returns Clone of param obj.
 * @template T defines the type of the target object
 * @preserve (Part of the public API)
 */
declare function _tchmi_clone_object<T>(obj: T, options?: {
    /**
     * If set, maps will be cloned. Otherwise maps will be returned unchanged.
     */
    cloneMaps?: {
        /**
         * Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
         */
        deepCloneKeys: boolean;
        /**
         * Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
         */
        deepCloneValues: boolean;
    };
    /**
     * If set, sets will be cloned. Otherwise sets will be returned unchanged.
     */
    cloneSets?: {
        /**
         * Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
         */
        deepCloneValues: boolean;
    };
    /**
     * If true, dates will be cloned. Otherwise dates will be returned unchanged.
     * Defaults to false if not specified.
     */
    cloneDates?: boolean;
    /**
     * If true, the function will keep track of all objects that are cloned and thus be able to detect recursive references.
     * This enables the function to clone objects that contain themselves.
     * Defaults to false if not specified.
     */
    resolveRecursiveReferences?: boolean;
}): T;
/**
 * Compares two objects (not class instances) and returns an array of object path strings for the changed properties.
 * This array can directly be used in apis where the "dirtyPaths" argument is allowed like the onPropertyChanged control event.
 * returns null when changed properties can not be checked.
 * @param o1 First object
 * @param o2 Second object
 * @param entryPath sub path
 */
declare function _tchmi_compare_object(o1: Record<string, any>, o2: Record<string, any>, entryPath?: string | null): string[] | null;
/**
 * Unify a path string.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes, remove leading slash
 * @param path The path.
 * @returns Unified path.
 */
declare function _tchmi_path(path: string): string;
declare function _tchmi_path<T>(path: T): T;
/**
 * Converts a String to a valid CSS id pattern by escaping all reserved characters.
 * @param id The target id.
 * @returns Converted id.
 * @preserve (Part of the public API)
 */
declare function _tchmi_css_escape_selector(id: string): string;
/**
 * tchmi_escape_regex
 * @param text text to escape
 * @preserve (Part of the public API)
 */
declare function _tchmi_escape_regex(text: string): string;
/**
 * Format a string.
 * Placeholder syntax in format string: '{' to begin placeholder, optional parameter-index with | as seperator, description and '}' to close the placeholder.
 * Example: {0|.1f}
 * @param formatString text to format
 * @param args params for the placeholders
 */
declare function _tchmi_format_string(formatString: string, ...args: any[]): string;
/**
 * Compares two version strings and returns -1 if b is newer than a, 0 if a is equal to b and 1 if b is newer than a.
 * @param a Version a
 * @param b Version b
 */
declare function _tchmi_compare_version(a: string, b: string): -1 | 0 | 1;
//# sourceMappingURL=_GlobalFunctions.d.ts.map