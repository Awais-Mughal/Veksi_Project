import type { HTMLElements } from './Utility.js';
import type { PossibleCtxNames } from './ExtendedInfo.js';
export interface OnlineEntry<T> {
    value: T;
    domElements: Set<HTMLElement>;
    errorElements?: Set<HTMLElement>;
}
export interface ProcessDataOnlineEntry<T> {
    value: T;
    domElements: Set<HTMLElement>;
    forced: boolean | null;
    forcedDomElements: Set<HTMLElement>;
    errorElements: Set<HTMLElement>;
}
export type OnlineEntryAll = OnlineEntry<OnlineEntryValueTypes>;
export type OnlineEntryValueTypes = HTMLElements | boolean | number | string | null;
export declare const domElementsCache: Map<PossibleCtxNames, Map<OnlineEntry<OnlineEntryValueTypes>, HTMLElements>>;
export declare function removeGarbageElements(ctx: PossibleCtxNames): void;
export declare function addDomElement(ctx: PossibleCtxNames, entry: OnlineEntry<OnlineEntryValueTypes> | undefined, valueEl: HTMLElement | null, errorEl?: HTMLElement): void;
export declare function setOnlineData(entry: OnlineEntry<OnlineEntryValueTypes> | undefined, value?: OnlineEntryValueTypes): void;
