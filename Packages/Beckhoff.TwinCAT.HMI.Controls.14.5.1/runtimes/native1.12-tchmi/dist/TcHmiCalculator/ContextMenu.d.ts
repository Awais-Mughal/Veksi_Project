export declare class ContextMenu extends HTMLElement {
    private __target;
    private __container;
    private __isShowing;
    private __contextMenuOnCb?;
    constructor(target: HTMLElement, container: HTMLElement);
    connectedCallback(): void;
    disconnectedCallback(): void;
    toggleMenuOn(): void;
    toggleMenuOff(): void;
    removeTargetContextMenuEventListener(): void;
    set contextMenuOnCb(cb: () => any | undefined);
    private __addEvents;
    private __removeEvents;
    private __onContextMenu;
    private __onClickAway;
    private __onEscape;
    private __positionMenu;
}
//# sourceMappingURL=ContextMenu.d.ts.map