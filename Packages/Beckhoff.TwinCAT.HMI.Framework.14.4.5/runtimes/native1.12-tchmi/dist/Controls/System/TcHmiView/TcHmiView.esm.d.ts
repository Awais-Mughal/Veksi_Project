import * as Controls from '../../../API/Controls.js';
import { Control as TcHmiPartial } from '../TcHmiPartial/TcHmiPartial.esm.js';
declare class TcHmiView extends TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Shows/hides the control depending of the current 'observe' right
     */
    __processAccessConfig(): void;
}
export { TcHmiView as Control };
//# sourceMappingURL=TcHmiView.esm.d.ts.map