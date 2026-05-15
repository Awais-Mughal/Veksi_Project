import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
export * as System from '../Controls/System/baseTcHmiControl.js';
import type { ControlAttribute, ControlDescription, Dictionary, Version } from './_Types.js';
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
export declare function _register<C extends baseTcHmiControl>(controlTypeName: string, constructor: baseTcHmiControlConstructor<C>, directory: string, template?: string | null): void;
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
 */
export declare function registerEx<C extends baseTcHmiControl>(controlTypeName: string, namespace: string, constructor: baseTcHmiControlConstructor<C>, options?: {
    /** Inject the control implementation at namespace.name in global object */
    injectInGlobalObject?: boolean;
}): void;
/**
 * Get control by identifier. Returns the control or undefined.
 * @param id Identifier of the Control.
 * @template T Type of the Control
 * @preserve (Part of the public API)
 */
export declare function get<T extends baseTcHmiControl>(id: string | null | undefined): T | undefined;
/**
 * Gets description information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */
export declare function getDescription(type: string): ControlDescription | null;
/**
 * Gets version information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */
export declare function getVersion(type: string): Version | null;
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param type Control type name
 */
export declare function getBasePath(type: string): string | null;
/**
 * Returns the dynamic base path of a control.
 * For example: 'Beckhoff.TwinCAT.HMI.Controls/TcHmiButton'
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */
export declare function getBasePathEx(control: baseTcHmiControl): string | null;
/**
 * Get an ES5 Map of all controls. Key of the map is the control identifier
 * @preserve (Part of the public API)
 */
export declare function getMap(): Map<string, baseTcHmiControl>;
/**
 * Limit a pixel dimension with the min and max dimension of the control.
 * @param control Control to check the dimension
 * @param dimension Dimension to check
 * @param valueToTest Value which should be compared
 */
export declare function limitPixelDimensionToControlBound(control: baseTcHmiControl, dimension: 'width' | 'height', valueToTest: number | null): number | null;
/** Dictionary of all ControlsAttributes with mandatory entry 'data-tchmi-type' and 'id'. */
export interface ControlAttributeList extends Dictionary<ControlAttribute> {
    'data-tchmi-type': ControlAttribute<string>;
    'id': ControlAttribute<string>;
}
/** Description of (virtual) control rights */
export interface ControlAccessDescription {
    /** Name of the access definition in the HTML. */
    name: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** A long description of this access definition. */
    description?: string;
    /** Determine if an access definition is shown to the user in engineering. */
    visible?: boolean;
    /** Defines the default of this control access right. This will be used if the check for this access right does not return a result. */
    defaultValueInternal: boolean | null;
    /** Names of access rights which must be valid, if this right should be granted. For example 'create' should work only when 'operate' is granted. */
    dependsOn?: string[];
}
/**
 * Constructor which generates a TcHmi Control.
 * @template C defines the type for the control
 */
export interface baseTcHmiControlConstructor<C extends baseTcHmiControl = baseTcHmiControl> {
    new (element: JQuery, pcElement: JQuery, attrs: ControlAttributeList): C;
    readonly prototype: C;
}
//# sourceMappingURL=Controls.d.ts.map