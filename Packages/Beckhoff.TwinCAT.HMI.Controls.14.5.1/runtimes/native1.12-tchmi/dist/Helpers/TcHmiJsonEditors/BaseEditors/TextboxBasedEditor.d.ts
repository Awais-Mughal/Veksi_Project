import { Editor } from './Editor.js';
import type { Control as TcHmiInput } from '../../../TcHmiInput/TcHmiInput.esm.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor that is based on a textbox, like for strings and numbers.
 */
export declare abstract class TextboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
    protected __textbox: TcHmiInput;
    protected __settings: Partial<Editor.Settings & TextboxBasedEditor.Settings>;
    /**
     * Create a new textbox based editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
    /**
     * Starts editing by setting the focus on the html textbox element.
     */
    startEditing(): void;
    /**
     * DEPRECATED
     * Please use setSettings
     * @param valueNew The new value for autoSelectText.
     * @deprecated Please use setSettings
     */
    setAutoSelectText(valueNew: boolean): void;
    /**
     * DEPRECATED
     * Please use getSettings
     * @deprecated Please use getSettings
     */
    getAutoSelectText(): boolean | undefined;
    /**
     * Event handler for the onTextChanged event of the textbox.
     */
    protected __onTextChanged(): void;
    /**
     * Event handler for the keydown event of the textboxes element.
     * @param event The event that should be handled.
     */
    protected __onKeydown(event: KeyboardEvent): void;
    /**
     * Event handler for the onLocaleChanged event.
     */
    protected __onLocaleChanged(): void;
    /**
     * Update the invalid class and the custom validity of the textbox.
     * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
     * getState() call, not to pass in a manipulated state.
     */
    protected __updateValidationStatus(state?: Editor.State<any>): boolean;
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
    setSettings<S extends Editor.Settings>(settings: Partial<S & TextboxBasedEditor.Settings>): void;
}
export declare namespace TextboxBasedEditor {
    type Settings = {
        textboxBasedEditor: Partial<{
            autoSelectText: boolean;
            autoFocusOut: boolean;
        }>;
    };
}
import _TextboxBasedEditor = TextboxBasedEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TextboxBasedEditor: typeof _TextboxBasedEditor;
        type TextboxBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> = _TextboxBasedEditor<T, I>;
        namespace TextboxBasedEditor {
            type Settings = _TextboxBasedEditor.Settings;
        }
    }
}
//# sourceMappingURL=TextboxBasedEditor.d.ts.map