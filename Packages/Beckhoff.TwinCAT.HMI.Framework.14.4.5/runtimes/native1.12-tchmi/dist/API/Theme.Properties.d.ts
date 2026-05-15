import { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
import { Errors } from './_Types.js';
import type { Resource } from './Theme.js';
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
 */
export declare function getDefaultValue<T = any>(control: baseTcHmiControl, propertyName: string): Resource<T>;
/**
 * Sets the default value of a property and change it (if needed) on theme change.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */
export declare function setThemeValue(control: baseTcHmiControl, propertyName: string): Errors;
/**
 * After calling this function the control property will not be changed on theme change anymore.
 * Does not change the property value.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */
export declare function releaseThemeValue(control: baseTcHmiControl, propertyName: string): Errors;
//# sourceMappingURL=Theme.Properties.d.ts.map