import type { ControlAccessDescription } from './Controls.js';
import type * as Trigger from './Trigger.js';
import type * as TcSpeech from './TcSpeech.js';
import type * as Keyboard from './Keyboard.js';
/**
 * Turns a subset of optional properties of an object type into required properties.
 * Example: SelectableRequired<TcHmi.Context, 'success' | 'error'>
 * This will turn success and error to required and keep everything else as it is defined in TcHmi.Context.
 * @preserve (Part of the public API)
 */
export type SelectableRequired<T, K extends keyof T> = {
    [S in K]-?: T[S];
} & {
    [P in keyof T]: T[P];
};
/**
 * Turns a subset of required properties of an object type into optional properties.
 * Example: SelectableOptional<Events.Message, 'sourceDomain'>
 * This will turn deprecated sourceDomain to optional and keep everything else as it is defined in TcHmi.Message.
 * @preserve (Part of the public API)
 */
export type SelectableOptional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
/**
 * Add null to all properties of T
 * @preserve (Part of the public API)
 **/
export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
/**
 * Creates an exact result type for Object.entries() with precise type for the key and value.
 * Use like this:
 * Object.entries(myVar) as ObjectEntries<typeof myVar>
 * @preserve (Part of the public API)
 */
export type ObjectEntries<T> = [keyof T, Required<T>[keyof T]][];
/**
 * A generic Context interface.
 * @preserve (Part of the public API)
 */
export interface Context<T1 = any> {
    /** Should be called if there is no error with an optional result. */
    success?: (result?: T1) => void;
    /**
     * Should be called if there is an error.
     * Must provide an error code and optional more details.
     */
    error?: (error: Errors, details?: IErrorDetails) => void;
    /** Contains event argument data if current context is an event trigger. */
    args?: any[];
    /** Optional additional properties */
    [additionalProperty: string]: any;
}
export declare const enum LOG_LEVEL {
    Performance = -1,
    None = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Debug = 4
}
export interface EventContext<T1 = any> extends Context<T1> {
    /** Name of the event which is being handled. */
    name: string;
}
export interface FunctionExpressionContext<T1 = any> extends Context<T1> {
    /** Determines if the caller expects the called context to watch symbol references on its own and reports changes back via success function. */
    delegatedWatch?: boolean;
    /** Function which can be injected in the context object by the called context. It will be called by the context caller when the context has to be destroyed.*/
    destroy?: DestroyFunction;
}
/**
 * IErrorDetails extends the server error object to allow framework specific error details and server specific error details in one object.
 * Objects of this type are optionally extended with framework specific properties.
 * Based on Protocol.Schema.json#/definitions/errorDetails of TcHmiServer
 */
export interface IErrorDetails {
    /** The error code. */
    code: Errors | number;
    /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
    message?: string;
    /** Plaintext description of the error. */
    reason?: string;
    /** The name of the server or framework domain where the error occurred. */
    domain?: string;
    /** Optional Error object for exceptions */
    exception?: Error;
    /** A list of errors which lead to the current error. */
    errors?: IErrorDetails[] | undefined;
}
/** () => void */
export interface DestroyFunction {
    (): void;
}
export type FontFamily = string;
export type AngleUnit = 'deg' | 'rad' | 'turn' | 'grad';
export type BorderStyleValue = 'Solid' | 'Dashed' | 'Dotted' | 'None';
export type DimensionUnit = 'px' | '%';
export type FontSizeUnit = 'px' | '%' | 'em' | 'rem';
export type FontStyle = 'Normal' | 'Italic' | 'Oblique' | 'Auto';
export type FontWeight = 'Normal' | 'Bold' | 'Auto';
export type HorizontalAlignment = 'Left' | 'Center' | 'Right';
export type ScaleModeString = 'None' | 'ScaleToFill' | 'ScaleToFit' | 'ScaleToFitWidth' | 'ScaleToFitHeight';
export type SizeMode = 'Value' | 'Parent';
export type SizeModeWithContent = 'Value' | 'Parent' | 'Content';
export type ToggleState = 'Normal' | 'Active';
export type VerticalAlignment = 'Top' | 'Center' | 'Bottom';
/** Hidden still uses space in fluid calculations, collapsed is ignored there.*/
export type Visibility = 'Visible' | 'Hidden' | 'Collapsed';
export interface Version {
    full: string;
    fullSemVer?: string;
    major: number;
    minor: number;
    build: number;
    revision: number;
    preTag?: string;
}
export interface IResultObject {
    /** Global error code of this result object */
    error: Errors;
    /** Detailed (recursive?) error of this result object */
    details?: IErrorDetails | undefined;
}
export type SymbolTag = 's' | 'i' | 'l' | 'pp' | 'tp' | 'f' | 'ctrl' | 'ctx' | 'tr' | 't' | 'pkg';
export declare enum SymbolType {
    Invalid = 0,
    Server = 10,// Used for symbols with expression -> %s%...%/s%
    Internal = 20,// Used for symbols with expression -> %i%...%/i%
    LocalizedText = 30,// Used for symbols with expression -> %l%...%/l%
    PartialParam = 40,// Used for symbols with expression -> %pp%...%/pp%
    TemplateParam = 50,// Used for symbols with expression -> %tp%...%/tp%
    Function = 60,// Used for symbols with expression -> %f%...%/f%
    Control = 70,// Used for symbols with expression -> %ctrl%...%/ctrl%
    Context = 80,// Used for symbols with expression -> %ctx%...%/ctx%
    ThemedResource = 90,// Used in for symbols with getExpression() -> %tr%...%/tr%
    Timer = 100,// Used for timer symbols: %t%...%/t%
    Package = 110
}
/**
 * A symbol expression string like "%s%Symbol%/s%".
 */
export type SymbolExpressionString<ST extends SymbolTag = SymbolTag> = ST extends ST ? `%${ST}%${string}%/${ST}%` : never;
export type AllowSymbolExpressionsAsValues<T, ST extends SymbolTag = SymbolTag> = T | (T extends object ? {
    [P in keyof T]: AllowSymbolExpressionsAsValues<T[P], ST>;
} : never) | SymbolExpressionString<ST>;
export type BindingMode = 'OneWay' | 'TwoWay';
export interface baseColor {
}
export type Color = SolidColor | LinearGradientColor;
export interface SolidColor extends baseColor {
    /**
     * <color> CSS data type for a solid color.
     * It is defined with 'none' instead of 'transparent'.
     * Therefor use StyleProvider.resolveSolidColorAsCssValue API before pushing it into the DOM.
     */
    color: string;
}
export interface LinearGradientColor extends baseColor {
    angle: number | string;
    stopPoints: StopPoint[];
}
export interface StopPoint {
    color: string;
    stop?: string;
}
/** A color as an object with rgba parts from 0 to 255 */
export interface RGBAColor {
    /** part red of the color from 0 to 255 */
    r: number;
    /** part green of the color from 0 to 255 */
    g: number;
    /** part blue of the color from 0 to 255 */
    b: number;
    /** part alpha of the color from 0 to 255 */
    a: number;
}
export interface baseFourSidedCss {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface FourSidedCss extends baseFourSidedCss {
    leftUnit?: DimensionUnit;
    topUnit?: DimensionUnit;
    rightUnit?: DimensionUnit;
    bottomUnit?: DimensionUnit;
}
export interface PixelFourSidedCss extends baseFourSidedCss {
    leftUnit?: 'px';
    topUnit?: 'px';
    rightUnit?: 'px';
    bottomUnit?: 'px';
}
export type BorderWidth = PixelFourSidedCss;
export interface BorderStyle {
    left: BorderStyleValue;
    top: BorderStyleValue;
    right: BorderStyleValue;
    bottom: BorderStyleValue;
}
export interface BorderRadius {
    topLeft: number;
    topLeftUnit?: DimensionUnit;
    topRight: number;
    topRightUnit?: DimensionUnit;
    bottomRight: number;
    bottomRightUnit?: DimensionUnit;
    bottomLeft: number;
    bottomLeftUnit?: DimensionUnit;
}
export interface BoxShadow {
    /** Color of this Box Shadow */
    color: SolidColor | null;
    /** The Shadow Offset */
    offsetX?: number | null;
    offsetXUnit?: DimensionUnit;
    /** The Shadow Offset */
    offsetY?: number | null;
    offsetYUnit?: DimensionUnit;
    /** Inset shadows are drawn inside the border (even transparent ones), above the background, but below content. */
    inset?: boolean;
    /** The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. */
    blur?: number | null;
    blurUnit?: DimensionUnit;
    /** Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. */
    spread?: number | null;
    spreadUnit?: DimensionUnit;
}
export interface Background {
    color: Color | null;
    image: string | null;
    imageWidth: number | null;
    imageWidthUnit: DimensionUnit;
    imageHeight: number | null;
    imageHeightUnit: DimensionUnit;
    imageHorizontalAlignment: HorizontalAlignment;
    imageVerticalAlignment: VerticalAlignment;
    imagePadding: FourSidedCss | null;
}
/**
 * The base transform interface. All transform operations must extend this interface and set transformType accordingly.
 */
export interface baseTransform {
    /**
     * Specifies which type of transform should be performed.
     * Currently supported values: Translate, Rotate, Scale, Skew, Origin, Perspective.
     */
    transformType: string;
}
export type Transform = Translate | Rotate | Scale | Skew | Origin | Perspective;
/**
 * Translate an element. transformType must be "Translate".
 */
export interface Translate extends baseTransform {
    transformType: 'Translate';
    /**
     * Translate in x axis direction. Defaults to 0 if not provided.
     */
    x?: number;
    /**
     * The unit to use for the translation in x axis direction. Supported values: px, %. Defaults to px if not provided.
     */
    xUnit?: DimensionUnit;
    /**
     * Translate in y axis direction. Defaults to 0 if not provided.
     */
    y?: number;
    /**
     * The unit to use for the translation in y axis direction. Supported values: px, %. Defaults to px if not provided.
     */
    yUnit?: DimensionUnit;
    /**
     * Translate in z axis direction. Defaults to 0 if not provided.
     */
    z?: number;
    /**
     * The unit of the transform origin z coordinate. Supported values: px. Defaults to px if not provided.
     */
    zUnit?: 'px';
}
/**
 * Rotate an element. transformType must be "Rotate".
 */
export interface Rotate extends baseTransform {
    transformType: 'Rotate';
    /**
     * The angle to rotate the element.
     */
    angle: number;
    /**
     * The unit to use for the rotation. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
     */
    angleUnit?: AngleUnit;
    /**
     * The vector to rotate around. Defaults to { x: 0, y: 0, z: 1} if not provided.
     */
    vector?: {
        x: number;
        y: number;
        z: number;
    };
}
/**
 * Scale an element. transformType must be "Scale".
 */
export interface Scale extends baseTransform {
    transformType: 'Scale';
    /**
     * Scale in x axis direction. Defaults to 1 if not provided.
     */
    x?: number;
    /**
     * Scale in y axis direction. Defaults to 1 if not provided.
     */
    y?: number;
    /**
     * Scale in z axis direction. Defaults to 1 if not provided.
     */
    z?: number;
}
/**
 * Skew an element. transformType must be "Skew".
 */
export interface Skew extends baseTransform {
    transformType: 'Skew';
    /**
     * Skew x axis. Defaults to 0 if not provided.
     */
    xAngle?: number;
    /**
     * The unit to use for the x axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
     */
    xAngleUnit?: AngleUnit;
    /**
     * Skew y axis. Defaults to 0 if not provided.
     */
    yAngle?: number;
    /**
     * The unit to use for the y axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
     */
    yAngleUnit?: AngleUnit;
}
/**
 * Set the origin of transforms for an element. Should be only used once per transform list. If multiple origins are specified only the last one is used.
 * transformType must be "Origin".
 */
export interface Origin extends baseTransform {
    transformType: 'Origin';
    /**
     * The transform origin x coordinate. Defaults to 50 if not provided. If this and xUnit are not provided, xUnit will default to % to center the origin on the element.
     */
    x?: number;
    /**
     * The unit of the transform origin x coordinate. Defaults to % if x is not provided. Otherwise defaults to px.
     */
    xUnit?: DimensionUnit;
    /**
     * The transform origin y coordinate. Defaults to 50 if not provided. If this and yUnit are not provided, yUnit will default to % to center the origin on the element.
     */
    y?: number;
    /**
     * The unit of the transform origin y coordinate. Defaults to % if y is not provided. Otherwise defaults to px.
     */
    yUnit?: DimensionUnit;
    /**
     * The transform origin z coordinate. Defaults to 0 if not provided.
     */
    z?: number;
    /**
     * The unit of the transform origin z coordinate. Defaults to px if not provided. Percentage is not supported for z coordinate.
     */
    zUnit?: 'px';
}
/**
 * Sets the perspective for 3D transforms on an element. Should be only used once per transform list. If multiple perspectives are specified only the last one is used.
 * transformType must be "Perspective".
 */
export interface Perspective extends baseTransform {
    transformType: 'Perspective';
    /**
     * The distance to use for the perspective. Visualize this as the distance between the user and the transformed element. The shorter the distance, the extremer the transforms appear.
     */
    distance: number;
    /**
     * The unit of the distance. Supported values: px, %. Defaults to px if not provided.
     */
    distanceUnit?: DimensionUnit;
    /**
     * The origin of the perspective. Default behaviour is the same as transform origin.
     */
    origin?: {
        x?: number;
        xUnit?: DimensionUnit;
        y?: number;
        yUnit?: DimensionUnit;
    };
}
/**
 * Key/Value pair in a plain JS Object
 */
export interface Dictionary<T> {
    [index: string]: T;
}
/**
 * JSON Schema defines a JSON based format for defining the structure of JSON data.
 */
export interface nativeJsonSchema {
    $ref?: string;
    /**
     * This is important because it tells refs where
     * the root of the document is located
     */
    id?: string;
    /**
     * It is recommended that the meta-schema is
     * included in the root of any JSON Schema
     */
    $schema?: string;
    /**
     * Title of the schema
     */
    title?: string;
    /**
     * Schema description
     */
    description?: string;
    /**
     * Default json for the object represented by
     * this schema
     */
    default?: any;
    /**
     * The value must be a multiple of the number
     * (e.g. 10 is a multiple of 5)
     */
    multipleOf?: number;
    maximum?: number;
    /**
     * If true maximum must be > value, >= otherwise
     */
    exclusiveMaximum?: boolean;
    minimum?: number;
    /**
     * If true minimum must be < value, <= otherwise
     */
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    /**
     * This is a regex string that the value must
     * conform to
     */
    pattern?: string;
    format?: 'date-time' | 'timespan' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'int64' | 'base64';
    /**
     * Defines what type additional item have
     * when they are not described in `items` schema array.
     */
    additionalItems?: boolean | JsonSchema;
    /**
     * Defines the array items.
     * If this is an array the first schema describes the first item in the array and so on.
     */
    items?: JsonSchema | JsonSchema[];
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    additionalProperties?: boolean | JsonSchema;
    /**
     * Holds simple JSON Schema definitions for
     * referencing from elsewhere.
     */
    definitions?: {
        [key: string]: JsonSchema;
    };
    /**
     * The keys that can exist on the object with the
     * json schema that should validate their value
     */
    properties?: {
        [property: string]: JsonSchema;
    };
    /**
     * The key of this object is a regex for which
     * properties the schema applies to
     */
    patternProperties?: {
        [pattern: string]: JsonSchema;
    };
    /**
     * If the key is present as a property then the
     * string of properties must also be present.
     * If the value is a JSON Schema then it must
     * also be valid for the object if the key is
     * present.
     */
    dependencies?: {
        [key: string]: JsonSchema | string[];
    };
    /**
     * Indicates that a value should not be modified
     */
    readOnly?: boolean;
    /**
     * Enumerates the values that this schema can be
     * e.g.
     * {"type": "string", "enum": ["red", "green", "blue"]}
     */
    enum?: any[];
    /**
     * The basic type of this schema, can be one of
     * [string, number, object, array, boolean, null]
     * or an array of the acceptable types
     */
    type?: JsonDataTypeNames | JsonDataTypeNames[];
    allOf?: JsonSchema[];
    anyOf?: JsonSchema[];
    oneOf?: JsonSchema[];
    /**
     * The entity being validated must not match this schema
     */
    not?: JsonSchema;
}
export type JsonDataTypeNames = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'integer';
/**
 * JSON Schema defines a JSON based format for defining the structure of JSON data.
 */
export interface JsonSchema extends nativeJsonSchema {
    /**
     * Custom general extension to model relations from 0 to n original $ref resources used within the current schema when
     * id can not be used because the schema was merged.
     */
    base?: string | string[];
    /** Custom server related extension to define the property ordering */
    propertyOrder?: number;
    /** Custom server related extension to model the beginning of the plc index. */
    startOffset?: number;
    /** Custom server related extension to describe symbol related attributes. */
    attributes?: Dictionary<any>;
    /** Custom server related extension to describe symbol related format minimum. */
    formatMinimum?: string;
    /** Custom server related extension to describe symbol related format maximum. */
    formatMaximum?: string;
    /**
     * Custom framework related extension to describe an instanceof class while type is 'object'.
     * See tchmi:framework#/definitions/Symbol for further information.
     */
    frameworkInstanceOf?: string;
    /**
     * If frameworkInstanceOf relates to TcHmi.Symbol frameworkSymbolSubType will contain the expected value type of the symbol.
     */
    frameworkSymbolSubType?: JsonSchema;
    /**
     * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the expected value type of the control.
     */
    frameworkControlNamespace?: string;
    /**
     * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the expected value type of the control.
     */
    frameworkControlType?: string;
    /**
     * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl and frameworkControlType relates to TcHmi.Controls.System.TcHmiUserControl frameworkUserControlConfig will contain the path to the expected usercontrol config.
     */
    frameworkUserControlConfig?: string;
    /**
     * Extension to identify types that should be handled by custom editors.
     */
    frameworkMetaType?: string;
    /**
     * Used by server to describe parameter of a function. The schema which holds writeValue will describe the return value of the function.
     */
    writeValue?: JsonSchema;
    /**
     * Used by the server to describe return value of a function.
     */
    readValue?: JsonSchema;
    /**
     * PLC comment
     */
    comment?: string;
    /**
     * Used to describe a conversion rules.
     */
    convert?: 'string' | 'number' | 'boolean' | 'bigint' | 'bigint64' | 'unsignedbigint64';
    /**
     * Used to describe members of an enum. This is optional for an enum definition in the server.
     */
    options?: {
        label: string;
        value: number;
    }[];
    addSymbol?: boolean;
    /**
     * Which properties to show as columns in the editor.
     */
    engineeringColumns?: string[];
    /**
     * Metadata about object properties that isn't covered by JSON Schema.
     */
    propertiesMeta?: {
        name: string;
        displayName: string;
        refTo?: string;
        category?: string;
        displayPriority?: number;
        description: string;
        defaultValue?: any;
        defaultValueInternal?: any;
    }[];
    /**
     * Used by server to describe available versions of a symbol.
     */
    versions?: number[];
    /**
     * Used by server to describe if a symbol is a function.
     */
    function?: boolean;
}
/**
 * One rule for a right corresponding to a group
 * example:
 * {
 * "accessright": "operate",
 * "group": "Admins",
 * "permission": "Allow"
 * }
 * or
 * {
 * "accessright" : "observe",
 * "group" : "Users",
 * "permission": "Allow"
 * }
 */
export interface AccessControl {
    /** Right which this rule defines. */
    accessright: string;
    /** Group to which this access right is given. */
    group: string;
    /** Permission for this access rule.
     * Allow of one group overrides Deny/Inherit of another group.
     * Deny will result in deny if we have no Allow of another group.
     * Inherit will ask parent control when we got no Allow/Deny.
     * If the parent does not define something there will be a specified default.
     */
    permission: 'Allow' | 'Deny' | 'Inherit';
}
/**
 * Allows a mapping of rights to parent control virtual rights. For example the 'operate' right of this control can be configured to react on a custom 'canStartPump' right of a parent control.
 * Example:
 * {
 * "virtualControlRight": "canStartPump",
 * "controlRight": "operate"
 * }
 */
export interface VirtualControlRightMapping {
    /** Name of the right which is configured on a parent control (aka outer right). */
    virtualControlRight: string;
    /** Name of the right which is working on this control (aka inner right). */
    controlRight: string;
}
/**
 * Endianness dictates the order in which the bytes encoding a number are stored.
 * Little Endian stores the least significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xB2, 0xA1].
 * Big Endian stores the most significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xA1, 0xB2].
 */
export declare enum Endianness {
    LittleEndian = 0,
    BigEndian = 1
}
export interface SortingInfo {
    name?: string;
    order: 'Ascending' | 'Descending';
}
/**
 * Maps the filtered, sorted, and paged values of hierarchical data structures to their original positions
 * The index is hierarchical and is build by the indices of all preceeding parent element and the index of the element itself.
 * Example:
 * ```json
 * [
 *      {
 *          "index": [0],
 *          "children": [
 *              {
 *                  "index": [0, 0]
 *              },
 *              {
 *                  "index": [0, 1],
 *                  "children": [
 *                      {
 *                          "index": [0, 1, 0]
 *                      }
 *                  ]
 *              }
 *          ]
 *      },
 *      {
 *          "index": [1],
 *          "children": [
 *              {
 *                  "index": [1, 0]
 *              },
 *              {
 *                  "index": [1, 1]
 *              }
 *          ]
 *      }
 * ]
 * ```
 */
export interface HierarchicalFilterMap {
    /** List of indices to address a data object in a nested array or object */
    index: number[];
    children?: HierarchicalFilterMap[];
}
export interface Filter extends Array<Comparison | LogicOperator | Filter> {
}
export interface Comparison {
    path?: string;
    comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
    value: string | number | Date | boolean | null;
}
export interface LogicOperator {
    logic: 'AND' | 'OR';
}
export declare enum PartialType {
    Invalid = 0,
    View = 1,
    Content = 2,
    UserControl = 3
}
/**
 * Defines tchmiconfig.json
 */
export interface IConfig {
    /** Project version as defined by the customer */
    projectVersion: string;
    /** Splash screen settings */
    splash: {
        versionSource: 'None' | 'Project' | 'Framework';
    };
    /**
     * Path to the Framework Directory.
     * Please use TcHmi.Environment.getBasePath() instead.
     * The value from configuration file might differ from the real location at design and/or runtime due to dynamic computing.
     * @deprecated
     */
    basePath: string;
    /** Scalemode of the full Application. */
    scaleMode: ScaleModeString;
    /** Name of the View which is active while loading the Application. */
    startupView: string;
    /** Path to a custom login page. */
    loginPage?: string;
    /** Project based include files. */
    dependencyFiles?: (StylesheetFileDescription | JavaScriptFileDescription)[];
    /** Name of the Theme which is active while loading the Application. */
    activeTheme: string;
    /** List of Themes of this Application. Key is the themename. */
    themes: Dictionary<ProjectThemeDescription>;
    /** Configuration of the server communication. */
    tcHmiServer: {
        /** Default subscription interval time. */
        websocketIntervalTime: number;
        /** General websocket request/response timeout. */
        websocketTimeout: number;
        /** System websocket request/response timeout. */
        websocketSystemTimeout: number;
        /** Default symbol subscription mode. */
        websocketSubscriptionMode?: 'Change' | 'Poll' | 'ClientPoll' | 'ClientWriteConfirm';
        /**
         * Disables system subscriptions that are not necessary when no resources are created dynamically at runtime.
         * No symbol mappings created dynamically at runtime. No extensions plugged in at runtime. Etc.
         */
        disableOptionalSystemSubscriptions: boolean;
    };
    /** Definition of all project based symbols. */
    symbols: ISymbolConfig;
    /** Definition of global triggers. */
    trigger: Trigger.Trigger[];
    /** Definition of global intervals. */
    intervals: IIntervalConfig;
    /** List of packages.*/
    packages: IPackageInfo[];
    /** List of all available view files. */
    views: IView[];
    /** List of all available control files. */
    controls: IControl[];
    /** List of all available function files. */
    userFunctions: IUserFunction[];
    /** List of all available Usercontrols. */
    userControls: IUserControl[];
    /** List of all available content files. */
    content: IContent[];
    /** Definition of all available actionTemplates. */
    actionTemplates: ActionTemplate[];
    /** List of all available application level localization files (LocalizedText symbols). */
    languages: ILanguageFileMap;
    /** List of all available framework core localization file overrides. */
    languagesForFramework?: ILanguageFileMap;
    /** List of all available package localization file overrides. */
    languagesForPackages?: IModuleLanguageFileMapsMap;
    /** List of all available control module localization file overrides. */
    languagesForControls?: IModuleLanguageFileMapsMap;
    /** List of all available function module localization file overrides. */
    languagesForFunctions?: IModuleLanguageFileMapsMap;
    /**
     * Language file used if a language file or a key within a language file is missing.
     * Attention: Can be empty string!
     */
    languageFallback?: string;
    /** List of all available keyboard layout files in project. */
    keyboardLayouts: IProjectKeyboardLayout[];
    /** Disable various loading optimizations */
    disableLoadingOptimization?: boolean;
    tcSpeech?: TcSpeech.BaseConfig;
    /** Definition of engineering settings. */
    creatorSettings: {
        /** Definition of the viewport emulation. */
        viewport: {
            /** Width as a Pixel Number. */
            defaultWidth: number;
            /** Height as a Pixel Number. */
            defaultHeight: number;
        };
    };
    /** Definition of global binding settings. */
    binding: {
        /**
         * Determines how a binding will handle symbol related read/watch errors.
         * Possible values:
         * - Ignore: Ignore the error.
         * - Reset: Forward the default toggle switch (null) to force the control attribute to reset to default value.
         */
        symbolError: 'Ignore' | 'Reset';
        /**
         * Determines how a binding will handle symbol related write errors.
         * Possible values:
         * - Ignore: Ignore the error.
         * - ReadBack: Read back the current symbol value after write attempt failure and forward it to the control.
         */
        symbolWriteError: 'Ignore' | 'ReadBack';
    };
    /** Defines the system keyboard */
    systemKeyboard?: {
        /** Defines if the system keyboard should open on focus of a textarea or input element. */
        autoOpen?: boolean;
        /** Id of the keyboard provider */
        providerName: string;
        /** Definition of the keyboard mappings. Key is the locale. */
        projectKeyboardMapping?: Dictionary<Keyboard.InputModeMapping>;
        /** Layout of the system keyboard. */
        layout?: Keyboard.ContainerLayout;
    };
    systemPopups?: {
        /** Id of the popups provider. */
        providerName: string;
    };
}
export type LanguageFileMapEntry = string | string[];
/** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
export interface ILanguageFileMap extends Dictionary<LanguageFileMapEntry> {
}
/** Mapping between control and function type identifier to language filemap (which itself maps a language key to a file path (or file path array) value). */
export interface IModuleLanguageFileMapsMap extends Dictionary<ILanguageFileMap> {
}
export interface ISymbolConfig {
    /** Definition of all project based internal symbols (available via %i%symbolname%/i%). Key is the symbol name. */
    internal: {
        [symbolname: string]: IInternalSymbolItem;
    };
    /** Definition of all project based themedResource symbols (available via %tr%symbolname%/tr%). Key is the symbol name. */
    themedResources: {
        [symbolname: string]: IThemedResourceItem;
    };
    /** Definition of all project based timer symbols (available via %t%timer%/t%). Key is the symbol name. */
    timer: {
        [symbolname: string]: ITimerSymbolItem;
    };
    /**
     * Definition of all project based package symbols (available via %pkg%name%/pkg%). Key is the symbol name.
     * The package symbols listed here are only the package symbols originating from the current project.
     * Package symbols from other packages and related mappings are listed in the packages section.
     */
    package: {
        [symbolname: string]: IPackageSymbolDefinition;
    };
}
/** Definition of the internal symbol. */
export interface IInternalSymbolItem {
    /** Value for this internal symbol. */
    value?: any;
    /** Information about the expected type as a tchmi reference name. */
    type: string;
    /** The change of value is saved in the client and available after reload. Defaults to false if not provided. */
    persist?: boolean;
    /** The symbol can not be changed. Defaults to false if not provided. */
    readonly?: boolean;
}
/** Override settings for internal symbol from package. */
export interface IPackageInternalSymbolOverrideItem {
    /** Value for this internal symbol. */
    value?: any;
    /** The change of value is saved in the client and available after reload. Defaults to false if not provided. */
    persist?: boolean;
    /** The symbol can not be changed. Defaults to false if not provided. */
    readonly?: boolean;
}
/** Definition of the themedResource symbol. */
export interface IThemedResourceItem {
    /** Information about the expected type as a tchmi reference name */
    type: string;
    /** A Map containing a value for each theme. Key is the themename. */
    values: Dictionary<any>;
    /** A description of the themed resource. */
    description?: string;
}
/** Definition of the timer symbol. */
export interface ITimerSymbolItem {
    /** Value pattern for this timer symbol. */
    pattern: (ITimerSymbolValuePatternItem | ITimerSymbolSymbolPatternItem)[];
    /** SymbolExpression (Boolean) which controls the state of the timer. */
    runSymbol?: string;
    /** Value which is active when the timer is stopped. */
    stopValue?: any;
    /** Information about the expected type as a tchmi reference name. */
    type: string;
}
/** Override settings for timer symbol from package. */
export interface IPackageTimerSymbolOverrideItem {
    /** Value pattern for this timer symbol. */
    pattern: (ITimerSymbolValuePatternItem | ITimerSymbolSymbolPatternItem)[];
    /** SymbolExpression (Boolean) which controls the state of the timer. */
    runSymbol?: string;
    /** Value which is active when the timer is stopped. */
    stopValue?: any;
}
export interface IPackageSymbolDefinition {
    /** Information about the expected type as a tchmi reference name. */
    type: string;
    /** A description of the package symbol. */
    description: string;
    /** Category of the package symbol. */
    category: string;
}
export interface IPackageSymbolMapping {
    /** Information about the expected type as a tchmi reference name. */
    type: string;
    /** The mapped symbol. */
    symbol?: SymbolExpressionString;
}
/** Definition of a timer symbol pattern. */
export interface ITimerSymbolPatternItem {
    /** Duration in milliseconds for this pattern part. */
    duration: number;
}
/** Definition of a timer symbol value pattern. */
export interface ITimerSymbolValuePatternItem extends ITimerSymbolPatternItem {
    /** Value for this pattern part. */
    value: any;
}
/** Definition of a timer symbol symbol pattern. */
export interface ITimerSymbolSymbolPatternItem extends ITimerSymbolPatternItem {
    /** SymbolExpression which represents the value for this timer symbol pattern part. */
    symbol: string;
}
/**
 * Defines every <LangugageCode>.localization
 */
export interface ILocalization {
    /** Identifier of the describing schema. */
    $schema?: string;
    /** Definition of this Language and Region as in ISO 639/BCP 47 with '-' separator. */
    locale: string;
    /**
     * Identifies the target scope of this localization file.
     * Required in engineering environment if file is used for override.
     */
    scope?: 'Application' | 'Framework' | 'Control' | 'Function' | 'Server';
    /**
     * Identifies the localization file source for project level override.
     * Required in engineering environment if file is used to override localization files with Control or Function scope.
     * Example: 'TcHmi.Controls.System.TcHmiControl'
     */
    source?: string;
    /** List of localized Text. */
    localizedText: ILocalizedTextMap;
}
/** Mapping between localization key and value. */
export type ILocalizedTextMap<K extends string = string> = Record<K, string | null>;
export interface baseDependencyFileDescription {
    /** Path to the file with the project/control directory as base path. Can be .js, .theme or .css depending on "type" property. */
    name: string;
    /** A long description of this file. */
    description?: string;
}
/** Project tchmiconfig.json, control Description.json#DependencyFile and function FunctionDescription#DependencyFile section */
export interface JavaScriptFileDescription extends baseDependencyFileDescription {
    /** Type of the control asset. */
    type: 'JavaScript' | 'EsModule';
}
/**
 * Control Description.json#dependencyFiles
 * tchmiconfig.json#dependencyFiles
 */
export interface StylesheetFileDescription extends baseDependencyFileDescription {
    /** Type of the control asset. */
    type: 'Stylesheet';
}
/**
 * Control Description.json#themeFiles
 * tchmiconfig.json#dependencyFiles
 */
export interface ThemedValuesFileDescription extends baseDependencyFileDescription {
    /** Type of the control asset. */
    type: 'ThemedValues';
}
/**
 * Defines a control
 */
export interface ControlDescription {
    /** Identifier of the describing schema. */
    $schema?: string;
    /**
     * 0: 1.10 style controls
     * 1: 1.12 style controls:
     */
    apiVersion?: number;
    /** Control name without namespace like TcHmiButton */
    name: string;
    /** Control namespace like TcHmi.Controls.Beckhoff */
    namespace: string;
    /** Name which should be presented the user. */
    displayName?: string;
    version: Version;
    /** Determine if a control is shown to the user. */
    visible: boolean;
    /** Determine if the control can be changed by a theme. Defaults to standard. */
    themeable: 'None' | 'Standard' | 'Advanced';
    /** FQN of inheritance parent. */
    base: string;
    uses: string[];
    category: string;
    displayPriority?: number;
    heritable: boolean;
    /** A long description of this control. */
    description: string;
    /** The event which is manipulated on double click in designer. */
    defaultDesignerEvent?: string;
    properties: {
        /** Can contain other controls. */
        containerControl: boolean;
        /** Default size of control after instantiation */
        geometry: {
            width: number;
            height: number;
        };
    };
    icons: IconDescription[];
    template?: string;
    /** JS files the creator includes in our HTML and CSS files the framework loads itself. */
    dependencyFiles: (JavaScriptFileDescription | StylesheetFileDescription)[];
    /** Files the framework fetches potentially. Key is the themename. */
    themes?: Dictionary<ControlThemeDescription>;
    /** A list of attributes of this control. */
    attributes: ControlAttributeDescription[];
    /** Resources of the control. */
    themedResources: ControlResourceDescription[];
    /** A list of API Functions of this Control. */
    functions?: ControlFunctionDescription[];
    attributeCategories?: {
        name: string;
        displayPriority: number;
        defaultCollapsed?: boolean;
        description: string;
    }[];
    /** A list of access rights which is checked by this control. Will be checked by its child controls, too, if they are configured with a matching virtual mapping */
    access?: ControlAccessDescription[];
    /** A list of events associated to this control. */
    events?: ControlEventDescription[];
    /** List of custom data types. */
    dataTypes?: DataTypeDescription[];
    /** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
    languages?: ControlLanguages;
}
export interface IconDescription {
    /** Path to the icon file */
    name: string;
    width: number;
    height: number;
}
export interface ControlResourceDescription {
    /** Name of the resource. */
    name: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** A long description of this resource. */
    description?: string;
    /** The type of the resource gives the tchmi creator a hint to use a custom editor for this attribute.\nThe corresponding schemas are described as dataTypes. */
    type: string;
}
export interface EventArgumentDescription {
    /** The type of the argument gives the tchmi creator a hint to use a custom editor for this attribute.\nThe corresponding schemas are described as dataTypes. */
    type: string;
    /** A long description of this argument. */
    description: string;
}
export interface baseEventDescription {
    /** Internal name of the event like ".onPressed" on controls. */
    name: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** A long description of this event. */
    description: string;
    /** The event can have the option preventDefault. */
    allowsPreventDefault?: boolean;
}
export interface ControlEventDescription extends baseEventDescription {
    /** Determine if an event is shown to the user. */
    visible: boolean;
    heritable: boolean;
    /** category of this event */
    category: 'Operator' | 'Control' | 'Framework';
    /**
     * An optional display priority of the event. Most users will only use events with a low number.\nEvents without this value are very rare used.
     * 10 is load, unload, pressed. 15 are major interaction events like click, right click, double click. 50 are enter, leave, mousedown, mouseup.
     */
    displayPriority?: number;
    /** A list of arguments of this event. */
    arguments?: EventArgumentDescription[];
}
export interface ControlFunctionDescription {
    /** Internal name of function. */
    name: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** Determine if a function is shown to the user. */
    visible: boolean;
    /** A long description of this function. */
    description: string;
    category: string;
    params?: {
        /** Name of the parameter */
        name: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** A long description of this parameter. */
        description: string;
        /** Information about the expected type as a tchmi reference name. */
        type: string;
        /** Defines if this is bindable to a Symbol. */
        bindable: boolean;
        /** Determine if a parameter is shown to the user. */
        visible: boolean;
    }[];
    /** Return value type as a tchmi reference name or null if the function has no return value. */
    type?: string | null;
    heritable: boolean;
    /** If set to true a context object will be injected into the JavaScript scope which can for example be used to tell the system that an asynchronous operation has finished. */
    injectContextObject?: boolean;
    /**
     * This property defines search terms for the Engineering that are to optimize the search function within the Actions & Conditions Editor.
     * This makes it possible to find the function using terms other than the function name.
     * For example, if the strings "MyFunction" and "1234" are added to the array, the function can also be found under these terms. */
    searchTerms?: string[];
    /** Tells the system if the function is finished synchronous or if the user will call a feedback function in the context object of the context object to signal finish. */
    waitMode?: 'Synchronous' | 'Asynchronous';
}
/** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
export interface ControlLanguages extends ILanguageFileMap {
}
/** Description of a function */
export interface FunctionDescription {
    /** Identifier of the describing schema. */
    $schema?: string;
    apiVersion?: number;
    version: Version;
    dependencyFiles: JavaScriptFileDescription[];
    function: FunctionDefinition;
    dataTypes?: DataTypeDescription[];
    /** List of all available function localization files. */
    languages?: ILanguageFileMap;
}
/** List of custom data types. */
export interface DataTypeDescription {
    /** Name for the datatype file (property will not be used). */
    name?: string;
    /** Path to the schema describing the datatypes. */
    schema: string;
}
export interface FunctionDefinition {
    name: string;
    namespace?: string;
    displayName?: string;
    description: string;
    category: string;
    visible: boolean;
    /** If set to true a context object will be injected into the JavaScript scope which can be used to tell the system that an asynchronous operation has finished. */
    injectContextObject?: boolean;
    /** Tells the system if the function is finished synchronous or if the user will call a feedback function of the context object. */
    waitMode?: 'Synchronous' | 'Asynchronous';
    /** Return value type as a tchmi reference name or null if the function has no return value. */
    returnValue?: {
        /** Return value type as a tchmi reference name. */
        type: string;
        description?: string;
    } | null;
    arguments: FunctionArgument[];
}
export interface FunctionArgument {
    /** Variable name in the function. */
    name: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** Information about the expected type as a tchmi reference name. */
    type: string;
    /** A long description of this argument. */
    description: string;
    /** This parameter is mandatory for this function. */
    required: boolean;
    /** This parameter can be binded to a symbol. */
    bindable: boolean;
    /** This parameter can have the same binding options as a control attribute. */
    allowControlAttributeBindingOptions?: boolean;
    /** Determines if symbol references injected via this parameter will be watched by the function itself if 'delegatedWatch: true' is defined in the context object when calling the function. */
    allowSymbolReferenceWatchDelegation?: boolean;
    /** TcHmiCreator ui state.*/
    asReference?: boolean;
    /** This value will be used as initial value while function is generated in engineering. */
    defaultValue?: any;
    /** Specified the argument as rest parameter (variable number of arguments). */
    restParameter?: boolean;
}
export interface baseThemeDescription {
    /** References to Resources of this Theme. */
    resources: (ThemedValuesFileDescription | StylesheetFileDescription)[];
}
export interface ControlThemeDescription extends baseThemeDescription {
}
export interface ProjectThemeDescription extends baseThemeDescription {
    /** Do not load theme files (.theme and .css) for this controls */
    replacesThemeForControls?: string[];
    /**
     * Project only: Do not load .css files for these package components (as 'packageId/componentName').
     * For example 'Beckhoff.TwinCAT.HMI.Controls/ContentTabs' or for all global resources 'Beckhoff.TwinCAT.HMI.ResponsiveNavigation' */
    replacesThemeForPackageComponents?: string[];
}
/** Package information as given in tchmiconfig */
export interface IPackageInfo {
    /** Package name like Beckhoff.TwinCAT.HMI.Controls */
    name: string;
    /**
     * Base url path for this package like "/Beckhoff.TwinCAT.HMI.Controls"
     * Please use TcHmi.Environment.getPackageBasePath() instead.
     * The value from configuration file might differ from the real location at design and/or runtime due to dynamic computing.
     * @deprecated
     */
    basePath: string;
    /** Project level configuration data for package UserControls */
    userControls?: IUserControl[];
    /** Project level configuration data for package Contents */
    content?: IContent[];
    /** Project level configuration data for package IViews */
    views?: IView[];
    /** Project level configuration data for package symbols */
    symbols?: {
        /** Definition of setting overrides of package based internal symbols. Key is the symbol name. */
        internal: {
            [symbolname: string]: IPackageInternalSymbolOverrideItem;
        };
        /** Definition of setting overrides of package based timer symbols. Key is the symbol name. */
        timer: {
            [symbolname: string]: IPackageTimerSymbolOverrideItem;
        };
        /** Definition of package symbol mappings. */
        package?: {
            [symbolname: string]: IPackageSymbolMapping;
        };
    };
    /** Engineering package information */
    engineering?: {
        /** Defines if the package is referenced as solution project. */
        projectReference: boolean;
    };
}
export interface IControl {
    /** Path to the control root directory. */
    basePath: string;
    /** Name of the description file for the control: Description.json in most cases. */
    descriptionFile: string;
}
export interface IUserFunction {
    /** Path to the function js file. */
    url: string;
}
export interface IPartial {
    /** Path to the Partial main file. */
    url: string;
}
export interface IView extends IPartial {
    /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
    preload: boolean;
    /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
    keepAlive: boolean;
    /**
     * Defines if bindings on controls within this file should be preloaded before its content is displayed
     * to have proper values when the content is displayed.
     * Requires Preload to be activated.
     */
    preloadBindings?: boolean;
}
export interface IContent extends IPartial {
    /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
    preload: boolean;
    /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
    keepAlive: boolean;
    /** Defines if the content should be loaded synchronous. */
    loadSync?: boolean;
    /**
     * Defines if bindings on controls within this file should be preloaded before its content is displayed
     * to have proper values when the content is displayed.
     * Requires Preload to be activated.
     */
    preloadBindings?: boolean;
}
export interface IUserControl extends IPartial {
}
export interface IIntervalConfig {
    [intervalName: string]: IIntervalItem;
}
export interface IIntervalItem {
    interval: number;
    actions: Trigger.Action[];
}
export interface ActionTemplate {
    /** Name of the Action Template. */
    name: string;
    /** A long description for this template. */
    description?: string;
    category: string;
    actions: Trigger.Action[];
    parameters: TemplateParameter[];
}
export interface TemplateParameter {
    name: string;
    /** Information about the expected type as a tchmi reference name */
    type: string;
    description: string;
    structDataType: any;
}
export interface IProjectKeyboardLayout {
    url: string;
}
export interface EnumMapping {
    [index: number]: string;
}
/**
 * A symbol expression referencing a text or
 * an object with a symbol expression and some values useful for this text.
 */
export type Localizable = string | FormattedLocalizable;
/**
 * Object with a symbol expression referencing a text.
 * This text can contain placeholders which can be filled with values from formatValues.
 */
export interface FormattedLocalizable {
    /**
     * Symbol expression referencing a text.
     * This can contain placeholders which can be filled with values from formatValues.
     */
    symbolExpression: string;
    /** A list of values which can be used to replace the placeholders in the text value. */
    formatValues: any[];
}
export interface ControlAttribute<T = any> {
    /** Name from HTML, so guaranteed to be lowercase only with simple attributes! */
    name: string;
    /** Value for this attribute from "HTML" */
    value: T;
    descr: ControlAttributeDescription | null;
}
/**
 * Description of a control attribute as given in the control's Description.json file.
 */
export interface ControlAttributeDescription {
    /** Name of the attribute in the HTML. This comes from JSON of the user! Casing can be uppercase even if HTML is lowercase only */
    name: string;
    /** Name of the attribute property. */
    propertyName: string;
    /** Name of the attribute property setter (can be empty string or missing if the attribute is readonly). */
    propertySetterName?: string;
    /** Name of the attribute property getter. */
    propertyGetterName: string;
    /** Reference to a corresponding other propertyName */
    refTo?: string;
    /** Name which should be presented the user. */
    displayName?: string;
    /** Determine if an attribute is shown to the user. */
    visible: boolean;
    /** Determine if the attribute can be changed by a theme. Defaults to standard. */
    themeable: 'None' | 'Standard' | 'Advanced';
    /** Information about the expected type as a tchmi reference name */
    type: string;
    /** Name of the area this attribute will be listed in the creator. */
    category: string;
    /** Display priority of the Attribute */
    displayPriority?: number;
    /** A long description of this attribute. */
    description: string;
    /** This property was defined but not enforced till 1.10 and therefore wrong used by many controls @deprecated */
    required?: boolean;
    /** The attribute has to be set in the HTML. Otherwise the control is not valid. */
    requiredOnCompile?: boolean;
    /** Readonly attributes do not need a setter. */
    readOnly: boolean;
    /** A definition of functions which are allowed to use here. The functions must match the requiredArguments signature. */
    allowedFunctions?: {
        /** The type of the attribute gives the tchmi creator a hint to use a custom editor for this attribute. */
        returnType: string | null;
        requiredArguments: {
            /** Information about the expected type as a tchmi reference name */
            type: string;
        }[];
        /** A compatible function must match this waitmode. */
        requiredWaitMode: 'Synchronous' | 'Asynchronous';
    };
    /** Defines if this is bindable to a Symbol. */
    bindable: boolean;
    /** Defines if heritable. */
    heritable: boolean;
    /** This will be used as default BindingMode on bindings to this attribute if no BindingMode is defined in the symbol expression. Defaults to 'OneWay'. */
    defaultBindingMode?: BindingMode;
    /**
     * This property indicates the default value for the attribute that is used in the
     * Engineering Properties window when instantiating the control and written to the HTML code.
     */
    defaultValue: any;
    /**
     * This property specifies the internal default value for the attribute.
     * This value is passed to the Setter function when the control has no other value in HTML code.
     * The internal default aka runtime default may differ from the normal default (drop default).
     */
    defaultValueInternal: any;
    /** Allows symbol expressions in properties of object or array values. */
    allowSymbolExpressionsInObject?: boolean;
    /** Allows injection of symbol references before initialization of the control has finished. */
    allowEarlySymbolReferenceInjection?: boolean;
    /**
     * Allows delegation of symbol reference preloading.
     * @deprecated
     */
    allowSymbolReferencePreloading?: boolean;
}
/**
 * The names of the enumeration exist at runtime.
 * For example, you can (and should) use TcHmi.Errors.NONE directly in a comparison.
 * @preserve (Part of the public API)
 */
export declare enum Errors {
    NONE = 0,
    ERROR = 1,
    E_PARAMETER_INVALID = 2,
    E_TIMEOUT = 3,
    E_EXCEPTION = 4,
    E_INVALID = 5,
    E_NOT_UNIQUE = 6,
    E_OUT_OF_RANGE = 7,
    E_DESTROYED = 8,
    E_NOT_INITIALIZED = 9,
    E_NOT_SUPPORTED = 100,
    E_SYSTEM_NOT_READY = 105,
    E_NOT_ALLOWED = 110,
    E_UNKNOWN = 115,
    E_UNKNOWN_TYPE = 120,
    E_KEY_NOT_FOUND = 130,
    E_TYPE_INVALID = 150,
    E_VALUE_INVALID = 160,
    E_REGISTRATION_MISSING = 180,
    E_REGISTRATION_ERROR = 190,
    E_MODULE_MISSING = 200,
    E_MODULE_ERROR = 210,
    E_WEBSOCKET_NOT_READY = 1000,
    E_WEBSOCKET_CLOSED = 1001,
    E_WEBSOCKET_NOT_SUPPORTED = 1404,
    E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
    E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
    E_WEBSOCKET_OPEN_SERVER_LICENSE_LIMIT_EXCEEDED = 1503,
    E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
    E_SYMBOL_STATE_INVALID = 2000,
    E_SYMBOL_VALUE_INVALID = 2001,
    E_SYMBOL_RESOLVE_SCHEMA = 2002,
    E_SYMBOL_READONLY = 2003,
    E_SYMBOL_UNKNOWN = 2010,
    E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
    E_SYMBOL_INVALID_PATH = 2030,
    E_SYMBOL_SUBSYMBOL_ERROR = 2040,
    E_SYMBOL_SUBVALUE_ERROR = 2045,
    E_SYMBOL_OBJECT_RESOLVE = 2050,
    E_SYMBOL_RESOLVE_META_DATA = 2060,
    E_SYMBOL_UNKNOWN_ATTRIBUTE = 2100,
    E_SYMBOL_RESOLVE_EXPRESSION = 2150,
    E_SYMBOL_RESOLVE_REFERENCE = 2200,
    E_SERVER_RESPONSE_ERROR = 3000,
    E_SERVER_COMMAND_ERROR = 3005,
    E_SERVER_INVALID_RESPONSE = 3010,
    E_SERVER_COMMANDS_MISSING = 3015,
    E_SERVER_COMMAND_MISSING = 3016,
    E_SERVER_READVALUE_MISSING = 3020,
    E_SERVER_WRITEVALUE_MISSING = 3025,
    E_SERVER_RESPONSE_MISSING = 3030,
    E_SERVER_DOMAIN_UNKNOWN = 3100,
    E_SERVER_HANDSHAKE = 3200,
    E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
    E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
    E_FUNCTION_INVALID_CONFIGURATION = 4010,
    E_FUNCTION_EXCEPTION = 4020,
    E_FUNCTION_UNKNOWN = 4030,
    E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
    E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
    /** Value of the FunctionExpression is known synchronous. The caller is responsible for the value! */
    E_FUNCTION_HANDLED_VIA_RETURN_VALUE = 4060,
    E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
    E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
    E_FUNCTION_CALL_ABORTED = 4130,
    E_FUNCTION_DESTROYED = 4140,
    E_TRIGGER_ACTION_EXCEPTION = 5050,
    E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
    E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
    E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
    E_TRIGGER_CONDITION_INVALID = 5200,
    E_CONTROL_INSTANCE_NOT_FOUND = 6000,
    E_CONTROL_INVALID_CONFIGURATION = 6001,
    E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
    E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
    E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = 6020,
    E_SCHEMA_INVALID = 7000,
    E_SCHEMA_INVALID_PATH = 7010,
    E_SCHEMA_INVALID_REF_ID = 7020,
    /** Deprecated. Use E_SCHEMA_UNKNOWN_SOURCE instead. */
    E_SCHEMA_UNKNOWN_FILE = 7030,
    E_SCHEMA_UNKNOWN_SOURCE = 7030,// Replaces E_SCHEMA_UNKNOWN_FILE but keeps value for compatibility.
    E_SCHEMA_UNKNOWN_DEFINITION = 7040,
    E_SCHEMA_NOT_RESOLVED = 7050,
    E_PACKAGE = 8000,
    E_LOCALIZATION_UNKNOWN_KEY = 9000,
    E_INTERACTIVE_WRITE_ABORT = 10100
}
//# sourceMappingURL=_Types.d.ts.map