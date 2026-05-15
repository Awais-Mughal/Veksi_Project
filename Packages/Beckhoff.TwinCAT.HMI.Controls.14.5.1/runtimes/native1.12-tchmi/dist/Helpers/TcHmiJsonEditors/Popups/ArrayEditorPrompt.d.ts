import { EditorPrompt } from './EditorPrompt.js';
import type { ArrayEditor } from '../BaseEditors/ArrayEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor prompt for arrays.
 */
export declare class ArrayEditorPrompt extends EditorPrompt<any[], ArrayEditor.Info> {
    /**
     * Creates a new ArrayEditorPrompt instance.
     * @param editorInfo Information about the array editor.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(editorInfo: ArrayEditor.Info, factory: EditorFactory);
}
declare const _ArrayEditorPrompt: typeof ArrayEditorPrompt;
type tArrayEditorPrompt = ArrayEditorPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ArrayEditorPrompt: typeof _ArrayEditorPrompt;
        type ArrayEditorPrompt = tArrayEditorPrompt;
    }
}
export {};
//# sourceMappingURL=ArrayEditorPrompt.d.ts.map