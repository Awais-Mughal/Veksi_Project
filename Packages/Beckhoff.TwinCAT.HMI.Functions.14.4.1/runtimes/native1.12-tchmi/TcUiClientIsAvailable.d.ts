/**
 * Checks if the TcUiClient API is available.
 * @returns A boolean indicating whether the TcUiClient API is available.
 */
export declare function TcUiClientIsAvailable(): boolean;
declare const _TcUiClientIsAvailable: typeof TcUiClientIsAvailable;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TcUiClientIsAvailable: typeof _TcUiClientIsAvailable;
        type TcUiClientIsAvailable = typeof _TcUiClientIsAvailable;
    }
}
export {};
//# sourceMappingURL=TcUiClientIsAvailable.d.ts.map