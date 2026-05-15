import './_GlobalFunctions.js';
import './_StaticDefines.js';
import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
import type { IErrorDetails, IResultObject, ScaleModeString } from './_Types.js';
/**
 * Loads a view partial into the dom.
 * @param url URL of the view file to load
 * @param callback Callback will be called on success or failure
 * @preserve (Part of the public API)
 */
export declare function load(url: string, callback?: null | ((data: IResultObject) => void)): void;
/**
 * Returns the current view object.
 * @preserve (Part of the public API)
 */
export declare function get(): baseTcHmiControl | null;
/**
 * Sets the view scale mode.
 * @param scaleMode new value
 * @preserve (Part of the public API)
 */
export declare function setScaleMode(scaleMode: ScaleModeString): void;
/**
 * Adds a viewport element such as header or footer or over main.
 * Every header or footer gets its own space.
 * Elements targeting 'main' will get covering each other.
 * @param element The viewport element that should be added.
 * @param options optional stuff
 * @param options.name Optional friendly name.
 * @param options.area Target area for the element.
 */
export declare function addViewportElement(element: HTMLElement, options: {
    /** Optional friendly name. */
    name?: string;
    /** Target area for the element. */
    area: 'header' | 'main' | 'footer';
}): IErrorDetails;
/**
 * Removes a viewport element such as the header or footer.
 * @param element The viewport element that should be removed.
 */
export declare function removeViewportElement(element: HTMLElement): IErrorDetails;
/**
 * Returns a DOMRect object providing information about the size of an
 * hmi viewport area (or main area) and its position relative to the viewport.
 * @param area Target area to query.
 */
export declare function getViewportElementDimension(area?: 'header' | 'main' | 'footer'): DOMRect | null;
//# sourceMappingURL=View.d.ts.map