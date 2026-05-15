import type { Editor } from './Editor.js';
import { TextboxBasedEditor } from './TextboxBasedEditor.js';
import type { Control as TcHmiDateTimePicker } from '../../../TcHmiDateTimePicker/TcHmiDateTimePicker.esm.js';
import type { Control as TcHmiTimespanPicker } from '../../../TcHmiTimespanPicker/TcHmiTimespanPicker.esm.js';
import type { Control as TcHmiButton } from '../../../TcHmiButton/TcHmiButton.esm.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor for strings in the date time or timespan format.
 */
export declare class TimeEditor extends TextboxBasedEditor<string, TimeEditor.Info> {
    protected __container: HTMLDivElement;
    protected __dateTimePicker: TcHmiDateTimePicker | undefined;
    protected __dateTimeButton: TcHmiButton | undefined;
    protected __timespanPicker: TcHmiTimespanPicker | undefined;
    protected __timespanButton: TcHmiButton | undefined;
    /**
     * Create a new string editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: TimeEditor.Info, factory: EditorFactory);
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: TimeEditor.Info, value: any): value is string;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: TimeEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Gets the current value.
     */
    getState(): Editor.State<string>;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Update the invalid class and the custom validity of the editor container.
     * @param state The current state of the editor pane, if it's already known. Should be used to avoid a duplicate
     * getState() call, not to pass in a manipulated state.
     */
    protected __updateValidationStatus(state?: Editor.State<string>): boolean;
    /**
     * Process the editors read-only mode.
     */
    protected __processIsReadOnly(): void;
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
     * Creates a DateTimePicker and a Button to open it.
     */
    protected __createDateTimeControls(): void;
    /**
     * Creates a TimespanPicker and a Button to open it.
     */
    protected __createTimespanControls(): void;
    /**
     * Event handler for the value changed event of the datetime picker.
     */
    protected __onDateTimeChanged(): void;
    /**
     * Event handler for the pressed event of the datetime button.
     */
    protected __onDateTimeButtonPressed(): void;
    /**
     * Event handler for the value changed event of the timespan picker.
     */
    protected __onTimespanChanged(): void;
    /**
     * Event handler for the pressed event of the timespan button.
     */
    protected __onTimespanButtonPressed(): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<L & Editor.LocalizableTexts>): void;
    /**
     * Localizes the dateTimeButton
     */
    protected __localizeDateTimeButton(): void;
    /**
     * Localizes the timespanButton
     */
    protected __localizeTimespanButton(): void;
}
export declare namespace TimeEditor {
    interface Info extends Editor.Info<string> {
        type: 'time';
        formats: Set<'date-time' | 'timespan'>;
    }
    type LocalizableTexts = {
        timeEditor: Partial<{
            dateTimeButtonTooltip: TcHmi.Localizable;
            timespanButtonTooltip: TcHmi.Localizable;
        }>;
    };
}
import _TimeEditor = TimeEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TimeEditor: typeof _TimeEditor;
        type TimeEditor = _TimeEditor;
        namespace TimeEditor {
            type Info = _TimeEditor.Info;
            type LocalizableTexts = _TimeEditor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=TimeEditor.d.ts.map