import type { EcDiagnostics } from '../../main.js';
export declare class StatusButton extends HTMLElement {
    /** timeout in ms */
    private __resetDelayDuration;
    private __resetDelay;
    private __stateIcon;
    private __ecdiagnostics;
    private __experimentalMode;
    constructor();
    init(ecdiagnostics: EcDiagnostics, text?: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setStateToIdle(): void;
    setStateToLoading(): void;
    setStateToSuccess(): void;
    setStateToError(): void;
    private __clearTimout;
    private __resetButtonAfterTimeout;
}
