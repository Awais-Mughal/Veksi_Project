import { Localization as CommonLocalization } from '../Common/Localization.js';
export declare class Localization extends CommonLocalization {
    private static readonly defaultLang;
    constructor(commonPath: string, lang?: string);
    private __commonPath;
    protected __lang: string;
    private __defaultLocalizedTexts;
    setLanguage(lang: string | undefined): void;
    fetchLanguage(): Promise<void>;
    private __fetchLocalizedTexts;
    getLocalizedText(contentKey: string): string;
}
