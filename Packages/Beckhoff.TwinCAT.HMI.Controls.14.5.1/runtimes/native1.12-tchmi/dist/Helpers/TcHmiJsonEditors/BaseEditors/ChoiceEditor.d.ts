import { Editor } from './Editor.js';
import type { EditorFactory } from '../EditorFactory.js';
import type { Control as TcHmiCombobox } from '../../../TcHmiCombobox/TcHmiCombobox.esm.js';
/**
 * Editor for types that offer a choice. Usually used for anyOf or oneOf schemas.
 */
export declare class ChoiceEditor extends Editor<any, ChoiceEditor.Info> {
    protected __value: any;
    protected __container: HTMLDivElement;
    protected __combobox: TcHmiCombobox<unknown>;
    protected __editors: Map<Editor.EditorType, {
        editor: Editor<any>;
        container: HTMLDivElement;
    }>;
    protected __activeEditor: {
        editor: Editor<any>;
        container: HTMLDivElement;
    } | null;
    /**
     * Create a new choice editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: ChoiceEditor.Info, factory: EditorFactory);
    /**
     * Create a choice editor info that allows any type.
     * @param ref Can be passed in to be filled out.
     */
    static createAnyEditorInfo(ref?: Editor.Info<any>): ChoiceEditor.Info;
    /**
     * Create a choice editor info that allows any type.
     */
    static getAnyChoices(): Exclude<ChoiceEditor.Info['choices'], undefined>;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: ChoiceEditor.Info, value: any): value is any;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: ChoiceEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Starts editing by opening the drop down of the type selection combobox.
     */
    startEditing(): void;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Handler for the selectionChanged event of the combobox
     */
    protected __onSelectionChanged(): void;
    /**
     * Handler for the change event of the editor.
     * @param editor The editor that changed.
     * @param state The state of the editor that changed.
     */
    protected __onEditorChanged(editor: Editor<any>, state: Editor.State<any>): void;
    /**
     * Handler for the confirm event of the editor.
     * @param _editor The editor that was confirmed.
     * @param state The state of the editor that was confirmed.
     */
    protected __onEditorConfirmed(_editor: Editor<any>, state: Editor.ValidState<any>): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: any | null): void;
    /**
     * Gets the current value.
     */
    getState(): Editor.State<any>;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): any;
    /**
     * Process the editors read-only mode.
     */
    protected __processIsReadOnly(): void;
    /**
     * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
     * object that does not contain settings for a specific editor type will not clear potentially existing settings
     * for that editor type.
     * @param settings The settings to apply.
     */
    setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
}
export declare namespace ChoiceEditor {
    interface Info extends Editor.Info<any> {
        type: 'choice';
        choices?: Exclude<Editor.EditorInfo, Info>[];
    }
    type LocalizableTexts = {
        choiceEditor: Partial<{
            comboboxText: TcHmi.Localizable;
        }>;
    };
}
import _ChoiceEditor = ChoiceEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ChoiceEditor: typeof _ChoiceEditor;
        type ChoiceEditor = _ChoiceEditor;
        namespace ChoiceEditor {
            type Info = _ChoiceEditor.Info;
            type LocalizableTexts = _ChoiceEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=ChoiceEditor.d.ts.map