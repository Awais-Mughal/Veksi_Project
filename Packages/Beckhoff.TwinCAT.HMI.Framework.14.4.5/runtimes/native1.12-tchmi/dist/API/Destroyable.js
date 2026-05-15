export class Destroyable{__isDestroyed=!1;
/**
     * Used to determine if the resource has been destroyed.
     * @preserve (Part of the public API)
     */
isDestroyed(){return this.__isDestroyed}
/**
     * Used to determine if the resource is destroyable.
     * @preserve (Part of the public API)
     */isDestroyable(){return this.__destroyPrivileges<=0}__destroyPrivileges=0;
/**
     * When called a previously claimed destroy privilege is released.
     * This will decrease the privilege counter.
     * @preserve (Part of the public API)
     */
__releaseDestroyPrivilege(){this.__destroyPrivileges<=0||this.__destroyPrivileges--}
/**
     * When called unwanted destruction of the resource is avoided by increasing a reference counter.
     * Make sure to call destroy() when you are done with the resource to decrease the privilege counter again and possibly destroy the instance.
     * @preserve (Part of the public API)
     */claimDestroyPrivilege(){this.isDestroyed()||this.__destroyPrivileges++}}