import type { LineStyle } from './Types.js';
export declare class IGrid {
    /** The showHorizontalLines as boolean. */
    protected __showHorizontalLines: boolean;
    /** The showVerticalLines as boolean. */
    protected __showVerticalLines: boolean;
    /** The lineWidth as positive number without zero. */
    protected __lineWidth: number | null;
    /** The lineColor as string. */
    protected __lineColor: string | null;
    /** The line style as enum. */
    protected __lineStyle: keyof typeof LineStyle | null;
    /** The backgroundColor as string. */
    protected __backgroundColor: string | null;
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new IGrid.
     * @param canvas The canvas element to drawing.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Sets the lineWidth.
     * @param lineWidth The new lineWidth.
     */
    setLineWidth(lineWidth: number | null): void;
    /**
     * Returns the lineWidth.
     * @returns The lineWidth value.
     */
    getLineWidth(): number | null;
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
     * Sets the lineColor.
     * @param lineColor The new lineColor.
     */
    setLineColor(lineColor: string | null): void;
    /**
     * Returns the lineColor.
     * @returns The lineColor value.
     */
    getLineColor(): string | null;
    /**
     * Sets the lineStyle.
     * @param lineStyle The new lineStyle.
     */
    setLineStyle(lineStyle: keyof typeof LineStyle | null): void;
    /**
     * Returns the lineStyle.
     * @returns The lineStyle value.
     */
    getLineStyle(): "Dotted" | "Dashed" | "Solid" | null;
    /**
     * Sets the showVerticalLines.
     * @param showVerticalLines The new showVerticalLines.
     */
    setShowVerticalLines(showVerticalLines: boolean): void;
    /**
     * Returns the showVerticalLines.
     * @returns The showVerticalLines value.
     */
    getShowVerticalLines(): boolean;
    /**
     * Sets the showHorizontalLines.
     * @param showHorizontalLines The new showHorizontalLines.
     */
    setShowHorizontalLines(showHorizontalLines: boolean): void;
    /**
     * Returns the showHorizontalLines.
     * @returns The showHorizontalLines value.
     */
    getShowHorizontalLines(): boolean;
}
//# sourceMappingURL=IGrid.d.ts.map