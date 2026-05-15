import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Reads the current values which are referenced from a base recipe and write it into the same recipe.
 * @param ctx Context object which provides context specific data and functions.
 * @param recipeReference
 */
export declare function TeachRecipe(ctx: SelectableRequired<Context, 'success' | 'error'>, recipeReference: string | null): void;
declare const _TeachRecipe: typeof TeachRecipe;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TeachRecipe: typeof _TeachRecipe;
        type TeachRecipe = typeof _TeachRecipe;
    }
}
export {};
//# sourceMappingURL=TeachRecipe.d.ts.map