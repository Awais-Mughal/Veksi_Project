import{config,Data}from"../System/System.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{themeManager}from"../System/ThemeManager.js";import{Errors}from"./_Types.js";export*as Properties from"./Theme.Properties.js";export*as Resources from"./Theme.Resources.js";
/**
 * Returns the active theme.
 * @preserve (Part of the public API)
 */export function get(){return themeManager.getTheme()}
/**
 * Sets the active theme.
 * @param valueNew Name of the new theme.
 * @preserve (Part of the public API)
 */export function set(valueNew){return isParameterTypeInvalid(valueNew,"valueNew",{type:"string",required:"valueNeeded",minStringLength:1})?Errors.E_PARAMETER_INVALID:themeManager.setTheme(valueNew,!0)}
/**
 * Returns all registered themes of the project and referenced packages.
 * @preserve (Part of the public API)
 */export function getRegisteredThemes(){const res=Object.keys(config.themes);return Data.packages.forEach(pkg=>{if(pkg.manifest.themes)for(const key of Object.keys(pkg.manifest.themes))res.includes(key)||res.push(key)}),res}