import { Callback, Symbol } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Server, DestroyFunction, FormattedLocalizable, Localizable } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiRecipeEdit } from './TcHmiRecipeEdit.esm.js';
import { RecipeReferenceEditor, type LocalizableTexts as RecipeReferenceEditor_LocalizableTexts } from './RecipeReferenceEditor.js';
import { type ParsedRecipeType, type RecipeTypeMember } from './RecipeTypeParser.js';
import { EditorFactory } from '../Helpers/TcHmiJsonEditors/EditorFactory.js';
import { Editor } from '../Helpers/TcHmiJsonEditors/BaseEditors/Editor.js';
export declare class RecipeEditor {
    #private;
    protected __element: HTMLDivElement;
    protected __parentControl: TcHmiRecipeEdit;
    protected __tableBody: HTMLTableSectionElement;
    protected __recipeManagementDomain: string | null;
    protected __recipe: Server.RecipeManagement.Recipe | null;
    protected __recipeName: string | null;
    protected __recipeTypeName: string | null;
    protected __editorFactory: EditorFactory;
    protected __editors: Map<string, Editor<any> | RecipeReferenceEditor>;
    protected __tableHeaders: {
        name: HTMLTableCellElement;
        value: HTMLTableCellElement;
        min: HTMLTableCellElement;
        max: HTMLTableCellElement;
        unit: HTMLTableCellElement;
        comment: HTMLTableCellElement;
    };
    protected __localizations: Partial<LocalizableTexts> | undefined;
    protected __localizationSymbols: Map<string, {
        symbol: Symbol<string>;
        destroyWatch: DestroyFunction;
    }>;
    protected readonly __onChangeManager: Callback.Collection<(editor: RecipeEditor) => void>;
    readonly onChange: Readonly<{
        add: (callback: (editor: RecipeEditor) => void) => () => void;
        remove: (callback: (editor: RecipeEditor) => void) => void;
    }>;
    /**
     * Creates a new RecipeEditor.
     * @param __element The element hosting the editor.
     * @param __parentControl The parent control of the editor.
     */
    constructor(__element: HTMLDivElement, __parentControl: TcHmiRecipeEdit);
    /**
     * Destroys the recipe editor.
     */
    destroy(): void;
    /**
     * Populates the editor with members of a recipe type and optionaly values of a given recipe.
     * @param recipeType The recipe type or the name of a recipe type for the recipe that should be edited.
     * @param recipe The recipe to be edited.
     */
    populate(recipeType: {
        name: string;
        recipeType?: Server.RecipeManagement.RecipeType;
    }, recipe: {
        name: string;
        recipe?: Server.RecipeManagement.Recipe;
    }): Promise<void>;
    /**
     * Clears the recipe editor.
     */
    clear(): void;
    /**
     * Removes all elements from the table body.
     */
    protected __clearTableBodyAndEditors(): void;
    /**
     * Creates the table content for the given recipe type and recipe.
     * @param recipeType The type of the recipe to edit.
     * @param recipe The recipe to edit.
     */
    protected __render(recipeType: ParsedRecipeType, recipe?: Server.RecipeManagement.Recipe): void;
    /**
     * Creates a table row for a single recipe type member.
     * @param member The member of the recipe type.
     * @param value The value of the member.
     */
    protected __createMemberRow(member: RecipeTypeMember, value?: any): HTMLTableRowElement;
    /**
     * Handler for the change events of the editors.
     */
    protected __onEditorChanged(): void;
    /**
     * Set the currently edited recipes values to the passed in values.
     * @param recipe A recipe containing the new values.
     */
    setRecipeValues(recipe: Server.RecipeManagement.Recipe): void;
    /**
     * Returns the current editor state, including whether the entered values are valid and if yes, the recipe
     * values and change status.
     */
    getState(): State;
    /**
     * Returns the name of the currently edited recipe. Returns null if no recipe is currently being edited.
     */
    getRecipeName(): string | null;
    /**
     * Returns whether the currently edited recipe already exists or is new
     */
    recipeExists(): boolean;
    /**
     * Confirms that the current value has been saved
     */
    confirmSave(): void;
    /**
     * Sets the RecipeManagementDomain. The calling code should verify that the domain is valid and active. If the domain becomes invalid or inactive, this setter should be called with null.
     * @param domain The domain of the recipe management extension on the server.
     */
    setRecipeManagementDomain(domain: string | null): void;
    /**
     * Returns the current RecipeManagementDomain.
     */
    getRecipeManagementDomain(): string | null;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
    /**
     * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
     * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
     * @param localization The localization to watch.
     * @param onChange The callback that is called with the localized and formatted text as a parameter.
     */
    protected __watchLocalization(name: string, localization: FormattedLocalizable, onChange: (localizedText: string) => void): void;
}
export type State = {
    isValid: false;
} | {
    isValid: true;
    value: Server.RecipeManagement.Recipe;
    recipeName: string;
    recipeTypeName: string;
    hasChanges: boolean;
};
export interface LocalizableTexts {
    tableHeaderName: Localizable;
    tableHeaderValue: Localizable;
    tableHeaderMin: Localizable;
    tableHeaderMax: Localizable;
    tableHeaderUnit: Localizable;
    tableHeaderComment: Localizable;
    editorLocalizations: Partial<Editor.LocalizableTexts>;
    recipeReferenceEditorLocalizations: Partial<RecipeReferenceEditor_LocalizableTexts>;
}
//# sourceMappingURL=RecipeEditor.d.ts.map