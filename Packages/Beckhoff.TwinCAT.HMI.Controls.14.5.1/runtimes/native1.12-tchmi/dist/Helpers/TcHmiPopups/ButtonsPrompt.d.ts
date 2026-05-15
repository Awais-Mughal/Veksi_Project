import { Callback, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import { Popup } from './Popup.js';
export declare abstract class ButtonsPrompt<T> extends Popup<T> {
    protected __buttons: Map<string, {
        value: T;
        button: TcHmiButton;
    }>;
    protected __onButtonPressedManager: Callback.Collection<(name: string, value: T) => void>;
    onButtonPressed: Readonly<{
        add: (callback: (name: string, value: T) => void) => () => void;
        remove: (callback: (name: string, value: T) => void) => void;
    }>;
    protected __backgroundAction: ButtonsPrompt.BackgroundAction<T>;
    protected __closeButton: ButtonsPrompt.CloseButton<T>;
    /**
     * Creates a new ButtonsPrompt instance.
     * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
     * @param parentControl The control which owns the popup.
     */
    constructor(buttons: TcHmi.Dictionary<{
        value: T;
        attributes: TcHmi.Dictionary<any>;
        keepPopupOpen?: boolean;
    }>, parentControl?: TcHmiControl.Control | null);
    /**
     * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: ButtonsPrompt.PromptAction<T>): void;
    /**
     * Creates a handler for the pressed event of a button.
     * @param value The value that should be used to answer the prompt when the button is clicked.
     */
    protected __createPressedHandler(value: T, name: string, closePopup: boolean): () => void;
    /**
     * Returns the created buttons.
     */
    getButtons(): Map<string, {
        value: T;
        button: TcHmiButton;
    }>;
    /**
     * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
     * aborted via API call.
     * @param action The action to perform. If the popup should be closed, you can specify the name of a button to
     * get the prompt to be answered as if this button was clicked, or directly specify a result to answer the
     * prompt with.
     */
    setBackgroundAction(action: ButtonsPrompt.BackgroundAction<T>): void;
    /**
     * Sets if the close button should be used or not.
     * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
     */
    setCloseButton(button: ButtonsPrompt.CloseButton<T>): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Defines whether to show the button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Performs the background action.
     */
    protected __performPromptAction(toPerform: ButtonsPrompt.PromptAction<T>): void;
    /**
     * DEPRECATED
     * Please use setTexts
     * @param texts A collection of localization symbol expressions.
     * @deprecated Please use setTexts
     */
    setLocalizations(texts: Partial<ButtonsPrompt.LocalizableTexts>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<ButtonsPrompt.LocalizableTexts>): void;
}
export declare namespace ButtonsPrompt {
    interface LocalizableTexts {
        headerText: TcHmi.Localizable;
        buttons: TcHmi.Dictionary<{
            text?: TcHmi.Localizable;
            tooltip?: TcHmi.Localizable;
        }>;
    }
    type BackgroundAction<R = any> = Popup.BackgroundAction<string> | {
        close: true;
        result: R;
    };
    type CloseButton<R = any> = Popup.CloseButton<string> | {
        show: true;
        result: R;
    };
    type PromptAction<R = any> = Popup.PromptAction<string> | {
        result: R;
    };
}
import _ButtonsPrompt = ButtonsPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ButtonsPrompt: typeof _ButtonsPrompt;
        type ButtonsPrompt<T> = _ButtonsPrompt<T>;
        namespace ButtonsPrompt {
            type LocalizableTexts = _ButtonsPrompt.LocalizableTexts;
            type BackgroundAction<R = any> = _ButtonsPrompt.BackgroundAction<R>;
            type CloseButton<R = any> = _ButtonsPrompt.CloseButton<R>;
        }
    }
}
//# sourceMappingURL=ButtonsPrompt.d.ts.map