import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Activates a recipe (writes all values)
 * @param ctx Context object which provides context specific data and functions.
 * @param recipeReference Name of the recipe (could be prefixed with a path if separated with:: )
 */
export declare function ActivateRecipe(ctx: SelectableRequired<Context, 'success' | 'error'>, recipeReference: string | null): void;
declare const _ActivateRecipe: typeof ActivateRecipe;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ActivateRecipe: typeof _ActivateRecipe;
        type ActivateRecipe = typeof _ActivateRecipe;
    }
}
export {};
//# sourceMappingURL=ActivateRecipe.d.ts.map