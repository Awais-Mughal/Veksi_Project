import type { IErrorDetails } from './_Types.js';
/**
 * Change visibility of dialog and set its DialogType when showing.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param bVisibility Toggling visiblity of dialog
 * @param dialogType Type of dialog
 * @param options Options
 * @returns returns false if the dialog could not be opened
 * @preserve (Part of the public API)
 */
export declare function showDialog(dialogOwner: string, bVisibility: boolean, dialogType?: DialogType, options?: DialogOptions): boolean;
/**
 * Changes the output content of the Dialog to a new value.
 * Will always target DialogType.Overlay. Use updateTextEx if you want to target a specific DialogType.
 * The default DialogSeverity is Info.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param html Content to show
 * @param severity Severity for the content.
 * @returns Success of the text update
 * @preserve (Part of the public API)
 */
export declare function updateText(dialogOwner: string, html: string, severity?: DialogSeverity): boolean;
/**
 * Changes the output content of the Dialog to a new value.
 * The default DialogType is Overlay.
 * The default DialogSeverity is Info.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param html Text to display
 * @param options options
 * @param options.dialogType Overlay or watermark
 * @param options.severity severity of the text
 * @param options.buttonReload If true a reload button is added
 * @returns Success of the text update
 * @preserve (Part of the public API)
 */
export declare function updateTextEx(dialogOwner: string, html: string, options?: {
    dialogType?: DialogType;
    severity?: DialogSeverity;
    buttonReload?: boolean;
}): boolean;
/**
 * Returns the current dialog owner or null.
 * @preserve (Part of the public API)
 */
export declare function getDialogOwner(): string | null;
/**
 * Builds a formatted message of hierarchical error objects for use in dialog.
 * @param error Error object to show nicely
 * @preserve (Part of the public API)
 */
export declare function buildMessage(error: IErrorDetails | undefined): string;
/**
 * We support different severities for the dialog:
 * Info
 * Error
 */
export declare enum DialogSeverity {
    Info = 0,
    Warning = 1,
    Error = 2
}
/**
 * We support different types for the dialog:
 * Overlay
 * Watermark
 */
export declare enum DialogType {
    /** An overlay dialog */
    Overlay = 1,
    /** A watermark */
    Watermark = 2
}
/**
 * Options for the system dialogs
 */
export interface DialogOptions {
    /** The dialog should have a button to close the dialog. */
    cancelable?: boolean;
    /** The dialog should replace existing dialogs of different owner without respect. */
    force?: boolean;
    /** The dialog should be replaced by new dialogs of different owner without respect. */
    forceable?: boolean;
}
//# sourceMappingURL=DialogManager.d.ts.map