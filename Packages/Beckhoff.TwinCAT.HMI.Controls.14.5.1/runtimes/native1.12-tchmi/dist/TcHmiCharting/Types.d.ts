import type { YAxis } from './YAxis.js';
export interface AreaRange {
    beginX: number;
    endX: number;
}
export interface AreaValueAndPosition {
    xBeginPosition: number;
    xEndPosition: number;
    xBeginValue: number;
    xEndValue: number;
}
export declare enum AxisPosition {
    Left = 0,
    Right = 1
}
export declare enum AxisLabeling {
    Number = 0,
    Scientific = 1,
    Auto = 2
}
export interface Line {
    points: Point[];
    yAxis: YAxis | null;
}
export interface Point {
    x: number;
    y: number;
}
export interface ColorRanges {
    color?: TcHmi.SolidColor;
    fillColor?: TcHmi.SolidColor;
    filterInstance?: TcHmi.FilterInstance;
}
export interface PointValueAndPosition {
    xPosition: number;
    yPosition: number;
    xValue: number;
    yValue: number;
}
export declare enum FillMode {
    None = 0,
    HorizontalZero = 1,
    Bottom = 2,
    Top = 3,
    Center = 4,
    Source = 5,
    ReferenceLine = 6
}
export interface FillModeReferenceLine {
    name: string;
    yAxis: YAxis;
    value: number;
    orientation: Orientation;
}
export declare enum Orientation {
    Horizontal = 0,
    Vertical = 1
}
export declare enum ChartPosition {
    Background = 0,
    Foreground = 1
}
export interface Rect {
    startPoint: Point;
    width: number;
    height: number;
}
export declare enum LineStyle {
    Dotted = 0,
    Dashed = 1,
    Solid = 2
}
export interface PieGraphDescription {
    name: string;
    showName: boolean;
    pieColor?: TcHmi.SolidColor;
    labelColor?: TcHmi.SolidColor;
    unit?: string;
    showPercentLabel: boolean;
    showValueLabel: boolean;
    showUnit?: boolean;
}
export interface LineAreaGraphLine {
    points: LineAreaGraphPoint[];
    yAxis?: YAxis | null;
}
export interface LineAreaGraphPoint {
    x: number;
    y?: number;
    isArea: boolean;
    bindPoints: boolean;
}
export interface AreaType {
    beginX: number;
    endX: number;
    backgroundColor: string | null;
    drawLineWithOnePixel?: boolean;
}
export interface Bar {
    values: number[];
    yAxis: YAxis | null;
}
export declare enum BarGraphArrangement {
    Overlapped = "Overlapped",
    Clustered = "Clustered",
    Stacked = "Stacked"
}
//# sourceMappingURL=Types.d.ts.map