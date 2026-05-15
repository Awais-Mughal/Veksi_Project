import { Display } from './Display.js';
import { DirectoryBrowser } from './DirectoryBrowser.js';
export declare class ListBrowsingDisplay extends Display {
    protected __showingParent: boolean;
    protected __lastPointerDown: {
        type: string;
        timestamp: number;
        doubleClickOnNextUp: boolean;
        ignoreNextUp: boolean;
        target: EventTarget | null;
        timeoutID: number;
        coords: {
            x: number;
            y: number;
        };
    };
    protected __pointerMultiselect: boolean;
    protected __formatMetadata: ((item: DirectoryBrowser.Item<unknown, unknown>) => string) | null;
    protected __search: {
        term: string;
        caseSensitive: boolean;
    } | null;
    protected __sort: DirectoryBrowser.Sort | null;
    protected readonly __defaultSort: DirectoryBrowser.Sort;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    /**
     * Creates a new ListBrowsingDisplay.
     * @param element The element that hosts the ListBrowsingDisplay in the DOM.
     * @param parentControl The control that owns the ListBrowsingDisplay.
     */
    constructor(element: HTMLUListElement, parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Event handler for the pointerdown event of document.
     * @param event The event.
     */
    protected __onPointerDown(event: PointerEvent): void;
    /**
     * Event handler for the pointerup event of the list element.
     * @param event The event.
     */
    protected __onPointerUp(event: PointerEvent): void;
    /**
     * Event handler for the pointermove event of document.
     * @param event The event.
     */
    protected __onPointerMove(event: PointerEvent): void;
    /**
     * Event handler for the scroll event of the document and the list element.
     */
    protected __onScroll(): void;
    /**
     * Event handler for the contextmenu event of the list element.
     * @param event The event.
     */
    protected __onContextMenu(event: Event): void;
    /**
     * Checks if the event should be acted upon and if yes, returns the target, item name and whether the target represents the parent item.
     * @param event The event to check.
     */
    protected __preprocessPointerEvent(event: PointerEvent): false | ListBrowsingDisplay.ListItemEvent;
    /**
     * Selects an item.
     * @param event The event containing information about the item to select. Use null to clear the selection.
     */
    protected __select(event: ListBrowsingDisplay.ListItemEvent | null): Promise<void>;
    /**
     * Navigates to a child or parent item.
     * @param event The event containing information about the item that should be navigated to.
     */
    protected __navigate(event: ListBrowsingDisplay.ListItemEvent): void;
    /**
     * Removes all event listeners. Should be called when the owning control is detached or destroyed.
     * @param clear Set to true to remove all child elements from the path element.
     */
    suspend(clear?: boolean): void;
    /**
     * Re-adds event listeners that were previously removed by suspend. Should be called when owning control is reattached.
     */
    resume(): void;
    /**
     * Show metadata about each item.
     * @param metadataFormatter A function that receives an item and returns a string that should be displayed as the metadata
     */
    showMetadata<TFile, TFolder>(metadataFormatter: (item: DirectoryBrowser.Item<TFile, TFolder>) => string): void;
    /**
     * Hides the metadata.
     */
    hideMetadata(): void;
    /**
     * Only displays items that contain the given string in their name.
     * @param term The string to search.
     * @param caseSensitive Whether to perform a case sensitive search.
     */
    search(term: string | null, caseSensitive?: boolean): void;
    /**
     * Sorts the displayed items.
     * @param sorting The sorting to apply.
     * @param caseSensitive Whether to perform a case sensitive sort.
     */
    sort(sorting: TcHmi.SortingInfo[] | null, caseSensitive?: boolean): void;
    /**
     * Processes the directory.
     */
    protected __processDirectory(): void;
    /**
     * Updates the currentItem.
     */
    protected __updateCurrentItem(currentItem: DirectoryBrowser.Item<unknown, unknown> | null | undefined): void;
    /**
     * Creates a new list element, or updates an existing one, to represent the given pathItem.
     * @param item The item to represent.
     * @param status Signals whether the pathItem is the parent of the displayed view, or the current item.
     * @param element Can be set to reuse an existing element.
     */
    protected __createOrUpdateListElement(item: DirectoryBrowser.Item<unknown, unknown>, status?: _ListBrowsingDisplay.ListItemStatus, element?: HTMLLIElement): HTMLLIElement;
    /**
     * Updates the selected item
     * @param selectedItemName The name of the selected item.
     */
    protected __updateSelection(): void;
}
export declare namespace ListBrowsingDisplay {
    enum ListItemStatus {
        Default = 0,
        Selected = 1,
        Current = 2,
        Parent = 3
    }
    interface ListItemEvent {
        target: HTMLLIElement;
        item: {
            isParent: false;
            name: string;
        } | {
            isParent: true;
        };
        multiselect: boolean;
    }
}
import _ListBrowsingDisplay = ListBrowsingDisplay;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ListBrowsingDisplay: typeof _ListBrowsingDisplay;
        type ListBrowsingDisplay = _ListBrowsingDisplay;
        namespace ListBrowsingDisplay {
            type ListItemStatus = _ListBrowsingDisplay.ListItemStatus;
            type ListItemEvent = _ListBrowsingDisplay.ListItemEvent;
        }
    }
}
//# sourceMappingURL=ListBrowsingDisplay.d.ts.map