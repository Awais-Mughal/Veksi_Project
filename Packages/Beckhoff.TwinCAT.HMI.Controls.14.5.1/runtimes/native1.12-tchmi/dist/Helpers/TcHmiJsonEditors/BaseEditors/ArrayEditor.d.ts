import { ButtonBasedEditor } from './ButtonBasedEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
import { Editor } from './Editor.js';
/**
 * Editor for arrays.
 */
export declare class ArrayEditor extends ButtonBasedEditor<any[], ArrayEditor.Info> {
    protected __value: any[];
    /**
     * Create a new array editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: ArrayEditor.Info, value: any): value is any[];
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: ArrayEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: any[] | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): any[];
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
export declare namespace ArrayEditor {
    interface Info extends Editor.Info<any[]> {
        type: 'array';
        items: Editor.EditorInfo;
        minItems?: number;
        maxItems?: number;
        uniqueItems: boolean;
    }
}
import _ArrayEditor = ArrayEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ArrayEditor: typeof _ArrayEditor;
        type ArrayEditor = _ArrayEditor;
        namespace ArrayEditor {
            type Info = _ArrayEditor.Info;
        }
    }
}
//# sourceMappingURL=ArrayEditor.d.ts.map