/**
 * Starts a globally configured interval.
 * @param name The name of the interval to start.
 */
export declare function StartInterval(name: string): void;
declare const _StartInterval: typeof StartInterval;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let StartInterval: typeof _StartInterval;
        type StartInterval = typeof _StartInterval;
    }
}
export {};
//# sourceMappingURL=StartInterval.d.ts.map