import '../../../API/_GlobalFunctions.js';
import '../../../API/_StaticDefines.js';
import * as Controls from '../../../API/Controls.js';
import { Control as TcHmiPartial } from '../TcHmiPartial/TcHmiPartial.esm.js';
declare class TcHmiUserControl extends TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
}
export { TcHmiUserControl as Control };
//# sourceMappingURL=TcHmiUserControl.esm.d.ts.map