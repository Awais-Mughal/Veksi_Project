import { IGrid } from './IGrid.js';
import { type Point } from './Types.js';
export declare class Subgrid extends IGrid {
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the subgrid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the subgrid.
     * @param height The height of the subgrid.
     * @param numberOfLinesBetweenMainGridWidth The number of lines between maingrid in width.
     * @param widthBetweenMainGrid The width between two main grid lines.
     * @param numberOfLinesBetweenMainGridHeight The number of lines between maingrid in height.
     * @param heightBetweenMainGrid The height between two main grid lines.
     * @param numberOfMainGridWidthLines The number of main grid width lines.
     * @param numberOfMainGridHeightLines The number of main grid height lines.
     * @param gridLineWidth The line width of the grid.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(startPoint: Point, width: number, height: number, numberOfLinesBetweenMainGridWidth: number | null, widthBetweenMainGrid: number, numberOfLinesBetweenMainGridHeight: number | null, heightBetweenMainGrid: number, numberOfMainGridWidthLines: number, numberOfMainGridHeightLines: number, gridLineWidth: number, drawingBorder: {
        height: number;
        width: number;
    }): void;
    /**
     * Draws the subgrid to the canvas.
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
//# sourceMappingURL=Subgrid.d.ts.map