import { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
import type { Dictionary } from './_Types.js';
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
 */
export declare function createEx<C extends baseTcHmiControl>(type: string, id: string, attributes: null | Dictionary<any>, parent?: baseTcHmiControl | null): C | undefined;
/** DEPRECATED API PARTS*/
/**
 * DEPRECATED
 * Creates a new control.
 * @param html The base html for the control.
 * @param unused Optional. Has to be set to null if parameter parent is used.
 * @param parent Optional. The logical parent control.
 * @template C defines the type for the new control
 * @deprecated Please use createEx()
 */
export declare function _create<C extends baseTcHmiControl>(html: string, unused?: null, parent?: baseTcHmiControl | null): C | undefined;
/**
 * DEPRECATED
 * Creates a new control.
 * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
 * @param element The base element for the control.
 * @param unused Optional. Has to be set to null if parameter parent is used.
 * @param parent Optional. The logical parent control.
 * @template C defines the type for the new control
 * @deprecated Please use createEx()
 */
export declare function _create<C extends baseTcHmiControl>(element: JQuery, unused?: null, parent?: baseTcHmiControl | null): C | undefined;
/**
 * DEPRECATED
 * Creates a new control.
 * @param type The type of the control.
 * @param id The identifier of the control.
 * @param parent Optional. The logical parent control.
 * @template C defines the type for the new control
 * @deprecated Please use createEx()
 */
export declare function _create<C extends baseTcHmiControl>(type: string, id: string, parent?: baseTcHmiControl | null): C | undefined;
//# sourceMappingURL=ControlFactory.d.ts.map