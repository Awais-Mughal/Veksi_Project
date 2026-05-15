/**
 * Return a formatted string for the value passed in.
 * @param value
 * @param maxDecimals
 */
export declare function GaugeValueFormatter(value: number, maxDecimals?: number): string;
declare const _GaugeValueFormatter: typeof GaugeValueFormatter;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GaugeValueFormatter: typeof _GaugeValueFormatter;
        type GaugeValueFormatter = typeof _GaugeValueFormatter;
    }
}
export {};
//# sourceMappingURL=GaugeValueFormatter.d.ts.map