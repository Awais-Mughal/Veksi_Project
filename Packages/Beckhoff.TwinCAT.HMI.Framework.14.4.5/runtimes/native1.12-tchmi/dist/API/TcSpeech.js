import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{tcSpeechManager}from"../System/TcSpeechManager.js";import{Errors}from"./_Types.js";import*as Callback from"./Callback.js";
/**
 * (Re-)Starts the rtc connection to TwinCAT speech engine.
 * @param options This option can override all setting from tchmiconfig.json and more
 * @param callback Gets notification when opening connection failed.
 * @preserve (Part of the public API)
 */export function openConnection(options={},callback){isParameterTypeInvalid(options.confidenceThreshold,"options.confidenceThreshold",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.defaultVolume,"options.defaultVolume",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.enableMicrophone,"options.enableMicrophone",{type:"boolean",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.enableSpeaker,"options.enableSpeaker",{type:"boolean",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.remoteSocketId,"options.remoteSocketId",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.sinkConstraints,"options.sinkConstraints",{type:"object",required:"undefinedOk"},"TcHmi.Speech",callback)||isParameterTypeInvalid(options.sourceConstraints,"options.sourceConstraints",{type:"object",required:"undefinedOk"},"TcHmi.Speech",callback)||tcSpeechManager.openConnection(options,callback)}
/**
 * Closes an active connection to TwinCAT speech engine.
 * @param options Can target a specific remote TwinCAT speech engine
 * @param options.remoteSocketId socket id to close
 * @param callback A callback to get feedback
 * @preserve (Part of the public API)
 */export function closeConnection(options={},callback){isParameterTypeInvalid(options.remoteSocketId,"options.remoteSocketId",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||tcSpeechManager.closeConnection(options,callback)}
/**
 * Sets the volume (between 0 and 1) of speech output on this device.
 * @param valueNew new volume. Will be capped between 0 and 1.
 * @preserve (Part of the public API)
 */export function setVolume(valueNew){tcSpeechManager.setVolume(valueNew)}
/**
 * Functions for SpeechSynthesis .
 * @preserve (Part of the public API)
 */export class SpeechSynthesis{text;options;
/**
     * Functions for SpeechSynthesis .
     * @param text Text to be synthesized
     * @param options Options
     * @param options.priority Audio entity priority
     * @preserve (Part of the public API)
     */
constructor(text,options){this.text=text,this.options=options}__guid;
/**
     * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
     * The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @preserve (Part of the public API)
     */
start(callback){tcSpeechManager.speechSynthesisStart(this.text,this.options,data=>{this.__guid=data.guid,Callback.callSafe(callback,null,data)})}
/**
     * Request the state (queued, playing, stopped) of a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */getStatus(callback){this.__guid?tcSpeechManager.speechSynthesisGetStatus(this.__guid,callback):Callback.callSafe(callback,null,{error:Errors.ERROR,details:{code:Errors.ERROR,domain:"TcHmi.TcSpeech",reason:"No current speech synthesis."}})}
/**
     * Stops a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */stop(callback){this.__guid?tcSpeechManager.speechSynthesisStop(this.__guid,callback):Callback.callSafe(callback,null,{error:Errors.ERROR,details:{code:Errors.ERROR,domain:"TcHmi.TcSpeech",reason:"No current speech synthesis."}})}}export var AudioEntityPriority;!function(AudioEntityPriority){AudioEntityPriority[AudioEntityPriority.Low=5]="Low",AudioEntityPriority[AudioEntityPriority.Normal=10]="Normal",AudioEntityPriority[AudioEntityPriority.High=15]="High"}(AudioEntityPriority||(AudioEntityPriority={}));