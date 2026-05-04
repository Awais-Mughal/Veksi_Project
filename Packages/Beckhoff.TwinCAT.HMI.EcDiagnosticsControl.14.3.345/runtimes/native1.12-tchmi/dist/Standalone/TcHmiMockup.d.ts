import { CallbackCollection } from './Helpers/TcHmiContentTabs/CallbackCollection.js';
export interface DestroyFunction {
    (): void;
}
export declare function addEx(element: HTMLElement): void;
export declare function removeEx(element: HTMLElement): void;
export declare let logLevel: string;
export declare const Prefix: boolean;
export declare function error(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
export declare function errorEx(message: string, ...optionalParameters: any[]): void;
export declare function warn(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
export declare function warnEx(message: string, ...optionalParameters: any[]): void;
export declare function info(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
export declare function infoEx(message: string, ...optionalParameters: any[]): void;
type tDestroyFunction = DestroyFunction;
declare const _addEx: typeof addEx;
declare const _removeEx: typeof removeEx;
declare const _logLevel: string;
declare const _Prefix = true;
declare const _error: typeof error;
declare const _errorEx: typeof errorEx;
declare const _warn: typeof warn;
declare const _warnEx: typeof warnEx;
declare const _info: typeof info;
declare const _infoEx: typeof infoEx;
declare global {
    namespace TcHmi {
        type DestroyFunction = tDestroyFunction;
        namespace Callback {
            const Collection: typeof CallbackCollection;
            type Collection<C extends (...args: any[]) => any> = CallbackCollection<C>;
        }
        namespace TopMostLayer {
            const addEx: typeof _addEx;
            const removeEx: typeof _removeEx;
        }
        namespace Log {
            let logLevel: typeof _logLevel;
            const Prefix: typeof _Prefix;
            const error: typeof _error;
            const errorEx: typeof _errorEx;
            const warn: typeof _warn;
            const warnEx: typeof _warnEx;
            const info: typeof _info;
            const infoEx: typeof _infoEx;
        }
    }
}
export {};
