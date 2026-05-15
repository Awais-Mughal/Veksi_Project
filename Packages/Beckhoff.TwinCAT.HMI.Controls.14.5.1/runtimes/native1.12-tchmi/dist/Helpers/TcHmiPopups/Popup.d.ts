import { Callback, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare abstract class Popup<T> {
    #private;
    protected readonly __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined;
    protected __name: string;
    protected __element: HTMLDivElement;
    protected __elementHeaderContainer: HTMLDivElement;
    protected __elementHeader: HTMLHeadingElement;
    protected __elementClose: HTMLAnchorElement;
    protected __elementContent: HTMLDivElement;
    protected __elementFooter: HTMLDivElement;
    /** Controls in this array will be destroyed automatically when the popup is destroyed */
    protected __childControls: TcHmi.Controls.System.TcHmiControl[];
    /** Destroyers in this array will be called automatically when the popup is destroyed */
    protected __destroyers: TcHmi.DestroyFunction[];
    protected __destroyOnHide: TcHmi.DestroyFunction[];
    protected __prompt: {
        answer: (value: T | PromiseLike<T>) => void;
        error: (reason?: Error) => void;
    } | null;
    protected __isShowing: boolean;
    protected __onShowManager: Callback.Collection<() => void>;
    onShow: Readonly<{
        add: (callback: () => void) => () => void;
        remove: (callback: () => void) => void;
    }>;
    protected __onHideManager: Callback.Collection<() => void>;
    onHide: Readonly<{
        add: (callback: () => void) => () => void;
        remove: (callback: () => void) => void;
    }>;
    protected __onBoundsChangeManager: Callback.Collection<(data: {
        bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
    }) => void>;
    onBoundsChange: Readonly<{
        add: (callback: (data: {
            bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
        }) => void) => () => void;
        remove: (callback: (data: {
            bounds: TcHmi.UiProvider.PopupProvider.Bounds | null;
        }) => void) => void;
    }>;
    protected __backgroundAction: Popup.BackgroundAction<string>;
    protected __closeButton: Popup.CloseButton<string>;
    protected __backgroundMode: Popup.BackgroundMode;
    protected __positioningMode: Popup.PositioningMode;
    protected __bounds: Popup.Bounds | null;
    protected __movable: boolean;
    protected __justAbove: TcHmi.TopMostLayer.IOptionsEx['justAbove'];
    protected readonly __className = "TcHmi_Controls_Helpers_Popup";
    protected __localizationSymbols: Map<string, {
        symbol: TcHmi.Symbol<string>;
        destroyWatch: TcHmi.DestroyFunction;
    }>;
    private static readonly __passiveEventOptions;
    protected __documentMouseMoveDestroyer: TcHmi.DestroyFunction | null;
    protected __documentMouseUpDestroyer: TcHmi.DestroyFunction | null;
    protected __documentTouchMoveDestroyer: TcHmi.DestroyFunction | null;
    protected __documentTouchEndDestroyer: TcHmi.DestroyFunction | null;
    protected __documentTouchCancelDestroyer: TcHmi.DestroyFunction | null;
    /** Prevents mouse event while touch interaction is in progress. */
    protected __touchLock: boolean;
    protected __touchLockTimeoutId: number;
    /** Store active touches by their IDs. */
    protected __activeTouches: Map<number, {
        useForDragging: false;
    } | {
        useForDragging: true;
        offsetLeft: number;
        offsetTop: number;
    }>;
    protected __movingInfo: {
        moving: boolean;
        /** Offset from the interaction coordinates to element left side */
        startLeftOffset: number;
        /** Offset from the interaction coordinates to element top side */
        startTopOffset: number;
        /** A popup should be movable partly outside the screen but 50px should be always visible. */
        minLeft: number;
        /** A popup should be movable partly outside the screen but not at the top. */
        minTop: number;
        /** A popup should be movable partly outside the screen but 50px should be always visible. */
        maxLeft: number;
        /** A popup should be movable partly outside the screen but 50px should be always visible. */
        maxTop: number;
    };
    protected __activePointerInteraction: boolean;
    protected __animationFrameId: number;
    protected __storage: TcHmi.LocalStorage<{
        bounds: Popup.Bounds;
    }, {
        bounds: Popup.Bounds | null;
    }> | undefined;
    protected __storageSettings: TcHmi.UiProvider.PopupProvider.StorageSettings | undefined;
    private __resizeObserver;
    /**
     * Creates a new Popup instance.
     * @param __parentControl The control which owns the popup.
     */
    constructor(__parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined);
    /**
     * Keeps popup visible after when the window or the popup is resized. If the popup shrinks it could disappear
     * beyond the left edge of the window. If the window shrinks, the popup could disappear beyond the right or
     * bottom edge.
     */
    private __handleResize;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<T>;
    /**
     * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: Popup.PromptAction<string>): void;
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Gets a value indicating if the popup is currently shown to the user.
     */
    isShowing(): boolean;
    /**
     * Gets a value indicating if the popup has a prompt that is still pending to be answered by the user.
     * If that is the case, calling prompt() againg will result in an error. If the popup is not currently
     * showing, you can call show() to display the popup again and wait for the user to answer the prompt.
     */
    hasActivePrompt(): boolean;
    /**
     * Gets the root element of the popup.
     */
    getElement(): HTMLDivElement;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    resetBounds(): void;
    /**
     * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
     * aborted via API call. Default is { close: true }.
     * @param action The action to perform. If the popup should be closed, further action can be specified.
     */
    setBackgroundAction(action: Popup.BackgroundAction<string>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    setBackgroundMode(mode: Popup.BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    setPositioningMode(mode: Popup.PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    setBounds(bounds: Popup.Bounds | null): void;
    /**
     * Process the given Popup.Bounds.
     * @param bounds
     */
    protected __processBounds(bounds: Popup.Bounds | null): void;
    /**
     * Sets the movable option.
     * Does only have an effect when setPositioningMode is also set:
     * `popup.setPositioningMode(TcHmi.UiProvider.PopupProvider.PositioningMode.Floating)`
     */
    setMovable(movable: boolean): void;
    /**
     * Sets the local storage settings and initializes the storage.
     */
    setStorageSettings(settings: TcHmi.UiProvider.PopupProvider.StorageSettings): void;
    /**
     * Sets if the close button should be used or not.
     * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt
     */
    setCloseButton(button: Popup.CloseButton<string>): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Defines whether to show the button
     */
    setCloseButton(show: boolean): void;
    /**
     * Gets the close button configuration.
     */
    getCloseButton(): _Popup.CloseButton<string>;
    /**
     * Performs the close action. Must be implemented by inheriting classes.
     */
    protected abstract __performPromptAction(toPerform: Popup.PromptAction<string>): void;
    /**
     * Display the popup just above the given reference element.
     * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
     * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
     * specify in which direction conflicts should be resolved. Defaults to Up.
     */
    setJustAbove(reference: Element, conflictResolution?: TcHmi.TopMostLayer.ConflictResolution): void;
    /**
     * Reset the justAbove handling.
     * @param reference Pass null to reset the justAbove handling.
     */
    setJustAbove(reference: null): void;
    /**
     * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
     */
    hasActiveUserInteraction(): boolean;
    /**
     * Handles the onPressed event of the close button.
     */
    protected __onCloseClick(_event: MouseEvent): void;
    /**
     * Handles the popup mousedown event.
     */
    protected __onPopupMouseDown(event: MouseEvent): void;
    /**
     * Handles the document mouseup event.
     */
    protected __onDocumentMouseUp(_event: MouseEvent): void;
    /**
     * Handles the document mousemove event.
     */
    protected __onDocumentMouseMove(event: MouseEvent): void;
    /**
     * Handles the popup touchstart event.
     */
    protected __onPopupTouchStart(event: TouchEvent): void;
    /**
     * Handles the document touch end and cancel events.
     */
    protected __onDocumentTouchEndOrCancel(event: TouchEvent): void;
    /**
     * Handles the document touchmove event.
     */
    protected __onDocumentTouchMove(event: TouchEvent): void;
    /**
     * AnimationFrame handler for drawing
     */
    protected __updatePosition(): void;
    /**
     * Write potentially localized texts to a DOM Elements textContent property.
     * @param name A name for the localized text.
     * @param text The text to apply.
     * @param element The element to apply the text to.
     */
    protected __applyTextToElement(name: string, text: TcHmi.Localizable | null | undefined, element: Element): void;
    /**
     * Write potentially localized texts to a DOM Element using the given setter function.
     * @param name A name for the localized text.
     * @param text The text to apply.
     * @param setter The setter that writes the text to the DOM.
     */
    protected __applyTextToElement(name: string, text: TcHmi.Localizable | null | undefined, setter: (text: string) => void): void;
    /**
     * Write potentially localized texts to a control property
     * @param name A name for the localized text.
     * @param text The text to apply.
     * @param control The control to write to.
     * @param property The property name to write to.
     */
    protected __applyTextToControl(name: string, text: TcHmi.Localizable | null | undefined, control: TcHmiControl.Control, property: string): void;
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
export declare namespace Popup {
    enum PositioningMode {
        Centered = 1,
        Floating = 2
    }
    enum BackgroundMode {
        None = 1,
        Dimmed = 2
    }
    type BackgroundAction<A extends string> = {
        close: false;
    } | {
        close: true;
        action?: A;
    };
    type CloseButton<A extends string> = {
        show: false;
    } | {
        show: true;
        action?: A;
    };
    type PromptAction<A extends string> = {
        action?: A;
    };
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
}
import _Popup = Popup;
declare global {
    namespace TcHmi.Controls.Helpers {
        let Popup: typeof _Popup;
        type Popup<T> = _Popup<T>;
        namespace Popup {
            type PositioningMode = _Popup.PositioningMode;
            type BackgroundMode = _Popup.BackgroundMode;
            type BackgroundAction<A extends string> = _Popup.BackgroundAction<A>;
            type CloseButton<A extends string> = _Popup.CloseButton<A>;
            type PromptAction<A extends string> = _Popup.PromptAction<A>;
            type Bounds = _Popup.Bounds;
        }
    }
}
//# sourceMappingURL=Popup.d.ts.map