import { EditorPrompt } from './EditorPrompt.js';
import type { ObjectEditor } from '../BaseEditors/ObjectEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor prompt for objects.
 */
export declare class ObjectEditorPrompt extends EditorPrompt<object, ObjectEditor.Info> {
    /**
     * Creates a new ObjectEditorPrompt instance.
     * @param editorInfo Information about the object editor.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(editorInfo: ObjectEditor.Info, factory: EditorFactory);
}
declare const _ObjectEditorPrompt: typeof ObjectEditorPrompt;
type tObjectEditorPrompt = ObjectEditorPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ObjectEditorPrompt: typeof _ObjectEditorPrompt;
        type ObjectEditorPrompt = tObjectEditorPrompt;
    }
}
export {};
//# sourceMappingURL=ObjectEditorPrompt.d.ts.map