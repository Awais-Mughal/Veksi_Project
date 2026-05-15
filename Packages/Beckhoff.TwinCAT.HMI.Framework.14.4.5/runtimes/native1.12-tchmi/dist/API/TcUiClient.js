import{Errors}from"./_Types.js";import{Exception}from"./Exception.js";
/**
 * Checks if the TcUiClient API is available in the current browser environment.
 * @preserve (Part of the public API)
 */export function isAvailable(){return!!window.tcuiclient}
/**
 * Takes a screenshot via the TcUiClient API (available in TcUiClient).
 * @param parameters Parameters for the screenshot.
 * @returns A promise that resolves with the result of the screenshot operation, including a result code and message.
 * @preserve (Part of the public API)
 */export function screenshot(parameters){return isAvailable()?tcuiclient.postMessage("System.screenshot",parameters).catch(error=>{throw new Exception(Errors.E_EXCEPTION,"An exception has occurred while trying to take a screenshot","TcHmi.TcUiClient",error)}).then(data=>{if(0!==data.result)throw new Exception(Errors.ERROR,`Taking screenshot has failed with code (${data.result}): ${data.resultMessage}`,"TcHmi.TcUiClient")}):Promise.reject(new Exception(Errors.ERROR,"TcUiClient API is not available. This feature requires the TcUiClient running this application.","TcHmi.TcUiClient"))}