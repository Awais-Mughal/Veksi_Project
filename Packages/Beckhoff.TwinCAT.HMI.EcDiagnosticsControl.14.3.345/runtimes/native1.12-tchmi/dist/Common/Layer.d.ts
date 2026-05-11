import type { XY } from './Vector.js';
export declare class Layers extends HTMLElement {
    constructor();
    init(): void;
    connectedCallback(): void;
    private __translation;
    get translation(): XY;
    reset(): void;
    private __zoomLevel;
    private __shift;
    private __layers;
    private __addLayer;
    getCanvas(name: LayerName): HTMLCanvasElement;
    getContext(name: LayerName): CanvasRenderingContext2D;
    resizeEvent(): void;
    translateAll(x: number, y: number): void;
    setFocusedZoomAndShift(zoomLevel: number, shift: XY): void;
    setFocusedShift(shift: XY): void;
    setFocusedZoom(zoomLevel: number): void;
    setBackgroundZoom(zoomLevel: number): void;
    showAllLayer(): void;
    hideAllLayers(): void;
    setTransparency(transparency?: number): void;
    saveContext(): void;
    restoreContext(): void;
    erase(name?: LayerName): void;
    private __eraseContext;
    destroy(): void;
}
export interface RequiredLayer {
    name: string;
}
export declare enum LayerName {
    frame = 0,
    processData = 1,
    text = 2,
    syncUnit = 3,
    error = 4,
    hover = 5
}
