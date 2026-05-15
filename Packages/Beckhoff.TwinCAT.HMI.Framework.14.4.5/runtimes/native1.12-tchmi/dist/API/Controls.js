import{mapControlNamesFromPackageManifestApi1ToApi0,injectInGlobalObject,controlRegistrations as registrations}from"../System/RegistrationHelpers.js";export*as System from"../Controls/System/baseTcHmiControl.js";import{Errors}from"./_Types.js";import{EventProvider}from"./EventProvider.js";import{Log}from"./Log.js";let controlManager,getControlBasePath,getControlBasePathEx;import("../System/ControlManager.js").then(module=>{controlManager=module.controlManager}),import("./Environment.js").then(module=>{getControlBasePath=module.getControlBasePath,getControlBasePathEx=module.getControlBasePathEx});
/**
 * DEPRECATED
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param directory Directory of the Control (base path is the Controls directory).
 * @param template Template file of the Control (base path is the Controls directory).
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 * @deprecated Please use registerEx()
 */
export function _register(controlTypeName,constructor,directory,template){let registration={name:controlTypeName,directory,error:Errors.NONE,apiVersion:0,ctrlConstructor:constructor,template};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}registrations.map.has(controlTypeName)?registrations.map.set(controlTypeName,{apiVersion:1,error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.register",reason:'Ambiguous registration for the type name: "'+controlTypeName+'". Control will not be addressable by this type name. Please try fully qualified name to access control.'}}):registrations.map.set(controlTypeName,registration),registrations.array.push(registration),EventProvider.raise("System.onControlRegistered",registration)}
/**
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param namespace Name of the Control namespace.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param options options
 * @param options.injectInGlobalObject Inject the control implementation at namespace.name in global object
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 */export function registerEx(controlTypeName,namespace,constructor,options){let foundDuplicate=!1,registration={name:controlTypeName,namespace,error:Errors.NONE,apiVersion:1,ctrlConstructor:constructor};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}const qname=namespace?namespace+"."+controlTypeName:controlTypeName;if(registrations.map.has(controlTypeName)?registrations.map.set(controlTypeName,{apiVersion:1,error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the type name: "${controlTypeName}". Control will not be addressable by this type name. Please try fully qualified name to access control.`}}):registrations.map.set(controlTypeName,registration),registrations.map.has(qname)?(registrations.map.set(qname,{apiVersion:1,error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the name: "${qname}". Control will not be usable.`}}),foundDuplicate=!0):(registrations.map.set(qname,registration),options?.injectInGlobalObject&&injectInGlobalObject(qname,constructor)),mapControlNamesFromPackageManifestApi1ToApi0.has(qname)){let nameLegacy=mapControlNamesFromPackageManifestApi1ToApi0.get(qname);registrations.map.has(nameLegacy)?(registrations.map.set(nameLegacy,{apiVersion:1,error:Errors.E_NOT_UNIQUE,errorDetails:{code:Errors.E_NOT_UNIQUE,message:Errors[Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the name: "${nameLegacy}". Control will not be addressable by this name.`}}),foundDuplicate=!0):registrations.map.set(nameLegacy,registration)}foundDuplicate||(registrations.array.push(registration),EventProvider.raise("System.onControlRegistered",registration))}
/**
 * Get control by identifier. Returns the control or undefined.
 * @param id Identifier of the Control.
 * @template T Type of the Control
 * @preserve (Part of the public API)
 */export function get(id){if(!id||!controlManager)return;return controlManager.getControlsCache().get(id)}
/**
 * Gets description information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */export function getDescription(type){return type&&controlManager?tchmi_clone_object(controlManager.getDescription(type,!0)):null}
/**
 * Gets version information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */export function getVersion(type){if(!type||!controlManager)return null;let descr=controlManager.getDescription(type);return descr&&descr.version&&"object"==typeof descr.version?tchmi_clone_object(descr.version):null}
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param type Control type name
 */export function getBasePath(type){return getControlBasePath?.(type)??null}
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */export function getBasePathEx(control){return getControlBasePathEx?.(control)??null}
/**
 * Get an ES5 Map of all controls. Key of the map is the control identifier
 * @preserve (Part of the public API)
 */export function getMap(){return controlManager?tchmi_clone_object(controlManager.getControlsCache(),{cloneMaps:{deepCloneKeys:!1,deepCloneValues:!1}}):(Log.error("[Source=Framework, Module=TcHmi.Controls] Accessing control map failed. System not ready."),new Map)}export function limitPixelDimensionToControlBound(control,dimension,valueToTest){let currentMinValue=null,currentMaxValue=null;return"height"===dimension?("px"===control.getMinHeightUnit()&&(currentMinValue=control.getMinHeight()??null),"px"===control.getMaxHeightUnit()&&(currentMaxValue=control.getMaxHeight()??null)):"width"===dimension&&("px"===control.getMinWidthUnit()&&(currentMinValue=control.getMinWidth()??null),"px"===control.getMaxWidthUnit()&&(currentMaxValue=control.getMaxWidth()??null)),null===valueToTest?currentMinValue:(currentMinValue&&valueToTest<currentMinValue&&(valueToTest=currentMinValue),currentMaxValue&&valueToTest&&valueToTest>currentMaxValue&&(valueToTest=currentMaxValue),valueToTest)}