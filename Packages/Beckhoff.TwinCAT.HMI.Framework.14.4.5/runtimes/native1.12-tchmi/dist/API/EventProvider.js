import{Errors}from"./_Types.js";import{Log}from"./Log.js";function callSafeEx(callback,thisArg,...args){let res;if(callback&&"function"==typeof callback)try{callback.call(thisArg,...args)}catch(e){res=e instanceof Error?e:new Error("Function "+(callback.name?callback.name+" ":"")+"has thrown a plain value (no Error object) and therefore lacks a callstack. Thrown value: "+e)}res&&Log.error(res)}
/**
 * Provides functions for managing events.
 * @preserve (Part of the public API)
 */export class EventProvider{static __events=new Map;static __internalEventId=0;
/**
     * Register a callback to an event name.
     * If the name is a symbol expression the callback will be initially called when
     * there is a symbol with this name.
     * Returns a destroy function to remove the registration.
     * @param name Name of the event.
     * @param callback Callback which will be called
     * @param options Data an event can be given while registration.
     * @param registrationData Additional data and options for the event registration.
     * @param registrationData.ctx Context to be used when resolving %ctx% symbols.
     * @returns Destroy function which cleans up/unregisters
     * @preserve (Part of the public API)
     */
static register(name,callback,options,registrationData){let destroyWatch,internalEventId=0,registeredName="";const destroy=()=>{(()=>{if(!internalEventId||!registeredName)return;destroyWatch&&(destroyWatch(),destroyWatch=void 0);const event=EventProvider.__events.get(registeredName),entry=event?.get(internalEventId);event&&(event.delete(internalEventId),0===event.size&&EventProvider.__events.delete(registeredName)),EventProvider.raise(`System.EventProvider.onDestroyedCallback<${registeredName}>`,entry),EventProvider.raise("System.EventProvider.onDestroyedCallback",entry),registeredName=""})()};return(name=>{internalEventId=++EventProvider.__internalEventId,registeredName=name;let event=EventProvider.__events.get(name);void 0===event&&(event=new Map,EventProvider.__events.set(name,event));const entry={id:internalEventId,name,callback,options,registrationData,destroy};event.set(internalEventId,entry),EventProvider.raise(`System.EventProvider.onRegisterCallback<${name}>`,entry),EventProvider.raise("System.EventProvider.onRegisterCallback",entry)})(name),destroy}
/**
     * Calls all registered callbacks related to an event name.
     * @param name Name of the event.
     * @param args Optional parameter(s) which will be transfered to the callbacks
     * @preserve (Part of the public API)
     */static raise(name,...args){const eventMap=EventProvider.__events.get(name);if(eventMap)for(const event of eventMap.values())callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}
/**
     * Calls the callback of a specific event registration.
     * @param event Event object
     * @param args optional parameter(s) which will be transfered to the callbacks
     * @preserve (Part of the public API)
     */static raiseEx(event,...args){callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}static watchEventRegistration(name,callback){let destroyEventOnDestroyCallback=null;const _register=function(event){destroyEventOnDestroyCallback=EventProvider.register(`System.EventProvider.onDestroyedCallback<${name}>`,function(e,event){callSafeEx(callback,null,{error:Errors.NONE,type:EventProvider.EventRegWatchType.DESTROY,event}),destroyEventOnDestroyCallback?(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null):e.destroy()}),callSafeEx(callback,null,{error:Errors.NONE,type:EventProvider.EventRegWatchType.REGISTER,event})};let eventMap=EventProvider.__events.get(name);eventMap&&eventMap.forEach(_register);let destroyEventOnRegisterCallback=EventProvider.register(`System.EventProvider.onRegisterCallback<${name}>`,function(_e,event){_register(event)});return function(){destroyEventOnRegisterCallback&&(destroyEventOnRegisterCallback(),destroyEventOnRegisterCallback=null),destroyEventOnDestroyCallback&&(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null)}}static has(name){return EventProvider.__events.has(name)}static count(name){const events=EventProvider.__events.get(name);return events?.size??0}static registerDomEvent(element,type,listener,options){options=options?{passive:!0,...options}:{passive:!0};const elements=window.Symbol.iterator in element?element:[element];for(const element of elements)element.addEventListener(type,listener,options);return()=>{for(const element of elements)element.removeEventListener(type,listener,options)}}}!function(EventProvider){let EventRegWatchType;!function(EventRegWatchType){EventRegWatchType[EventRegWatchType.REGISTER=100]="REGISTER",EventRegWatchType[EventRegWatchType.DESTROY=200]="DESTROY"}(EventRegWatchType=EventProvider.EventRegWatchType||(EventProvider.EventRegWatchType={}))}(EventProvider||(EventProvider={}));