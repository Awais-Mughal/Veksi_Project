import type { EditorFactory } from '../../EditorFactory.js';
import type { TupleEditor } from '../TupleEditor.js';
import type { Editor } from '../Editor.js';
import { ArrayBasedEditorPane } from './ArrayBasedEditorPane.js';
/**
 * Editor pane for tuples.
 */
export declare class TupleEditorPane extends ArrayBasedEditorPane<TupleEditor.Info> {
    /**
     * Create a new tuple editor pane.
     * @param element The element to contain the editor pane.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: TupleEditor.Info, factory: EditorFactory);
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
     * Marks optional editors as temporarily required.
     */
    protected __markRequired(): void;
    /**
     * Handles the change events of the editors.
     * @param editor The editor that was changed.
     */
    protected __handleOnEditorChanged(editor: Editor<any>): void;
    /**
     * Adds a new table row with an editor for a new item
     */
    protected __addItem(): void;
    /**
     * Remove a row.
     * @param editorEntry The entry describing the row to remove.
     */
    protected __removeEditorRow(editorEntry: ArrayBasedEditorPane.EditorEntry): void;
    /**
     * Disables or enables the up and down buttons depending on the index of the selected item.
     * @param selectedIndex The index of the selected item.
     */
    protected __updateMoveButtons(selectedIndex: number): void;
}
declare const _TupleEditorPane: typeof TupleEditorPane;
type tTupleEditorPane = TupleEditorPane;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TupleEditorPane: typeof _TupleEditorPane;
        type TupleEditorPane = tTupleEditorPane;
    }
}
export {};
//# sourceMappingURL=TupleEditorPane.d.ts.map