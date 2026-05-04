import { Communication as CommonCommunication, type WSCallback, type WSTickCallback } from '../Common/Communication.js';
import type { EcDiagnostics } from '../Common/main.js';
import type { Command } from '../Common/ServerDefinitions.js';
import type { StatusButton } from '../Common/WebComponents/StatusButton/StatusButton.js';
export declare class Communication extends CommonCommunication {
    constructor(host: string, port: string, secureConnection: boolean, ecDiagnostics: EcDiagnostics);
    private __endpoint;
    private __host;
    private __port;
    private __secureConnection;
    private __socket;
    private __requestCounter;
    establishConnection(callback: () => any): void;
    private __reEstablishConnection;
    private __resubscribe;
    subscribe(commands: Command, interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): null | number;
    subscribe(commands: Command[], interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): null | number;
    protected __execSubscribe(subscriptionId: number, commands: Command[], interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): boolean;
    unsubscribe(subscriptionId: number | null | undefined, callback?: WSCallback): number | null;
    writeSymbol(symbol: string, writeValue: any, callback: WSCallback, cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
}
