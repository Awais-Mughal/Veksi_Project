import type { ColorRanges } from './Types.js';
export declare class IGraph {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new IGraph.
     * @param canvas The optional canvas element where drawing the grid.
     */
    constructor(canvas?: HTMLCanvasElement);
    getColorFromColorRanges(colorRanges: ColorRanges[] | null | undefined, value: number, defaultColor: string): string;
    getFillColorFromColorRanges(colorRanges: ColorRanges[] | null | undefined, value: number, defaultFillColor: string): string;
}
//# sourceMappingURL=IGraph.d.ts.map