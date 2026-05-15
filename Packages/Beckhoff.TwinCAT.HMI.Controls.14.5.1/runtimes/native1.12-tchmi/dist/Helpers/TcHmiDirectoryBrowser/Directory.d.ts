import { DirectoryBrowser } from './DirectoryBrowser.js';
/**
 * The data model for a directory and the current path and selected item.
 */
export declare class Directory<TFile, TFolder> {
    private __root;
    private __path;
    private __currentItem;
    private __selectedItems;
    private __navigationToFilesAllowed;
    private __multiSelectAllowed;
    private __onBeforePathChangeManager;
    /** Event handlers that are called before the path is changed. If the cancelable parameter is true, returning false from one of the handlers will cancel the path change. */
    onBeforePathChange: Readonly<{
        add: (callback: (newCurrentItem: DirectoryBrowser.Item<TFile, TFolder>, newPath: string[], cancelable: boolean) => Promise<boolean>) => () => void;
        remove: (callback: (newCurrentItem: DirectoryBrowser.Item<TFile, TFolder>, newPath: string[], cancelable: boolean) => Promise<boolean>) => void;
    }>;
    private __onBeforeSelectionChangeManager;
    /** Event handlers that are called before the selection is changed. If the cancelable parameter is true, returning false from one of the handlers will cancel the selection change. */
    onBeforeSelectionChange: Readonly<{
        add: (callback: (newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[], cancelable: boolean) => Promise<boolean>) => () => void;
        remove: (callback: (newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[], cancelable: boolean) => Promise<boolean>) => void;
    }>;
    private __onSelectionChangeManager;
    /** Event handlers that are called after the selection has changed. */
    onSelectionChange: Readonly<{
        add: (callback: (selectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[]) => void) => () => void;
        remove: (callback: (selectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[]) => void) => void;
    }>;
    private __onSelectedItemUpdateManager;
    /** Event handlers that are called when one of the selected items is updated. This happens when the payload or metadata of the item changes. */
    onSelectedItemUpdate: Readonly<{
        add: (callback: (selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder> | null) => void) => () => void;
        remove: (callback: (selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder> | null) => void) => void;
    }>;
    private __onPathChangeManager;
    /** Event handlers that are called after the path has changed. */
    onPathChange: Readonly<{
        add: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>, path: string[]) => void) => () => void;
        remove: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>, path: string[]) => void) => void;
    }>;
    private __onCurrentItemUpdateManager;
    /** Event handlers that are called when the current item is updated. This happens when the payload or metadata of the item changes. */
    onCurrentItemUpdate: Readonly<{
        add: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>) => void) => () => void;
        remove: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>) => void) => void;
    }>;
    private __onDirectoryUpdateManager;
    /** Event handlers that are called after the directory was updated. */
    onDirectoryUpdate: Readonly<{
        add: (callback: (root: DirectoryBrowser.Root<TFile, TFolder>) => void) => () => void;
        remove: (callback: (root: DirectoryBrowser.Root<TFile, TFolder>) => void) => void;
    }>;
    /**
     * Creates a new data model.
     * @param __root The root of the folder structure
     */
    constructor(__root: DirectoryBrowser.Root<TFile, TFolder>);
    /**
     * Gets the root of the folder structure
     */
    get root(): DirectoryBrowser.Root<TFile, TFolder>;
    /**
     * Sets a new root, validates the current path and updates the selection. Returns false if the current path is no longer valid with the new root. In that case the path will be truncated to a valid value.
     * @param value The new root
     */
    setRootAndValidate(value: DirectoryBrowser.Root<TFile, TFolder>): Promise<boolean>;
    /**
     * Gets the current path.
     */
    get path(): string[];
    /**
     * Gets an array of Item objects describing the path.
     */
    get decoratedPath(): DirectoryBrowser.Item<TFile, TFolder>[];
    /**
     * Sets a new path, validates it and clears the selection. Returns false if the new path is invalid and could not be applied or if the action was canceled.
     * @param value The new path
     */
    setPathAndValidate(value: string[], cancelable?: boolean): Promise<boolean>;
    /**
     * Pushes a new name onto the path, validates it and clears the selection. Returns false if the path with the pushed name is invalid and could not be applied or if the action was canceled.
     * @param name The new name to push
     */
    pushPath(name: string, cancelable?: boolean): Promise<boolean>;
    /**
     * Pops the last name from the path. Returns the popped name or null if the path was already empty.
     */
    popPath(cancelable?: boolean): Promise<string | false | null>;
    /**
     * Gets current the folder or file. This is the item the path points to.
     */
    get currentItem(): DirectoryBrowser.Item<TFile, TFolder>;
    /**
     * Gets the current folder. If the current item is a file its parent is returned, otherwise the current item itself.
     */
    get currentFolder(): DirectoryBrowser.Root<TFile, TFolder> | DirectoryBrowser.Folder<TFile, TFolder> | DirectoryBrowser.FolderLikeItem<TFile, TFolder>;
    /**
     * Gets the names of the selected items that are children of the current item.
     */
    get selectedItemNames(): Set<string>;
    /**
     * Gets the selected items.
     */
    get selectedItems(): DirectoryBrowser.DescendantItem<TFile, TFolder>[];
    /**
     * Selects the given item. Returns false if the action was canceled.
     * @param item The item to select.
     * @param expandSelection Controls whether the newly selected element should be added to the already existing selection or replace it.
     * @param cancelable Controls whether this action should be cancelable by returning false in one of the beforeSelectionChange event handlers.
     */
    selectItem(item: DirectoryBrowser.DescendantItem<TFile, TFolder>, expandSelection: boolean, cancelable?: boolean): Promise<boolean>;
    /**
     * Selects the child of the current item with the given name. Returns false if no child with the given name exists or the action was canceled.
     * @param name The name of the item to select.
     * @param expandSelection Controls whether the newly selected element should be added to the already existing selection or replace it.
     * @param cancelable Controls whether this action should be cancelable by returning false in one of the beforeSelectionChange event handlers.
     */
    selectItem(name: string, expandSelection: boolean, cancelable?: boolean): Promise<boolean>;
    /**
     * Deselects the given item. Returns false if the action was canceled.
     * @param name The item to deselect.
     * @param cancelable Controls whether this action should be cancelable by returning false in one of the beforeSelectionChange event handlers.
     */
    deselectItem(item: DirectoryBrowser.DescendantItem<TFile, TFolder>, cancelable?: boolean): Promise<boolean>;
    /**
     * Deselects the item with the given name. Returns false if the action was canceled.
     * @param name The name of the item to deselect.
     * @param cancelable Controls whether this action should be cancelable by returning false in one of the beforeSelectionChange event handlers.
     */
    deselectItem(name: string, cancelable?: boolean): Promise<boolean>;
    /**
     * Clears the selected elements. Returns false if the action was canceled.
     * @param cancelable Controls whether this action should be cancelable by returning false in one of the beforeSelectionChange event handlers.
     */
    clearSelection(cancelable?: boolean): Promise<boolean>;
    /**
     * Controls whether naviagtion to files is allowed.
     */
    set navigationToFilesAllowed(value: boolean);
    /**
     * Controls whether naviagtion to files is allowed.
     */
    get navigationToFilesAllowed(): boolean;
    /**
     * Controls whether multiselection is allowed.
     */
    set multiSelectAllowed(value: boolean);
    /**
     * Controls whether multiselection is allowed.
     */
    get multiSelectAllowed(): boolean;
    /**
     * Checks if the given root contains a file or folder reachable by the given path and returns an object indicating the validity of the path, containing a valid path and the item the (valid) path leads to.
     * @param root The root item.
     * @param path The path to validate.
     */
    private __validatePath;
    /**
     * Checks if the given items are equivalent. Two items are considered equivalent if they have the same type, name, payload and metadata.
     * Parent and children are ignored because we don't want to compare the whole tree.
     * @param a The first item to compare.
     * @param b The second item to compare.
     */
    private __itemsEquivalent;
}
//# sourceMappingURL=Directory.d.ts.map