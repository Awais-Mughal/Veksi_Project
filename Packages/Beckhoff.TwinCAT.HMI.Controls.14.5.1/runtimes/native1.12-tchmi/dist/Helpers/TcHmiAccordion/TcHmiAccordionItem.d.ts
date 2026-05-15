export declare class AccordionItem extends HTMLElement {
    #private;
    private __name?;
    private __header?;
    private __content?;
    private __disabled;
    private __isOpen;
    private __expanderElement;
    /** Defines if an open item is closed on a normal click */
    private __closeWhenClicked;
    private __destroyOnDisconnect;
    private __headerDestroyFunctions;
    private __pointerUpDestroyer;
    private __headerPointerLeaveDestroyer;
    private __headerPointerEnterDestroyer;
    private __expanderPointerLeaveDestroyer;
    private __expanderPointerEnterDestroyer;
    /**
     * Contains all functions which are fired on item change.
     */
    private __headerClickedCallbacks;
    private __headerDownChangedCallbacks;
    private __headerExpandedCallbacks;
    private __contentOpenedCallbacks;
    private __contentClosedCallbacks;
    constructor();
    /**
     * Is called when the element is connected to the DOM.
     */
    connectedCallback(): void;
    /**
     * Is called when the element is disconnected from the DOM.
     */
    disconnectedCallback(): void;
    /**
     * Callback function for a click on the header.
     */
    protected __onHeaderClick(): void;
    /**
     * Callback function for a click on the expander.
     */
    protected __onExpanderClick(event: Event): void;
    /**
     * Disables or enables the item.
     */
    disable(disable: boolean): void;
    /**
     * Returns true if the element is disabled.
     */
    isDisabled(): boolean;
    /**
     * Function to set a header element.
     */
    setHeader(header: HTMLElement | undefined): void;
    /**
     * Return the current header element.
     */
    getHeader(): HTMLElement | undefined;
    /**
     * Function to set the content element.
     */
    setContent(content: HTMLElement | undefined): void;
    /**
     * Returns the content element.
     */
    getContent(): HTMLElement | undefined;
    /**
     * Function to set the name of the item.
     */
    setName(name: string): void;
    /**
     * Returns the name of the Item.
     */
    getName(): string | undefined;
    /**
     * Opens or closes the content of the item.
     */
    protected __changeState(): void;
    /**
     * Opens the item.
     * @param animationList A list of animation functions. Store the animations of parent elements on a recuresive use of the function. Can be set to "null" if the animation should be skipped.
     */
    open(animationList?: (() => void)[] | null): void;
    /**
     * Closes the element and its child elements.
     */
    close(): void;
    /**
     * Returns the if the element is opened.
     */
    IsOpen(): boolean;
    /**
     * Defines if an open item is closed on a normal click.
     */
    setCloseWhenClicked(valueNew: boolean): void;
    getCloseWhenClicked(): boolean;
    /**
     * Add callback, which is fired when the header is clicked.
     * @param cb Function which is fired when the header is clicked.
     */
    addHeaderClickedCallback(cb: (clickedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the header is clicked.
     * @param cb Function which is fired when the header is clicked.
     */
    removeHeaderClickedCallback(cb: (clickedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the down class is added or removed from the header.
     * @param cb Function which is fired when the down class is added or removed from the header.
     */
    addHeaderDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the down class is added or removed from the header.
     * @param cb Function which is fired when the down class is added or removed from the header.
     */
    removeHeaderDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the header is expanded.
     * @param cb Function which is fired when the header is expanded.
     */
    addHeaderExpandedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the header is expanded.
     * @param cb Function which is fired when the header is expanded.
     */
    removeHeaderExpandedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the content is opened.
     * @param cb Function which is fired when the content is opened.
     */
    addContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the content is opened.
     * @param cb Function which is fired when the content is opened.
     */
    removeContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the content is closed.
     * @param cb Function which is fired when the content is closed.
     */
    addContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the content is closed.
     * @param cb Function which is fired when the content is closed.
     */
    removeContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
    protected __onPointerUp(): void;
    protected __onPointerDown(): void;
    protected __onPointerLeave(): void;
    protected __onPointerEnter(): void;
    protected __onExpanderPointerDown(): void;
    protected __onExpanderPointerLeave(): void;
    protected __onExpanderPointerEnter(): void;
}
declare const _AccordionItem: typeof AccordionItem;
type tAccordionItem = AccordionItem;
declare global {
    namespace TcHmi.Controls.Helpers.TcHmiAccordion {
        let AccordionItem: typeof _AccordionItem;
        type AccordionItem = tAccordionItem;
    }
}
export {};
//# sourceMappingURL=TcHmiAccordionItem.d.ts.map