// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************



export declare class ControlCommunication extends Communication {
    constructor(ecDiagnostics: EcDiagnostics);
    subscribe(commands: TcHmi.Server.ICommand[] | TcHmi.Server.ICommand, interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): number | null;
    unsubscribe(subscriptionId: number | null | undefined, callback?: (data: any) => any): number | null;
    writeSymbol(symbol: string, writeValue: any, callback?: (data: any) => any, cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
}


export declare class ControlLocalization extends Localization {
    constructor(tchmiControlLocalization: TcHmi.Locale.ControlLocalization);
    private __localizationReader;
    private __destroyLocalizationWatch;
    getLocalizedText(contentKey: string): string;
    destroy(): void;
}



declare class TcHmiEcDiagnostics extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __ecDiagnostics: EcDiagnostics;
    protected __loadTemplatePromise: Promise<void> | null;
    /**
     * Internal reference to the attribute "data-tchmi-device"
     */
    protected __device: string | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-allow-zoom-and-pan"
     */
    protected __allowZoomAndPan: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-toolbox-reset-view"
     */
    protected __toolboxResetView: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-experimental-mode"
     */
    protected __experimentalMode: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-init-topology-view"
     */
    protected __initTopologyView?: InitTopologyViewFlat | null;
    /** Reference to the root dom element of the current control template as  jquery object. */
    protected __elementTemplateRoot: JQuery;
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
    private __themeDataChangedDestroyFn?;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    resetView(): void;
    addTopMostLayer(element: HTMLElement): void;
    removeTopMostLayer(element: HTMLElement): void;
    __updateTheme(): void;
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
     * Sets the value of the member variable "device" if the new value is not equal to the current value
     * @param valueNew The new value for device.
     */
    setDevice(valueNew: string | null): void;
    getDevice(): string | undefined;
    /**
     * Sets the value of the member variable "allowZoomAndPan" if the new value is not equal to the current value
     * @param valueNew The new value for boolean allowZoomAndPan.
     */
    setAllowZoomAndPan(valueNew: boolean | null): void;
    getAllowZoomAndPan(): boolean | undefined;
    /**
     * Sets the value of the member variable "toolboxResetView" if the new value is not equal to the current value
     * @param valueNew The new value for boolean toolboxResetView.
     */
    setToolboxResetView(valueNew: boolean | null): void;
    getToolboxResetView(): boolean | undefined;
    /**
     * Sets the value of the member variable "experimentalMode" if the new value is not equal to the current value
     * @param valueNew The new value for boolean experimentalMode.
     *
     * NOTICE: The Experimental Mode is intended only for those who understand and accept the potential risks,
     * including untested features, unstable functionalities and unexpected behaviors; proceed with caution.
     */
    setExperimentalMode(valueNew: boolean | null): void;
    getExperimentalMode(): boolean | undefined;
    protected __processEcDiagnosticsConfig(): void;
    /**
     * Sets the value of the member variable "setInitTopologyView" if the new value is not equal to the current value
     * @param valueNew The new value for object setInitTopologyView.
     */
    setInitTopologyView(valueNew: InitTopologyViewFlat | null): void;
    /**
     * The watch callback for the initTopologyView object resolver.
     */
    protected __onResolverForInitTopologyViewCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<InitTopologyViewFlat | null>): void;
    getInitTopologyView(): InitTopologyViewFlat | null | undefined;
}
export interface InitTopologyViewFlat {
    posX: number;
    posY: number;
    zoom: number | null;
}
export { TcHmiEcDiagnostics as Control };
declare const _TcHmiEcDiagnostics: typeof TcHmiEcDiagnostics;
type tTcHmiEcDiagnostics = TcHmiEcDiagnostics;
type tInitTopologyViewFlat = InitTopologyViewFlat;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiEcDiagnostics: typeof _TcHmiEcDiagnostics;
        type TcHmiEcDiagnostics = tTcHmiEcDiagnostics;
        namespace TcHmiEcDiagnostics {
            type InitTopologyViewFlat = tInitTopologyViewFlat;
        }
    }
}
