/**
 * Return a formatted string for the tooltip passed in.
 * @param xValue
 * @param yValue
 * @param xShow
 * @param yShow
 * @param xMaxDecimals
 * @param yMaxDecimals
 */
export declare function LineChartTooltipFormatter(xValue: number, yValue: number, xShow?: boolean, yShow?: boolean, xMaxDecimals?: number, yMaxDecimals?: number): string;
declare const _LineChartTooltipFormatter: typeof LineChartTooltipFormatter;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let LineChartTooltipFormatter: typeof _LineChartTooltipFormatter;
        type LineChartTooltipFormatter = typeof _LineChartTooltipFormatter;
    }
}
export {};
//# sourceMappingURL=LineChartTooltipFormatter.d.ts.map