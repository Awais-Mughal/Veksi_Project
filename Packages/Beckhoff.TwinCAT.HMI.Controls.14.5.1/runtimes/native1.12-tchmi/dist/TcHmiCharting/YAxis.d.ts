import { IAxis } from './IAxis.js';
import { AxisPosition, type Point } from './Types.js';
export declare class YAxis extends IAxis {
    /** The position as IAxis.Position. */
    protected __position: AxisPosition;
    /** The width of yAxis as number. */
    protected __width: number;
    /** The height of yAxis as number. */
    protected __height: number;
    /** The lineHeight of yAxis as number. */
    protected __lineHeight: number;
    /** The diffStartLabelAndLine of yAxis as number. */
    protected __diffStartLabelAndLine: number;
    /** The diffEndLabelAndLine of yAxis as number. */
    protected __diffEndLabelAndLine: number;
    /** The yAxisCallback as (e) => void. */
    protected __yAxisCallback: null | ((e: number) => string | null);
    /** The logarithmicYPointsForSubgrid of yAxis as number[]. */
    protected __logarithmicYPointsForSubgrid: number[];
    /**
     * Creates a new YAxis.
     * @param id The number of yAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param position The position where the yAxis should added.
     */
    constructor(id: number, canvas: HTMLCanvasElement, position: AxisPosition);
    /**
     * Draws the yAxis to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param endPoint The endpoint to drawing (top/right).
     * @param showOnlyYAxis Only y Axis is drawing..
     */
    drawAxis(startPoint: Point, endPoint: Point, showOnlyYAxis: boolean, labelSize: {
        first: number;
        latest: number;
    }): void;
    /**
     * Returns the calculated width of the longest label of all axis labels.
     * @returns The width of the longest label.
     */
    getLongestTextWidth(): number;
    /**
     * Sets the position.
     * @param position The new position.
     */
    setPosition(position: AxisPosition): void;
    /**
     * Returns the position.
     * @returns The position.
     */
    getPosition(): AxisPosition;
    /**
     * Sets the axisName.
     * @param axisName The new axisName.
     */
    setAxisName(axisName: string | null): void;
    /**
     * Returns the height.
     * @returns The height of the yAxis.
     */
    getHeight(): number;
    /**
     * Returns the width.
     * @returns The width of the yAxis.
     */
    getWidth(): number;
    /**
     * Returns the lineHeight.
     * @returns The lineHeight of the yAxis.
     */
    getLineHeight(): number;
    /**
     * Returns the diffStartLabelAndLine.
     * @returns The diffStartLabelAndLine of the yAxis.
     */
    getDiffStartLabelAndLine(): number;
    /**
     * Returns the diffEndLabelAndLine.
     * @returns The diffStartLabelAndLine of the yAxis.
     */
    getDiffEndLabelAndLine(): number;
    /**
     * Sets the yAxisCallback.
     * @param callback The new yAxisCallback.
     */
    setYAxisCallback(callback: null | ((e: number) => string | null)): void;
    /**
     * Returns the yAxisCallback.
     * @returns The yAisCallback of the yAxis.
     */
    getYAxisCallback(): ((e: number) => string | null) | null;
    /**
     * Returns the logarithmicYPointsForSubgrid.
     * @returns The logarithmicYPointsForSubgrid of the yAxis.
     */
    getLogarithmicYPointsForSubgrid(): number[];
}
//# sourceMappingURL=YAxis.d.ts.map