/**
 * Logout a different user or all from a TcHmiServer.
 * This function is deprecated. Its recommended to use ForceLogoutEx.
 * @param username
 * @deprecated Its recommended to use ForceLogoutEx.
 */
export declare function ForceLogout(username: string | null | undefined): boolean;
declare const _ForceLogout: typeof ForceLogout;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ForceLogout: typeof _ForceLogout;
        type ForceLogout = typeof _ForceLogout;
    }
}
export {};
//# sourceMappingURL=ForceLogout.d.ts.map