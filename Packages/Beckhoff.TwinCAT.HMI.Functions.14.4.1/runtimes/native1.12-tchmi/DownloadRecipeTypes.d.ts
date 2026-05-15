import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Downloads all recipes of a server.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param ctx An object holding functions for success and error.
 */
export declare function DownloadRecipeTypes(ctx: SelectableRequired<Context<void>, 'success' | 'error'>, filter: string[] | null, referencedRecipeTypes?: boolean): void;
declare const _DownloadRecipeTypes: typeof DownloadRecipeTypes;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let DownloadRecipeTypes: typeof _DownloadRecipeTypes;
        type DownloadRecipeTypes = typeof _DownloadRecipeTypes;
    }
}
export {};
//# sourceMappingURL=DownloadRecipeTypes.d.ts.map