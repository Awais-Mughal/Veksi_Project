import { Editor } from './Editor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor that is used if a JSON schema does not allow any possible value.
 */
export declare class InvalidEditor extends Editor<any, InvalidEditor.Info> {
    #private;
    protected __value: any;
    protected __textContainer: HTMLElement;
    /**
     * Create a new invalid editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: InvalidEditor.Info, factory: EditorFactory);
    /**
     * Validates the given value against the specified editor info.
     * @param _editorInfo The editor info to validate against.
     * @param _value The value to validate.
     */
    static validate(_editorInfo: InvalidEditor.Info, _value: any): _value is any;
    /**
     * Checks the given value for errors against the given editor info.
     * @param _editorInfo The editor info to check against.
     * @param _value The value to check.
     * @param _returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(_editorInfo: InvalidEditor.Info, _value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
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
     * @param value The value to set.
     */
    setValue(value: any | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): any;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
}
export declare namespace InvalidEditor {
    interface Info extends Editor.Info<never> {
        type: 'invalid';
    }
    type LocalizableTexts = {
        invalidEditor: Partial<{
            invalidSchemaText: TcHmi.Localizable;
        }>;
    };
}
import _InvalidEditor = InvalidEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let InvalidEditor: typeof _InvalidEditor;
        namespace InvalidEditor {
            type Info = _InvalidEditor.Info;
            type LocalizableTexts = _InvalidEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=InvalidEditor.d.ts.map