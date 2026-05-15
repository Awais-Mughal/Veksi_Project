import { IAxis } from './IAxis.js';
import type { Point } from './Types.js';
export declare class XAxis extends IAxis {
    /** The width of yAxis as number. */
    protected __width: number;
    /** The height of yAxis as number. */
    protected __height: number;
    /** The lineHeight of yAxis as number. */
    protected __lineWidth: number;
    /** The diffStartLabelAndLine of yAxis as number. */
    protected __diffStartLabelAndLine: number;
    /** The diffEndLabelAndLine of yAxis as number. */
    protected __diffEndLabelAndLine: number;
    /** The xAxisCallback as (e) => void. */
    protected __xAxisCallback: null | ((e: number) => string | null);
    /** The beginning of x Axis */
    protected __xAxisLeftWidth: number;
    /** The logarithmicXPointsForSubgrid of yAxis as number[]. */
    protected __logarithmicXPointsForSubgrid: number[];
    /**
     * Creates a new YAxis.
     * @param id The number of yAxis.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(id: number, canvas: HTMLCanvasElement);
    /**
     * Draws the xAxis to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param endPoint The endpoint to drawing (top/right).
     */
    drawAxis(startPoint: Point, endPoint: Point): void;
    /**
     * Sets the axisName.
     * @param axisName The new axisName.
     */
    setAxisName(axisName: string | null): void;
    /**
     * Returns the height.
     * @returns The height of the xAxis.
     */
    getHeight(): number;
    /**
     * Returns the width.
     * @returns The width of the xAxis.
     */
    getWidth(): number;
    /**
     * Returns the lineHeight.
     * @returns The lineHeight of the xAxis.
     */
    getLineWidth(): number;
    /**
     * Returns the diffStartLabelAndLine.
     * @returns The diffStartLabelAndLine of the xAxis.
     */
    getDiffStartLabelAndLine(): number;
    /**
     * Returns the diffEndLabelAndLine.
     * @returns The diffStartLabelAndLine of the xAxis.
     */
    getDiffEndLabelAndLine(): number;
    /**
     * Sets the xAxisCallback.
     * @param callback The new xAxisCallback.
     */
    setXAxisCallback(callback: (e: number) => string | null): void;
    /**
     * Returns the xAxisCallback.
     * @returns The yAisCallback of the xAxis.
     */
    getXAxisCallback(): ((e: number) => string | null) | null;
    /**
     * Returns the xAxisLeftWidth.
     * @returns The xAxisLeftWidth of the xAxis.
     */
    getXAxisLeftWidth(): number;
    /**
     * Returns the logarithmicXPointsForSubgrid.
     * @returns The logarithmicXPointsForSubgrid of the yAxis.
     */
    getLogarithmicXPointsForSubgrid(): number[];
}
//# sourceMappingURL=XAxis.d.ts.map