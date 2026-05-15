import{hostBaseUri,serverSidePathAndQuery,Data}from"../System/System.js";import{Errors}from"./_Types.js";let __browserCapabilities={isCefSharp:"CefSharp"in window,isTcEmbeddedBrowser:!1,isTcUiClient:!!window.tcuiclient,supportsDownload:!0};
/**
 * Returns the dynamic framework base path.
 * For example: 'Beckhoff.TwinCAT.HMI.Framework'
 * @preserve (Part of the public API)
 */export function getBasePath(){const frameworkPackage=Data.packages.get("Beckhoff.TwinCAT.HMI.Framework");return tchmi_path(frameworkPackage?.basePath??"Beckhoff.TwinCAT.HMI.Framework")}
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param type Control type name
 */export function getControlBasePath(type){let module=Data.Modules.controls.map.get(type);return module&&module.error===Errors.NONE&&module.package&&"string"==typeof module.package.basePath&&module.manifestData&&"string"==typeof module.manifestData.basePath?tchmi_path(module.package.basePath+"/"+module.manifestData.basePath):module&&module.error===Errors.NONE&&module.configData&&"string"==typeof module.configData.basePath?tchmi_path(module.configData.basePath):null}
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */export function getControlBasePathEx(control){return control?getControlBasePath(control.getType()):null}
/**
 * Returns the dynamic base path of a function.
 * @preserve (Part of the public API)
 * @param name Function name
 */export function getFunctionBasePath(name){let module=Data.Modules.functions.map.get(name);return module&&module.error===Errors.NONE&&module.package&&"string"==typeof module.package.basePath&&module.manifestData&&"string"==typeof module.manifestData.basePath?tchmi_path(module.package.basePath+"/"+module.manifestData.basePath):null}
/**
 * Returns the dynamic base path of a package.
 * @preserve (Part of the public API)
 * @param name Package name
 */export function getPackageBasePath(name){let packageInfo=Data.packages.get(name);return packageInfo&&"string"==typeof packageInfo.basePath?tchmi_path(packageInfo.basePath):null}export function getBrowserCapabilities(){return __browserCapabilities}export function getHostBaseUri(){return hostBaseUri}export function getServerSidePathAndQuery(){return serverSidePathAndQuery}!async function(){if(!("CefSharp"in window))return void(__browserCapabilities={isCefSharp:!1,isTcEmbeddedBrowser:!1,isTcUiClient:!!window.tcuiclient,supportsDownload:!0});const cefSharpWindow=window;if(!cefSharpWindow.tcEmbeddedBrowserGlobals)try{await cefSharpWindow.CefSharp.BindObjectAsync("tcEmbeddedBrowserGlobals")}catch(ex){return}__browserCapabilities={isCefSharp:!0,isTcEmbeddedBrowser:!!cefSharpWindow.tcEmbeddedBrowserGlobals,isTcUiClient:!!window.tcuiclient,supportsDownload:cefSharpWindow.tcEmbeddedBrowserGlobals?.supportsDownload??!0}}();