import { ButtonBasedEditor } from '../BaseEditors/ButtonBasedEditor.js';
import type { Editor } from '../BaseEditors/Editor.js';
import { StringEditor } from '../BaseEditors/StringEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor for historized symbols.
 */
export declare class HistorizedSymbolEditor extends ButtonBasedEditor<string, StringEditor.Info> {
    #private;
    protected __value: string;
    protected __stringEditor: StringEditor;
    protected __popupHeader: string;
    protected __settings: Partial<Editor.Settings & HistorizedSymbolEditor.Settings>;
    protected __localizations: Partial<Editor.LocalizableTexts & HistorizedSymbolEditor.LocalizableTexts> | undefined;
    /**
     * Create a new historized symbol editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: StringEditor.Info, factory: EditorFactory);
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Opens the popup for the editor.
     */
    protected openPopup(): Promise<void>;
    /**
     * Set a new Value.
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
export declare namespace HistorizedSymbolEditor {
    type LocalizableTexts = {
        historizedSymbolEditor: Partial<{
            promptHeader: TcHmi.Localizable;
            nameColumnHeader: TcHmi.Localizable;
            dataTypeColumnHeader: TcHmi.Localizable;
            recordingColumnHeader: TcHmi.Localizable;
            intervalColumnHeader: TcHmi.Localizable;
            maxEntriesColumnHeader: TcHmi.Localizable;
            yesText: TcHmi.Localizable;
            noText: TcHmi.Localizable;
        }>;
    };
    type Settings = {
        historizedSymbolEditor: Partial<{
            domain: string;
        }>;
    };
}
import _HistorizedSymbolEditor = HistorizedSymbolEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let HistorizedSymbolEditor: typeof _HistorizedSymbolEditor;
        type HistorizedSymbolEditor = _HistorizedSymbolEditor;
        namespace HistorizedSymbolEditor {
            type LocalizableTexts = _HistorizedSymbolEditor.LocalizableTexts;
            type Settings = _HistorizedSymbolEditor.Settings;
        }
    }
}
//# sourceMappingURL=HistorizedSymbolEditor.d.ts.map