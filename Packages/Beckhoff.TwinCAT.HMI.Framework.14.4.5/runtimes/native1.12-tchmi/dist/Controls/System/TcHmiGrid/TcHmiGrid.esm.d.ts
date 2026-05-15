import '../../../API/_GlobalFunctions.js';
import '../../../API/_StaticDefines.js';
import { Control as TcHmiControl } from '../TcHmiControl/TcHmiControl.esm.js';
import type { IControlSpecificData as ITcHmiControlSpecificData } from '../TcHmiControl/TcHmiControl.esm.js';
import { Control as TcHmiContainerControl } from '../TcHmiContainerControl/TcHmiContainerControl.esm.js';
import * as Controls from '../../../API/Controls.js';
import { EventProvider } from '../../../API/EventProvider.js';
import type { BorderStyle, BorderWidth, Color, DimensionUnit, FourSidedCss, HorizontalAlignment, SolidColor, VerticalAlignment } from '../../../API/_Types.js';
import type { baseTcHmiControl } from '../baseTcHmiControl.js';
import { ObjectResolver } from '../../../API/ObjectResolver.js';
declare class TcHmiGrid extends TcHmiContainerControl {
    #private;
    /**
     * Constructor
     * @param element
     * @param attrs
     * @param pcElement
     * @param pcAttrs
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Reference to the root dom element of the current control template as  jquery object.
     */
    private __elementTemplateRoot;
    /** Main Gridcontainer of this tchmigrid */
    private __elementGridcontainer;
    /**
     * Internal reference to the attribute 'data-tchmi-cell-wrap'
     */
    protected __cellWrap: boolean | undefined;
    /**
     * Internal reference to the attribute 'data-tchmi-cell-options'
     */
    protected __cellOptions: ICellOptions[] | undefined;
    /**
     * Internal reference to the attribute 'data-tchmi-row-options'
     */
    protected __rowOptions: IRowOptions[] | undefined;
    /**
     * Internal reference to the attribute 'data-tchmi-column-options'
     */
    protected __columnOptions: IColumnOptions[] | undefined;
    /** Holds the pixel size the column uses, null if all relative. Cache has to be rebuild if variable is null */
    protected __cacheWidthPerColumn: (null | number)[] | null;
    /** Holds the pixel size the row uses, null if all relative. Cache has to be rebuild if variable is null */
    protected __cacheHeightPerRow: (null | number)[] | null;
    /** Is the current layout known? This does not imply a precise layout for responsive configurations */
    protected __roughLayoutKnown: boolean;
    /** In how many lines this row is wrapped? Cache has to be rebuild if variable is null */
    private __cacheCellHeightPerRow;
    private __onControlGridRowIndexChangedDestroyEvent;
    private __onControlGridColumnIndexChangedDestroyEvent;
    private __onControlsMovedDestroyEvent;
    private __onControlsResizedDestroyEvent;
    private __onThemeChangedDestroyEvent;
    private __onControlPositionParameterChangedDestroyEvent;
    private __onControlSizeParameterChangedDestroyEvent;
    protected __asyncWorkData: IControlSpecificData;
    /** True if a large control stretches a column dimension */
    protected __controlStretchedWidth: boolean;
    /** True if a large control stretches a row dimension */
    protected __controlStretchedHeight: boolean;
    /** True if we need to check wrapping on next attach */
    protected __wrapCheckNeeded: boolean;
    /** The grid border width shifts the child but is not often changed. */
    protected __borderOffsets: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Adds a child to this control and handles the hierarchical management layer.
     * This will also add child's DOM element to the container DOM.
     * @param control Class instance of the child.
     * @param pos Optional index of the position for the new child.
     */
    addChild(control: baseTcHmiControl | undefined | null, pos?: number | null): void;
    /**
     * Adds a child to this control and handles the hierarchical management layer.
     * This will also add child's DOM element to the container DOM.
     * @param control Class instance of the child.
     * @param pos Optional index of the position for the new child.
     */
    __addChild(control: baseTcHmiControl, pos?: number | null): void;
    /**
     * Remove a child control.
     */
    removeChild(control: baseTcHmiControl | undefined | null): void;
    __removeChild(control: baseTcHmiControl): void;
    /** Updates border width cache */
    protected __updateBorderCache(): void;
    protected __processBorderWidth(): void;
    /**
     * Moves a control to the correct Grid cell
     */
    protected __onGridRowOrColumnIndexChanged(_event: EventProvider.Event, control: baseTcHmiControl): void;
    /**
     * Adjust Cell Dimension on Control resize or move
     * @param move Is this a moved control? If not it was resized
     */
    protected __onControlGeometryChanged(event: EventProvider.Event, controls: baseTcHmiControl[]): void;
    protected __doAsyncWork(timestamp?: number): void;
    /**
     * Calls processHeight if needed
     * @returns true if a change was detected
     */
    private __rebuildCellHeightPerRowCache;
    /**
     * Returns the current cell wrap value.
     * @returns The current cell wrap value.
     */
    getCellWrap(): boolean | undefined;
    /**
     * Sets a new cell wrap
     * @param valueNew
     */
    setCellWrap(valueNew: boolean | null): void;
    /**
     *
     */
    protected __processCellWrap(): void;
    /**
     * Returns if inner widths depends on child controls.
     * @preserve (Part of the public API)
     */
    innerWidthDependsOnChilds(): boolean;
    /**
     * Updates the inner dimension depending on child controls.
     * @preserve (Part of the public API)
     */
    updateInnerWidthDependingOnChilds(): void;
    /**
     * Updates caches...
     */
    protected __processWidthMode(): void;
    /**
     * Returns if inner heights depends on child controls.
     * @preserve (Part of the public API)
     */
    innerHeightDependsOnChilds(): boolean;
    /**
     * Updates the inner dimension depending on child controls.
     * @preserve (Part of the public API)
     */
    updateInnerHeightDependingOnChilds(): void;
    /**
     * Updates caches...
     */
    protected __processHeightMode(): void;
    /**
     * Adds new Rows if needed.
     * If Rows are removed the affected controls are moved in the correct cell if needed.
     */
    __recalculateRowCount(): void;
    /**
     * Checks each Row in the Grid and adds/removes cells if needed.
     * After that all controls are moved in the correct cell if needed.
     */
    __recalculateColumnCount(): void;
    /**
     * Returns the current row options value.
     * @returns The current row options value.
     */
    getRowOptions(): IRowOptions[] | undefined;
    /**
     * Sets new Row options
     * @param valueNew
     */
    setRowOptions(valueNew: IRowOptions[] | null): void;
    /**
     * The watch callback for the rowOptions object resolver.
     */
    protected __onResolverForRowOptionsWatchCallback(data: ObjectResolver.IWatchResultObject<IRowOptions[]>): void;
    /**
     * Processes row options
     * height is set directly
     * min/max value are set after comparing to the content dimension
     */
    protected __processRowOptions(): void;
    /**
     * Returns the current column options value.
     * @returns The current column options value.
     */
    getColumnOptions(): IColumnOptions[] | undefined;
    /**
     * Sets new column options
     * @param valueNew
     */
    setColumnOptions(valueNew: IColumnOptions[] | null): void;
    /**
     * The watch callback for the columnOptions object resolver.
     */
    protected __onResolverForColumnOptionsWatchCallback(data: ObjectResolver.IWatchResultObject<IColumnOptions[]>): void;
    /**
     * Processes column options
     * width is set directly
     * min/max value are set after comparing to the content dimension
     */
    protected __processColumnOptions(): void;
    /**
     * PaddingTop
     */
    getCellOptions(): ICellOptions[] | undefined;
    setCellOptions(valueNew: ICellOptions[] | null): void;
    /**
     * The watch callback for the cellOptions object resolver.
     */
    protected __onResolverForCellOptionsWatchCallback(data: ObjectResolver.IWatchResultObject<ICellOptions[]>): void;
    protected __processCellOptions(): void;
    /**
     * Moves all Controls to the correct Grid Container.
     */
    private __correctAllGridPositions;
    /**
     * Moves the Control to the correct Grid Container
     * @param control
     * @param pos
     */
    private __correctGridPosition;
    /**
     * Append a number of Rows
     * If the number is undefined or null one row is created
     * @param num Number of Rows to create. If undefined or null one row is created
     * @returns Array with all new Rows (last Element in Array is last one in DOM) or a empty Array
     */
    private __appendRows;
    /**
     * Remove Rows from DOM and returns it as a JQuery Obj
     * If the index is undefined the last row is deleted
     * If the index is not valid a empty JQuery is returned.
     * @param num Number of Rows to delete. If undefined or null one row is created
     * @returns JQuery Object of the deleted Row or a empty JQuery Object
     */
    private __removeRows;
    /**
     * Creates columns till the Grid is fulfilled
     * @param targetRow
     * @returns Object of the new Cell
     */
    private __createColumns;
    /**
     * Creates a new Cell and appends it to the last DOM element in given JQuery Object
     * @param targetRow
     * @returns Element of the new Cell
     */
    private __createCell;
    /**
     * Processes column / row options
     * width/height is set directly
     * min/max value are set after comparing to the content dimension
     * @param direction
     */
    private __processSequenceOptions;
    /**
     * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
     */
    __getContentWidth(): number | null;
    /**
     * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
     */
    __getContentHeight(): number | null;
    /**
     * Processes the current height and height unit.
     */
    __processHeight(callerControl?: TcHmiControl): void;
    private __processHeightAsync;
    /**
     * Processes the current width and width unit.
     */
    __processWidth(callerControl?: TcHmiControl): void;
    private __processWidthAsync;
}
export interface IControlSpecificData extends ITcHmiControlSpecificData {
    'System.TcHmiGrid.triggerRebuildAll': boolean;
    'System.TcHmiGrid.triggerRecheckHeight': boolean;
    'System.TcHmiGrid.triggerProcessWidth': boolean;
    'System.TcHmiGrid.triggerProcessHeight': boolean;
}
export interface IColumnOptions {
    width?: number | null;
    widthUnit?: DimensionUnit | 'factor' | null;
    widthMode?: 'Value' | 'Content' | null;
    minWidth?: number | null;
    minWidthUnit?: DimensionUnit | null;
    maxWidth?: number | null;
    maxWidthUnit?: DimensionUnit | null;
    overflow?: boolean | null;
}
export interface IRowOptions {
    height?: number | null;
    heightUnit?: DimensionUnit | 'factor' | null;
    heightMode?: 'Value' | 'Content' | null;
    minHeight?: number | null;
    minHeightUnit?: DimensionUnit | null;
    maxHeight?: number | null;
    maxHeightUnit?: DimensionUnit | null;
    overflow?: boolean | null;
}
export interface ICellOptions {
    rowIndex: number | null;
    columnIndex: number | null;
    borderWidth?: BorderWidth | null;
    borderStyle?: BorderStyle | null;
    borderColor?: SolidColor | null;
    padding?: FourSidedCss | null;
    backgroundColor?: Color | null;
    backgroundImage?: string | null;
    backgroundImagePadding?: FourSidedCss | null;
    backgroundImageWidth?: number | null;
    backgroundImageWidthUnit?: DimensionUnit | null;
    backgroundImageHeight?: number | null;
    backgroundImageHeightUnit?: DimensionUnit | null;
    backgroundImageHorizontalAlignment?: HorizontalAlignment | null;
    backgroundImageVerticalAlignment?: VerticalAlignment | null;
}
export { TcHmiGrid as Control };
//# sourceMappingURL=TcHmiGrid.esm.d.ts.map