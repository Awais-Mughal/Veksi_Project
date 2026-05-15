import { Editor } from './Editor.js';
import type { Control as TcHmiCheckbox } from '../../../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor for optional properties of objects of optional items of tuples.
 */
export declare class OptionalEditor<T> extends Editor<T | undefined, OptionalEditor.Info<T>> {
    protected __container: HTMLDivElement;
    protected __editor: Editor<T>;
    protected __checkbox: TcHmiCheckbox;
    protected __enteredValue: T | null;
    /**
     * Create a new optional editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: OptionalEditor.Info<T>, factory: EditorFactory);
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Sets the editorInfo.
     * @param editorInfo The editorInfo to set.
     */
    setEditorInfo(editorInfo: OptionalEditor.Info<T>): void;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
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
     * Handler for the toggleStateChanged event of the checkbox
     */
    protected __onToggleStateChanged(): void;
    /**
     * Handler for the change event of the editor.
     * @param _editor The editor that changed.
     * @param state The state of the editor that changed.
     */
    protected __onEditorChanged(_editor: Editor<T>, state: Editor.State<T>): void;
    /**
     * Handler for the confirm event of the editor.
     * @param _editor The editor that was confirmed.
     * @param state The state of the editor that was confirmed.
     */
    protected __onEditorConfirmed(_editor: Editor<T>, state: Editor.ValidState<T>): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate<T = any>(editorInfo: OptionalEditor.Info<T>, value: any): value is T;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors<T = any>(editorInfo: OptionalEditor.Info<T>, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: T | null | undefined): void;
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
export declare namespace OptionalEditor {
    interface Info<T> extends Editor.Info<T> {
        type: 'optional';
        editorInfo: Exclude<Editor.EditorInfo, Info<T>>;
        temporarilyRequired: boolean;
        valueIfDisabled?: T;
    }
    type LocalizableTexts = {
        optionalEditor: Partial<{
            optionalCheckboxTooltip: TcHmi.Localizable;
        }>;
    };
}
import _OptionalEditor = OptionalEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let OptionalEditor: typeof _OptionalEditor;
        type OptionalEditor<T> = _OptionalEditor<T>;
        namespace OptionalEditor {
            type Info<T> = _OptionalEditor.Info<T>;
            type LocalizableTexts = _OptionalEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=OptionalEditor.d.ts.map