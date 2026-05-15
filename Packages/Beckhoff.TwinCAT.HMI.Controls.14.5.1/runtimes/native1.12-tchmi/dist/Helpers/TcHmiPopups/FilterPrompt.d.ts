import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import { Control as TcHmiCombobox, type ListItemGeneric as TcHmiCombobox_ListItemGeneric } from '../../TcHmiCombobox/TcHmiCombobox.esm.js';
import type { Control as TcHmiCheckbox } from '../../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type { Control as TcHmiTextbox } from '../../TcHmiTextbox/TcHmiTextbox.esm.js';
import type { Control as TcHmiDateTimeInput } from '../../TcHmiDateTimeInput/TcHmiDateTimeInput.esm.js';
import { Popup } from './Popup.js';
import type { OkCancelPrompt } from './OkCancelPrompt.js';
export declare class FilterPrompt extends Popup<TcHmi.Filter> {
    protected __okButton: TcHmiButton;
    protected __cancelButton: TcHmiButton;
    protected __resetButton: TcHmiButton;
    protected __removeButton: TcHmiButton;
    protected __groupButton: TcHmiButton;
    protected __ungroupButton: TcHmiButton;
    protected __elementMenuBar: HTMLElement;
    protected __elementFilterTableHeader: HTMLElement;
    /** The element used to save the space for the group brackets */
    protected __elementIndentationHeader: HTMLElement;
    protected __elementFilterTable: HTMLElement;
    protected __elementFilterTableBody: HTMLElement;
    protected __filter: TcHmi.Filter;
    protected __currentFilter: TcHmi.Filter;
    protected __originalFilter: TcHmi.Filter;
    protected __schemaInfo: FilterPrompt.SchemaInfo;
    protected __localizableEnums: FilterPrompt.PathInfo[];
    protected __domainPaths: Map<string, _FilterPrompt.PathInfo>;
    protected __rows: FilterPrompt.RowData[];
    protected __selectedRows: FilterPrompt.SelectedRow[];
    protected __updateRequired: boolean;
    protected __groupInfo: {
        parent: FilterPrompt.FilterNesting;
        toGroup: (TcHmi.Comparison | TcHmi.Filter)[];
    } | null;
    protected __ungroupInfo: {
        parent: FilterPrompt.FilterNesting;
        toUngroup: FilterPrompt.FilterNesting;
    } | null;
    protected __onScroll(_event: Event): void;
    protected __onLocaleChangedDestroyer: TcHmi.DestroyFunction | null;
    protected __onLocaleChanged(): void;
    protected __localizeRequestId: number | null;
    protected __localization: TcHmi.Locale.PackageLocalization;
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __listDomainsSubscriptionId: number | null;
    protected __backgroundAction: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>;
    protected __closeButton: Popup.CloseButton<OkCancelPrompt.AvailableActions>;
    /**
     * Creates a new OkCancelPrompt instance.
     * @param localizations A collection of localization symbol expressions to localize texts in the control.
     * @param parentControl The control which owns the popup.
     */
    constructor(schema: TcHmi.JsonSchema | null, originalFilter: TcHmi.Filter, parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * Handler for the onPressed event of the OK button.
     */
    protected __onOkPressed(): void;
    /**
     * Handler for the onPressed event of the cancel button.
     */
    protected __onCancelPressed(): void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer().
     */
    protected __ok(): void;
    /**
     * Performs the action for the Cancel button.
     */
    protected __cancel(): void;
    /**
     * Performs the action for the Reset button.
     */
    protected __reset(): void;
    /**
     * Returns the original filter.
     */
    getOriginalFilter(): import("Beckhoff.TwinCAT.HMI.Framework/index.esm.js").Filter;
    /**
     * Sets what happens when the user clicks the background while the popup is showing, or when the prompt is
     * aborted via API call.
     * @param action The action to perform. If the popup should be closed, you can specify ok or cancel to perform
     * the associated action.
     */
    setBackgroundAction(action: Popup.BackgroundAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * Sets if the close button should be used or not.
     * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
     */
    setCloseButton(button: Popup.CloseButton<OkCancelPrompt.AvailableActions>): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Defines whether to show the button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Performs the given action.
     */
    protected __performPromptAction(toPerform: Popup.PromptAction<OkCancelPrompt.AvailableActions>): void;
    /**
     * Updates the filter configuration.
     * @param filter The current filter configuration.
     * @param resetable Whether the reset button should be enabled or disabled.
     */
    update(filter: TcHmi.Filter, _resetable: boolean): void;
    /**
     * Update the visual representation of the filter
     */
    protected __update(): void;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup and clears the content of the table if necessary.
     */
    hide(): void;
    /**
     * Clears the content of the table.
     */
    protected __clear(): void;
    /**
     * Creates a new row for the filter configuration table.
     * @param indentation The indentation levels and whether this row marks the beginnig, end or middle of an indentation.
     * @param comparison The comparison to configure in this row.
     * @param logic The logic to configure in this row.
     */
    protected __createRow(indentation: FilterPrompt.GroupingLevel[], parent: FilterPrompt.FilterNesting, comparison: TcHmi.Comparison, logic?: TcHmi.LogicOperator): HTMLTableRowElement;
    /**
     * Updates the controls for comparator and value after path has been changed or row has been created.
     * @param row An object containing the filter objects, table cell elements and controls
     */
    protected __updateControls(row: FilterPrompt.RowData): void;
    /**
     * Gets the pathInfo for a given path.
     * @param path The path to get info for.
     */
    protected __getPathInfo(path?: string): _FilterPrompt.PathInfo | null;
    /**
     * Adds the given row to the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
     * @param row The row to select
     */
    protected __selectRow(row: FilterPrompt.SelectedRow): void;
    /**
     * Removes the given row from the __selectedRows collection and enables/disables remove, group and ungroup buttons accordingly.
     * @param row The row to deselect
     */
    protected __deselectRow(row: FilterPrompt.SelectedRow): void;
    /**
     * Adds a new row below the lowest selected row or at the end of the table.
     */
    protected __add(): void;
    /**
     * Removes the selected rows.
     */
    protected __remove(): void;
    /**
     * Groups the selected rows if possible.
     */
    protected __group(): void;
    /**
     * Ungroups the selected rows if possible.
     */
    protected __ungroup(ungroupInfo: {
        parent: FilterPrompt.FilterNesting;
        toUngroup: FilterPrompt.FilterNesting;
    }, rows: FilterPrompt.SelectedRow[]): void;
    /**
     * Enables/disables remove, group and ungroup buttons according to currently selected rows.
     */
    protected __processSelection(): void;
    /**
     * Resizes indentation header to match the table content.
     */
    protected __resizeIndentationHeader(): void;
    /**
     * Generates a string consisting of the parentControlId, the name of the popup and a guid to be used as a control id.
     */
    protected __newControlId(): string;
    /**
     * Clones a nesting object while leaving references to filters intact
     * @param nesting The object to clone
     */
    protected __cloneNesting(nesting: FilterPrompt.FilterNesting): FilterPrompt.FilterNesting;
    /**
     * Parses a JsonSchema into an object detailing which paths are available with which comparators and values.
     * @param schema The JsonSchema to parse.
     */
    protected __parseSchema(schema: TcHmi.JsonSchema | null): {
        schemaInfo: FilterPrompt.SchemaInfo;
        localizationInfo: FilterPrompt.PathInfo[];
        domainPaths: string[];
    };
    /**
     * Localizes enum labels and updates comboboxes using them.
     */
    protected __localizeEnumLabels(): void;
    /**
     * Subscribes to ListDomains and updates the schemaInfo, if paths containing "domain" exist in the schemaInfo.
     */
    protected __subscribeListDomains(): void;
}
export declare namespace FilterPrompt {
    interface SchemaInfo {
        availablePaths: Map<string, PathInfo>;
        freePath: PathInfo | null;
        availableLogic: string[];
    }
    interface PathInfo {
        comparators: string[];
        values: any[];
        labels: Map<string | number, string>;
        localizedLabels: Map<string | number, string>;
        allowFreeValue: boolean;
        valueIsDate: boolean;
        valueType: 'string' | 'number' | 'integer' | 'boolean' | 'any';
        nullable: boolean;
        isSuggestion: boolean;
    }
    interface RowData {
        row: HTMLTableRowElement;
        logicOperator?: TcHmi.LogicOperator;
        comparison: TcHmi.Comparison;
        parent: FilterNesting;
        selection: {
            control: TcHmiCheckbox;
            destroyer: TcHmi.DestroyFunction;
        };
        logic?: {
            control: TcHmiCombobox<TcHmi.LogicOperator['logic']>;
            destroyer: TcHmi.DestroyFunction;
        };
        path: {
            control: TcHmiCombobox | TcHmiTextbox | null;
            destroyer: TcHmi.DestroyFunction | null;
        };
        comparator: {
            cell: HTMLTableCellElement;
            control: TcHmiCombobox<string, TcHmiCombobox_ListItemGeneric<string>[]> | null;
            destroyer: TcHmi.DestroyFunction | null;
        };
        value: {
            cell: HTMLTableCellElement;
            control: TcHmiCombobox | TcHmiTextbox | TcHmiDateTimeInput | null;
            destroyer: TcHmi.DestroyFunction | null;
        };
    }
    interface SelectedRow {
        rowElement: HTMLTableRowElement;
        comparison: TcHmi.Comparison;
        parent: FilterNesting;
    }
    interface FilterNesting {
        filter: TcHmi.Filter;
        parent: FilterNesting | null;
    }
    interface GroupingLevel {
        opens: boolean;
        closes: boolean;
    }
}
import _FilterPrompt = FilterPrompt;
declare global {
    namespace TcHmi.Controls.Helpers {
        let FilterPrompt: typeof _FilterPrompt;
        type FilterPrompt = _FilterPrompt;
        namespace FilterPrompt {
            type SchemaInfo = _FilterPrompt.SchemaInfo;
            type PathInfo = _FilterPrompt.PathInfo;
            type RowData = _FilterPrompt.RowData;
            type SelectedRow = _FilterPrompt.SelectedRow;
            type FilterNesting = _FilterPrompt.FilterNesting;
            type GroupingLevel = _FilterPrompt.GroupingLevel;
        }
    }
}
//# sourceMappingURL=FilterPrompt.d.ts.map