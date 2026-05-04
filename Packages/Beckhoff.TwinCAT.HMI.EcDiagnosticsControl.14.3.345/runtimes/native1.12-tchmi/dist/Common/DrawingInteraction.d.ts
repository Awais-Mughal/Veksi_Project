import * as Vector from './Vector.js';
import { Drawing, type Dimension } from './Drawing.js';
import type { Master } from './Master.js';
import type { TopologyView } from './Topology.js';
import type { EcDiagnostics } from './main.js';
export declare enum WheelDeltaMode {
    DOM_DELTA_PIXEL = 0,
    DOM_DELTA_LINE = 1,
    DOM_DELTA_PAGE = 2
}
export declare abstract class DrawingInteraction extends Drawing {
    protected constructor(main: EcDiagnostics, master: Master | undefined, view: TopologyView, dimension?: Dimension, redrawFn?: () => void, manualInit?: boolean);
    protected __addEvents(): void;
    protected __removeEvents(): void;
    protected __init(): void;
    protected __deinit(): void;
    protected __redrawFn?: () => void;
    protected __pointerIsOver: boolean;
    protected __userInteracted: boolean;
    protected __zoomAndPan: boolean;
    destroy(): void;
    protected __activePointers: Map<number, PointerEvent>;
    reload(): void;
    update(): void;
    resetView(initTopologyViewPosX: number, initTopologyViewPosY: number, initTopologyViewZoom: number | null): void;
    resizeEvent(callback: () => any): void;
    protected __handlePointerOver: (e: PointerEvent) => void;
    protected __handlePointerOut: (e: PointerEvent) => void;
    protected __handlePointerDown: (e: PointerEvent) => void;
    updateHover(e?: PointerEvent): void;
    protected __handlePointerMove: (e: PointerEvent) => void;
    protected __handlePointerUp: (e: PointerEvent) => void;
    protected __handlePointerUpMove: (e: PointerEvent) => void;
    protected __handleHover(e: PointerEvent | null): any;
    private __handlePan;
    protected __handleWheel: (wheelEvent: WheelEvent) => void;
    shiftCanvasRelByZoomLevel(modification: Vector.XY): void;
    shiftCanvasRel(modification: Vector.XY): void;
    protected __shiftCanvas(newShift: Vector.XY): void;
    addZoomAndPan(): void;
    removeZoomAndPan(): void;
    preDrawingEvent(): void;
    protected __calcZoomPositionCorrection(zoomPos: Vector.XY, relativeZoomLevel: number): {
        x: number;
        y: number;
    };
    protected __applyZoom(position: Vector.XY, modification: number): void;
    calcZoomLevelLimits(): void;
}
export interface CanvasEventTarget<T> {
    x: number;
    y: number;
    w: number;
    h: number;
    target?: T;
    hoverText?: string;
    primaryPointerFn?: () => void;
    secondaryPointerFn?: () => void;
}
