/**
 * Logout and switch to the login page
 */
export declare function GoToLoginPage(): boolean;
declare const _GoToLoginPage: typeof GoToLoginPage;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let GoToLoginPage: typeof _GoToLoginPage;
        type GoToLoginPage = typeof _GoToLoginPage;
    }
}
export {};
//# sourceMappingURL=GoToLoginPage.d.ts.map