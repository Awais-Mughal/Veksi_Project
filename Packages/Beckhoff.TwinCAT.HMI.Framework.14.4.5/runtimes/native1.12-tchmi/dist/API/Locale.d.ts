import type { DestroyFunction, ILocalizedTextMap, IResultObject } from './_Types.js';
/**
 * Changes the locale of the HMI including all localization symbols.
 * Note that this does not change the Time Format Locale.
 * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @param locale locale name to load. The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @param callback optional callback which is called after locale change
 * @preserve (Part of the public API)
 */
export declare function load(locale: string | null, callback?: null | ((this: void, data: IResultObject) => void)): void;
/**
 * Returns the current locale string for texts or undefined if no localized Symbol is available.
 * Note that this is not the Time Format Locale.
 * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @returns The current locale identifier as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @preserve (Part of the public API)
 */
export declare function get(): string | undefined;
/**
 * Returns the list of available application locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @preserve (Part of the public API)
 */
export declare function getRegisteredLocales(): string[];
/**
 * Returns the list of available control locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @param type Control type (for example TcHmi.Controls.Beckhoff.TcHmiRadialGauge)
 */
export declare function getRegisteredLocalesForControl(type: string | null): string[];
/**
 * Returns the list of available function locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @param type Function type (for example TcHmi.Functions.Beckhoff.CheckAccess)
 */
export declare function getRegisteredLocalesForFunction(type: string | null): string[];
/**
 * Allows safe access to a localization dictionary.
 * @template K Keys this Reader will resolve
 */
export declare class LocalizationReader<K extends string = string> {
    /**
     * Allows safe access to a localization dictionary.
     * @param localization localization dictionary
     */
    constructor(localization: ILocalizedTextMap<K>);
    private __localizationDictionary;
    /**
     * Returns the raw localization dictionary.
     */
    getLocalization(): ILocalizedTextMap<K>;
    /**
     * Returns the value associated with the key or the key if not value exists.
     * @param key Key to map to a localization
     */
    get(key: K): string;
}
/**
 * Used to access namespace related localization content.
 * Do not use this class directly. Please use one of its specializations like TcHmi.Locale.ControlLocalization,
 * TcHmi.Locale.FunctionLocalization or TcHmi.Locale.ApplicationLocalization.
 * @template K Keys this Localization will provide.
 */
export declare abstract class Localization<K extends string = string> {
    protected __namespace: string;
    /**
     * Returns a dictionary with all related localization texts.
     * @param options optional locale level
     */
    get(options?: LocalizationOptions): LocalizationReader<K>;
    /**
     * Watches the list of all related localization texts.
     * Returns a destroy function to remove the watch.
     * @param callback callback which is called on each value change
     * @template WK Keys this watch will provide. Falls back to keys of the Localization.
     */
    watch<WK extends string = K>(callback: (this: void, data: IWatchResultObject<WK>) => void): DestroyFunction;
    /**
     * Watches the list of all related localization texts.
     * Returns a destroy function to remove the watch.
     * @param options optional locale level
     * @param callback callback which is called on each value change
     * @template WK Keys this watch will provide. Falls back to keys of the Localization.
     */
    watchEx<WK extends string = K>(options: LocalizationOptions | undefined, callback: (this: void, data: IWatchResultObject<WK>) => void): DestroyFunction;
    /**
     * Returns the text for a specific localization key or the key if no text is available.
     * @param key Key which should be mapped to a text.
     * @param options optional locale level
     */
    getText(key: K, options?: LocalizationOptions): string;
    /**
     * Watches the text for a specific localization key or the key if no text is available.
     * Returns a destroy function to remove the watch.
     * @param key Key which is mapped to a text.
     * @param callback callback which is called on each value change
     */
    watchText(key: K, callback?: (this: void, data: IWatchTextResultObject) => void): DestroyFunction;
    /**
     * Watches the text for a specific localization key or the key if no text is available.
     * @param key Key which is mapped to a text.
     * @param options optional locale level
     * @param callback callback which is called on each value change
     */
    watchTextEx(key: K, options: LocalizationOptions | undefined, callback: (this: void, data: IWatchTextResultObject) => void): DestroyFunction;
}
/**
 * Used to access application related localization content.
 */
export declare class ApplicationLocalization extends Localization {
    /**
     * Constructor
     */
    constructor();
}
/**
 * Used to access control related localization content.
 */
export declare class ControlLocalization extends Localization {
    /**
     * Constructor
     * @param type Name+Namespace of the control
     */
    constructor(type: string);
}
/**
 * Used to access function related localization content.
 */
export declare class FunctionLocalization extends Localization {
    /**
     * Constructor
     * @param type Name+Namespace of the function
     */
    constructor(type: string);
}
/**
 * Used to access package related localization content.
 */
export declare class PackageLocalization extends Localization {
    /**
     * Constructor
     * @param id Id of the target NuGet package
     */
    constructor(id: string);
}
export declare enum Level {
    Application = 0,
    Engineering = 1
}
export interface LocalizationOptions {
    /**
     * The locale level to use when fetching localization texts. Defaults to Level.Application.
     * Should only be set to Level.Engineering in engineering scenarios.
     */
    level?: Level;
    /**
     * When set to true html characters in localization texts will be replaced with html entities before being returned.
     * Use this when the localization text will be injected to the DOM using innerHTML to prevent XSS injection.
     */
    preventHtml?: boolean;
}
export interface IWatchResultObject<K extends string = string> extends IResultObject {
    reader?: LocalizationReader<K>;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: DestroyFunction;
}
export interface IWatchTextResultObject extends IResultObject {
    text?: string;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: DestroyFunction;
}
//# sourceMappingURL=Locale.d.ts.map