export * from './ServerTypes.js';
export * as ADS from './Server.ADS.js';
export * as AuditTrail from './Server.AuditTrail.js';
export * as Domains from './Server.Domains.js';
export * as Events from './Server.Events.js';
export * as Historize from './Server.Historize.js';
export * as RecipeManagement from './Server.RecipeManagement.js';
export * as UserManagement from './Server.UserManagement.js';
import type { Symbol } from './Symbol.js';
import type { ICommand, IMessage } from './ServerTypes.js';
import type { IResultObject as BaseIResultObject, SelectableRequired, JsonSchema } from './_Types.js';
/**
 * Returns the current readyState value of the underlying websocket which is connected to the server. Returns null when system is not ready.
 * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
 * If websocket is OPEN handshakes between server and framework may not yet be done and server may not be ready for full functionality.
 * Use isReady function instead.
 * @returns The current readyState value of the underlying websocket which is connected to the server or null.
 * @preserve (Part of the public API)
 * @deprecated Please use isReady function.
 */
export declare function _getWebsocketReadyState(): number | null;
/**
 * Returns true if the websocket is ready and false if its not.
 * If websocket is ready handshakes between server and framework may not yet be done and server may not be ready for full functionality.
 * Use isReady function instead.
 * @returns If true the websocket is ready for connectivity.
 * @preserve (Part of the public API)
 * @deprecated Please use isReady function.
 */
export declare function _isWebsocketReady(): boolean;
/**
 * Returns true if the server is ready for application communication.
 * Websocket is ready and handshakes are done.
 * @preserve (Part of the public API)
 */
export declare function isReady(): boolean;
/**
 * Returns the framework related api version of the server in the form x.x.x.x and
 * '0.0.0.0' if the current server version does not support this information yet and
 * null if the the server communication is not yet ready.
 * You can call isReady function to determine if server is ready for communication.
 * You can use the global tchmi_compare_version function to compare the result against a specific version.
 * @preserve (Part of the public API)
 */
export declare function getApiVersion(): string | null;
/**
 * Write one value to a TwinCAT HMI Server symbol.
 * @param symbolName The target TwinCAT HMI Server symbolname.
 * @param value The value which should be written to the target symbol.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function writeSymbol<W = any, R = W>(symbolName: string, value: W, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Write multiple values to a TwinCAT HMI Server symbol.
 * @param symbolName The target TwinCAT HMI Server symbolnames as array.
 * @param value The values (as array) which should be written to the target symbol.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function writeSymbol<W = any, R = W>(symbolName: string[], value: W[], callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Write one or more values to a server symbol.
 * @param symbolNames The target server symbol name or list of symbol names
 * @param values The value which should be written to the target symbol.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function writeSymbolEx<W = any, R = W>(symbolNames: string | string[], values: W | W[], requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Write one or more values to a server symbol.
 * @param symbolNames The target server symbol name or list of symbol names
 * @param values The value which should be written to the target symbol.
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function writeSymbolEx2<W = any, R = W>(symbolNames: string | string[], values: W | W[], options: {
    symbolOptions?: ISymbolOptions | ISymbolOptions[] | null;
    requestOptions?: IRequestOptions | null;
} | null, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Reads the value of one or multiple TwinCAT HMI Server symbol.
 * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W unused because this is a read only
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readSymbol<W = any, R = W>(symbolNames: string | string[], callback?: null | ((this: void, data: IResultObject<undefined, R>) => void)): number | null;
/**
 * Reads the value of one or multiple TwinCAT HMI Server symbol.
 * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W unused because this is a read only
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readSymbolEx<W = any, R = W>(symbolNames: string | string[], requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: IResultObject<undefined, R>) => void)): number | null;
/**
 * Reads the value of a server symbol
 * @param symbolNames The target symbol name or list of symbol names
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readSymbolEx2<R = any>(symbolNames: string | string[], options: {
    symbolOptions?: ISymbolOptions | ISymbolOptions[] | null;
    requestOptions?: IRequestOptions | null;
} | null, callback?: null | ((this: void, data: IResultObject<undefined, R>) => void)): number | null;
/**
 * Subscribe to one or more server symbols.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function subscribeSymbol<R = any>(symbolNames: string | string[], interval: number, callback?: null | ((this: void, data: IResultObject<unknown, R>) => void)): number | null;
/**
 * Subscribe to one or more server symbols with writeValue support for function symbols with parameters or cyclic writing.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param writeValues The value which should be written to the target symbol with each call.
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function subscribeSymbolEx<W = any, R = W>(symbolNames: string | string[], writeValues: W | W[] | undefined, interval: number, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Subscribe to one or more server symbols with writeValue support for function symbols with parameters or cyclic writing.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param writeValues The value which should be written to the target symbol.
 * @param interval Subscription refresh interval.
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function subscribeSymbolEx2<W = any, R = W>(symbolNames: string | string[], writeValues: W | W[] | undefined, interval: number, options: {
    symbolOptions?: ISymbolOptions | ISymbolOptions[] | null;
    requestOptions?: IRequestOptions | null;
} | null, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Resolves the schema of a server symbol by name.
 * @param symbolName The target symbol name.
 * @param callback Possibly asynchronous callback which will be raised when the resolved schema is available or the schema can't be resolved.
 */
export declare function resolveSymbolSchema(symbolName: string, callback?: null | ((this: void, data: ISchemaResultObject) => void)): void;
/**
 * Resolves the schema of a server symbol by name.
 * @param symbolName The target symbol name.
 * @param options Options
 * @param callback Possibly asynchronous callback which will be raised when the resolved schema is available or the schema can't be resolved.
 */
export declare function resolveSymbolSchemaEx(symbolName: string, options: IResolveSchemaOptions | null, callback?: null | ((this: void, data: ISchemaResultObject) => void)): void;
/**
 * Resolves meta data of a server symbol by name.
 * @param symbolName The target symbol name.
 * @param callback Callback which will be raised when the meta data is available or the meta data can't be resolved.
 */
export declare function resolveSymbolMetaData(symbolName: string, callback?: null | ((this: void, data: Symbol.IServerSymbolMetaDataResultObject) => void)): void;
/**
 * Requests a message to the hmi server with default connection parameter
 * @param request Request object
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function request<W = any, R = W>(request: IMessage<W, R>, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Requests a message to the hmi server with given connection parameter
 * @param request Request object
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function requestEx<W = any, R = W>(request: IMessage<W, R>, requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: IResultObject<W, R>) => void)): number | null;
/**
 * Subscribe to a to a list of commands.
 * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
 * @param commands Command object with the subscription
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function subscribe<R = any>(commands: ICommand<unknown, R>[], interval: number, callback?: null | ((this: void, data: IResultObject<unknown, R>) => void)): number | null;
/**
 * Subscribe to a to a list of commands.
 * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
 * @param commands Command object with the subscription
 * @param interval Subscription refresh interval.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */
export declare function subscribeEx<R = any>(commands: ICommand<unknown, R>[], interval: number, requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: IResultObject<unknown, R>) => void)): number | null;
/**
 * Unsubscribe a list of commands.
 * @param requestId The id of the subscription request which shall be unsubscribed.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @preserve (Part of the public API)
 */
export declare function unsubscribe(requestId: number, callback?: null | ((this: void, data: IResultObject) => void)): number | null;
/**
 * Unsubscribe a list of commands.
 * @param requestId The id of the subscription request which shall be unsubscribed.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @preserve (Part of the public API)
 */
export declare function unsubscribeEx(requestId: number, requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: IResultObject) => void)): number | null;
/**
 * Releases a request and associated resources like callbacks.
 * @param id Id of the request to release.
 * @preserve (Part of the public API)
 */
export declare function releaseRequest(id: number | null): void;
/**
 * Get current username as string (could be __SystemGuest/__SystemUser without auth) or null when unknown (while loading).
 * @preserve (Part of the public API)
 */
export declare function getCurrentUser(this: void): string | null;
/**
 * Get groups membership of current user as array (can be empty).
 * @preserve (Part of the public API)
 */
export declare function getGroupsOfCurrentUser(this: void): string[];
/**
 * Get current user config.
 * @preserve (Part of the public API)
 */
export declare function getCurrentUserConfig(this: void): UserConfigOnServer;
/**
 * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */
export declare function login(userName: string | null | undefined, password: string | null | undefined, persistent?: boolean, callback?: (this: void, resultObject: BaseIResultObject) => void): boolean;
/**
 * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param requestOptions Options for the request itself
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */
export declare function loginEx(userName: string | null | undefined, password: string | null | undefined, persistent: boolean | undefined, requestOptions: IRequestOptions | null, callback?: (this: void, data: BaseIResultObject) => void): boolean;
/**
 * Login into a TcHmiServer, reloads the page on success if not deactivated, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param reload Reload hmi after session login.
 * @param requestOptions Options for the request itself
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */
export declare function loginEx2(userName: string | null | undefined, password: string | null | undefined, persistent: boolean | undefined, reload: boolean | undefined, requestOptions: IRequestOptions | null, callback?: (this: void, data: BaseIResultObject) => void): boolean;
/**
 * Logout from a TcHmiServer, reloads the page on success
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */
export declare function logout(callback?: null | ((this: void, resultObject: BaseIResultObject) => void)): boolean;
/**
 * Logout from a TcHmiServer, reloads the page on success
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */
export declare function logoutEx(requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: BaseIResultObject) => void)): boolean;
/**
 * Logout from a TcHmiServer, optional reloads the page on success
 * @param reload Reload hmi after session logout
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */
export declare function logoutEx2(reload: boolean | undefined, requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: BaseIResultObject) => void)): boolean;
/**
 * Logout all users with a specific username or all users from a TcHmiServer
 * @param username username to logout.
 * If empty string or null is provided, all users are logged out.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
 * 'Domain::' will logout every user from this domain
 * @param callback This callback is called after the request was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */
export declare function forceLogout(username: string | IForceLogoutTarget | null | undefined, callback?: null | ((this: void, data: BaseIResultObject) => void)): boolean;
/**
 * Logout all users with a specific username or all users from a TcHmiServer
 * @param userName username to logout.
 * If empty string or null is provided, all users are logged out.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
 * 'Domain::' will logout every user from this domain
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the request was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */
export declare function forceLogoutEx(userName: string | IForceLogoutTarget | null | undefined, requestOptions: IRequestOptions | null, callback?: null | ((this: void, data: BaseIResultObject) => void)): boolean;
/**
 * Analyze the server result and calls
 * completed callback if done (on any case),
 * error if there at least is one error on top level or command level and
 * success if there was no error at all.
 * @param args Object with callbacks for success, error and completed.
 * @param args.success Is called when the response contains no errors at all.
 * @param args.error Is called when the response contains at least one command with an error.
 * @param args.completed Is called anyway regardless of success or error.
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 */
export declare function handleResponse<W = any, R = W>(args: {
    /** Called with no error. */
    success?: (this: void, data: Required<IResultObject<W, R>>) => void;
    /** Called with at least one error on top level or command level. */
    error?: (this: void, data: IResultObject<W, R>) => void;
    /** Called in any case. */
    completed?: (this: void, data: IResultObject<W, R>) => void;
}): (data: IResultObject<W, R>) => void;
/**
 * Result object which could have no response object.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface IResultObject<W = any, R = W> extends BaseIResultObject {
    /** The response of the server. */
    response?: SelectableRequired<IMessage<W, R>, 'apiVersion' | 'id' | 'sessionId' | 'commands'>;
    /**
     * The related command indices.
     * In case of a bundled request the response may contain more than the request related commands.
     * This array contains the indices of the request related command indicies.
     **/
    responseCommandIndices?: number[];
    /**
     * Read values per command.
     * In case of a bundled request this array will only contain the request related results in order.
     **/
    results?: IValueResultObject<R>[];
}
/**
 * Result object with value of a command.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface IValueResultObject<R = any> extends IResultObject {
    symbol?: string;
    value?: R;
}
/** Internal state of the user config */
export declare const enum UserConfigState {
    /** Userconfig is still loaded. */
    loading = 0,
    /** Userconfig loading failed. */
    loadingerror = 1,
    /** No auth is required. */
    noAuthRequired = 2,
    /** Engineering server is active. */
    communicationDisabled = 3,
    /** Access set by group membership. */
    usergroup = 4
}
export interface UserConfigOnServer {
    /** State of the request for the config from server */
    state: UserConfigState;
    /** List of the groups the current user is member of */
    userIsInGroups: string[];
    /** Current Username (could be __SystemGuest/__SystemUser without auth) or null when unknown (while loading) */
    name: string | null;
    /**
     * Current authentication domain for example "TcHmiUserManagement".
     * This value is only set when auth is required/active.
     */
    domain: string | null;
    /** Current locale of this user for texts. Could be undefined if client locale should be used for this user! */
    locale: string | undefined;
    /** Configured locale of this user for texts. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a locale name. */
    configLocale: string | 'client' | 'project';
    /** Current locale of this user for date formatting. Could be undefined if client locale should be used for this user! */
    timeFormatLocale: string | undefined;
    /** Configured locale of this user for time formats. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a locale name. */
    configTimeFormatLocale: string | undefined;
    /** Current time zone of this user to use in .toLocaleString() option. Could be undefined if client locale should be used for this user! */
    timeZone: string | undefined;
    /**
     * Millisecond offset to utc calculated from the current timeZone of the user.
     * This is +1 * 60 * 60 * 1000 or +2 * 60 * 60 * 1000 for central Europe.
     */
    timeZoneOffset: number;
    /** Configured time zone of this user. 'client' is the browser setting. 'project' refer to the default of the project which could be 'client' and a time zone name. */
    configTimeZone: string | undefined;
    /** Current ip as seen from the server */
    clientIp: string;
    /** Current Session ID */
    session: string | null;
    /** Thumbprint/fingerprint of the client certificate */
    clientCertificate: string | null;
    /** Timespan (in ms) for a auto logoff. null disables auto logoff */
    autoLogOffMilliSeconds: number | null;
    /** Clear text error message */
    errorMessage: string;
    /** Name of the extension which handles default authentication */
    defaultAuthExtension: string;
    /** Name of the user group a new user will be by default */
    defaultUserGroup: string;
}
/**
 * Request level options
 */
export interface IRequestOptions {
    /**
     * After the timeout in ms the request will be aborted.
     * Timer starts when the request hit the API, not when the request is send to the server (after waiting in the queue?).
     **/
    timeout?: number;
    /** If not set to true the request will be held in the queue so every request is send after each others. */
    parallel?: boolean;
    /** The request can be added to a group. */
    groupId?: string | null;
    /** The request with the request id should be refreshed instead of creating a new request. */
    refresh?: boolean;
}
/**
 * Symbol/command level options
 */
export interface ISymbolOptions {
    version: number;
}
export interface IForceLogoutTarget {
    /** IP address of the client */
    clientIp?: string;
    /** Thumbprint of the used client certificate */
    clientCertificate?: string;
    /** User group */
    group?: string;
    /** session id of the user */
    sessionId?: string;
}
export interface ISchemaResultObject extends BaseIResultObject {
    schema?: JsonSchema;
}
export interface IResolveSchemaOptions {
    version?: number;
}
//# sourceMappingURL=Server.d.ts.map