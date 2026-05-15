import { Editor } from './Editor.js';
import { ComboboxBasedEditor } from './ComboboxBasedEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor for enums.
 */
export declare class EnumEditor<T> extends ComboboxBasedEditor<T, EnumEditor.Info<T>> {
    /**
     * Create a new enum editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: EnumEditor.Info<T>, factory: EditorFactory);
    /**
     * Returns whether the editor contains a valid value for the schema.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate<T = any>(editorInfo: EnumEditor.Info, value: any): value is T;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param _returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: EnumEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: T | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): T | null;
}
export declare namespace EnumEditor {
    interface Info<T = any> extends Editor.Info<T> {
        type: 'enum';
        members: Map<T, string | undefined>;
    }
}
import _EnumEditor = EnumEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let EnumEditor: typeof _EnumEditor;
        type EnumEditor<T> = _EnumEditor<T>;
        namespace EnumEditor {
            type Info = _EnumEditor.Info;
        }
    }
}
//# sourceMappingURL=EnumEditor.d.ts.map