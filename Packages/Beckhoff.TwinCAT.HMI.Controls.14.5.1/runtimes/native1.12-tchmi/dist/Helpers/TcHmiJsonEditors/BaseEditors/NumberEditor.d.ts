import { Editor } from './Editor.js';
import { TextboxBasedEditor } from './TextboxBasedEditor.js';
import type { EditorFactory } from '../EditorFactory.js';
/**
 * Editor for numbers.
 */
export declare class NumberEditor extends TextboxBasedEditor<number | string, NumberEditor.Info> {
    /**
     * Create a new number editor.
     * @param element The element to contain the editor.
     * @param editorInfo An object containing information about the editor and the type of value to edit.
     * @param factory An editor factory that will be used to create sub-editors.
     */
    constructor(element: HTMLElement, editorInfo: NumberEditor.Info, factory: EditorFactory);
    /**
     * Validates the given value against the specified editor info.
     * @param editorInfo The editor info to validate against.
     * @param value The value to validate.
     */
    static validate(editorInfo: NumberEditor.Info, value: any): value is number | string;
    /**
     * Checks the given value for errors against the given editor info.
     * @param editorInfo The editor info to check against.
     * @param value The value to check.
     * @param returnEarly Set to true to return early, instead of finding all errors.
     */
    static checkForErrors(editorInfo: NumberEditor.Info, value: any, returnEarly?: boolean): Editor.ErrorDetail[];
    /**
     * Gets the current value.
     */
    getState(): Editor.State<number | string>;
    /**
     * Processes the current editor info.
     */
    protected __processEditorInfo(): void;
    /**
     * Tests whether the supplied number fits into the given minimum.
     * @param value The number to test.
     * @param minimum The minimum to test against.
     * @param minimum.value The value of the minimum.
     * @param minimum.exclusive Whether a value that is equal to the minimum value should be valid or not.
     */
    protected static __testMinimum(value: number, minimum: {
        value: number;
        exclusive: boolean;
    }): boolean;
    /**
     * Tests whether the supplied number fits into the given maximum.
     * @param value The number to test.
     * @param maximum The maximum to test against.
     * @param maximum.value The value of the maximum.
     * @param maximum.exclusive Whether a value that is equal to the maximum value should be valid or not.
     */
    protected static __testMaximum(value: number, maximum: {
        value: number;
        exclusive: boolean;
    }): boolean;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: number | string | null): void;
    /**
     * Gets the current raw value of the editor. This value might be invalid and, if it is valid, might differ from the value returned by getState.
     * To get the final actual value, always use getState.
     */
    getRawValue(): string | number;
}
export declare namespace NumberEditor {
    interface Info extends Editor.Info<number> {
        type: 'number';
        restrictions: Restriction[];
        specialValues: Set<string>;
    }
    interface Restriction {
        isInteger: boolean;
        multipleOf?: number;
        maximum?: {
            value: number;
            exclusive: boolean;
        };
        minimum?: {
            value: number;
            exclusive: boolean;
        };
    }
}
import _NumberEditor = NumberEditor;
declare global {
    namespace TcHmi.Controls.Helpers {
        let NumberEditor: typeof _NumberEditor;
        type NumberEditor = _NumberEditor;
        namespace NumberEditor {
            type Info = _NumberEditor.Info;
            type Restriction = _NumberEditor.Restriction;
        }
    }
}
//# sourceMappingURL=NumberEditor.d.ts.map