import { Editor } from './Editor.js';
import type { Control as TcHmiButton } from '../../../TcHmiButton/TcHmiButton.esm.js';
import type { EditorPrompt } from '../Popups/EditorPrompt.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor that is based on a button to open a popup for complex datatypes.
 */
export declare abstract class ButtonBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> extends Editor<T, I> {
    protected __container: HTMLDivElement;
    protected __textSpan: HTMLSpanElement;
    protected __button: TcHmiButton;
    protected __popup?: EditorPrompt<T, I>;
    /**
     * Create a new button based editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: I, factory: EditorFactory);
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Event handler for the onPressed event of the button.
     */
    protected __onPressed(): void;
    /**
     * Starts editing by opening the popup.
     */
    startEditing(): void;
    /**
     * Opens the popup for the editor.
     */
    protected abstract openPopup(): Promise<void>;
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
    setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
}
export declare namespace ButtonBasedEditor {
    type LocalizableTexts = {
        buttonBasedEditor: Partial<{
            buttonTooltip: TcHmi.Localizable;
        }>;
    };
}
import _ButtonBasedEditor = ButtonBasedEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ButtonBasedEditor: typeof _ButtonBasedEditor;
        type ButtonBasedEditor<T, I extends Editor.EditorInfo = Editor.EditorInfo> = _ButtonBasedEditor<T, I>;
        namespace ButtonBasedEditor {
            type LocalizableTexts = _ButtonBasedEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=ButtonBasedEditor.d.ts.map