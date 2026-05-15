import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
export type AdditionalInfo = {
    /** attribute name of the control */
    Attribute?: string | undefined | null;
    Symbol?: string | undefined | null;
    [key: string]: string | undefined | null;
};
/**
 * Logging functions with contextual information for controls.
 * @preserve (Part of the public API)
 */
export declare class Controls {
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
     * Adds contextual information (module type, ID, origin) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static error(control: baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
     * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static error(control: baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a warn message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
     * Adds contextual information (module type, ID, origin) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static warn(control: baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a warn message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
     * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static warn(control: baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
     * Adds contextual information (module type, ID, origin) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static info(control: baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
     * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static info(control: baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
     * Adds contextual information (module type, ID, origin) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static debug(control: baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
     * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
     * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static debug(control: baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
}
//# sourceMappingURL=Log.Controls.d.ts.map