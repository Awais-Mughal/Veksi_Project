import type { Control as TcHmiKeyboardControl } from '../../TcHmiKeyboard/TcHmiKeyboard.esm.js';
export declare class TcHmiKeyboard extends TcHmi.UiProvider.KeyboardProvider {
    static readonly providerName = "Beckhoff.TcHmiKeyboard";
    protected keyboardClassFqn: string;
    protected popupHeaderText: string;
    /**
     *
     * @param providerName Allows inheriting classes to set their own provider name.
     */
    constructor(providerName?: string);
    protected __keyboardCtrl: TcHmiKeyboardControl | undefined;
    protected __popup: TcHmi.UiProvider.PopupProvider.HtmlElementBox<void> | undefined;
    protected __popupEventDestroyers: TcHmi.DestroyFunction[];
    protected __mutationObserver: MutationObserver | undefined;
    /** Also the marker of active keyboard */
    protected __activeTextElement: HTMLInputElement | HTMLTextAreaElement | undefined;
    /** Container for the footer view (contains keyboard and close icon) */
    protected __footerElement: HTMLDivElement | undefined;
    protected __localeChangedRegistered: boolean;
    protected __deviceHasOSK: boolean;
    refreshConfig(): void;
    open(textElement: HTMLInputElement | HTMLTextAreaElement): TcHmi.IErrorDetails;
    protected __closeViaApi(event?: Event): void;
    close(): TcHmi.IErrorDetails;
    protected __activePointerInteraction: boolean;
    protected __handlePointerInteraction(event: Event): void;
    /**
     * Returns whether the keyboard is currently being interacted with by mouse, touch or physical keyboard.
     */
    hasActiveUserInteraction(): boolean;
}
declare const _TcHmiKeyboard: typeof TcHmiKeyboard;
type tTcHmiKeyboard = TcHmiKeyboard;
declare global {
    namespace TcHmi.Controls.UiProvider.Keyboard {
        let TcHmiKeyboard: typeof _TcHmiKeyboard;
        type TcHmiKeyboard = tTcHmiKeyboard;
    }
}
export {};
//# sourceMappingURL=TcHmiKeyboard.d.ts.map