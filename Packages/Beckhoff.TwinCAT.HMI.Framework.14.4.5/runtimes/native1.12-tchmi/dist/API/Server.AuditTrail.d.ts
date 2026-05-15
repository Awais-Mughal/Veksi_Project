import * as Server from './Server.js';
import type { IResultObject } from './_Types.js';
/**
 * Creates a custom audit trail log entry.
 * @param entry The data for the custom audit trail log entry.
 * @param callback Will be called after request.
 */
export declare function createAuditLogEntry(entry: AuditLogEntry, callback?: null | ((this: void, data: IResultObject) => void)): void;
/**
 * Creates a custom audit trail log entry.
 * @param entry The data for the custom audit trail log entry.
 * @param options Optional options
 * @param callback Will be called after request.
 * @returns
 */
export declare function createAuditLogEntryEx(entry: AuditLogEntry, options?: {
    requestOptions: Server.IRequestOptions | null;
} | null, callback?: null | ((this: void, data: IResultObject) => void)): void;
export interface AuditLogEntry {
    name: string;
    contextDomain?: string;
    comment?: string;
    data?: any;
}
//# sourceMappingURL=Server.AuditTrail.d.ts.map