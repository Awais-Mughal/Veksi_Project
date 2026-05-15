import { Orientation, type Point } from './Types.js';
export declare class ReferenceLine {
    /** The __name as string. */
    protected __name: string | null;
    /** The __show as boolean. */
    protected __show: boolean;
    /** The __yAxisId as string. */
    protected __yAxisId: number | null;
    /** The __value as number. */
    protected __value: number | null;
    /** The __valueUnit as string ['Value', '%']. */
    protected __valueUnit: 'Value' | '%';
    /** The __orientation as ReferenceLine.Orientation. */
    protected __orientation: Orientation;
    /** The __locked as boolean. */
    protected __locked: boolean;
    /** The __showTooltip as boolean. */
    protected __showTooltip: boolean;
    /** The __highlightDataPoints as boolean. */
    protected __highlightDataPoints: boolean;
    /** The __color as string. */
    protected __color: string | null;
    /** The __lineWidth as number. */
    protected __lineWidth: number | null;
    /** The __showLabels as boolean. */
    protected __showLabel: boolean;
    /** The __labelHorizontalAlignment as string. */
    protected __labelHorizontalAlignment: string | null;
    /** The __labeVerticalAlignment as string. */
    protected __labelVerticalAlignment: string | null;
    /** The __labelFontFamily as string. */
    protected __labelFontFamily: string | null;
    /** The __labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The __labelFontSizeUnit as string. */
    protected __labelFontSizeUnit: string;
    /** The __labelFontWeight as string. */
    protected __labelFontWeight: string | null;
    private __startPoint;
    private __endPoint;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new ReferenceLine.
     * @param canvas The canvas element where drawing the axis.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the lines to the canvas.
     */
    drawLine(startPoint: Point, endPoint: Point): void;
    /**
     * Returns the calculated width of a string.
     * @param label The label for calculating.
     * @returns The width of label.
     */
    calculateLabelWidth(label: string | null): number;
    /**
     * Returns the startPoint.
     * @returns The startPoint.
     */
    getStartPoint(): Point | null;
    /**
     * Returns the endPoint.
     * @returns The endPoint.
     */
    getEndPoint(): Point | null;
    /**
     * Sets the name.
     * @param name The new name.
     */
    setName(name: string | null): void;
    /**
     * Returns the name.
     * @returns The name.
     */
    getName(): string | null;
    /**
     * Sets the show.
     * @param show The new show.
     */
    setShow(show: boolean): void;
    /**
     * Returns the show.
     * @returns The show.
     */
    getShow(): boolean;
    /**
     * Sets the yAxisId.
     * @param yAxisId The new yAxisId.
     */
    setYAxisId(yAxisId: number | null): void;
    /**
     * Returns the yAxisId.
     * @returns The yAxisId.
     */
    getYAxisId(): number | null;
    /**
     * Sets the value.
     * @param value The new value.
     */
    setValue(value: number | null): void;
    /**
     * Returns the value.
     * @returns The value.
     */
    getValue(): number | null;
    /**
     * Sets the valueUnit.
     * @param value The new valueUnit.
     */
    setValueUnit(valueUnit: '%' | 'Value'): void;
    /**
     * Returns the valueUnit.
     * @returns The valueUni.
     */
    getValueUnit(): "%" | "Value";
    /**
     * Sets the orientation.
     * @param orientation The new orientation.
     */
    setOrientation(orientation: Orientation): void;
    /**
     * Returns the orientation.
     * @returns The orientation.
     */
    getOrientation(): Orientation;
    /**
     * Sets the locked.
     * @param locked The new locked.
     */
    setLocked(locked: boolean): void;
    /**
     * Returns the locked.
     * @returns The locked.
     */
    getLocked(): boolean;
    /**
     * Sets the showTooltip.
     * @param showTooltip The new showTooltip.
     */
    setShowTooltip(showTooltip: boolean): void;
    /**
     * Returns the showTooltip.
     * @returns The showTooltip.
     */
    getShowTooltip(): boolean;
    /**
     * Sets the highlightDataPoints.
     * @param highlightDataPoints The new highlightDataPoints.
     */
    setHighlightDataPoints(highlightDataPoints: boolean): void;
    /**
     * Returns the highlightDataPoints.
     * @returns The highlightDataPoints.
     */
    getHighlightDataPoints(): boolean;
    /**
     * Sets the color.
     * @param color The new color.
     */
    setColor(color: string | null): void;
    /**
     * Returns the color.
     * @returns The color.
     */
    getColor(): string | null;
    /**
     * Sets the lineWidth.
     * @param lineWidth The new lineWidth.
     */
    setLineWidth(lineWidth: number | null): void;
    /**
     * Returns the lineWidth.
     * @returns The lineWidth.
     */
    getLineWidth(): number | null;
    /**
     * Sets the showLabel.
     * @param showLabel The new showLabel.
     */
    setShowLabel(showLabel: boolean): void;
    /**
     * Returns the showLabel.
     * @returns The showLabel.
     */
    getShowLabel(): boolean;
    /**
     * Sets the labelHorizontalAlignment.
     * @param labelHorizontalAlignment The new labelHorizontalAlignment.
     */
    setLabelHorizontalAlignment(labelHorizontalAlignment: string | null): void;
    /**
     * Returns the labelHorizontalAlignment.
     * @returns The labelHorizontalAlignment.
     */
    getLabelHorizontalAlignment(): string | null;
    /**
     * Sets the labelVerticalAlignment.
     * @param labelVerticalAlignment The new labelVerticalAlignment.
     */
    setLabelVerticalAlignment(labelVerticalAlignment: string | null): void;
    /**
     * Returns the labelVerticalAlignment.
     * @returns The labelVerticalAlignment.
     */
    getLabelVerticalAlignment(): string | null;
    /**
     * Sets the labelFontFamily.
     * @param labelFontFamily The new labelFontFamily.
     */
    setLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
    /**
     * Returns the labelFontFamily.
     * @returns The labelFontFamily.
     */
    getLabelFontFamily(): string | null;
    /**
     * Sets the labelFontSize.
     * @param labelFontSize The new labelFontSize.
     */
    setLabelFontSize(labelFontSize: number | null): void;
    /**
     * Returns the labelFontSize.
     * @returns The labelFontSize.
     */
    getLabelFontSize(): number | null;
    /**
     * Sets the labelFontWeight.
     * @param labelFontWeight The new labelFontWeight.
     */
    setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
    /**
     * Returns the labelFontWeight.
     * @returns The labelFontWeight.
     */
    getLabelFontWeight(): string | null;
}
//# sourceMappingURL=ReferenceLine.d.ts.map