import type { DrawingLayer } from './Drawing.js';
export declare function createCanvasLayers(parentEl: HTMLElement, numberOfLayers: number): DrawingLayer[];
export declare function drawGrid(ctx: CanvasRenderingContext2D, numberOfRows: number, numberOfCols: number, gridSpacing: number): void;
export declare function drawComponent(ctx: CanvasRenderingContext2D, colIndex: number, rowIndex: number, width: number, height: number, size: number): void;
