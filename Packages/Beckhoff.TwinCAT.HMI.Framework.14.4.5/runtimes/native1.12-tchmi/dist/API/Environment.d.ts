import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
/**
 * Returns the dynamic framework base path.
 * For example: 'Beckhoff.TwinCAT.HMI.Framework'
 * @preserve (Part of the public API)
 */
export declare function getBasePath(): string;
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param type Control type name
 */
export declare function getControlBasePath(type: string): string | null;
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */
export declare function getControlBasePathEx(control: baseTcHmiControl): string | null;
/**
 * Returns the dynamic base path of a function.
 * @preserve (Part of the public API)
 * @param name Function name
 */
export declare function getFunctionBasePath(name: string): string | null;
/**
 * Returns the dynamic base path of a package.
 * @preserve (Part of the public API)
 * @param name Package name
 */
export declare function getPackageBasePath(name: string): string | null;
/**
 * Returns an object describing if the current browser is a TcEmbeddedBrowser and what its capabilities are.
 */
export declare function getBrowserCapabilities(): BrowserCapabilities;
/**
 * Returns the host base uri (with no pathname) which under normal circumstances is in the form "https://192.0.2.1:2020"
 * but can for example be "https://192.0.2.1/TcHmiSrv" in reverse proxy scenarios.
 * In this example http traffic to the external url "https://192.0.2.1/TcHmiSrv" will perhaps be sent to "https://192.0.2.1:2020".
 * If you have to call static urls of the hmi server which are always host related (like "/Config") you should call this function and prepend the result.
 * Example: let configUri = tchmi_path(TcHmi.Environment.getHostBaseUri() + '/Config');
 */
export declare function getHostBaseUri(): string;
/**
 * path+query+hash of the hmi but as seen from the hmi server.
 * Could be different for reverse proxy scenarios.
 * Must be used for populating server redirects like /Logout?Location={1}
 */
export declare function getServerSidePathAndQuery(): string;
export interface BrowserCapabilities {
    isCefSharp: boolean;
    isTcEmbeddedBrowser: boolean;
    isTcUiClient: boolean;
    supportsDownload: boolean;
}
//# sourceMappingURL=Environment.d.ts.map