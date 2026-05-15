/// <reference path="../../Lib/jquery.d.ts" preserve="true" />
/// <reference path="../API/_GlobalFunctions.d.ts" preserve="true" />
/// <reference path="../API/_StaticDefines.d.ts" preserve="true" />
import * as _Types from '../API/_Types.js';
declare global {
    /**
     * TwinCAT HMI API
     * Check out
     * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3730606987.html?id=1426887615595781518
     * for an API reference.
     * @preserve (Part of the public API)
     */
    namespace TcHmi {
        type SelectableRequired<T, K extends keyof T> = _Types.SelectableRequired<T, K>;
        type SelectableOptional<T, K extends keyof T> = _Types.SelectableOptional<T, K>;
        type Nullable<T> = _Types.Nullable<T>;
        type ObjectEntries<T> = _Types.ObjectEntries<T>;
        type Context<T1 = any> = _Types.Context<T1>;
        const enum LOG_LEVEL {
            Performance = -1,
            None = 0,
            Error = 1,
            Warning = 2,
            Info = 3,
            Debug = 4
        }
        type EventContext<T1 = any> = _Types.EventContext<T1>;
        type FunctionExpressionContext<T1 = any> = _Types.FunctionExpressionContext<T1>;
        type IErrorDetails = _Types.IErrorDetails;
        type DestroyFunction = _Types.DestroyFunction;
        type FontFamily = _Types.FontFamily;
        type AngleUnit = _Types.AngleUnit;
        type BorderStyleValue = _Types.BorderStyleValue;
        type DimensionUnit = _Types.DimensionUnit;
        type FontSizeUnit = _Types.FontSizeUnit;
        type FontStyle = _Types.FontStyle;
        type FontWeight = _Types.FontWeight;
        type HorizontalAlignment = _Types.HorizontalAlignment;
        type ScaleModeString = _Types.ScaleModeString;
        type SizeMode = _Types.SizeMode;
        type SizeModeWithContent = _Types.SizeModeWithContent;
        type ToggleState = _Types.ToggleState;
        type VerticalAlignment = _Types.VerticalAlignment;
        type Visibility = _Types.Visibility;
        type Version = _Types.Version;
        type IResultObject = _Types.IResultObject;
        type SymbolTag = _Types.SymbolTag;
        let SymbolType: typeof _Types.SymbolType;
        type SymbolType = _Types.SymbolType;
        type SymbolExpressionString<ST extends SymbolTag = SymbolTag> = _Types.SymbolExpressionString<ST>;
        type AllowSymbolExpressionsAsValues<T, ST extends SymbolTag = SymbolTag> = _Types.AllowSymbolExpressionsAsValues<T, ST>;
        type BindingMode = _Types.BindingMode;
        type baseColor = _Types.baseColor;
        type Color = _Types.Color;
        type SolidColor = _Types.SolidColor;
        type LinearGradientColor = _Types.LinearGradientColor;
        type StopPoint = _Types.StopPoint;
        type RGBAColor = _Types.RGBAColor;
        type baseFourSidedCss = _Types.baseFourSidedCss;
        type FourSidedCss = _Types.FourSidedCss;
        type PixelFourSidedCss = _Types.PixelFourSidedCss;
        type BorderWidth = _Types.BorderWidth;
        type BorderStyle = _Types.BorderStyle;
        type BorderRadius = _Types.BorderRadius;
        type BoxShadow = _Types.BoxShadow;
        type Background = _Types.Background;
        type baseTransform = _Types.baseTransform;
        type Transform = _Types.Transform;
        type Translate = _Types.Translate;
        type Rotate = _Types.Rotate;
        type Scale = _Types.Scale;
        type Skew = _Types.Skew;
        type Origin = _Types.Origin;
        type Perspective = _Types.Perspective;
        type Dictionary<T = any> = _Types.Dictionary<T>;
        type nativeJsonSchema = _Types.nativeJsonSchema;
        type JsonDataTypeNames = _Types.JsonDataTypeNames;
        type JsonSchema = _Types.JsonSchema;
        type AccessControl = _Types.AccessControl;
        type VirtualControlRightMapping = _Types.VirtualControlRightMapping;
        let Endianness: typeof _Types.Endianness;
        type Endianness = _Types.Endianness;
        type SortingInfo = _Types.SortingInfo;
        type HierarchicalFilterMap = _Types.HierarchicalFilterMap;
        type Filter = _Types.Filter;
        type Comparison = _Types.Comparison;
        type LogicOperator = _Types.LogicOperator;
        let PartialType: typeof _Types.PartialType;
        type PartialType = _Types.PartialType;
        type IConfig = _Types.IConfig;
        type LanguageFileMapEntry = _Types.LanguageFileMapEntry;
        type ILanguageFileMap = _Types.ILanguageFileMap;
        type IModuleLanguageFileMapsMap = _Types.IModuleLanguageFileMapsMap;
        type ISymbolConfig = _Types.ISymbolConfig;
        type IInternalSymbolItem = _Types.IInternalSymbolItem;
        type IPackageInternalSymbolOverrideItem = _Types.IPackageInternalSymbolOverrideItem;
        type IThemedResourceItem = _Types.IThemedResourceItem;
        type ITimerSymbolItem = _Types.ITimerSymbolItem;
        type IPackageTimerSymbolOverrideItem = _Types.IPackageTimerSymbolOverrideItem;
        type IPackageSymbolDefinition = _Types.IPackageSymbolDefinition;
        type IPackageSymbolMapping = _Types.IPackageSymbolMapping;
        type ITimerSymbolPatternItem = _Types.ITimerSymbolPatternItem;
        type ITimerSymbolValuePatternItem = _Types.ITimerSymbolValuePatternItem;
        type ITimerSymbolSymbolPatternItem = _Types.ITimerSymbolSymbolPatternItem;
        type ILocalization = _Types.ILocalization;
        type ILocalizedTextMap<K extends string = string> = _Types.ILocalizedTextMap<K>;
        type baseDependencyFileDescription = _Types.baseDependencyFileDescription;
        type JavaScriptFileDescription = _Types.JavaScriptFileDescription;
        type StylesheetFileDescription = _Types.StylesheetFileDescription;
        type ThemedValuesFileDescription = _Types.ThemedValuesFileDescription;
        type ControlDescription = _Types.ControlDescription;
        type IconDescription = _Types.IconDescription;
        type ControlResourceDescription = _Types.ControlResourceDescription;
        type EventArgumentDescription = _Types.EventArgumentDescription;
        type baseEventDescription = _Types.baseEventDescription;
        type ControlEventDescription = _Types.ControlEventDescription;
        type ControlFunctionDescription = _Types.ControlFunctionDescription;
        type ControlLanguages = _Types.ControlLanguages;
        type FunctionDescription = _Types.FunctionDescription;
        type DataTypeDescription = _Types.DataTypeDescription;
        type FunctionDefinition = _Types.FunctionDefinition;
        type FunctionArgument = _Types.FunctionArgument;
        type baseThemeDescription = _Types.baseThemeDescription;
        type ControlThemeDescription = _Types.ControlThemeDescription;
        type ProjectThemeDescription = _Types.ProjectThemeDescription;
        type IPackageInfo = _Types.IPackageInfo;
        type IControl = _Types.IControl;
        type IUserFunction = _Types.IUserFunction;
        type IPartial = _Types.IPartial;
        type IView = _Types.IView;
        type IContent = _Types.IContent;
        type IUserControl = _Types.IUserControl;
        type IIntervalConfig = _Types.IIntervalConfig;
        type IIntervalItem = _Types.IIntervalItem;
        type ActionTemplate = _Types.ActionTemplate;
        type TemplateParameter = _Types.TemplateParameter;
        type IProjectKeyboardLayout = _Types.IProjectKeyboardLayout;
        type EnumMapping = _Types.EnumMapping;
        type Localizable = _Types.Localizable;
        type FormattedLocalizable = _Types.FormattedLocalizable;
        type ControlAttribute<T = any> = _Types.ControlAttribute<T>;
        type ControlAttributeDescription = _Types.ControlAttributeDescription;
        let Errors: typeof _Types.Errors;
        type Errors = _Types.Errors;
        namespace Errors {
            type NONE = typeof _Types.Errors.NONE;
            type ERROR = typeof _Types.Errors.ERROR;
            type E_PARAMETER_INVALID = typeof _Types.Errors.E_PARAMETER_INVALID;
            type E_TIMEOUT = typeof _Types.Errors.E_TIMEOUT;
            type E_EXCEPTION = typeof _Types.Errors.E_EXCEPTION;
            type E_INVALID = typeof _Types.Errors.E_INVALID;
            type E_NOT_UNIQUE = typeof _Types.Errors.E_NOT_UNIQUE;
            type E_OUT_OF_RANGE = typeof _Types.Errors.E_OUT_OF_RANGE;
            type E_DESTROYED = typeof _Types.Errors.E_DESTROYED;
            type E_NOT_INITIALIZED = typeof _Types.Errors.E_NOT_INITIALIZED;
            type E_NOT_SUPPORTED = typeof _Types.Errors.E_NOT_SUPPORTED;
            type E_SYSTEM_NOT_READY = typeof _Types.Errors.E_SYSTEM_NOT_READY;
            type E_NOT_ALLOWED = typeof _Types.Errors.E_NOT_ALLOWED;
            type E_UNKNOWN = typeof _Types.Errors.E_UNKNOWN;
            type E_UNKNOWN_TYPE = typeof _Types.Errors.E_UNKNOWN_TYPE;
            type E_KEY_NOT_FOUND = typeof _Types.Errors.E_KEY_NOT_FOUND;
            type E_TYPE_INVALID = typeof _Types.Errors.E_TYPE_INVALID;
            type E_VALUE_INVALID = typeof _Types.Errors.E_VALUE_INVALID;
            type E_REGISTRATION_MISSING = typeof _Types.Errors.E_REGISTRATION_MISSING;
            type E_REGISTRATION_ERROR = typeof _Types.Errors.E_REGISTRATION_ERROR;
            type E_MODULE_MISSING = typeof _Types.Errors.E_MODULE_MISSING;
            type E_MODULE_ERROR = typeof _Types.Errors.E_MODULE_ERROR;
            type E_WEBSOCKET_NOT_READY = typeof _Types.Errors.E_WEBSOCKET_NOT_READY;
            type E_WEBSOCKET_CLOSED = typeof _Types.Errors.E_WEBSOCKET_CLOSED;
            type E_WEBSOCKET_NOT_SUPPORTED = typeof _Types.Errors.E_WEBSOCKET_NOT_SUPPORTED;
            type E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = typeof _Types.Errors.E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED;
            type E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = typeof _Types.Errors.E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING;
            type E_WEBSOCKET_OPEN_SERVER_LICENSE_LIMIT_EXCEEDED = typeof _Types.Errors.E_WEBSOCKET_OPEN_SERVER_LICENSE_LIMIT_EXCEEDED;
            type E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = typeof _Types.Errors.E_WEBSOCKET_OPEN_SERVER_NO_ACCESS;
            type E_SYMBOL_STATE_INVALID = typeof _Types.Errors.E_SYMBOL_STATE_INVALID;
            type E_SYMBOL_VALUE_INVALID = typeof _Types.Errors.E_SYMBOL_VALUE_INVALID;
            type E_SYMBOL_RESOLVE_SCHEMA = typeof _Types.Errors.E_SYMBOL_RESOLVE_SCHEMA;
            type E_SYMBOL_READONLY = typeof _Types.Errors.E_SYMBOL_READONLY;
            type E_SYMBOL_UNKNOWN = typeof _Types.Errors.E_SYMBOL_UNKNOWN;
            type E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = typeof _Types.Errors.E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY;
            type E_SYMBOL_INVALID_PATH = typeof _Types.Errors.E_SYMBOL_INVALID_PATH;
            type E_SYMBOL_SUBSYMBOL_ERROR = typeof _Types.Errors.E_SYMBOL_SUBSYMBOL_ERROR;
            type E_SYMBOL_SUBVALUE_ERROR = typeof _Types.Errors.E_SYMBOL_SUBVALUE_ERROR;
            type E_SYMBOL_OBJECT_RESOLVE = typeof _Types.Errors.E_SYMBOL_OBJECT_RESOLVE;
            type E_SYMBOL_RESOLVE_META_DATA = typeof _Types.Errors.E_SYMBOL_RESOLVE_META_DATA;
            type E_SYMBOL_UNKNOWN_ATTRIBUTE = typeof _Types.Errors.E_SYMBOL_UNKNOWN_ATTRIBUTE;
            type E_SYMBOL_RESOLVE_EXPRESSION = typeof _Types.Errors.E_SYMBOL_RESOLVE_EXPRESSION;
            type E_SYMBOL_RESOLVE_REFERENCE = typeof _Types.Errors.E_SYMBOL_RESOLVE_REFERENCE;
            type E_SERVER_RESPONSE_ERROR = typeof _Types.Errors.E_SERVER_RESPONSE_ERROR;
            type E_SERVER_COMMAND_ERROR = typeof _Types.Errors.E_SERVER_COMMAND_ERROR;
            type E_SERVER_INVALID_RESPONSE = typeof _Types.Errors.E_SERVER_INVALID_RESPONSE;
            type E_SERVER_COMMANDS_MISSING = typeof _Types.Errors.E_SERVER_COMMANDS_MISSING;
            type E_SERVER_COMMAND_MISSING = typeof _Types.Errors.E_SERVER_COMMAND_MISSING;
            type E_SERVER_READVALUE_MISSING = typeof _Types.Errors.E_SERVER_READVALUE_MISSING;
            type E_SERVER_WRITEVALUE_MISSING = typeof _Types.Errors.E_SERVER_WRITEVALUE_MISSING;
            type E_SERVER_RESPONSE_MISSING = typeof _Types.Errors.E_SERVER_RESPONSE_MISSING;
            type E_SERVER_DOMAIN_UNKNOWN = typeof _Types.Errors.E_SERVER_DOMAIN_UNKNOWN;
            type E_SERVER_HANDSHAKE = typeof _Types.Errors.E_SERVER_HANDSHAKE;
            type E_FUNCTION_MISSING_FUNCTION_REFERENCE = typeof _Types.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE;
            type E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = typeof _Types.Errors.E_FUNCTION_MISSING_FUNCTION_DESCRIPTION;
            type E_FUNCTION_INVALID_CONFIGURATION = typeof _Types.Errors.E_FUNCTION_INVALID_CONFIGURATION;
            type E_FUNCTION_EXCEPTION = typeof _Types.Errors.E_FUNCTION_EXCEPTION;
            type E_FUNCTION_UNKNOWN = typeof _Types.Errors.E_FUNCTION_UNKNOWN;
            type E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = typeof _Types.Errors.E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING;
            type E_FUNCTION_RESOLVING_PARAMETER_FAILED = typeof _Types.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED;
            type E_FUNCTION_HANDLED_VIA_RETURN_VALUE = typeof _Types.Errors.E_FUNCTION_HANDLED_VIA_RETURN_VALUE;
            type E_FUNCTION_EXPRESSION_PARSER_ERROR = typeof _Types.Errors.E_FUNCTION_EXPRESSION_PARSER_ERROR;
            type E_FUNCTION_EXPRESSION_EXCEPTION = typeof _Types.Errors.E_FUNCTION_EXPRESSION_EXCEPTION;
            type E_FUNCTION_CALL_ABORTED = typeof _Types.Errors.E_FUNCTION_CALL_ABORTED;
            type E_FUNCTION_DESTROYED = typeof _Types.Errors.E_FUNCTION_DESTROYED;
            type E_TRIGGER_ACTION_EXCEPTION = typeof _Types.Errors.E_TRIGGER_ACTION_EXCEPTION;
            type E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = typeof _Types.Errors.E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION;
            type E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = typeof _Types.Errors.E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION;
            type E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = typeof _Types.Errors.E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION;
            type E_TRIGGER_CONDITION_INVALID = typeof _Types.Errors.E_TRIGGER_CONDITION_INVALID;
            type E_CONTROL_INSTANCE_NOT_FOUND = typeof _Types.Errors.E_CONTROL_INSTANCE_NOT_FOUND;
            type E_CONTROL_INVALID_CONFIGURATION = typeof _Types.Errors.E_CONTROL_INVALID_CONFIGURATION;
            type E_CONTROL_ATTRIBUTE_NOT_FOUND = typeof _Types.Errors.E_CONTROL_ATTRIBUTE_NOT_FOUND;
            type E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = typeof _Types.Errors.E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION;
            type E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = typeof _Types.Errors.E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE;
            type E_SCHEMA_INVALID = typeof _Types.Errors.E_SCHEMA_INVALID;
            type E_SCHEMA_INVALID_PATH = typeof _Types.Errors.E_SCHEMA_INVALID_PATH;
            type E_SCHEMA_INVALID_REF_ID = typeof _Types.Errors.E_SCHEMA_INVALID_REF_ID;
            type E_SCHEMA_UNKNOWN_FILE = typeof _Types.Errors.E_SCHEMA_UNKNOWN_FILE;
            type E_SCHEMA_UNKNOWN_SOURCE = typeof _Types.Errors.E_SCHEMA_UNKNOWN_SOURCE;
            type E_SCHEMA_UNKNOWN_DEFINITION = typeof _Types.Errors.E_SCHEMA_UNKNOWN_DEFINITION;
            type E_SCHEMA_NOT_RESOLVED = typeof _Types.Errors.E_SCHEMA_NOT_RESOLVED;
            type E_PACKAGE = typeof _Types.Errors.E_PACKAGE;
            type E_LOCALIZATION_UNKNOWN_KEY = typeof _Types.Errors.E_LOCALIZATION_UNKNOWN_KEY;
            type E_INTERACTIVE_WRITE_ABORT = typeof _Types.Errors.E_INTERACTIVE_WRITE_ABORT;
        }
        const enum HttpStatusCode {
            Continue = 100,
            Switching = 101,
            Ok = 200,
            Created = 201,
            No_Content = 204,
            Partial_Content = 206,
            Multiple_Choices = 300,
            Moved_Permanently = 301,
            Redirect = 302,
            Not_Modified = 304,
            Temporary_Redirect = 307,
            Permanent_Redirect = 308,
            Bad_Request = 400,
            Unauthorized = 401,
            Payment_Required = 402,
            Forbidden = 403,
            Not_Found = 404,
            Method_Not_Allowed = 405,
            Request_Timeout = 408,
            Gone = 410,
            Length_Required = 411,
            Precondition_Failed = 412,
            Request_Payload_too_Large = 413,
            Range_Not_Satisfiable = 416,
            Expectation_Failed = 417,
            Upgrade_Required = 426,
            Too_Many_Requests = 429,
            Custom_License_Expired = 460,
            Custom_Login_Timeout = 461,
            Custom_Too_Many_Connections = 463,
            Custom_Server_Starting = 464,
            Custom_License_Limit_Exceeded = 465,
            Custom_Missing_Parameter = 466,
            Internal_Server_Error = 500,
            Not_Implemented = 501,
            Service_Unavailable = 503,
            Version_not_Supported = 505,
            Custom_Extension_not_Loaded = 520,
            Custom_Syntax_Error = 521,
            Custom_Forced_Disconnect = 522
        }
        /**
         * For internal use only.
         * Do not use or manipulate resources from within TcHmi.System in your code.
         * @preserve (Part of the public API)
         */
        namespace System {
            /**
             * DEPRECATED
             * Please use TcHmi.LOG_LEVEL
             * @deprecated Please use TcHmi.LOG_LEVEL
             */
            const enum LOG_LEVEL {
                Performance = -1,
                None = 0,
                Error = 1,
                Warning = 2,
                Info = 3,
                Debug = 4
            }
        }
    }
}
import * as _baseTcHmiControl from '../Controls/System/baseTcHmiControl.js';
declare global {
    namespace TcHmi.Controls {
        /**
         * TwinCAT HMI System Controls
         * Check out
         * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3729751819.html?id=437693173022431772
         * for an API reference.
         * @preserve (Part of the public API)
         */
        namespace System {
            let baseTcHmiControl: typeof _baseTcHmiControl.baseTcHmiControl;
            type baseTcHmiControl = _baseTcHmiControl.baseTcHmiControl;
        }
    }
}
import * as _TypeGuards from '../API/_TypeGuards.js';
declare global {
    namespace TcHmi {
        let isSolidColor: typeof _TypeGuards.isSolidColor;
        let isLinearGradientColor: typeof _TypeGuards.isLinearGradientColor;
        let isBackground: typeof _TypeGuards.isBackground;
        let isTranslate: typeof _TypeGuards.isTranslate;
        let isRotate: typeof _TypeGuards.isRotate;
        let isScale: typeof _TypeGuards.isScale;
        let isSkew: typeof _TypeGuards.isSkew;
        let isOrigin: typeof _TypeGuards.isOrigin;
        let isPerspective: typeof _TypeGuards.isPerspective;
        let isComparison: typeof _TypeGuards.isComparison;
        let isLogicOperator: typeof _TypeGuards.isLogicOperator;
    }
}
import * as _Access from '../API/Access.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for checking rights.
         * @preserve (Part of the public API)
         */
        namespace Access {
            const checkAccess: typeof _Access.checkAccess;
            const setControlRightOverride: typeof _Access.setControlRightOverride;
            const getControlRightOverrides: typeof _Access.getControlRightOverrides;
        }
    }
}
import { Animation as _Animation } from '../API/Animation.js';
declare global {
    namespace TcHmi {
        /**
         * @deprecated
         */
        namespace AnimationProvider {
            /**
             * Deprecated. Please use new TcHmi.Animation()
             * Creates a new animation
             * @param controlName The name of the control for which the animation is intendend.
             * @param selector A CSS selector to identify the element inside the control to animate.
             * @preserve (Part of the public API)
             * @deprecated Please use new TcHmi.Animation()
             */
            const create: (controlName: string, selector: string) => _Animation;
        }
        let Animation: typeof _Animation;
        type Animation = _Animation;
        namespace Animation {
            type Keyframe = _Animation.Keyframe;
            type AnimationEvent = _Animation.AnimationEvent;
            type Status = _Animation.Status;
            type Direction = _Animation.Direction;
            type FillMode = _Animation.FillMode;
        }
    }
}
import { Base64BinaryReader as _Base64BinaryReader } from '../API/Base64BinaryReader.js';
declare global {
    namespace TcHmi {
        let Base64BinaryReader: typeof _Base64BinaryReader;
        type Base64BinaryReader = _Base64BinaryReader;
        namespace Base64BinaryReader {
            type StringOptions = _Base64BinaryReader.StringOptions;
        }
    }
}
import { Base64BinaryWriter as _Base64BinaryWriter } from '../API/Base64BinaryWriter.js';
declare global {
    namespace TcHmi {
        let Base64BinaryWriter: typeof _Base64BinaryWriter;
        type Base64BinaryWriter = _Base64BinaryWriter;
        namespace Base64BinaryWriter {
            type StringOptions = _Base64BinaryWriter.StringOptions;
        }
    }
}
import * as _Binding from '../API/Binding.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for creating and removing bindings.
         * @preserve (Part of the public API)
         */
        namespace Binding {
            let create: typeof _Binding.create;
            let createEx: typeof _Binding.createEx;
            let createEx2: typeof _Binding.createEx2;
            let remove: typeof _Binding.remove;
            let removeEx: typeof _Binding.removeEx;
            let removeEx2: typeof _Binding.removeEx2;
            let exists: typeof _Binding.exists;
            let resolve: typeof _Binding.resolve;
            let resolveEx: typeof _Binding.resolveEx;
        }
    }
}
import * as _Callback from '../API/Callback.js';
declare global {
    namespace TcHmi {
        /**
         * Provides resources for safely calling callback functions.
         */
        namespace Callback {
            let callSafe: typeof _Callback.callSafe;
            let callSafeEx: typeof _Callback.callSafeEx;
            type ICallback<T extends object | null, A extends any[]> = _Callback.ICallback<T, A>;
            let Collection: typeof _Callback.Collection;
            let AsyncCollection: typeof _Callback.AsyncCollection;
            type Collection<C extends (...args: any[]) => any> = _Callback.Collection<C>;
            type AsyncCollection<C extends (...args: any[]) => any> = _Callback.AsyncCollection<C>;
        }
    }
}
import * as _Config from '../API/Config.js';
declare global {
    namespace TcHmi {
        /**
         * Provides resources for accessing configuration data.
         * @preserve (Part of the public API)
         */
        namespace Config {
            const get: typeof _Config.get;
            const getNugetPackagesMetadata: typeof _Config.getNugetPackagesMetadata;
            type NugetPackageMetadata = _Config.NugetPackageMetadata;
        }
    }
}
declare global {
    namespace TcHmi {
        /**
         * Deprecated. Please use TcHmi.Controls.get()
         * @deprecated Please use TcHmi.Controls.get()
         */
        let control: _Types.Dictionary<_baseTcHmiControl.baseTcHmiControl>;
        /**
         * Reserved
         */
        let Control: never;
    }
}
import * as _ControlFactory from '../API/ControlFactory.js';
declare global {
    namespace TcHmi {
        /**
         * Class for creating control instances.
         * @preserve (Part of the public API)
         */
        namespace ControlFactory {
            const create: typeof _ControlFactory._create;
            const createEx: typeof _ControlFactory.createEx;
        }
    }
}
import * as _Controls from '../API/Controls.js';
declare global {
    namespace TcHmi {
        /**
         * TwinCAT HMI Controls
         * Check out
         * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3728912139.html?id=2674190766896363084
         * for an API reference.
         * @preserve (Part of the public API)
         */
        namespace Controls {
            let register: typeof _Controls._register;
            let registerEx: typeof _Controls.registerEx;
            let get: typeof _Controls.get;
            let getDescription: typeof _Controls.getDescription;
            let getVersion: typeof _Controls.getVersion;
            let getBasePath: typeof _Controls.getBasePath;
            let getBasePathEx: typeof _Controls.getBasePathEx;
            let getMap: typeof _Controls.getMap;
            let limitPixelDimensionToControlBound: typeof _Controls.limitPixelDimensionToControlBound;
            /**
             * DEPRECATED
             * Does no longer do anything
             * @param callback will be imediately called
             * @deprecated Does no longer do anything
             */
            let tachControls: (callback: null | ((this: null) => void)) => void;
            /**
             * DEPRECATED
             * Does no longer do anything
             * @param callback will be imediately called
             * @deprecated Does no longer do anything
             */
            let tachControlsAsync: (callback: null | ((this: null) => void)) => void;
            type ControlAttributeList = _Controls.ControlAttributeList;
            type ControlAccessDescription = _Controls.ControlAccessDescription;
            type baseTcHmiControlConstructor<C extends _baseTcHmiControl.baseTcHmiControl> = _Controls.baseTcHmiControlConstructor<C>;
        }
    }
}
import * as _Decorators from '../API/Decorators.js';
declare global {
    namespace TcHmi {
        let EventHandler: typeof _Decorators.EventHandler;
        let CallbackMethod: typeof _Decorators.CallbackMethod;
    }
}
import { Destroyable as _Destroyable } from '../API/Destroyable.js';
declare global {
    namespace TcHmi {
        let Destroyable: typeof _Destroyable;
        type Destroyable = _Destroyable;
    }
}
import * as _DialogManager from '../API/DialogManager.js';
declare global {
    namespace TcHmi {
        /**
         * Provides multiple types of dialogs to the user.
         * @preserve (Part of the public API)
         */
        namespace DialogManager {
            const showDialog: typeof _DialogManager.showDialog;
            const updateText: typeof _DialogManager.updateText;
            const updateTextEx: typeof _DialogManager.updateTextEx;
            const getDialogOwner: typeof _DialogManager.getDialogOwner;
            const buildMessage: typeof _DialogManager.buildMessage;
            const DialogType: typeof _DialogManager.DialogType;
            type DialogType = _DialogManager.DialogType;
            const DialogSeverity: typeof _DialogManager.DialogSeverity;
            type DialogSeverity = _DialogManager.DialogSeverity;
            type DialogOptions = _DialogManager.DialogOptions;
        }
    }
}
import * as _ErrorPane from '../API/Engineering.ErrorPane.js';
declare global {
    namespace TcHmi.Engineering {
        /**
         * Provides resources for interaction with the Visual Studio error pane.
         * @preserve (Part of the public API)
         */
        namespace ErrorPane {
            const add: typeof _ErrorPane.add;
            const remove: typeof _ErrorPane.remove;
            const MessageType: typeof _ErrorPane.MessageType;
            type Message = _ErrorPane.Message;
            type MessageType = _ErrorPane.MessageType;
        }
    }
}
import * as _Environment from '../API/Environment.js';
declare global {
    namespace TcHmi {
        /**
         * Provides environment information.
         * @preserve (Part of the public API)
         */
        namespace Environment {
            const getBasePath: typeof _Environment.getBasePath;
            const getControlBasePath: typeof _Environment.getControlBasePath;
            const getControlBasePathEx: typeof _Environment.getControlBasePathEx;
            const getFunctionBasePath: typeof _Environment.getFunctionBasePath;
            const getPackageBasePath: typeof _Environment.getPackageBasePath;
            const getBrowserCapabilities: typeof _Environment.getBrowserCapabilities;
            const getHostBaseUri: typeof _Environment.getHostBaseUri;
            const getServerSidePathAndQuery: typeof _Environment.getServerSidePathAndQuery;
            type BrowserCapabilities = _Environment.BrowserCapabilities;
        }
    }
}
import { EventProvider as _EventProvider } from '../API/EventProvider.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for managing events.
         * @preserve (Part of the public API)
         */
        namespace EventProvider {
            const register: typeof _EventProvider.register;
            const raise: typeof _EventProvider.raise;
            const raiseEx: typeof _EventProvider.raiseEx;
            const watchEventRegistration: typeof _EventProvider.watchEventRegistration;
            const has: typeof _EventProvider.has;
            const count: typeof _EventProvider.count;
            const registerDomEvent: typeof _EventProvider.registerDomEvent;
            type Event = _EventProvider.Event;
            type IEventRegResultObject = _EventProvider.IEventRegResultObject;
            type IEventEntry = _EventProvider.IEventEntry;
            const EventRegWatchType: typeof _EventProvider.EventRegWatchType;
            type EventRegWatchType = _EventProvider.EventRegWatchType;
        }
    }
}
import { Exception as _Exception } from '../API/Exception.js';
declare global {
    namespace TcHmi {
        let Exception: typeof _Exception;
        type Exception = _Exception;
        namespace Exception {
            type LogInfo<T extends string> = _Exception.LogInfo<T>;
            type ControlInfo = _Exception.ControlInfo;
            type FrameworkInfo = _Exception.FrameworkInfo;
            type FunctionInfo = _Exception.FunctionInfo;
        }
    }
}
import { FileUploader as _FileUploader } from '../API/FileUploader.js';
declare global {
    namespace TcHmi {
        let FileUploader: typeof _FileUploader;
        type FileUploader = _FileUploader;
        namespace FileUploader {
            type FileStatus = _FileUploader.FileStatus;
            type ChunkType = _FileUploader.ChunkType;
            type Options = _FileUploader.Options;
            type QueuedFile = _FileUploader.QueuedFile;
            type ProgressCallback = _FileUploader.ProgressCallback;
            type ProgressResult = _FileUploader.ProgressResult;
            type ProgressResultSuccess = _FileUploader.ProgressResultSuccess;
            type ProgressResultFail = _FileUploader.ProgressResultFail;
            type Chunk = _FileUploader.Chunk;
            type UploadWriteValue = _FileUploader.UploadWriteValue;
            type FileDialogOptions = _FileUploader.FileDialogOptions;
        }
    }
}
import { FilterInstance as _FilterInstance } from '../API/FilterInstance.js';
declare global {
    namespace TcHmi {
        let FilterInstance: typeof _FilterInstance;
        type FilterInstance<T = any> = _FilterInstance<T>;
        namespace FilterInstance {
            type Strategy = _FilterInstance.Strategy;
            type Tree<D, C extends string | number | symbol> = _FilterInstance.Tree<D, C>;
        }
    }
}
import { Function as _Function } from '../API/Function.js';
declare global {
    namespace TcHmi {
        let Function: typeof _Function;
        namespace Function {
            type IExecuteResultObject<R = any> = _Function.IExecuteResultObject<R>;
        }
    }
}
import * as _Functions from '../API/Functions.js';
declare global {
    namespace TcHmi {
        /**
         * Provides resources for managing functions.
         * @preserve (Part of the public API)
         */
        namespace Functions {
            let registerFunction: typeof _Functions._registerFunction;
            let registerFunctionEx: typeof _Functions.registerFunctionEx;
            let getFunction: typeof _Functions.getFunction;
            let getFunctionVersion: typeof _Functions.getFunctionVersion;
            let registerFrameworkFunction: typeof _Functions._registerFrameworkFunction;
        }
    }
}
import * as _IFunction from '../API/IFunction.js';
declare global {
    namespace TcHmi {
        type IFunction<R = any> = _IFunction.IFunction<R>;
        namespace IFunction {
            let isStaticValue: typeof _IFunction.isStaticValue;
            let isSymbol: typeof _IFunction.isSymbol;
            let isEventDataObject: typeof _IFunction.isEventDataObject;
            let isFunctionExpression: typeof _IFunction.isFunctionExpression;
            type Value = _IFunction.Value;
            type StaticValue = _IFunction.StaticValue;
            type Symbol = _IFunction.Symbol;
            type EventDataObject = _IFunction.EventDataObject;
            type FunctionExpression = _IFunction.FunctionExpression;
        }
    }
}
import * as _Interval from '../API/Interval.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functionality to control global intervals.
         * @preserve (Part of the public API)
         */
        namespace Interval {
            const start: typeof _Interval.start;
            const stop: typeof _Interval.stop;
        }
    }
}
import * as _Keyboard from '../API/Keyboard.js';
declare global {
    namespace TcHmi {
        /**
         * Provides an interface for keyboard interaction.
         * @preserve (Part of the public API)
         */
        namespace Keyboard {
            const close: typeof _Keyboard.close;
            const getProviderName: typeof _Keyboard.getProviderName;
            const setProviderName: typeof _Keyboard.setProviderName;
            const getAutoOpen: typeof _Keyboard.getAutoOpen;
            const setAutoOpen: typeof _Keyboard.setAutoOpen;
            const getLayoutFileFromInputMode: typeof _Keyboard.getLayoutFileFromInputMode;
            const getProjectKeyboardMapping: typeof _Keyboard.getProjectKeyboardMapping;
            const setProjectKeyboardMapping: typeof _Keyboard.setProjectKeyboardMapping;
            const getContainerLayout: typeof _Keyboard.getContainerLayout;
            const setContainerLayout: typeof _Keyboard.setContainerLayout;
            type LayoutResultSuccess = _Keyboard.LayoutResultSuccess;
            type LayoutResultFail = _Keyboard.LayoutResultFail;
            type LayoutResult = _Keyboard.LayoutResult;
            type InputModeMapping = _Keyboard.InputModeMapping;
            type KeyboardInputMode = _Keyboard.KeyboardInputMode;
            type Position = _Keyboard.Position;
            type ContainerLayout = _Keyboard.ContainerLayout;
        }
    }
}
import { List as _List } from '../API/List.js';
declare global {
    namespace TcHmi {
        let List: typeof _List;
        type List<T> = _List<T>;
    }
}
import * as _Locale from '../API/Locale.js';
declare global {
    namespace TcHmi {
        /**
         * Provides resources for managing the localization.
         * @preserve (Part of the public API)
         */
        namespace Locale {
            const load: typeof _Locale.load;
            const get: typeof _Locale.get;
            const getRegisteredLocales: typeof _Locale.getRegisteredLocales;
            const getRegisteredLocalesForControl: typeof _Locale.getRegisteredLocalesForControl;
            const getRegisteredLocalesForFunction: typeof _Locale.getRegisteredLocalesForFunction;
            const LocalizationReader: typeof _Locale.LocalizationReader;
            type LocalizationReader<K extends string = string> = _Locale.LocalizationReader<K>;
            const Localization: typeof _Locale.Localization;
            type Localization<K extends string = string> = _Locale.Localization<K>;
            const ApplicationLocalization: typeof _Locale.ApplicationLocalization;
            type ApplicationLocalization = _Locale.ApplicationLocalization;
            const ControlLocalization: typeof _Locale.ControlLocalization;
            type ControlLocalization = _Locale.ControlLocalization;
            const FunctionLocalization: typeof _Locale.FunctionLocalization;
            type FunctionLocalization = _Locale.FunctionLocalization;
            const PackageLocalization: typeof _Locale.PackageLocalization;
            type PackageLocalization = _Locale.PackageLocalization;
            const Level: typeof _Locale.Level;
            type Level = _Locale.Level;
            type LocalizationOptions = _Locale.LocalizationOptions;
            type IWatchResultObject<K extends string = string> = _Locale.IWatchResultObject<K>;
            type IWatchTextResultObject = _Locale.IWatchTextResultObject;
        }
    }
}
import { Localization as _Localization } from '../API/Localization.js';
declare global {
    namespace TcHmi {
        /**
         * Allows handling date and time formatting.
         * @preserve (Part of the public API)
         */
        namespace Localization {
            const getDateTimeFormatter: typeof _Localization.getDateTimeFormatter;
            const formatDate: typeof _Localization.formatDate;
            const parseDate: typeof _Localization.parseDate;
            const parseInt: typeof _Localization.parseInt;
            type DateParts = _Localization.DateParts;
            type ParseOptions = _Localization.ParseOptions;
            type FormatOptions = _Localization.FormatOptions;
            type FormatType = _Localization.FormatType;
        }
    }
}
import * as _LocalStorage from '../API/LocalStorage.js';
declare global {
    namespace TcHmi {
        let LocalStorage: typeof _LocalStorage.LocalStorage;
        type LocalStorage<I extends {
            [key: string]: unknown;
        }, V extends Partial<{
            [K in keyof I]: unknown;
        }> = {
            [K in keyof I]?: never;
        }> = _LocalStorage.LocalStorage<I, V>;
        namespace LocalStorage {
            type BaseItem<S> = _LocalStorage.BaseItem<S>;
            type ValidatedItem<S, V> = _LocalStorage.ValidatedItem<S, V>;
        }
    }
}
import type { Controls as _ControlsLog, AdditionalInfo as _ControlsAdditionalInfo } from '../API/Log.Controls.js';
import { Log as _Log } from '../API/Log.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for logging.
         * @preserve (Part of the public API)
         */
        namespace Log {
            let Prefix: typeof _Log.Prefix;
            let Force: typeof _Log.Force;
            let error: typeof _Log.error;
            let errorEx: typeof _Log.errorEx;
            let warn: typeof _Log.warn;
            let warnEx: typeof _Log.warnEx;
            let info: typeof _Log.info;
            let infoEx: typeof _Log.infoEx;
            let debug: typeof _Log.debug;
            let debugEx: typeof _Log.debugEx;
            let performanceLog: typeof _Log.performanceLog;
            let performanceLogStart: typeof _Log.performanceLogStart;
            let performanceLogEnd: typeof _Log.performanceLogEnd;
            let buildMessage: typeof _Log.buildMessage;
            /**
             * Logging functions with contextual information for controls.
             * @preserve (Part of the public API)
             */
            namespace Controls {
                const error: typeof _ControlsLog.error;
                const warn: typeof _ControlsLog.warn;
                const info: typeof _ControlsLog.info;
                const debug: typeof _ControlsLog.debug;
                type AdditionalInfo = _ControlsAdditionalInfo;
            }
        }
    }
}
import { ObjectPath as _ObjectPath } from '../API/ObjectPath.js';
declare global {
    namespace TcHmi {
        let ObjectPath: typeof _ObjectPath;
        type ObjectPath = _ObjectPath;
    }
}
import { ObjectResolver as _ObjectResolver } from '../API/ObjectResolver.js';
declare global {
    namespace TcHmi {
        let ObjectResolver: typeof _ObjectResolver;
        type ObjectResolver<T extends object | null> = _ObjectResolver<T>;
        namespace ObjectResolver {
            type IWatchResultObject<T extends object | null> = _ObjectResolver.IWatchResultObject<T>;
            type IResultObject<T extends object | null> = _ObjectResolver.IResultObject<T>;
            type IOptions = _ObjectResolver.IOptions;
        }
    }
}
import * as _Server from '../API/Server.js';
import * as _ServerADS from '../API/Server.ADS.js';
import * as _ServerAuditTrail from '../API/Server.AuditTrail.js';
import * as _ServerDomains from '../API/Server.Domains.js';
import * as _ServerEvents from '../API/Server.Events.js';
import * as _ServerHistorize from '../API/Server.Historize.js';
import * as _ServerRecipeManagement from '../API/Server.RecipeManagement.js';
import * as _ServerUserManagement from '../API/Server.UserManagement.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for interaction with the server.
         * @preserve (Part of the public API)
         */
        namespace Server {
            let getWebsocketReadyState: typeof _Server._getWebsocketReadyState;
            let isWebsocketReady: typeof _Server._isWebsocketReady;
            let isReady: typeof _Server.isReady;
            let getApiVersion: typeof _Server.getApiVersion;
            let writeSymbol: typeof _Server.writeSymbol;
            let writeSymbolEx: typeof _Server.writeSymbolEx;
            let writeSymbolEx2: typeof _Server.writeSymbolEx2;
            let readSymbol: typeof _Server.readSymbol;
            let readSymbolEx: typeof _Server.readSymbolEx;
            let readSymbolEx2: typeof _Server.readSymbolEx2;
            let subscribeSymbol: typeof _Server.subscribeSymbol;
            let subscribeSymbolEx: typeof _Server.subscribeSymbolEx;
            let subscribeSymbolEx2: typeof _Server.subscribeSymbolEx2;
            let resolveSymbolSchema: typeof _Server.resolveSymbolSchema;
            let resolveSymbolSchemaEx: typeof _Server.resolveSymbolSchemaEx;
            let resolveSymbolMetaData: typeof _Server.resolveSymbolMetaData;
            let request: typeof _Server.request;
            let requestEx: typeof _Server.requestEx;
            let subscribe: typeof _Server.subscribe;
            let subscribeEx: typeof _Server.subscribeEx;
            let unsubscribe: typeof _Server.unsubscribe;
            let unsubscribeEx: typeof _Server.unsubscribeEx;
            let releaseRequest: typeof _Server.releaseRequest;
            let getCurrentUser: typeof _Server.getCurrentUser;
            let getGroupsOfCurrentUser: typeof _Server.getGroupsOfCurrentUser;
            let getCurrentUserConfig: typeof _Server.getCurrentUserConfig;
            let login: typeof _Server.login;
            let loginEx: typeof _Server.loginEx;
            let loginEx2: typeof _Server.loginEx2;
            let logout: typeof _Server.logout;
            let logoutEx: typeof _Server.logoutEx;
            let logoutEx2: typeof _Server.logoutEx2;
            let forceLogout: typeof _Server.forceLogout;
            let forceLogoutEx: typeof _Server.forceLogoutEx;
            let handleResponse: typeof _Server.handleResponse;
            type IResultObject<W = any, R = W> = _Server.IResultObject<W, R>;
            type IValueResultObject<R = any> = _Server.IValueResultObject<R>;
            type IMessage<W = any, R = W> = _Server.IMessage<W, R>;
            type IMessageBase<W = any, R = W> = _Server.IMessageBase<W, R>;
            type IReadWriteMessage<W = any, R = W> = _Server.IReadWriteMessage<W, R>;
            type ISubscriptionMessage<W = any, R = W> = _Server.ISubscriptionMessage<W, R>;
            type ISymbolOptions = _Server.ISymbolOptions;
            type IEventMessage<W = any, R = W> = _Server.IEventMessage<W, R>;
            let Error: typeof _Server.Error;
            type Error = _Server.Error;
            let ACCESS: typeof _Server.ACCESS;
            type ACCESS = _Server.ACCESS;
            type ICommand<W = any, R = W> = _Server.ICommand<W, R>;
            type IRequestType = _Server.IRequestType;
            type ICommandOptions = _Server.ICommandOptions;
            type IRequestOptions = _Server.IRequestOptions;
            let userConfigState: typeof _Server.UserConfigState;
            type userConfigState = _Server.UserConfigState;
            type userConfigOnServer = _Server.UserConfigOnServer;
            type IForceLogoutTarget = _Server.IForceLogoutTarget;
            type ISchemaResultObject = _Server.ISchemaResultObject;
            type IResolveSchemaOptions = _Server.IResolveSchemaOptions;
            /**
             * Provides functions of the ADS server extension.
             * @preserve (Part of the public API)
             */
            namespace ADS {
                const checkLicense: typeof _ServerADS.checkLicense;
                const checkLicenseEx: typeof _ServerADS.checkLicenseEx;
                let CheckLicenseResult: typeof _ServerADS.CheckLicenseResult;
                type ICheckLicenseResult = _ServerADS.ICheckLicenseResult;
                type CheckLicenseResult = _ServerADS.CheckLicenseResult;
            }
            /**
             * Provides functions for the Audit Trail extension.
             * @preserve (Part of the public API)
             */
            namespace AuditTrail {
                const createAuditLogEntry: typeof _ServerAuditTrail.createAuditLogEntry;
                const createAuditLogEntryEx: typeof _ServerAuditTrail.createAuditLogEntryEx;
                namespace CreateAuditLogEntry {
                    type AuditLogEntry = _ServerAuditTrail.AuditLogEntry;
                }
            }
            /**
             * Provides functions for monitoring domains / extensions of the server.
             * @preserve (Part of the public API)
             */
            namespace Domains {
                let watch: typeof _ServerDomains.watch;
                type IWatchResultObject<T = any> = _ServerDomains.IWatchResultObject<T>;
                type IServerWatchResultObject<T = any> = _ServerDomains.IServerWatchResultObject<T>;
                type IDomainInfo = _ServerDomains.IDomainInfo;
            }
            /**
             * Provides functions for monitoring alarms and server events.
             * @preserve (Part of the public API)
             */
            namespace Events {
                const confirmAlarm: typeof _ServerEvents.confirmAlarm;
                const exportEvents: typeof _ServerEvents.exportEvents;
                const registerConsumer: typeof _ServerEvents.registerConsumer;
                const flushRegistrations: typeof _ServerEvents.flushRegistrations;
                const parseServerEvent: typeof _ServerEvents.parseServerEvent;
                const createEvent: typeof _ServerEvents.createEvent;
                const isAlarm: typeof _ServerEvents.isAlarm;
                const isMessage: typeof _ServerEvents.isMessage;
                const isPayload: typeof _ServerEvents.isPayload;
                type Consumer = _ServerEvents.Consumer;
                type ListResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> = _ServerEvents.ListResult<TPayload, TParams>;
                type SubscriptionResult<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> = _ServerEvents.SubscriptionResult<TPayload, TParams>;
                let Type: typeof _ServerEvents.Type;
                type Type = _ServerEvents.Type;
                let Severity: typeof _ServerEvents.Severity;
                type Severity = _ServerEvents.Severity;
                let AlarmState: typeof _ServerEvents.AlarmState;
                type AlarmState = _ServerEvents.AlarmState;
                let ConfirmationState: typeof _ServerEvents.ConfirmationState;
                type ConfirmationState = _ServerEvents.ConfirmationState;
                type EventBase = _ServerEvents.EventBase;
                type MessageOrAlarm<T extends Dictionary<any> = Dictionary<any>> = _ServerEvents.MessageOrAlarm<T>;
                type Message<T extends Dictionary<any> = Dictionary<any>> = _ServerEvents.Message<T>;
                type Alarm<T extends Dictionary<any> = Dictionary<any>> = _ServerEvents.Alarm<T>;
                type PayloadEvent<T = any> = _ServerEvents.PayloadEvent<T>;
                let ChangeType: typeof _ServerEvents.ChangeType;
                type ChangeType = _ServerEvents.ChangeType;
                type Event<TPayload = any, TParams extends Dictionary<any> = Dictionary<any>> = _ServerEvents.Event<TPayload, TParams>;
                type RawServerEvent = _ServerEvents.RawServerEvent;
                type RawServerMessage = _ServerEvents.RawServerMessage;
                type RawServerAlarm = _ServerEvents.RawServerAlarm;
                let ServerAlarmChangeType: typeof _ServerEvents.ServerAlarmChangeType;
                type ServerAlarmChangeType = _ServerEvents.ServerAlarmChangeType;
            }
            /**
             * Provides functions for managing configuration settings of the TcHmiPostgresHistorize or TcHmiSqliteHistorize server extension.
             * @preserve (Part of the public API)
             */
            namespace Historize {
                const getDefaultDomain: typeof _ServerHistorize.getDefaultDomain;
                const watchDefaultDomain: typeof _ServerHistorize.watchDefaultDomain;
                const add: typeof _ServerHistorize.add;
                const addEx: typeof _ServerHistorize.addEx;
                const addEx2: typeof _ServerHistorize.addEx2;
                const remove: typeof _ServerHistorize.remove;
                const removeEx: typeof _ServerHistorize.removeEx;
                const removeEx2: typeof _ServerHistorize.removeEx2;
                const update: typeof _ServerHistorize.update;
                const updateEx: typeof _ServerHistorize.updateEx;
                const updateEx2: typeof _ServerHistorize.updateEx2;
                const get: typeof _ServerHistorize.get;
                const getEx: typeof _ServerHistorize.getEx;
                const getEx2: typeof _ServerHistorize.getEx2;
                type IWatchResultObject<T = any> = _ServerHistorize.IWatchResultObject<T>;
                type IEntrySettings = _ServerHistorize.IEntrySettings;
                type IEntrySettingsEx = _ServerHistorize.IEntrySettingsEx;
                type IOptions = _ServerHistorize.IOptions;
                type IEntryResultObject = _ServerHistorize.IEntryResultObject;
            }
            /**
             * Provides functions for recipe management.
             * @preserve (Part of the public API)
             */
            namespace RecipeManagement {
                const listRecipeTypes: typeof _ServerRecipeManagement.listRecipeTypes;
                const listRecipeTypesEx: typeof _ServerRecipeManagement.listRecipeTypesEx;
                const watchRecipeTypesList: typeof _ServerRecipeManagement.watchRecipeTypesList;
                const getRecipeType: typeof _ServerRecipeManagement.getRecipeType;
                const getRecipeTypeEx: typeof _ServerRecipeManagement.getRecipeTypeEx;
                const watchRecipeType: typeof _ServerRecipeManagement.watchRecipeType;
                const createRecipeTypeFolder: typeof _ServerRecipeManagement.createRecipeTypeFolder;
                const createRecipeTypeFolderEx: typeof _ServerRecipeManagement.createRecipeTypeFolderEx;
                const deleteRecipeTypeFolder: typeof _ServerRecipeManagement.deleteRecipeTypeFolder;
                const deleteRecipeTypeFolderEx: typeof _ServerRecipeManagement.deleteRecipeTypeFolderEx;
                const createRecipeType: typeof _ServerRecipeManagement.createRecipeType;
                const createRecipeTypeEx: typeof _ServerRecipeManagement.createRecipeTypeEx;
                const updateRecipeType: typeof _ServerRecipeManagement.updateRecipeType;
                const updateRecipeTypeEx: typeof _ServerRecipeManagement.updateRecipeTypeEx;
                const renameRecipeType: typeof _ServerRecipeManagement.renameRecipeType;
                const renameRecipeTypeEx: typeof _ServerRecipeManagement.renameRecipeTypeEx;
                const renameRecipeTypeFolder: typeof _ServerRecipeManagement.renameRecipeTypeFolder;
                const renameRecipeTypeFolderEx: typeof _ServerRecipeManagement.renameRecipeTypeFolderEx;
                const deleteRecipeType: typeof _ServerRecipeManagement.deleteRecipeType;
                const deleteRecipeTypeEx: typeof _ServerRecipeManagement.deleteRecipeTypeEx;
                const listRecipes: typeof _ServerRecipeManagement.listRecipes;
                const listRecipesEx: typeof _ServerRecipeManagement.listRecipesEx;
                const watchRecipeList: typeof _ServerRecipeManagement.watchRecipeList;
                const createRecipeFolder: typeof _ServerRecipeManagement.createRecipeFolder;
                const createRecipeFolderEx: typeof _ServerRecipeManagement.createRecipeFolderEx;
                const deleteRecipeFolder: typeof _ServerRecipeManagement.deleteRecipeFolder;
                const deleteRecipeFolderEx: typeof _ServerRecipeManagement.deleteRecipeFolderEx;
                const createRecipe: typeof _ServerRecipeManagement.createRecipe;
                const createRecipeEx: typeof _ServerRecipeManagement.createRecipeEx;
                const getRecipe: typeof _ServerRecipeManagement.getRecipe;
                const getRecipeEx: typeof _ServerRecipeManagement.getRecipeEx;
                const watchRecipe: typeof _ServerRecipeManagement.watchRecipe;
                const updateRecipe: typeof _ServerRecipeManagement.updateRecipe;
                const updateRecipeEx: typeof _ServerRecipeManagement.updateRecipeEx;
                const readFromTarget: typeof _ServerRecipeManagement.readFromTarget;
                const readFromTargetEx: typeof _ServerRecipeManagement.readFromTargetEx;
                const teach: typeof _ServerRecipeManagement.teach;
                const teachEx: typeof _ServerRecipeManagement.teachEx;
                const teachAsNewRecipe: typeof _ServerRecipeManagement.teachAsNewRecipe;
                const teachAsNewRecipeEx: typeof _ServerRecipeManagement.teachAsNewRecipeEx;
                const activate: typeof _ServerRecipeManagement.activate;
                const activateEx: typeof _ServerRecipeManagement.activateEx;
                const getActiveRecipes: typeof _ServerRecipeManagement.getActiveRecipes;
                const getActiveRecipesEx: typeof _ServerRecipeManagement.getActiveRecipesEx;
                const watchActiveRecipes: typeof _ServerRecipeManagement.watchActiveRecipes;
                const renameRecipe: typeof _ServerRecipeManagement.renameRecipe;
                const renameRecipeEx: typeof _ServerRecipeManagement.renameRecipeEx;
                const renameRecipeFolder: typeof _ServerRecipeManagement.renameRecipeFolder;
                const renameRecipeFolderEx: typeof _ServerRecipeManagement.renameRecipeFolderEx;
                const deleteRecipe: typeof _ServerRecipeManagement.deleteRecipe;
                const deleteRecipeEx: typeof _ServerRecipeManagement.deleteRecipeEx;
                const downloadRecipes: typeof _ServerRecipeManagement.downloadRecipes;
                const downloadRecipesEx: typeof _ServerRecipeManagement.downloadRecipesEx;
                const downloadRecipeTypes: typeof _ServerRecipeManagement.downloadRecipeTypes;
                const downloadRecipeTypesEx: typeof _ServerRecipeManagement.downloadRecipeTypesEx;
                const uploadRecipeFiles: typeof _ServerRecipeManagement.uploadRecipeFiles;
                const uploadRecipeFilesEx: typeof _ServerRecipeManagement.uploadRecipeFilesEx;
                const isRecipe: typeof _ServerRecipeManagement.isRecipe;
                const isRecipeType: typeof _ServerRecipeManagement.isRecipeType;
                type RecipeType = _ServerRecipeManagement.RecipeType;
                type FolderRecipeType = _ServerRecipeManagement.FolderRecipeType;
                type IRecipeListResultObject = _ServerRecipeManagement.IRecipeListResultObject;
                type Recipe = _ServerRecipeManagement.Recipe;
                type FolderRecipe = _ServerRecipeManagement.FolderRecipe;
                type IRecipeTypeListResultObject = _ServerRecipeManagement.IRecipeTypeListResultObject;
                type IRecipeTypeGetResultObject = _ServerRecipeManagement.IRecipeTypeGetResultObject;
                type IGetRecipeResultObject = _ServerRecipeManagement.IGetRecipeResultObject;
                type IReadFromTargetResultObject = _ServerRecipeManagement.IReadFromTargetResultObject;
                type IGetActiveRecipesResultObject = _ServerRecipeManagement.IGetActiveRecipesResultObject;
                type IRecipeOptions = _ServerRecipeManagement.IRecipeOptions;
                type IRecipeListOptions = _ServerRecipeManagement.IRecipeListOptions;
                type IRecipeDownloadOptions = _ServerRecipeManagement.IRecipeDownloadOptions;
                type IRecipeWatchOptions = _ServerRecipeManagement.IRecipeWatchOptions;
                type IWatchResultObject<T = any> = _ServerRecipeManagement.IWatchResultObject<T>;
            }
            /**
             * Provides functions for user management.
             * @preserve (Part of the public API)
             */
            namespace UserManagement {
                const addUser: typeof _ServerUserManagement.addUser;
                const addUserEx: typeof _ServerUserManagement.addUserEx;
                const listUsernames: typeof _ServerUserManagement.listUsernames;
                const listUsernamesEx: typeof _ServerUserManagement.listUsernamesEx;
                const listUsers: typeof _ServerUserManagement.listUsers;
                const listUsersEx: typeof _ServerUserManagement.listUsersEx;
                const listUserGroups: typeof _ServerUserManagement.listUserGroups;
                const listUserGroupsEx: typeof _ServerUserManagement.listUserGroupsEx;
                const listUserGroupNames: typeof _ServerUserManagement.listUserGroupNames;
                const listUserGroupNamesEx: typeof _ServerUserManagement.listUserGroupNamesEx;
                const listUsersInGroup: typeof _ServerUserManagement.listUsersInGroup;
                const listUsersInGroupEx: typeof _ServerUserManagement.listUsersInGroupEx;
                const removeUser: typeof _ServerUserManagement.removeUser;
                const removeUserEx: typeof _ServerUserManagement.removeUserEx;
                const updateUser: typeof _ServerUserManagement.updateUser;
                const updateUserEx: typeof _ServerUserManagement.updateUserEx;
                const getApiAccess: typeof _ServerUserManagement.getApiAccess;
                type IUserManagementOptions = _ServerUserManagement.IUserManagementOptions;
                type IBaseUserDetails = _ServerUserManagement.IBaseUserDetails;
                type IUserDetails = _ServerUserManagement.IUserDetails;
                type IUpdateUserDetails = _ServerUserManagement.IUpdateUserDetails;
                type IUsernameListResultObject = _ServerUserManagement.IUsernameListResultObject;
                type IUserResultObject = _ServerUserManagement.IUserResultObject;
                type IGroupDetails = _ServerUserManagement.IGroupDetails;
                type IGroupResultObject = _ServerUserManagement.IGroupResultObject;
                type GroupNamesResultObject = _ServerUserManagement.GroupNamesResultObject;
                type IApiAccessResultObject = _ServerUserManagement.IApiAccessResultObject;
            }
        }
    }
}
import * as _StyleProvider from '../API/StyleProvider.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for manipulating HTML elements.
         * @preserve (Part of the public API)
         */
        namespace StyleProvider {
            const getComputedElementStyle: typeof _StyleProvider.getComputedElementStyle;
            const getSimpleElementStyle: typeof _StyleProvider.getSimpleElementStyle;
            const setSimpleElementStyle: typeof _StyleProvider.setSimpleElementStyle;
            const processGenericStyle: typeof _StyleProvider.processGenericStyle;
            const resolveSolidColorAsCssValue: typeof _StyleProvider.resolveSolidColorAsCssValue;
            const resolveSolidColorAsRGBA: typeof _StyleProvider.resolveSolidColorAsRGBA;
            const normalizeColorAsCssValue: typeof _StyleProvider.normalizeColorAsCssValue;
            const resolveLinearGradientColorAsCssValue: typeof _StyleProvider.resolveLinearGradientColorAsCssValue;
            const processBackground: typeof _StyleProvider.processBackground;
            const processBackgroundColor: typeof _StyleProvider.processBackgroundColor;
            const processBackgroundImage: typeof _StyleProvider.processBackgroundImage;
            const processFillColor: typeof _StyleProvider.processFillColor;
            const processStrokeColor: typeof _StyleProvider.processStrokeColor;
            const processTextColor: typeof _StyleProvider.processTextColor;
            const processBorderColor: typeof _StyleProvider.processBorderColor;
            const processBorderWidth: typeof _StyleProvider.processBorderWidth;
            const processBorderRadius: typeof _StyleProvider.processBorderRadius;
            const processBorderStyle: typeof _StyleProvider.processBorderStyle;
            const processBoxShadow: typeof _StyleProvider.processBoxShadow;
            const processFontFamily: typeof _StyleProvider.processFontFamily;
            const processFontSize: typeof _StyleProvider.processFontSize;
            const processFontStyle: typeof _StyleProvider.processFontStyle;
            const processFontWeight: typeof _StyleProvider.processFontWeight;
            const processVisibility: typeof _StyleProvider.processVisibility;
            const processContentHorizontalAlignment: typeof _StyleProvider.processContentHorizontalAlignment;
            const processContentVerticalAlignment: typeof _StyleProvider.processContentVerticalAlignment;
            const processContentPadding: typeof _StyleProvider.processContentPadding;
            const processTransform: typeof _StyleProvider.processTransform;
            const getTextWidth: typeof _StyleProvider.getTextWidth;
        }
    }
}
import { Symbol as _Symbol } from '../API/Symbol.js';
declare global {
    namespace TcHmi {
        let Symbol: typeof _Symbol;
        type Symbol<ST = any> = _Symbol<ST>;
        namespace Symbol {
            type ISymbolResultObject = _Symbol.ISymbolResultObject;
            type IWatchResultObject<T = any> = _Symbol.IWatchResultObject<T>;
            type IServerWatchResultObject<T = any> = _Symbol.IServerWatchResultObject<T>;
            type IReadResultObject<T = any> = _Symbol.IReadResultObject<T>;
            type IServerReadResultObject<T = any> = _Symbol.IServerReadResultObject<T>;
            type IWriteResultObject<T = any> = _Symbol.IWriteResultObject<T>;
            type IServerWriteResultObject<W = any, R = W> = _Symbol.IServerWriteResultObject<W, R>;
            type ISchemaResultObject = _Symbol.ISchemaResultObject;
            type IExistsResultObject = _Symbol.IExistsResultObject;
            type IAttributesResultObject = _Symbol.IAttributesResultObject;
            type IAttributeResultObject<T = any> = _Symbol.IAttributeResultObject<T>;
            type IVersionsResultObject = _Symbol.IVersionsResultObject;
            type IServerSymbolMetaDataResultObject = _Symbol.IServerSymbolMetaDataResultObject;
            type IListSymbols = _Symbol.IListSymbols;
            type IOptions = _Symbol.IOptions;
            type ReferenceDelegation = _Symbol.ReferenceDelegation;
            type IResolveSymbolReferenceResultObject = _Symbol.IResolveSymbolReferenceResultObject;
            type ExpressionContainer = _Symbol.ExpressionContainer;
            type ObjectResolver<T extends object | null> = _ObjectResolver<T>;
            namespace ObjectResolver {
                /**
                 * Please use TcHmi.ObjectResolver.IWatchResultObject instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IWatchResultObject instead.
                 */
                type IWatchResultObject<T extends object | null> = _ObjectResolver.IWatchResultObject<T>;
                /**
                 * Please use TcHmi.ObjectResolver.IResultObject instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IResultObject instead.
                 */
                type IResultObject<T extends object | null> = _ObjectResolver.IResultObject<T>;
                /**
                 * Please use TcHmi.ObjectResolver.IOptions instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IOptions instead.
                 */
                type IOptions = _ObjectResolver.IOptions;
            }
        }
    }
}
import { SymbolExpression as _SymbolExpression } from '../API/SymbolExpression.js';
declare global {
    namespace TcHmi {
        let SymbolExpression: typeof _SymbolExpression;
        type SymbolExpression = _SymbolExpression;
        namespace SymbolExpression {
            type IParseData = _SymbolExpression.IParseData;
            type IOptions = _SymbolExpression.IOptions;
        }
    }
}
import * as _TcSpeech from '../API/TcSpeech.js';
declare global {
    namespace TcHmi {
        /**
         * Functions for interaction with TcSpeech.
         * @preserve (Part of the public API)
         */
        namespace TcSpeech {
            let openConnection: typeof _TcSpeech.openConnection;
            let closeConnection: typeof _TcSpeech.closeConnection;
            let setVolume: typeof _TcSpeech.setVolume;
            let SpeechSynthesis: typeof _TcSpeech.SpeechSynthesis;
            type SpeechSynthesis = _TcSpeech.SpeechSynthesis;
            type BaseConfig = _TcSpeech.BaseConfig;
            type ConnectionOptions = _TcSpeech.ConnectionOptions;
            let AudioEntityPriority: typeof _TcSpeech.AudioEntityPriority;
            namespace AudioEntityPriority {
                type Low = typeof _TcSpeech.AudioEntityPriority.Low;
                type Normal = typeof _TcSpeech.AudioEntityPriority.Normal;
                type High = typeof _TcSpeech.AudioEntityPriority.High;
            }
            type AudioEntityPriority = _TcSpeech.AudioEntityPriority;
            type SpeechSynthesisResult = _TcSpeech.SpeechSynthesisResult;
            type IEventCallbackParameter = _TcSpeech.IEventCallbackParameter;
        }
    }
}
import { TimedAsyncTask as _TimedAsyncTask } from '../API/TimedAsyncTask.js';
declare global {
    namespace TcHmi {
        let TimedAsyncTask: typeof _TimedAsyncTask;
        type TimedAsyncTask = _TimedAsyncTask;
    }
}
import * as _Theme from '../API/Theme.js';
import * as _ThemeProperties from '../API/Theme.Properties.js';
import * as _ThemeResources from '../API/Theme.Resources.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions for managing and changing themes.
         * @preserve (Part of the public API)
         */
        namespace Theme {
            let get: typeof _Theme.get;
            let set: typeof _Theme.set;
            let getRegisteredThemes: typeof _Theme.getRegisteredThemes;
            type Resource<T extends any> = _Theme.Resource<T>;
            /**
             * Control property related API
             * @preserve (Part of the public API)
             */
            namespace Properties {
                const getDefaultValue: typeof _ThemeProperties.getDefaultValue;
                const setThemeValue: typeof _ThemeProperties.setThemeValue;
                const releaseThemeValue: typeof _ThemeProperties.releaseThemeValue;
            }
            /**
             * Control resource related API
             * @preserve (Part of the public API)
             */
            namespace Resources {
                const get: typeof _ThemeResources.get;
                const resolveBasePath: typeof _ThemeResources.resolveBasePath;
            }
        }
    }
}
import * as _TopMostLayer from '../API/TopMostLayer.js';
declare global {
    namespace TcHmi {
        /**
         * Provides a layer to show elements above the normal visualization.
         * @preserve (Part of the public API)
         */
        namespace TopMostLayer {
            const add: typeof _TopMostLayer.add;
            const remove: typeof _TopMostLayer.remove;
            const addEx: typeof _TopMostLayer.addEx;
            const removeEx: typeof _TopMostLayer.removeEx;
            type IOptionsBase = _TopMostLayer.IOptionsBase;
            const ConflictResolution: typeof _TopMostLayer.ConflictResolution;
            type ConflictResolution = _TopMostLayer.ConflictResolution;
            type IOptions<E extends HTMLElement | JQuery = JQuery> = _TopMostLayer.IOptions<E>;
            type IOptionsEx<E extends HTMLElement | JQuery = JQuery> = _TopMostLayer.IOptionsEx<E>;
            type IResizeResultObject<E extends HTMLElement | JQuery = JQuery> = _TopMostLayer.IResizeResultObject<E>;
            type IElemRemoveResultObject<E extends HTMLElement | JQuery = JQuery> = _TopMostLayer.IElemRemoveResultObject<E>;
        }
    }
}
import * as _Trigger from '../API/Trigger.js';
import * as _TriggerActions from '../API/Trigger.Actions.js';
declare global {
    namespace TcHmi {
        type Trigger = _Trigger.Trigger;
        /**
         * A trigger is based on an event, which is defined by a global unique identifier.
         * Events raised by controls are always defined with the following pattern: [Control_ID].[EVENT_NAME]
         * The available control events are defined in the associated control markup file.
         */
        namespace Trigger {
            let isCondition: typeof _Trigger.isCondition;
            let isSwitchCase: typeof _Trigger.isSwitchCase;
            let isControlApiFunction: typeof _Trigger.isControlApiFunction;
            let isWriteToSymbol: typeof _Trigger.isWriteToSymbol;
            let isComment: typeof _Trigger.isComment;
            let isFunction: typeof _Trigger.isFunction;
            let isJavaScript: typeof _Trigger.isJavaScript;
            let isActionTemplate: typeof _Trigger.isActionTemplate;
            let isFunctionExpression: typeof _Trigger.isFunctionExpression;
            let isControlAttributeBindingTarget: typeof _Trigger.isControlAttributeBindingTarget;
            type RegisterContext<T1 = any> = _Trigger.RegisterContext<T1>;
            type baseAction = _Trigger.baseAction;
            type Action = _Trigger.Action;
            type ConditionIf = _Trigger.ConditionIf;
            type ConditionElseIf = _Trigger.ConditionElseIf;
            type ConditionElse = _Trigger.ConditionElse;
            type Condition = _Trigger.Condition;
            type SwitchCase = _Trigger.SwitchCase;
            type ControlApiFunction = _Trigger.ControlApiFunction;
            type WriteToSymbol = _Trigger.WriteToSymbol;
            type Comment = _Trigger.Comment;
            type TAFunction = _Trigger.TAFunction;
            type JavaScript = _Trigger.JavaScript;
            type ActionTemplate = _Trigger.ActionTemplate;
            type FunctionExpression = _Trigger.FunctionExpression;
            type BindingTarget = _Trigger.BindingTarget;
            type ControlAttributeBindingTarget = _Trigger.ControlAttributeBindingTarget;
            type Expression = _Trigger.Expression;
            type Case = _Trigger.Case;
            type VCase = _Trigger.VCase;
            type DCase = _Trigger.DCase;
            /**
             * Namespace to handle actions as used in triggers.
             * @preserve (Part of the public API)
             */
            namespace Actions {
                let run: typeof _TriggerActions.run;
            }
        }
    }
}
import * as _Type from '../API/Type.js';
import * as _TypeSchema from '../API/Type.Schema.js';
declare global {
    namespace TcHmi {
        namespace Type {
            let getSchema: typeof _Type.getSchema;
            namespace Schema {
                const resolveDefault: typeof _TypeSchema.resolveDefault;
                const resolveType: typeof _TypeSchema.resolveType;
                const recurseThroughSchema: typeof _TypeSchema.recurseThroughSchema;
                const matchesSchemaType: typeof _TypeSchema.matchesSchemaType;
                type RecurseSchemaResult<T extends any = any> = _TypeSchema.RecurseSchemaResult<T>;
            }
        }
    }
}
import * as _UiProvider from '../API/UiProvider.js';
import * as _UiProviderKeyboardProvider from '../API/UiProvider.KeyboardProvider.js';
import * as _UiProviderPopupProvider from '../API/UiProvider.PopupProvider.js';
declare global {
    namespace TcHmi {
        /**
         * Provides an interface for Ui Provider.
         * @preserve (Part of the public API)
         */
        namespace UiProvider {
            let register: typeof _UiProvider.register;
            let getProviders: typeof _UiProvider.getProviders;
            let getProvider: typeof _UiProvider.getProvider;
            let getPreferredProvider: typeof _UiProvider.getPreferredProvider;
            let BaseProvider: typeof _UiProvider.BaseProvider;
            let KeyboardProvider: typeof _UiProviderKeyboardProvider.KeyboardProvider;
            type KeyboardProvider = _UiProviderKeyboardProvider.KeyboardProvider;
            let PopupProvider: typeof _UiProviderPopupProvider.PopupProvider;
            type PopupProvider = _UiProviderPopupProvider.PopupProvider;
            namespace PopupProvider {
                type BackgroundAction<A extends string> = _UiProviderPopupProvider.PopupProvider.BackgroundAction<A>;
                type PromptAction<A extends string> = _UiProviderPopupProvider.PopupProvider.PromptAction<A>;
                type BackgroundMode = _UiProviderPopupProvider.PopupProvider.BackgroundMode;
                type PositioningMode = _UiProviderPopupProvider.PopupProvider.PositioningMode;
                type Bounds = _UiProviderPopupProvider.PopupProvider.Bounds;
                type StorageSettings = _UiProviderPopupProvider.PopupProvider.StorageSettings;
                type MessageBox<T = any> = _UiProviderPopupProvider.PopupProvider.MessageBox<T>;
                type HtmlElementBox<T = any> = _UiProviderPopupProvider.PopupProvider.HtmlElementBox<T>;
                type InputPrompt = _UiProviderPopupProvider.PopupProvider.InputPrompt;
                type InteractiveWritePrompt = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt;
                namespace Popup {
                    type LocalizableTexts = _UiProviderPopupProvider.PopupProvider.Popup.LocalizableTexts;
                }
                namespace MessageBox {
                    type LocalizableTexts = _UiProviderPopupProvider.PopupProvider.MessageBox.LocalizableTexts;
                    type BackgroundAction<R = any> = _UiProviderPopupProvider.PopupProvider.MessageBox.BackgroundAction<R>;
                    type PromptAction<R = any> = _UiProviderPopupProvider.PopupProvider.MessageBox.PromptAction<R>;
                }
                namespace HtmlElementBox {
                    type BackgroundAction<R = any> = _UiProviderPopupProvider.PopupProvider.HtmlElementBox.BackgroundAction<R>;
                    type PromptAction<R = any> = _UiProviderPopupProvider.PopupProvider.HtmlElementBox.PromptAction<R>;
                }
                namespace InputPrompt {
                    type LocalizableTexts = _UiProviderPopupProvider.PopupProvider.InputPrompt.LocalizableTexts;
                    type BackgroundAction = _UiProviderPopupProvider.PopupProvider.InputPrompt.BackgroundAction;
                    type PromptAction<R = any> = _UiProviderPopupProvider.PopupProvider.PromptAction<string> | {
                        result: R;
                    };
                }
                namespace InteractiveWritePrompt {
                    type Symbol = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.Symbol;
                    type AuthOptions = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.AuthOptions;
                    type Options = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.Options;
                    type Value = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.Value;
                    type SymbolMetaData = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.SymbolMetaData;
                    type BackgroundAction = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.BackgroundAction;
                    type PromptAction = _UiProviderPopupProvider.PopupProvider.InteractiveWritePrompt.PromptAction;
                }
            }
        }
    }
}
import * as _ValueConverter from '../API/ValueConverter.js';
declare global {
    namespace TcHmi {
        /**
         * Allows converting of values from any type to any type if types are compatible.
         * @preserve (Part of the public API)
         */
        namespace ValueConverter {
            const toObject: typeof _ValueConverter.toObject;
            const toObjectEx: typeof _ValueConverter.toObjectEx;
            const toString: typeof _ValueConverter.toString;
            const toStringEx: typeof _ValueConverter.toStringEx;
            const toDimensionUnit: typeof _ValueConverter.toDimensionUnit;
            const toDimensionUnitEx: typeof _ValueConverter.toDimensionUnitEx;
            const toAngleUnit: typeof _ValueConverter.toAngleUnit;
            const toAngleUnitEx: typeof _ValueConverter.toAngleUnitEx;
            const toBorderStyleValue: typeof _ValueConverter.toBorderStyleValue;
            const toBorderStyleValueEx: typeof _ValueConverter.toBorderStyleValueEx;
            const toFontStyle: typeof _ValueConverter.toFontStyle;
            const toFontStyleEx: typeof _ValueConverter.toFontStyleEx;
            const toFontSizeUnit: typeof _ValueConverter.toFontSizeUnit;
            const toFontSizeUnitEx: typeof _ValueConverter.toFontSizeUnitEx;
            const toFontWeight: typeof _ValueConverter.toFontWeight;
            const toFontWeightEx: typeof _ValueConverter.toFontWeightEx;
            const toHorizontalAlignment: typeof _ValueConverter.toHorizontalAlignment;
            const toHorizontalAlignmentEx: typeof _ValueConverter.toHorizontalAlignmentEx;
            const toScaleModeString: typeof _ValueConverter.toScaleModeString;
            const toScaleModeStringEx: typeof _ValueConverter.toScaleModeStringEx;
            const toSizeMode: typeof _ValueConverter.toSizeMode;
            const toSizeModeEx: typeof _ValueConverter.toSizeModeEx;
            const toSizeModeWithContent: typeof _ValueConverter.toSizeModeWithContent;
            const toSizeModeWithContentEx: typeof _ValueConverter.toSizeModeWithContentEx;
            const toVerticalAlignment: typeof _ValueConverter.toVerticalAlignment;
            const toVerticalAlignmentEx: typeof _ValueConverter.toVerticalAlignmentEx;
            const toVisibility: typeof _ValueConverter.toVisibility;
            const toVisibilityEx: typeof _ValueConverter.toVisibilityEx;
            const toToggleState: typeof _ValueConverter.toToggleState;
            const toToggleStateEx: typeof _ValueConverter.toToggleStateEx;
            const toFontFamily: typeof _ValueConverter.toFontFamily;
            const toFontFamilyEx: typeof _ValueConverter.toFontFamilyEx;
            const toNumber: typeof _ValueConverter.toNumber;
            const toNumberEx: typeof _ValueConverter.toNumberEx;
            const toBoolean: typeof _ValueConverter.toBoolean;
            const toBooleanEx: typeof _ValueConverter.toBooleanEx;
            const toBigInt: typeof _ValueConverter.toBigInt;
            const toBigIntEx: typeof _ValueConverter.toBigIntEx;
            const toBigInt64: typeof _ValueConverter.toBigInt64;
            const toBigInt64Ex: typeof _ValueConverter.toBigInt64Ex;
            const toUnsignedBigInt64: typeof _ValueConverter.toUnsignedBigInt64;
            const toUnsignedBigInt64Ex: typeof _ValueConverter.toUnsignedBigInt64Ex;
            const toEnum: typeof _ValueConverter.toEnum;
            const toEnumEx: typeof _ValueConverter.toEnumEx;
            const toType: typeof _ValueConverter.toType;
            const toTypeEx: typeof _ValueConverter.toTypeEx;
            const toSchemaType: typeof _ValueConverter.toSchemaType;
            const toSchemaTypeEx: typeof _ValueConverter.toSchemaTypeEx;
            const ConvertDirection: typeof _ValueConverter.ConvertDirection;
            type IResultObject<T extends any = any> = _ValueConverter.IResultObject<T>;
            type ConvertDirection = _ValueConverter.ConvertDirection;
        }
    }
}
declare global {
    namespace TcHmi {
        let version: Version;
    }
}
import * as _View from '../API/View.js';
declare global {
    namespace TcHmi {
        /**
         * Provides functions to set partials as view.
         * @preserve (Part of the public API)
         */
        namespace View {
            let load: typeof _View.load;
            let get: typeof _View.get;
            let setScaleMode: typeof _View.setScaleMode;
            let addViewportElement: typeof _View.addViewportElement;
            let removeViewportElement: typeof _View.removeViewportElement;
            let getViewportElementDimension: typeof _View.getViewportElementDimension;
        }
    }
}
import type * as _TcHmiControl from '../Controls/System/TcHmiControl/TcHmiControl.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        /**
         * Base class for all TwinCAT HMI Controls
         * Check out
         * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3845361931.html?id=3265481440996758836
         * for an API reference.
         */
        const TcHmiControl: typeof _TcHmiControl.Control;
        type TcHmiControl = _TcHmiControl.Control;
        namespace TcHmiControl {
            type IControlSpecificData = _TcHmiControl.IControlSpecificData;
        }
    }
}
import type * as _TcHmiContainerControl from '../Controls/System/TcHmiContainerControl/TcHmiContainerControl.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiContainerControl: typeof _TcHmiContainerControl.Control;
        type TcHmiContainerControl = _TcHmiContainerControl.Control;
    }
}
import type * as _TcHmiContainer from '../Controls/System/TcHmiContainer/TcHmiContainer.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiContainer: typeof _TcHmiContainer.Control;
        type TcHmiContainer = _TcHmiContainer.Control;
    }
}
import type * as _TcHmiGrid from '../Controls/System/TcHmiGrid/TcHmiGrid.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiGrid: typeof _TcHmiGrid.Control;
        type TcHmiGrid = _TcHmiGrid.Control;
        namespace TcHmiGrid {
            type IControlSpecificData = _TcHmiGrid.IControlSpecificData;
            type IColumnOptions = _TcHmiGrid.IColumnOptions;
            type IRowOptions = _TcHmiGrid.IRowOptions;
            type ICellOptions = _TcHmiGrid.ICellOptions;
        }
    }
}
import type * as _TcHmiPartial from '../Controls/System/TcHmiPartial/TcHmiPartial.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiPartial: typeof _TcHmiPartial.Control;
        type TcHmiPartial = _TcHmiPartial.Control;
    }
}
import type * as _TcHmiContent from '../Controls/System/TcHmiContent/TcHmiContent.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiContent: typeof _TcHmiContent.Control;
        type TcHmiContent = _TcHmiContent.Control;
    }
}
import type * as _TcHmiView from '../Controls/System/TcHmiView/TcHmiView.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiView: typeof _TcHmiView.Control;
        type TcHmiView = _TcHmiView.Control;
    }
}
import type * as _TcHmiUserControl from '../Controls/System/TcHmiUserControl/TcHmiUserControl.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiUserControl: typeof _TcHmiUserControl.Control;
        type TcHmiUserControl = _TcHmiUserControl.Control;
    }
}
import type * as _TcHmiUserControlHost from '../Controls/System/TcHmiUserControlHost/TcHmiUserControlHost.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiUserControlHost: typeof _TcHmiUserControlHost.Control;
        type TcHmiUserControlHost = _TcHmiUserControlHost.Control;
        namespace TcHmiUserControlHost {
            type TcHmiUserControlParameter = _TcHmiUserControlHost.TcHmiUserControlParameter;
            type ControlAttributeDescription = _TcHmiUserControlHost.ControlAttributeDescription;
        }
    }
}
import type * as _TcHmiRegion from '../Controls/System/TcHmiRegion/TcHmiRegion.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiRegion: typeof _TcHmiRegion.Control;
        type TcHmiRegion = _TcHmiRegion.Control;
        namespace TcHmiRegion {
            type IControlSpecificData = _TcHmiRegion.IControlSpecificData;
            type BenchmarkObject = _TcHmiRegion.BenchmarkObject;
        }
    }
}
import type * as _TcHmiHtmlHost from '../Controls/System/TcHmiHtmlHost/TcHmiHtmlHost.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiHtmlHost: typeof _TcHmiHtmlHost.Control;
        type TcHmiHtmlHost = _TcHmiHtmlHost.Control;
    }
}
import type * as _TcHmiPopup from '../Controls/System/TcHmiPopup/TcHmiPopup.esm.js';
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiPopup: typeof _TcHmiPopup.Control;
        type TcHmiPopup = _TcHmiPopup.Control;
        namespace TcHmiPopup {
            type TargetFile = _TcHmiPopup.TargetFile;
            type Button = _TcHmiPopup.Button;
        }
    }
}
//# sourceMappingURL=TcHmi.d.ts.map