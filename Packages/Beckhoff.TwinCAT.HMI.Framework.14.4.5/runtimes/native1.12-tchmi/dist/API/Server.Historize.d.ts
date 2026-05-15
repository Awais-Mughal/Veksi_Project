import * as Server from './Server.js';
import type { DestroyFunction, IResultObject, IErrorDetails } from './_Types.js';
/**
 * Parse the domain from a settings object or autodetects it from the current loaded domains.
 * @param settings Settings object
 */
export declare function getDefaultDomain(settings?: IOptions | null): Promise<string>;
/**
 * Watches on the default domain.
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchDefaultDomain(callback?: null | ((data: IWatchResultObject<string>) => void)): DestroyFunction;
/**
 * Watches on the default domain.
 * @param options Watch options
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchDefaultDomainEx(options: {
    interval: number;
} | null, callback?: null | ((data: IWatchResultObject<string>) => void)): DestroyFunction;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function add(symbolName: string, settings: IEntrySettings, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addEx(symbolName: string, settings: IEntrySettings, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addEx2(symbolName: string, settings: IEntrySettings, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function remove(symbolName: string, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeEx(symbolName: string, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeEx2(symbolName: string, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function update(symbolName: string, settings: IEntrySettings, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateEx(symbolName: string, settings: IEntrySettings, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateEx2(symbolName: string, settings: IEntrySettings, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function get(symbolName: string, callback?: null | ((this: void, data: IEntryResultObject) => void)): IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getEx(symbolName: string, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IEntryResultObject) => void)): IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getEx2(symbolName: string, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IEntryResultObject) => void)): IErrorDetails;
export interface IWatchResultObject<T = any> extends IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: DestroyFunction;
}
export interface IEntrySettings {
    /** ISO8601 Time Span */
    INTERVAL?: string;
    MAXENTRIES?: number;
    ROWLIMIT?: number;
    RECORDINGENABLED?: boolean;
}
export interface IEntrySettingsEx {
    /** ISO8601 Time Span */
    interval?: string;
    maxEntries?: number;
    rowLimit?: number;
    recordingEnabled?: boolean;
}
/** Global options for the historization */
export interface IOptions {
    /** Domain of the historize handling. Defaults to 'TcHmiPostgresHistorize' or 'TcHmiSqliteHistorize' (auto detected) */
    domain?: string;
}
export interface IEntryResultObject extends IResultObject {
    key?: string;
    settings?: IEntrySettings;
}
//# sourceMappingURL=Server.Historize.d.ts.map