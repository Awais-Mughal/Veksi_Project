import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Takes a screenshot via the TcUiClient API (available in TcUiClient).
 * @param ctx An object holding functions for success and error.
 * @param path The target directory path for the screenshot file.
 * @param fileName The filename for the screenshot file.
 * @param querySelectorAll A CSS selector string to select elements to capture.
 * @param selectorIndex An optional index to select a specific element from the query result.
 */
export declare function TcUiClientScreenshot(ctx: SelectableRequired<Context<void>, 'success' | 'error'>, path: string, fileName: string, querySelectorAll: string, selectorIndex?: number): void;
declare const _TcUiClientScreenshot: typeof TcUiClientScreenshot;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TcUiClientScreenshot: typeof _TcUiClientScreenshot;
        type TcUiClientScreenshot = typeof _TcUiClientScreenshot;
    }
}
export {};
//# sourceMappingURL=TcUiClientScreenshot.d.ts.map