import type { Editor } from '../BaseEditors/Editor.js';
import type { EditorFactory } from '../EditorFactory.js';
import { OkCancelPrompt } from '../../TcHmiPopups/OkCancelPrompt.js';
/**
 * Base editor prompt.
 */
export declare class EditorPrompt<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends OkCancelPrompt<T> {
    protected __editorPane: Editor<T, I>;
    /**
     * Creates a new EditorPrompt instance.
     * @param editorInfo Information about the array editor.
     * @param editorConstructor The constructor of the editor pane this prompt should host.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(editorInfo: I, editorConstructor: Editor.Constructor<T, I>, factory: EditorFactory);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Sets the header text of the popup.
     * @param text The text to use in the popups header.
     */
    setHeaderText(text: string): void;
    /**
     * Sets the editorInfo.
     * @param editorInfo The editorInfo to set.
     */
    setEditorInfo(editorInfo: I): void;
    /**
     * Set the editors read-only status. A read-only editor will display values, but not allow the user to change
     * them.
     * @param isReadOnly Whether the editor should be in read-only mode or not.
     */
    setIsReadOnly(isReadOnly: boolean): void;
    /**
     * Set settings for this editor and potential sub-editors.
     * @param settings The settings to apply.
     */
    setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
    /**
     * Set a new Value. Returns whether the given value is valid.
     * @param value The value to set.
     */
    setValue(value: T | null): void;
    /**
     * Handler for the change event of the editor pane.
     * @param _editor The editor that changed.
     * @param state The changed editors state.
     */
    protected __onEditorChanged(_editor: Editor<T, I>, state: Editor.State<T>): void;
    /**
     * Handler for the confirm event of the editor pane.
     * @param _editor The editor that was confirmed.
     * @param _state The confirmed editors state.
     */
    protected __onEditorConfirmed(_editor: Editor<T, I>, _state: Editor.ValidState<T>): void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer().
     */
    protected __ok(): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<EditorPrompt.LocalizableTexts<L>>): void;
}
export declare namespace EditorPrompt {
    interface LocalizableTexts<L extends Editor.Localizables = Editor.Localizables> extends OkCancelPrompt.LocalizableTexts {
        editorLocalizations: Partial<L & Editor.LocalizableTexts>;
    }
}
import _EditorPrompt = EditorPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let EditorPrompt: typeof _EditorPrompt;
        type EditorPrompt<T, I extends Editor.EditorInfo = Editor.EditorInfo> = _EditorPrompt<T, I>;
        namespace EditorPrompt {
            type LocalizableTexts<L extends Editor.Localizables = Editor.Localizables> = _EditorPrompt.LocalizableTexts<L>;
        }
    }
}
//# sourceMappingURL=EditorPrompt.d.ts.map