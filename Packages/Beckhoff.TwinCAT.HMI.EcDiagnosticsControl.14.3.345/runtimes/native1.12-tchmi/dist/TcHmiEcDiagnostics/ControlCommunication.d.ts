import type { EcDiagnostics } from '../Common/main.js';
import { Communication, type WSTickCallback, type WSCallback } from '../Common/Communication.js';
import type { StatusButton } from '../Common/WebComponents/StatusButton/StatusButton.js';
export declare class ControlCommunication extends Communication {
    constructor(ecDiagnostics: EcDiagnostics);
    subscribe(commands: TcHmi.Server.ICommand[] | TcHmi.Server.ICommand, interval: number, tickCallback: WSTickCallback, initCallback?: WSCallback): number | null;
    unsubscribe(subscriptionId: number | null | undefined, callback?: (data: any) => any): number | null;
    writeSymbol(symbol: string, writeValue: any, callback?: (data: any) => any, cbErrorEl?: {
        button?: StatusButton;
        message?: HTMLElement;
    }): void;
}
//# sourceMappingURL=ControlCommunication.d.ts.map