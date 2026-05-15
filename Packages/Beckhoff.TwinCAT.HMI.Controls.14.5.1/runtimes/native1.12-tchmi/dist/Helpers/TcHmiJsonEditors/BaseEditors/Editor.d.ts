import { Callback, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { ButtonBasedEditor } from '../BaseEditors/ButtonBasedEditor.js';
import type { BooleanEditor } from '../BaseEditors/BooleanEditor.js';
import type { NumberEditor } from '../BaseEditors/NumberEditor.js';
import type { StringEditor } from '../BaseEditors/StringEditor.js';
import type { TimeEditor } from '../BaseEditors/TimeEditor.js';
import type { EnumEditor } from '../BaseEditors/EnumEditor.js';
import type { ObjectEditor } from '../BaseEditors/ObjectEditor.js';
import type { ArrayEditor } from '../BaseEditors/ArrayEditor.js';
import type { TupleEditor } from '../BaseEditors/TupleEditor.js';
import type { OptionalEditor } from '../BaseEditors/OptionalEditor.js';
import type { ChoiceEditor } from '../BaseEditors/ChoiceEditor.js';
import type { NullEditor } from '../BaseEditors/NullEditor.js';
import type { InvalidEditor } from '../BaseEditors/InvalidEditor.js';
import type { ArrayBasedEditorPane } from '../BaseEditors/EditorPanes/ArrayBasedEditorPane.js';
import type { ObjectEditorPane } from '../BaseEditors/EditorPanes/ObjectEditorPane.js';
import { EditorFactory } from '../EditorFactory.js';
import type { EditorPrompt } from '../Popups/EditorPrompt.js';
import type { TextboxBasedEditor } from '../BaseEditors/TextboxBasedEditor.js';
/**
 * Base editor class.
 */
export declare abstract class Editor<T, I extends Editor.EditorInfo = Editor.EditorInfo> {
    #private;
    protected __element: HTMLElement;
    protected __editorInfo: I;
    protected __factory: EditorFactory;
    protected __parentControl: TcHmiControl.Control | null;
    protected __name: string;
    protected readonly __className = "TcHmi_Controls_Helpers_Editor";
    protected __childControls: Set<TcHmi.Controls.System.TcHmiControl>;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __isEnabled: boolean;
    protected __visibility: 'Visible' | 'Hidden' | 'Collapsed';
    protected __isReadOnly: boolean;
    protected __settings: Partial<Editor.Settings>;
    protected __localizations: Partial<Editor.LocalizableTexts & Editor.Localizables> | undefined;
    protected __localizationSymbols: Map<string, {
        symbol: TcHmi.Symbol<string>;
        destroyWatch: TcHmi.DestroyFunction;
    }>;
    protected readonly __onChangeManager: Callback.Collection<(editor: Editor<T, I>, state: Editor.State<T>) => void>;
    readonly onChange: Readonly<{
        add: (callback: (editor: Editor<T, I>, state: Editor.State<T>) => void) => () => void;
        remove: (callback: (editor: Editor<T, I>, state: Editor.State<T>) => void) => void;
    }>;
    protected readonly __onConfirmManager: Callback.Collection<(editor: Editor<T, I>, state: Editor.ValidState<T>) => void>;
    readonly onConfirm: Readonly<{
        add: (callback: (editor: Editor<T, I>, state: Editor.ValidState<T>) => void) => () => void;
        remove: (callback: (editor: Editor<T, I>, state: Editor.ValidState<T>) => void) => void;
    }>;
    /**
     * Create a new editor.
     * @param __element The element to contain the editor.
     * @param __editorInfo An object containing information about the editor and the type of value to edit.
     * @param __factory An editor factory that will be used to create sub-editors.
     */
    constructor(__element: HTMLElement, __editorInfo: I, __factory: EditorFactory);
    /**
     * Create a new editor for the given editor info.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param parentControl The control owning the editor.
     * @param localizations A collection of localization symbols to display texts in the editor.
     */
    static create(element: HTMLElement, editorInfo: Editor.EditorInfo, parentControl?: TcHmiControl.Control | null, localizations?: Partial<Editor.LocalizableTexts>): Editor<any, _Editor.EditorInfo>;
    /**
     * Calls all event destroyers.
     */
    destroy(): void;
    /**
     * Sets the editorInfo.
     * @param editorInfo The editorInfo to set.
     */
    setEditorInfo(editorInfo: I): void;
    /**
     * Gets the editor info.
     */
    getEditorInfo(): I;
    /**
     * Processes the current editor info.
     */
    protected abstract __processEditorInfo(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    abstract setValue(value: T | null): void;
    /**
     * Gets the current value.
     */
    getState(): Editor.State<T>;
    /**
     * Gets the current raw value of the editor. This value might be invalid. To get the final actual value, always use getState.
     */
    abstract getRawValue(): any;
    /**
     * Prepares the editor so that the user can immediately start editing,
     * for example by focusing a textbox or opening a combobox.
     */
    startEditing?(): void;
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: Editor.EditorInfo, value: any): boolean;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: Editor.EditorInfo, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
     * @param isEnabled Whether the editor should be enabled or disabled.
     */
    setIsEnabled(isEnabled: boolean): void;
    /**
     * Get whether the editor is enabled or disabled.
     */
    getIsEnabled(): boolean;
    /**
     * Define the editor visibility.
     * @param visibility Visibility
     */
    setVisibility(visibility: 'Visible' | 'Hidden' | 'Collapsed'): void;
    /**
     * Get editor visibility
     */
    getVisibility(): "Visible" | "Hidden" | "Collapsed";
    /**
     * Set the editors read-only status. A read-only editor will display values, but not allow the user to change
     * them.
     * @param isReadOnly Whether the editor should be in read-only mode or not.
     */
    setIsReadOnly(isReadOnly: boolean): void;
    /**
     * Get whether the editor is in read-only mode.
     */
    getIsReadOnly(): boolean;
    /**
     * Set settings for this editor and potential sub-editors. Settings are organized by editor type. Passing in an
     * object that does not contain settings for a specific editor type will not clear potentially existing settings
     * for that editor type.
     * @param settings The settings to apply.
     */
    setSettings<S extends Editor.Settings>(settings: Partial<Editor.EditorSettings & S>): void;
    /**
     * Get the current editor settings.
     */
    getSettings<S extends Editor.Settings = Editor.Settings>(): Partial<Editor.EditorSettings & S>;
    /**
     * Process the editors read-only mode.
     */
    protected abstract __processIsReadOnly(): void;
    /**
     * Builds an error message from the validation errors in an editor state.
     * @param state The state to build the message from.
     * @param maxDepth The maximum depth of errors that should be included in the message.
     */
    protected __buildValidationMessage(state: Editor.State<T>, maxDepth?: number): string;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations<L extends Editor.Localizables = Editor.Localizables>(texts: Partial<Editor.LocalizableTexts & L>): void;
    /**
     * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
     * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
     * @param localization The localization to watch.
     * @param onChange The callback that is called with the localized and formatted text as a parameter.
     */
    protected __watchLocalization(name: string, localization: TcHmi.FormattedLocalizable, onChange: (localizedText: string) => void): void;
    /**
     * Destroys the localization watch with the given name, if it exists.
     * @param name The name that was used with __watchLoclalization to start watching the symbol.
     */
    protected __unwatchLocalization(name: string): void;
}
export declare namespace Editor {
    type Constructor<T, I extends EditorInfo = EditorInfo> = new (element: HTMLElement, editorInfo: I, factory: EditorFactory) => Editor<T, I>;
    type GenericConstructor<E extends Editor<T, I>, T, I extends EditorInfo = EditorInfo> = new (element: HTMLElement, editorInfo: I, factory: EditorFactory) => E;
    interface Info<T> {
        type: EditorType;
        schema: TcHmi.JsonSchema;
        name: string;
        defaultValue?: T;
    }
    type EditorType = 'boolean' | 'number' | 'string' | 'time' | 'enum' | 'object' | 'array' | 'tuple' | 'optional' | 'choice' | 'null' | 'invalid';
    type EditorInfo = BooleanEditor.Info | NumberEditor.Info | StringEditor.Info | TimeEditor.Info | EnumEditor.Info | ObjectEditor.Info | ArrayEditor.Info | TupleEditor.Info | OptionalEditor.Info<unknown> | ChoiceEditor.Info | NullEditor.Info | InvalidEditor.Info;
    type State<T> = InvalidState | ValidState<T>;
    interface InvalidState {
        isValid: false;
        errors?: ErrorDetail[];
    }
    interface ValidState<T> {
        isValid: true;
        value: T;
    }
    enum Error {
        ERROR = 1,
        RESTRICTION_ERROR = 10,
        FAILS_ALL_RESTRICTIONS = 11,
        FAILS_THIS_RESTRICTION = 12,
        TYPE_ERROR = 20,
        NOT_A_BOOLEAN = 21,
        NOT_A_NUMBER = 22,
        NOT_A_STRING = 23,
        NOT_AN_OBJECT = 24,
        NOT_AN_ARRAY = 25,
        NOT_NULL = 26,
        BOOLEAN_ERROR = 40,
        NUMBER_ERROR = 60,
        NUMBER_TOO_SMALL = 61,
        NUMBER_TOO_BIG = 62,
        NUMBER_NOT_MULTIPLE_OF = 63,
        NUMBER_NOT_INTEGER = 64,
        NUMBER_NOT_FINITE = 65,
        STRING_ERROR = 80,
        STRING_TOO_SHORT = 81,
        STRING_TOO_LONG = 82,
        STRING_DOES_NOT_MATCH = 83,
        STRING_NOT_DATE_TIME = 84,
        STRING_NOT_TIMESPAN = 85,
        STRING_NOT_EMAIL = 86,
        STRING_NOT_HOSTNAME = 87,
        STRING_NOT_IPV4 = 88,
        STRING_NOT_IPV6 = 89,
        STRING_NOT_URI = 90,
        OBJECT_ERROR = 100,
        OBJECT_HAS_TOO_FEW_PROPERTIES = 101,
        OBJECT_HAS_TOO_MANY_PROPERTIES = 102,
        OBJECT_IS_MISSING_PROPERTY = 103,
        OBJECT_CONTAINS_INVALID_PROPERTY_NAME = 104,
        OBJECT_CONTAINS_INVALID_VALUE = 105,
        OBJECT_HAS_INVALID_PROTOTYPE = 106,
        OBJECT_HAS_INVALID_DEPENDENCY = 107,
        ARRAY_ERROR = 120,
        ARRAY_HAS_TOO_FEW_ITEMS = 121,
        ARRAY_HAS_TOO_MANY_ITEMS = 122,
        ARRAY_CONTAINS_INVALID_VALUE = 123,
        ARRAY_CONTAINS_DUPLICATE_ITEMS = 124,
        ARRAY_HAS_INVALID_PROTOTYPE = 125,
        TUPLE_ERROR = 140,
        ENUM_ERROR = 160,
        ENUM_VALUE_NOT_A_MEMBER = 161,
        OPTIONAL_ERROR = 180,
        OPTIONAL_TEMPORARILY_REQUIRED = 181,
        CHOICE_ERROR = 200,
        DOES_NOT_FIT_ANY_CHOICE = 201,
        DOES_NOT_FIT_THIS_CHOICE = 202
    }
    interface ErrorDetail {
        error: Error;
        parameters?: any[];
        underlying?: ErrorDetail[];
    }
    interface Settings {
        [editor: string]: Record<string, any>;
    }
    /**
     * Intersection type of all editor-specific settings for base editors.
     */
    type EditorSettings = TextboxBasedEditor.Settings;
    interface Localizables {
        [editor: string]: Record<string, TcHmi.Localizable>;
    }
    /**
     * Intersection type of all editor-specific localizables.
     */
    type LocalizableTexts = {
        /**
         * Localizable texts for error messages when validation of a value fails.
         */
        errors: Partial<{
            [E in Error]: string;
        }>;
        /**
         * Localizable texts to be used in editor popups.
         */
        editorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
        /**
         * Legacy overwrite for localizable texts to be used in array editor popups.
         */
        arrayEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
        /**
         * Legacy overwrite for localizable texts to be used in object editor popups.
         */
        objectEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
        /**
         * Legacy overwrite for localizable texts to be used in tuple editor popups.
         */
        tupleEditorPrompt: Partial<Omit<EditorPrompt.LocalizableTexts, 'editorLocalizations'>>;
    } & OptionalEditor.LocalizableTexts & ButtonBasedEditor.LocalizableTexts & BooleanEditor.LocalizableTexts & TimeEditor.LocalizableTexts & ChoiceEditor.LocalizableTexts & InvalidEditor.LocalizableTexts & ArrayBasedEditorPane.LocalizableTexts & ObjectEditorPane.LocalizableTexts;
}
import _Editor = Editor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let Editor: typeof _Editor;
        type Editor<T, I extends _Editor.EditorInfo = _Editor.EditorInfo> = _Editor<T, I>;
        namespace Editor {
            type Constructor<T, I extends EditorInfo = EditorInfo> = _Editor.Constructor<T, I>;
            type GenericConstructor<E extends Editor<T, I>, T, I extends EditorInfo = EditorInfo> = _Editor.GenericConstructor<E, T, I>;
            type Info<T> = _Editor.Info<T>;
            type EditorType = _Editor.EditorType;
            type EditorInfo = _Editor.EditorInfo;
            type State<T> = _Editor.State<T>;
            type InvalidState = _Editor.InvalidState;
            type ValidState<T> = _Editor.ValidState<T>;
            type Error = _Editor.Error;
            type ErrorDetail = _Editor.ErrorDetail;
            type Settings = _Editor.Settings;
            type EditorSettings = _Editor.EditorSettings;
            type Localizables = _Editor.Localizables;
            type LocalizableTexts = _Editor.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=Editor.d.ts.map