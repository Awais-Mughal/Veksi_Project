import type { EcDiagnostics } from './main.js';
import type { Localization } from './Localization.js';
export declare class Notifications {
    constructor(destinationElement: HTMLElement);
    private __wrapper;
    private __notifications;
    resetNotification(key: string): void;
    clearAllNotifications(): void;
    clearNotifications(category?: string | NotificationCategory, level?: NotificationLevel): void;
    private __removeNotification;
    static createErrorElement(ecdiagnostics: EcDiagnostics, localization: Localization, text: string, level: NotificationLevel): HTMLDivElement;
    setNotificationElement(el: HTMLElement, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
    setNotification(content: string | HTMLElement, level: NotificationLevel, category: NotificationCategory | string, displayTime?: number): void;
    private __checkForDuplicatedNotifications;
    create(key: string, localization: Localization, params?: any): void;
}
export interface Notification {
    element: HTMLElement;
    timeout: number | undefined;
}
export declare enum NotificationLevel {
    'info' = 0,
    'success' = 1,
    'warning' = 2,
    'error' = 3
}
export declare enum NotificationCategory {
    'task' = 0,
    'ws' = 1
}
