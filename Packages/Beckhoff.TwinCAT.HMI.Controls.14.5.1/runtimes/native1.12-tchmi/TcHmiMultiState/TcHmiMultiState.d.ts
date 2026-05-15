// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************

declare class TcHmiMultiState extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template as HTMLElement. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the background color element as HTMLDivElement. */
    protected __elementBackgroundColor: HTMLDivElement;
    /** Reference to the icon element as HTMLImageElement. */
    protected __elementIcon: HTMLDivElement;
    /** Reference to the text element as HTMLDivElement. */
    protected __elementText: HTMLDivElement;
    /** Reference to the text span element as HTMLSpanElement. */
    protected __elementTextSpan: HTMLSpanElement;
    /** Current value of the attribute "data-tchmi-state" */
    protected __state: any | null | undefined;
    /** Current value of the attribute "data-tchmi-state-list" */
    protected __stateList: IStateStructure[] | null | undefined;
    /** Current value of the attribute "data-tchmi-ignore-type-safety" */
    protected __ignoreTypeSafety: boolean | undefined;
    /** Current value of the attribute "data-tchmi-fallback-icon" */
    protected __fallbackIcon: string | undefined | null;
    /** Current value of the attribute "data-tchmi-fallback-background-color" */
    protected __fallbackBackgroundColor: TcHmi.Color | undefined | null;
    /** Current value of the attribute "data-tchmi-text-color" */
    protected __textColor: TcHmi.SolidColor | null | undefined;
    /** Current value of the attribute "data-tchmi-fallback-text" */
    protected __fallbackText: string | undefined | null;
    /** Current value of the attribute "data-tchmi-horizontal-text-alignment" */
    protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
    /** Current value of the attribute "data-tchmi-vertical-text-alignment" */
    protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
    /** Current value of the attribute "data-tchmi-word-wrap" */
    protected __wordWrap: boolean | undefined;
    /** Current value of the attribute "data-tchmi-text-padding" */
    protected __textPadding: TcHmi.FourSidedCss | null | undefined;
    /** Current value of the attribute "data-tchmi-text-font-size" */
    protected __textFontSize: number | undefined;
    /** Current value of the attribute "data-tchmi-text-font-size-unit" */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /** Current value of the attribute "data-tchmi-text-font-family" */
    protected __textFontFamily: TcHmi.FontFamily | null | undefined;
    /** Current value of the attribute "data-tchmi-text-font-style" */
    protected __textFontStyle: TcHmi.FontStyle | undefined;
    /** Current value of the attribute "data-tchmi-text-font-weight" */
    protected __textFontWeight: TcHmi.FontWeight | undefined;
    /** Current value of the attribute "data-tchmi-icon-width" */
    protected __iconWidth: number | undefined;
    /** Current value of the attribute "data-tchmi-icon-width-unit" */
    protected __iconWidthUnit: TcHmi.DimensionUnit | undefined;
    /** Current value of the attribute "data-tchmi-icon-height" */
    protected __iconHeight: number | undefined;
    /** Current value of the attribute "data-tchmi-icon-height-unit" */
    protected __iconHeightUnit: TcHmi.DimensionUnit | undefined;
    /** Current value of the attribute "data-tchmi-icon-horizontal-alignment" */
    protected __iconHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
    /** Current value of the attribute "data-tchmi-icon-vertical-alignment" */
    protected __iconVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
    /** Current value of the attribute "data-tchmi-icon-padding" */
    protected __iconPadding: TcHmi.FourSidedCss | null | undefined;
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
     * Create and set the Image
     * @param state The state to display.
     */
    __displayCurrentState(state: IStateStructure | null): void;
    /**
     * Handle the given state.
     */
    __handleState(): void;
    /**
     * Sets the value of the member variable "State" if the new value is not equal to the current value
     * and calls the associated process function (processState) after that.
     * @param valueNew The new value for State.
     */
    setState(valueNew: any): void;
    /**
     * Returns the current value of the member variable State.
     * @returns the current value of the member variable State.
     */
    getState(): any;
    /**
     * Processes the current value of State.
     */
    protected __processState(): void;
    /**
     * Sets the StateList value and calls the associated process function (processStateList).
     * @param valueNew The new value for the StateList attribute.
     *
     */
    setStateList(valueNew: IStateStructure[] | null): void;
    /**
     * The watch callback for the stateList object resolver.
     */
    protected __onResolverForStateListWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<IStateStructure[] | null>): void;
    /**
     * Returns the current StateList value.
     * @returns The current value of the StateList.
     */
    getStateList(): IStateStructure[] | null | undefined;
    /**
     * Processes the current stateList attribute value.
     */
    __processStateList(): void;
    /**
     * Sets the ignore type safety attribute and calls the associated process function (processIgnoreTypeSafety).
     * @param valueNew The new value for ignoreTypeSafety.
     */
    setIgnoreTypeSafety(valueNew: boolean | null): void;
    /**
     * Returns the current value of ignoreTypeSafety.
     * @returns The current value of ignoreTypeSafety.
     */
    getIgnoreTypeSafety(): boolean | undefined;
    /**
     * Processes the current ignoreTypeSafety attribute value.
     */
    protected __processIgnoreTypeSafety(): void;
    /**
     * Sets the value of the member variable "FallbackIcon" if the new value is not equal to the current value
     * and calls the associated process function (processFallbackIcon) after that.
     * @param valueNew The new value for FallbackIcon.
     */
    setFallbackIcon(valueNew: string | null): void;
    /**
     * Returns the current value of the member variable FallbackIcon.
     * @returns the current value of the member variable FallbackIcon.
     */
    getFallbackIcon(): string | null | undefined;
    /**
     * Processes the current FallbackIcon attribute value.
     */
    protected __processFallbackIcon(): void;
    /**
     * Sets the value of the member variable "FallbackBackgroundColor" if the new value is not equal to the current value
     * and calls the associated process function (processFallbackBackgroundColor) after that.
     * @param valueNew The new value for FallbackBackgroundColor.
     */
    setFallbackBackgroundColor(valueNew: TcHmi.Color | null): void;
    /**
     * The watch callback for the fallbackBackgroundColor object resolver.
     */
    protected __onResolverForFallbackBackgroundColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color | null>): void;
    /**
     * Returns the current value of the member variable FallbackBackgroundColor.
     * @returns the current value of the member variable FallbackBackgroundColor.
     */
    getFallbackBackgroundColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").Color | null | undefined;
    /**
     * Processes the current FallbackBackgroundColor attribute value.
     */
    protected __processFallbackBackgroundColor(): void;
    /**
     * Sets the text color and calls the associated process function (processTextColor).
     * @param valueNew The new value for textColor.
     */
    setTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForTextColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of textColor.
     * @returns The current value of textColor.
     */
    getTextColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    /**
     * Processes the current textColor attribute value.
     */
    protected __processTextColor(): void;
    /**
     * Sets the value of the member variable "FallbackText" if the new value is not equal to the current value
     * and calls the associated process function (processFallbackText) after that.
     * @param valueNew The new value for FallbackText.
     */
    setFallbackText(valueNew: string | null): void;
    /**
     * Returns the current value of the member variable FallbackText.
     * @returns the current value of the member variable FallbackText.
     */
    getFallbackText(): string | null | undefined;
    /**
     * Processes the current FallbackText attribute value.
     */
    protected __processFallbackText(): void;
    /**
     * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
     * @param valueNew The new value for textHorizontalAlignment.
     */
    setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
    /**
     * Returns the current value of horizontalTextAligment.
     */
    getTextHorizontalAlignment(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").HorizontalAlignment | null | undefined;
    /**
     * Processes the current textHorizontalAlignment attribute value.
     */
    protected __processTextHorizontalAlignment(): void;
    /**
     * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
     * @param valueNew The new value for textVerticalAlignment.
     */
    setTextVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
    /**
     * Returns the current value of textVerticalAlignment.
     */
    getTextVerticalAlignment(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").VerticalAlignment | null | undefined;
    /**
     * Processes the current textVerticalAlignment attribute value.
     */
    protected __processTextVerticalAlignment(): void;
    /**
     * Sets the wordWrap value and calls the associated process function (processWordWrap).
     * @param valueNew The new value for wordWrap.
     */
    setWordWrap(valueNew: boolean | null): void;
    /**
     * Returns the current value of wordWrap.
     * @returns The current value of wordWrap.
     */
    getWordWrap(): boolean | undefined;
    /**
     * Processes the current wordWrap attribute value.
     */
    protected __processWordWrap(): void;
    /**
     * Sets the textPadding value and calls the associated process function (processTextPadding) after it.
     * @param valueNew The new value for the textPadding attribute as object.
     */
    setTextPadding(valueNew: TcHmi.FourSidedCss | null): void;
    /**
     * The watch callback for the textPadding object resolver.
     */
    protected __onResolverForTextPaddingWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.FourSidedCss>): void;
    /**
     * Returns the current textPadding value.
     * @returns The current value of the textPadding member variable as json in string format.
     */
    getTextPadding(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").FourSidedCss | null | undefined;
    /**
     * Processes the current textPadding attribute.
     */
    protected __processTextPadding(): void;
    /**
     * Sets the font size and calls the associated process function (processTextFontSize).
     * @param valueNew The new value for textFontSize.
     */
    setTextFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of textFontSize.
     */
    getTextFontSize(): number | undefined;
    /**
     * Processes the current textFontSize attribute value.
     */
    protected __processTextFontSize(): void;
    /**
     * Sets the font size and calls the associated process function (processTextFontSizeUnit).
     * @param valueNew The new value for textFontSizeUnit.
     */
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of textFontSizeUnit.
     */
    getTextFontSizeUnit(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").FontSizeUnit | undefined;
    /**
     * Processes the current textFontSizeUnit attribute value.
     */
    protected __processTextFontSizeUnit(): void;
    /**
     * Sets the font family and calls the associated process function (processTextFontFamily).
     * @param valueNew The new value for textFontFamily.
     */
    setTextFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of textFontFamily.
     */
    getTextFontFamily(): string | null | undefined;
    /**
     * Processes the current textFontFamily attribute value.
     */
    protected __processTextFontFamily(): void;
    /**
     * Sets the font style and calls the associated process function (processTextFontStyle).
     * @param valueNew The new value for textFontStyle.
     */
    setTextFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of textFontStyle.
     */
    getTextFontStyle(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").FontStyle | undefined;
    /**
     * Processes the current textFontStyle attribute value.
     */
    protected __processTextFontStyle(): void;
    /**
     * Sets the font weight and calls the associated process function (processTextFontWeight).
     * @param valueNew The new value for textFontWeight.
     */
    setTextFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of textFontWeight.
     */
    getTextFontWeight(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").FontWeight | undefined;
    /**
     * Processes the current textFontWeight attribute value.
     */
    protected __processTextFontWeight(): void;
    /**
     * Sets the value of the member variable "IconWidth" if the new value is not equal to the current value
     * @param valueNew The new value for IconWidth.
     */
    setIconWidth(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable iconWidth.
     */
    getIconWidth(): number | undefined;
    /**
     * Processes the current value of iconWidth.
     */
    protected __processIconWidth(): void;
    /**
     * Sets the icon width unit and calls the associated process function (processIconWidthUnit).
     * @param valueNew The new value for iconWidthUnit.
     */
    setIconWidthUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of IconWidthUnit.
     */
    getIconWidthUnit(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").DimensionUnit | undefined;
    /**
     * Processes the current iconWidthUnit attribute value.
     */
    protected __processIconWidthUnit(): void;
    /**
     * Sets the value of the member variable "IconHeight" if the new value is not equal to the current value
     * @param valueNew The new value for IconHeight.
     */
    setIconHeight(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable iconHeight.
     */
    getIconHeight(): number | undefined;
    /**
     * Processes the current value of iconHeight.
     */
    protected __processIconHeight(): void;
    /**
     * Sets the icon height unit and calls the associated process function (processIconHeightUnit).
     * @param valueNew The new value for iconHeightUnit.
     */
    setIconHeightUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of IconHeightUnit.
     */
    getIconHeightUnit(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").DimensionUnit | undefined;
    /**
     * Processes the current iconHeightUnit attribute value.
     */
    protected __processIconHeightUnit(): void;
    /**
     * Sets the iconHorizontalAlignment value and calls the associated process function (processIconHorizontalAlignment).
     * @param valueNew The new value for iconHorizontalAlignment.
     */
    setIconHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
    /**
     * Returns the current value of horizontalIconAlignment.
     */
    getIconHorizontalAlignment(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").HorizontalAlignment | null | undefined;
    /**
     * Processes the current iconHorizontalAlignment attribute value.
     */
    protected __processIconHorizontalAlignment(): void;
    /**
     * Sets the iconVerticalAlignment value and calls the associated process function (processIconVerticalAlignment).
     * @param valueNew The new value for iconVerticalAlignment.
     */
    setIconVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
    /**
     * Returns the current value of iconVerticalAlignment.
     */
    getIconVerticalAlignment(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").VerticalAlignment | null | undefined;
    /**
     * Processes the current iconVerticalAlignment attribute value.
     */
    protected __processIconVerticalAlignment(): void;
    /**
     * Sets the iconPadding value and calls the associated process function (processIconPadding) after it.
     * @param valueNew The new value for the iconPadding attribute as object.
     */
    setIconPadding(valueNew: TcHmi.FourSidedCss | null): void;
    /**
     * The watch callback for the iconPadding object resolver.
     */
    protected __onResolverForIconPaddingWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.FourSidedCss>): void;
    /**
     * Returns the current iconPadding value.
     * @returns The current value of the iconPadding member variable as json in string format.
     */
    getIconPadding(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").FourSidedCss | null | undefined;
    /**
     * Processes the current iconPadding attribute.
     */
    protected __processIconPadding(): void;
}
/**
 * Interface structure for the displayed states.
 * Used as an array to match the state with the actual state variable.
 */
export interface IStateStructure {
    state: any;
    stateBackgroundColor: TcHmi.Color | null | undefined;
    stateText: string | null | undefined;
    stateIcon: string | null | undefined;
    stateTextColor: TcHmi.SolidColor | null | undefined;
}
export { TcHmiMultiState as Control };
declare const _TcHmiMultiState: typeof TcHmiMultiState;
type tTcHmiMultiState = TcHmiMultiState;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiMultiState: typeof _TcHmiMultiState;
        type TcHmiMultiState = tTcHmiMultiState;
    }
}
