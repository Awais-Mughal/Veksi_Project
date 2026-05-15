import"./_StaticDefines.js";import{__tchmi_is_instanced_object}from"./_GlobalFunctions.js";import{SymbolExpressionFromText}from"../System/SymbolExpressionFromText.js";import{Init,isUnloaded}from"../System/System.js";import{Controls as ControlsLog}from"./Log.Controls.js";import{CallbackMethod}from"./Decorators.js";import*as Environment from"./Environment.js";let __oldTimerOptions,__il=new((()=>{let ___onWebworkerMessage_decorators,_instanceExtraInitializers=[];return class IndexedDBLog{static{const _metadata="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;___onWebworkerMessage_decorators=[CallbackMethod],__esDecorate(this,null,___onWebworkerMessage_decorators,{kind:"method",name:"__onWebworkerMessage",static:!1,private:!1,access:{has:obj=>"__onWebworkerMessage"in obj,get:obj=>obj.__onWebworkerMessage},metadata:_metadata},null,_instanceExtraInitializers),_metadata&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_metadata})}__webworker=(__runInitializers(this,_instanceExtraInitializers),null);__persistentLogCache=[];__persistentLogInitPending=!1;__persistentLogInit(){this.__webworker||window.indexedDB&&(this.__persistentLogInitPending||(this.__persistentLogInitPending=!0,Init.initializedBaseConfig.then(()=>{try{this.__webworker=new Worker(Environment.getBasePath()+"/Worker/System/Log.IndexedDB.js",{type:"module"})}catch(e){Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because WebWorker.Log.IndexedDB.js could not be loaded.\n",e)}if(this.__webworker)for(this.__webworker.addEventListener("message",this.__onWebworkerMessage),this.__webworker.postMessage({command:"run",options:{maxEntries:TCHMI_PERSISTENT_LOG_MAX_ENTRIES,cacheInterval:TCHMI_PERSISTENT_LOG_CACHE_INTERVAL}});this.__persistentLogCache.length>0;){let entry=this.__persistentLogCache.shift();entry&&this.add(entry.timespan,entry.type,entry.message,entry.optionalParameters)}this.__persistentLogInitPending=!1})))}__onWebworkerMessage(messageEvent){let message=messageEvent.data;if(message&&"error"===message.event)Log.errorEx(message.args.message,...message.args.args)}add(timespan,type,message,...optionalParameters){let optionalParametersPrepared=[];for(let i=0,ii=optionalParameters.length;i<ii;i++){let op=optionalParameters[i];try{if(null!==op&&"object"==typeof op){op=__tchmi_is_instanced_object(op)?op.constructor&&op.constructor.name?'[IndexedDBLog: Serializing data not possible for type: "object" with constructor: "'+op.constructor.name+'"]':'[IndexedDBLog: Serializing data not possible for type: "object"]':JSON.parse(JSON.stringify(op,(_key,value)=>{if("function"==typeof value)return"[IndexedDBLog: Serializing data not possible for type: 'function']";if("object"==typeof value){return __tchmi_is_instanced_object(value)?value?.constructor?.name?'[IndexedDBLog: Serializing data not possible for type: "object" with constructor: "'+value.constructor.name+'"]':"[IndexedDBLog: Serializing data not possible for type: 'object']":value}return value}))}else null!==op&&"function"==typeof op&&(op='[IndexedDBLog: Serializing data not possible for type: "function"]')}catch(e){op=`[IndexedDBLog: Serializing data failed with an exception${e instanceof Error?": "+e.toString():""}]`}optionalParametersPrepared.push(op)}this.__webworker?this.__webworker.postMessage({command:"add",entry:{timespan,type,message,optionalParameters:optionalParametersPrepared}}):this.__persistentLogCache.push({timespan,type,message,optionalParameters:optionalParametersPrepared})}}})()),__oldTimerName=null,__oldTimerStart=0,__performanceLogCache=new Map;function escapeSymbolExpressions(text){let expressions=new SymbolExpressionFromText(text).resolveExpressions();for(let expression of expressions){let expressionStr=expression.toString(),expressionStrEscaped=expressionStr.replace(/%s/g,"%%s").replace(/%i/g,"%%i").replace(/%c/g,"%%c");text=text.replace(expressionStr,expressionStrEscaped)}return text}
/**
 * Logging functions
 * @preserve (Part of the public API)
 */window.addEventListener("error",e=>{window.indexedDB&&(TCHMI_PERSISTENT_LOG_LEVEL<1||__il.add(Date.now(),"Error",e.error.stack))});export class Log{static Prefix=!0;static Force=!1;
/**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
static error(message,forceNoPrefix=!1){isUnloaded||((TCHMI_CONSOLE_LOG_LEVEL>=1||Log.Force)&&(Log.Prefix&&!forceNoPrefix&&"object"!=typeof message?console.error("["+(new Date).toISOString()+"][Error] "+message):console.error(message)),TCHMI_PERSISTENT_LOG_LEVEL>=1&&window.indexedDB&&(__il.__persistentLogInit(),"string"==typeof message?__il.add(Date.now(),"Error",message):__il.add(Date.now(),"Error","",message)))}
/**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */static errorEx(message,...optionalParameters){if(!isUnloaded){if(TCHMI_CONSOLE_LOG_LEVEL>=1||Log.Force){let messageEscaped=message;optionalParameters&&optionalParameters.length>0&&(messageEscaped=escapeSymbolExpressions(message)),Log.Prefix?console.error("["+(new Date).toISOString()+"][Error] "+messageEscaped,...optionalParameters):console.error(messageEscaped,...optionalParameters)}TCHMI_PERSISTENT_LOG_LEVEL>=1&&window.indexedDB&&(__il.__persistentLogInit(),__il.add(Date.now(),"Error",message,...optionalParameters))}}
/**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */static warn(message,forceNoPrefix=!1){isUnloaded||((TCHMI_CONSOLE_LOG_LEVEL>=2||Log.Force)&&(Log.Prefix&&!forceNoPrefix&&"object"!=typeof message?console.warn("["+(new Date).toISOString()+"][Warning] "+message):console.warn(message)),TCHMI_PERSISTENT_LOG_LEVEL>=2&&window.indexedDB&&(__il.__persistentLogInit(),"string"==typeof message?__il.add(Date.now(),"Warning",message):__il.add(Date.now(),"Warning","",message)))}
/**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */static warnEx(message,...optionalParameters){if(!isUnloaded){if(TCHMI_CONSOLE_LOG_LEVEL>=2||Log.Force){let messageEscaped=message;optionalParameters&&optionalParameters.length>0&&(messageEscaped=escapeSymbolExpressions(message)),Log.Prefix?console.warn("["+(new Date).toISOString()+"][Warning] "+messageEscaped,...optionalParameters):console.warn(messageEscaped,...optionalParameters)}TCHMI_PERSISTENT_LOG_LEVEL>=2&&window.indexedDB&&(__il.__persistentLogInit(),__il.add(Date.now(),"Warning",message,...optionalParameters))}}
/**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */static info(message,forceNoPrefix=!1){isUnloaded||((TCHMI_CONSOLE_LOG_LEVEL>=3||Log.Force)&&(Log.Prefix&&!forceNoPrefix&&"object"!=typeof message?console.info("["+(new Date).toISOString()+"][Info] "+message):console.info(message)),TCHMI_PERSISTENT_LOG_LEVEL>=3&&window.indexedDB&&(__il.__persistentLogInit(),"string"==typeof message?__il.add(Date.now(),"Info",message):__il.add(Date.now(),"Info","",message)))}
/**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */static infoEx(message,...optionalParameters){if(!isUnloaded){if(TCHMI_CONSOLE_LOG_LEVEL>=3||Log.Force){let messageEscaped=message;optionalParameters&&optionalParameters.length>0&&(messageEscaped=escapeSymbolExpressions(message)),Log.Prefix?console.info("["+(new Date).toISOString()+"][Info] "+messageEscaped,...optionalParameters):console.info(messageEscaped,...optionalParameters)}TCHMI_PERSISTENT_LOG_LEVEL>=3&&window.indexedDB&&(__il.__persistentLogInit(),__il.add(Date.now(),"Info",message,...optionalParameters))}}
/**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher (or Log.Force is set).
     * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */static debug(message,forceNoPrefix=!1){isUnloaded||((TCHMI_CONSOLE_LOG_LEVEL>=4||Log.Force)&&(Log.Prefix&&!forceNoPrefix&&"object"!=typeof message?console.log("["+(new Date).toISOString()+"][Debug] "+message):console.log(message)),TCHMI_PERSISTENT_LOG_LEVEL>=4&&window.indexedDB&&(__il.__persistentLogInit(),"string"==typeof message?__il.add(Date.now(),"Debug",message):__il.add(Date.now(),"Debug","",message)))}
/**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher (or Log.Force is set).
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */static debugEx(message,...optionalParameters){if(!isUnloaded){if(TCHMI_CONSOLE_LOG_LEVEL>=4||Log.Force){let messageEscaped=message;optionalParameters&&optionalParameters.length>0&&(messageEscaped=escapeSymbolExpressions(message)),Log.Prefix?console.log("["+(new Date).toISOString()+"][Debug] "+messageEscaped,...optionalParameters):console.log(messageEscaped,...optionalParameters)}TCHMI_PERSISTENT_LOG_LEVEL>=4&&window.indexedDB&&(__il.__persistentLogInit(),__il.add(Date.now(),"Debug",message,...optionalParameters))}}static performanceLog(timerName,options){if(-1===TCHMI_CONSOLE_LOG_LEVEL){const track=__oldTimerOptions?.track,performanceNow=performance.now();null!==__oldTimerName&&(performance.measure(__oldTimerName,{start:__oldTimerStart,detail:{...__oldTimerOptions?.detail??{},devtools:track?{trackGroup:__oldTimerOptions?.trackGroup,track,tooltipText:__oldTimerOptions?.tooltipText??__oldTimerName}:void 0}}),console.log((__oldTimerOptions?.tooltipText??__oldTimerName)+": %dms",performanceNow-__oldTimerStart)),__oldTimerName=timerName,__oldTimerStart=options?.start??performanceNow,__oldTimerOptions=options}}static performanceLogStart(timerName){-1===TCHMI_CONSOLE_LOG_LEVEL&&window.console&&window.console.time&&window.console.time(timerName),-1===TCHMI_PERSISTENT_LOG_LEVEL&&window.indexedDB&&window.performance&&window.performance.now&&(__performanceLogCache.set(timerName,window.performance.now()),__il.__persistentLogInit(),__il.add(Date.now(),"Debug","Timer: '"+timerName+"' started."))}static performanceLogEnd(timerName){if(-1===TCHMI_CONSOLE_LOG_LEVEL&&window.console&&window.console.timeEnd&&window.console.timeEnd(timerName),-1===TCHMI_PERSISTENT_LOG_LEVEL&&window.indexedDB&&window.performance&&window.performance.now){let start=__performanceLogCache.get(timerName);if(__performanceLogCache.delete(timerName),void 0!==start){let end=window.performance.now();__il.__persistentLogInit(),__il.add(Date.now(),"Debug","Timer: '"+timerName+"' finished after "+(end-start)+"ms.")}}}
/**
     * Builds a formatted message of hierarchical error objects.
     * @param error Error object to show nicely
     * @preserve (Part of the public API)
     */static buildMessage(error){const __buildMessage=function(error,level){if(!error)return"";let res="",indention="  ".repeat(level+1);if(error.code&&(res+="Code: "+error.code+"/0x"+error.code.toString(16)),error.message&&(res+=", Message: "+error.message),error.reason&&(res+="\n"+indention+"Reason: "+error.reason),error.exception&&(res+="\n"+indention+"Exception: "+error.exception.toString()),error.domain&&(res+="\n"+indention+"Domain: "+error.domain),void 0!==error.errors&&error.errors.length){res+="\n"+indention+"as result of: ";for(let[index,errorItem]of error.errors.entries())res+=__buildMessage(errorItem,level+1),index!==error.errors.length-1&&(res+="\n"+indention)}return res};return __buildMessage(error,0)}}!function(Log){Log.Controls||(Log.Controls={})}(Log||(Log={})),Log.Controls=ControlsLog;