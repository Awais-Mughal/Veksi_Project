import{Destroyable}from"../../API/Destroyable.js";
/**
 * Abstract base class for all TwinCAT HMI Controls.
 * Needed for handling controls in Framework APIs.
 * Check out
 * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3845361931.html?id=3265481440996758836
 * for an API reference.
 * @preserve (Part of the public API)
 */export class baseTcHmiControl extends Destroyable{constructor(){super()}}