import './_GlobalFunctions.js';
import type { NugetPackageMetadata } from './Config.js';
declare global {
    /** Unique ID of this HMI Instance */
    var TCHMI_DYNAMIC_INSTANCE_ID: string;
    /** The timestamp in milliseconds based on JavaScript Date object when TcHmiFramework.js file was initialy handled by the JavaScript interpreter. */
    var TCHMI_DEBUG_TIME_LOAD_LIBRARY: number;
    /**
     * Engineering instance. Designer instance or LiveView instance.
     **/
    var TCHMI_ENGINEERING: boolean;
    /**
     * Engineering instance. Designer instance.
     **/
    var TCHMI_DESIGNER: boolean;
    /**
     * Engineering instance. LiveView instance.
     **/
    var TCHMI_LIVEVIEW: boolean;
    /**
     * Runtime
     **/
    var TCHMI_RUNTIME: boolean;
    /**
     * Only one control should be shown
     */
    var TCHMI_SINGLECONTROL: boolean;
    /**
     * Websocket used for communication with engineering.
     * If unset we have a VS newer then 2025-05 which communicates via server events.
     **/
    var TCHMI_ENGINEERING_WEBSOCKET: string | undefined;
    /**
     * Defines which partial is opened in a designer instance.
     * This is a relative path relative to the project root.
     * This path is preprocessed via tchmi_path function in framework init.
     **/
    var TCHMI_TARGET_PARTIAL: string;
    /**
     * Config override used in engineering instances.
     * */
    var TCHMI_CONFIG_OVERRIDE: object | null | undefined;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_ENGINEERING
     * @deprecated Please use TCHMI_ENGINEERING
     **/
    var TCHMI_ENABLE_DESIGNER_MODE: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_DESIGNER
     * @deprecated Please use TCHMI_DESIGNER
     **/
    var TCHMI_ENABLE_DESIGNER_MODE_MASTER: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_LIVEVIEW
     * @deprecated Please use TCHMI_LIVEVIEW
     **/
    var TCHMI_ENABLE_DESIGNER_MODE_SLAVE: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_CONFIG_OVERRIDE
     * @deprecated Please use TCHMI_CONFIG_OVERRIDE
     **/
    var TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON: object | null | undefined;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_TARGET_PARTIAL
     * @deprecated Please use TCHMI_TARGET_PARTIAL
     **/
    var TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL: string;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_PERSISTENT_LOG_LEVEL
     * @deprecated Please use TCHMI_PERSISTENT_LOG_LEVEL
     **/
    var TCHMI_CONSOLE_LOG_PERSISTENT: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_PERSISTENT_LOG_MAX_ENTRIES
     * @deprecated Please use TCHMI_PERSISTENT_LOG_MAX_ENTRIES
     **/
    var TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES: number;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_LOG_TCHMISERVER_MESSAGES
     * @deprecated Please use TCHMI_LOG_TCHMISERVER_MESSAGES
     **/
    var TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_LOG_ENGINEERING_COM_MESSAGES
     * @deprecated Please use TCHMI_LOG_ENGINEERING_COM_MESSAGES
     **/
    var TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_LOG_ENGINEERING_COM_MESSAGES
     * @deprecated Please use TCHMI_LOG_ENGINEERING_COM_MESSAGES
     **/
    var TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES: boolean;
    /**
     * -1: Performance
     * 0: None
     * 1: Error
     * 2: Warning
     * 3: Info
     * 4: Debug
     */
    var TCHMI_CONSOLE_LOG_LEVEL: -1 | 0 | 1 | 2 | 3 | 4;
    /**
     * -1: Performance
     * 0: None
     * 1: Error
     * 2: Warning
     * 3: Info
     * 4: Debug
     */
    var TCHMI_PERSISTENT_LOG_LEVEL: -1 | 0 | 1 | 2 | 3 | 4;
    /** Max entries created in IndexedDB. */
    var TCHMI_PERSISTENT_LOG_MAX_ENTRIES: number;
    /** Defines the interval after which log entries are written from memory to the database. */
    var TCHMI_PERSISTENT_LOG_CACHE_INTERVAL: number;
    /** Activate Trace Log of Communication Messages between Framework and Server */
    var TCHMI_LOG_TCHMISERVER_MESSAGES: boolean;
    /** Activate Trace Log of Communication Messages between Framework and Creator */
    var TCHMI_LOG_ENGINEERING_COM_MESSAGES: boolean;
    /**
     * Please use TcHmi.Config.getNugetPackagesMetadata() instead.
     * @deprecated Please use TcHmi.Config.getNugetPackagesMetadata() instead.
     */
    var TCHMI_NUGET_METADATA: Record<string, NugetPackageMetadata>;
    /** Are we running inside a unit test? */
    var TCHMI_UNITTEST_MODE: boolean;
    var TCHMI_UNITTEST_INIT_NO_NEXT_STAGE: boolean;
    /**
     * Browsers without addEventListener option object api are not supported anymore in TcHmi.
     * Check can be removed because it is always true now.
     * @deprecated Can be removed because it is always true now.
     */
    var TCHMI_EVENT_OPTION_OBJECT_SUPPORTED: boolean;
    var TCHMI_SERVER_STATE_WATCH_INTERVAL: number;
    var TCHMI_DIAGNOSTICS_SERVER: boolean;
    var TCHMI_DIAGNOSTICS_SERVER_REQUEST_HISTORY_MAX_BUFFER: number;
    var TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MAX_BUFFER: number;
    var TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MESSAGES: boolean;
    /**
     * Used to override the value of static defined flags dynamically.
     * Data is read from localStorage at runtime.
     * Can be controlled from Client tab on the server config page.
     */
    var TCHMI_FLAG_OVERRIDES: {
        TCHMI_CONSOLE_LOG_LEVEL?: -1 | 0 | 1 | 2 | 3 | 4;
        TCHMI_PERSISTENT_LOG_LEVEL?: -1 | 0 | 1 | 2 | 3 | 4;
        TCHMI_PERSISTENT_LOG_MAX_ENTRIES?: number;
        TCHMI_PERSISTENT_LOG_CACHE_INTERVAL?: number;
        TCHMI_PERSISTENT_LOG_MAX_SERVER_ENTRIES?: boolean;
        TCHMI_LOG_TCHMISERVER_MESSAGES?: boolean;
        /**
         * DEPRECATED
         * Replaced by: TCHMI_PERSISTENT_LOG_LEVEL
         * @deprecated Please use TCHMI_PERSISTENT_LOG_LEVEL
         **/
        TCHMI_CONSOLE_LOG_PERSISTENT?: boolean;
        /**
         * DEPRECATED
         * Replaced by: TCHMI_PERSISTENT_LOG_MAX_ENTRIES
         * @deprecated Please use TCHMI_PERSISTENT_LOG_MAX_ENTRIES
         **/
        TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES?: number;
        /**
         * DEPRECATED
         * Replaced by: TCHMI_LOG_TCHMISERVER_MESSAGES
         * @deprecated Please use TCHMI_LOG_TCHMISERVER_MESSAGES
         **/
        TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES?: boolean;
    } | null | undefined;
}
//# sourceMappingURL=_StaticDefines.d.ts.map