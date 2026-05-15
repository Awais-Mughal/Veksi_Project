/**
 * Concatenate multiple string values.
 * @param strings
 */
export declare function Concatenate(...strings: string[]): string;
declare const _Contenate: typeof Concatenate;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Concatenate: typeof _Contenate;
        type Concatenate = typeof _Contenate;
    }
}
export {};
//# sourceMappingURL=Concatenate.d.ts.map