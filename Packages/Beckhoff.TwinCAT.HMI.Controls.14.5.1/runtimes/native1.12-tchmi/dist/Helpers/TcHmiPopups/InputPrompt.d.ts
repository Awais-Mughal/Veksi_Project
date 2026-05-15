import type { Control as TcHmiInput } from '../../TcHmiInput/TcHmiInput.esm.js';
import { OkCancelPrompt } from './OkCancelPrompt.js';
export declare class InputPrompt extends OkCancelPrompt<string> {
    protected __input: TcHmiInput;
    protected __forbiddenValues: Set<string>;
    protected __validationPatterns: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[];
    protected __elementLabel: HTMLElement;
    /**
     * Creates a new InputPrompt instance.
     * @param parentControl The control which owns the popup.
     */
    constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    /**
     * Handler for the onTextChanged event of the input.
     */
    protected __onTextChanged(): void;
    /**
     * Handler for the keydown event of the popup element.
     */
    protected __onKeydown(event: KeyboardEvent): void;
    /**
     * Checks if the text of the input is valid and sets the isEnabled state of the button and the invalid class of the input accordingly.
     */
    protected __validate(): void;
    /**
     * Validates the given text.
     * @param text The text to validate.
     */
    protected __isValid(text: string): boolean;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer().
     */
    protected __ok(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     * @param forbiddenValues Values that cannot be entered (i.e. because another item with this name already exists).
     * @param defaultValue The default to fill the input with.
     */
    prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
        isOk: true;
        value: string;
    } | {
        isOk: false;
        value?: void | undefined;
    }>;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    show(): void;
    setValidationPatterns(patterns: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[]): void;
    getValidationPatterns(): {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[];
    /**
     * DEPRECATED
     * Please use setTexts
     * @param texts A collection of localization symbol expressions.
     * @deprecated Please use setTexts
     */
    setLocalizations(texts: Partial<InputPrompt.LocalizableTexts>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<InputPrompt.LocalizableTexts>): void;
}
export declare namespace InputPrompt {
    interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
        labelText: TcHmi.Localizable;
        headerText: TcHmi.Localizable;
    }
}
import _InputPrompt = InputPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let InputPrompt: typeof _InputPrompt;
        type InputPrompt = _InputPrompt;
        namespace InputPrompt {
            type LocalizableTexts = _InputPrompt.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=InputPrompt.d.ts.map