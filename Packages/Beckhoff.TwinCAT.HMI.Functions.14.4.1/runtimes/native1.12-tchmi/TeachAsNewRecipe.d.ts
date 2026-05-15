import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe.
 * @param ctx Context object which provides context specific data and functions.
 * @param recipeReference
 * @param newRecipeName
 * @param newRecipePath
 */
export declare function TeachAsNewRecipe(ctx: SelectableRequired<Context, 'success' | 'error'>, recipeReference: string | null, newRecipeName: string | null, newRecipePath: string | null): void;
declare const _TeachAsNewRecipe: typeof TeachAsNewRecipe;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TeachAsNewRecipe: typeof _TeachAsNewRecipe;
        type TeachAsNewRecipe = typeof _TeachAsNewRecipe;
    }
}
export {};
//# sourceMappingURL=TeachAsNewRecipe.d.ts.map