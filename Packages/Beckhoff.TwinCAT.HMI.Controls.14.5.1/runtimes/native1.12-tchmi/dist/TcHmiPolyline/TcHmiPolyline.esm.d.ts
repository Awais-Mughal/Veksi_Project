import { Control as TcHmiPolygon } from '../TcHmiPolygon/TcHmiPolygon.esm.js';
declare class TcHmiPolyline extends TcHmiPolygon {
    #private;
    /**
     * Internal reference to the attribute 'data-tchmi-fill-mode'
     */
    protected __strokeLinecap: 'butt' | 'round' | 'square' | undefined | null;
    /**
     * Sets the strokeLinecap value and calls the associated process function (processStrokeLinecap).
     * @param valueNew The new value for strokeLinecap.
     */
    setStrokeLinecap(valueNew: 'butt' | 'round' | 'square' | null | undefined): void;
    /**
     * Returns the current value of strokeLinecap.
     */
    getStrokeLinecap(): "butt" | "round" | "square" | null | undefined;
    /**
     * Processes the current strokeLinecap attribute value.
     */
    protected __processStrokeLinecap(): void;
}
export { TcHmiPolyline as Control };
declare const _TcHmiPolyline: typeof TcHmiPolyline;
type tTcHmiPolyline = TcHmiPolyline;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiPolyline: typeof _TcHmiPolyline;
        type TcHmiPolyline = tTcHmiPolyline;
    }
}
//# sourceMappingURL=TcHmiPolyline.esm.d.ts.map