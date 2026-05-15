import{baseTcHmiControl}from"../Controls/System/baseTcHmiControl.js";import{Data}from"../System/System.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{themeManager}from"../System/ThemeManager.js";import{Errors}from"./_Types.js";
/**
 * Gets a themed resource.
 * Parses every source of properties and returns this or null
 * Can have different value after the event onThemeDataChanged.
 * The order of resources are
 * 1) control class
 * 2) theme definition of the control type in project
 * 3) theme definition in control
 *
 * @param control Control which needs the resource
 * @param resourceName name of the resource
 * @returns returns the resource or null
 * @template T Type of the value
 * @preserve (Part of the public API)
 */export function get(control,resourceName){return control instanceof baseTcHmiControl?isParameterTypeInvalid(resourceName,"resourceName",{type:"string",required:"valueNeeded",minStringLength:1})?{error:Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}:themeManager.getThemeResource(control,resourceName):{error:Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}}export function resolveBasePath(control,resource){let url;if("control"===resource.origin){let module=Data.Modules.controls.map.get(control.getType());url=module&&module.error===Errors.NONE&&module.package&&module.manifestData?`${module.package.basePath}/${module.manifestData.basePath}/Themes/${resource.originThemeName}/`:module&&module.error===Errors.NONE&&module.configData?`${module.configData.basePath}/Themes/${resource.originThemeName}/`:module&&module.error!==Errors.NONE?"ControlModuleHasError/":"controlNotFoundInSystemCache/"}else url="Themes/"+resource.originThemeName+"/";return url}