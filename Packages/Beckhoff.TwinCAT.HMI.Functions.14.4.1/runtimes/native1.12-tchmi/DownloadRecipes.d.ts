import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Downloads a recipe. Downloads all recipes when recipeName is the empty string.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param ctx An object holding functions for success and error.
 * @param filter Reference (path + '::' + name) of the recipe. If this is the empty string this downloads all recipes.
 */
export declare function DownloadRecipes(ctx: SelectableRequired<Context<void>, 'success' | 'error'>, filter: string[] | null, referencedRecipeTypes?: boolean): void;
declare const _DownloadRecipes: typeof DownloadRecipes;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let DownloadRecipes: typeof _DownloadRecipes;
        type DownloadRecipes = typeof _DownloadRecipes;
    }
}
export {};
//# sourceMappingURL=DownloadRecipes.d.ts.map