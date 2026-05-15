import type { Context, Filter, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Exports filtered events.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param ctx An object holding functions for success and error.
 * @param filter The filter to use for the export. If this is an empty array this exports all events.
 * @param filename The filename for the exported file. If this is null/unset a default name is used.
 */
export declare function ExportEvents(ctx: SelectableRequired<Context<void>, 'success' | 'error'>, filter?: Filter | null, filename?: string): void;
declare const _ExportEvents: typeof ExportEvents;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ExportEvents: typeof _ExportEvents;
        type ExportEvents = typeof _ExportEvents;
    }
}
export {};
//# sourceMappingURL=ExportEvents.d.ts.map