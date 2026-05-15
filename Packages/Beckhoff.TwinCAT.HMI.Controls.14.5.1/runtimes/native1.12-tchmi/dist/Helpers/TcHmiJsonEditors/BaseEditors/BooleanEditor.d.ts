import { ComboboxBasedEditor } from './ComboboxBasedEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
import { Editor } from './Editor.js';
/**
 * Editor for booleans.
 */
export declare class BooleanEditor extends ComboboxBasedEditor<boolean, BooleanEditor.Info> {
    protected __comboboxTexts: {
        false: string;
        true: string;
    };
    /**
     * Create a new boolean editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: BooleanEditor.Info, factory: EditorFactory);
    /**
     * Validates the given value against the specified editor info.
     * @param _editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(_editorInfo: BooleanEditor.Info, value: any): value is boolean;
    /**
     * Checks the given value for errors against the given editor info.
     * @param _editorInfo The editor info to check against.
     * @param value The value to check.
     * @param _returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(_editorInfo: BooleanEditor.Info, value: any, _returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: boolean | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): boolean | null;
    /**
     * Updates the combobox srcData with current texts.
     */
    protected __updateSrcData(): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
}
export declare namespace BooleanEditor {
    interface Info extends Editor.Info<boolean> {
        type: 'boolean';
    }
    type LocalizableTexts = {
        booleanEditor: Partial<{
            falseText: TcHmi.Localizable;
            trueText: TcHmi.Localizable;
        }>;
    };
}
import _BooleanEditor = BooleanEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let BooleanEditor: typeof _BooleanEditor;
        type BooleanEditor = _BooleanEditor;
        namespace BooleanEditor {
            type Info = _BooleanEditor.Info;
            type LocalizableTexts = _BooleanEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=BooleanEditor.d.ts.map