import { Server } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { TcHmiControl, DestroyFunction, Localizable } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { OkCancelPrompt } from '../../Helpers/TcHmiPopups/OkCancelPrompt.js';
import { DirectoryBrowser } from '../../Helpers/TcHmiDirectoryBrowser/DirectoryBrowser.js';
import type { PathDisplay } from '../../Helpers/TcHmiDirectoryBrowser/PathDisplay.js';
export declare class SelectRecipeTypePrompt extends OkCancelPrompt<{
    name: string;
    recipeType: Server.RecipeManagement.RecipeType;
}> {
    #private;
    protected __parentControl: TcHmiControl.Control;
    protected __recipeTypeBrowser: DirectoryBrowser<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType>;
    protected __initialPath: string[] | null;
    protected __recipeManagementDomain: string | null;
    protected __allowedRecipeTypes: string[] | null;
    protected __preselectedRecipeType: string[];
    protected __unwatchRecipeTypesList: DestroyFunction | null;
    protected __emptyNotification: HTMLDivElement;
    /**
     * Creates a new SelectRecipeTypePrompt instance.
     * @param pathDisplay The display to show the currently chosen path in.
     * @param parentControl The control which owns the popup.
     */
    constructor(pathDisplay: PathDisplay, parentControl: TcHmiControl.Control);
    /**
     * Handler for the PathChanged event of the recipe type browser.
     * @param currentItem The current item.
     * @param path The path to the current item.
     */
    protected __onPathChanged(currentItem: DirectoryBrowser.Item<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType> | null, path: string[] | null): void;
    /**
     * Handler for the SelectionChanged event of the recipe type browser.
     * @param selectedItem The selected item, or null if nothing is selected.
     * @param path The current path.
     * @param selectedItemName The name of the selected item, or null if nothing is selected.
     */
    protected __onSelectionChanged(selectedItems: DirectoryBrowser.DescendantItem<Server.RecipeManagement.RecipeType, Server.RecipeManagement.FolderRecipeType>[] | null): void;
    /**
     * Suspends the RecipeTypeBrowser of this popup.
     */
    suspend(): void;
    /**
     * Resumes the RecipeTypeBrowser of this popoup.
     */
    resume(): void;
    /**
     * Sets the path of the RecipeTypeBrowser to the root directory.
     */
    reset(): Promise<void>;
    /**
     * Sets the recipeManagementDomain. The recipeManagementDomain must be set to be able to browse recipe types.
     * @param recipeManagementDomain The server domain that is used for recipe management.
     */
    setRecipeManagementDomain(recipeManagementDomain: string | null): void;
    /**
     * Sets the allowedRecipeTypes. If not an empty array or null, only recipe types that are included will be shown.
     * @param allowedRecipeTypes The list of allowed recipe types.
     */
    setAllowedRecipeTypes(allowedRecipeTypes: string[] | null): void;
    /**
     * Sets the preselectedRecipeType.
     * @param preselectedRecipeType The preselected recipe type.
     */
    setPreselectedRecipeType(preselectedRecipeType: string[]): void;
    /**
     * Gets the currently selected recipe type. Returns null if no recipe type is selected.
     */
    getSelectedRecipeType(): Promise<{
        name: string;
        recipeType: Server.RecipeManagement.RecipeType;
    } | null>;
    /**
     * Unwatches and rewatches the recipe types list.
     */
    protected __watchRecipeTypes(): void;
    /**
     * Callback function for TcHmi.Server.RecipeManagement.watchRecipeList.
     * @param data The recipes.
     */
    protected __onRecipeTypeListWatch(data: Server.RecipeManagement.IWatchResultObject<Server.RecipeManagement.FolderRecipeType>): void;
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
            recipeType: Server.RecipeManagement.RecipeType;
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
    noRecipeTypesText: Localizable;
}
//# sourceMappingURL=SelectRecipeTypePrompt.d.ts.map