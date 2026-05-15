import { IChart } from './IChart.js';
import { BarGraph } from './BarGraph.js';
import { type Bar, type ChartPosition } from './Types.js';
export declare class BarChart extends IChart {
    /** The barGraph as BarGraph.Bar[]. */
    protected __barGraph: Bar[];
    /** The barGraphs as  BarGraph[]. */
    protected __barGraphs: BarGraph[];
    /** The barChanged as boolean. */
    protected __barChanged: boolean;
    /** The widthLeft as number. */
    protected __widthLeft: number;
    /** The calculated width of the bars */
    protected __calcBarWidth: number;
    /** The width of the bars */
    protected __barWidth: number | null;
    /** The arrangement of the bars */
    protected __barGraphArrangement: string | null;
    /** The border (bigger than grid) of all sites.  */
    protected __drawingBorder: {
        height: number;
        width: number;
    };
    /**
     * Creates a new BarChart.
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
     * Adds a barGraph.
     * @param newGraph The newGraph (yAxis and values for drawing).
     */
    addGraph(newGraph: Bar): void;
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
     * Returns the barGraph.
     * @returns The barGraph.
     */
    getBars(): Bar[];
    /**
     * Returns the barGraph at position.
     * @param index The index.
     * @returns The barGraph.
     */
    getBarsAtPosition(index: number): Bar;
    /**
     * Returns the barGraphs.
     * @returns The barGraphs.
     */
    getBarGraphs(): BarGraph[];
    /**
     * Returns the barGraphs at position.
     * @param index The index.
     * @returns The barGraphs.
     */
    getBarGraphsAtPosition(index: number): BarGraph;
    /**
     * Sets the barWidth.
     * @param barWidth The new barWidth.
     */
    setBarWidth(barWidth: number | null): void;
    /**
     * Sets the graphArrangement.
     * @param graphArrangement The new graphArrangement.
     */
    setBarGraphArrangement(barGraphArrangement: string | null): void;
    /**
     * Sets the barChanged which saved if graphs must be redrawing.
     * @param lineChanged The barChanged attribute.
     */
    setBarChanged(barChanged: boolean): void;
    /**
     * Draws the barChart if anything is changed.
     */
    draw(defaultDistance?: number): void;
}
//# sourceMappingURL=BarChart.d.ts.map