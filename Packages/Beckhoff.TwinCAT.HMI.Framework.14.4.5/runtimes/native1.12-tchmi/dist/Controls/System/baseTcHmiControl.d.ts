import type { AccessControl, BorderRadius, BorderStyle, BorderWidth, BoxShadow, Color, ControlAttributeDescription, DimensionUnit, FourSidedCss, HorizontalAlignment, LinearGradientColor, SizeMode, SizeModeWithContent, SolidColor, Transform, VerticalAlignment, VirtualControlRightMapping, Visibility } from '../../API/_Types.js';
import type * as Controls from '../../API/Controls.js';
import { Destroyable } from '../../API/Destroyable.js';
/**
 * Abstract base class for all TwinCAT HMI Controls.
 * Needed for handling controls in Framework APIs.
 * Check out
 * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3845361931.html?id=3265481440996758836
 * for an API reference.
 * @preserve (Part of the public API)
 */
export declare abstract class baseTcHmiControl extends Destroyable {
    /**
     * Constructor
     */
    constructor();
    /**
     * Main HTML Element of the Control as jQuery object.
     * @preserve (Part of the public API)
     */
    abstract getElement(): JQuery;
    /**
     * Precompiled copy of main JQuery element defining this control.
     * @preserve (Part of the public API)
     */
    abstract getPcElement(): JQuery;
    /**
     * Set __pcElement (with cleaned prevObj jQuery Stack)
     * @param value
     */
    abstract __setPcElement(value: JQuery): void;
    /**
     * List of attributes defined in html.
     * @preserve (Part of the public API)
     */
    abstract getAttrs(): Controls.ControlAttributeList;
    /**
     * Type of the control as full qualified name like 'TcHmi.Controls.Beckhoff.TcHmiButton'
     * @preserve (Part of the public API)
     */
    abstract getType(): string;
    /**
     * Control Id
     * @preserve (Part of the public API)
     */
    abstract getId(): string;
    /**
     * Get all children controls.
     * Only readable access to them is good practice for most parent controls.
     */
    abstract getChildren(): baseTcHmiControl[];
    /**
     * Get dynamic virtual access definition of an instance of a control
     * @param name name of the control right to fetch
     */
    getDescriptionAccessByName?(name: string): Controls.ControlAccessDescription | null;
    /**
     * Returns a boolean determining if the control is initialized.
     * @preserve (Part of the public API)
     */
    abstract getIsInitialized(): boolean;
    /**
     * Returns a boolean determining if the control is attached to the dom.
     * @preserve (Part of the public API)
     */
    abstract getIsAttached(): boolean;
    /**
     * Current life cycle states
     */
    abstract getLifeCycleState(): {
        initialized: boolean;
        attached: boolean;
        /** Detach in progress (in region switching for example) */
        detaching: boolean;
        destroyed: boolean;
    };
    /**
     * Returns a boolean determining if the control was already destroyed.
     * @preserve (Part of the public API)
     */
    abstract getIsDestroyed(): boolean;
    /**
     * Set the internal state of a control
     */
    abstract __setLifeCycleState(doNotCallThisApi: number): void;
    /**
     * Returns a boolean determining if the control should not be destroyed.
     * @preserve (Part of the public API)
     */
    abstract getKeepAlive(): boolean;
    /**
     * Sets __keepAlive
     * @param value
     */
    abstract __setKeepAlive(value: boolean): void;
    /**
     * Sets __keepAlive
     * @param value
     */
    abstract __getKeepAlive(): boolean;
    /**
     * Returns a boolean determining if the control is a container control.
     * @preserve (Part of the public API)
     */
    abstract getIsContainerControl(): boolean;
    /**
     * Parent control or null if there is (till now?) no parent control.
     * @preserve (Part of the public API)
     */
    abstract getParent(): baseTcHmiControl | null;
    /**
     * Sets __parent
     * @param value
     */
    abstract __setParent(value: baseTcHmiControl | null): void;
    /**
     * Adds a child to this control and handles the hierarchical management layer.
     * If this is a container control it will append child's DOM element to the container DOM at the correct place.
     * @param control Class instance of the child.
     * @param pos Optional index of the position for the new child.
     */
    abstract __addChild(control: baseTcHmiControl, pos?: number | null): void;
    /**
     * Remove a child from a control if this is a container control.
     * @param control
     */
    abstract __removeChild(control: baseTcHmiControl): void;
    /**
     * Returns the Row index of the Control inside a TcHmiGrid Container.
     * @preserve (Part of the public API)
     */
    abstract getGridRowIndex(): number | undefined;
    /**
     * Sets a new GridRow index
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setGridRowIndex(valueNew: number | null): void;
    /**
     * Returns the Column index of the Control inside a TcHmiGrid Container.
     * @preserve (Part of the public API)
     */
    abstract getGridColumnIndex(): number | undefined;
    /**
     * Sets a new GridColumn index
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setGridColumnIndex(valueNew: number | null): void;
    /**
     * Returns the attribute description of the control property
     * @param propertyName
     * @returns
     */
    protected abstract getAttributeDescription(propertyName: string): ControlAttributeDescription | null;
    /**
     * Returns the configured defaultInternalValue of the control property
     * @param propertyName
     * @template T Type of the default value
     * @preserve (Part of the public API)
     */
    protected abstract getAttributeDefaultValueInternal<T = any>(propertyName: string): T | null;
    /**
     * Is raised before control attribute setters are called to allow initialization based on current attribute values.
     * @preserve (Part of the public API)
     */
    abstract __previnit(): void;
    /**
     * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
     * @preserve (Part of the public API)
     */
    abstract __init(): void;
    /**
     * Is called of control is attached to the dom.
     * @preserve (Part of the public API)
     */
    abstract __attach(): void;
    /**
     * Is called if control is detached from the dom.
     * @preserve (Part of the public API)
     */
    abstract __detach(): void;
    /**
     * AccessConfig
     * @preserve (Part of the public API)
     */
    abstract getAccessConfig(): AccessControl[];
    /**
     * Sets the new AccessConfig
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setAccessConfig(valueNew: AccessControl[] | null): void;
    /**
     * Processes the current AccessConfig attribute value.
     * @preserve (Part of the public API)
     */
    abstract __processAccessConfig(): void;
    /**
     * Returns the VirtualControlRightMapping so it can react on parent control virtual rights.
     * @preserve (Part of the public API)
     */
    abstract getVirtualControlRightMappings(): VirtualControlRightMapping[];
    /**
     * Sets the new VirtualControlRightMapping so it can react on parent control virtual rights.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setVirtualControlRightMappings(valueNew: VirtualControlRightMapping[] | null): void;
    /**
     * Returns the effective value of isEnabled based on own and parent isEnabled variable.
     * @preserve (Part of the public API)
     */
    abstract getIsEnabled(): boolean | undefined;
    /**
     * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setIsEnabled(valueNew: boolean | null): void;
    /**
     * Processes and publish the current isEnabled attribute value and of its children.
     */
    abstract __processIsEnabled(): void;
    /**
     * List of classes of the control.
     * @preserve (Part of the public API)
     */
    abstract getClassNames(): string[] | undefined;
    /**
     * Defines the classes the control is part of.
     * @param valueNew
     */
    abstract setClassNames(valueNew: string[] | null): void;
    abstract __injectRenderedDimensions(doNotCallThisApi: object): void;
    /**
     * Returns the current width of the Control.
     * @preserve (Part of the public API)
     */
    abstract getWidth(): number | null | undefined;
    /**
     * Width processor
     * @param callerControl
     */
    abstract __processWidth(callerControl?: baseTcHmiControl): void;
    /**
     * Returns the current width unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getWidthUnit(): DimensionUnit | undefined;
    /**
     * Returns the current width mode of the control.
     * @preserve (Part of the public API)
     */
    abstract getWidthMode(): SizeMode | SizeModeWithContent | undefined;
    /**
     * Returns if inner dimension depends on child controls.
     * @preserve (Part of the public API)
     */
    abstract innerWidthDependsOnChilds(): boolean;
    /**
     * Updates the inner dimension depending on child controls.
     * @preserve (Part of the public API)
     */
    abstract updateInnerWidthDependingOnChilds(): void;
    /**
     * Returns the current height of the Control.
     * @preserve (Part of the public API)
     */
    abstract getHeight(): number | null | undefined;
    /**
     * Processing of Height
     * @param callerControl
     */
    abstract __processHeight(callerControl?: baseTcHmiControl): void;
    /**
     * Returns the current height mode of the control.
     * @preserve (Part of the public API)
     */
    abstract getHeightMode(): SizeMode | SizeModeWithContent | undefined;
    /**
     * Returns if inner dimension depends on child controls.
     * @preserve (Part of the public API)
     */
    abstract innerHeightDependsOnChilds(): boolean;
    /**
     * Updates the inner dimension depending on child controls.
     * @preserve (Part of the public API)
     */
    abstract updateInnerHeightDependingOnChilds(): void;
    /**
     * Returns the current height unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getHeightUnit(): DimensionUnit | undefined;
    /**
     * Returns the current top coordinate of the Control.
     * @preserve (Part of the public API)
     */
    abstract getTop(): number | null | undefined;
    /**
     * Returns the current top coordinate unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getTopUnit(): DimensionUnit | undefined;
    /**
     * Returns the current left coordinate of the Control.
     * @preserve (Part of the public API)
     */
    abstract getLeft(): number | null | undefined;
    /**
     * Returns the current left coordinate unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getLeftUnit(): DimensionUnit | undefined;
    /**
     * Returns the current bottom coordinate of the Control.
     * @preserve (Part of the public API)
     */
    abstract getBottom(): number | null | undefined;
    /**
     * Returns the current bottom coordinate unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getBottomUnit(): DimensionUnit | undefined;
    /**
     * Returns the current right coordinate of the Control.
     * @preserve (Part of the public API)
     */
    abstract getRight(): number | null | undefined;
    /**
     * Returns the current right coordinate unit of the Control.
     * @preserve (Part of the public API)
     */
    abstract getRightUnit(): DimensionUnit | undefined;
    /**
     * Returns the current minwidth value.
     * @preserve (Part of the public API)
     */
    abstract getMinWidth(): number | null | undefined;
    /**
     * Returns the current minwidth unit.
     * @preserve (Part of the public API)
     */
    abstract getMinWidthUnit(): DimensionUnit | undefined;
    /**
     * Returns the current minheight value.
     * @preserve (Part of the public API)
     */
    abstract getMinHeight(): number | null | undefined;
    /**
     * Returns the current maxwidth value.
     * @preserve (Part of the public API)
     */
    abstract getMaxWidth(): number | null | undefined;
    /**
     * Returns the current maxwidth unit.
     * @preserve (Part of the public API)
     */
    abstract getMaxWidthUnit(): DimensionUnit | undefined;
    /**
     * Returns the current maxheight value.
     * @preserve (Part of the public API)
     */
    abstract getMaxHeight(): number | null | undefined;
    /**
     * Returns the current maxheight unit.
     * @preserve (Part of the public API)
     */
    abstract getMaxHeightUnit(): DimensionUnit | undefined;
    /**
     * Returns the current rendered left value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedLeft(): number | null;
    /**
     * Returns the current rendered top value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedTop(): number | null;
    /**
     * Returns the current rendered right value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedRight(): number | null;
    /**
     * Returns the current rendered bottom value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedBottom(): number | null;
    /**
     * Returns the current rendered width value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedWidth(): number | null;
    /**
     * Returns the current rendered height value in pixel.
     * @preserve (Part of the public API)
     */
    abstract getRenderedHeight(): number | null;
    /**
     * Sets the value of the width attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setWidth(valueNew: number | null): void;
    /**
     * Sets the unit of the width attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setWidthUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the width mode attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setWidthMode(valueNew: SizeMode | null): void;
    /**
     * Sets the value of the height attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setHeight(valueNew: number | null): void;
    /**
     * Sets the value of the height mode attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setHeightMode(valueNew: SizeMode | null): void;
    /**
     * Sets the unit of the height attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setHeightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
     * max-width overrides width, but min-width overrides max-width.
     */
    abstract __getContentWidth(): number | null;
    /**
     * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
     * max-height overrides height, but min-height overrides max-height.
     */
    abstract __getContentHeight(): number | null;
    /**
     * Sets the value of the top attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setTop(valueNew: number | null): void;
    /**
     * Sets the unit of the top attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setTopUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the left attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setLeft(valueNew: number | null): void;
    /**
     * Sets the unit of the left attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setLeftUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the bottom attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBottom(valueNew: number | null): void;
    /**
     * Sets the unit of the bottom attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBottomUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the right attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setRight(valueNew: number | null): void;
    /**
     * Sets the unit of the right attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setRightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the minwidth attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMinWidth(valueNew: number | null): void;
    /**
     * Sets the unit of the minwidth attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMinWidthUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the minheight attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMinHeight(valueNew: number | null): void;
    /**
     * Returns the current minheight unit.
     * @preserve (Part of the public API)
     */
    abstract getMinHeightUnit(): DimensionUnit | undefined;
    /**
     * Sets the unit of the minheight attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMinHeightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the maxwidth attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMaxWidth(valueNew: number | null): void;
    /**
     * Sets the unit of the maxwidth attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMaxWidthUnit(valueNew: DimensionUnit | null): void;
    /**
     * Sets the value of the maxheight attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMaxHeight(valueNew: number | null): void;
    /**
     * Sets the unit of the maxheight attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setMaxHeightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the current zindex value.
     * @preserve (Part of the public API)
     */
    abstract getZindex(): number | null | undefined;
    /**
     * Sets the value of the zindex attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setZindex(valueNew: number | null): void;
    /**
     * Returns the current opacity value.
     * Sets the value of the zindex attribute.
     * @preserve (Part of the public API)
     */
    abstract getOpacity(): number | null | undefined;
    /**
     * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setOpacity(valueNew: number | null): void;
    /**
     * Returns the current visibility value.
     * @preserve (Part of the public API)
     */
    abstract getVisibility(): Visibility | undefined;
    /**
     * Sets the value of the visibility attribute.
     * @param valueNew The new visibility value.
     * @preserve (Part of the public API)
     */
    abstract setVisibility(valueNew: Visibility | null): void;
    /**
     * Returns the current transform value.
     * @preserve (Part of the public API)
     */
    abstract getTransform(): Transform[] | null | undefined;
    /**
     * Sets the value of the transform attribute.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setTransform(valueNew: Transform[] | null): void;
    /**
     * Returns the current background value.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
    /**
     * Sets the background value and calls the associated process function (processBackground).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundColor(valueNew: Color | null): void;
    /**
     * Returns the current value of the member variable backgroundImage.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImage(): string | null | undefined;
    /**
     * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
     * and calls the associated process function (processBackgroundImage) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImage(valueNew: string | null): void;
    /**
     * Returns the current value of the member variable backgroundImagePadding.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImagePadding(): FourSidedCss | null | undefined;
    /**
     * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
     * and calls the associated process function (processBackgroundImagePadding) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImagePadding(valueNew: FourSidedCss | null): void;
    /**
     * Returns the current value of the member variable backgroundImageWidth.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageWidth(): number | null | undefined;
    /**
     * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
     * and calls the associated process function (processBackgroundImageWidth) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageWidth(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable backgroundImageWidthUnit.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageWidthUnit(): DimensionUnit | undefined;
    /**
     * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
     * and calls the associated process function (processBackgroundImageWidthUnit) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageWidthUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the current value of the member variable backgroundImageHeight.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageHeight(): number | null | undefined;
    /**
     * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
     * and calls the associated process function (processBackgroundImageHeight) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageHeight(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable backgroundImageHeightUnit.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageHeightUnit(): DimensionUnit | undefined;
    /**
     * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
     * and calls the associated process function (processBackgroundImageHeightUnit) after that.
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageHeightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the current value of horizontalBackgroundImageAligment.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageHorizontalAlignment(): HorizontalAlignment | undefined;
    /**
     * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
    /**
     * Returns the current value of backgroundImageVerticalAlignment.
     * @preserve (Part of the public API)
     */
    abstract getBackgroundImageVerticalAlignment(): VerticalAlignment | undefined;
    /**
     * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBackgroundImageVerticalAlignment(valueNew: VerticalAlignment | null): void;
    /**
     * Returns the current border-color value.
     * @preserve (Part of the public API)
     */
    abstract getBorderColor(): Color | null | undefined;
    /**
     * Sets the border-color attribute value and calls the associated process function (processBorderColor).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBorderColor(valueNew: Color | null): void;
    /**
     * Returns the current border-width value.
     * @preserve (Part of the public API)
     */
    abstract getBorderWidth(): BorderWidth | null | undefined;
    /**
     * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBorderWidth(valueNew: BorderWidth | null): void;
    /**
     * Returns the current border-radius value.
     * @preserve (Part of the public API)
     */
    abstract getBorderRadius(): BorderRadius | null | undefined;
    /**
     * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBorderRadius(valueNew: BorderRadius | null): void;
    /**
     * Internal reference to the attribute "data-tchmi-border-type".
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setBorderStyle(valueNew: BorderStyle | null): void;
    /**
     * Returns the current border-style value.
     * @preserve (Part of the public API)
     */
    abstract getBorderStyle(): BorderStyle | null | undefined;
    /**
     * Sets the internal reference to the attribute "data-tchmi-box-shadow".
     * @preserve (Part of the public API)
     */
    abstract setBoxShadow(valueNew: BoxShadow[] | null): void;
    /**
     * Returns the current box-shadow value.
     * @preserve (Part of the public API)
     */
    abstract getBoxShadow(): BoxShadow[] | null | undefined;
    /**
     * Returns the current value of tooltip.
     * @preserve (Part of the public API)
     */
    abstract getTooltip(): string | null | undefined;
    /**
     * Sets the tooltip attribute and calls the associated process function (processTooltip).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    abstract setTooltip(valueNew: string | null): void;
    /**
     * Sets the focus to main html input / textarea element if available.
     */
    focus?(): void;
}
//# sourceMappingURL=baseTcHmiControl.d.ts.map