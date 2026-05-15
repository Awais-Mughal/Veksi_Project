import { AxisLabeling } from './Types.js';
export declare class IAxis {
    /** The minimum for logarithmic y axis in pixel as number. */
    static readonly LOGARITHMIC_Y_MINIMUM: number;
    /** The minimum for logarithmic x axis in pixel as number. */
    static readonly LOGARITHMIC_X_MINIMUM: number;
    /** The maximum for drawing outside the canvas element in pixel as number. */
    static readonly CANVAS_MAX_OVERFLOW: number;
    /** The showAxis as boolean. */
    protected __showAxis: boolean;
    /** The showLabels as boolean. */
    protected __showLabels: boolean;
    /** The mainTickStartValue as number. */
    protected __mainTickStartValue: number | null;
    /** The mainTickSteps as number. */
    protected __mainTickSteps: number | null;
    /** The mainTickEndValue as number. */
    protected __mainTickEndValue: number | null;
    /** The subTickSteps as number. */
    protected __subTickSteps: number | null;
    /** The showSubTicks as boolean. */
    protected __showSubTicks: boolean;
    /** The mainTickStartValueOverride as number. */
    protected __mainTickStartValueOverride: number | null;
    /** The mainTickEndValueOverride as number. */
    protected __mainTickEndValueOverride: number | null;
    /** The labelFontFamily as string. */
    protected __labelFontFamily: TcHmi.FontFamily | null;
    /** The labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The labelFontSizeUnit as string. */
    protected readonly __labelFontSizeUnit = "px";
    /** The labelFontWeight as string. */
    protected __labelFontWeight: TcHmi.FontWeight | null;
    /** The labelFontColor as string. */
    protected __labelFontColor: string | null;
    /** The axisWidth as number. */
    protected __axisWidth: number | null;
    /** The axisColor as string. */
    protected __axisColor: string | null;
    /** The showAxisName as boolean. */
    protected __showAxisName: boolean;
    /** The axisName as string. */
    protected __axisName: string | null;
    /** The axisNameFontFamily as string. */
    protected __axisNameFontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __axisNameFontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __axisNameFontSizeUnit: string;
    /** The axisNameFontWeight as string. */
    protected __axisNameFontWeight: TcHmi.FontWeight | null;
    /** The axisNameFontColor as string. */
    protected __axisNameFontColor: string | null;
    /** The decimalPlaces as number. */
    protected __decimalPlaces: number | null;
    /** The unit as string. */
    protected __unit: string | null;
    /** The autoScaling as boolean. */
    protected __autoScaling: boolean;
    /** The logarithmicScale of yAxis as boolean. */
    protected __logarithmicScale: boolean;
    /** The axisLabeling as AxisLabeling. */
    protected __axisLabeling: AxisLabeling;
    /** The id as number. */
    protected __id: number;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new IAxis.
     * @param id The id of IAxis (index in parent array).
     * @param canvas The canvas element where drawing the axis.
     */
    constructor(id: number, canvas: HTMLCanvasElement);
    /**
     * Returns an array with all labels as string for the axis.
     * @returns The array with all labels as string.
     */
    getCalculatedLabels(): string[];
    /**
     * Returns an array with all labels as number for the axis.
     * @returns The array with all labels as number.
     */
    getCalculatedNumbers(): number[];
    /**
     * Returns an array with min/max value as number for the axis.
     * @returns The array with min/max value as number.
     */
    ScaleLogarithmic(connectedRange: Array<number>, divisions: number): number[];
    private GetDekade;
    /**
     * Returns the calculated width of a string.
     * @param label The label for calculating.
     * @returns The width of label.
     */
    calculateLabelWidth(label: string | null): number;
    /**
     * Returns the height of the label content.
     * @param content The content of label.
     * @returns The height of the content label.
     */
    calculateLabelHeight(content: string | null): number;
    /**
     * Returns the height of the axis name content.
     * @param content The content of axis name.
     * @returns The height of the axis name content.
     */
    calculateAxisNameHeight(content: string): number;
    /**
     * Returns the width of the axis name content.
     * @param content The content of axis name.
     * @returns The width of the axis name content.
     */
    calculateAxisNameWidth(content: string): number;
    /**
     * Returns the id.
     * @returns The id of the axis.
     */
    getId(): number;
    /**
     * Sets the showLabels.
     * @param showLabels The new showLabels.
     */
    setShowLabels(showLabels: boolean): void;
    /**
     * Sets the showAxis.
     * @param showAxis The new showAxis.
     */
    setShowAxis(showAxis: boolean): void;
    /**
     * Returns the showAxis.
     * @returns The showAxis value.
     */
    getShowAxis(): boolean;
    /**
     * Returns the showLabels.
     * @returns The showLabels.
     */
    getShowLabels(): boolean;
    /**
     * Sets the showSubTicks.
     * @param showSubTicks The new showSubTicks.
     */
    setShowSubTicks(showSubTicks: boolean): void;
    /**
     * Returns the showSubTicks.
     * @returns The showSubTicks.
     */
    getShowSubTicks(): boolean;
    /**
     * Sets the mainTickStartValue.
     * @param mainTickStartValue The new mainTickStartValue.
     */
    setMainTickStartValue(mainTickStartValue: number | null): void;
    /**
     * Returns the mainTickStartValue.
     * @returns The mainTickStartValue.
     */
    getMainTickStartValue(): number | null;
    /**
     * Sets the mainTickSteps.
     * @param mainTickSteps The new mainTickSteps.
     */
    setMainTickSteps(mainTickSteps: number | null): void;
    /**
     * Returns the mainTickSteps.
     * @returns The mainTickSteps.
     */
    getMainTickSteps(): number | null;
    /**
     * Sets the mainTickEndValue.
     * @param mainTickEndValue The new mainTickEndValue.
     */
    setMainTickEndValue(mainTickEndValue: number | null): void;
    /**
     * Returns the mainTickEndValue.
     * @returns The mainTickEndValue.
     */
    getMainTickEndValue(): number | null;
    /**
     * Sets the subTickSteps.
     * @param subTickSteps The new subTickSteps.
     */
    setSubTickSteps(subTickSteps: number | null): void;
    /**
     * Returns the subTickSteps.
     * @returns The subTickSteps.
     */
    getSubTickSteps(): number | null;
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
     * Sets the labelFontSizeUnit.
     * @param labelFontSizeUnit The new labelFontSizeUnit.
     */
    setLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the labelFontSizeUnit.
     * @returns The labelFontSizeUnit.
     */
    getLabelFontSizeUnit(): string;
    /**
        * Sets the labelFontWeight.
        * @param labelFontWeight The new labelFontWeight.
\s        */
    setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
    /**
     * Returns the labelFontWeight.
     * @returns The labelFontWeight.
     */
    getLabelFontWeight(): import("Beckhoff.TwinCAT.HMI.Framework/dist/API/_Types.js").FontWeight | null;
    /**
     * Sets the labelFontColor.
     * @param labelFontColor The new labelFontColor.
     */
    setLabelFontColor(labelFontColor: string | null): void;
    /**
     * Returns the labelFontColor.
     * @returns The labelFontColor.
     */
    getLabelFontColor(): string | null;
    /**
     * Sets the showAxisName.
     * @param showAxisName The new showAxisName.
     */
    setShowAxisName(showAxisName: boolean): void;
    /**
     * Returns the showAxisName.
     * @returns The showAxisName.
     */
    getShowAxisName(): boolean;
    /**
     * Sets the axisWidth.
     * @param axisWidth The new axisWidth.
     */
    setAxisWidth(axisWidth: number | null): void;
    /**
     * Returns the axisWidth.
     * @returns The axisWidth.
     */
    getAxisWidth(): number | null;
    /**
     * Sets the axisColor.
     * @param axisColor The new axisColor.
     */
    setAxisColor(axisColor: string | null): void;
    /**
     * Returns the axisColor.
     * @returns The axisColor.
     */
    getAxisColor(): string | null;
    /**
     * Returns the axisName.
     * @returns The axisName.
     */
    getAxisName(): string | null;
    /**
     * Sets the axisNameFontFamily.
     * @param axisNameFontFamily The new axisNameFontFamily.
     */
    setAxisNameFontFamily(axisNameFontFamily: TcHmi.FontFamily | null | undefined): void;
    /**
     * Returns the axisNameFontFamily.
     * @returns The axisNameFontFamily.
     */
    getAxisNameFontFamily(): string | null;
    /**
     * Sets the axisNameFontSize.
     * @param axisNameFontSize The new axisNameFontSize.
     */
    setAxisNameFontSize(axisNameFontSize: number | null): void;
    /**
     * Returns the axisNameFontSize.
     * @returns The axisNameFontSize.
     */
    getAxisNameFontSize(): number | null;
    /**
     * Sets the axisNameFontSizeUnit.
     * @param axisNameFontSizeUnit The new axisNameFontSizeUnit.
     */
    setAxisNameFontSizeUnit(axisNameFontSizeUnit: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the axisNameFontSizeUnit.
     * @returns The axisNameFontSizeUnit.
     */
    getAxisNameFontSizeUnit(): string;
    /**
     * Sets the axisNameFontWeight.
     * @param axisNameFontWeight The new axisNameFontWeight.
     */
    setAxisNameFontWeight(axisNameFontWeight: TcHmi.FontWeight | null): void;
    /**
     * Returns the axisNameFontWeight.
     * @returns The axisNameFontWeight.
     */
    getAxisNameFontWeight(): import("Beckhoff.TwinCAT.HMI.Framework/dist/API/_Types.js").FontWeight | null;
    /**
     * Sets the axisNameFontColor.
     * @param axisNameFontColor The new axisNameFontColor.
     */
    setAxisNameFontColor(axisNameFontColor: string | null): void;
    /**
     * Returns the axisNameFontColor.
     * @returns The axisNameFontColor.
     */
    getAxisNameFontColor(): string | null;
    /**
     * Sets the decimalPlaces.
     * @param decimalPlaces The new decimalPlaces.
     */
    setDecimalPlaces(decimalPlaces: number | null): void;
    /**
     * Returns the decimalPlaces.
     * @returns The decimalPlaces.
     */
    getDecimalPlaces(): number | null;
    /**
     * Sets the unit.
     * @param unit The new unit.
     */
    setUnit(unit: string | null): void;
    /**
     * Returns the unit.
     * @returns The unit.
     */
    getUnit(): string | null;
    /**
     * Sets the logarithmicScale.
     * @param logarithmicScale The new logarithmicScale.
     */
    setLogarithmicScale(logarithmicScale: boolean): void;
    /**
     * Returns the logarithmicScale.
     * @returns The logarithmicScale value.
     */
    getLogarithmicScale(): boolean;
    /**
     * Sets the axisLabeling.
     * @param axisLabeling The new axisLabeling.
     */
    setAxisLabeling(axisLabeling: AxisLabeling): void;
    /**
     * Returns the axisLabeling.
     * @returns The axisLabeling value.
     */
    getAxisLabeling(): AxisLabeling;
    /**
     * Sets the autoScaling.
     * @param autoScaling The new autoScaling.
     */
    setAutoScaling(autoScaling: boolean): void;
    /**
     * Returns the autoScaling.
     * @returns The autoScaling.
     */
    getAutoScaling(): boolean;
    /**
     * Sets the mainTickStartValueOverride.
     * @param mainTickStartValueOverride The new mainTickStartValueOverride.
     */
    setMainTickStartValueOverride(mainTickStartValueOverride: number | null): void;
    /**
     * Returns the mainTickStartValueOverride.
     * @returns The mainTickStartValueOverride.
     */
    getMainTickStartValueOverride(): number | null;
    /**
     * Sets the mainTickEndValueOverride.
     * @param mainTickEndValueOverride The new mainTickEndValueOverride.
     */
    setMainTickEndValueOverride(mainTickEndValueOverride: number | null): void;
    /**
     * Returns the mainTickEndValueOverride.
     * @returns The mainTickEndValueOverride.
     */
    getMainTickEndValueOverride(): number | null;
}
//# sourceMappingURL=IAxis.d.ts.map