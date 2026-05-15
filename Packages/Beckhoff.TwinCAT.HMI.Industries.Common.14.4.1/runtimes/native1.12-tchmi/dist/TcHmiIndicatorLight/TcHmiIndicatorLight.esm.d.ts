import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
declare class TcHmiIndicatorLight extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** State of the indicator light */
    protected __stateSymbol: TcHmi.Symbol<boolean> | undefined | null;
    /** Active color of the indicator light */
    protected __activeColor: TcHmi.SolidColor | null | undefined;
    /** Inactive color of the indicator light */
    protected __inactiveColor: TcHmi.SolidColor | null | undefined;
    protected __destroyStateSymbolWatch: TcHmi.DestroyFunction | null;
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
    /**
     * Sets the value of the member variable "StateSymbol" if the new value is not equal to the current value
     * and calls the associated process function (__processStateSymbolResult) after that.
     * @param valueNew The new value for stateSymbol.
     */
    setStateSymbol(valueNew: TcHmi.Symbol | null): void;
    /**
     * Return the state symbol
     */
    getStateSymbol(): TcHmi.Symbol<boolean> | null | undefined;
    /**
     * The watch callback for the StateSymbol.
     * @param data Object containing the new value of the StateSymbol.
     */
    protected __onStateSymbolWatch(data: TcHmi.Symbol.IReadResultObject<boolean>): void;
    protected __processStateSymbolResult(data: TcHmi.Symbol.IReadResultObject<boolean>): void;
    /**
     * Sets the text color and calls the associated process function (processActiveColor).
     * @param valueNew The new value for activeColor.
     */
    setActiveColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the activeColor object resolver.
     */
    protected __onResolverForActiveColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of activeColor.
     */
    getActiveColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    /**
     * Processes the current activeColor attribute value.
     */
    protected __processActiveColor(): void;
    /**
     * Sets the text color and calls the associated process function (processInactiveColor).
     * @param valueNew The new value for inactiveColor.
     */
    setInactiveColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the inactiveColor object resolver.
     */
    protected __onResolverForInactiveColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of inactiveColor.
     */
    getInactiveColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    /**
     * Processes the current inactiveColor attribute value.
     */
    protected __processInactiveColor(): void;
}
export { TcHmiIndicatorLight as Control };
declare const _TcHmiIndicatorLight: typeof TcHmiIndicatorLight;
type tTcHmiIndicatorLight = TcHmiIndicatorLight;
declare global {
    namespace TcHmi.Controls.Beckhoff.Industries.Common {
        const TcHmiIndicatorLight: typeof _TcHmiIndicatorLight;
        type TcHmiIndicatorLight = tTcHmiIndicatorLight;
    }
}
//# sourceMappingURL=TcHmiIndicatorLight.esm.d.ts.map