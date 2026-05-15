// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************




export declare class ApprovalBanner extends Banner {
    protected readonly __parentControl?: (TcHmiControl.Control | null) | undefined;
    protected __approveButton: TcHmiButton;
    protected __repetitionCheckbox: TcHmiCheckbox;
    protected __storage: TcHmi.LocalStorage<{
        dontShowAgain: boolean;
    }> | undefined;
    /**
     * Creates a new Banner instance.
     * @param targetElement The element the banner is placed over.
     * @param storageId The storage id to rember if the banner should not be displayed anymore
     * @param __parentControl The control which owns the Banner.
     */
    constructor(targetElement: HTMLElement, storageId: string | null, __parentControl?: (TcHmiControl.Control | null) | undefined);
    show(): void;
    /**
     * Handler for the onPressed event of the OK button.
     */
    protected __onApproved(): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<ApprovalBanner.LocalizableTexts>): void;
}
export declare namespace ApprovalBanner {
    interface LocalizableTexts extends Banner.LocalizableTexts {
        buttonText: TcHmi.Localizable;
        checkboxText: TcHmi.Localizable;
    }
}
import _ApprovalBanner = ApprovalBanner;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ApprovalBanner: typeof _ApprovalBanner;
        type ApprovalBanner = _ApprovalBanner;
        namespace ApprovalBanner {
            type LocalizableTexts = _ApprovalBanner.LocalizableTexts;
        }
    }
}

export declare class Banner {
    #private;
    protected readonly __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined;
    protected __name: string;
    protected __targetElement: HTMLElement;
    protected __element: HTMLDivElement;
    protected __elementHeaderContainer: HTMLDivElement;
    protected __elementHeader: HTMLHeadingElement;
    protected __elementContent: HTMLDivElement;
    protected __elementFooter: HTMLDivElement;
    /** Controls in this array will be destroyed automatically when the popup is destroyed */
    protected __childControls: TcHmi.Controls.System.TcHmiControl[];
    /** Destroyers in this array will be called automatically when the popup is destroyed */
    protected __destroyers: TcHmi.DestroyFunction[];
    protected __isShowing: boolean;
    protected __localizationSymbols: Map<string, {
        symbol: TcHmi.Symbol<string>;
        destroyWatch: TcHmi.DestroyFunction;
    }>;
    protected readonly __className = "TcHmi_Controls_Helpers_Banner";
    /**
     * Creates a new Banner instance.
     * @param targetElement The element the banner is placed over.
     * @param __parentControl The control which owns the Banner.
     */
    constructor(targetElement: HTMLElement, __parentControl?: (TcHmi.Controls.System.TcHmiControl | null) | undefined);
    /**
     * Gets a value indicating if the banner is currently shown to the user.
     */
    isShowing(): boolean;
    /**
     * Shows the banner.
     */
    show(): void;
    /**
     * Hides the banner.
     */
    hide(): void;
    /**
     * Destroys the banner and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
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
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<Banner.LocalizableTexts>): void;
}
export declare namespace Banner {
    interface LocalizableTexts {
        headerText: TcHmi.Localizable;
        contentText: TcHmi.Localizable;
    }
}
import _Banner = Banner;
declare global {
    namespace TcHmi.Controls.Helpers {
        let Banner: typeof _Banner;
        type Banner = _Banner;
        namespace Banner {
            type LocalizableTexts = _Banner.LocalizableTexts;
        }
    }
}
