import { ButtonsPrompt } from './ButtonsPrompt.js';
export declare class HtmlAndButtonsPrompt<T> extends ButtonsPrompt<T> {
    protected __elementContentContent: HTMLElement | null;
    /**
     * Creates a new TextAndButtonsPrompt instance.
     * @param buttons A collection of attributes to generate buttons from and the value that should be used in the prompt answer for each button.
     * @param parentControl The control which owns the popup.
     */
    constructor(buttons: TcHmi.Dictionary<{
        value: T;
        attributes: TcHmi.Dictionary<any>;
    }>, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Sets the content element.
     * @param element
     */
    setContentElement(element: HTMLElement): void;
}
declare const _HtmlAndButtonsPrompt: typeof HtmlAndButtonsPrompt;
type tHtmlAndButtonsPrompt<T> = HtmlAndButtonsPrompt<T>;
declare global {
    namespace TcHmi.Controls.Helpers {
        let HtmlAndButtonsPrompt: typeof _HtmlAndButtonsPrompt;
        type HtmlAndButtonsPrompt<T> = tHtmlAndButtonsPrompt<T>;
    }
}
export {};
//# sourceMappingURL=HtmlAndButtonsPrompt.d.ts.map