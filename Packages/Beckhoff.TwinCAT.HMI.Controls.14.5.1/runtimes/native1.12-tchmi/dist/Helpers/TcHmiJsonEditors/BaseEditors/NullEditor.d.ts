import { Editor } from './Editor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor that is used if the schema demands a value to be null. Mostly useful in ChoiceEditors.
 */
export declare class NullEditor extends Editor<null, NullEditor.Info> {
    protected __onChangeTriggered: boolean;
    /**
     * Create a new null editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: NullEditor.Info, factory: EditorFactory);
    /**
     * Validates the given value against the specified editor info.
     * @param _editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(_editorInfo: NullEditor.Info, value: any): value is null;
    /**
     * Checks the given value for errors against the given editor info.
     * @param _editorInfo The editor info to check against.
     * @param value The value to check.
     * @param _returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(_editorInfo: NullEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Process the editors read-only mode.
     */
    protected __processIsReadOnly(): void;
    /**
     * Set a new Value.
     * @param _value The value to set.
     */
    setValue(_value: null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): null;
}
export declare namespace NullEditor {
    interface Info extends Editor.Info<null> {
        type: 'null';
    }
}
import _NullEditor = NullEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let NullEditor: typeof _NullEditor;
        type NullEditor = _NullEditor;
        namespace NullEditor {
            type Info = _NullEditor.Info;
        }
    }
}
//# sourceMappingURL=NullEditor.d.ts.map