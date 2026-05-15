import { IChart } from './IChart.js';
import { type PieGraphDescription } from './Types.js';
export declare class PieChart extends IChart {
    /** The description of pie as PieChart.PieGraphDescription[]. */
    protected __pieDescription: PieGraphDescription[];
    /** The data of pie as number[]. */
    protected __pieData: number[];
    /** The labelPosition as string. */
    protected __labelPosition: 'Inside' | 'Outside';
    /** The labelUnit as string. */
    protected __labelUnit: string | null;
    /** The percentLabelDecimalPlaces as number. */
    protected __percentLabelDecimalPlaces: number | null;
    /** The valueLabelDecimalPlaces as number. */
    protected __valueLabelDecimalPlaces: number | null;
    /** The labelFontFamily as string. */
    protected __labelFontFamily: TcHmi.FontFamily | null;
    /** The labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The labelFontSizeUnit as string. */
    protected readonly __labelFontSizeUnit = "px";
    /** The labelFontWeight as string. */
    protected __labelFontWeight: TcHmi.FontWeight | null;
    /**
     * Creates a new BarChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
    /**
     * Add a piece of pie.
     */
    addPieceOfPie(pieceOfPie: PieGraphDescription): void;
    /**
     * Add a piece of pie.
     */
    addValueOfPie(valueOfPie: number): void;
    /**
     * Removes all canvas elements and clears all arrays.
     */
    remove(): void;
    /**
     * Clears all canvas elements and calls all delete functions.
     */
    clear(width: number, height: number): void;
    /**
     * Returns the calculated width of a string.
     * @param label The label for calculating.
     * @returns The width of label.
     */
    calculateLabelWidth(label: string | null): number;
    /**
     * Returns the calculated width of the longest label of all axis labels.
     * @returns The width of the longest label.
     */
    getLongestLabelWidth(labels: string[]): number;
    /**
     * Sets the labelUnit.
     * @param labelUnit The new labelUnit.
     */
    setLabelUnit(labelUnit: string): void;
    /**
     * Returns the labelUnit.
     * @returns The labelUnit.
     */
    getLabelUnit(): string | null;
    /**
     * Sets the labelPosition.
     * @param labelPosition The new labelPosition.
     */
    setLabelPosition(labelPosition: 'Inside' | 'Outside'): void;
    /**
     * Returns the labelPosition.
     * @returns The labelPosition.
     */
    getLabelPosition(): "Inside" | "Outside";
    /**
     * Sets the percentLabelDecimalPlaces.
     * @param percentLabelDecimalPlaces The new percentLabelDecimalPlaces.
     */
    setPercentLabelDecimalPlaces(percentLabelDecimalPlaces: number): void;
    /**
     * Returns the percentLabelDecimalPlaces.
     * @returns The percentLabelDecimalPlaces.
     */
    getPercentLabelDecimalPlaces(): number | null;
    /**
     * Sets the valueLabelDecimalPlaces.
     * @param valueLabelDecimalPlaces The new valueLabelDecimalPlaces.
     */
    setValueLabelDecimalPlaces(valueLabelDecimalPlaces: number): void;
    /**
     * Returns the valueLabelDecimalPlaces.
     * @returns The valueLabelDecimalPlaces.
     */
    getValueLabelDecimalPlaces(): number | null;
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
     * Returns the labelFontSizeUnit.
     * @returns The labelFontSizeUnit.
     */
    getLabelFontSizeUnit(): string;
    /**
     * Sets the labelFontWeight.
     * @param labelFontWeight The new labelFontWeight.
     */
    setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
    /**
     * Returns the labelFontWeight.
     * @returns The labelFontWeight.
     */
    getLabelFontWeight(): import("Beckhoff.TwinCAT.HMI.Framework/dist/API/_Types.js").FontWeight | null;
    /**
     * Draws the barChart if anything is changed.
     */
    draw(): void;
    /**
     * An angle is determined where the label can be placed.
     * @returns The new middlePoint of text rectangle.
     */
    private calcPositionOfElem;
    /**
     * If the point is inside the rectangle, true is returned, otherwise false.
     */
    private pointInsideRect;
}
//# sourceMappingURL=PieChart.d.ts.map