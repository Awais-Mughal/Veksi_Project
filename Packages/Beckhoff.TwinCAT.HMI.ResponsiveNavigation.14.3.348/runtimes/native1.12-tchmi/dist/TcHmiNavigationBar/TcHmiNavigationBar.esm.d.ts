import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Control as TcHmiNavigationContent, type MenuItem } from '../TcHmiNavigationContent/TcHmiNavigationContent.esm.js';
import type { Control as TcHmiBreadcrumb, IPathElement } from '../TcHmiBreadcrumb/TcHmiBreadcrumb.esm.js';
declare class TcHmiNavigationBar extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __menuOpen: boolean;
    protected __mobileMode: boolean | null;
    protected __desktopView: boolean | null;
    protected __curHeadElement: HTMLElement | null | undefined;
    protected __showMenuEvents: (keyof GlobalEventHandlersEventMap)[];
    protected __onResizedEventDestroyer: TcHmi.DestroyFunction | null;
    protected __regionChangeEvent: TcHmi.DestroyFunction | null | undefined;
    /** Maps an HTMLElement with event types and their corrosponding function */
    protected __eventList: Map<HTMLElement, Map<string, TcHmi.DestroyFunction>>;
    protected __menuSourceData: MenuItem[] | undefined;
    protected __menuSourceDataRaw: MenuItem[] | null | undefined;
    protected __lastcalledParameter: string | null;
    protected __lastCalledPage: string | null;
    protected __switchBreakpoint: number | null | undefined;
    protected __enableMobileSwitch: boolean | null | undefined;
    protected __alignment: string | null | undefined;
    protected __listenToWindowResize: boolean | null | undefined;
    protected __mouseOverShow: boolean | null | undefined;
    protected __mouseOverShowDelay: number;
    protected __mouseOverShowTimeout: number;
    protected __navContentControl: TcHmiNavigationContent | null | undefined;
    protected __breadCrumbControlId: string | null | undefined;
    protected __targetRegionControl: TcHmi.Controls.System.TcHmiRegion | null | undefined;
    protected __navContentControlSymbolDestroyWatch: TcHmi.DestroyFunction | null | undefined;
    protected __navContentControlSymbol: TcHmi.Symbol<TcHmiNavigationContent> | null | undefined;
    protected __breadCrumbControlSymbolDestroyWatch: TcHmi.DestroyFunction | null | undefined;
    protected __breadCrumbControlSymbol: TcHmi.Symbol<TcHmiBreadcrumb> | null | undefined;
    protected __targetRegionControlSymbolDestroyWatch: TcHmi.DestroyFunction | null | undefined;
    protected __targetRegionControlSymbol: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null | undefined;
    protected __highlightColor: TcHmi.SolidColor | null | undefined;
    protected __fontColor: TcHmi.SolidColor | null | undefined;
    protected __triangleColor: TcHmi.SolidColor | null | undefined;
    protected __paddingLeftRight: number | null | undefined;
    protected __paddingLeftRightUnit: string | null | undefined;
    protected __fontSize: number | null | undefined;
    protected __fontSizeUnit: string | null | undefined;
    protected __mobileMenuImage: string | null | undefined;
    protected __mobileIconWidth: number | null | undefined;
    protected __mobileIconWidthUnit: string | null | undefined;
    protected __mobileIconHeight: number | null | undefined;
    protected __mobileIconHeightUnit: string | null | undefined;
    protected __elementTemplateRoot: JQuery;
    protected __elementNavigationLine: JQuery;
    protected __headlineContainer: JQuery | null | undefined;
    protected __curHeadlineList: JQuery | null | undefined;
    protected __elementTriangle: JQuery | null | undefined;
    /** We have an active mouse/touch down */
    protected __lock: boolean;
    protected __lockTimeStamp: number;
    protected __lastEvent: {
        timestamp: number;
        type: string;
        element: HTMLElement | null | undefined;
        dataId: string | null;
        elementId: string | null | undefined;
    };
    /** This function is only to be used by the System. Other function calls are not intended. */
    __previnit(): void;
    /**
     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /** This function is only to be used by the System. Other function calls are not intended. */
    __attach(): void;
    /** This function is only to be used by the System. Other function calls are not intended.*/
    __detach(): void;
    destroy(): void;
    protected __onWindowResize(): void;
    /**
     * Get AccessConfig with injected access rights of the navigation elements
     */
    getAccessConfig(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").AccessControl[];
    /**
     * Our navigation-only rights should be default true
     * @param name Name of the navigation-only right (?) to check
     */
    getDescriptionAccessByName(name: string): TcHmi.Controls.ControlAccessDescription | null;
    protected __getSubRights(dataObject: any, accessList: TcHmi.AccessControl[]): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").AccessControl[];
    protected __generateItemIds(curPath: any, dataObject: any): any;
    /********* Interfaces ***********/
    raiseOnPageCalled(eventName: string | null | undefined, dataId: string | null | undefined, page: string | null | undefined): void;
    raiseOnMenuClosed(): void;
    setLastHeadId(id: string | undefined): void;
    /************************************** Functions **************************************/
    protected __generatePathObject(dataId: string): IPathElement[] | null;
    protected __loadNavContent(curHeadIndex?: string): void;
    closeMenu(): void;
    protected __hideNavContent(): void;
    protected __getTriangleElement(): JQuery<HTMLElement>;
    protected __getColorOfColorObject(colorObject: TcHmi.SolidColor | null | undefined): string | null;
    protected __clearHeadline(): void;
    protected __isMobileView(): boolean;
    protected __checkBrowserSwitch(): void;
    protected __createNavigationLine(): void;
    /**
     * Add an event to a specific HTMLElement and save the data to be able to remove the eventListener.
     * @param element The element
     * @param event the event type
     * @param callback the function called when the event is raised
     */
    protected __addEvent(element: HTMLElement, event: keyof GlobalEventHandlersEventMap, callback: (event: Event) => void): void;
    /**
     * Clear all events from the event list.
     */
    protected __removeAllEvents(): void;
    protected __hasChildren(elementList: any, index: string | undefined): boolean;
    protected __onRegionContentChanged(event: TcHmi.EventProvider.Event): void;
    protected __searchForActiveContent(elementList: any): boolean;
    /**
     * Recreate the navigation line if the AccessConfig has changed
     */
    __processAccessConfig(): void;
    /************************************** Setter getter processor **************************************/
    setMenuSourceData(valueNew: MenuItem[] | null): void;
    protected __onResolverForMenuSourceDataCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<MenuItem[]>): void;
    getMenuSourceData(): any;
    getMenuSourceDataRaw(): any;
    protected __processMenuSourceData(): void;
    setHighlightColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForHighLightColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    getHighlightColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    protected __processHighlightColor(): void;
    setFontColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForFontColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    getFontColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    protected __processFontColor(): void;
    setTriangleColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForTriangleColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    getTriangleColor(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").SolidColor | null | undefined;
    protected __processTriangleColor(): void;
    setFontSize(valueNew: number | null): void;
    getFontSize(): number | null | undefined;
    protected __processFontSize(): void;
    setFontSizeUnit(valueNew: string | null): void;
    getFontSizeUnit(): string | null | undefined;
    protected __processFontSizeUnit(): void;
    setPaddingLeftRight(valueNew: number | null): void;
    getPaddingLeftRight(): number | null | undefined;
    protected __processPaddingLeftRight(): void;
    setPaddingLeftRightUnit(valueNew: string | null): void;
    getPaddingLeftRightUnit(): string | null | undefined;
    protected __processPaddingLeftRightUnit(): void;
    setSwitchBreakpoint(valueNew: number | null): void;
    getSwitchBreakpoint(): number | null | undefined;
    protected __processSwitchBreakpoint(): void;
    setEnableMobileSwitch(valueNew: boolean | null): void;
    getEnableMobileSwitch(): boolean | null | undefined;
    protected __processEnableMobileSwitch(): void;
    setMobileMenuImage(valueNew: string | null): void;
    getMobileMenuImage(): string | null | undefined;
    protected __processMobileMenuImage(): void;
    setMobileIconWidth(valueNew: number | null): void;
    getMobileIconWidth(): number | null | undefined;
    protected __processMobileIconWidth(): void;
    setMobileIconWidthUnit(valueNew: string | null): void;
    getMobileIconWidthUnit(): string | null | undefined;
    protected __processMobileIconWidthUnit(): void;
    setMobileIconHeight(valueNew: number | null): void;
    getMobileIconHeight(): number | null | undefined;
    protected __processMobileIconHeigth(): void;
    setMobileIconHeightUnit(valueNew: string | null): void;
    getMobileIconHeightUnit(): string | null | undefined;
    protected __processMobileIconHeigthUnit(): void;
    /**
     * DesktopView setter
     * This setter is protected because DesktopView is a readonly attribute.
     * @param valueNew The new value for desktopView.
     */
    protected __setDesktopView(valueNew: boolean | null): void;
    getDesktopView(): boolean | null;
    /**
     * DEPRECATED
     * Please use setNavContentControlSymbol
     * @deprecated Please use setNavContentControlSymbol
     * @param valueNew The new value for navContetentControl.
     */
    setNavContentControl(valueNew: TcHmiNavigationContent | null): void;
    /**
     * DEPRECATED
     * Please use getNavContentControlSymbol
     * @deprecated Please use getNavContentControlSymbol
     */
    getNavContentControl(): TcHmiNavigationContent | null | undefined;
    /**
     * DEPRECATED
     * @deprecated
     */
    protected __processNavContentControl(): void;
    /**
     * DEPRECATED
     * Please use setBreadCrumbControlSymbol
     * @deprecated Please use setBreadCrumbControlSymbol
     * @param valueNew The new value for breadcrumbControl.
     */
    setBreadCrumbControl(valueNew: string | null): void;
    /**
     * DEPRECATED
     * Please use getBreadCrumbControlSymbol
     * @deprecated Please use getBreadCrumbControlSymbol
     */
    getBreadCrumbControl(): string | null | undefined;
    /**
     * DEPRECATED
     * @deprecated
     */
    protected __processBreadCrumbControl(): void;
    /**
     * NavContentControlSymbol setter
     * @param valueNew The new value for navContentControlSymbol.
     */
    setNavContentControlSymbol(valueNew: TcHmi.Symbol<TcHmiNavigationContent> | null): void;
    /**
     * NavContentControlSymbol getter
     */
    getNavContentControlSymbol(): TcHmi.Symbol<TcHmiNavigationContent> | null | undefined;
    protected __processNavContentControlSymbol(ctrl?: TcHmiNavigationContent | null): void;
    protected __onNavContentControlSymbolWatch(data: TcHmi.Symbol.IReadResultObject<TcHmiNavigationContent>): void;
    /**
     * BreadCrumbControlSymbol setter
     * @param valueNew The new value for breadcrumbControlSymbol.
     */
    setBreadCrumbControlSymbol(valueNew: TcHmi.Symbol<TcHmiBreadcrumb> | null): void;
    /**
     * BreadCrumbControlSymbol getter
     */
    getBreadCrumbControlSymbol(): TcHmi.Symbol<TcHmiBreadcrumb> | null | undefined;
    protected __processBreadCrumbControlSymbol(ctrl?: TcHmiBreadcrumb | null): void;
    protected __onBreadCrumbControlSymbolWatch(data: TcHmi.Symbol.IReadResultObject<TcHmiBreadcrumb>): void;
    /**
     * DEPRECATED
     * @deprecated
     * @param valueNew The new value for targetRegionControl.
     */
    setTargetRegionControl(valueNew: TcHmi.Controls.System.TcHmiRegion | null): void;
    /**
     * DEPRECATED
     * @deprecated
     */
    getTargetRegionControl(): TcHmi.Controls.System.TcHmiRegion | null | undefined;
    /**
     * TargetRegionControlSymbol setter
     * @param valueNew The new value for targetRegionControlSymbol.
     */
    setTargetRegionControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null): void;
    /**
     * TargetRegionControlSymbol getter
     */
    getTargetRegionControlSymbol(): TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null | undefined;
    protected __processTargetRegionControlSymbol(ctrl?: TcHmi.Controls.System.TcHmiRegion | null): void;
    protected __onTargetRegionControlSymbol(data: TcHmi.Symbol.IReadResultObject<TcHmi.Controls.System.TcHmiRegion>): void;
    setAlignment(valueNew: string | null): void;
    getAlignment(): string | null | undefined;
    protected __processAlignment(): void;
    /**
     * LastEventParameter setter
     * This setter is protected because LastEventParameter is a readonly attribute.
     * @param valueNew The new value for lastEventParameter.
     */
    protected __setLastEventParameter(valueNew: string | null): void;
    getLastEventParameter(): string | null;
    /**
     * LastPage setter
     * This setter is protected because LastPage is a readonly attribute.
     * @param valueNew The new value for lastPage.
     */
    protected __setLastPage(valueNew: string | null): void;
    getLastPage(): string | null;
    setListenToWindowResize(valueNew: boolean | null): void;
    getListenToWindowResize(): boolean | null | undefined;
    protected __processListenToWindowResize(): void;
    setMouseOverShow(valueNew: boolean | null): void;
    getMouseOverShow(): boolean | null | undefined;
    protected __processMouseOverShow(): void;
}
export { TcHmiNavigationBar as Control };
declare const _TcHmiNavigationBar: typeof TcHmiNavigationBar;
type tTcHmiNavigationBar = TcHmiNavigationBar;
declare global {
    namespace TcHmi.Controls.ResponsiveNavigation {
        const TcHmiNavigationBar: typeof _TcHmiNavigationBar;
        type TcHmiNavigationBar = tTcHmiNavigationBar;
    }
}
//# sourceMappingURL=TcHmiNavigationBar.esm.d.ts.map