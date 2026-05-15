import type { Localization } from './Localization.js';
import { Notifications, NotificationCategory, NotificationLevel } from './Notifications.js';
import { Target } from './Target.js';
import type { Master } from './Master.js';
import { TopologyView } from './Topology.js';
import { DrawingNetwork } from './DrawingNetwork.js';
import type { StatusButton } from './WebComponents/StatusButton/StatusButton.js';
import type { ElementWithCallback } from './WebComponents/ElementWithCallback/ElementWithCallback.js';
import type { PopUp } from './WebComponents/PopUp/PopUp.js';
import './WebComponents/PopUp/PopUp.js';
import type { SelectedDevice } from './ServerRespondDef.js';
import type { Communication } from './Communication.js';
export declare class EcDiagnostics {
    constructor(elementRoot: HTMLElement, localization: Localization, commonPath: string, config: ClientConfigControl | ClientConfigStandalone, customTopMostLayerFns?: {
        add: (element: HTMLElement) => void;
        remove: (element: HTMLElement) => void;
    });
    private __networkView;
    get networkView(): DrawingNetwork;
    private __commonPath;
    get commonPath(): string;
    private __localization;
    getLocalization(): Localization;
    setCustomTopMostLayerFunction(addFn: (element: HTMLElement) => void, removeFn: (element: HTMLElement) => void): void;
    private __customAddTopMostLayerFunction;
    private __customRemoveTopMostLayerFunction;
    setThemedResource(): void;
    clearAllNotifications(): void;
    get notification(): Notifications;
    clearNotification(category?: string | NotificationCategory, level?: NotificationLevel): void;
    setNotification(text: string, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
    createNotification(key: string, params: any): void;
    static createElement<T extends HTMLElement>(tagName: string, options?: ElementCreationOptions): T;
    createStatusButton(text: string): StatusButton;
    private __targets;
    private __selectedDevice;
    getSelectedDevice(): SelectedDevice | null;
    private __notification;
    private __localConfig;
    get config(): ClientConfigControl | ClientConfigStandalone;
    private __view;
    private __elementRoot;
    getElementRoot(): HTMLElement;
    private __comObj;
    set comObj(comObj: Communication | null);
    get comObj(): Communication | null;
    displayView(): void;
    get view(): {
        name: TopologyView;
        target?: Target;
        master?: Master;
    };
    updateConfigDevice(device: string, executeInitOnSuccess: boolean): void;
    updateConfigAllowZoomAndPan(allowZoomAndPan: boolean, executeInitOnSuccess: boolean): void;
    updateConfigToolboxResetView(toolboxResetView: boolean, executeInitOnSuccess: boolean): void;
    updateConfigExperimentalMode(experimental: boolean, executeInitOnSuccess: boolean): void;
    updateConfigInitTopology(initTopology: InitTopologyView, executeInitOnSuccess: boolean): void;
    private __configDevicesSubscription;
    private __targetSubscription;
    private __initialized;
    preInit(executeInitOnSuccess?: boolean): void;
    init(): void;
    private __symbolAccess;
    getSymbolAccess(symbol: string): boolean;
    private __symbolAccessSubscription;
    private __checkSymbolAccess;
    destroy(): void;
    cleanUp(cleanOnlyFromInit?: boolean): void;
    private __updateTarget;
    setViewMaster(master: Master): void;
    updateView(target: Target, master?: Master): void;
    reload(): void;
    resetView(): void;
    private setView;
    private __clearTargets;
    private __addOrUpdateTarget;
    private __templates;
    loadTemplates(): Promise<void>;
    getTemplate<T extends HTMLElement>(name: string): T | null;
    private __contentWrapper;
    get contentWrapper(): HTMLElement;
    addTopMostLayer(element: ElementWithCallback): void;
    addPopUp(popup: PopUp): void;
}
export interface PopUpParameter {
    content: HTMLElement | null;
}
export interface ClientConfigStandalone extends ClientConfigBase {
    tchmiServerHostname: string;
    tchmiServerPort: string;
    tchmiServerSecureConnection: boolean;
    lang: string;
    theme: string;
    logLevel: string;
}
export interface ClientConfigControl extends ClientConfigBase {
}
export interface ClientConfigBase {
    device: string;
    allowZoomAndPan: boolean;
    toolboxResetView: boolean;
    /** The Experimental Mode is intended only for those who understand and accept the potential risks,
     * including untested features, unstable functionalities and unexpected behaviors; proceed with caution. */
    experimentalMode: boolean;
    initTopologyViewPosX: number;
    initTopologyViewPosY: number;
    initTopologyViewZoom: number | null;
}
export interface InitTopologyView {
    pos: {
        x: number;
        y: number;
    };
    zoom: number | null;
}
