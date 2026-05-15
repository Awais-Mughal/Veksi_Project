/**
 * Login server session. Reload on login is recommended for security reasons.
 * This function is deprecated. Its recommended to use LoginEx or the normal API TcHmi.Server.LoginEx2
 * @param username
 * @param password
 * @param persistent
 * @param reload
 * @deprecated Its recommended to use LoginEx or the normal API TcHmi.Server.LoginEx2
 */
export declare function Login(username: string | null, password: string | null, persistent?: boolean, reload?: boolean): boolean;
declare const _Login: typeof Login;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let Login: typeof _Login;
        type Login = typeof _Login;
    }
}
export {};
//# sourceMappingURL=Login.d.ts.map