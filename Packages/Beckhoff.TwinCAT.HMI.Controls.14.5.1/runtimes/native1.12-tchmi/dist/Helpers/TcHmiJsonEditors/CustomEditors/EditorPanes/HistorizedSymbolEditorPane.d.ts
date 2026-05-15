import { Editor } from '../../BaseEditors/Editor.js';
import type { HistorizedSymbolEditor } from '../HistorizedSymbolEditor.js';
import type { StringEditor } from '../../BaseEditors/StringEditor.js';
import type { EditorFactory } from '../../EditorFactory.js';
/**
 * Editor pane for historized symbols.
 */
export declare class HistorizedSymbolEditorPane extends Editor<string, StringEditor.Info> {
    #private;
    protected __value: string;
    protected __tableHeaders: {
        name: HTMLTableCellElement;
        dataType: HTMLTableCellElement;
        recording: HTMLTableCellElement;
        interval: HTMLTableCellElement;
        maxEntries: HTMLTableCellElement;
    };
    protected __tableBody: HTMLTableSectionElement;
    protected __historizedSymbols: TcHmi.Symbol<HistorizedSymbolEditorPane.HistorizedSymbolList> | null;
    protected __destroyWatch: TcHmi.DestroyFunction | null;
    protected __localizations: Partial<Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts> | undefined;
    protected __settings: Partial<Editor.Settings & HistorizedSymbolEditor.Settings>;
    protected __localizedCells: {
        yes: {
            text: string;
            elements: Set<HTMLTableCellElement>;
        };
        no: {
            text: string;
            elements: Set<HTMLTableCellElement>;
        };
    };
    /**
     * Create a new historized symbol editor pane.
     * @param element The element to contain the editor pane.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Sets a new Value.
     * @param value The value to set.
     */
    setValue(value: string | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): string;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Process the editors read-only mode.
     */
    protected __processIsReadOnly(): void;
    /**
     * Callback method that handles the symbol watch of the list of historized symbols.
     * @param data The data returned be the watch.
     */
    protected __onHistorizedSymbolsWatch(data: TcHmi.Symbol.IServerWatchResultObject<HistorizedSymbolEditorPane.HistorizedSymbolList>): void;
    /**
     * Event handler for the click event of table rows.
     * @param event The event to handle.
     */
    protected __onRowClick(event: MouseEvent): void;
    /**
     * Event handler for the double click event of table rows.
     * @param event The event to handle.
     */
    protected __onRowDoubleClick(event: MouseEvent): void;
    /**
     * Selects the given row.
     * @param row The row to select.
     */
    protected __select(row: HTMLTableRowElement | null): void;
    /**
     * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
     * object that does not contain settings for a specific editor type will not clear potentially existing settings
     * for that editor type.
     * @param settings The settings to apply.
     */
    setSettings<S extends Editor.Settings>(settings: Partial<S & Editor.EditorSettings & HistorizedSymbolEditor.Settings>): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts>): void;
}
export declare namespace HistorizedSymbolEditorPane {
    type HistorizedSymbolList = TcHmi.Dictionary<{
        interval: string;
        maxEntries: number;
        recordingEnabled: boolean;
        rowLimit: number;
    }>;
}
import _HistorizedSymbolEditorPane = HistorizedSymbolEditorPane;
declare global {
    namespace TcHmi.Controls.Helpers {
        let HistorizedSymbolEditorPane: typeof _HistorizedSymbolEditorPane;
        type HistorizedSymbolEditorPane = _HistorizedSymbolEditorPane;
        namespace HistorizedSymbolEditorPane {
            type HistorizedSymbolList = _HistorizedSymbolEditorPane.HistorizedSymbolList;
        }
    }
}
//# sourceMappingURL=HistorizedSymbolEditorPane.d.ts.map