import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Editor } from './BaseEditors/Editor.js';
import { HistorizedSymbolEditor } from './CustomEditors/HistorizedSymbolEditor.js';
import * as SchemaParser from './SchemaParser.js';
/**
 * Factory to create JSON editors
 */
export declare class EditorFactory<S extends Editor.Settings = Editor.Settings & HistorizedSymbolEditor.Settings, L extends Editor.Localizables = Editor.Localizables & HistorizedSymbolEditor.LocalizableTexts> {
    #private;
    protected __customEditors: {
        predicate: (schema: TcHmi.JsonSchema, info: Editor.EditorInfo) => boolean;
        editor: {
            singleLine: Editor.Constructor<unknown>;
            pane?: Editor.Constructor<unknown>;
        };
    }[];
    protected __options: EditorFactory.Options<S, L> & {
        factorySettings: EditorFactory.Settings;
    };
    /**
     * Creates a new EditorFactory instance.
     * @param options Options for this EditorFactory instance.
     */
    constructor(options?: EditorFactory.Options<S, L>);
    /**
     * Create a new editor from a given symbol. Throws an exception if the given symbol cannot be resolved to a
     * schema.
     * @param symbol A TcHmi symbol that contains the data that will be edited with this editor.
     * @param element The element to contain the editor.
     */
    fromSymbol(symbol: string | TcHmi.Symbol | TcHmi.SymbolExpression, element: HTMLElement): Promise<Editor<any>>;
    /**
     * Create a new editor from a given TcHmi type. Throws an exception if the given type cannot be resolved to a
     * schema.
     * @param type The type of the data that will be edited with this editor.
     * @param element The element to contain the editor.
     */
    fromType(type: string, element: HTMLElement): Editor<any, Editor.EditorInfo>;
    /**
     * Create a new editor from a given JSON schema.
     * @param schema A JSON schema that describes the data that will be edited with this editor.
     * @param element The element to contain the editor.
     */
    fromSchema(schema: TcHmi.JsonSchema, element: HTMLElement): Editor<any, Editor.EditorInfo>;
    /**
     * Create a new editor from a given EditorInfo object.
     * @param info An object containing information about the editor and the type of value to edit. Can be obtained
     * from SchemaParser.parse().
     * @param element The element to contain the editor.
     * @param parent Will be set if this method is used to create a sub-editor for an editor pane.
     */
    fromEditorInfo(info: Editor.EditorInfo, element: HTMLElement, parent?: Editor<unknown> | null): Editor<any, Editor.EditorInfo>;
    /**
     * Register a custom editor to handle a specific data type.
     * @param predicate A predicate function to determine the data type this editor should handle. This function
     * will receive the schema and EditorInfo that is used to create an editor and should return true to indicate
     * that the given schema or EditorInfo can be handled by this editor.
     * @param editor The editor class to register.
     */
    registerEditor<E extends Editor<unknown>>(predicate: (schema: TcHmi.JsonSchema, info: Editor.EditorInfo) => boolean, editor: Editor.GenericConstructor<E, unknown> | {
        singleLine: Editor.GenericConstructor<E, unknown>;
        pane: Editor.Constructor<unknown>;
    }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
    /**
     * Register a custom editor to handle a specific data type.
     * @param metaType A string that will be compared to the frameworkMetaType property of a JSON schema. If exactly
     * equal, this editor will be determined to be able to handle a given schema.
     * @param editor The editor class to register.
     */
    registerEditor<E extends Editor<unknown>>(metaType: string, editor: Editor.GenericConstructor<E, unknown> | {
        singleLine: Editor.GenericConstructor<E, unknown>;
        pane: Editor.Constructor<unknown>;
    }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
    /**
     * Register a custom editor to handle a specific data type.
     * @param metaTypes An array of strings that will be compared to the frameworkMetaType property of a JSON
     * schema. If the schemas frameworkMetaType property is exactly equal to one of the strings in this array, this
     * editor will be determined to be able to handle that schema.
     * @param editor The editor class to register.
     */
    registerEditor<E extends Editor<unknown>>(metaTypes: string[], editor: Editor.GenericConstructor<E, unknown> | {
        singleLine: Editor.GenericConstructor<E, unknown>;
        pane: Editor.Constructor<unknown>;
    }): EditorFactory<S & EditorFactory.TryUnwrapPartial<Parameters<E['setSettings']>[0]>, L & EditorFactory.TryUnwrapPartial<Parameters<E['setLocalizations']>[0]>>;
    /**
     * Get the control that is used as the parent control for editors created by this factory.
     */
    get parentControl(): TcHmiControl.Control | null;
    /**
     * Set the control that is used as the parent control for editors created by this factory.
     * @param control The control owning editors created by this factory.
     */
    set parentControl(control: TcHmiControl.Control | null);
    /**
     * Get the current text overwrites that are used when an editor is created.
     */
    get texts(): Partial<L & Editor.LocalizableTexts> | null;
    /**
     * Set the current text overwrites that are used when an editor is created.
     * @param texts A collection of static or localized texts to overwrite the default localized texts in the
     * editor.
     */
    set texts(texts: Partial<L & Editor.LocalizableTexts> | null);
    /**
     * Get the current editor settings.
     */
    get editorSettings(): Partial<S & Editor.EditorSettings> | null;
    /**
     * Set the settings that are applied to newly created editors.
     * @param settings The settings to apply to newly created editors.
     */
    set editorSettings(settings: Partial<S & Editor.EditorSettings> | null);
    /**
     * Get the current editor settings.
     */
    get factorySettings(): Partial<EditorFactory.Settings> | null;
    /**
     * Set the settings that are applied to newly created editors.
     * @param settings The settings to apply to newly created editors.
     */
    set factorySettings(settings: Partial<EditorFactory.Settings> | null);
    /**
     * Get the name generator that is currently used when a JSON schema is parsed.
     */
    get nameGenerator(): SchemaParser.NameGenerator | string | null;
    /**
     * Set the name generator that is currently used when a JSON schema is parsed.
     * @param nameGenerator A function that generates a name from the resulting editor type, the title and id of the
     * schema and the schemas that the resulting editor info is based on. This can be more than one schema if anyOf
     * or oneOf is used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
     */
    set nameGenerator(nameGenerator: SchemaParser.NameGenerator | string | null);
}
export declare namespace EditorFactory {
    /**
     * Options for EditorFactory instances.
     */
    interface Options<S extends Editor.Settings, L extends Editor.Localizables> {
        /**
         * The control owning editors created by this factory.
         */
        parentControl?: TcHmiControl.Control | null;
        /**
         * A collection of static or localized texts to overwrite the default localized texts in the editor.
         */
        texts?: Partial<L & Editor.LocalizableTexts>;
        /**
         * Settings to apply to newly created editors.
         */
        editorSettings?: Partial<S & Editor.EditorSettings>;
        /**
         * Settings that are used by the factory to create editors.
         */
        factorySettings?: Partial<Settings>;
        /**
         * A function that generates a name from the resulting editor type, the title and id of the schema and the
         * schemas that the resulting editor info is based on. This can be more than one schema if anyOf or oneOf is
         * used. If the function returns null, the SchemaParser uses its own algorithm to generate a name.
         * Alternatively a string can be passed in directly which will be used as the name for the top-level editor.
         */
        nameGenerator?: SchemaParser.NameGenerator | string;
    }
    /**
     * Settings for EditorFactory instances.
     */
    interface Settings {
        /**
         * Controls whether the factory should create editor panes instead of single-line editors if available. For
         * this to work with custom editors, they must be registered together with their respective pane.
         * No: Default behavior. The factory always returns a single-line editor.
         * Always: The factors always returns editor panes, if available. This may result in multiple nested panes.
         * FirstLevel: The factory tries to return editor panes only for the first level of nesting.
         */
        preferPanes: 'No' | 'Always' | 'FirstLevel';
    }
    type TryUnwrapPartial<P> = P extends Partial<infer T> ? T : P;
}
import _EditorFactory = EditorFactory;
declare global {
    namespace TcHmi.Controls.Helpers {
        let EditorFactory: typeof _EditorFactory;
        type EditorFactory<S extends Editor.Settings = Editor.Settings & HistorizedSymbolEditor.Settings, L extends Editor.Localizables = Editor.Localizables & HistorizedSymbolEditor.LocalizableTexts> = _EditorFactory<S, L>;
        namespace EditorFactory {
            type Options<S extends Editor.Settings, L extends Editor.Localizables> = _EditorFactory.Options<S, L>;
            type Settings = _EditorFactory.Settings;
            type TryUnwrapPartial<P> = _EditorFactory.TryUnwrapPartial<P>;
        }
    }
}
//# sourceMappingURL=EditorFactory.d.ts.map