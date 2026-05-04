// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************


declare class TcHmiSevenSegmentDisplay extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __elementTemplateRoot: HTMLElement;
    protected __activeSegmentColor: TcHmi.SolidColor | null | undefined;
    protected __inactiveSegmentColor: TcHmi.SolidColor | null | undefined;
    /** The displayed value */
    protected __value: number | null | undefined;
    protected __valueSymbol: TcHmi.Symbol<number> | undefined | null;
    protected __valueIsValid: boolean;
    /** The number of overall digits permanently displayed */
    protected __digits: number | null | undefined;
    /** The number decimal digits permanently displayed */
    protected __decimalDigits: number | null | undefined;
    protected __decimalPrecisionMode: TcHmiNumericInput.DecimalPrecisionMode | undefined;
    protected __SegmentElements: TcHmi.Controls.Helpers.TcHmiSevenSegmentElement[];
    /** Reference to the div element used as error display (top most layer) as jquery object. */
    protected __elementInvalidNotification: HTMLElement;
    /** The interval for updateInvalidNotification */
    protected __updateInvalidNotificationInterval: number;
    protected __destroyValueSymbolWatch: TcHmi.DestroyFunction | null;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * Call attribute processor functions here to initialize default values!
     */
    __previnit(): void;
    /**
     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
     */
    __init(): void;
    /**
     * Is called by tachcontrol() after the control instance gets part of the current DOM.
     * Is only allowed to be called from the framework itself!
     */
    __attach(): void;
    /**
     * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
     * Is only allowed to be called from the framework itself!
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    protected __onResized(): void;
    protected __updateInvalidNotification(): void;
    /**
     * Sets the text color and calls the associated process function (processActiveSegmentColor).
     * @param valueNew The new value for activeSegmentColor.
     */
    setActiveSegmentColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the activeSegmentColor object resolver.
     * @param data Object containing the new value for activeSegmentColor
     */
    protected __onResolverForActiveSegmentColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of activeSegmentColor.
     * @returns The current value of activeSegmentColor.
     */
    getActiveSegmentColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    /**
     * Processes the current activeSegmentColor attribute value.
     */
    protected __processActiveSegmentColor(): void;
    /**
     * Sets the text color and calls the associated process function (processInactiveSegmentColor).
     * @param valueNew The new value for inactiveSegmentColor.
     */
    setInactiveSegmentColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the inactiveSegmentColor object resolver.
     * @param data Object containing the new value for inactiveSegmentColor
     */
    protected __onResolverForInactiveSegmentColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of inactiveSegmentColor.
     * @returns The current value of inactiveSegmentColor.
     */
    getInactiveSegmentColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    /**
     * Processes the current inactiveSegmentColor attribute value.
     */
    protected __processInactiveSegmentColor(): void;
    /**
     * Sets the value of the member variable "ValueSymbol" if the new value is not equal to the current value
     * and calls the associated process function (__processValueSymbolResult) after that.
     * @param valueNew The new value for valueSymbol.
     */
    setValueSymbol(valueNew: TcHmi.Symbol | null): void;
    /**
     * Return the state symbol
     */
    getValueSymbol(): TcHmi.Symbol<number> | null | undefined;
    /**
     * The watch callback for the ValueSymbol.
     * @param data Object containing the new value of the ValueSymbol.
     */
    protected __onValueSymbolWatch(data: TcHmi.Symbol.IReadResultObject<number>): void;
    protected __processValueSymbolResult(data: TcHmi.Symbol.IReadResultObject<number>): void;
    /**
     * Sets the value attribute.
     * @param valueNew The new value for value.
     */
    protected __setValue(valueNew: number | null): void;
    /**
     * Processes the current value of attribute value.
     */
    protected __processValue(): void;
    /**
     * Sets the value of the member variable digits.
     * @param valueNew The new value for digits
     */
    setDigits(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable digits.
     * @returns the current value of the member variable digits.
     */
    getDigits(): number | null | undefined;
    /**
     * Sets the value of the member variable decimalDigits.
     * @param valueNew The new value for decimalDigits
     */
    setDecimalDigits(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable decimalDigits.
     * @returns the current value of the member variable decimalDigits.
     */
    getDecimalDigits(): number | null | undefined;
    /**
     * Sets the decimalPrecisionMode attribute.
     * @param valueNew The new value for decimalPrecisionMode.
     */
    setDecimalPrecisionMode(valueNew: TcHmiNumericInput.DecimalPrecisionMode | null): void;
    /**
     * Returns the current value of decimalPrecisionMode.
     */
    getDecimalPrecisionMode(): TcHmiNumericInput.DecimalPrecisionMode | undefined;
    /**
     * Processes the current value of attribute decimalPrecisionMode.
     */
    protected __processDecimalPrecisionMode(): void;
}
export { TcHmiSevenSegmentDisplay as Control };
declare const _TcHmiSevenSegmentDisplay: typeof TcHmiSevenSegmentDisplay;
type tTcHmiSevenSegmentDisplay = TcHmiSevenSegmentDisplay;
declare global {
    namespace TcHmi.Controls.Beckhoff.Industries.Common {
        const TcHmiSevenSegmentDisplay: typeof _TcHmiSevenSegmentDisplay;
        type TcHmiSevenSegmentDisplay = tTcHmiSevenSegmentDisplay;
    }
}
