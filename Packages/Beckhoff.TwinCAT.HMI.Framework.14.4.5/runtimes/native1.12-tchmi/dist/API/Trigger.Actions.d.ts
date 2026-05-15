import './_GlobalFunctions.js';
import './_StaticDefines.js';
import type { Context } from './_Types.js';
import type { Action } from './Trigger.js';
/**
 * Runs a list of actions. Returns a Promise that is resolved or rejected when the actions finish or run into an
 * error, so this method can be awaited. If you need a callback that is called synchronously in cases where the
 * action list also runs synchronously, you can use the ctx parameters success and error callbacks.
 * @param actions The actions to run.
 * @param ctx A context object. Used for callbacks and if an action wants to access ctx symbols.
 */
export declare function run<T>(actions: Action[], ctx?: Context<T>): Promise<T | undefined>;
//# sourceMappingURL=Trigger.Actions.d.ts.map