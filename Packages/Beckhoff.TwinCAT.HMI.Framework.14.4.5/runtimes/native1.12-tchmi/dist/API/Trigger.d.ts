import type { baseTcHmiControl } from '../Controls/System/baseTcHmiControl.js';
import type { Context } from './_Types.js';
import type * as IFunction from './IFunction.js';
export * as Actions from './Trigger.Actions.js';
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isCondition(obj: Action): obj is Condition;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isSwitchCase(obj: Action): obj is SwitchCase;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isControlApiFunction(obj: Action): obj is ControlApiFunction;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isWriteToSymbol(obj: Action): obj is WriteToSymbol;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isComment(obj: Action): obj is Comment;
/**
 * Check if an object is a Function.
 * @param obj object to test
 */
export declare function isFunction(obj: Action): obj is TAFunction;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isJavaScript(obj: Action): obj is JavaScript;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isActionTemplate(obj: Action): obj is ActionTemplate;
/**
 * Check if an object is a FunctionExpression.
 * @param obj object to test
 */
export declare function isFunctionExpression(obj: Action): obj is FunctionExpression;
/**
 * Check if an object is a ControlAttributeBindingTarget.
 * @param obj object to test
 */
export declare function isControlAttributeBindingTarget(obj: BindingTarget): obj is ControlAttributeBindingTarget;
export interface RegisterContext<T1 = any> extends Context<T1> {
    /**
     * The control that registers this trigger. The control will always set this to itself.
     */
    owner?: baseTcHmiControl;
}
export interface baseAction {
    /** Should action be active? Defaults to true. */
    active?: boolean;
    /** Should action be collapsed? Not used in runtime */
    collapsed?: boolean;
    /** Async Wait */
    asyncWait: boolean;
    /** Success callback action list. */
    success: Action[];
    /** Error callback action list. */
    error: Action[];
}
export type Action = Condition | Comment | SwitchCase | ControlApiFunction | WriteToSymbol | TAFunction | JavaScript | ActionTemplate | FunctionExpression;
export interface ConditionIf {
    if: Expression[];
    then?: Action[] | null;
    /** Used by creator only. */
    showThenActions?: boolean;
}
export interface ConditionElseIf {
    elseif: Expression[];
    then?: Action[] | null;
    /** Used by creator only. */
    showThenActions?: boolean;
}
export interface ConditionElse {
    else: Action[];
    /** Used by creator only. */
    showThenActions?: boolean;
}
export interface Condition extends baseAction {
    /** Definition of the action type. */
    objectType: 'Condition';
    parts: (ConditionIf | ConditionElseIf | ConditionElse)[];
}
export interface SwitchCase extends baseAction {
    /** Definition of the action type. */
    objectType: 'SwitchCase';
    /** An object of type {Compare} which contains the target switch value. */
    compare: IFunction.Value;
    cases: VCase[];
    caseDefault: DCase;
}
export interface ControlApiFunction extends baseAction {
    /** Definition of the action type. */
    objectType: 'ControlApiFunction';
    /** The id of the target control as string value. */
    control: string;
    /** The name of the target api function. */
    fn: string;
    /** An array of {ParamValue} objects. Each element in the array represents a parameter of the function defined in "fn". */
    fnParams: IFunction.Value[];
}
export interface WriteToSymbol extends baseAction {
    /** Definition of the action type. */
    objectType: 'WriteToSymbol';
    /** The target binding symbol as binding expression. */
    symbolExpression: string | null;
    /** An object of type {Value}. */
    value: IFunction.Value;
}
/** Free comment. Will be ignored on runtime. */
export interface Comment {
    /** Definition of the action type. */
    objectType: 'Comment';
    /** Free comment. Will be ignored on runtime. */
    comment?: string;
    active?: undefined;
    success?: undefined;
    error?: undefined;
    asyncWait?: undefined;
}
export interface TAFunction extends baseAction {
    /** Definition of the action type. */
    objectType: 'Function';
    /** The name of the target setter function which is public accessible in the control defined in "Control". */
    fn: string;
    /** An array of {ParamValue} objects. Each element in the array represents a parameter of the setter function defined in "Fn". */
    fnParams: IFunction.Value[];
}
export interface JavaScript extends baseAction {
    /** Definition of the action type. */
    objectType: 'JavaScript';
    /**
     * An array of string objects. Each string in the array represents one line of code.
     * To avoid invalidation of the TcHmiConfig it is important to escape quotationmarks.
     */
    sourceLines: string[];
    /** Tells the system if the function is finished synchronous or if the user will call a feedback function of the context object. */
    waitMode?: 'Synchronous' | 'Asynchronous';
}
export interface ActionTemplate extends baseAction {
    /** Definition of the action type. */
    objectType: 'ActionTemplate';
    /** The name of the target ActionTemplate.*/
    templateName: string;
    /** A long description of this Action Template. */
    description: string;
    /** An array of {ParamValue} objects. Each element in the array represents a parameter which will be used inside the ActionTemplate */
    fnParams: IFunction.Value[];
}
export interface FunctionExpression extends baseAction {
    /** Definition of the action type. */
    objectType: 'FunctionExpression';
    functionExpression: string | null;
}
export interface BindingTarget {
    /**
     * The object type name as {string}.
     * Extensions:
     * {BindingTarget}.objectType = "ControlAttributeBindingTarget"
     */
    objectType: string;
}
export interface ControlAttributeBindingTarget extends BindingTarget {
    objectType: 'ControlAttributeBindingTarget';
    attributeExpression: string | null;
}
export interface Expression {
    /** An object of type {Value} which represents a value which will be compared. */
    compare1: IFunction.Value;
    /** An object of type {Value} which represents a value which will be compared. */
    compare2: IFunction.Value;
    /**
     * A string value which contains the compare operator string (JavaScript) which will be used to compare the values behind the properties "Compare1" and "Compare2".
     */
    compareOperator: '==' | '===' | '!=' | '!==' | '<' | '<=' | '>' | '>=';
    /**
     * A string|null value which defines the logical binding of the current element to the previous element.
     *
     * The property has to be set to null if its the first {Expression} object in the Expressions array.
     */
    logic: 'AND' | 'OR' | null;
}
export interface Case {
    actions: Action[];
}
/** Value Case */
export interface VCase extends Case {
    /** Configured Value to compare */
    caseValue: IFunction.Value;
}
/** Default Case */
export interface DCase extends Case {
}
export interface Trigger {
    /** A string value which contains the target event name. */
    event: string;
    /** preventDefault() should be called in this trigger */
    preventDefault?: true;
    /** An array of {Action} objects. Each Event can contain 1 ... n {Action} objects. */
    actions: Action[];
    /** Context for the trigger that can be accessed via %ctx% expressions */
    ctx?: RegisterContext;
}
//# sourceMappingURL=Trigger.d.ts.map