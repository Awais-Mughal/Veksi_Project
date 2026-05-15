/**
 * Logout server session. Will cause hmi to reload if reload parameter is not set to false.
 * This function is deprecated. Its recommended to use LogoutEx.
 * @param reload
 * @deprecated Its recommended to use LogoutEx or the normal API TcHmi.Server.LogoutEx2
 */
export declare function Logout(reload?: boolean): boolean;
declare const _Logout: typeof Logout;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Logout: typeof _Logout;
        type Logout = typeof _Logout;
    }
}
export {};
//# sourceMappingURL=Logout.d.ts.map