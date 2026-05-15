/**
 * Gets if the system keyboard should open on focus of a textarea or input element.
 */
export declare function GetAutoOpenSystemKeyboard(): boolean;
declare const _GetAutoOpenSystemKeyboard: typeof GetAutoOpenSystemKeyboard;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GetAutoOpenSystemKeyboard: typeof _GetAutoOpenSystemKeyboard;
        type GetAutoOpenSystemKeyboard = typeof _GetAutoOpenSystemKeyboard;
    }
}
export {};
//# sourceMappingURL=GetAutoOpenSystemKeyboard.d.ts.map