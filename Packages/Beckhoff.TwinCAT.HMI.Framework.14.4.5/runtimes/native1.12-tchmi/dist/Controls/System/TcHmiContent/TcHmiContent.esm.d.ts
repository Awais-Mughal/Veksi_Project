import * as Controls from '../../../API/Controls.js';
import { Control as TcHmiPartial } from '../TcHmiPartial/TcHmiPartial.esm.js';
declare class TcHmiContent extends TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
}
export { TcHmiContent as Control };
//# sourceMappingURL=TcHmiContent.esm.d.ts.map