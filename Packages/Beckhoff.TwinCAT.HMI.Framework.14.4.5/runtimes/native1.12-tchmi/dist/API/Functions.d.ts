import type { Version } from './_Types.js';
/**
 * Deprecated! Please use registerFunctionEx.
 * @deprecated Please use registerFunctionEx.
 * @param name name of the framework function
 * @param functionImplementation Javascript function to execute
 * @param _descriptionUrl Url for the function description
 * @preserve (Part of the public API)
 */
export declare function _registerFrameworkFunction(name: string, functionImplementation: (...args: any[]) => any, _descriptionUrl?: string): void;
/**
 * Deprecated! Please use registerFunctionEx.
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param functionImplementation Javascript function to execute
 * @preserve (Part of the public API)
 * @deprecated Please use registerFunctionEx.
 */
export declare function _registerFunction(name: string, functionImplementation: (...args: any[]) => any): void;
/**
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param namespace namespace of the function
 * @param functionImplementation Javascript function to execute
 * @param options options
 * @param options.injectInGlobalObject Inject the function implementation at namespace.name in global object
 * @preserve (Part of the public API)
 */
export declare function registerFunctionEx(name: string, namespace: string, functionImplementation: (...args: any[]) => any, options?: {
    /** Inject the function implementation at namespace.name in global object */
    injectInGlobalObject?: boolean;
}): void;
/**
 * Returns a registered HMI function
 * @param name Name of the function
 * @preserve (Part of the public API)
 */
export declare function getFunction(name: string): ((...args: any[]) => any) | undefined;
/**
 * Gets version information of function by name.
 * @param name Name of the function
 * @preserve (Part of the public API)
 */
export declare function getFunctionVersion(name: string): Version | null;
//# sourceMappingURL=Functions.d.ts.map