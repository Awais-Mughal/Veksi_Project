import { Master } from './Master.js';
import { Slave } from './Slave.js';
import type { PopUp } from './WebComponents/PopUp/PopUp.js';
import './WebComponents/StatusButton/StatusButton.js';
import type { PopUpParameter } from './main.js';
export declare abstract class ExtendedInfo {
    constructor(master: Master, component: 'Master' | 'Slave');
    protected __component: 'Master' | 'Slave';
    protected __popUp: PopUp | null;
    protected __tabName: string | null;
    protected __master: Master;
    protected __open(popUp: PopUp): void;
    destroy(): void;
    close(): void;
    protected __popup_param: PopUpParameter | null;
    abstract updateDrawings(): boolean;
    getScrollTop(): number | undefined;
    setScrollTop(scrollTop: number): void;
}
export declare class ExtendedInfoOfMaster extends ExtendedInfo {
    constructor(master: Master);
    destroy(): void;
    protected __masterContentTabs: TcHmi.Controls.Helpers.ContentTabs | null;
    protected __open(): void;
    updateDrawings(): boolean;
    createSlaveList(): void;
    private __slaveListRecursive;
}
export declare class ExtendedInfoOfSlave extends ExtendedInfo {
    private __slave;
    private __slaveDrawing;
    private __traceDrawing;
    constructor(slave: Slave);
    destroy(): void;
    protected __slaveContentTabs: TcHmi.Controls.Helpers.ContentTabs | null;
    protected __open(): void;
    updateDrawings(): boolean;
}
export type PossibleCtxNames = 'ExtendedInfoOfMaster' | 'ExtendedInfoOfSlave';
