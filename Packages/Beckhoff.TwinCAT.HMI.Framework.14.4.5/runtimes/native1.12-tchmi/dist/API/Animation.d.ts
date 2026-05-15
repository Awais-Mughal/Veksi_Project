import type { Dictionary, IResultObject } from './_Types.js';
/**
 * An animation class
 */
export declare class Animation {
    /**
     * Creates a new animation
     * @param controlName The name of the control for which the animation is intendend.
     * @param selector A CSS selector to identify the element inside the control to animate.
     * @preserve (Part of the public API)
     */
    constructor(controlName: string, selector?: string);
    private readonly __controlName;
    private readonly __selector;
    private readonly __animationName;
    private __keyframes;
    private __duration;
    private __delay;
    private __iterationCount;
    private __direction;
    private __timingFunction;
    private __fillMode;
    private __cleanup;
    private __useCss;
    private __eventHandlers;
    private __state;
    /**
     * Update internal state
     * @param status new status
     */
    private __updateState;
    private __animationController;
    /**
     * Returns the name of the control the animation is intended for.
     * @returns The name of the control.
     * @preserve (Part of the public API)
     */
    controlName(): string;
    /**
     * Returns the selector of the element to animate.
     * @returns The selector.
     * @preserve (Part of the public API)
     */
    selector(): string;
    /**
     * Returns the name of the animation.
     * @returns The name of the animation.
     * @preserve (Part of the public API)
     */
    animationName(): string;
    /**
     * Returns the state of the animation.
     * @returns The state.
     * @preserve (Part of the public API)
     */
    state(): Animation.Status;
    /**
     * Adds a keyframe.
     * This function throws an exception if the progressPoint of the keyframe is not between 0 and 1 inclusive.
     * @param keyframe The keyframe to add.
     * @preserve (Part of the public API)
     */
    addKeyframe(keyframe: Animation.Keyframe): this;
    /**
     * Adds a keyframe.
     * This function throws an exception if the progressPoint is not between 0 and 1 inclusive.
     * @param styles The styles for this keyframe.
     * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
     * @preserve (Part of the public API)
     */
    addKeyframe(styles: Dictionary<string | string[]>, progressPoint: number): this;
    /**
     * Adds a keyframe.
     * This function throws an exception if the progressPoint of the keyframe is not between 0 and 1 inclusive.
     * @param property The CSS property for this keyframe.
     * @param value The value for the CSS property at this keyframe.
     * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
     * @preserve (Part of the public API)
     */
    addKeyframe(property: string, value: string, progressPoint: number): this;
    /**
     * Adds a keyframe.
     * This function throws an exception if the progressPoint of the keyframe is not between 0 and 1 inclusive.
     * @param property The CSS property for this keyframe.
     * @param value An array of values for the CSS property at this keyframe. This is useful to pass vendor-prefixed CSS values to ensure compatibility.
     * @param progressPoint A number between 0 and 1 inclusive to determine when this keyframe should be reached.
     * @preserve (Part of the public API)
     */
    addKeyframe(property: string, value: string[], progressPoint: number): this;
    /**
     * Removes all keyframes.
     * @preserve (Part of the public API)
     */
    clearKeyframes(): this;
    /**
     * Reverses the keyframes by subtracting the progressPoint from 1 and setting that as the new progressPoint.
     * @preserve (Part of the public API)
     */
    reverseKeyframes(): this;
    /**
     * Gets the keyframes of this animation.
     * @returns The keyframes.
     * @preserve (Part of the public API)
     */
    keyframes(): Animation.Keyframe[];
    /**
     * Gets the configured duration for this animation. Default is 0.
     * @returns The duration.
     * @preserve (Part of the public API)
     */
    duration(): number;
    /**
     * Sets the duration for this animation. Default is 0.
     * @param valueNew The new duration.
     * @preserve (Part of the public API)
     */
    duration(valueNew: number | null): this;
    /**
     * Gets the delay before this animation starts. Default is 0.
     * @returns The delay.
     * @preserve (Part of the public API)
     */
    delay(): number;
    /**
     * Sets the delay before this animation starts. Default is 0.
     * @param valueNew {number} The new delay.
     * @preserve (Part of the public API)
     */
    delay(valueNew: number | null): this;
    /**
     * Gets the iteration count for this animation. Default is 1.
     * @returns The iteration count.
     * @preserve (Part of the public API)
     */
    iterationCount(): number | 'infinite';
    /**
     * Sets the iteration count for this animation. Default is 1.
     * @param valueNew The new iteration count.
     * @preserve (Part of the public API)
     */
    iterationCount(valueNew: number | 'infinite' | null): this;
    /**
     * Gets the order in which the keyframes are used. Default is 'normal'.
     * @returns The direction.
     * @preserve (Part of the public API)
     */
    direction(): Animation.Direction;
    /**
     * Sets the order in which the keyframes are used. Default is 'normal'.
     * @param valueNew The new direction.
     * @preserve (Part of the public API)
     */
    direction(valueNew: Animation.Direction | null): this;
    /**
     * Gets the timing function for this animation. Default is 'ease'.
     * @returns The timing function.
     * @preserve (Part of the public API)
     */
    timingFunction(): string | ((t: number) => number);
    /**
     * Sets the timing function for this animation. Default is 'ease'.
     * @param valueNew The new timing function. Possible values: "linear", "ease(-in/-out/-in-out)", "step-start/-end", "cubic-bezier(<number>, <number>, <number>, <number)", "steps(<number>, start/end)".
     * @preserve (Part of the public API)
     */
    timingFunction(valueNew: string | ((t: number) => number) | null): this;
    /**
     * Gets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
     * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
     * @returns The fill mode.
     * @preserve (Part of the public API)
     */
    fillMode(): FillMode;
    /**
     * Sets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
     * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
     * @param valueNew The new fill mode.
     * @preserve (Part of the public API)
     */
    fillMode(valueNew: FillMode | null): this;
    /**
     * Gets whether a cleanup is scheduled after the animation ends. Default is false.
     * @returns The cleanup value.
     * @preserve (Part of the public API)
     */
    cleanup(): boolean;
    /**
     * Set whether to schedule a cleanup after the animation has finished. A cleanup removes all animation specific CSS and, depending on fillMode, persists the properties of the last keyframe to the element CSS. Default is false.
     * @param valueNew {boolean} The cleanup value.
     * @preserve (Part of the public API)
     */
    cleanup(valueNew: boolean | null): this;
    /**
     * Gets whether the animation will be rendered via CSS or JavaScript. Will return false if the user has set useCss to false or configured features not supported by CSS. Default is true.
     * @returns Whether CSS will be used.
     * @preserve (Part of the public API)
     */
    useCss(): boolean;
    /**
     * Sets whether to render the animation via CSS or JavaScript. JavaScript may offer better performance if the animation is often changed and restarted.
     * If the animation has been configured with features unsupported by CSS, JavaScript will be used regardless of the value of useCss. Default is true.
     * @param valueNew {boolean} Whether to use CSS, when available.
     * @preserve (Part of the public API)
     */
    useCss(valueNew: boolean | null): this;
    /**
     * Registers an event handler for one of the events animationstart, animationend or animationiteration.
     * @param name The name of the event.
     * @param callback The callback function.
     * @preserve (Part of the public API)
     */
    registerEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback: (event: Animation.AnimationEvent) => void): this;
    /**
     * Unregisters a previously registered event handler.
     * @param name The name of the event.
     * @param callback The callback function to unregister.
     * @preserve (Part of the public API)
     */
    unregisterEventHandler(name: 'animationstart' | 'animationend' | 'animationiteration', callback?: (event: Animation.AnimationEvent) => void): this;
    /**
     * Gets all event handlers
     * @returns The event handlers.
     * @preserve (Part of the public API)
     */
    eventHandlers(): {
        name: 'animationstart' | 'animationend' | 'animationiteration';
        callback: (event: Animation.AnimationEvent) => void;
    }[];
    /**
     * Run the animation.
     * @preserve (Part of the public API)
     */
    run(): this;
    /**
     * Pause the animation.
     * @preserve (Part of the public API)
     */
    pause(): this;
    /**
     * Cancels the animation and writes the last keyframe styles into the element CSS.
     * @preserve (Part of the public API)
     */
    skip(): this;
    /**
     * Resets the animation. This is an asynchronous operation.
     * @param callback The function to call when the animation has been reset.
     * @preserve (Part of the public API)
     */
    reset(callback?: () => void): this;
}
export declare namespace Animation {
    enum Status {
        CONFIGURE = 0,
        INITIALIZED = 1,
        RUNNING = 2,
        PAUSED = 3,
        ENDED = 4
    }
    interface Keyframe {
        styles: Dictionary<string[]>;
        progressPoint: number;
    }
    interface AnimationEvent extends IResultObject {
        animationName: string;
        elapsedTime: number;
        JQueryEvent?: JQuery.TriggeredEvent;
    }
    type Direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type FillMode = 'none' | 'forwards' | 'backwards' | 'both';
}
//# sourceMappingURL=Animation.d.ts.map