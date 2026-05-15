import type { EditorFactory } from '../EditorFactory.js';
import { EditorPrompt } from './EditorPrompt.js';
import type { TupleEditor } from '../BaseEditors/TupleEditor.js';
/**
 * Editor prompt for tuples.
 */
export declare class TupleEditorPrompt extends EditorPrompt<any[], TupleEditor.Info> {
    /**
     * Creates a new TupleEditorPrompt instance.
     * @param editorInfo Information about the array editor.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(editorInfo: TupleEditor.Info, factory: EditorFactory);
}
declare const _TupleEditorPrompt: typeof TupleEditorPrompt;
type tTupleEditorPrompt = TupleEditorPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TupleEditorPrompt: typeof _TupleEditorPrompt;
        type TupleEditorPrompt = tTupleEditorPrompt;
    }
}
export {};
//# sourceMappingURL=TupleEditorPrompt.d.ts.map