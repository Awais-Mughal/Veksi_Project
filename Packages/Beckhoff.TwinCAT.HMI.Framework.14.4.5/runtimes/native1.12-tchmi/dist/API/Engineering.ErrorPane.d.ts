import './_GlobalFunctions.js';
import './_StaticDefines.js';
/**
 * Adds an message to current error pane.
 * @param id Identifier for the message. Must be unique.
 * @param content Text content of the message
 * @param type severity of the message
 */
export declare function add(id: string, content: string, type: MessageType): void;
/**
 * Removes an message from current error pane.
 * @param id Identifier for the message. Must be unique.
 */
export declare function remove(id: string): void;
export interface Message {
    identifier: string;
    type: MessageType;
    content: string;
}
export declare enum MessageType {
    Message = 0,
    Error = 1,
    Warning = 2,
    Information = 3
}
//# sourceMappingURL=Engineering.ErrorPane.d.ts.map