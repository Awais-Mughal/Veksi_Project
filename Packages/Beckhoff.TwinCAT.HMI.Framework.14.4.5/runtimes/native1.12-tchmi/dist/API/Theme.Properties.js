import{baseTcHmiControl}from"../Controls/System/baseTcHmiControl.js";import{controlManager}from"../System/ControlManager.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{themeManager}from"../System/ThemeManager.js";import{Errors}from"./_Types.js";
/**
 * Parses every source of implicit properties and returns this or null
 * Can have different value after the event onThemeDataChanged.
 * The order of resources are
 * 1) control class
 * 2) theme definition of the control type in project
 * 3) theme definition in control
 * 4) defaultValueInternal in Description.json of the control
 * @param control Control which needs the resource
 * @param propertyName name of the property
 * @template T Type of the default value
 * @preserve (Part of the public API)
 */export function getDefaultValue(control,propertyName){return control instanceof baseTcHmiControl?isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?{error:Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}:themeManager.getDefaultPropertyValue(control,propertyName):{error:Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}}
/**
 * Sets the default value of a property and change it (if needed) on theme change.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */export function setThemeValue(control,propertyName){if(!(control instanceof baseTcHmiControl))return Errors.E_PARAMETER_INVALID;if(isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1}))return Errors.E_PARAMETER_INVALID;let error=controlManager.setControlProperty(control,propertyName,null);return error?error.code:Errors.NONE}
/**
 * After calling this function the control property will not be changed on theme change anymore.
 * Does not change the property value.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */export function releaseThemeValue(control,propertyName){return control instanceof baseTcHmiControl?isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?Errors.E_PARAMETER_INVALID:(themeManager.unwatchAttributeDefaults(control,propertyName),Errors.NONE):Errors.E_PARAMETER_INVALID}