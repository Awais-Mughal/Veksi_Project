import { IGrid } from './IGrid.js';
import { type Point } from './Types.js';
export declare class Grid extends IGrid {
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the grid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the grid.
     * @param height The height of the grid.
     * @param numberOfWidthLines The number of width lines.
     * @param numberOfHeightLines The number of height lines.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(startPoint: Point, width: number, height: number, numberOfWidthLines: number, numberOfHeightLines: number, drawingBorder: {
        height: number;
        width: number;
    }): void;
    /**
     * Draws the grid to the canvas.
     * @param verticalLines The vertical lines with start and end point of a line.
     * @param horizontalLines The horizontal lines with start and end point of a line.
     */
    drawLines(verticalLines: {
        start: Point;
        end: Point;
    }[], horizontalLines: {
        start: Point;
        end: Point;
    }[]): void;
}
//# sourceMappingURL=Grid.d.ts.map