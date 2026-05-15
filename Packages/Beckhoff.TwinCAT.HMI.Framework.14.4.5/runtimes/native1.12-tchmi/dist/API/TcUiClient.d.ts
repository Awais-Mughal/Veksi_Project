/**
 * Interface for the tcuiclient browser object provided by TcUiClient.
 */
interface TcUiClient {
    postMessage(command: string, param: any): Promise<TcUiClientResult>;
}
declare global {
    var tcuiclient: TcUiClient | undefined;
}
/**
 * Checks if the TcUiClient API is available in the current browser environment.
 * @preserve (Part of the public API)
 */
export declare function isAvailable(): boolean;
/**
 * Parameters for a screenshot request.
 * @preserve (Part of the public API)
 */
export interface ScreenshotParameters {
    /** The target directory path for the screenshot file. */
    path: string;
    /** The filename for the screenshot file. */
    fileName: string;
    /** A CSS selector string to select elements to capture. */
    querySelectorAll: string;
    /** An optional index to select a specific element from the query result. */
    selectorIndex?: number;
}
/**
 * Result of a screenshot request.
 * @preserve (Part of the public API)
 */
interface TcUiClientResult {
    /** The numeric result code from the screenshot command. */
    result?: number;
    /** A human-readable message describing the result. */
    resultMessage?: string;
}
/**
 * Takes a screenshot via the TcUiClient API (available in TcUiClient).
 * @param parameters Parameters for the screenshot.
 * @returns A promise that resolves with the result of the screenshot operation, including a result code and message.
 * @preserve (Part of the public API)
 */
export declare function screenshot(parameters: ScreenshotParameters): Promise<void>;
export {};
//# sourceMappingURL=TcUiClient.d.ts.map