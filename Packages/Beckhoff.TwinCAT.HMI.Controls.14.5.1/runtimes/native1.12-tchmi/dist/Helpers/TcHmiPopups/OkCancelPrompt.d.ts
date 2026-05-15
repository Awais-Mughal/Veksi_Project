import { Popup } from './Popup.js';
import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
export declare abstract class OkCancelPrompt<T, T2 = void> extends Popup<{
    isOk: true;
    value: T;
} | {
    isOk: false;
    value?: T2;
}> {
    protected __okButton: TcHmiButton;
    protected __cancelButton: TcHmiButton;
    protected __backgroundAction: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>;
    protected __closeButton: Popup.CloseButton<OkCancelPrompt.AvailableActions>;
    /**
     * Creates a new OkCancelPrompt instance.
     * @param localizations A collection of localization symbol expressions to localize texts in the control.
     * @param parentControl The control which owns the popup.
     */
    constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    /**
     * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * Handler for the onPressed event of the OK button.
     */
    protected __onOkPressed(): void;
    /**
     * Handler for the onPressed event of the cancel button.
     */
    protected __onCancelPressed(): void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     * Please check validity in this method and don't rely on the OK buttons isEnabled state, as this method might be called on background click or other events too.
     */
    protected abstract __ok(): void;
    /**
     * Performs the action for the Cancel button.
     */
    protected __cancel(): void;
    /**
     * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
     * aborted via API call.
     * @param action The action to perform. If the popup should be closed, you can specify ok or cancel to perform
     * the associated action.
     */
    setBackgroundAction(action: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * Performs the background action.
     */
    protected __performBackgroundAction(): void;
    /**
     * Sets if the close button should be used or not.
     * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
     */
    setCloseButton(button: Popup.CloseButton<OkCancelPrompt.AvailableActions>): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Defines whether to show the button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Performs the given action.
     */
    protected __performPromptAction(toPerform: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * DEPRECATED
     * Please use setTexts
     * @param texts A collection of localization symbol expressions.
     * @deprecated Please use setTexts
     */
    setLocalizations(texts: Partial<OkCancelPrompt.LocalizableTexts>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<OkCancelPrompt.LocalizableTexts>): void;
}
export declare namespace OkCancelPrompt {
    interface LocalizableTexts {
        buttonTextOk: TcHmi.Localizable;
        buttonTooltipOk: TcHmi.Localizable;
        buttonTextCancel: TcHmi.Localizable;
        buttonTooltipCancel: TcHmi.Localizable;
    }
    type AvailableActions = 'ok' | 'cancel';
}
import _OkCancelPrompt = OkCancelPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let OkCancelPrompt: typeof _OkCancelPrompt;
        type OkCancelPrompt<T, T2 = void> = _OkCancelPrompt<T, T2>;
        namespace OkCancelPrompt {
            type LocalizableTexts = _OkCancelPrompt.LocalizableTexts;
            type AvailableActions = _OkCancelPrompt.AvailableActions;
        }
    }
}
//# sourceMappingURL=OkCancelPrompt.d.ts.map