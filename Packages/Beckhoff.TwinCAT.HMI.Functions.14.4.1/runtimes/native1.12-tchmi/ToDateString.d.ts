/**
 * Converts Strings, Numbers (milliseconds since 1970) and JS Date Objects to strings containing the date.
 * @param date Strings, Numbers (milliseconds since 1970) and JS Date Objects to be converted
 * @param timeFormatLocale The locale of the return string.
 * If not set this will use the time format locale of the current user.
 * @param timeZone The timezone of the return string
 */
export declare function ToDateString(date: Date | any, timeFormatLocale?: string | null, timeZone?: string | undefined): string;
declare const _ToDateString: typeof ToDateString;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let ToDateString: typeof _ToDateString;
        type ToDateString = typeof _ToDateString;
    }
}
export {};
//# sourceMappingURL=ToDateString.d.ts.map