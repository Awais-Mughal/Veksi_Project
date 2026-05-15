import { Editor } from '../Editor.js';
import type { EditorFactory } from '../../EditorFactory.js';
import type { ArrayEditor } from '../ArrayEditor.js';
import type { TupleEditor } from '../TupleEditor.js';
import type { Control as TcHmiButton } from '../../../../TcHmiButton/TcHmiButton.esm.js';
/**
 * Editor Pane for arrays or tuples.
 */
export declare abstract class ArrayBasedEditorPane<I extends ArrayEditor.Info | TupleEditor.Info> extends Editor<any[], I> {
    protected __editorTable: HTMLTableElement;
    protected __addItemButton: TcHmiButton;
    protected __upButton: TcHmiButton;
    protected __downButton: TcHmiButton;
    protected __removeButtonTooltip: string;
    protected __errorContainer: HTMLDivElement;
    protected __editors: ArrayBasedEditorPane.EditorEntry[];
    protected __selectedEditorEntry: ArrayBasedEditorPane.EditorEntry | null;
    protected __pauseChangeHandlers: boolean;
    /**
     * Create a new array based editor pane.
     * @param element The element to contain the editor pane.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): any[];
    /**
     * Creates a table row for the given editor info.
     * @param editorInfo Info about the editor in the row.
     * @param removable Set to false if you don't want the editor row to be removable.
     */
    protected __createEditorRow(editorInfo: Editor.EditorInfo, removable?: boolean): ArrayBasedEditorPane.EditorEntry;
    /**
     * Handler for the change events of the editors.
     * @param editor The editor that changed.
     */
    protected __onEditorChanged(editor: Editor<any, Editor.EditorInfo>): void;
    /**
     * Handles the change events of the editors.
     * @param _editor The editor that changed.
     */
    protected __handleOnEditorChanged(_editor: Editor<any, Editor.EditorInfo>): void;
    /**
     * Creates a handler callback for the pressed event of a remove button.
     * @param entry The entry describing the row to remove.
     */
    protected __getRemoveButtonPressedHandler(entry: ArrayBasedEditorPane.EditorEntry): () => void;
    /**
     * Remove a row.
     * @param editorEntry The entry describing the row to remove.
     */
    protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
    /**
     * Mark the row element of the given editor entry as selected and set this.__selectedEditorEntry.
     * @param editorEntry The editor entry to select. Pass null to reset the selection.
     */
    protected __selectItem(editorEntry: ArrayBasedEditorPane.EditorEntry | null): void;
    /**
     * Disables or enables the up and down buttons depending on the index of the selected item.
     * @param selectedIndex The index of the selected item.
     */
    protected __updateMoveButtons(selectedIndex: number): void;
    /**
     * Handler for the click event of the editor element.
     * @param event The event object.
     */
    protected __onClick(event: MouseEvent): void;
    /**
     * Handler for the pressed event of the add item button.
     */
    protected __onAddItemPressed(): void;
    /**
     * Adds a new table row with an editor for a new item
     */
    protected abstract __addItem(): void;
    /**
     * Handler for the pressed event of the up button.
     */
    protected __onUpPressed(): void;
    /**
     * Handler for the pressed event of the down button.
     */
    protected __onDownPressed(): void;
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
export declare namespace ArrayBasedEditorPane {
    interface EditorEntry {
        editor: Editor<any>;
        row: HTMLTableRowElement;
        cell: HTMLTableCellElement;
        removeButton?: TcHmiButton;
        removeDestroyer?: TcHmi.DestroyFunction;
    }
    type LocalizableTexts = {
        arrayBasedEditorPane: Partial<{
            addButtonTooltip: TcHmi.Localizable;
            upButtonTooltip: TcHmi.Localizable;
            downButtonTooltip: TcHmi.Localizable;
            removeButtonTooltip: TcHmi.Localizable;
        }>;
    };
}
import _ArrayBasedEditorPane = ArrayBasedEditorPane;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ArrayBasedEditorPane: typeof _ArrayBasedEditorPane;
        type ArrayBasedEditorPane<I extends ArrayEditor.Info | TupleEditor.Info> = _ArrayBasedEditorPane<I>;
        namespace ArrayBasedEditorPane {
            type EditorEntry = _ArrayBasedEditorPane.EditorEntry;
            type LocalizableTexts = _ArrayBasedEditorPane.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=ArrayBasedEditorPane.d.ts.map