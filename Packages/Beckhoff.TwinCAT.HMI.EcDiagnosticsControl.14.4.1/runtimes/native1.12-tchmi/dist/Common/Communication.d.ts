import type { StatusButton } from './WebComponents/StatusButton/StatusButton.js';
import type { EcDiagnostics } from './main.js';
import { type Command, type IMessage } from './ServerDefinitions.js';
export type WSTickCallback = (data: any, first?: boolean) => any;
export type WSCallback = (data: any) => any;
export type WSCallbacks = {
    tickCallback: WSTickCallback;
    cmdGroup?: boolean;
    errorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    };
};
export type WSSubscriptionCallbacks = {
    commands: Command[];
    interval: number;
    initCallback?: WSCallback;
    initialized?: boolean;
    stackedSubscription?: boolean;
} & WSCallbacks;
export type SubscriptionId = number;
export declare abstract class Communication {
    constructor(ecDiagnostics: EcDiagnostics);
    protected __ecDiagnostics: EcDiagnostics;
    abstract subscribe(commands: Command | Command[], interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): number | null;
    protected __subscriptionCallbacks: Map<number, WSSubscriptionCallbacks>;
    protected __pollingCallbacks: Map<number, WSCallbacks>;
    /** value is the subscription id */
    protected __unsubscribeInProgress: Set<number>;
    protected __unsubscribe(subscriptionId: SubscriptionId): void;
    protected __unsubscribedSuccessfully(subscriptionId: SubscriptionId): void;
    abstract unsubscribe(subscriptionId: SubscriptionId | null | undefined, callback?: WSCallback): number | null;
    unsubscribeAll(): void;
    abstract writeSymbol(symbol: string, writeValue: any, callback?: WSCallback, cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
    private __evaluateCommandError;
    protected processReadValues<T = any>(callbacks: WSCallbacks, response: IMessage<T>): undefined | any;
    protected processReadValues_subscription<T = any>(callbacks: WSSubscriptionCallbacks, response: IMessage<T>): void;
    protected processReadValues_polling<T = any>(callbacks: WSCallbacks, response: IMessage<T>): void;
}
