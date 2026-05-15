import type { Errors, Dictionary, IErrorDetails, IResultObject, SelectableRequired } from './_Types.js';
/**
 * Closes the system keyboard.
 */
export declare function close(): void;
/**
 * Get the provider name of the system keyboard.
 */
export declare function getProviderName(): string;
/**
 * Set the provider name of the system keyboard.
 * @param providerName Name of the system keyboard provider.
 */
export declare function setProviderName(providerName: string): void;
/**
 * Gets if the system keyboard should open on focus of a textarea or input element.
 */
export declare function getAutoOpen(): boolean;
/**
 * Sets if the system keyboard should open on focus of a textarea or input element.
 * @param newState new value
 */
export declare function setAutoOpen(newState: boolean): void;
/**
 * Get the url of the keyboard layout according to the requested input mode and the current localization.
 * @param requestedInputMode the input mode of the input field the system keyboard is requested.
 */
export declare function getLayoutFileFromInputMode(requestedInputMode: string): LayoutResult;
/**
 * Returns the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
 */
export declare function getProjectKeyboardMapping(): Dictionary<InputModeMapping>;
/**
 * Sets the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
 * @param projectKeyboardMapping new project keyboard mapping.
 */
export declare function setProjectKeyboardMapping(projectKeyboardMapping: Dictionary<InputModeMapping>): void;
/**
 * Gets the layout object of the system keyboard container.
 */
export declare function getContainerLayout(): ContainerLayout | null;
/**
 * Sets the layout object of the system keyboard container. The layout object defines the positioning and dimensions of the keyboard.
 * @param layout dimensions and position of the system keyboard.
 */
export declare function setContainerLayout(layout: ContainerLayout): void;
export interface LayoutResultSuccess extends IResultObject {
    error: Errors.NONE;
    layoutUrl: string;
}
export interface LayoutResultFail extends IResultObject {
    error: Exclude<Errors, Errors.NONE>;
    details: SelectableRequired<IErrorDetails, 'message' | 'reason' | 'domain'>;
}
export type LayoutResult = LayoutResultSuccess | LayoutResultFail;
/**
 * Mapping from input mode string to project based keyboard layout.
 *
 * The TcHmiKeyboard provider supports this config:
 *
 * A focused HTMLInput or HTMLTextarea element can have following
 * properties to request a specific keyboard layout:
 * HTML attribute 'data-tchmi-input-mode' to force a specific tchmi input mode (could be any string if mapping is provided in project)
 * HTML attribute inputmode === ('numeric' || 'decimal')
 * HTML attribute type === ('number')
 */
export interface InputModeMapping extends Dictionary<string> {
    /**
     * Keyboard layout path for texts and unknown input elements.
     * Could be the empty string. Will fall back to 'text' of fallback language.
     */
    text: string;
    /**
     * Keyboard layout path for decimal input elements (potential fractional input).
     * Could be the empty string. Will fall back to 'decimal' of fallback language,
     * 'text' keyboard file of this language or 'text' of fallback language.
     */
    decimal: string;
    /**
     * Keyboard layout path for numeric input elements (non-fractional input).
     * Could be empty. Will fall back to 'decimal' of this language,
     * 'numeric' / 'decimal' of fallback language,
     * 'text' keyboard file of this language or 'text' of fallback language.
     */
    numeric: string;
}
/**
 * Possible input modes for keyboard handling.
 * The list is extensible in the project, but there are some well known values:
 *
 * - 'skip' is no keyboard. Current keyboard will be NOT closed.
 * - 'none' is no keyboard. Current keyboard will be closed.
 *
 * - 'numeric' is a numeric keyboard to use with non-fractional input
 * - 'decimal' is a numeric keyboard to use with potential fractional input
 *
 * - 'text' is a text keyboard and used as a fallback for unknown input modes
 */
export type KeyboardInputMode = 'skip' | 'none' | Exclude<keyof InputModeMapping, number>;
/**
 * Possible positions for the system keybaord.
 *
 * - 'popup' The keyboard will be opened in a popup.
 * - 'footer' The keyboard will be displayed in a footer.
 */
export type Position = 'popup' | 'footer';
/**
 * The height and position describing the system keyboards container layout.
 */
export interface ContainerLayout {
    /**
     * Pixel height of the system keyboard.
     * If empty the defined height of the keyboard layout will be used.
     */
    height?: number | null;
    /**
     * Position of the system keyboard.
     * If not defined will use popup.
     */
    position?: Position;
}
//# sourceMappingURL=Keyboard.d.ts.map