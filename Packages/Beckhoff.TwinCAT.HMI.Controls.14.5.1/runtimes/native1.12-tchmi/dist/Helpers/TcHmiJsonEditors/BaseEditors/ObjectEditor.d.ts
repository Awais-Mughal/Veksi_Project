import type { EditorFactory } from '../EditorFactory.js';
import { Editor } from './Editor.js';
import type { InvalidEditor } from './InvalidEditor.js';
import { ButtonBasedEditor } from './ButtonBasedEditor.js';
/**
 * Editor for objects.
 */
export declare class ObjectEditor extends ButtonBasedEditor<Record<string | number | symbol, any>, ObjectEditor.Info> {
    protected __value: Record<string | number | symbol, any>;
    /**
     * Create a new object editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: ObjectEditor.Info, value: any): value is object;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: ObjectEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Resolves dependencies of an object editor info by merging the dependecies with names contained in knownProperties into the editorInfo. Returns the original editorInfo if no dependecies are matched.
     * @param editorInfo The editor info to resolve.
     * @param knownProperties The properties that are known to exist on the object value.
     */
    static resolveDependencies(editorInfo: ObjectEditor.Info, knownProperties: Set<string>): ObjectEditor.Info | InvalidEditor.Info;
    /**
     * Determines which editor info to use for the given property.
     * @param editorInfo The object editor info containing infos about the given property.
     * @param property The name of the property.
     */
    static getEditorInfoForProperty(editorInfo: ObjectEditor.Info, property: string): Editor.EditorInfo;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: object | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): Record<string | number | symbol, any>;
    /**
     * Opens the popup for the editor.
     */
    protected openPopup(): Promise<void>;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
}
export declare namespace ObjectEditor {
    interface Info extends Editor.Info<Record<string | number | symbol, any>> {
        type: 'object';
        properties: Map<string, Editor.EditorInfo>;
        patternProperties?: Map<RegExp, Editor.EditorInfo>;
        additionalProperties: {
            allowed: boolean;
            editorInfo?: Editor.EditorInfo;
        };
        maxProperties?: number;
        minProperties?: number;
        dependencies?: Map<string, Info>;
    }
}
import _ObjectEditor = ObjectEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ObjectEditor: typeof _ObjectEditor;
        type ObjectEditor = _ObjectEditor;
        namespace ObjectEditor {
            type Info = _ObjectEditor.Info;
        }
    }
}
//# sourceMappingURL=ObjectEditor.d.ts.map