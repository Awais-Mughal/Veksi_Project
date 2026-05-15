import { Display } from './Display.js';
import { DirectoryBrowser } from './DirectoryBrowser.js';
export declare class TreeBrowsingDisplay extends Display {
    protected __treeItems: Map<HTMLElement, DirectoryBrowser.DescendantItem<unknown, unknown>>;
    protected __expandedItems: Set<string>;
    /**
     * Stores information about pointer events to decide if something like a doubleclick or long click should be
     * emulated.
     */
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
    /**
     * Is set to true if a multiselect is in progress that was started by long-pressing an item.
     */
    protected __pointerMultiselect: boolean;
    protected __search: {
        term: string;
        caseSensitive: boolean;
    } | null;
    protected __sort: DirectoryBrowser.Sort | null;
    protected readonly __defaultSort: DirectoryBrowser.Sort;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    /**
     * Creates a new TreeBrowsingDisplay.
     * @param element The element that hosts the TreeBrowsingDisplay in the DOM.
     * @param parentControl The control that owns the TreeBrowsingDisplay.
     */
    constructor(element: HTMLDivElement, parentControl: TcHmi.Controls.System.TcHmiControl);
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
     * Event handler for the pointerup event of the list element.
     * @param event The event.
     */
    protected __onClick(event: MouseEvent): void;
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
     * Event handler for the toggle event of the details elements.
     * @param event The event.
     */
    protected __onToggle(event: ToggleEvent): void;
    /**
     * Checks if the event should be acted upon and if yes, returns the target row, item name and whether
     * multiselect is active.
     * @param event The event to check.
     */
    protected __preprocessPointerEvent(event: PointerEvent): TreeBrowsingDisplay.TreePointerEvent;
    /**
     * Selects an item.
     * @param event The event containing information about the item to select. Use null to clear the selection.
     */
    protected __select(event: TreeBrowsingDisplay.RowEvent | null): Promise<void>;
    /**
     * Navigates to an item.
     * @param event The event containing information about the item that should be navigated to.
     */
    protected __navigate(event: TreeBrowsingDisplay.RowEvent): void;
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
     * Only displays items that contain the given string in their name.
     * @param term The string to search.
     * @param caseSensitive Whether to perform a case sensitive search.
     */
    search(term: string | null, caseSensitive?: boolean): void;
    /**
     * Marks all elements that match the current search.
     */
    protected __performSearch(): void;
    /**
     * Sorts the displayed items.
     * @param sorting The sorting to apply.
     * @param caseSensitive Whether to perform a case sensitive sort.
     */
    sort(sorting: TcHmi.SortingInfo[] | null, caseSensitive?: boolean): void;
    /**
     * Expands all items.
     */
    expandAll(): void;
    /**
     * Collapses all items.
     */
    collapseAll(): void;
    /**
     * Processes the directory.
     */
    protected __processDirectory(): void;
    /**
     * Render the current directory.
     */
    protected __render(): void;
    /**
     * Builds the DOM tree for the given directory. Calls itself recursively.
     * @param directory The directory to build the DOM tree for.
     */
    protected __buildTree(directory: DirectoryBrowser.FolderLikeItem<unknown, unknown>, path?: string[]): DocumentFragment;
}
export declare namespace TreeBrowsingDisplay {
    type TreePointerEvent = RowEvent | ClearEvent | IgnoreEvent;
    interface RowEvent {
        type: 'Row';
        row: HTMLElement;
        item: DirectoryBrowser.DescendantItem<unknown, unknown>;
        multiselect: boolean;
    }
    interface ClearEvent {
        type: 'Clear';
    }
    interface IgnoreEvent {
        type: 'Ignore';
    }
}
import _TreeBrowsingDisplay = TreeBrowsingDisplay;
declare global {
    namespace TcHmi.Controls.Helpers {
        let TreeBrowsingDisplay: typeof _TreeBrowsingDisplay;
        type TreeBrowsingDisplay = _TreeBrowsingDisplay;
        namespace TreeBrowsingDisplay {
            type TreePointerEvent = _TreeBrowsingDisplay.TreePointerEvent;
            type RowEvent = _TreeBrowsingDisplay.RowEvent;
            type ClearEvent = _TreeBrowsingDisplay.ClearEvent;
            type IgnoreEvent = _TreeBrowsingDisplay.IgnoreEvent;
        }
    }
}
//# sourceMappingURL=TreeBrowsingDisplay.d.ts.map