export declare class ColorRGBA {
    private __r;
    private __g;
    private __b;
    private __a;
    constructor(r: number, g?: number, b?: number, a?: number);
    getRGBAString(a?: number): string;
    getHexString(includeOpacity?: boolean): string;
    static resolveSolidColorAsCssValue(colorObject: {
        color: string;
    }): string;
    static resolveSolidColorAsRGBA(colorObject: {
        color: string;
    }): ColorRGBA;
}
export interface ThemedResource {
    [key: string]: string | number | {
        color: string;
    } | ColorRGBA;
}
export declare const ColorRGBA_Black: ColorRGBA;
export declare const ColorRGBA_White: ColorRGBA;
export declare const ColorRGBA_Red: ColorRGBA;
export declare const ColorRGBA_Orange: ColorRGBA;
export declare const ColorRGBA_DimGray: ColorRGBA;
export declare const ColorRGBA_Success: ColorRGBA;
export declare const ColorRGBA_SuccessLight: ColorRGBA;
export declare const ColorRGBA_Warning: ColorRGBA;
export declare const ColorRGBA_WarningLight: ColorRGBA;
export declare const ColorRGBA_Error: ColorRGBA;
export declare const ColorRGBA_ErrorDark: ColorRGBA;
export declare const ColorRGBA_ErrorLight: ColorRGBA;
export interface IColorRGBA {
    r: number;
    g: number;
    b: number;
    a?: number;
}
