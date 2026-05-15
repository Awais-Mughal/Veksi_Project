/**
 * Stops a globally configured interval.
 * @param name The name of the interval to stop.
 */
export declare function StopInterval(name: string): void;
declare const _StopInterval: typeof StopInterval;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let StopInterval: typeof _StopInterval;
        type StopInterval = typeof _StopInterval;
    }
}
export {};
//# sourceMappingURL=StopInterval.d.ts.map