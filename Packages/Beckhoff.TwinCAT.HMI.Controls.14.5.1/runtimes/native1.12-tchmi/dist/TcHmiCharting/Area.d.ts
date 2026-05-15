import type { AreaRange, AreaValueAndPosition } from './Types.js';
import type { XAxis } from './XAxis.js';
import type { YAxis } from './YAxis.js';
export declare class Area {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The backgroundColor as string. */
    protected __backgroundColor: string | null;
    /** The border (bigger than grid) of all sites.  */
    protected __drawingBorder: number;
    /** The area with start and end x-coordinate as array*/
    protected __areas: AreaRange[];
    /** The middlepoints with values of the areas as array*/
    protected __areaPositionAndValue: AreaValueAndPosition[];
    /** Specifies whether the area should be drawn only 1 pixel forward. As boolean*/
    protected __drawLineWithOnePixel: boolean;
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
    draw(xAxis: XAxis, yAxis: YAxis): void;
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
     * Returns the areas of the lineGraph areas as array.
     * @returns The areas of the lineGraph areas.
     */
    getAreas(): AreaRange[];
    /**
     * Removes all middlePoints of the lineGraph.
     */
    removeAllAreas(): void;
    /**
     * Returns the middlePoints with values of the lineGraph areas.
     * @returns The middlePoints with values of the lineGraph areas.
     */
    getAreasPositionAndValue(): AreaValueAndPosition[];
    /**
     * Removes all middlePoints of the lineGraph.
     */
    addArea(area: AreaRange): void;
    /**
     * Sets the backgroundColor.
     * @param backgroundColor The new backgroundColor.
     */
    setBackgroundColor(backgroundColor: string | null): void;
    /**
     * Returns the backgroundColor.
     * @returns The backgroundColor value.
     */
    getBackgroundColor(): string | null;
    /**
     * Sets the drawLineWithOnePixel.
     * @param drawLineWithOnePixel The new drawLineWithOnePixel.
     */
    setDrawLineWithOnePixel(drawLineWithOnePixel?: boolean): void;
    /**
     * Returns the drawLineWithOnePixel.
     * @returns The drawLineWithOnePixel value.
     */
    getDrawLineWithOnePixel(): boolean;
}
//# sourceMappingURL=Area.d.ts.map