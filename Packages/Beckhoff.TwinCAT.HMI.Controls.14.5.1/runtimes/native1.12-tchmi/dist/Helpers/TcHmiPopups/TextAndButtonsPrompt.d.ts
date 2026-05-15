import { ButtonsPrompt } from './ButtonsPrompt.js';
export declare class TextAndButtonsPrompt<T> extends ButtonsPrompt<T> {
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
     * DEPRECATED
     * Please use setTexts
     * @param texts A collection of localization symbol expressions.
     * @deprecated Please use setTexts
     */
    setLocalizations(texts: Partial<TextAndButtonsPrompt.LocalizableTexts>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<TextAndButtonsPrompt.LocalizableTexts>): void;
}
export declare namespace TextAndButtonsPrompt {
    interface LocalizableTexts extends ButtonsPrompt.LocalizableTexts {
        contentText: TcHmi.Localizable;
    }
}
import _TextAndButtonsPrompt = TextAndButtonsPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TextAndButtonsPrompt: typeof _TextAndButtonsPrompt;
        type TextAndButtonsPrompt<T> = _TextAndButtonsPrompt<T>;
        namespace TextAndButtonsPrompt {
            type LocalizableTexts = _TextAndButtonsPrompt.LocalizableTexts;
        }
    }
}
//# sourceMappingURL=TextAndButtonsPrompt.d.ts.map