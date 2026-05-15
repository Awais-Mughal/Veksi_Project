import{baseTcHmiControl}from"../Controls/System/baseTcHmiControl.js";import{controlManager}from"../System/ControlManager.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{Log}from"./Log.js";import{__tchmi_is_instanced_object}from"./_GlobalFunctions.js";import*as Controls from"./Controls.js";
/**
 * Creates a new control.
 * This function throws an exception if one of the given parameter values is invalid.
 * * Attributes are given with its html attribute names:
 * ```json
 * {
 *     'data-tchmi-attribute1' : true,
 *     'data-tchmi-attribute2' : false
 * }
 * ```
 * @param type The type of the control.
 * @param id The identifier of the control.
 * @param attributes A dictionary for the attributes with the html attribute names as keys
 * @param parent Optional. The logical parent control.
 * @template C defines the type for the new control
 * @preserve (Part of the public API)
 */export function createEx(type,id,attributes,parent){if(isParameterTypeInvalid(type,"type",{type:"string",required:"valueNeeded",minStringLength:1}))throw new TypeError(`[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "${type}" for parameter: "type"`);if(isParameterTypeInvalid(id,"id",{type:"string",required:"valueNeeded",minStringLength:1}))throw new TypeError(`[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "${id}" for parameter: id`);if(isParameterTypeInvalid(attributes,"attributes ",{type:"object",required:"nullOk"})||__tchmi_is_instanced_object(attributes))throw new TypeError(`[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "${JSON.stringify(attributes)} " for parameter: attributes`);if(parent&&!(parent instanceof baseTcHmiControl))throw new TypeError(`[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "${JSON.stringify(parent)}" for parameter: parent`);let elem=document.createElement("div");return elem.id=id,elem.setAttribute("data-tchmi-type",type),controlManager.compile(elem,parent,{designerIgnore:!0,overrideAttr:attributes}).control}
/**
 * DEPRECATED
 * Creates a new control.
 * @param htmlOrElementOrType The HTML, jQuery element or type of the control.
 * @param id Optional the identifier of the control.
 * @param parent Optional. The logical parent control.
 * @deprecated Please use createEx()
 * @template C defines the type for the new control
 * @preserve (Part of the public API)
 */export function _create(htmlOrElementOrType,id,parent){let jControl;if(null==id)jControl="string"==typeof htmlOrElementOrType?$(htmlOrElementOrType):htmlOrElementOrType;else{if("string"!=typeof htmlOrElementOrType)return void Log.error("[Source=Framework, Module=TcHmi.ControlFactory] Error compiling control. Wrong input parameter given.");jControl=$(`<div id="${id}" data-tchmi-type="${htmlOrElementOrType}"></div>`)}if(0===jControl.length)return;if(void 0!==Controls.get(jControl[0].id))return void Log.error(`[Source=Framework, Module=TcHmi.ControlFactory] Error compiling control. A control with the name ${jControl[0].id} already exists.`);return controlManager.compile(jControl[0],parent,{designerIgnore:!0}).control}