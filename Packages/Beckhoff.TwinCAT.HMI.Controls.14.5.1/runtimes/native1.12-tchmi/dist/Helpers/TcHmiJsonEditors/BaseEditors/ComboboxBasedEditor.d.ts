import { Editor } from './Editor.js';
import type { EditorFactory } from '../EditorFactory.js';
import type { Control as TcHmiCombobox, ListItemGeneric as TcHmiCombobox_ListItemGeneric } from '../../../TcHmiCombobox/TcHmiCombobox.esm.js';
/**
 * Editor that is based on a combobox like for enums and booleans.
 */
export declare abstract class ComboboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
    protected __combobox: TcHmiCombobox<T, TcHmiCombobox_ListItemGeneric<T>[]>;
    /**
     * Create a new combobox based editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
    /**
     * Starts editing by opening the drop down.
     */
    startEditing(): void;
    /**
     * Event handler for the onSelectionChanged event of the combobox.
     */
    protected __onSelectionChanged(): void;
    /**
     * Process the editors read-only mode.
     */
    protected __processIsReadOnly(): void;
}
declare const _ComboboxBasedEditor: typeof ComboboxBasedEditor;
type tComboboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> = ComboboxBasedEditor<T, I>;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ComboboxBasedEditor: typeof _ComboboxBasedEditor;
        type ComboboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> = tComboboxBasedEditor<T, I>;
    }
}
export {};
//# sourceMappingURL=ComboboxBasedEditor.d.ts.map