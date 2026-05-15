import { IGraph } from './IGraph.js';
import type { XAxis } from './XAxis.js';
import type { ColorRanges, Bar } from './Types.js';
export declare class HorizontalBarGraph extends IGraph {
    /** The barWidth as number. */
    protected __barWidth: number | null;
    /** The barColor as string. */
    protected __barColor: string | null;
    /** The border (bigger than grid) of all sites.  */
    protected __drawingBorder: {
        height: number;
        width: number;
    };
    /** The scaleFactor as number. */
    protected __scaleFactor: number;
    /** Defines how bars should be colored based on their value. */
    protected __colorRanges: ColorRanges[] | null | undefined;
    /**
     * Creates a new BarGraph.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the lineGraph to the canvas.
     * @param bar The bar (yAxis and values) to drawing.
     * @param xAxis The xAxis.
     */
    draw(bar: Bar, xAxis: XAxis): void;
    /**
     * Draws the lineGraph clustered to the canvas.
     * @param bar The bar (yAxis and values) to drawing.
     * @param xAxis The xAxis.
     * @param index The index of bar.
     */
    drawClustered(bar: Bar, xAxis: XAxis, index: number): void;
    /**
     * Draws the lineGraph to the canvas.
     * @param bar The bar (yAxis and values) to drawing.
     * @param xAxis The xAxis.
     * @param minValues Array which holds the minimal values. Will be filled in the function!
     */
    drawStacked(bar: Bar, xAxis: XAxis, minValues: number[]): void;
    /**
     * Sets the barWidth.
     * @param barWidth The new barWidth.
     */
    setBarWidth(barWidth: number | null): void;
    /**
     * Returns the barWidth.
     * @returns The barWidth of the barGraph.
     */
    getBarWidth(): number | null;
    /**
     * Sets the drawingBorder.
     * @param drawingBorder The new drawingBorder.
     */
    setDrawingBorder(drawingBorder: {
        height: number;
        width: number;
    }): void;
    /**
     * Sets the barColor.
     * @param barColor The new barColor.
     */
    setBarColor(barColor: string | null): void;
    /**
     * Returns the barColor.
     * @returns The barColor of the barGraph.
     */
    getBarColor(): string | null;
    /**
     * Returns the scaleFactor.
     * @returns The scaleFactor of the barGraph.
     */
    getScaleFactor(): number;
    /**
     * Sets the scaleFactor.
     * @param scaleFactor The new scaleFactor.
     */
    setScaleFactor(scaleFactor: number | null | undefined): void;
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
     * Returns the colorRanges.
     * @returns The colorRanges of the barGraph.
     */
    getColorRanges(): ColorRanges[] | null | undefined;
    /**
     * Sets the colorRanges.
     * @param colorRanges The new colorRanges.
     */
    setColorRanges(colorRanges: ColorRanges[] | null | undefined): void;
}
//# sourceMappingURL=HorizontalBarGraph.d.ts.map