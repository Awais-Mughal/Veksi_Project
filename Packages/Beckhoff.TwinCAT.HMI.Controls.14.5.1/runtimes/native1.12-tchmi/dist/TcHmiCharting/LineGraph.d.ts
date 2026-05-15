import { IGraph } from './IGraph.js';
import type { XAxis } from './XAxis.js';
import { type PointValueAndPosition, type ColorRanges, type FillModeReferenceLine, FillMode, type Line } from './Types.js';
export declare class LineGraph extends IGraph {
    /** The lineWidth as positive number without zero. */
    protected __lineWidth: number | null;
    /** The lineColor as string. */
    protected __lineColor: string | null;
    /** The pointDot as boolean. */
    protected __pointDot: boolean;
    /** The pointDotRadius as number. */
    protected __pointDotRadius: number | null;
    /** The pointDotFillCOlor as string. */
    protected __pointDotFillColor: string | null;
    /** The pointDotStrokeWidth as number. */
    protected __pointDotStrokeWidth: number | null;
    /** The pointDotStrokeColor as string. */
    protected __pointDotStrokeColor: string | null;
    /** The middlepoints of the lineGraph dots as array*/
    protected __points: PointValueAndPosition[];
    /** The border (bigger than grid) of all sites.  */
    protected __drawingBorder: number;
    /** The xScaleFactor as number. */
    protected __xScaleFactor: number;
    /** The yScaleFactor as number. */
    protected __yScaleFactor: number;
    /** The fillMode as FillMode. */
    protected __fillMode: FillMode;
    /** The fillColor as string. */
    protected __fillColor: string | null;
    /** The fillTransparency as number. */
    protected __fillTransparency: number | null;
    /** The scaleFactor as number. */
    protected __colorRanges: ColorRanges[] | null | undefined;
    /** The referenceLine for fillMode. */
    protected __fillModeReferenceLine: FillModeReferenceLine | null;
    /**
     * Creates a new LineGraph.
     * @param canvas The optional canvas element to drawing.
     */
    constructor(canvas?: HTMLCanvasElement);
    /**
     * Draws the lineGraph to the canvas.
     * @param line The line (yAxis and points) to drawing.
     * @param xAxis The xAxis.
     */
    draw(line: Line, xAxis: XAxis): void;
    /** Defines the segments with the different line and fill colors. */
    private getColoredSegments;
    /** Closes the path between the points and fill it with the fillColor. */
    private renderFillSegment;
    /**
     * Returns the middlePoints of the lineGraph dots.
     * @returns The middlePoints of the lineGraph dots.
     */
    getPoints(): PointValueAndPosition[];
    /**
     * Removes all middlePoints of the lineGraph.
     */
    removePoints(): void;
    /**
     * Sets the lineWidth.
     * @param lineWidth The new lineWidth.
     */
    setLineWidth(lineWidth: number | null): void;
    /**
     * Returns the lineWidth.
     * @returns The lineWidth of the lineGraph.
     */
    getLineWidth(): number | null;
    /**
     * Sets the lineColor.
     * @param lineColor The new lineColor.
     */
    setLineColor(lineColor: string | null): void;
    /**
     * Returns the lineColor.
     * @returns The lineColor of the lineGraph.
     */
    getLineColor(): string | null;
    /**
     * Sets the pointDot.
     * @param pointDot The new pointDot.
     */
    setPointDot(pointDot: boolean): void;
    /**
     * Returns the pointDot.
     * @returns The pointDot of the lineGraph.
     */
    getPointDot(): boolean;
    /**
     * Sets the pointDotRadius.
     * @param pointDotRadius The new pointDotRadius.
     */
    setPointDotRadius(pointDotRadius: number | null): void;
    /**
     * Returns the pointDotRadius.
     * @returns The pointDotRadius of the lineGraph.
     */
    getPointDotRadius(): number | null;
    /**
     * Sets the pointDotFillColor.
     * @param pointDotFillColor The new pointDotFillColor.
     */
    setPointDotFillColor(pointDotFillColor: string | null): void;
    /**
     * Returns the pointDotFillColor.
     * @returns The pointDotFillColor of the lineGraph.
     */
    getPointDotFillColor(): string | null;
    /**
     * Sets the pointDotStrokeWidth.
     * @param pointDotStrokeWidth The new pointDotStrokeWidth.
     */
    setPointDotStrokeWidth(pointDotStrokeWidth: number | null): void;
    /**
     * Returns the pointDotStrokeWidth.
     * @returns The pointDotStrokeWidth of the lineGraph.
     */
    getPointDotStrokeWidth(): number | null;
    /**
     * Sets the pointDotStrokeColor.
     * @param pointDotStrokeColor The new pointDotStrokeColor.
     */
    setPointDotStrokeColor(pointDotStrokeColor: string | null): void;
    /**
     * Returns the pointDotStrokeColor.
     * @returns The pointDotStrokeColor of the lineGraph.
     */
    getPointDotStrokeColor(): string | null;
    /**
     * Sets the canvas.
     * @param canvas The new canvas.
     */
    setCanvas(canvas: HTMLCanvasElement): void;
    /**
     * Returns the canvas.
     * @returns The canvas of the lineGraph.
     */
    getCanvas(): HTMLCanvasElement | undefined;
    /**
     * Sets the drawingBorder.
     * @param drawingBorder The new drawingBorder.
     */
    setDrawingBorder(drawingBorder: number): void;
    /**
     * Returns the xScaleFactor.
     * @returns The xScaleFactor of the barGraph.
     */
    getXScaleFactor(): number;
    /**
     * Sets the xScaleFactor.
     * @param xScaleFactor The new xScaleFactor.
     */
    setXScaleFactor(xScaleFactor: number | null | undefined): void;
    /**
     * Returns the yScaleFactor.
     * @returns The yScaleFactor of the barGraph.
     */
    getYScaleFactor(): number;
    /**
     * Sets the yScaleFactor.
     * @param yScaleFactor The new yScaleFactor.
     */
    setYScaleFactor(yScaleFactor: number | null | undefined): void;
    /**
     * Returns the fillMode.
     * @returns The fillMode of the barGraph.
     */
    getFillMode(): FillMode;
    /**
     * Sets the fillMode.
     * @param fillMode The new fillMode.
     */
    setFillMode(fillMode: FillMode): void;
    /**
     * Returns the fillColor.
     * @returns The fillColor of the barGraph.
     */
    getFillColor(): string | null;
    /**
     * Sets the fillColor.
     * @param fillColor The new fillColor.
     */
    setFillColor(fillColor: string): void;
    /**
     * Returns the fillTransparency.
     * @returns The fillTransparency of the barGraph.
     */
    getFillTransparency(): number | null;
    /**
     * Sets the fillTransparency.
     * @param fillTransparency The new fillTransparency.
     */
    setFillTransparency(fillTransparency: number | null): void;
    /**
     * Returns the colorRanges.
     * @returns The colorRanges of the barGraph.
     */
    getColorRanges(): ColorRanges[] | null | undefined;
    /**
     * Sets the colorRanges.
     * @param colorRanges The new colorRanges.
     */
    setColorRanges(colorRanges: ColorRanges[] | null | undefined): void;
    /**
     * Sets the horizontal referenceLine which is used for fillMode.
     * @param referenceLine The referenceLine.
     */
    setFillModeReferenceLine(referenceLine: FillModeReferenceLine): void;
}
//# sourceMappingURL=LineGraph.d.ts.map