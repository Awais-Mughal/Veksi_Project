import type { EcDiagnostics } from './main.js';
import { Master } from './Master.js';
import { Slave, type SlaveLabel } from './Slave.js';
import { StateMachineStateType } from './Component.js';
import type { SlaveGroup } from './SlaveGroup.js';
import { Layers } from './Layer.js';
import type { CanvasTooltip } from './WebComponents/CanvasTooltip/CanvasTooltip.js';
import './WebComponents/CanvasTooltip/CanvasTooltip.js';
import type { XY } from './Vector.js';
import type { CanvasEventTarget } from './DrawingInteraction.js';
import { TopologyView } from './Topology.js';
import { type ComponentDesign } from './Appearance.js';
import { type IColorRGBA } from './Color.js';
export declare function getGlobalOffset(el: HTMLElement): {
    left: number;
    top: number;
};
export declare function getGlobalScroll(el: HTMLElement | null): XY;
export declare abstract class Drawing extends HTMLElement {
    protected constructor(main: EcDiagnostics, master: Master | undefined, view: TopologyView, dimension?: Dimension);
    protected __tooltip: CanvasTooltip;
    protected __translation: XY[];
    protected __main: EcDiagnostics;
    protected __master?: Master;
    protected __focusedLayers: Layers;
    get focusedLayers(): Layers;
    protected __view: TopologyView;
    protected __layerWrapper: HTMLElement;
    protected __pointerPos: {
        down: XY | null;
        move: XY | null;
        hover: XY | null;
    };
    protected __lastTouchDistance: number;
    protected __eventTargets: CanvasEventTarget<Master | Slave | SlaveGroup>[];
    protected __canvasMargin: XY;
    protected __dimension: {
        initial: Dimension;
        zoomed: Dimension;
    };
    setInitialDimension(value: Dimension): void;
    getCssScaling(): {
        x: number;
        y: number;
    };
    private __calcZoomedDimension;
    initDrawing(): void;
    update(): void;
    protected __applyZoomedDimension(): void;
    protected __shift: XY;
    protected __zoomLevel: number;
    protected __zoomLevelLimits: Limits;
    protected __drawingInfo: HTMLDivElement;
    protected __absoluteMinZoomLevel: number;
    addZoomLevel(zoomModification?: number, checkLimits?: boolean): number;
    setZoomLevel(zoomLevel: number | null, checkLimits?: boolean): void;
    protected __showUpdatedViewInfo(): void;
    destroy(): void;
    protected __findTargetByPosition(pos: XY): CanvasEventTarget<Master | Slave | SlaveGroup> | null;
    protected __obeyClick: boolean;
    protected __handleClick: (e: PointerEvent) => void;
    protected __handleContextMenu: (e: PointerEvent) => void;
    drawMaster(master: Master, layers: Layers): void;
    drawSlave(slave: Slave, layers: Layers, drawingDimension?: Dimension | undefined): void;
    drawFrame(dimension: Dimension, layers: Layers, componentIsActive: boolean, color?: IColorRGBA): void;
    drawLabel(labelPos: XY, design: ComponentDesign, manufacturer: string, type: string, warningLevel: number | undefined, layers: Layers, componentIsActive: boolean): void;
    drawErrorLabels(slave: Slave, layers: Layers): void;
    drawErrorLabel(label: SlaveLabel, labelPos: XY, labelWidth: number, layers: Layers): void;
    drawPort(pos: XY, hotConnect: boolean | undefined, state: number | undefined, layers: Layers): void;
    protected __drawCurrentState(component: Master | Slave | SlaveGroup | null, layers: Layers, state?: StateMachineStateType): void;
    __drawForcedState(component: Master | Slave | SlaveGroup, layers: Layers, couplerGroup?: boolean): void;
    drawStatusFlag(component: Master | Slave, layers: Layers): void;
    clearCanvas(): void;
    protected __originPosition: XY;
    protected __translatePositionStack: XY[];
    protected __translateOrigin(layers: Layers, pos: XY): void;
    protected __revertOriginTranslation(layers: Layers): void;
    protected __addEventTarget(value: {
        relativePos?: XY;
        dimension: Dimension;
        target?: Master | Slave | SlaveGroup;
        hoverText?: string;
        primaryPointerFn?: () => void;
        secondaryPointerFn?: () => void;
    }): void;
    protected __multilineText(ctx: CanvasRenderingContext2D, pos: XY, text: string, desiredFontSize: number, maxDimension: Dimension): void;
}
export interface Offset {
    left: number;
    top: number;
}
export interface DrawingLayer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
}
export interface InnerAlignment {
    row: number;
    col: number;
    rowspan: number;
    colspan: number;
}
export interface Dimension {
    width: number;
    height: number;
}
export interface Limits {
    min: number;
    max: number;
}
export interface MatrixCoordinates {
    row: MatrixRow;
    col: number;
}
export interface MatrixRow {
    index: number;
    yOffset: number;
    width: number;
    height: number;
}
