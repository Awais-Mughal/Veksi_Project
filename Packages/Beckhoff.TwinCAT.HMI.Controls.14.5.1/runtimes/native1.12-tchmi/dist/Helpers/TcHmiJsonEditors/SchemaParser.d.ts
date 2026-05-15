import { Editor } from './BaseEditors/Editor.js';
/**
 * Parses a JSON schema into editor info objects.
 * @param schema The schema to parse.
 */
export declare function parse(schema: TcHmi.JsonSchema): Editor.EditorInfo;
/**
 * Parses a JSON schema into editor info objects.
 * @param schema The schema to parse.
 * @param customName A custom name to use for the resulting editor info.
 */
export declare function parse(schema: TcHmi.JsonSchema, customName: string): Editor.EditorInfo;
/**
 * Parses a JSON schema into editor info objects.
 * @param schema The schema to parse.
 * @param nameGenerator A function that generates a name from the resulting editor type, the title and id of the
 * schema and the schemas that the resulting editor info is based on. This can be more than one schema if anyOf
 * or oneOf is used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
 */
export declare function parse(schema: TcHmi.JsonSchema, nameGenerator: (editorType: Editor.EditorType, schemaTitle: string | undefined, schemaId: string | undefined, schemas: TcHmi.JsonSchema[]) => string | null): Editor.EditorInfo;
/**
 * Resolves allOf members by combining all entries of the allOf into one schema.
 * @param schema The schema to be resolved.
 */
export declare function resolveAllOf(schema: TcHmi.JsonSchema): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").JsonSchema;
/**
 * Recursively resolves references in a schema. Can handle recursive schemas.
 * The given object is not modified.
 * @param schema The schema to resolve.
 */
export declare function resolveReferences(schema: TcHmi.JsonSchema): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").JsonSchema;
/**
 * Generate a data type name for a given JSON schema.
 * @param schema The schema to generate the name for.
 */
export declare function generateName(schema: TcHmi.JsonSchema | {
    title?: string;
    id?: string;
    type?: string;
}): string;
/**
 * Merges two or more editor infos together by creating an editor info that only accepts values that satisfy all passed in editor infos.
 * This functions trys to return an editor info of the same type as the first parameter.
 * @param toMerge The editor infos to be merged.
 */
export declare function mergeEditorInfos(...toMerge: Editor.EditorInfo[]): Editor.EditorInfo;
/**
 * Compares two editor infos and determines if they are equivalent.
 * @param a The first editor info to compare.
 * @param b The second editor info to compare.
 */
export declare function editorInfoEquivalent(a: Editor.EditorInfo, b: Editor.EditorInfo): boolean;
/**
 * Generates a name for the editor info from the available information.
 * @param editorType The type the resulting editor will have.
 * @param schemaTitle The title of the schema, or undefined if the schema has no title.
 * @param schemaId The id of the schema, or undefined if the schema has no id.
 * @param schemas The schemas the editor info was generated from. Can be more than one if an anyOf or oneOf schema was used.
 */
export type NameGenerator = (editorType: Editor.EditorType, schemaTitle: string | undefined, schemaId: string | undefined, schemas: TcHmi.JsonSchema[]) => string | null;
export interface TopLevelType {
    editorType: Editor.EditorType;
    rawType: TcHmi.JsonDataTypeNames;
    convert?: TcHmi.JsonSchema['convert'];
    schema: TcHmi.JsonSchema;
}
export interface CondensedType {
    editorType: Editor.EditorType;
    convertibles: TopLevelType[];
    condensedFrom: TopLevelType[];
    id?: string;
    title?: string;
}
declare const _parse: typeof parse;
type tParse = typeof parse;
declare const _resolveAllOf: typeof resolveAllOf;
type tResolveAllOf = typeof resolveAllOf;
declare const _resolveReferences: typeof resolveReferences;
type tResolveReferences = typeof resolveReferences;
declare const _generateName: typeof generateName;
type tGenerateName = typeof generateName;
declare const _mergeEditorInfos: typeof mergeEditorInfos;
type tMergeEditorInfos = typeof mergeEditorInfos;
declare const _editorInfoEquivalent: typeof editorInfoEquivalent;
type tEditorInfoEquivalent = typeof editorInfoEquivalent;
declare global {
    namespace TcHmi.Controls.Helpers.SchemaParser {
        let parse: typeof _parse;
        type parse = tParse;
        let resolveAllOf: typeof _resolveAllOf;
        type resolveAllOf = tResolveAllOf;
        let resolveReferences: typeof _resolveReferences;
        type resolveReferences = tResolveReferences;
        let generateName: typeof _generateName;
        type generateName = tGenerateName;
        let mergeEditorInfos: typeof _mergeEditorInfos;
        type mergeEditorInfos = tMergeEditorInfos;
        let editorInfoEquivalent: typeof _editorInfoEquivalent;
        type editorInfoEquivalent = tEditorInfoEquivalent;
    }
}
export {};
//# sourceMappingURL=SchemaParser.d.ts.map