import{createTask}from"../System/Callback.js";import{Symbol as SystemSymbol}from"../System/Symbol.js";import{SymbolExpression}from"./SymbolExpression.js";import{ObjectResolver as ApiObjectResolver}from"./ObjectResolver.js";import{Log}from"./Log.js";import*as Callback from"./Callback.js";import{Errors,SymbolType}from"./_Types.js";import{Destroyable}from"./Destroyable.js";
/**
 * Provides methods to read and write symbol values and schemas.
 * @template ST Type of the value in the symbol.
 * @preserve (Part of the public API)
 */export class Symbol extends Destroyable{constructor(expressionOrExpressionObject){super(),this.__symbol=new SystemSymbol(expressionOrExpressionObject)}__symbol;
/**
     * Reads the value of the current symbol.
     * return undefined if the symbol is not available
     * @returns A copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
read(){if(!this.__symbol)return;let res;return this.__symbol.isProcessedAsync()?(Log.warn('[Source=Framework, Module=TcHmi.Symbol] The non static function "TcHmi.Symbol.read()" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx(callback ?: (this: TcHmi.Symbol, data: TcHmi.Symbol.IReadResultObject | TcHmi.Symbol.IServerReadResultObject) => void)" instead.'),res):(this.__symbol.read(data=>{data.error===Errors.NONE&&(res=data.value)}),res)}
/**
     * Reads the value of the current symbol and raises a callback with a copy of the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param callback with gets a copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */readEx(callback){return this.readEx2(null,callback)}
/**
     * Reads the value of the current symbol and raises a callback with a copy of the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param options Options for symbol handling
     * @param callback with gets a copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */readEx2(options,callback){const callstackLinker=createTask("Symbol.read>"+this.getExpression());let destroy=this.__symbol.readEx(options,data=>{const result={error:data.error,expression:data.expression,destroy:data.destroy};void 0!==data.expressionResolved&&(result.expressionResolved=data.expressionResolved),void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),callstackLinker.run(()=>{Callback.callSafeEx(callback,this,result)})});return()=>{destroy?.(),destroy=null}}
/**
     * Writes the value of the current symbol.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param value The new value
     * @param callback Callback will be called after success or failure
     * @template W Type of the write value. Falls back to type of the symbol.
     * @template R Type of the value after write. Falls back to W if not specified.
     * @preserve (Part of the public API)
     */write(value,callback){return this.writeEx(value,null,callback)}
/**
     * Writes the value of the current symbol.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param value Value to write
     * @param options Options for symbol handling
     * @param callback Callback will be called after success or failure
     * @template W Type of the write value. Falls back to type of the symbol.
     * @template R Type of the value after write. Falls back to W if not specified.
     * @preserve (Part of the public API)
     */writeEx(value,options,callback){const callstackLinker=createTask("Symbol.write>"+this.getExpression());let destroy=this.__symbol.writeEx2(value,options,null,data=>{const result={error:data.error,expression:data.expression,destroy:data.destroy};void 0!==data.expressionResolved&&(result.expressionResolved=data.expressionResolved),void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),callstackLinker.run(()=>{Callback.callSafeEx(callback,this,result)})});return()=>{destroy?.(),destroy=null}}
/**
     * Watches for changes of the current symbol and raises the callback in case of a change.
     * Returns a destroy function to remove the watch.
     * @param callback Callback will be called with each change of the value of the symbol
     * @template T Type of the value to watch. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */watch(callback){return this.watchEx(null,callback)}
/**
     * Watches for changes of the current symbol and raises the callback in case of a change.
     * Returns a destroy function to remove the watch.
     * @param options Options for symbol handling
     * @param callback Callback will be called with each change of the value of the symbol
     * @template T Type of the value to watch. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */watchEx(options,callback){const callstackLinker=createTask("Symbol.watch>"+this.getExpression());let destroy=this.__symbol.watchEx(options,data=>{callstackLinker.run(()=>{Symbol.isIServerReadResultObject(data)?Callback.callSafeEx(callback,this,{error:data.error,value:data.value,expressionResolved:data.expressionResolved,expression:data.expression,response:data.response,details:data.details,destroy:data.destroy}):Callback.callSafeEx(callback,this,{error:data.error,value:data.value,expressionResolved:data.expressionResolved,expression:data.expression,details:data.details,destroy:data.destroy})})});return()=>{destroy?.(),destroy=null}}
/**
     * Returns the underlying SymbolExpression object.
     * @preserve (Part of the public API)
     */getExpression(){return this.__symbol.getExpression()}
/**
     * Returns the context of the symbol.
     * @preserve (Part of the public API)
     */getContext(){return this.__symbol.getContext()}
/**
     * Resolves the expression.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */resolveExpression(callback){return this.__symbol.resolveExpression(callback)}
/**
     * Watches the expression.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */watchExpression(callback){return this.__symbol.watchExpression(callback)}
/**
     * Resolves the schema of the current symbol.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */resolveSchema(callback){const callstackLinker=createTask("Symbol.resolveSchema>"+this.getExpression());this.__symbol.resolveSchema(data=>{callstackLinker.run(()=>{data.error===Errors.NONE?Callback.callSafeEx(callback,this,{error:Errors.NONE,schema:data.schema,expressionResolved:data.expressionResolved,expression:data.expression}):Callback.callSafeEx(callback,this,{error:data.error,details:data.details,expressionResolved:data.expressionResolved,expression:data.expression})})})}
/**
     * Resolves the reference of the symbol.
     * Either a reference to the symbol itself or a reference to the value when the value is of type TcHmi.Symbol.
     * @param callback Callback will be called after success or failure.
     * @param options Options for symbol handling
     * @preserve (Part of the public API)
     */resolveReference(callback,options){let destroyRefValueRead,destroyResolveExpression,destroyResolveSymbolReference,destroy=()=>{destroyRefValueRead?.(),destroyResolveExpression?.(),destroyResolveSymbolReference?.()};return destroyResolveExpression=this.resolveExpression(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(!destroyResolveExpression&&data.destroy&&(destroyResolveExpression=data.destroy),data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(!data.expressionResolved)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res);let expressionOptions=data.expressionResolved.getOptions();if("Value"!==expressionOptions.ReferenceResolution&&"Value"!==options?.forceReferenceResolution){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}let type=data.expressionResolved.getType(),path=data.expressionResolved.getPathEx();if(type===SymbolType.Control&&null===path||type===SymbolType.LocalizedText){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}if(type===SymbolType.Function){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}this.resolveSchema(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(!data.schema)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference. Schema resolving has failed.",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res);if("TcHmi.Symbol"===data.schema.frameworkInstanceOf)destroyRefValueRead&&(destroyRefValueRead(),destroyRefValueRead=void 0),destroyRefValueRead=this.readEx(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(!destroyRefValueRead&&data.destroy&&(destroyRefValueRead=data.destroy),destroyResolveSymbolReference&&(destroyResolveSymbolReference(),destroyResolveSymbolReference=void 0),data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.System.Binding"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(data.value instanceof Symbol){let forcedRefOptions;(options&&"Value"===options.forceReferenceResolution||expressionOptions&&"Value"===expressionOptions.ReferenceResolution)&&(forcedRefOptions={forceReferenceResolution:"Value"}),destroyResolveSymbolReference=data.value.resolveReference(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};return!destroyResolveSymbolReference&&data.destroy&&(destroyResolveSymbolReference=data.destroy),data.error!==Errors.NONE?(res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.System.Binding"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res)):data.ref?(res.ref=data.ref,destroyResolveSymbolReference?.(),destroyResolveSymbolReference=void 0,void Callback.callSafeEx(callback,this,res)):(res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.System.Binding"},void Callback.callSafeEx(callback,this,res))},forcedRefOptions)}});else{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};Callback.callSafeEx(callback,this,res)}})}),()=>{destroy()}}
/**
     * Watches the reference of the symbol.
     * Either a reference to the symbol itself or a reference to the value when the value is of type TcHmi.Symbol.
     * @param callback Callback will be called after success or failure.
     * @param options Options for symbol handling
     * @preserve (Part of the public API)
     */watchReference(callback,options){let destroyRefValueWatch,destroyExpressionWatch,destroyWatchSymbolReference,destroy=()=>{destroyWatchSymbolReference?.(),destroyExpressionWatch?.(),destroyRefValueWatch?.()};return destroyExpressionWatch=this.watchExpression(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(!destroyExpressionWatch&&data.destroy&&(destroyExpressionWatch=data.destroy),data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(!data.expressionResolved)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res);let expressionOptions=data.expressionResolved.getOptions();if("Value"!==expressionOptions.ReferenceResolution&&"Value"!==options?.forceReferenceResolution){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}let type=data.expressionResolved.getType(),path=data.expressionResolved.getPathEx();if(type===SymbolType.Control&&null===path||type===SymbolType.LocalizedText){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}if(type===SymbolType.Function){let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};return void Callback.callSafeEx(callback,this,res)}this.resolveSchema(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(!data.schema)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference. Schema resolving has failed.",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res);if("TcHmi.Symbol"===data.schema.frameworkInstanceOf)destroyRefValueWatch&&(destroyRefValueWatch(),destroyRefValueWatch=void 0),destroyRefValueWatch=this.watch(data=>{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy};if(!destroyRefValueWatch&&data.destroy&&(destroyRefValueWatch=data.destroy),destroyWatchSymbolReference&&(destroyWatchSymbolReference(),destroyWatchSymbolReference=void 0),data.error!==Errors.NONE)return res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},data.details&&(res.details.errors=[data.details]),void Callback.callSafeEx(callback,this,res);if(data.value instanceof Symbol){let forcedRefOptions;(options&&"Value"===options.forceReferenceResolution||expressionOptions&&"Value"===expressionOptions.ReferenceResolution)&&(forcedRefOptions={forceReferenceResolution:"Value"}),destroyWatchSymbolReference=data.value.watchReference(data=>(!destroyWatchSymbolReference&&data.destroy&&(destroyWatchSymbolReference=data.destroy),data.error!==Errors.NONE?(res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res)):data.ref?(res.ref=data.ref,void Callback.callSafeEx(callback,this,res)):(res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference",domain:"TcHmi.Symbol"},void Callback.callSafeEx(callback,this,res))),forcedRefOptions)}else res.error=Errors.E_SYMBOL_RESOLVE_REFERENCE,res.details={code:Errors.E_SYMBOL_RESOLVE_REFERENCE,message:Errors[Errors.E_SYMBOL_RESOLVE_REFERENCE],reason:"Failed to resolve symbol reference. Symbol contains no valid symbol reference.",domain:"TcHmi.Symbol"},Callback.callSafeEx(callback,this,res)});else{let res={error:Errors.NONE,expression:data.expression,expressionResolved:data.expressionResolved,destroy,ref:this};Callback.callSafeEx(callback,this,res)}})}),()=>{destroy()}}
/**
     * Resolves a dictionary of PLC (?) attributes from the underlying schema.
     * @param callback Callback will be called after success (with the attributes) or failure
     * @preserve (Part of the public API)
     */resolveAttributes(callback){return this.__symbol.resolveAttributes(data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Resolves a PLC (?) attribute by name from the underlying schema.
     * @param name Name of the PLC (?) attribute
     * @param callback Callback will be called after success (with the attribute) or failure
     * @preserve (Part of the public API)
     */resolveAttribute(name,callback){this.__symbol.resolveAttribute(name,data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Resolves a list of available versions of the symbol.
     * @param callback Callback will be called after success (with the list of version) or failure
     * @preserve (Part of the public API)
     */resolveVersions(callback){this.__symbol.resolveVersions(data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Watches a list of available versions of the symbol.
     * @param callback Callback will be called after success (with the list of version) or failure
     * @preserve (Part of the public API)
     */watchVersions(callback){return this.__symbol.watchVersions(data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Resolves the symbols meta data
     * @param callback Callback will be called after success (with the meta data) or failure
     * @preserve (Part of the public API)
     */resolveMetaData(callback){this.__symbol.resolveMetaData(data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Watches for changes of the symbols meta data
     * @param callback Callback will be called after success (with the meta data) or failure
     * @preserve (Part of the public API)
     */watchMetaData(callback){return this.__symbol.watchMetaData(data=>{Callback.callSafeEx(callback,this,data)})}
/**
     * Checks if this symbol exists
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */exists(callback){this.__symbol.exists(data=>{data.error===Errors.NONE?Callback.callSafeEx(callback,this,{error:Errors.NONE,result:data.result,expressionResolved:data.expressionResolved,expression:data.expression}):Callback.callSafeEx(callback,this,{error:data.error,details:data.details,expressionResolved:data.expressionResolved,expression:data.expression})})}
/**
     * Used to determine if this Symbol instance is processed async or sync?
     * @preserve (Part of the public API)
     */isProcessedAsync(){return this.__symbol.isProcessedAsync()}
/**
     * Destroys the current symbol object when there are no more claimed destroy privileges.
     * @preserve (Part of the public API)
     */destroy(){this.isDestroyed()||(this.__releaseDestroyPrivilege(),this.isDestroyable()&&(this.__symbol.destroy(),this.__isDestroyed=!0))}
/**
     * Returns function references which are handled by the symbol consumer.
     *
     * @preserve (Part of the public API)
     */getReferenceDelegation(){return this.__symbol.getReferenceDelegation()}}!function(Symbol){
/**
     * Reads the value of a symbol by expression and raises a callback with the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param options Options for symbol handling
     * @param callback Callback will be called after success or failure
     * @template T Type of the read value.
     * @preserve (Part of the public API)
     */
function readEx3(expressionOrExpressionObject,options,callback){let s=new Symbol(expressionOrExpressionObject),destroy=s.readEx2(options,data=>{const result={error:data.error,value:data.value,expressionResolved:data.expressionResolved,expression:data.expression,destroy:data.destroy};data.details&&(result.details=data.details),isIServerReadResultObject(data)&&(result.response=data.response),Callback.callSafeEx(callback,null,result),s&&s.destroy(),s=null});return()=>{destroy?.(),destroy=null}}
/**
     * Writes the value of a symbol by expression.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param value Value to write
     * @param options Options for symbol handling
     * @param callback Callback will be called after success or failure
     * @template T Type of the write value.
     * @preserve (Part of the public API)
     */
function writeEx2(expressionOrExpressionObject,value,options,callback){let s=new Symbol(expressionOrExpressionObject),destroy=s.writeEx(value,options,data=>{const result={error:data.error,expression:data.expression,destroy:data.destroy};void 0!==data.expressionResolved&&(result.expressionResolved=data.expressionResolved),void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),isIServerReadResultObject(data)&&(result.response=data.response),Callback.callSafeEx(callback,null,result),s?.destroy(),s=null});return()=>{destroy?.(),destroy=null}}function isIServerReadResultObject(data){return"response"in data}Symbol.ObjectResolver=ApiObjectResolver,Symbol.read=
/**
     * Reads the value of a symbol by name and type.
     * This function throws an exception if the symbol type is not supported.
     * @param name Name of the symbol (without for example %i% marker)
     * @param type Type of the symbol as enum value
     * @template T Type of the read value.
     * @preserve (Part of the public API)
     */
function(name,type){let typeString,res;switch(type){case SymbolType.Internal:typeString="i";break;case SymbolType.LocalizedText:typeString="l";break;case SymbolType.PartialParam:typeString="pp";break;case SymbolType.Server:typeString="s";break;case SymbolType.TemplateParam:typeString="tp";break;case SymbolType.Control:typeString="ctrl";break;case SymbolType.Context:typeString="ctx";break;case SymbolType.ThemedResource:typeString="tr";break;default:throw new TypeError("Unsupported SymbolType="+(SymbolType[type]?SymbolType[type]:type)+".")}let s=new Symbol("%"+typeString+"%"+name+"%/"+typeString+"%");return s.isProcessedAsync()?(Log.warn('[Source=Framework, Module=TcHmi.Symbol] The static function "TcHmi.Symbol.read(name: string, type: TcHmi.SymbolType)" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx2(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject)" instead.'),s.destroy(),res):(s.readEx(data=>{data.error===Errors.NONE&&(res=data.value),s.destroy()}),res)},Symbol.readEx=
/**
     * Reads the value of a symbol by expression.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @template T Type of the read value.
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject){let s=new Symbol(expressionOrExpressionObject);if(s.isProcessedAsync())return Log.warn('[Source=Framework, Module=TcHmi.Symbol] The static function "TcHmi.Symbol.readEx(expression: string)" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx2(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject)" instead.'),void s.destroy();let res=s.read();return s.destroy(),res},Symbol.readEx2=
/**
     * Reads the value of a symbol by expression and raises a callback with the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success (with the value) or failure
     * @template T Type of the read value.
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){return readEx3(expressionOrExpressionObject,null,callback)},Symbol.readEx3=readEx3,Symbol.write=
/**
     * Writes the value of a symbol by name and type.
     * This function throws an exception if the symbol type is not supported.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param name Name of the symbol (without for example %i% marker)
     * @param type Type of the symbol as enum value
     * @param value The new value
     * @param callback Callback will be called after success or failure
     * @template W Type of the write value.
     * @template R Type of the value after write. Falls back to W if not specified.
     * @preserve (Part of the public API)
     */
function(name,type,value,callback){let typeString;switch(type){case SymbolType.Internal:typeString="i";break;case SymbolType.LocalizedText:typeString="l";break;case SymbolType.PartialParam:typeString="pp";break;case SymbolType.Server:typeString="s";break;case SymbolType.TemplateParam:typeString="tp";break;case SymbolType.Control:typeString="ctrl";break;case SymbolType.Context:typeString="ctx";break;case SymbolType.ThemedResource:typeString="tr";break;default:throw new TypeError("Unsupported SymbolType="+(SymbolType[type]?SymbolType[type]:type)+".")}let s=new Symbol("%"+typeString+"%"+name+"%/"+typeString+"%"),destroy=s.write(value,data=>{const result={error:data.error,value:data.value,expressionResolved:data.expressionResolved,expression:data.expression,destroy:data.destroy};data.details&&(result.details=data.details),isIServerReadResultObject(data)&&(result.response=data.response),Callback.callSafeEx(callback,null,result),s&&s.destroy(),s=null});return()=>{destroy?.(),destroy=null}},Symbol.writeEx=
/**
     * Writes the value of a symbol by expression.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param value Value to write
     * @param callback Callback will be called after success or failure
     * @template T Type of the write value.
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,value,callback){return writeEx2(expressionOrExpressionObject,value,null,callback)},Symbol.writeEx2=writeEx2,Symbol.resolveExpression=
/**
     * Resolves the expression.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.resolveExpression(data=>{Callback.callSafeEx(callback,null,data),s.destroy()})},Symbol.resolveSchema=
/**
     * Resolves the schema of the current symbol.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.resolveSchema(function(data){data.error===Errors.NONE?Callback.callSafeEx(callback,null,{error:Errors.NONE,schema:data.schema,expressionResolved:data.expressionResolved,expression:data.expression}):Callback.callSafeEx(callback,null,{error:data.error,details:data.details,expressionResolved:data.expressionResolved,expression:data.expression}),s.destroy()})},Symbol.resolveAttributes=
/**
     * Resolves a dictionary of PLC (?) attributes from the underlying schema.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){const s=new Symbol(expressionOrExpressionObject);s.resolveAttributes(data=>{Callback.callSafeEx(callback,null,data),s.destroy()})},Symbol.resolveAttribute=
/**
     * Resolves a PLC (?) attribute by name from the underlying schema.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param name Name of the PLC (?) attribute
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,name,callback){const s=new Symbol(expressionOrExpressionObject);s.resolveAttribute(name,data=>{Callback.callSafeEx(callback,null,data),s.destroy()})},Symbol.resolveVersions=
/**
     * Resolves a list of available versions of the symbol.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success (with the list of version) or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){new Symbol(expressionOrExpressionObject).resolveVersions(data=>{Callback.callSafeEx(callback,null,data)})},Symbol.resolveMetaData=
/**
     * Resolves the symbols meta data
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success (with the meta data) or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){new Symbol(expressionOrExpressionObject).resolveMetaData(data=>{Callback.callSafeEx(callback,null,data)})},Symbol.exists=
/**
     * Checks if a symbol exists.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
function(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.exists(data=>{data.error===Errors.NONE?Callback.callSafeEx(callback,null,{error:Errors.NONE,result:data.result,expressionResolved:data.expressionResolved,expression:data.expression}):Callback.callSafeEx(callback,null,{error:data.error,details:data.details,expressionResolved:data.expressionResolved,expression:data.expression}),s.destroy()})},Symbol.isSymbolExpression=
/**
     * Returns true if the expression is a valid symbol expression
     * @param expression Expression for the symbol
     * @preserve (Part of the public API)
     */
function(expression){if("string"!=typeof expression)return!1;const exprMatch=expression.match(SymbolExpression.RegExpExpression);return null!=exprMatch&&0===exprMatch.index},Symbol.isSymbolExpressionEscaped=
/**
     * Returns true if expression is escaped with $ in opening expression tag before type token.
     * Example:
     * %$i%... -> true
     * %i%...  -> false
     * @param expression Expression for the symbol
     * @preserve (Part of the public API)
     */
function(expression){if("string"!=typeof expression)return!1;const exprMatch=expression.match(SymbolExpression.RegExpExpressionEscaped);return null!=exprMatch&&0===exprMatch.index},Symbol.escapeSymbolExpression=
/**
     * Will remove one escape level from expression and return it.
     * @param expression Expression for the symbol
     * @preserve (Part of the public API)
     */
function(expression){const exprMatch=expression.match(SymbolExpression.RegExpExpressionEscaped);return null!=exprMatch&&0===exprMatch.index?expression.replace("$",""):expression},Symbol.isIServerReadResultObject=isIServerReadResultObject}(Symbol||(Symbol={}));(globalThis.devtoolsFormatters??=[]).push({header(symbol){if(!(symbol instanceof Symbol))return null;let expr;try{expr=symbol.getExpression()}catch{return null}return["span",{style:""},["span",{style:""},symbol.isDestroyed()?"💀 ":""],["span",{style:"font-weight:600;"},"TcHmi.Symbol"],["span",{style:""}," "+SymbolType[expr.getType()]+": "+expr.getFullName()]]},hasBody:symbol=>symbol instanceof Symbol,body(symbol){if(!(symbol instanceof Symbol))return null;let expr;try{expr=symbol.getExpression()}catch{return null}const typeRow=`${SymbolType[expr.getType()]} (${symbol.isProcessedAsync()?"async":"sync"})`,destroyed=symbol.isDestroyed();return["table",{style:"border-spacing: 10px 0;"},["tr",{},["td",{},"Type"],["td",{},typeRow]],["tr",{},["td",{},"Full Name"],["td",{},expr.getFullName()]],["tr",{},["td",{},"Options"],["td",{},["object",{object:expr.getOptions()}]]],["tr",{},["td",{},"Destroyed"],["td",{},destroyed?"true 💀":"false"]],["tr",{},["td",{},"DestroyPrivileges"],["td",{},symbol.__destroyPrivileges]],["tr",{},["td",{},"Expression"],["td",{},expr.toString()]],["tr",{},["td",{},"System Symbol"],["td",{},["object",{object:symbol.__symbol}]]]]}});