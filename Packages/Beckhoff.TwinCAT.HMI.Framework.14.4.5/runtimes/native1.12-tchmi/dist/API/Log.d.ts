import './_StaticDefines.js';
import { Controls as ControlsLog } from './Log.Controls.js';
import type { AdditionalInfo as ControlsAdditionalInfo } from './Log.Controls.js';
import type { IErrorDetails } from './_Types.js';
/**
 * Logging functions
 * @preserve (Part of the public API)
 */
export declare class Log {
    /** When set to true no prefix will be printed with log messages. */
    static Prefix: boolean;
    /** When set to true the configured log level will be ignored and the messages logged anyway. */
    static Force: boolean;
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static error(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static errorEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static warn(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static warnEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static info(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static infoEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static debug(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static debugEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Starts a new timer for performance analysis and stops the current timer.
     * @param timerName Human readable name of the starting Timer or null to end timer
     * @param options Additional options for the timer, like track and trackGroup which will be added as details to the performance entry and shown in devtools when hovering the entry.
     * @param options.track is a human readable name for the track of the timer, e.g. a module or feature name.
     * @param options.detail is an object with additional details that will be added to the performance entry and shown in devtools when hovering the entry.
     * @param options.trackGroup is a human readable name for the track group of the timer
     * @param options.tooltipText is a long human readable text
     * @param options.start is a custom start time for the timer in milliseconds, if not set performance.now() will be used as start time
     */
    static performanceLog(timerName: string | null, options?: {
        start?: number;
        track: string;
        trackGroup?: string;
        tooltipText?: string;
        detail?: object;
    }): void;
    /**
     * Starts a new timer for performance analysis
     * @param timerName Human readable name of the starting Timer
     */
    static performanceLogStart(timerName: string): void;
    /**
     * Stops an existing timer for performance analysis
     * @param timerName Human readable name of the starting Timer
     */
    static performanceLogEnd(timerName: string): void;
    /**
     * Builds a formatted message of hierarchical error objects.
     * @param error Error object to show nicely
     * @preserve (Part of the public API)
     */
    static buildMessage(error: IErrorDetails | undefined): string;
}
export declare namespace Log.Controls {
    let error: typeof ControlsLog.error;
    let warn: typeof ControlsLog.warn;
    let info: typeof ControlsLog.info;
    let debug: typeof ControlsLog.debug;
    type AdditionalInfo = ControlsAdditionalInfo;
}
//# sourceMappingURL=Log.d.ts.map