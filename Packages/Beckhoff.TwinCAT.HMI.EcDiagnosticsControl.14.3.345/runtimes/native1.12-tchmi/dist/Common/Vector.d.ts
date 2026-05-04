export interface XY {
    x: number;
    y: number;
}
export declare function getDirectionalVector(p1: XY, p2: XY): XY;
export declare function getVectorLength(p1: XY, p2?: XY): number;
export declare function getCenter(p1: XY, p2: XY): XY;
export declare function scalarProduct(scalar: number, p: XY): {
    x: number;
    y: number;
};
export declare function sumVector(p1: XY, p2: XY): XY;
