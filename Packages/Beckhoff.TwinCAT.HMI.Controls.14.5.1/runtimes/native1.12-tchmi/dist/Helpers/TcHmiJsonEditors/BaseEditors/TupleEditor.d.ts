import { ButtonBasedEditor } from './ButtonBasedEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
import { Editor } from './Editor.js';
/**
 * Editor for tuples.
 */
export declare class TupleEditor extends ButtonBasedEditor<any[], TupleEditor.Info> {
    protected __value: any[];
    /**
     * Create a new array editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: TupleEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: TupleEditor.Info, value: any): value is any[];
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: TupleEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
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
export declare namespace TupleEditor {
    interface Info extends Editor.Info<any[]> {
        type: 'tuple';
        items: Editor.EditorInfo[];
        additionalItems: {
            allowed: boolean;
            editorInfo?: Editor.EditorInfo;
        };
        minItems?: number;
        maxItems?: number;
        uniqueItems: boolean;
    }
}
import _TupleEditor = TupleEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TupleEditor: typeof _TupleEditor;
        type TupleEditor = _TupleEditor;
        namespace TupleEditor {
            type Info = _TupleEditor.Info;
        }
    }
}
//# sourceMappingURL=TupleEditor.d.ts.map