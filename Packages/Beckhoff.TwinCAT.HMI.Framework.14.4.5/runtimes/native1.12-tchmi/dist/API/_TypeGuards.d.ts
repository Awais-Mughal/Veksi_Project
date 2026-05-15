import type { Color, SolidColor, LinearGradientColor, Background, Transform, Translate, Rotate, Scale, Skew, Origin, Perspective, Comparison, LogicOperator, Filter } from './_Types';
/**
 * Checks if the parameter is a TcHmi.SolidColor
 * @param colorObject The SolidColor to check.
 */
export declare function isSolidColor(colorObject: Color | null | undefined): colorObject is SolidColor;
/**
 * Checks if the parameter is a TcHmi.LinearGradientColor
 * @param colorObject The SolidColor to check.
 */
export declare function isLinearGradientColor(colorObject: Color | null | undefined): colorObject is LinearGradientColor;
/**
 * Checks if the parameter is a TcHmi.Background
 * @param obj object to test
 * @preserve (Part of the public API)
 */
export declare function isBackground(obj: Background | null | undefined): obj is Background;
/**
 * Checks if the parameter is a TcHmi.checkTransform
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isTranslate(transformObject: Transform | null | undefined): transformObject is Translate;
/**
 * Checks if the parameter is a TcHmi.Rotate
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isRotate(transformObject: Transform | null): transformObject is Rotate;
/**
 * Checks if the parameter is a TcHmi.Scale
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isScale(transformObject: Transform | null): transformObject is Scale;
/**
 * Checks if the parameter is a TcHmi.Skew
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isSkew(transformObject: Transform | null): transformObject is Skew;
/**
 * Checks if the parameter is a TcHmi.Origin
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isOrigin(transformObject: Transform | null): transformObject is Origin;
/**
 * Checks if the parameter is a TcHmi.Perspective
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isPerspective(transformObject: Transform | null): transformObject is Perspective;
/**
 * Check if an object is a Comparison.
 * @param value object to test
 */
export declare function isComparison(value: any): value is Comparison;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isLogicOperator(value: Comparison | LogicOperator | Filter): value is LogicOperator;
//# sourceMappingURL=_TypeGuards.d.ts.map