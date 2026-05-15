/**
 * Do not call this function. It is only for internal use.
 */
export declare function __rebuildLocalizationCache(): void;
/**
 * Allows handling date and time formatting.
 * @preserve (Part of the public API)
 */
export declare namespace Localization {
    /**
     * Returns a cached Intl.DateTimeFormat
     * When no parameter is given the current setting of the user is used
     *
     * @param locale Locale like 'en'
     * @param timeZone Timezone locator
     * @param hour12 time format
     * @param type format type
     */
    function getDateTimeFormatter(locale: string | undefined, timeZone: string | undefined, hour12: boolean | undefined, type?: FormatType): Intl.DateTimeFormat;
    /**
     * Skip non numeric chars and parseInt the rest.
     * MS Browsers add Left-To-Right-Mark to output
     * https://github.com/tc39/ecma402/issues/28
     * @param input string input
     * @preserve (Part of the public API)
     */
    function parseInt(input: string): number;
    /**
     * Parses a Date object
     * formats it to a time zone and split its components into an object
     * On error all entries will be NaN
     * @param date Date object to parse
     * @param options Options
     * @preserve (Part of the public API)
     */
    function parseDate(date: Date, options?: ParseOptions): DateParts;
    /**
     * Formats a Date object down to milliseconds in the correct locale and time zone (config from server user or browser default)
     * On error this will be null
     * @param date Date Object to parse
     * @param options Options
     * @preserve (Part of the public API)
     */
    function formatDate(date: Date, options?: FormatOptions): string | null;
    /** Holds a date splitted in the number parts */
    interface DateParts {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }
    interface ParseOptions {
        timeZone?: string | undefined;
    }
    interface FormatOptions extends ParseOptions {
        /** Type of the format output. Can be 'full', 'date', 'time', 'time-no-millisec' or 'date-no-millisec' */
        type?: FormatType;
        /** Locale to format the string. Can be empty to use the time format locale of the current user. */
        locale?: string | undefined | null;
    }
    type FormatType = 'full' | 'date' | 'time' | 'time-no-millisec' | 'full-no-millisec';
}
//# sourceMappingURL=Localization.d.ts.map