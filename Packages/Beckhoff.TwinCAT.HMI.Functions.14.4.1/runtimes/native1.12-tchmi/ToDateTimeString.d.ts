/**
 * Converts Strings, Numbers (milliseconds since 1970) and JS Date Objects to strings containing the date and time.
 * @param date Strings, Numbers (milliseconds since 1970) and JS Date Objects to be converted
 * @param timeFormatLocale The locale of the return string.
 * If not set this will use the time format locale of the current user.
 * @param timeZone The timezone of the return string
 */
export declare function ToDateTimeString(date: Date | any, timeFormatLocale?: string | null, timeZone?: string | undefined): string;
declare const _ToDateTimeString: typeof ToDateTimeString;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ToDateTimeString: typeof _ToDateTimeString;
        type ToDateTimeString = typeof _ToDateTimeString;
    }
}
export {};
//# sourceMappingURL=ToDateTimeString.d.ts.map