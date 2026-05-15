import { ArrayBasedEditorPane } from './ArrayBasedEditorPane.js';
import type { ArrayEditor } from '../ArrayEditor.js';
import type { EditorFactory } from '../../EditorFactory.js';
/**
 * Editor Pane for arrays.
 */
export declare class ArrayEditorPane extends ArrayBasedEditorPane<ArrayEditor.Info> {
    /**
     * Create a new array editor pane.
     * @param element The element to contain the editor pane.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: ArrayEditor.Info, factory: EditorFactory);
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
     * Adds a new table row with an editor for a new item
     */
    protected __addItem(): void;
}
declare const _ArrayEditorPane: typeof ArrayEditorPane;
type tArrayEditorPane = ArrayEditorPane;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ArrayEditorPane: typeof _ArrayEditorPane;
        type ArrayEditorPane = tArrayEditorPane;
    }
}
export {};
//# sourceMappingURL=ArrayEditorPane.d.ts.map