import { BaseProvider } from './UiProvider.js';
import type { IErrorDetails } from './_Types.js';
/**
 * Abstract class for all KeyboardProvider
 */
export declare abstract class KeyboardProvider extends BaseProvider {
    readonly type = "keyboard";
    /**
     * Create a new Keyboard provider.
     * @param providerName The name of this provider.
     */
    constructor(providerName: string);
    /**
     * Open a keyboard with a specific target element.
     * @param textElement
     */
    abstract open(textElement: HTMLInputElement | HTMLTextAreaElement): IErrorDetails;
    /**
     * Will be called when the config has changed.
     */
    abstract refreshConfig(): void;
    /**
     * Closes a keyboard.
     * @param textElement
     */
    abstract close(): IErrorDetails;
    /**
     * Returns whether the keyboard is currently being interacted with by mouse, touch or physical keyboard.
     */
    hasActiveUserInteraction?(): boolean;
}
//# sourceMappingURL=UiProvider.KeyboardProvider.d.ts.map