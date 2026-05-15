import type { EditorFactory } from '../EditorFactory.js';
import { TextboxBasedEditor } from './TextboxBasedEditor.js';
import { Editor } from './Editor.js';
/**
 * Editor for strings.
 */
export declare class StringEditor extends TextboxBasedEditor<string, StringEditor.Info> {
    /**
     * Create a new string editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: StringEditor.Info, value: any): value is string;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: StringEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: string | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): string;
}
export declare namespace StringEditor {
    interface Info extends Editor.Info<string> {
        type: 'string';
        restrictions: Restriction[];
    }
    interface Restriction {
        minLength?: number;
        maxLength?: number;
        patterns?: RegExp[];
        format?: TcHmi.JsonSchema['format'];
    }
}
import _StringEditor = StringEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let StringEditor: typeof _StringEditor;
        type StringEditor = _StringEditor;
        namespace StringEditor {
            type Info = _StringEditor.Info;
            type Restriction = _StringEditor.Restriction;
        }
    }
}
//# sourceMappingURL=StringEditor.d.ts.map