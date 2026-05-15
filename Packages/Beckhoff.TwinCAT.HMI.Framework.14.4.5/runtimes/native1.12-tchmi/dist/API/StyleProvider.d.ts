import type { Background, BorderRadius, BorderStyle, BorderWidth, BoxShadow, Color, Dictionary, FontFamily, FontSizeUnit, FontStyle, FontWeight, FourSidedCss, HorizontalAlignment, LinearGradientColor, RGBAColor, SolidColor, Transform, VerticalAlignment, Visibility } from './_Types.js';
/**
 * Returns all computed styles that are active on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
 * Unset or unknown CSS values will not be set in the result object.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 */
export declare function getComputedElementStyle(element: Iterable<Element> | Element | undefined): Dictionary<string>;
/**
 * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
 * Unset or unknown CSS values will not be set in the result object.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyName The CSS property to get.
 * @template T Name of the property to fetch
 */
export declare function getComputedElementStyle<T extends string>(element: Iterable<Element> | Element | undefined, propertyName: T): Record<T, string>;
/**
 * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
 * Unset or unknown CSS values will not be set in the result object.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyNames The CSS properties to get.
 * @template T Names of the properties to fetch
 */
export declare function getComputedElementStyle<T extends string>(element: Iterable<Element> | Element | undefined, propertyNames: readonly T[]): Record<T, string>;
/**
 * Returns all styles that are set on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 */
export declare function getSimpleElementStyle(element: Iterable<Element> | Element | undefined): Dictionary<string>;
/**
 * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyName The CSS property to get.
 * @template T Name of the property to fetch
 */
export declare function getSimpleElementStyle<T extends string>(element: Iterable<Element> | Element | undefined, propertyName: T): Record<T, string>;
/**
 * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyNames The CSS properties to get.
 * @template T Names of the properties to fetch
 */
export declare function getSimpleElementStyle<T extends string>(element: Iterable<Element> | Element | undefined, propertyNames: readonly T[]): Record<T, string>;
/**
 * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyName The CSS property to process.
 * @param value The value for the CSS property.
 */
export declare function setSimpleElementStyle(element: Iterable<Element> | Element | undefined, propertyName: string, value: string | null | undefined): void;
/**
 * Style setter forsimple styles in a collection of JQuery elements or single HTML or SVG Elements.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyName The CSS property to process.
 * @param values An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
 */
export declare function setSimpleElementStyle(element: Iterable<Element> | Element | undefined, propertyName: string, values: readonly string[] | null): void;
/**
 * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param styles A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or null to remove values.
 */
export declare function setSimpleElementStyle(element: Iterable<Element> | Element | undefined, styles: Readonly<Dictionary<string | readonly string[] | null | undefined>> | null): void;
/**
 * Style processor for generic styles.
 * @param controlName The name of the target control.
 * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
 * @param property The CSS property to process.
 * @param value The value for the CSS property.
 */
export declare function processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
/**
 * Style processor for generic styles.
 * @param controlName The name of the target control.
 * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
 * @param propertyName The CSS property to process.
 * @param value An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
 */
export declare function processGenericStyle(controlName: string, selector: string, propertyName: string, value: string[] | null): void;
/**
 * Style processor for generic styles.
 * @param controlName The name of the target control.
 * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
 * @param styles A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
 */
export declare function processGenericStyle(controlName: string, selector: string, styles: Dictionary<string | string[] | null>): void;
/**
 * Resolves a SolidColor object to a string representation for use as css color property.
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to resolve.
 * @preserve (Part of the public API)
 */
export declare function resolveSolidColorAsCssValue(colorObject: SolidColor): string;
/**
 * Resolve a SolidColor object to a RGBAColor object.
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to resolve.
 * @preserve (Part of the public API)
 */
export declare function resolveSolidColorAsRGBA(colorObject: SolidColor): RGBAColor;
/**
 * Normalize a SolidColor object
 * Every supported color format will be returned as
 * for example '#ff0000' or with transparency as 'rgba(255, 0, 0, 0.333)'
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to normalize.
 * @preserve (Part of the public API)
 */
export declare function normalizeColorAsCssValue(colorObject: SolidColor): string;
/**
 * Resolves a LinearGradientColor object to a string representation for use in css background-image property.
 * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
 * @param colorObject The LinearGradientColor to resolve.
 * @preserve (Part of the public API)
 */
export declare function resolveLinearGradientColorAsCssValue(colorObject: LinearGradientColor): string;
/**
 * Style Processor for background. This handles spaces and ' or " in URLs, too.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new value for the background.
 * @preserve (Part of the public API)
 */
export declare function processBackground(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: Partial<Background> | null | undefined): void;
/**
 * Style Processor for background colors and gradients.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new value for the background.
 * @preserve (Part of the public API)
 */
export declare function processBackgroundColor(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: Color | null | undefined): void;
/**
 * Style Processor for background images. This handles spaces and ' or " in URLs, too.
 * ValueNew undefined, null or empty string will remove the background image.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The URL of the image.
 * @preserve (Part of the public API)
 */
export declare function processBackgroundImage(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: string | null | undefined): void;
/**
 * Style processor for SVG fill color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new fill color.
 * @preserve (Part of the public API)
 * HTMLElement allowed because default jQuery type is HTMLElement
 */
export declare function processFillColor(element: JQuery<SVGElement | HTMLElement> | Iterable<SVGElement> | SVGElement | undefined, valueNew: Color | null | undefined): void;
/**
 * Style processor for SVG stroke color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new stroke color.
 * @preserve (Part of the public API)
 * HTMLElement allowed because default jQuery type is HTMLElement
 */
export declare function processStrokeColor(element: JQuery<SVGElement | HTMLElement> | Iterable<SVGElement> | SVGElement | undefined, valueNew: SolidColor | null | undefined): void;
/**
 * Style processor for text color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new text color.
 * @preserve (Part of the public API)
 */
export declare function processTextColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: SolidColor | null | undefined): void;
/**
 * Style processor for border color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border color.
 * @preserve (Part of the public API)
 */
export declare function processBorderColor(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Color | null | undefined): void;
/**
 * Style processor for border width.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border widths.
 * @preserve (Part of the public API)
 */
export declare function processBorderWidth(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<BorderWidth> | null | undefined): void;
/**
 * Style processor for border radius.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border radii.
 * @preserve (Part of the public API)
 */
export declare function processBorderRadius(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderRadius | null | undefined): void;
/**
 * Style processor for border style.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border styles.
 * @preserve (Part of the public API)
 */
export declare function processBorderStyle(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: BorderStyle | null | undefined): void;
/**
 * Style processor for box shadow.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border styles.
 * @preserve (Part of the public API)
 */
export declare function processBoxShadow(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: readonly BoxShadow[] | null | undefined): void;
/**
 * Style processor for font family.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font family.
 * @preserve (Part of the public API)
 */
export declare function processFontFamily(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontFamily | null | undefined): void;
/**
 * Style processor for font size.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font size.
 * @param unitNew The new font size unit. Defaults to "px".
 * @preserve (Part of the public API)
 */
export declare function processFontSize(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: number | null | undefined, unitNew?: FontSizeUnit): void;
/**
 * Style processor for font style.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font style. Allowed values are "Normal", "Italic" and "Oblique".
 * @preserve (Part of the public API)
 */
export declare function processFontStyle(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontStyle | null | undefined): void;
/**
 * Style processor for font weight.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font weight. Allowed values are "Normal" and "Bold".
 * @preserve (Part of the public API)
 */
export declare function processFontWeight(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: FontWeight | null | undefined): void;
/**
 * Style processor for visibility.
 * Visibility also affects pointer events, i.e. a hidden element will not receive mouse click events.
 * Hidden still uses space in fluid calculations, collapsed is ignored there.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
 * @preserve (Part of the public API)
 */
export declare function processVisibility(element: JQuery | readonly Element[] | NodeListOf<Element> | HTMLCollectionOf<Element> | Element | undefined, valueNew: Visibility | null | undefined): void;
/**
 * Style processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
 * @preserve (Part of the public API)
 */
export declare function processContentHorizontalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: HorizontalAlignment | null | undefined): void;
/**
 * Style processor for vertical alignment. This aligns the content of the target element, not the target element itself.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
 * @preserve (Part of the public API)
 */
export declare function processContentVerticalAlignment(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: VerticalAlignment | null | undefined): void;
/**
 * Style processor for content padding.
 * Note: Percentages always refer to the width of the element, never its height (even for top and bottom).
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new content padding.
 * @preserve (Part of the public API)
 */
export declare function processContentPadding(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Partial<FourSidedCss> | null | undefined): void;
/**
 * Theme processor for transforms.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new transform value or an array of transform values.
 * @param order If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms.
 * @preserve (Part of the public API)
 */
export declare function processTransform(element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined, valueNew: Transform | Transform[] | null | undefined, order?: number): void;
/**
 * Return the width of the given text in px as it would appear on the given element.
 * Make sure the element you operate with is attached to the DOM.
 * The function uses the computed values of the element which only exist when an element is attached to the DOM.
 * This function only works with single line text.
 * @param text The text to measure.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @preserve (Part of the public API)
 */
export declare function getTextWidth(text: string, element: JQuery | readonly HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<HTMLElement> | HTMLElement | undefined): number | null;
//# sourceMappingURL=StyleProvider.d.ts.map