import { ColorRGBA, type IColorRGBA } from './Color.js';
import type { Dimension } from './Drawing.js';
import type { XY } from './Vector.js';
export declare const SlaveMachineStates_Color: Map<number, string>;
export interface ComponentDesign {
    dimension: Dimension;
    color: IColorRGBA;
    labelHeight: number;
    labelColor: string;
    interior: {
        offset: XY;
        dimension: Dimension;
        section: {
            cols: number;
            rows: number;
        };
    };
}
export interface Theming {
    fontFamily: string;
    hover: {
        border: {
            color: ColorRGBA;
            width: number;
        };
    };
    adsState: {
        run: ColorRGBA;
        config: ColorRGBA;
        error: ColorRGBA;
    };
    msgLevel: {
        fallback: ColorRGBA;
        disabled: ColorRGBA;
        info: ColorRGBA;
        success: ColorRGBA;
        warning: ColorRGBA;
        error: ColorRGBA;
    };
    stateMachine: {
        init: {
            bgColor: ColorRGBA;
        };
        preOp: {
            bgColor: ColorRGBA;
        };
        boot: {
            bgColor: ColorRGBA;
        };
        safeOp: {
            bgColor: ColorRGBA;
        };
        operational: {
            bgColor: ColorRGBA;
        };
        invalid: {
            bgColor: ColorRGBA;
        };
    };
    statusFlag: {
        border: {
            color: ColorRGBA;
            width: number;
        };
    };
    master: {
        frame: {
            bgColor: ColorRGBA;
            border: {
                color: ColorRGBA;
                width: number;
            };
        };
        textColor: ColorRGBA;
    };
    trace: {
        label: {
            bgColor: ColorRGBA;
            textColor: ColorRGBA;
        };
    };
    slave: {
        frame: {
            bgColor: ColorRGBA;
            bgColorDisabled: ColorRGBA;
            border: {
                color: ColorRGBA;
                width: number;
            };
        };
        notPresent: {
            frame: {
                bgColor: ColorRGBA;
                border: {
                    color: ColorRGBA;
                    width: number;
                };
            };
            /** opacity of drawing inside component (between 0 and 1) */
            interiorOpacity: number;
        };
        disabled: {
            frame: {
                bgColor: ColorRGBA;
                border: {
                    color: ColorRGBA;
                    width: number;
                };
            };
            interiorOpacity: number;
        };
        attachedLabel: {
            error: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
            warning: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
        };
        syncUnitHighlight: {
            noError: {
                frame: {
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
            };
            warning: {
                frame: {
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
            };
            error: {
                frame: {
                    border: {
                        width: number;
                        color: ColorRGBA;
                    };
                };
            };
        };
        label: {
            noError: {
                textColor: ColorRGBA;
            };
            vprsWarning: {
                textColor: ColorRGBA;
            };
            vprsError: {
                textColor: ColorRGBA;
            };
        };
    };
    slaveTerminalGroup: {
        label: {
            textColor: ColorRGBA;
        };
    };
    slaveCouplerGroup: {
        label: {
            textColor: ColorRGBA;
        };
    };
    cable: {
        notPresent: {
            strokeColor: ColorRGBA;
        };
        noError: {
            strokeColor: ColorRGBA;
        };
        error: {
            strokeColor: ColorRGBA;
        };
    };
    port: {
        label: {
            error: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
            warning: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
            success: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
            noError: {
                bgColor: ColorRGBA;
                textColor: ColorRGBA;
            };
        };
        EBus: {
            error: {
                border: {
                    width: number;
                    color: ColorRGBA;
                };
            };
            warning: {
                border: {
                    width: number;
                    color: ColorRGBA;
                };
            };
        };
        PHY: {
            noError: {
                bgColor: ColorRGBA;
                border: {
                    width: number;
                    color: ColorRGBA;
                };
            };
            warning: {
                bgColor: ColorRGBA;
                border: {
                    width: number;
                    color: ColorRGBA;
                };
            };
            error: {
                bgColor: ColorRGBA;
                border: {
                    width: number;
                    color: ColorRGBA;
                };
            };
        };
    };
    processData: {
        historyChart: {
            grid: {
                lineColor: ColorRGBA;
                lineWidth: number;
                numOfVerticalLines: number;
                numOfHorizontalLines: number;
                yOffsetBelow: number;
                yOffsetAbove: number;
                zeroValue: {
                    lineColor: ColorRGBA;
                    lineWidth: number;
                };
                minValue: {
                    lineColor: ColorRGBA;
                    lineWidth: number;
                };
                maxValue: {
                    lineColor: ColorRGBA;
                    lineWidth: number;
                };
            };
            forcedValue: {
                color: ColorRGBA;
                width: number;
            };
            releasedValue: {
                color: ColorRGBA;
                width: number;
            };
        };
    };
}
export interface VisualConfig {
    topology: {
        marginRows: {
            above: number;
            below: number;
        };
    };
    statusFlag: {
        height: number;
    };
    master: {
        frame: {
            dimension: {
                width: number;
                height: number;
            };
        };
        interior: {
            width: number;
        };
    };
    slave: {
        frame: {
            dimension: {
                width: number;
                height: number;
            };
        };
        label: {
            height: number;
        };
    };
    slaveTerminalGroup: {
        dimension: {
            width: number;
            height: number;
        };
    };
    slaveCouplerGroup: {
        dimension: {
            width: number;
            height: number;
        };
    };
    port: {
        PHY: {
            dimension: {
                width: number;
                height: number;
            };
        };
    };
}
export type Appearance = Theming & VisualConfig;
export declare const visualConfig: VisualConfig;
export declare function processTheming(theming: Theming): void;
export declare function processThemingDeepMerge(mergedObject: any, objectToMerge: any): void;
export declare const store: {
    appearance: Appearance | null;
};
