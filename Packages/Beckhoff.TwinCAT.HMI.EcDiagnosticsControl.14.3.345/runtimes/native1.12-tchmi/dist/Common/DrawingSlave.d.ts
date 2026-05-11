import { DrawingInteraction } from './DrawingInteraction.js';
import { Slave } from './Slave.js';
import type { Dimension } from './Drawing.js';
export declare const DrawingSlaveSettings: {
    scale: number;
    padding: {
        x: number;
        y: number;
    };
};
export declare class DrawingSlave extends DrawingInteraction {
    constructor(slave: Slave);
    private __initSetTimeout;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __slave;
    setInitialDimension(dimension: Dimension): void;
    drawSlave(): void;
    update(): void;
    private __drawPortLabels;
}
