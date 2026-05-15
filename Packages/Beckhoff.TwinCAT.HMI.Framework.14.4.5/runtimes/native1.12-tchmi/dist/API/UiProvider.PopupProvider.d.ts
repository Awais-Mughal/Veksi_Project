import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
import type { ConflictResolution } from './TopMostLayer.js';
import { BaseProvider } from './UiProvider.js';
import type * as Server from './Server.js';
import type * as Trigger from './Trigger.js';
import type { DestroyFunction, Dictionary, FourSidedCss, Localizable } from './_Types.js';
/**
 * Abstract class for all PopupProvider
 */
export declare abstract class PopupProvider extends BaseProvider {
    readonly type = "popup";
    /**
     * Create a new Popup provider.
     * @param providerName The name of this provider.
     */
    constructor(providerName: string);
    /**
     * Creates an instance of the PopupProvider.MessageBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The localization for the content text.
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createMessageBox?<T>(header: Localizable, content: Localizable, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: baseTcHmiControl | null): PopupProvider.MessageBox<T>;
    /**
     * Creates an instance of the PopupProvider.HtmlElementBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The html content.
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createHtmlElementBox?<T>(header: Localizable, content: HTMLElement, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: baseTcHmiControl | null): PopupProvider.HtmlElementBox<T>;
    /**
     * Creates an instance of the PopupProvider.InputPrompt class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param label The localization for the label text.
     * @param validation Optional list of regex patterns that the input must or must not match
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInputPrompt?(header: Localizable, label: Localizable, validation?: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[] | null, parentControl?: baseTcHmiControl | null): PopupProvider.InputPrompt;
    /**
     * Creates an instance of the PopupProvider.InteractiveWritePrompt class which allows interaction with the underlying popup implementation.
     * @param symbols A list of symbol data which is shown in the popup.
     * @param options Options
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInteractiveWritePrompt?(symbol: PopupProvider.InteractiveWritePrompt.Symbol, options?: PopupProvider.InteractiveWritePrompt.Options | null, parentControl?: baseTcHmiControl | null): PopupProvider.InteractiveWritePrompt;
}
export declare namespace PopupProvider {
    type BackgroundAction<A extends string> = {
        close: false;
    } | {
        close: true;
        action?: A;
    };
    type PromptAction<A extends string> = {
        action?: A;
    };
    enum PositioningMode {
        Centered = 1,
        Floating = 2
    }
    enum BackgroundMode {
        None = 1,
        Dimmed = 2
    }
    interface Bounds {
        width?: number | null;
        widthUnit?: 'px' | '%';
        height?: number | null;
        heightUnit?: 'px' | '%';
        left?: number | null;
        leftUnit?: 'px' | '%';
        top?: number | null;
        topUnit?: 'px' | '%';
        bottom?: number | null;
        bottomUnit?: 'px' | '%';
        right?: number | null;
        rightUnit?: 'px' | '%';
    }
    interface StorageSettings {
        /** The name of the storage instance. */
        name: string;
        /** Defines if the last bounds after moving the popup will be restored when opened the next time. */
        restoreBounds?: boolean;
    }
    /**
     * A generic popup
     * @template T A popup prompt() will result with this value type
     */
    abstract class Popup<T = any> {
        /**
         * Handles callbacks to get called after the popup is shown
         */
        abstract onShow: {
            add: (callback: () => void) => DestroyFunction;
            remove: (callback: () => void) => void;
        };
        /**
         * Handles callbacks to get called after the popup is hidden.
         */
        abstract onHide: {
            add: (callback: () => void) => DestroyFunction;
            remove: (callback: () => void) => void;
        };
        /**
         * Handles callbacks to get called after position or size has changed
         */
        abstract onBoundsChange: {
            add: (callback: (data: {
                /** Bounds in UiProvider coordinates */
                bounds: Bounds | null;
            }) => void) => DestroyFunction;
            remove: (callback: (data: {
                /** Bounds in UiProvider coordinates */
                bounds: Bounds | null;
            }) => void) => void;
        };
        /**
         * Base constructor
         */
        constructor();
        abstract destroy(): void;
        /**
         * Shows the popup.
         */
        abstract show(): void;
        /**
         * Hides the popup.
         */
        abstract hide(): void;
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        abstract prompt(): Promise<T>;
        /**
         * Aborts a prompted popup and rejects the promise.
         * @param action The action to perform to answer the prompt.
         */
        abstract abort(action?: PromptAction<string>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        abstract setTexts(texts: Partial<Popup.LocalizableTexts>): void;
        /**
         * Sets the background action.
         * @param action
         */
        abstract setBackgroundAction(action: BackgroundAction<string>): void;
        /**
         * Sets the background mode of the TopMostLayer used for displaying the popup.
         * @param mode
         */
        abstract setBackgroundMode(mode: BackgroundMode): void;
        /**
         * Sets the positioning mode of the popup in the TopMostLayer.
         * @param mode
         */
        abstract setPositioningMode(mode: PositioningMode): void;
        /**
         * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
         * @param bounds
         */
        abstract setBounds(bounds: Bounds): void;
        /**
         * Sets the movable option.
         * Does only have an effect when setPositioningMode is also set:
         * `popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Floating)`
         */
        abstract setMovable(movable: boolean): void;
        /**
         * Determines if the popup is currently showing or not.
         */
        abstract isShowing(): boolean;
        /**
         * Sets the local storage settings.
         */
        abstract setStorageSettings(settings: StorageSettings): void;
        /**
         * Resets the size and position of the Popup and clears that data from localStorage.
         */
        abstract resetBounds(): void;
        /**
         * Sets if the close button should be used or not.
         * @param closeButton
         */
        abstract setCloseButton(closeButton: boolean): void;
        /**
         * Sets what action to take to answer the prompt when the close button is clicked.
         * @param action The action to take to answer the prompt, or null if the prompt should not be answered
         * in that case.
         */
        setCloseButtonAction?(action: PromptAction<string> | null): void;
        /**
         * Display the popup just above the given reference element.
         * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
         * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
         * specify in which direction conflicts should be resolved. Defaults to Up.
         */
        setJustAbove?(reference: Element, conflictResolution?: ConflictResolution): void;
        /**
         * Reset the justAbove handling.
         * @param reference Pass null to reset the justAbove handling.
         */
        setJustAbove?(reference: null): void;
        /**
         * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
         */
        hasActiveUserInteraction?(): boolean;
        /**
         * Gets the root element of the popup.
         */
        getElement?(): HTMLElement;
    }
    namespace Popup {
        interface LocalizableTexts {
            headerText: Localizable;
            buttons: Dictionary<{
                text?: Localizable;
                tooltip?: Localizable;
            }>;
        }
    }
    /**
     * A generic MessageBox
     * @template T A popup prompt() will result with this value type
     */
    abstract class MessageBox<T = any> extends Popup<T> {
        /**
         * Handles callbacks to get called when a button is pressed
         */
        onButtonPressed?: {
            add: (callback: (name: string, value: T) => void) => DestroyFunction;
            remove: (callback: (name: string, value: T) => void) => void;
        };
        /**
         * Base constructor
         */
        constructor();
        /**
         * Aborts a prompted popup and rejects the promise.
         * @param action The action to perform to answer the prompt.
         */
        abstract abort(action?: MessageBox.PromptAction<T>): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        abstract setTexts(texts: Partial<MessageBox.LocalizableTexts>): void;
        /**
         * Sets the background action.
         * @param action
         */
        abstract setBackgroundAction(action: MessageBox.BackgroundAction<T>): void;
        /**
         * Sets what action to take to answer the prompt when the close button is clicked.
         * @param action The action to take to answer the prompt, or null if the prompt should not be answered
         * in that case.
         */
        setCloseButtonAction?(action: MessageBox.PromptAction<T> | null): void;
    }
    namespace MessageBox {
        interface LocalizableTexts extends Popup.LocalizableTexts {
            contentText: Localizable;
        }
        type BackgroundAction<R = any> = PopupProvider.BackgroundAction<string> | {
            close: true;
            result: R;
        };
        type PromptAction<R = any> = PopupProvider.PromptAction<string> | {
            result: R;
        };
    }
    /**
     * A generic HtmlElementBox
     * @template T A popup prompt() will result with this value type
     */
    abstract class HtmlElementBox<T = any> extends Popup<T> {
        /**
         * Handles callbacks to get called when a button is pressed
         */
        onButtonPressed?: {
            add: (callback: (name: string, value: T) => void) => DestroyFunction;
            remove: (callback: (name: string, value: T) => void) => void;
        };
        /**
         * Base constructor
         */
        constructor();
        /**
         * Aborts a prompted popup and rejects the promise.
         * @param action The action to perform to answer the prompt.
         */
        abstract abort(action?: HtmlElementBox.PromptAction<T>): void;
        /**
         * Sets the background action.
         * @param action
         */
        abstract setBackgroundAction(action: HtmlElementBox.BackgroundAction<T>): void;
        /**
         * Sets what action to take to answer the prompt when the close button is clicked.
         * @param action The action to take to answer the prompt, or null if the prompt should not be answered
         * in that case.
         */
        setCloseButtonAction?(action: HtmlElementBox.PromptAction<T> | null): void;
        /**
         * Sets the content.
         * @param element
         */
        abstract setContentElement(element: HTMLElement): void;
    }
    namespace HtmlElementBox {
        type BackgroundAction<R = any> = PopupProvider.BackgroundAction<string> | {
            close: true;
            result: R;
        };
        type PromptAction<R = any> = PopupProvider.PromptAction<string> | {
            result: R;
        };
    }
    /**
     * A generic Inputprompt
     */
    abstract class InputPrompt extends Popup<{
        isOk: true;
        value: string;
    } | {
        isOk: false;
    }> {
        /**
         * Base constructor
         */
        constructor();
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        abstract prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
            isOk: true;
            value: string;
        } | {
            isOk: false;
        }>;
        /**
         * Aborts a prompted popup and rejects the promise.
         * @param action The action to perform to answer the prompt.
         */
        abstract abort(action?: InputPrompt.PromptAction): void;
        /**
         * Sets the background action.
         * @param action
         */
        abstract setBackgroundAction(action: InputPrompt.BackgroundAction): void;
        /**
         * Sets what action to take to answer the prompt when the close button is clicked.
         * @param action The action to take to answer the prompt, or null if the prompt should not be answered
         * in that case.
         */
        setCloseButtonAction?(action: InputPrompt.PromptAction | null): void;
        /**
         * Sets texts which can either be localizable or static.
         */
        abstract setTexts(texts: Partial<InputPrompt.LocalizableTexts>): void;
    }
    namespace InputPrompt {
        interface LocalizableTexts extends Popup.LocalizableTexts {
            labelText: Localizable;
            headerText: Localizable;
        }
        type BackgroundAction = PopupProvider.BackgroundAction<'ok' | 'cancel'>;
        type PromptAction = PopupProvider.PromptAction<'ok' | 'cancel'>;
    }
    /**
     * InteractiveWritePrompt
     */
    abstract class InteractiveWritePrompt extends Popup<{
        isOk: true;
        value: InteractiveWritePrompt.Value;
    } | {
        isOk: false;
        value?: InteractiveWritePrompt.Value;
    }> {
        /**
         * Base constructor
         */
        constructor();
        /**
         * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
         */
        abstract prompt(): Promise<{
            isOk: true;
            value: InteractiveWritePrompt.Value;
        } | {
            isOk: false;
            value?: InteractiveWritePrompt.Value;
        }>;
        /**
         * Aborts a prompted popup and rejects the promise.
         * @param action The action to perform to answer the prompt.
         */
        abstract abort(action?: PopupProvider.InteractiveWritePrompt.PromptAction): void;
        /**
         * Sets the background action.
         * @param action
         */
        abstract setBackgroundAction(action: PopupProvider.InteractiveWritePrompt.BackgroundAction): void;
        /**
         * Sets what action to take to answer the prompt when the close button is clicked.
         * @param action The action to take to answer the prompt, or null if the prompt should not be answered
         * in that case.
         */
        setCloseButtonAction?(action: PopupProvider.InteractiveWritePrompt.PromptAction | null): void;
    }
    namespace InteractiveWritePrompt {
        interface Symbol {
            name: string;
            writeValue: any;
            comment?: string;
            metaData: SymbolMetaData;
        }
        interface AuthOptions {
            usernameSelection?: 'Combobox' | 'Input';
            usernameSelected?: string;
        }
        interface Options {
            requestOptions?: Server.IRequestOptions | null;
            authOptions?: AuthOptions | null;
        }
        interface Value {
            result?: Server.IValueResultObject;
        }
        interface SymbolMetaData {
            reauthenticationRequired?: boolean;
            reviewerGroups?: string[];
            auditTrail?: {
                enabled?: boolean;
                commentRequired?: boolean;
            };
        }
        type BackgroundAction = PopupProvider.BackgroundAction<'ok' | 'cancel'>;
        type PromptAction = PopupProvider.PromptAction<'ok' | 'cancel'>;
    }
}
//# sourceMappingURL=UiProvider.PopupProvider.d.ts.map