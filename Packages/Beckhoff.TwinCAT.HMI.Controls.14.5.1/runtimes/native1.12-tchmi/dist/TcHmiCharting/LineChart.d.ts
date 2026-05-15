import { IChart } from './IChart.js';
import { LineGraph } from './LineGraph.js';
import { type Line, type ChartPosition } from './Types.js';
export declare class LineChart extends IChart {
    /** The lineGraph as LineGraph.Line[]. */
    protected __lineGraph: Line[];
    /** The lineGraphs as  LineGraph[]. */
    protected __lineGraphs: LineGraph[];
    /** The lineChanged as boolean. */
    protected __lineChanged: boolean;
    /** The widthLeft as number. */
    protected __widthLeft: number | null;
    /** The border (bigger than grid) of all sites.  */
    protected __drawingBorder: number;
    /**
     * Creates a new LineChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, referenceLinesPosition: ChartPosition);
    /**
     * Delete the yAxis at index.
     * @param index The index.
     */
    deleteYAxis(index: number): void;
    /**
     * Delete all yAxis.
     */
    deleteAllYAxis(): void;
    /**
     * Delete all referenceLines.
     */
    deleteAllReferenceLines(): void;
    /**
     * Adds a lineGraph.
     * @param newGraph The newGraph (yAxis and points for drawing).
     */
    addGraph(newGraph: Line): void;
    /**
     * Delete the graph at index.
     * @param index The index.
     */
    deleteGraph(index: number): void;
    /**
     * Delete all graphs.
     */
    deleteAllGraphs(): void;
    /**
     * Removes all canvas elements and clears all arrays.
     */
    remove(): void;
    /**
     * Clears all canvas elements and calls all delete functions.
     */
    clear(width: number, height: number): void;
    /**
     * Returns the lineGraph.
     * @returns The lineGraph.
     */
    getLines(): Line[];
    /**
     * Returns the lineGraph at position.
     * @param index The index.
     * @returns The lineGraph.
     */
    getLinesAtPosition(index: number): Line;
    /**
     * Returns the lineGraphs.
     * @returns The lineGraphs.
     */
    getLineGraphs(): LineGraph[];
    /**
     * Returns the lineGraphs at position.
     * @param index The index.
     * @returns The lineGraphs.
     */
    getLineGraphsAtPosition(index: number): LineGraph;
    /**
     * Returns the drawingBorder of the lineGraph.
     */
    getDrawingBorder(): number;
    /**
     * Sets the lineChanged which saved if graphs must be redrawing.
     * @param lineChanged The lineChanged attribute.
     */
    setLineChanged(lineChanged: boolean): void;
    /**
     * Draws the lineChart if anything is changed.
     */
    draw(defaultDistance?: number): void;
    drawReferenceLines(showOnlyYAxis: boolean, defaultDistance?: number): void;
}
//# sourceMappingURL=LineChart.d.ts.map