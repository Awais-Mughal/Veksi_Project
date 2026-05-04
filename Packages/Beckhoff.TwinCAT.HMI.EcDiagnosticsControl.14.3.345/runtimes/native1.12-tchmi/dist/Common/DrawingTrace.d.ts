import type { Slave } from './Slave.js';
import type { Trace } from './Trace.js';
import type { Layers } from './Layer.js';
import { DrawingInteraction } from './DrawingInteraction.js';
export declare class DrawingTrace extends DrawingInteraction {
    constructor(trace: Trace);
    disconnectedCallback(): void;
    private __trace;
    drawSlave(slave: Slave, layers: Layers): void;
    update(): void;
}
