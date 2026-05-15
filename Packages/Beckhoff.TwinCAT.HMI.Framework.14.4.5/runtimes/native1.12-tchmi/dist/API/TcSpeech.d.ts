import type { IResultObject } from './_Types.js';
/**
 * (Re-)Starts the rtc connection to TwinCAT speech engine.
 * @param options This option can override all setting from tchmiconfig.json and more
 * @param callback Gets notification when opening connection failed.
 * @preserve (Part of the public API)
 */
export declare function openConnection(options?: ConnectionOptions & Partial<BaseConfig>, callback?: null | ((this: void, data: IResultObject) => void)): void;
/**
 * Closes an active connection to TwinCAT speech engine.
 * @param options Can target a specific remote TwinCAT speech engine
 * @param options.remoteSocketId socket id to close
 * @param callback A callback to get feedback
 * @preserve (Part of the public API)
 */
export declare function closeConnection(options?: {
    remoteSocketId?: number;
}, callback?: null | ((this: void, data: IResultObject) => void)): void;
/**
 * Sets the volume (between 0 and 1) of speech output on this device.
 * @param valueNew new volume. Will be capped between 0 and 1.
 * @preserve (Part of the public API)
 */
export declare function setVolume(valueNew: number): void;
/**
 * Functions for SpeechSynthesis .
 * @preserve (Part of the public API)
 */
export declare class SpeechSynthesis {
    /** Text to be synthesized */
    readonly text: string;
    readonly options?: {
        priority?: AudioEntityPriority;
    } | undefined;
    /**
     * Functions for SpeechSynthesis .
     * @param text Text to be synthesized
     * @param options Options
     * @param options.priority Audio entity priority
     * @preserve (Part of the public API)
     */
    constructor(
    /** Text to be synthesized */
    text: string, options?: {
        priority?: AudioEntityPriority;
    } | undefined);
    private __guid;
    /**
     * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
     * The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @preserve (Part of the public API)
     */
    start(callback?: null | ((this: void, data: SpeechSynthesisResult) => void)): void;
    /**
     * Request the state (queued, playing, stopped) of a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */
    getStatus(callback?: null | ((this: void, data: SpeechSynthesisResult) => void)): void;
    /**
     * Stops a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */
    stop(callback?: null | ((this: void, data: SpeechSynthesisResult) => void)): void;
}
/** Configuration for TcSpeech Integration in tchmiconfig.json */
export interface BaseConfig {
    /** Name of the TcSpeech extension on the server. Defaults to 'TcHmiSpeech' */
    domain: string;
    /** Our speaker should be used. */
    enableSpeaker: boolean;
    /** Our microphone should be used. */
    enableMicrophone: boolean;
    /** Default audio volume */
    defaultVolume: number;
    /**
     * Ignore detected speech commands with a lower relative measure of the certainty of correct recognition of a phrase.
     * The value is from 0.0 to 1.0, for low to high confidence, respectively.
     **/
    confidenceThreshold: number;
}
export interface ConnectionOptions {
    /** Target a specific remote TwinCAT speech engine to connect */
    remoteSocketId?: number;
    /** Constraint for Microphone */
    sourceConstraints?: MediaStreamConstraints['audio'];
    /** Constraint for Speaker */
    sinkConstraints?: {
        /** Device id of audiooutput */
        deviceId?: string;
    };
}
export declare enum AudioEntityPriority {
    Low = 5,
    Normal = 10,
    High = 15
}
export interface SpeechSynthesisResult extends IResultObject {
    /** GUID for this request. */
    guid?: string;
    state?: 'Queued' | 'Playing' | 'Stopped';
}
export interface IEventCallbackParameter {
    /** Recognition Tag of the active SRGS file which was detected. */
    Command: string;
    /**
     * A relative measure of the certainty of correct recognition of a phrase.
     * The value is from 0.0 to 1.0, for low to high confidence, respectively. */
    Confidence: number;
    /** Parameter which was detected by speech recognition. Type depends on SRGS file. */
    Parameter: unknown;
}
//# sourceMappingURL=TcSpeech.d.ts.map