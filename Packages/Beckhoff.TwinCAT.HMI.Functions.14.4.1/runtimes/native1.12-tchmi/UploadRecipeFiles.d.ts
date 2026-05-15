import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * @param ctx An object holding functions for success and error.
 * @param recipeReference Name of the recipe (could be prefixed with a path if separated with:: )
 */
export declare function UploadRecipeFiles(ctx: SelectableRequired<Context<void>, 'success' | 'error'>): void;
declare const _UploadRecipeFiles: typeof UploadRecipeFiles;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let UploadRecipeFiles: typeof _UploadRecipeFiles;
        type UploadRecipeFiles = typeof _UploadRecipeFiles;
    }
}
export {};
//# sourceMappingURL=UploadRecipeFiles.d.ts.map