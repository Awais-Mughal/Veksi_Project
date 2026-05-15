import { Directory } from './Directory.js';
import { Callback } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Display } from './Display.js';
export declare class DirectoryBrowser<TFile, TFolder> {
    protected __displays: Set<Display>;
    protected __directory: Directory<TFile, TFolder> | null;
    protected __suspended: boolean;
    protected __autoSuspended: boolean;
    protected __directoryUpdatesSuspension: {
        suspended: boolean;
        cachedUpdate: DirectoryBrowser.Root<TFile, TFolder> | null | undefined;
    };
    protected __fakeFile: {
        path: string[];
        payload: TFile;
        metadata?: TcHmi.Dictionary<any>;
        remove: () => DirectoryBrowser.Root<TFile, TFolder> | null;
    } | null;
    protected __pathToSet: {
        path: string[];
        callback: (result: boolean | PromiseLike<boolean>) => void;
    } | null;
    protected __itemsToSelect: {
        pathOrName: string[] | string;
        callback?: (result: boolean | PromiseLike<boolean>) => void;
    }[];
    protected __navigationToFilesAllowedCache: boolean;
    private __multiSelectAllowedCache;
    protected __onBeforePathChangeManager: Callback.AsyncCollection<(newCurrentItem: DirectoryBrowser.Item<TFile, TFolder> | null, newPath: string[] | null, cancelable: boolean) => Promise<boolean>>;
    /** Event handlers that are called before the path is changed. If the cancelable parameter is true, returning false from one of the handlers will cancel the path change. */
    onBeforePathChange: Readonly<{
        add: (callback: (newCurrentItem: DirectoryBrowser.Item<TFile, TFolder> | null, newPath: string[] | null, cancelable: boolean) => Promise<boolean>) => () => void;
        remove: (callback: (newCurrentItem: DirectoryBrowser.Item<TFile, TFolder> | null, newPath: string[] | null, cancelable: boolean) => Promise<boolean>) => void;
    }>;
    protected __onBeforeSelectionChangeManager: Callback.AsyncCollection<(newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null, cancelable: boolean) => Promise<boolean>>;
    /** Event handlers that are called before the selection is changed. If the cancelable parameter is true, returning false from one of the handlers will cancel the selection change. */
    onBeforeSelectionChange: Readonly<{
        add: (callback: (newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null, cancelable: boolean) => Promise<boolean>) => () => void;
        remove: (callback: (newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null, cancelable: boolean) => Promise<boolean>) => void;
    }>;
    protected __onSelectionChangeManager: Callback.Collection<(selectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null) => void>;
    /** Event handlers that are called after the selection has changed. */
    onSelectionChange: Readonly<{
        add: (callback: (selectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null) => void) => () => void;
        remove: (callback: (selectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null) => void) => void;
    }>;
    protected __onSelectedItemUpdateManager: Callback.Collection<(selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder>) => void>;
    /** Event handlers that are called when one of the selected items is updated. This happens when the payload or metadata of the item changes. */
    onSelectedItemUpdate: Readonly<{
        add: (callback: (selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder>) => void) => () => void;
        remove: (callback: (selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder>) => void) => void;
    }>;
    protected __onPathChangeManager: Callback.Collection<(currentItem: DirectoryBrowser.Item<TFile, TFolder> | null, path: string[] | null) => void>;
    /** Event handlers that are called after the path has changed. */
    onPathChange: Readonly<{
        add: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder> | null, path: string[] | null) => void) => () => void;
        remove: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder> | null, path: string[] | null) => void) => void;
    }>;
    protected __onCurrentItemUpdateManager: Callback.Collection<(currentItem: DirectoryBrowser.Item<TFile, TFolder>) => void>;
    /** Event handlers that are called when the current item is updated. This happens when the payload or metadata of the item changes. */
    onCurrentItemUpdate: Readonly<{
        add: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>) => void) => () => void;
        remove: (callback: (currentItem: DirectoryBrowser.Item<TFile, TFolder>) => void) => void;
    }>;
    protected __parentControl: TcHmi.Controls.System.TcHmiControl | undefined;
    protected __destroyOnParentDestroy: TcHmi.DestroyFunction[];
    hasData: Promise<void>;
    protected __resolveHasData: () => void;
    /**
     * Creates a new DirectoryBrowser.
     * @param displays A list of components that are responsible for displaying the directory browser.
     */
    constructor(displays?: Iterable<Display>);
    /**
     * Creates a new DirectoryBrowser.
     * @param parentControl The control that uses this directory browser.
     */
    constructor(parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Creates a new DirectoryBrowser.
     * @param displays A list of components that are responsible for displaying the directory browser.
     * @param parentControl The control that uses this directory browser.
     */
    constructor(displays: Iterable<Display>, parentControl?: TcHmi.Controls.System.TcHmiControl);
    /**
     * Adds a display.
     * @param display The display to add.
     */
    addDisplay(display: Display): void;
    /**
     * Removes a display. It will automatically be suspended if it was registered on this DirectoryBrowser.
     * @param display The display to remove.
     */
    removeDisplay(display: Display): void;
    /**
     * Removes all event listeners. Should be called when the owning control is detached or destroyed.
     * @param clear Set to true to remove all child elements from the path and browsing elements.
     */
    suspend(clear?: boolean): void;
    /**
     * Re-adds event listeners that were previously removed by suspend. Should be called when owning control is reattached.
     */
    resume(): void;
    /**
     * Suspends directory updates. Updates that come in after this method was called will be cached and not applied to the DOM until resumeDirectoryUpdates is called.
     */
    suspendDirectoryUpdates(): void;
    /**
     * Resumes directory updates. If an update was chached during the suspension it will be applied now.
     */
    resumeDirectoryUpdates(): void;
    /**
     * Gets the item the path points to. Returns null if the directory browser has no items.
     */
    getCurrentItem(): _DirectoryBrowser.Item<TFile, TFolder> | null;
    /**
     * Gets the current folder. If the current item is a file, the parent folder of the current item is returned, otherwise the current item itself.
     * Returns null if the directory browser has no items.
     */
    getCurrentFolder(): _DirectoryBrowser.FolderLikeItem<TFile, TFolder> | null;
    /**
     * Gets the current path as an array of strings. Returns null if the directory browser has no items.
     */
    getPath(): string[] | null;
    /**
     * Gets the path of the current folder. If the current item is a file, the path of the parent folder is returned, otherwise the path of the current item itself.
     * Returns null if the directory browser has no items.
     */
    getFolderPath(): string[] | null;
    /**
     * Gets the selected item.
     */
    getSelectedItems(): _DirectoryBrowser.DescendantItem<TFile, TFolder>[] | null;
    /**
     * Tries to set the path. Returns false if the path was invalid or the action was canceled.
     * If the DirectoryBrowser does not yet have a directory, the path will be set as soon as a directory is set.
     * @param value The new path.
     */
    setPath(value: string[]): Promise<boolean>;
    /**
     * Tries to select an item. If the current folder does not have an item with the given name, false is returned.
     * If the DirectoryBrowser does not yet have a directory, the item will be selected as soon as a directory is
     * set.
     * @param name The name of the item to select.
     * @param expandSelection Set to false to replace the current selection, set to true to add to the
     * current selection.
     */
    selectItem(name: string, expandSelection: boolean): Promise<boolean>;
    /**
     * Tries to select an item. If the item does not exist, false is returned.
     * If the DirectoryBrowser does not yet have a directory, the item will be selected as soon as a directory is
     * set.
     * @param path The path of the item to select.
     * @param expandSelection Set to false to replace the current selection, set to true to add to the
     * current selection.
     */
    selectItem(path: string[], expandSelection: boolean): Promise<boolean>;
    /**
     * Deselects a selected item. Returns false if no item with the given name was selected or the action was
     * canceled.
     * @param name The name of the item to deselect.
     */
    deselectItem(name: string): Promise<boolean>;
    /**
     * Deselects a selected item. Returns false if no item with the given name was selected or the action was
     * canceled.
     * @param path The path of the item to deselect.
     */
    deselectItem(path: string[]): Promise<boolean>;
    /**
     * Clears the selected items. Returns false if the action was canceled.
     */
    clearSelection(): Promise<boolean>;
    /**
     * Adds a fake file to the directory.
     * @param path The path and name of the file.
     * @param payload The content of the file.
     */
    fakeFile(path: string[], payload: TFile, metadata?: TcHmi.Dictionary<any>): void;
    /**
     * Removes the faked file from the directory.
     */
    clearFakedFile(): void;
    /**
     * Returns whether the directory contains a faked file.
     */
    hasFakedFile(): boolean;
    /**
     * Sets whether it should be allowed to navigate to files.
     * @param value Whether it should be allowed to navigate to files.
     */
    setNavigationToFilesAllowed(value: boolean): void;
    /**
     * Gets whether it should be allowed to navigate to files.
     */
    getNavigationToFilesAllowed(): boolean;
    /**
     * Sets whether it should be allowed to select multiple items.
     * @param value Whether it should be allowed to select multiple items.
     */
    setMultiSelectAllowed(value: boolean): void;
    /**
     * Gets whether it should be allowed to select multiple items.
     */
    getMultiSelectAllowed(): boolean;
    /**
     * Callback for the beforePathChange event of the data model. Triggers onBeforePathChange.
     */
    protected __onBeforePathChange(newCurrentItem: DirectoryBrowser.Item<TFile, TFolder>, path: string[], cancelable: boolean): Promise<boolean>;
    /**
     * Callback for the beforeSelectionChange event of the data model. Triggers onBeforeSelectionChange.
     */
    protected __onBeforeSelectionChange(newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[], cancelable: boolean): Promise<boolean>;
    /**
     * Callback for the selectionChange event of the data model. Triggers onSelectionChange.
     */
    protected __onSelectionChange(newSelectedItems: DirectoryBrowser.DescendantItem<TFile, TFolder>[]): void;
    /**
     * Callback for the selectedItemUpdate event of the data model. Triggers onSelectedItemUpdate.
     */
    protected __onSelectedItemUpdate(selectedItem: DirectoryBrowser.DescendantItem<TFile, TFolder>): void;
    /**
     * Callback for the pathChange event of the data model. Triggers onPathChange.
     */
    protected __onPathChange(currentItem: DirectoryBrowser.Item<TFile, TFolder>, path: string[]): void;
    /**
     * Callback for the currentItemChange event of the data model. Triggers onCurrentItemChange.
     */
    protected __onCurrentItemChange(currentItem: DirectoryBrowser.Item<TFile, TFolder>): void;
    /**
     * Sets the directory.
     * @param rootFolder The root folder object.
     * @param getChildren A function that takes a folder object and returns a map that contains the children of the folder and their names as keys.
     * @param isFile A function that determines if the given object is a file or folder.
     * @param getMetadata A function that returns metadata about the given file or folder.
     */
    setDirectory(rootFolder: TFolder | null, getChildren: (folder: TFolder) => Map<string, TFile | TFolder>, isFile: (candidate: TFile | TFolder) => boolean, getMetadata?: (item: TFile | TFolder) => TcHmi.Dictionary<any>): Promise<void>;
    /**
     * Updates the directory and the path and browsing elements.
     * @param directory The new directory.
     */
    protected __updateDirectory(directory: DirectoryBrowser.Root<TFile, TFolder> | null): Promise<void>;
    /**
     * Builds a directory tree from the root folder.
     * @param rootFolder The root folder object.
     * @param getChildren A function that takes a folder object and returns a map that contains the children of the folder and their names as keys.
     * @param isFile A function that determines if the given object is a file or folder.
     * @param getMetadata A function that returns metadata about the given file or folder.
     */
    protected buildDirectoryTree(rootFolder: TFolder, getChildren: (folder: TFolder) => Map<string, TFile | TFolder>, isFile: (candidate: TFile | TFolder) => candidate is TFile, getMetadata?: (item: TFile | TFolder) => TcHmi.Dictionary<any>): _DirectoryBrowser.Root<TFile, TFolder>;
}
export declare namespace DirectoryBrowser {
    enum ItemType {
        File = 0,
        Folder = 1,
        Root = 2
    }
    /**
     * The root of the directory tree. Fundamentally a folder but does not have a parent or a name.
     */
    interface Root<TFile, TFolder> {
        /**
         * Must be ItemType.Root to identify this object as the root folder
         */
        type: ItemType.Root;
        /**
         * The original folder object
         */
        payload: TFolder;
        /**
         * The children of this folder
         */
        children: Map<string, DescendantItem<TFile, TFolder>>;
        /**
         * Optional metadata
         */
        metadata?: TcHmi.Dictionary<any>;
    }
    /**
     * A folder in the directory tree. Can contain other folders and files as children and has a parent and a name.
     */
    interface Folder<TFile, TFolder> {
        /**
         * Must be ItemType.Folder to identify this object as a folder
         */
        type: ItemType.Folder;
        /**
         * The name of the folder
         */
        name: string;
        /**
         * The original folder object
         */
        payload: TFolder;
        /**
         * The parent of this folder
         */
        parent: FolderLikeItem<TFile, TFolder>;
        /**
         * The children of this folder
         */
        children: Map<string, DescendantItem<TFile, TFolder>>;
        /**
         * Optional metadata
         */
        metadata?: TcHmi.Dictionary<any>;
    }
    /**
     * A file in the directory tree. Has no children, but a parent and a name.
     */
    interface File<TFile, TFolder> {
        /**
         * Must be ItemType.File to identify this object as a file
         */
        type: ItemType.File;
        /**
         * The name of the file
         */
        name: string;
        /**
         * The original file object
         */
        payload: TFile;
        /**
         * The parent of this file
         */
        parent: FolderLikeItem<TFile, TFolder>;
        /**
         * Optional metadata
         */
        metadata?: TcHmi.Dictionary<any>;
    }
    type Item<TFile, TFolder> = Root<TFile, TFolder> | Folder<TFile, TFolder> | File<TFile, TFolder>;
    type FolderLikeItem<TFile, TFolder> = Root<TFile, TFolder> | Folder<TFile, TFolder>;
    type DescendantItem<TFile, TFolder> = Folder<TFile, TFolder> | File<TFile, TFolder>;
    interface Sort {
        sorting: TcHmi.SortingInfo[];
        caseSensitive: boolean;
    }
    /**
     * A utilitiy function that returns -1, 1 or 0 depending on if a should be sorted higher, lower or equal to b
     * according to the given sort.
     * @param sort The sorting to use.
     * @param a The first item to compare.
     * @param b The second item to compare.
     */
    function compare(sort: Sort, a: DescendantItem<unknown, unknown>, b: DescendantItem<unknown, unknown>): number;
    /**
     * Returns the path as an array of strings to the given item.
     * @param item The item to get the path to.
     */
    function getPath(item: Item<unknown, unknown>): string[];
    /**
     * Returns the item indicated by the given path originating from the given root. Returns null if the path is
     * invalid.
     * @param root The root item to start following the path from.
     * @param path The path to follow.
     */
    function getItem<TFile, TFolder>(root: FolderLikeItem<TFile, TFolder>, path: string[]): Item<TFile, TFolder> | null;
}
import _DirectoryBrowser = DirectoryBrowser;
type tDirectory<TFile, TFolder> = Directory<TFile, TFolder>;
declare global {
    namespace TcHmi.Controls.Helpers {
        let DirectoryBrowser: typeof _DirectoryBrowser;
        type DirectoryBrowser<TFile, TFolder> = _DirectoryBrowser<TFile, TFolder>;
        namespace DirectoryBrowser {
            type ItemType = _DirectoryBrowser.ItemType;
            type Root<TFile, TFolder> = _DirectoryBrowser.Root<TFile, TFolder>;
            type Folder<TFile, TFolder> = _DirectoryBrowser.Folder<TFile, TFolder>;
            type File<TFile, TFolder> = _DirectoryBrowser.File<TFile, TFolder>;
            type Item<TFile, TFolder> = _DirectoryBrowser.Item<TFile, TFolder>;
            type FolderLikeItem<TFile, TFolder> = _DirectoryBrowser.FolderLikeItem<TFile, TFolder>;
            type DescendantItem<TFile, TFolder> = _DirectoryBrowser.DescendantItem<TFile, TFolder>;
            type Sort = _DirectoryBrowser.Sort;
            type Directory<TFile, TFolder> = tDirectory<TFile, TFolder>;
        }
    }
}
export {};
//# sourceMappingURL=DirectoryBrowser.d.ts.map