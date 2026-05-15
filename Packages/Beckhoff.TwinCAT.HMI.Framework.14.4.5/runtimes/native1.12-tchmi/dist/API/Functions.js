import{Errors}from"./_Types.js";import{injectInGlobalObject,functionRegistrations as registrations}from"../System/RegistrationHelpers.js";import{EventProvider}from"./EventProvider.js";let Data;import("../System/System.js").then(module=>{Data=module.Data});
/**
 * Deprecated! Please use registerFunctionEx.
 * @deprecated Please use registerFunctionEx.
 * @param name name of the framework function
 * @param functionImplementation Javascript function to execute
 * @param _descriptionUrl Url for the function description
 * @preserve (Part of the public API)
 */
export function _registerFrameworkFunction(name,functionImplementation,_descriptionUrl){_registerFunction(name,functionImplementation)}
/**
 * Deprecated! Please use registerFunctionEx.
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param functionImplementation Javascript function to execute
 * @preserve (Part of the public API)
 * @deprecated Please use registerFunctionEx.
 */export function _registerFunction(name,functionImplementation){const registration={name,func:functionImplementation,error:Errors.NONE};registrations.map.has(name)?registrations.map.set(name,{error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunction",reason:`Ambiguous registration for the name: "${name}". Function will not be addressable by this name. Please try fully qualified name to access function.`}}):(registrations.map.set(name,registration),registrations.array.push(registration)),EventProvider.raise("System.onFunctionRegistered",registration)}
/**
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param namespace namespace of the function
 * @param functionImplementation Javascript function to execute
 * @param options options
 * @param options.injectInGlobalObject Inject the function implementation at namespace.name in global object
 * @preserve (Part of the public API)
 */export function registerFunctionEx(name,namespace,functionImplementation,options){let foundDuplicate=!1;const qname=namespace?namespace+"."+name:name,registration={name,namespace,error:Errors.NONE,func:functionImplementation};registrations.map.has(name)?registrations.map.set(name,{error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunctionEx",reason:`Ambiguous registration for the name: "${name}". Function will not be addressable by this name. Please try fully qualified name to access function.`}}):(registrations.map.set(name,registration),registrations.array.push(registration)),registrations.map.has(qname)?(registrations.map.set(qname,{error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunctionEx",reason:`Ambiguous registration for the name: "${qname}". Function will not be addressable by this name.`}}),foundDuplicate=!0):(registrations.map.set(qname,registration),options?.injectInGlobalObject&&injectInGlobalObject(qname,functionImplementation)),foundDuplicate||EventProvider.raise("System.onFunctionRegistered",registration)}
/**
 * Returns a registered HMI function
 * @param name Name of the function
 * @preserve (Part of the public API)
 */export function getFunction(name){let module=Data?.Modules.functions.map.get(name);if(module&&module.error===Errors.NONE&&module.reg)return module.reg.func}
/**
 * Gets version information of function by name.
 * @param name Name of the function
 * @preserve (Part of the public API)
 */export function getFunctionVersion(name){let module=Data?.Modules.functions.map.get(name);return module&&module.error===Errors.NONE&&module.description&&"object"==typeof module.description.version?module.description.version:null}