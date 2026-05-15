import { AccordionItem } from './TcHmiAccordionItem.js';
/**
     * How to use
     * HTML example
    <tchmi-accordion>
        <tchmi-accordion-item name="Item1" open>
            <tchmi-accordion-header>Header 1</tchmi-accordion-header>
            <tchmi-accordion-content">Content 1</tchmi-accordion-content>
        </tchmi-accordion-item>
        <tchmi-accordion-item name="Item2">
            <tchmi-accordion-header>Header 2</tchmi-accordion-header>
            <tchmi-accordion-content>Content 1</tchmi-accordion-content>
        </tchmi-accordion-item>
        <tchmi-accordion-item name="Item3">
            <tchmi-accordion-header>Header Only</tchmi-accordion-header>
        </tchmi-accordion-item>
    </tchmi-accordion>
     **/
export declare class Accordion extends HTMLElement {
    /**
     * Map of all valid AccordionItems including content and header
     * Key is the name of the AccordionItem
     */
    private __items;
    /** When set to true only one opened item per level is allowed */
    private __autoCollapse;
    /**
     * Contains all functions which are fired on item change.
     */
    private __itemClickedCallbacks;
    /**
     * Contains all functions which are fired on item down is changed.
     */
    private __itemDownChangedCallbacks;
    private __itemContentOpenedCallbacks;
    private __itemContentClosedCallbacks;
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
     * Adds an item to the accordion.
     */
    addItem(name: string, header: HTMLElement, content?: HTMLElement): AccordionItem | null;
    /**
     * Removes an item from the accordion.
     */
    removeItemByName(name: string): void;
    protected __headerClickedCallback(clickedItem: AccordionItem): void;
    protected __headerExpandedCallback(expandedItem: AccordionItem): void;
    protected __headerDownChangedCallback(changedItem: AccordionItem): void;
    protected __itemContentOpenedCallback(changedItem: AccordionItem): void;
    protected __itemContentClosedCallback(changedItem: AccordionItem): void;
    /**
     * Add callback, which is fired when an item is clicked.
     * @param cb Function which is fired when an item is clicked.
     */
    addItemClickedCallback(cb: (item: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when an item is clicked.
     * @param cb Function which is fired when an item is clicked.
     */
    removeItemClickedCallback(cb: (item: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the down class is added or removed from an item.
     * @param cb Function which is fired when the down class is added or removed from an item.
     */
    addItemDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the down class is added or removed from an item.
     * @param cb Function which is fired when the down class is added or removed from an item.
     */
    removeItemDownChangedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the content is opened.
     * @param cb Function which is fired when the content is opened.
     */
    addItemContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the content is opened.
     * @param cb Function which is fired when the content is opened.
     */
    removeItemContentOpenedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Add callback, which is fired when the content is closed.
     * @param cb Function which is fired when the content is closed.
     */
    addItemContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Remove callback, which is fired when the content is closed.
     * @param cb Function which is fired when the content is closed.
     */
    removeItemContentClosedCallback(cb: (changedItem: AccordionItem) => void): void;
    /**
     * Function to set the auto collapse value.
     */
    setAutoCollapse(value: boolean): void;
    /**
     * Returns the current auto collapse value
     * @returns
     */
    getAutoCollapse(): boolean;
    /**
     * Returns the items of the accordion.
     */
    getItems(): Map<string, AccordionItem>;
    /**
     * Returns a specific item by its name.
     */
    getItemByName(name: string): AccordionItem | undefined;
}
declare const _Accordion: typeof Accordion;
type tAccordion = Accordion;
declare global {
    namespace TcHmi.Controls.Helpers.TcHmiAccordion {
        let Accordion: typeof _Accordion;
        type Accordion = tAccordion;
    }
}
export {};
//# sourceMappingURL=TcHmiAccordion.d.ts.map