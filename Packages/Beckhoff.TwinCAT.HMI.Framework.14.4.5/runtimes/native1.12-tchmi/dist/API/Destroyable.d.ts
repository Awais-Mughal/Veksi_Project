/**
 * Interface for destroyable resources.
 */
export declare abstract class Destroyable {
    /**
     * Destroys the resource.
     * This method should be called when the resource is no longer needed.
     * @preserve (Part of the public API)
     */
    abstract destroy(): void;
    /**
     * Used to determine if the resource has been destroyed.
     */
    protected __isDestroyed: boolean;
    /**
     * Used to determine if the resource has been destroyed.
     * @preserve (Part of the public API)
     */
    isDestroyed(): boolean;
    /**
     * Used to determine if the resource is destroyable.
     * @preserve (Part of the public API)
     */
    isDestroyable(): boolean;
    /**
     * Reference counter for the resource.
     */
    protected __destroyPrivileges: number;
    /**
     * When called a previously claimed destroy privilege is released.
     * This will decrease the privilege counter.
     * @preserve (Part of the public API)
     */
    protected __releaseDestroyPrivilege(): void;
    /**
     * When called unwanted destruction of the resource is avoided by increasing a reference counter.
     * Make sure to call destroy() when you are done with the resource to decrease the privilege counter again and possibly destroy the instance.
     * @preserve (Part of the public API)
     */
    claimDestroyPrivilege(): void;
}
//# sourceMappingURL=Destroyable.d.ts.map