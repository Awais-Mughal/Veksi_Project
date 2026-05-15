import type { Dictionary, IErrorDetails, Filter } from './_Types.js';
/**
 * A message to the server.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export type IMessage<W = any, R = W> = IReadWriteMessage<W, R> | ISubscriptionMessage<W, R> | IEventMessage<W, R>;
/**
 * Message common interface.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface IMessageBase<W = any, R = W> {
    apiVersion?: string;
    id?: number;
    sessionId?: string;
    /** Id of the server instance (cookies are shared with all servers on the same host) */
    serverId?: string;
    error?: IErrorDetails;
    /** custom string which will be in the answer again */
    customerData?: string;
    commands?: ICommand<W, R>[];
}
/**
 * A message to read or write to the server.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface IReadWriteMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'ReadWrite';
}
/**
 * A message to request a subscription in the server.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface ISubscriptionMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'Subscription';
    /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
    intervalTime?: number | null;
}
/**
 * A message to request an event in the server.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface IEventMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'Event';
}
export declare enum Error {
    HMI_SUCCESS = 0,
    HMI_E_FAIL = 257,
    HMI_E_SYMBOL_IN_USE = 274,
    HMI_E_SYMBOL_NOT_MAPPED = 513,
    HMI_E_LICENSE_TARGET = 778,
    HMI_E_MISSING_LICENSE_HANDSHAKE = 781,
    HMI_E_LICENSE_VERIFY = 782,
    HMI_E_PASSWORD_CHANGE_REQUIRED = 4096,
    HMI_E_INSUFFICIENT_ACCESS = 4101
}
/**
 * tchmi:server#/definitions/accessEnum
 *
 * NONE = 0,
 * READ = 1,
 * WRITE = 2,
 * READWRITE = 3
 */
export declare enum ACCESS {
    NONE = 0,
    READ = 1,
    WRITE = 2,
    READWRITE = 3
}
/**
 * One command for the server.
 * @template W Type of the write value. Use 'any' (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use 'any' (or omit) if this interface contains multiple different types.
 */
export interface ICommand<W = any, R = W> {
    /** Name of the symbol */
    symbol: string;
    /** Custom string which will be forwared to the response */
    customerData?: string;
    /** Write value */
    writeValue?: W;
    /** Read value */
    readValue?: R;
    /** Error of the command */
    error?: IErrorDetails;
    /** Command options */
    commandOptions?: ICommandOptions[];
    /** Filter for arrays and maps. */
    filter?: Filter | string;
    /** Maps the filtered, sorted, and paged values to their original positions */
    filterMap?: number[];
    /** Order by settings. This is processed before limit and offset are used. */
    orderBy?: string;
    /** Should/is the request restricted in amount of array entries? 0 disables the limit. */
    limit?: number;
    /** Array entries should/do not start at the beginning (Zero-based numbering) */
    offset?: number;
    /** The answer has this amount of entries */
    maxEntries?: number;
    /** The time the command processing has started as iso 8601 string. */
    processedStart?: string;
    /** The time the command processing has ended as iso 8601 string. */
    processedEnd?: string;
    /** The amount of sub symbol levels */
    maxSubSymbolDepth?: number;
    /** Extension specific data. */
    extensionData?: Dictionary<object>;
    /** The version of the symbol.*/
    version?: number;
    /** The index of the command in the request. */
    commandIndex?: number;
}
/** Supported types of requests of the server. */
export type IRequestType = 'ReadWrite' | 'Subscription' | 'Event';
/** Supported commands options of requests of the server. */
export type ICommandOptions = 
/** Config Symbols only: When using vectors, add the entry at the end instead of replacing it. */
'Add'
/** Config Symbols only: Deletes the given vector or map entry. */
 | 'Delete'
/** Config Symbols only: Config beforeChange handlers are sent to beforeImport and the whole config is sent for easier validation. */
 | 'Import'
/** Do not pass the symbol to the extension, simulate it instead. */
 | 'Offline'
/** Set by the server only: Paging for this symbol has been done. */
 | 'PagingHandled'
/** For subscriptions only: Send a response for each subscription tick, even if the data has not changed. */
 | 'Poll'
/** Config Symbols only: Replace the whole data structure instead of partially updating it. */
 | 'Replace'
/** Add error message and reason to the response. By default, only the error code is returned. */
 | 'SendErrorMessage'
/** Send the writeValue for requests back to the client. */
 | 'SendWriteValue'
/** Config Symbols only: If one of the commands in the request fails all changes will be rolled back. */
 | 'Transaction'
/** Validate the readValue against the symbol's JSON schema before sending it to the client. */
 | 'ValidateRead'
/** Do not merge subscriptions. */
 | 'UniqueHash'
/** Use timespan instead of timestamp for the `processedStart` and `processedEnd` fields. */
 | 'ProcessTimingAsTimespan' | 'Extension1' | 'Extension2' | 'Extension3' | 'Extension4';
//# sourceMappingURL=ServerTypes.d.ts.map