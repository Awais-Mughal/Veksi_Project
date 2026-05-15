import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Banner } from './Banner.js';
import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiCheckbox } from '../../TcHmiCheckbox/TcHmiCheckbox.esm.js';
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
//# sourceMappingURL=ApprovalBanner.d.ts.map