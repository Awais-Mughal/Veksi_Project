declare global {
    namespace math {
        function evaluate(expression: string): number;
    }
}
import { ContextMenu } from './ContextMenu.js';
declare class TcHmiCalculator extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the current layout keys dom events destroy functions. */
    protected __destroyLayoutKeysDomEvents: TcHmi.DestroyFunction[];
    /** Reference to the menu keys dom events destroy functions. */
    protected __destroyMenuKeysDomEvents: TcHmi.DestroyFunction[];
    /** Reference to the history elements dom events destroy functions. */
    protected __destroyHistoryElementsDomEvents: TcHmi.DestroyFunction[];
    /** Internal reference to the attribute "data-tchmi-result" */
    protected __result: number | null | undefined;
    /** Internal reference to the attribute "data-tchmi-default-layout" */
    protected __layout: LayoutName | null | undefined;
    /** Reference to the root dom element of the current control template as HTMLElement. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the calculator container element. */
    protected __elementCalculatorContainer: HTMLElement;
    /** Reference to the calculator history container element. */
    protected __elementHistoryContainer: HTMLElement;
    /** Reference to the calculator history scroll container element. */
    protected __elementHistoryScrollContainer: HTMLElement;
    /** Reference to the calculator history menu container element. */
    protected __elementHistoryMenuContainer: HTMLElement;
    /** Reference to the calculator full display container element. */
    protected __elementFullDisplayContainer: HTMLElement;
    /** Reference to the calculator keyboard container element. */
    protected __elementKeyboardContainer: HTMLElement;
    /** Reference to the calculator display term container element. */
    protected __elementDisplayTermContainer: HTMLElement;
    /** Reference to the calculator display term input element. */
    protected __elementDisplayResultTermInput: HTMLInputElement;
    /** Reference to the calculator display result container element. */
    protected __elementDisplayResultTermContainer: HTMLElement;
    /** Reference to the calculator display result span element. */
    protected __elementDisplayTermSpan: HTMLSpanElement;
    /** Reference to the calculator menu bar container element. */
    protected __elementMenuBarContainer: HTMLElement;
    /** Reference to the calculator menu scientific icon element. */
    protected __elementScientificIcon: HTMLElement;
    /** Reference to the calculator menu history icon element. */
    protected __elementHistoryIcon: HTMLElement;
    /** Reference to the calculator delete history icon element. */
    protected __elementDeleteHistoryIcon: HTMLElement;
    /** Reference to the calculator copy icon container element. */
    protected __elementResultCopyIconContainer: HTMLElement;
    /** Reference to the calculator input context menu element. */
    protected __elementInputContextMenu: ContextMenu;
    /** The current layout object*/
    protected __layoutObject: Layout | undefined;
    /** Button elements of the current keyboard layout */
    protected __currentKeyboardButtons: WeakMap<Key, HTMLElement | SVGElement>;
    /** History elements of the calculator */
    protected __historyElements: HTMLElement[];
    /** Cache for history entries */
    protected __historyCache: HistoryEntry[];
    /** Display term buffer*/
    protected __displayTermBuffer: string[];
    /** Keep alive old value */
    protected __oldResult: string;
    /** Indicates if the last operation was an equation */
    protected __lastOperationWasEquation: boolean;
    /** Indicates if the calculator is in degrees mode */
    protected __isDeg: boolean;
    /** The current decimal separator*/
    protected __decimalSeparator: string;
    /** Localization */
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    private __addLocalizedElement;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    private __removeLocalizedElement;
    /**
     * Sets the result of the member variable result.
     * @param valueNew The new value for result
     */
    private __setResult;
    /**
     * Returns the current value of the member variable result.
     * @returns the current value of the member variable result.
     */
    getResult(): number | null | undefined;
    protected __openLayoutFileAsync(layout: Layout): void;
    /**
     * Adds event listeners to the current layout keys.
     * @returns
     */
    protected __addEventsToCurrentLayoutKeys(): void;
    /**
     * EventHandler for the click event of the scientific layout key.
     */
    protected __onScientificKeyClick(): void;
    /**
     * EventHandler for the onResized event.
     */
    protected __onHistoryKeyClick(): void;
    /**
     * EventHandler for the click event of the delete all history icon.
     */
    protected __onHistoryAllDeleteClick(): void;
    /**
     * EventHandler for the click event of the result copy icon.
     */
    protected __onResultCopyClick(): void;
    /**
     * EventHandler for the click event of the display term span element.
     */
    protected __onDisplayTermSpanClick(): void;
    /**
     * EventHandler for the paste event of the display result term input element.
     */
    protected __onInputPaste(event: ClipboardEvent): void;
    /**
     * EventHandler for the click event of keyboard keys.
     */
    protected __onKeyboardKeyClick(event: MouseEvent): void;
    /**
     * EventHandler for the pointerdown event of keyboard keys.
     */
    protected __onKeyboardKeyPointerDown(event: MouseEvent): void;
    /**
     * EventHandler for the pointerup event of keyboard keys.
     */
    protected __onKeyboardKeyPointerUp(event: MouseEvent): void;
    /**
     * EventHandler for the pointerleave event of keyboard keys.
     */
    protected __onKeyboardKeyPointerLeave(event: MouseEvent): void;
    /**
     * EventHandler for the keydown event of the physical keyboard.
     * @param event The keyboard event
     */
    protected __onKeyDown(event: KeyboardEvent): void;
    /**
     * sets the layout style (position, dimension, label) of the keys
     */
    protected __setLayoutStyles(): void;
    /**
     * Serializes the key object to the display term and updates the display term buffer.
     * @param keyObj The key object to be serialized
     */
    protected __serializeKeyToDisplay(keyObj: Key): void;
    /**
     * Adds term and calculated result to the history container.
     * @param historyEntry The history entry to be added, containing term and result.
     * @param comesFromCache If true, the history entry comes from cache and should not be saved again.
     */
    protected __addToHistory(historyEntry: HistoryEntry, comesFromCache?: boolean): void;
    /**
     * Creates a context menu for the history element.
     * @param element The history element to create the context menu for.
     */
    protected __createHistoryElementContextMenu(historyElement: HTMLDivElement): void;
    /**
     * Creates a context menu for the input element.
     * @param element The input element to create the context menu for.
     */
    protected __createInputElementContextMenu(inputElement: HTMLInputElement): void;
    /**
     * EventHandler for the click event of a history element.
     * @param event The click event
     * @returns
     */
    protected __onHistoryElementClick(event: Event): void;
    /**
     * EventHandler for the contextmenu event of a history element.
     * @param event The contextmenu event
     * @returns
     */
    protected __onHistoryElementContextmenu(event: Event): void;
    /**
     * EventHandler for the pointerDown event.
     */
    protected __onPointerDown(event: Event): void;
    /**
     * Repairs the display term buffer by iterating over the input value and replacing special characters with their corresponding values.
     */
    protected __repairDisplayTermBuffer(): void;
    /**
     * EventHandler for the click event of the copy icon in the context menu of a history element.
     * @param historyElement The history element that was clicked.
     * @param contextMenu The context menu that was opened.
     * @returns
     */
    protected __onHistoryElementCopyClick(historyElement: HTMLElement, contextMenu: ContextMenu): void;
    /**
     * EventHandler for the click event of the copy icon in the context menu of a input element.
     * @param inputElement The input element that was clicked.
     * @param contextMenu The context menu that was opened.
     * @returns
     */
    protected __onInputElementCopyClick(inputElement: HTMLInputElement, contextMenu: ContextMenu): void;
    /**
     * EventHandler for the click event of the delete icon in the context menu of a history element.
     * @param historyElement The history element that was clicked.
     * @param contextMenu The context menu that was opened.
     */
    protected __onHistoryElementDeleteClick(historyElement: HTMLElement, contextMenu: ContextMenu): void;
    /**
     * EventHandler for the click event of the paste icon in the context menu of a input element.
     * @param inputElement The input element that was clicked.
     * @param contextMenu The context menu that was opened.
     */
    protected __onInputElementPasteClick(inputElement: HTMLInputElement, contextMenu: ContextMenu): void;
    /**
     * Deletes the history elements and their events.
     * @param elements The elements to be deleted. Can be a single HTMLElement or an array of HTMLElements.
     */
    protected __deleteHistoryAndEvents(elements: HTMLElement | HTMLElement[]): void;
    protected __extractLastNumberFromBuffer(): string;
    /**
     * Writes the display term buffer to the display term input field.
     */
    protected __writeBufferToDisplayTermInput(): void;
    /**
     * Parses the term and replaces special characters with their corresponding values.
     * @param term The term to be parsed
     * @returns The parsed term
     */
    protected __parseTermToCalc(term: string): string;
    /**
     * Replaces (nested) mathematical expressions like log, ln, and square root with their corresponding function calls.
     * @param expr The expression to be modified
     * @returns The modified expression with log and ln replaced
     */
    protected __replaceMathExpressions(expr: string): string;
    /**
     * Parses the term and replaces special characters with their corresponding values.
     * @param term The term to be parsed
     * @returns The parsed term
     */
    protected __parseTermToDisplay(term: string): string;
    /**
     * Calculates the term and returns the result.
     * @param term The term to be calculated
     * @returns The result of the calculation
     */
    protected __calculateTerm(term: string): {
        value: number;
        error: string | undefined;
    };
    /**
     * Opens a layout file and returns the layout object.
     * @param layoutFile The name of the layout file to be opened (without the .js extension)
     * @returns The layout object
     */
    protected __openLayoutFile(layoutFile: LayoutName): Promise<Layout>;
    /**
     * Get last math operation
     * @param term The term to extract the last math operation from
     * @returns The last math operation as string
     */
    protected __getLastMathOperation(term: string): string;
    /**
     * Merges single letter math functions in the buffer back into logical operators.
     */
    protected __mergeMathFunctionsInBuffer(): void;
    protected __insertDeg(expr: string): string;
    /**
     * Sets the value of layout
     * @param valueNew The new value for layout
     * Possible Values: Standard, Scientific
     */
    setLayout(valueNew: LayoutName | null): void;
    /**
     * Returns the current value of layout.
     * @returns The current value of layout.
     */
    getLayout(): LayoutName | null | undefined;
    /**
     * Processes the current layout attribute value.
     */
    __processLayout(): void;
}
type LayoutName = 'Scientific' | 'Standard';
export interface Layout {
    name: string;
    keys: Key[];
    dimensions: Dimensions;
}
interface Key {
    geometry: Geometry;
    key: string;
    label: string | SvgLabelDefinition;
}
interface Geometry {
    /** Definition as percent of the full keyboard */
    top: number;
    /** Definition as percent of the full keyboard */
    left: number;
    /** Definition as percent of the full keyboard */
    width: number;
    /** Definition as percent of the full keyboard */
    height: number;
}
interface Dimensions {
    width: number;
    height: number;
}
interface SvgLabelDefinition {
    type: string;
    svg: {
        dimensions: Dimensions;
        path: string;
    };
}
interface HistoryEntry {
    term: string;
    result: string;
}
export { TcHmiCalculator as Control };
declare const _TcHmiCalculator: typeof TcHmiCalculator;
type tTcHmiCalculator = TcHmiCalculator;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiCalculator: typeof _TcHmiCalculator;
        type TcHmiCalculator = tTcHmiCalculator;
    }
}
//# sourceMappingURL=TcHmiCalculator.esm.d.ts.map