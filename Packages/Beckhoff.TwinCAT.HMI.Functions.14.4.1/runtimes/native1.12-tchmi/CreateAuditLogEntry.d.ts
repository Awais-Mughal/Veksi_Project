import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Server } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Creates an audit trail log entry.
 * @param ctx Context object which provides context specific data and functions.
 * @param entry The data to be logged.
 */
export declare function CreateAuditLogEntry(ctx: SelectableRequired<Context, 'success' | 'error'>, entry: Server.AuditTrail.AuditLogEntry): void;
declare const _CreateAuditLogEntry: typeof CreateAuditLogEntry;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let CreateAuditLogEntry: typeof _CreateAuditLogEntry;
        type CreateAuditLogEntry = typeof _CreateAuditLogEntry;
    }
}
export {};
//# sourceMappingURL=CreateAuditLogEntry.d.ts.map