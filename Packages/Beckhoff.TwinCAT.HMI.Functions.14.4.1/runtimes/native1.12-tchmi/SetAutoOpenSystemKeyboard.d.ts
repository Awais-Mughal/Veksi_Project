/**
 * Sets if the system keyboard should open on focus of a textarea or input element.
 */
export declare function SetAutoOpenSystemKeyboard(autoOpenSystemKeyboard: boolean): void;
declare const _SetAutoOpenSystemKeyboard: typeof SetAutoOpenSystemKeyboard;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let SetAutoOpenSystemKeyboard: typeof _SetAutoOpenSystemKeyboard;
        type SetAutoOpenSystemKeyboard = typeof _SetAutoOpenSystemKeyboard;
    }
}
export {};
//# sourceMappingURL=SetAutoOpenSystemKeyboard.d.ts.map