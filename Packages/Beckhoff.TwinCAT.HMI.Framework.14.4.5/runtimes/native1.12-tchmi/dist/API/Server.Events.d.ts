import { Filter as SystemFilter } from '../System/Filter.js';
import type { Dictionary, DestroyFunction, IResultObject, Filter, SelectableOptional } from './_Types.js';
/**
 * Confirm an alarm.
 * @param alarm The alarm to confirm.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 */
export declare function confirmAlarm(alarm: Alarm, callback?: (this: void, data: IResultObject) => void): void;
/**
 * Export events.
 * @param exportOptions An object containing the export settings.
 * @param exportOptions.filter The filter to apply for the export.
 * @param exportOptions.filename Optional filename for the exported file.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 */
export declare function exportEvents(exportOptions: {
    filter?: Filter | null;
    filename?: string;
}, callback?: (error: IResultObject) => void): void;
/**
 * DEPRECATED
 * Please use a subscription to the ListEvents server symbol instead, otherwise a high volume of events will lead to drastically reduced client performance.
 * Register a consumer for events.
 * Every registration will be queued for 200 ms. This can be forced via the flushRegistrations API.
 * @param filter The filter of this consumer. Only events matching the filter will be passed on to the consumer.
 * @param callbacks The callbacks to pass events back to the consumer. Consumers can specify one callback for listing events and one for the event subscription.
 * @param callbacks.list The callback that is called when the event list has new data.
 * @param callbacks.subscription The callback that is called when the subscription has new data.
 * @param doneCallback The callback that is called when the registration has finished.
 * @deprecated Please use a subscription to the ListEvents server symbol instead.
 */
export declare function registerConsumer(filter: Filter | null, callbacks: {
    list?: (this: void, data: ListResult) => void;
    subscription?: (this: void, data: SubscriptionResult) => void;
}, doneCallback?: null | ((this: void, data: IResultObject) => void)): DestroyFunction;
/**
 * Flush the registrations of consumers that have been added via registerConsumer.
 */
export declare function flushRegistrations(): void;
/**
 * Parses a raw server event and returns an object for consumption by controls etc.
 * @param rawEvent The raw event to parse.
 */
export declare function parseServerEvent(rawEvent: RawServerEvent): Message | Alarm | PayloadEvent;
/**
 * Creates a message or payload event on the server.
 * @param event The event to create.
 * @param callback Is called when the server responds to the CreateEvent request.
 */
export declare function createEvent(event: SelectableOptional<Message, 'sourceDomain'> | PayloadEvent, callback?: (this: void, data: IResultObject) => void): void;
export interface Consumer {
    filter: SystemFilter;
    rawFilter: Filter | null;
    activeAlarmIds: (number | string)[];
    listCallback?: (data: ListResult) => void;
    subscriptionCallback?: (data: SubscriptionResult) => void;
    registration: {
        listPending: boolean;
        subscriptionPending: boolean;
        callback?: null | ((this: void, data: IResultObject) => void);
    };
}
export interface ListResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> extends IResultObject {
    events?: Event<TPayload, TParams>[];
}
export interface SubscriptionResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> extends IResultObject {
    event?: Event<TPayload, TParams>;
    changeType?: ChangeType;
    removedByFilter?: boolean;
}
export declare enum Type {
    Message = 0,
    Alarm = 1,
    Payload = 2
}
export declare enum Severity {
    Verbose = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Critical = 4
}
export declare enum AlarmState {
    Raised = 0,
    Confirmed = 1,
    Cleared = 2,
    ClearedAndConfirmed = 3,
    Invalid = 4
}
export declare enum ConfirmationState {
    NotSupported = 0,
    NotRequired = 1,
    WaitForConfirmation = 2,
    Confirmed = 3,
    Reset = 4
}
export interface EventBase {
    /** The type of event */
    type: Type;
    /** The domain of the event */
    domain: string;
    /** The name of the event */
    name: string;
    timeReceived: Date;
    sessionId?: string;
}
export interface MessageOrAlarm<T extends Dictionary<any> = Dictionary<any>> extends EventBase {
    /** The type of event */
    type: Type.Message | Type.Alarm;
    /** The severity of the event */
    severity: Severity;
    /** DEPRECATED! This used to be used to differentiate the domain in which the event originated vs the domain which was responsible for delivering it. It now always holds the same value as domain.
     * @deprecated This used to be used to differentiate the domain in which the event originated vs the domain which was responsible for delivering it. It now always holds the same value as domain.
     */
    sourceDomain: string;
    /** The localized text of the event */
    text?: string | undefined;
    /** The time at which the event was triggered */
    timeRaised: Date;
    /** Parameters set by the trigger of the event */
    params: T;
}
export interface Message<T extends Dictionary<any> = Dictionary<any>> extends MessageOrAlarm<T> {
    /** The type of event */
    type: Type.Message;
}
export interface Alarm<T extends Dictionary<any> = Dictionary<any>> extends MessageOrAlarm<T> {
    /** The type of event */
    type: Type.Alarm;
    /** A unique value with which this alarm can be identified */
    id: number;
    /** The time at which the alarm was confirmed by the trigger as no longer acute */
    timeCleared: Date | null;
    /** The time at which the alarm was acknowledged by the user */
    timeConfirmed: Date | null;
    alarmState: AlarmState;
    /** The current confirmation status */
    confirmationState: ConfirmationState;
}
export interface PayloadEvent<T = any> extends EventBase {
    /** The type of event */
    type: Type.Payload;
    payload?: T;
}
export declare enum ChangeType {
    AlarmRaised = 0,
    AlarmChanged = 1,
    AlarmDisposed = 2,
    MessageSent = 3
}
export type Event<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> = Message<TParams> | Alarm<TParams> | PayloadEvent<TPayload>;
export interface RawServerEvent {
    domain: string;
    name: string;
    timeReceived: string;
    payload?: RawServerMessage | RawServerAlarm | any;
    payloadType?: Type;
    localizedString?: string;
    changeType?: ServerAlarmChangeType;
    sessionId?: string;
}
export interface RawServerMessage {
    name: string;
    domain: string;
    severity: Severity;
    timeRaised: string;
    params: Dictionary<any>;
}
export interface RawServerAlarm extends RawServerMessage {
    id: number;
    timeCleared: string | null;
    timeConfirmed: string | null;
    alarmState: AlarmState;
    confirmationState: ConfirmationState;
}
export declare enum ServerAlarmChangeType {
    Raise = 0,
    Change = 1,
    Dispose = 2
}
/**
 * Type guard for alarms. Returns true if the given candidate is a Alarm, false otherwise
 * @param value The candidate to test.
 */
export declare function isAlarm(value: Event): value is Alarm;
/**
 * Type guard for Messages. Returns true if the given candidate is a Message, false otherwise
 * @param value The candidate to test.
 */
export declare function isMessage(value: Event): value is Message;
/**
 * Type guard for Payloads. Returns true if the given candidate is a Payload, false otherwise
 * @param value The candidate to test.
 */
export declare function isPayload(value: Event): value is PayloadEvent;
//# sourceMappingURL=Server.Events.d.ts.map