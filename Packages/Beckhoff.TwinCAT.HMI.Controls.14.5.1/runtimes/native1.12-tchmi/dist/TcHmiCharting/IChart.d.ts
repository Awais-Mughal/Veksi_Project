import { YAxis } from './YAxis.js';
import { XAxis } from './XAxis.js';
import { Grid } from './Grid.js';
import { Subgrid } from './Subgrid.js';
import { ReferenceLine } from './ReferenceLine.js';
import { ChartPosition, type AxisPosition } from './Types.js';
export declare class IChart {
    /** The elementRoot as jquery object. */
    protected __elementRoot: JQuery;
    /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
    protected __canvasFrame: HTMLCanvasElement | null;
    /** The canvas to drawing the lines as HTMLCanvasElement. */
    protected __canvasDrawing: HTMLCanvasElement | null;
    /** The canvas to drawing reference lines as HTMLCanvasElement. */
    protected __canvasLines: HTMLCanvasElement | null;
    /** The canvas frame context as CanvasRenderingContext2D. */
    protected __contextFrame: CanvasRenderingContext2D | null;
    /** The canvas context drawing as CanvasRenderingContext2D. */
    protected __contextDrawing: CanvasRenderingContext2D | null;
    /** The canvas context lines as CanvasRenderingContext2D. */
    protected __contextLines: CanvasRenderingContext2D | null;
    /** The canvas to drawing the graphs as HTMLCanvasElement. */
    protected __canvasGraph: HTMLCanvasElement | null;
    /** The yAxis as YAxis[]. */
    protected __yAxis: YAxis[];
    /** The xAxis as XAxis object. */
    protected __xAxis: XAxis | null;
    /** The grid as Grid object. */
    protected __grid: Grid | null;
    /** The subgrid as Subgrid object. */
    protected __subgrid: Subgrid | null;
    /** The referenceLines as ReferenceLines[]. */
    protected __referenceLines: ReferenceLine[];
    /** The position of reference lines canvas as ReferenceLines[]. */
    protected __referenceLinesPosition: ChartPosition;
    private __hasChanged;
    /** The yAxisWidth as number. */
    protected __yAxisWidth: number | null;
    /** The yLabelFontFamily as string. */
    protected __yLabelFontFamily: TcHmi.FontFamily | null;
    /** The yLabelFontSize as number. */
    protected __yLabelFontSize: number | null;
    /** The yLabelFontSizeUnit as string. */
    protected readonly __yLabelFontSizeUnit = "px";
    /** The yLabelFontWeight as string. */
    protected __yLabelFontWeight: TcHmi.FontWeight | null;
    /** The yShowLabels as boolean. */
    protected __yShowLabels: boolean;
    /** The yMainTickSteps as number. */
    protected __yMainTickSteps: number | null;
    /** The ySubTickSteps as number. */
    protected __ySubTickSteps: number | null;
    /** The showYSubTicks as boolean. */
    protected __showYSubTicks: boolean;
    /**
     * Creates a new IChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, referenceLinesPosition: ChartPosition);
    /**
     * Adds a xAxis (only one xAxis are exists).
     */
    addXAxis(): void;
    /**
     * Adds a yAxis.
     * @param position The position where the yAxis should added.
     */
    addYAxis(position: AxisPosition): void;
    /**
     * Adds a yAxis at index.
     * @param position The position where the yAxis should added.
     * @param index The index where the new yAxis should added in array.
     */
    addYAxisAtPosition(index: number, position: AxisPosition): void;
    /**
     * Adds a grid (only one grid are exists).
     */
    addGrid(): void;
    /**
     * Delete the grid.
     */
    deleteGrid(): void;
    /**
     * Adds a subgrid (only one subgrid are exists).
     */
    addSubgrid(): void;
    /**
     * Delete the subgrid.
     */
    deleteSubgrid(): void;
    /**
     * Adds a reference line.
     */
    addReferenceLine(): void;
    /**
     * Adds a reference line at index.
     * @param index The index where the new reference line should added in array.
     */
    addReferenceLineAtPosition(index: number): void;
    /**
     * Removes all canvas elements.
     */
    remove(): void;
    /**
     * Clears all canvas elements.
     */
    clear(width: number, height: number): void;
    /**
     * Returns all yAxis.
     * @returns The yAxis.
     */
    getYAxis(): YAxis[];
    /**
     * Returns the specific yAxis.
     * @param index The index.
     * @returns The yAxis at index.
     */
    getYAxisAtPosition(index: number): YAxis;
    /**
     * Returns all referenceLines.
     * @returns The referenceLines.
     */
    getReferenceLines(): ReferenceLine[];
    /**
     * Returns the specific referenceLines.
     * @param index The index.
     * @returns The referenceLines at index.
     */
    getReferenceLinesAtPosition(index: number): ReferenceLine;
    /**
     * Returns the xAxis.
     * @returns The xAxis.
     */
    getXAxis(): XAxis | null;
    /**
     * Returns the grid.
     * @returns The grid.
     */
    getGrid(): Grid | null;
    /**
     * Returns the subgrid.
     * @returns The subgrid.
     */
    getSubgrid(): Subgrid | null;
    /**
     * Returns the yAxisWidth.
     * @returns The yAxisWidth.
     */
    getYAxisWidth(): number | null;
    /**
     * Returns the yLabelFontFamily.
     * @returns The yLabelFontFamily.
     */
    getYLabelFontFamily(): string | null;
    /**
     * Returns the yLabelFontSize.
     * @returns The yLabelFontSize.
     */
    getYLabelFontSize(): number | null;
    /**
     * Returns the yLabelFontSizeUnit.
     * @returns The yLabelFontSizeUnit.
     */
    getYLabelFontSizeUnit(): string;
    /**
     * Returns the yLabelFontWeight.
     * @returns The yLabelFontWeight.
     */
    getYLabelFontWeight(): import("Beckhoff.TwinCAT.HMI.Framework/dist/API/_Types.js").FontWeight | null;
    /**
     * Returns the yShowLabels.
     * @returns The yShowLabels.
     */
    getYShowLabels(): boolean;
    /**
     * Returns the yMainTickSteps.
     * @returns The yMainTickSteps.
     */
    getYMainTickSteps(): number | null;
    /**
     * Returns the ySubTickSteps.
     * @returns The ySubTickSteps.
     */
    getYSubTickSteps(): number | null;
    /**
     * Returns the canvas object where the graphs are drawing.
     * @returns The canvas where drawing the graphs.
     */
    getCanvasDrawing(): JQuery<HTMLCanvasElement> | null;
    /**
     * Returns the canvas object where the axis, grid and subgrid are drawing.
     * @returns The canvas where drawing axis, grid and subgrid.
     */
    getCanvasFrame(): JQuery<HTMLCanvasElement> | null;
    /**
     * Returns the canvas object where the reference lines are drawing.
     * @returns The canvas where drawing reference lines.
     */
    getCanvasLines(): JQuery<HTMLCanvasElement> | null;
    /**
     * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
     * @returns The hasChanged attribute.
     */
    getHasChanged(): boolean;
    /**
     * Sets the yAxisWidth.
     * @param yAxisWidth The new yAxisWidth.
     */
    setYAxisWidth(yAxisWidth: number | null): void;
    /**
     * Sets the labelFontFamily.
     * @param labelFontFamily The new labelFontFamily.
     */
    setYLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
    /**
     * Sets the labelFontSize.
     * @param labelFontSize The new labelFontSize.
     */
    setYLabelFontSize(labelFontSize: number | null): void;
    /**
     * Sets the labelFontSizeUnit.
     * @param labelFontSizeUnit The new labelFontSizeUnit.
     */
    setYLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
    /**
     * Sets the labelFontWeight.
     * @param labelFontWeight The new labelFontWeight.
     */
    setYLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
    /**
     * Sets the yShowLabels.
     * @param yShowLabels The new yShowLabels.
     */
    setYShowLabels(yShowLabels: boolean): void;
    /**
     * Sets the yMainTickSteps.
     * @param yMainTickSteps The new yMainTickSteps.
     */
    setYMainTickSteps(yMainTickSteps: number | null): void;
    /**
     * Sets the ySubTickSteps.
     * @param ySubTickSteps The new ySubTickSteps.
     */
    setYSubTickSteps(ySubTickSteps: number | null): void;
    /**
     * Sets the showYSubTicks.
     * @param showYSubTicks The new showYSubTicks.
     */
    setShowYSubTicks(showYSubTicks: boolean): void;
    /**
     * Creates the canvas where axis, grid and subgrid are drawing.
     */
    __initCanvas(canvasWidth: number, canvasHeight: number): void;
    /**
     * Sets the hasChanged.
     * @param hasChanged The hasChanged attribute.
     */
    setHasChanged(hasChanged: boolean): void;
}
//# sourceMappingURL=IChart.d.ts.map