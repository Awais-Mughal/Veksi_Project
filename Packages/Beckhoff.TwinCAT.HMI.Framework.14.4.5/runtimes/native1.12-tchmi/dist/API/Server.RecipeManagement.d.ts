import * as Server from './Server.js';
import type { Dictionary, DestroyFunction, IResultObject, IErrorDetails, JsonSchema } from './_Types.js';
/**
 * Lists all available recipe types
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipeTypes(callback?: null | ((this: void, data: IRecipeTypeListResultObject) => void)): IErrorDetails;
/**
 * Lists all available recipe types
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipeTypesEx(options?: IRecipeListOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeTypeListResultObject) => void)): IErrorDetails;
/**
 * Watches a list of all available recipe types
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeTypesList(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<FolderRecipeType>) => void)): DestroyFunction;
/**
 * Returns a recipe types addressed by name and optional path
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: IRecipeTypeGetResultObject) => void)): IErrorDetails;
/**
 * Returns a recipe types addressed by name and optional path
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeTypeEx(recipeTypeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeTypeGetResultObject) => void)): IErrorDetails;
/**
 * Watches a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeType(recipeTypeName: string, path: string | null, options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<RecipeType>) => void)): DestroyFunction;
/**
 * Creates a recipe type folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeFolder(path: string, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe type folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeFolder(path: string, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a new recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeType(recipeTypeName: string, recipeType: RecipeType, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a new recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeEx(recipeTypeName: string, recipeType: RecipeType, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Updates a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeType(recipeTypeName: string, recipeType: RecipeType, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Updates a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeTypeEx(recipeTypeName: string, recipeType: RecipeType, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe type
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeType(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeEx(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe type folder
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeFolder(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe type folder
 * This function provides more options to manipulate the request
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeFolderEx(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeEx(recipeTypeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Lists all available recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipes(callback?: null | ((this: void, data: IRecipeListResultObject) => void)): IErrorDetails;
/**
 * Lists all available recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipesEx(options?: IRecipeListOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeListResultObject) => void)): IErrorDetails;
/**
 * Watches a list of all available recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeList(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<FolderRecipe>) => void)): DestroyFunction;
/**
 * Creates a recipe folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeFolder(path: string, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a recipe folder
 * This function provides more options to manipulate the request
 * @param path name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeFolder(path: string, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a new recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe recipe definition
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipe(recipeName: string, path: string | null, recipe: Recipe, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Creates a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe Recipe definition
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeEx(recipeName: string, path: string | null, recipe: Recipe, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Lists one recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: IGetRecipeResultObject) => void)): IErrorDetails;
/**
 * Lists one recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IGetRecipeResultObject) => void)): IErrorDetails;
/**
 * Watches a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipe(recipeName: string, path: string | null, options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<Recipe>) => void)): DestroyFunction;
/**
 * Updates a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues dictionary of the new values
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipe(recipeName: string, path: string | null, newValues: Dictionary<any>, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Updates a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues Dictionary of the new values
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeEx(recipeName: string, path: string | null, newValues: Dictionary<any>, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Reads all values which is referenced by a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function readFromTarget(recipeName: string, path: string | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): IErrorDetails;
/**
 * Reads all values which is referenced by a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function readFromTargetEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teach(recipeName: string, path: string | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachAsNewRecipe(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachAsNewRecipeEx(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Activates a recipe (writes all values)
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function activate(recipeName: string, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Activates a recipe (writes all values)
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function activateEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Lists all active recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getActiveRecipes(callback?: null | ((this: void, data: IGetActiveRecipesResultObject) => void)): IErrorDetails;
/**
 * Lists all active recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getActiveRecipesEx(options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IGetActiveRecipesResultObject) => void)): IErrorDetails;
/**
 * Watches a list of all active recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchActiveRecipes(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<string[]>) => void)): DestroyFunction;
/**
 * Renames or moves a recipe
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipe(recipeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeEx(recipeName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe folder
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeFolder(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Renames or moves a recipe folder
 * This function provides more options to manipulate the request
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName Mew name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeFolderEx(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Deletes a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * The sibling API downloadRecipesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipes(filter: string | string[] | null, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipesEx(filter: string | string[] | null, path: string | null, options?: IRecipeDownloadOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * The sibling API downloadRecipeTypesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipeTypes(filter: string | string[] | null, path: string | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipeTypesEx(filter: string | string[] | null, path: string | null, options?: IRecipeDownloadOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function uploadRecipeFiles(callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function uploadRecipeFilesEx(options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
export interface RecipeType {
    /** List of RecipeTypes this RecipeType inherits */
    recipeTypeNames?: string[];
    /** List of symbol definitions for this RecipeType */
    members: Dictionary<{
        /** Name of the symbol of this entry */
        symbol: string;
        /** defaultValue for this symbol */
        defaultValue: any;
        /** Schema the value inside a Recipe should validate */
        schema?: JsonSchema;
        /** Engineering unit for this symbol */
        unit?: string;
        comment?: string;
        enabled?: boolean;
        /** Groups for engineering display */
        group?: string;
        /** Engineering display order */
        order?: number;
    } | {
        /**
         * References another recipeType.
         * The used recipe name will be in the recipe as a string value.
         */
        recipeType: string;
        enabled?: boolean;
        /** Groups for engineering display */
        group?: string;
        /** Engineering display order */
        order?: number;
        /** Engineering unit for this symbol */
        unit?: string;
        comment?: string;
    }>;
    options?: {
        /** None: no restriction from recipeType
                Disabled: All member of the recipe are disabled */
        enabled?: 'None' | 'Disabled';
        comment?: string;
    };
}
/** Dictionary of folders or RecipeTypes */
export interface FolderRecipeType {
    [index: string]: FolderRecipeType | RecipeType;
}
export interface IRecipeListResultObject extends IResultObject {
    value?: FolderRecipe;
}
export interface Recipe {
    /** Full path of the RecipeType this Recipe implements */
    recipeTypeName: string;
    /**
     * Values for the symbols or the name of a linked recipe.
     * Key is the symbol name or recipeType name.
     */
    values: Dictionary<any>;
}
/** Dictionary of folders or Recipes */
export interface FolderRecipe {
    [index: string]: FolderRecipe | Recipe;
}
export interface IRecipeTypeListResultObject extends IResultObject {
    value?: FolderRecipeType;
}
export interface IRecipeTypeGetResultObject extends IResultObject {
    value?: RecipeType;
}
export interface IGetRecipeResultObject extends IResultObject {
    value?: Recipe;
}
export interface IReadFromTargetResultObject extends IResultObject {
    /** This is an example key "subFolder::myRecipe" */
    value?: Dictionary<Recipe>;
}
export interface IGetActiveRecipesResultObject extends IResultObject {
    recipeList?: string[];
}
/** Options for all recipe APIs */
export interface IRecipeOptions {
    /** domain of the RecipeManagement. defaults to TcHmiRecipeManagement */
    domain?: string;
    parallel?: boolean;
}
export interface IRecipeListOptions extends IRecipeOptions {
    /** Subpath to list a subfolder */
    path?: string;
}
export interface IRecipeDownloadOptions extends IRecipeOptions {
    /** The export should contain referenced recipe types, too. Defaults to false. */
    referencedRecipeTypes?: boolean;
}
export interface IRecipeWatchOptions extends IRecipeOptions {
}
export interface IWatchResultObject<T = any> extends IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: DestroyFunction;
    response?: Server.IMessage<T>;
}
/**
 * Type guard for recipes. Returns true if the given candidate is a Recipe, false otherwise
 * @param candidate The candidate to test.
 */
export declare function isRecipe(candidate: FolderRecipe | Recipe): candidate is Recipe;
/**
 * Type guard for recipe types. Returns true if the given candidate is a RecipeType, false otherwise
 * @param candidate The candidate to test.
 */
export declare function isRecipeType(candidate: FolderRecipeType | RecipeType): candidate is RecipeType;
//# sourceMappingURL=Server.RecipeManagement.d.ts.map