import { ObjectEditor } from '../ObjectEditor.js';
import { Editor } from '../Editor.js';
import type { Control as TcHmiInput } from '../../../../TcHmiInput/TcHmiInput.esm.js';
import type { Control as TcHmiButton } from '../../../../TcHmiButton/TcHmiButton.esm.js';
import type { EditorFactory } from '../../EditorFactory.js';
/**
 * Editor pane for objects.
 */
export declare class ObjectEditorPane extends Editor<object, ObjectEditor.Info> {
    protected __editorTable: HTMLTableElement;
    protected __newPropertyContainer: HTMLDivElement;
    protected __newPropertyTextbox: TcHmiInput;
    protected __acceptNewPropertyButton: TcHmiButton;
    protected __cancelNewPropertyButton: TcHmiButton;
    protected __addPropertyButton: TcHmiButton;
    protected __removeButtonTooltip: string;
    protected __errorContainer: HTMLDivElement;
    protected __editors: Map<string, _ObjectEditorPane.EditorEntry>;
    protected __dependencyOverride: ObjectEditor.Info;
    protected __pauseChangeHandlers: boolean;
    /**
     * Create a new object editor pane.
     * @param element The element to contain the editor pane.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: ObjectEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: TcHmi.Dictionary<any> | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): TcHmi.Dictionary<any>;
    /**
     * Determines which dependencies should be applied and changes the editors accordingly.
     */
    protected __applyDependencies(): void;
    /**
     * Creates a table row for the given editor info.
     * @param name The name of the property the row should edit.
     * @param editorInfo Info about the editor in the row.
     * @param isAdditional Whether the row describes an additional property that can be removed.
     */
    protected __createEditorRow(name: string, editorInfo: Editor.EditorInfo, isAdditional: boolean): _ObjectEditorPane.EditorEntry;
    /**
     * Handler for the change events of the editors.
     * @param editor The editor that changed.
     */
    protected __onEditorChanged(editor: Editor<any>): void;
    /**
     * Creates a handler callback for the pressed event of a remove button.
     * @param name The name of the row to remove.
     */
    protected __getRemoveButtonPressedHandler(name: string): () => void;
    /**
     * Remove a row.
     * @param name The name of the row to remove.
     */
    protected __removeEditorRow(name: string): void;
    /**
     * Handler for the pressed event of the add property button.
     */
    protected __onAddPropertyPressed(): void;
    /**
     * Handler for the text changed event of the new property textbox.
     */
    protected __onNewPropertyTextChanged(): void;
    /**
     * Handler for the pressed event of the accept new property button.
     */
    protected __onAcceptNewPropertyPressed(): void;
    /**
     * Handler for the pressed event of the cancel new property button.
     */
    protected __onCancelNewPropertyPressed(): void;
    /**
     * Clear the new property textbox, hide the new property container and show the add property button.
     */
    protected __cancelNewProperty(): void;
    /**
     * Event handler for the onLocaleChanged event.
     */
    protected __onLocaleChanged(): void;
    /**
     * Update the validation message.
     * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
     * getState() call, not to pass in a manipulated state.
     */
    protected __updateValidationStatus(state?: Editor.State<any>): boolean;
    /**
     * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
     * @param isEnabled Whether the editor should be enabled or disabled.
     */
    setIsEnabled(isEnabled: boolean): void;
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
export declare namespace ObjectEditorPane {
    interface EditorEntry {
        editor: Editor<any>;
        row: HTMLTableRowElement;
        cell: HTMLTableCellElement;
        removeButton?: TcHmiButton;
        additionalDestroyer?: TcHmi.DestroyFunction;
    }
    type LocalizableTexts = {
        objectEditorPane: Partial<{
            addButtonTooltip: TcHmi.Localizable;
            acceptButtonText: TcHmi.Localizable;
            acceptButtonTooltip: TcHmi.Localizable;
            cancelButtonTooltip: TcHmi.Localizable;
            removeButtonTooltip: TcHmi.Localizable;
        }>;
    };
}
import _ObjectEditorPane = ObjectEditorPane;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ObjectEditorPane: typeof _ObjectEditorPane;
        type ObjectEditorPane = _ObjectEditorPane;
        namespace ObjectEditorPane {
            type EditorEntry = _ObjectEditorPane.EditorEntry;
            type LocalizableTexts = _ObjectEditorPane.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=ObjectEditorPane.d.ts.map