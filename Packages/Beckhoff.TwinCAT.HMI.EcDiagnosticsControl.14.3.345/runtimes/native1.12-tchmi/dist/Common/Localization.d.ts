export interface LocalizedTextsFile {
    /** Identifier of the describing schema. */
    $schema?: string;
    locale: string;
    localizedText: LocalizedTexts;
}
export interface LocalizedTexts {
    [key: string]: string;
}
export type LocalizedTextPlaceholder = string | number | HTMLElement;
export interface ElementData {
    contentKey?: string;
    placeholders?: LocalizedTextPlaceholder[];
    attributes?: Map<string, {
        contentKey: string;
        placeholders?: LocalizedTextPlaceholder[];
    }>;
}
export declare abstract class Localization {
    constructor();
    protected __localizedTexts: LocalizedTexts | null;
    protected __elements: Map<HTMLElement, ElementData>;
    abstract getLocalizedText(contentKey: string): string;
    destroy(): void;
    cleanUp(): void;
    createLocalizedElement<K extends keyof HTMLElementTagNameMap = 'div'>(content: string, elType?: K): HTMLElementTagNameMap[K];
    addElement(el: HTMLElement, contentKey?: string, placeholders?: LocalizedTextPlaceholder[], attributes?: Map<string, {
        contentKey: string;
        placeholders?: LocalizedTextPlaceholder[];
    }>): void;
    private __insertLocalizedText;
    replacePlaceholdersInLocalizedText(): void;
    updateAllElements(): void;
    addAllLocalizedElements(parent: HTMLElement): void;
}
