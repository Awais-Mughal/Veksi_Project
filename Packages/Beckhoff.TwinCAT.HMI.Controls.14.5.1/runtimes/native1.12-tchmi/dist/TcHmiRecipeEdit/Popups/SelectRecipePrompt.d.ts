import { Server } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Localizable, TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { OkCancelPrompt } from '../../Helpers/TcHmiPopups/OkCancelPrompt.js';
import { DirectoryBrowser } from '../../Helpers/TcHmiDirectoryBrowser/DirectoryBrowser.js';
import type { PathDisplay } from '../../Helpers/TcHmiDirectoryBrowser/PathDisplay.js';
export declare class SelectRecipePrompt extends OkCancelPrompt<{
    name: string;
    recipe: Server.RecipeManagement.Recipe;
}> {
    #private;
    protected __parentControl: TcHmiControl.Control;
    protected __recipeBrowser: DirectoryBrowser<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>;
    protected __initialPath: string[] | null;
    /**
     * Creates a new SelectRecipePrompt instance.
     * @param pathDisplay The display to show the currently chosen path in.
     * @param parentControl The control which owns the popup.
     */
    constructor(pathDisplay: PathDisplay, parentControl: TcHmiControl.Control);
    /**
     * Handler for the PathChanged event of the recipe type browser.
     * @param currentItem The current item.
     * @param path The path to the current item.
     */
    protected __onPathChanged(currentItem: DirectoryBrowser.Item<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe> | null, path: string[] | null): void;
    /**
     * Handler for the SelectionChanged event of the recipe type browser.
     * @param selectedItem The selected item, or null if nothing is selected.
     * @param path The current path.
     * @param selectedItemName The name of the selected item, or null if nothing is selected.
     */
    protected __onSelectionChanged(selectedItems: DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe, Server.RecipeManagement.FolderRecipe>[] | null): void;
    /**
     * Suspends the RecipeBrowser of this popup.
     */
    suspend(): void;
    /**
     * Resumes the RecipeBrowser of this popoup.
     */
    resume(): void;
    /**
     * Sets the path of the RecipeBrowser to the specified value.
     * @param value The path.
     */
    setPath(value: string[]): Promise<{
        name: string;
        recipe: Server.RecipeManagement.Recipe;
    } | null>;
    /**
     * Sets the path of the RecipeBrowser to the root directory.
     */
    reset(): void;
    /**
     * Callback function for TcHmi.Server.RecipeManagement.watchRecipeList.
     * @param data The recipes.
     */
    setRecipeList(rootDirectory: Server.RecipeManagement.FolderRecipe | null): void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     */
    protected __ok(): Promise<void>;
    /**
     * Performs the action for the Cancel button.
     */
    protected __cancel(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<{
        isOk: true;
        value: {
            name: string;
            recipe: Server.RecipeManagement.Recipe;
        };
    } | {
        isOk: false;
        value?: void | undefined;
    }>;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
    headerText: Localizable;
}
//# sourceMappingURL=SelectRecipePrompt.d.ts.map