export declare enum ServerErrors {
    HMI_E_SYMBOL_NOT_MAPPED = 513,
    HMI_E_INVALID_DOMAIN = 2050,
    HMI_E_INSUFFICIENT_ACCESS = 4101,
    HMI_EC_DIAGNOSTICS_E_NOT_READY_YET = 2097190
}
export declare enum FrameworkErrors {
    NONE = 0,
    ERROR = 1,
    E_PARAMETER_INVALID = 2,
    E_TIMEOUT = 3,
    E_EXCEPTION = 4,
    E_INVALID = 5,
    E_NOT_UNIQUE = 6,
    E_OUT_OF_RANGE = 7,
    E_DESTROYED = 8,
    E_NOT_SUPPORTED = 100,
    E_SYSTEM_NOT_READY = 105,
    E_NOT_ALLOWED = 110,
    E_UNKNOWN = 115,
    E_UNKNOWN_TYPE = 120,
    E_KEY_NOT_FOUND = 130,
    E_TYPE_INVALID = 150,
    E_VALUE_INVALID = 160,
    E_REGISTRATION_MISSING = 180,
    E_REGISTRATION_ERROR = 190,
    E_MODULE_MISSING = 200,
    E_MODULE_ERROR = 210,
    E_WEBSOCKET_NOT_READY = 1000,
    E_WEBSOCKET_CLOSED = 1001,
    E_WEBSOCKET_NOT_SUPPORTED = 1404,
    E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
    E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
    E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
    E_SYMBOL_STATE_INVALID = 2000,
    E_SYMBOL_VALUE_INVALID = 2001,
    E_SYMBOL_RESOLVE_SCHEMA = 2002,
    E_SYMBOL_READONLY = 2003,
    E_SYMBOL_UNKNOWN = 2010,
    E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
    E_SYMBOL_INVALID_PATH = 2030,
    E_SYMBOL_SUBSYMBOL_ERROR = 2040,
    E_SYMBOL_OBJECT_RESOLVE = 2050,
    E_SYMBOL_RESOLVE_META_DATA = 2060,
    E_SYMBOL_UNKNOWN_ATTRIBUTE = 2100,
    E_SYMBOL_RESOLVE_EXPRESSION = 2150,
    E_SERVER_RESPONSE_ERROR = 3000,
    E_SERVER_COMMAND_ERROR = 3005,
    E_SERVER_INVALID_RESPONSE = 3010,
    E_SERVER_COMMANDS_MISSING = 3015,
    E_SERVER_COMMAND_MISSING = 3016,
    E_SERVER_READVALUE_MISSING = 3020,
    E_SERVER_WRITEVALUE_MISSING = 3025,
    E_SERVER_RESPONSE_MISSING = 3030,
    E_SERVER_DOMAIN_UNKNOWN = 3100,
    E_SERVER_HANDSHAKE = 3200,
    E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
    E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
    E_FUNCTION_INVALID_CONFIGURATION = 4010,
    E_FUNCTION_EXCEPTION = 4020,
    E_FUNCTION_UNKNOWN = 4030,
    E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
    E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
    /** Value of the FunctionExpression is known synchronous. The caller is responsible for the value! */
    E_FUNCTION_HANDLED_VIA_RETURN_VALUE = 4060,
    E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
    E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
    E_FUNCTION_CALL_ABORTED = 4130,
    E_FUNCTION_DESTROYED = 4140,
    E_TRIGGER_ACTION_EXCEPTION = 5050,
    E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
    E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
    E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
    E_TRIGGER_CONDITION_INVALID = 5200,
    E_CONTROL_INSTANCE_NOT_FOUND = 6000,
    E_CONTROL_INVALID_CONFIGURATION = 6001,
    E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
    E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
    E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = 6020,
    E_SCHEMA_INVALID = 7000,
    E_SCHEMA_INVALID_PATH = 7010,
    E_SCHEMA_INVALID_REF_ID = 7020,
    /** Deprecated. Use E_SCHEMA_UNKNOWN_SOURCE instead. */
    E_SCHEMA_UNKNOWN_FILE = 7030,
    E_SCHEMA_UNKNOWN_SOURCE = 7030,// Replaces E_SCHEMA_UNKNOWN_FILE but keeps value for compatibility.
    E_SCHEMA_UNKNOWN_DEFINITION = 7040,
    E_SCHEMA_NOT_RESOLVED = 7050,
    E_PACKAGE = 8000,
    E_LOCALIZATION_UNKNOWN_KEY = 9000,
    E_INTERACTIVE_WRITE_ABORT = 10100
}
interface Error {
    name: string;
    message: string;
    stack?: string;
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
export interface LogicOperator {
    logic: 'AND' | 'OR';
}
export interface Filter extends Array<Comparison | LogicOperator | Filter> {
}
export interface Comparison {
    path?: string;
    comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
    value: string | number | Date | boolean | null;
}
/**
 * One command for the server.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
 */
export interface Command<W = any, R = W> {
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
    commandOptions?: CommandOptions[];
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
    /** The amount of sub symbol levels*/
    maxSubSymbolDepth?: number;
}
/** Supported types of requests of the server. */
export type RequestType = 'ReadWrite' | 'Subscription' | 'Event';
/** Supported commands options of requests of the server. */
export type CommandOptions = 'Add' | 'Delete' | 'Import' | 'Offline' | 'PagingHandled'
/** Send response with every tick, even if nothing changed. */
 | 'Poll' | 'Replace' | 'SendErrorMessage' | 'SendWriteValue' | 'Transaction'
/** Validate outgoing values too. */
 | 'ValidateRead'
/** Subscriptions will not be merged if this is set. */
 | 'UniqueHash'
/** Request timings (processedStart, processedEnd) will be send as iso-8601 duration instead of iso-8601 timestamp. */
 | 'ProcessTimingAsTimespan' | 'Extension1' | 'Extension2' | 'Extension3' | 'Extension4';
export interface IErrorDetails {
    /** The error code. */
    code: FrameworkErrors | number;
    /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
    message?: string;
    /** Plaintext description of the error. */
    reason?: string;
    /** The name of the server or framework domain where the error occurred. */
    domain?: string;
    /** Optional Error object for exceptions */
    exception?: Error;
    /** A list of errors which lead to the current error. */
    errors?: IErrorDetails[];
}
export interface IResultObject<W = any, R = W> {
    error: FrameworkErrors;
    details?: IErrorDetails | undefined;
    /** The response of the server. */
    response?: IMessage<W, R>;
    /** Read values per command */
    results?: IValueResultObject<R>[];
}
/**
 * Result object with value of a command.
 */
export interface IValueResultObject<T = any> extends IResultObject {
    symbol?: string;
    value?: T;
}
/**
 * A message to the server.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
 */
export type IMessage<W = any, R = W> = IReadWriteMessage<W, R> | ISubscriptionMessage<W, R> | IEventMessage<W, R>;
/**
 * Message common interface.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
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
    commands?: Command<W, R>[];
}
/**
 * A message to read or write to the server.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
 */
export interface IReadWriteMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'ReadWrite';
}
/**
 * A message to request a subscription in the server.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
 */
export interface ISubscriptionMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'Subscription';
    /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
    intervalTime?: number | null;
}
/**
 * A message to request an event in the server.
 * @template W Type of the write value. Use any (or omit) if this interface contains multiple different types.
 * @template R Type of the read value.Use any (or omit) if this interface contains multiple different types.
 */
export interface IEventMessage<W = any, R = W> extends IMessageBase<W, R> {
    requestType: 'Event';
}
export declare enum SymbolAccess {
    'None' = 0,
    'Read' = 1,
    'Write' = 2,
    'ReadWrite' = 3
}
export {};
