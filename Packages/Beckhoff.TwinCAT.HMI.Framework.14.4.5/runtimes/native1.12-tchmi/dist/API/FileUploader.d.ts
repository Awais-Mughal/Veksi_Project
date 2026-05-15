import type { Dictionary, IErrorDetails, IResultObject, SelectableRequired } from './_Types.js';
import { Errors } from './_Types.js';
/**
 * Uploads files to the server. Files are uploaded sequentially and divided into chunks if necessary.
 */
export declare class FileUploader {
    protected static __queue: FileUploader.QueuedFile[];
    protected static __current: FileUploader.QueuedFile | null;
    protected static __working: boolean;
    protected static __preparedChunks: Promise<Map<string, FileUploader.Chunk> | null> | null;
    protected static __chunkSize: null | number;
    protected static __subscribedToChunkSize: boolean;
    protected static __chunkSizeSubscriptionError: FileUploader.ProgressResultFail | null;
    protected __queueTimeoutId: number;
    protected readonly __options: SelectableRequired<FileUploader.Options, 'symbol'>;
    /**
     * Create a new FileUploader instance.
     * @param options Options for uploading files with this FileUploader instance.
     * @param options.domain The domain to upload files to. If not specified, files will be uploaded directly to the
     * TcHmiSrv domain.
     * @param options.symbol The symbol to upload files to. This symbol must take a writeValue containing the
     * properties fileName (full path and name of the file, delimited by forward slashes), data (base64 encoded file
     * contents) and chunkType (value of the enum FileUploader.ChunkType). Defaults to 'Upload'.
     * @param options.chunkSize The chunk size to use while uploading. Defaults to the chunk size specified in the
     * server config if not given, or if greater than the server config chunk size.
     */
    constructor(options?: FileUploader.Options);
    /**
     * Queue a file for upload. Queued files will be managed in a single queue across all instances.
     * If there is already a file with the same path in the queue, the already queued file will be canceled.
     * The returned Promise will resolve when the file upload finishes, is canceled, or encounters an error.
     * @param path The path to upload to.
     * @param file The file to upload.
     * @param options Options for this file upload.
     * @param options.progressCallback A callback function that will be called with the upload progress or any
     * errors whenever a chunk of the file was uploaded.
     * @param options.additionalProperties Additional properties that are set in the write value. Properties named
     * fileName, data or chunkType are reserved for use by the file uploader and will be ignored.
     */
    queue(path: string, file: Blob, options?: FileUploader.QueueOptions): Promise<FileUploader.ProgressResultSuccess>;
    /**
     * Cancel the upload of a queued file. If an upload is canceled after it has already started, the upload is
     * stopped, but the file fragment will remain on the server. It is the responsibility of the caller to delete it.
     * @param path The path of the file that should be cancelled.
     */
    cancel(path: string): Promise<boolean>;
    /**
     * The domain to upload files to. If not specified, files will be uploaded directly to the TcHmiSrv domain.
     */
    set domain(value: string | undefined | null);
    /**
     * The domain to upload files to. If not specified, files will be uploaded directly to the TcHmiSrv domain.
     */
    get domain(): typeof this.__options.domain;
    /**
     * The symbol to upload files to. This symbol must take a writeValue containing the properties fileName (full
     * path and name of the file, delimited by forward slashes), data (base64 encoded file contents) and chunkType
     * (value of the enum FileUploader.ChunkType). Defaults to 'Upload'.
     */
    set symbol(value: string | undefined | null);
    /**
     * The symbol to upload files to. This symbol must take a writeValue containing the properties fileName (full
     * path and name of the file, delimited by forward slashes), data (base64 encoded file contents) and chunkType
     * (value of the enum FileUploader.ChunkType). Defaults to 'Upload'.
     */
    get symbol(): typeof this.__options.symbol;
    /**
     * The chunk size to use while uploading. Defaults to the chunk size specified in the server config if not
     * given, or if greater than the server config chunk size.
     */
    set chunkSize(value: number | undefined | null);
    /**
     * The chunk size to use while uploading. Defaults to the chunk size specified in the server config if not
     * given, or if greater than the server config chunk size.
     */
    get chunkSize(): typeof this.__options.chunkSize;
    /**
     * Reads the file data as a base64 encoded string.
     * @param file The file to read.
     * @param offset The offset from which to start reading. Leave empty to read the whole file.
     * @param limit How many bytes to read. Leave empty to read to the end of the file.
     */
    static readFileAsBase64(file: Blob, offset?: number, limit?: number): Promise<string>;
    /**
     * Opens a dialog that allows the user to select one or more files from their local file system. Returns a
     * promise that resolves to null if the file dialog is canceled and to a FileList if the user selects files.
     * @param options Options for the file dialog.
     * @param options.multiple Set to true to allow selecting more than one file. Defaults to false.
     * @param options.acceptedFileTypes An array of unique file type specifiers. A unique file type specifier can be
     * a case-insensitive filename extension starting with a dot, a valid MIME type string, or one of the strings
     * 'audio/*', 'image/*' or 'video/*'.
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
     * Leave empty to allow any file type to be selected.
     */
    static openFileDialog(options?: FileUploader.FileDialogOptions): Promise<FileList | null>;
    /**
     * Split the files in the queue into chunks and upload them.
     */
    protected static __workQueue(): Promise<void>;
    /**
     * Dequeue the first item, read the file and prepare it for upload. If the chunkSize is not yet reached, further
     * files will be dequeued and also uploaded.
     */
    protected static __createChunks(): Promise<Map<string, FileUploader.Chunk> | null>;
    /**
     * Upload the given chunks.
     * @param chunks The chunks to upload.
     */
    protected static __upload(chunks: Map<string, {
        file: FileUploader.QueuedFile;
        data: string;
        type: FileUploader.ChunkType;
    }>): void;
    /**
     * Subscribe to the TcHmiSrv.Config::CHUNKSIZE symbol
     */
    protected static __subscribeChunkSize(): void;
}
export declare namespace FileUploader {
    enum FileStatus {
        Pending = 0,
        Uploading = 1,
        Finished = 2,
        Canceled = 3
    }
    enum ChunkType {
        /** File is sent as a whole. */
        Disabled = 0,
        /** Beginning of a file */
        First = 1,
        /** Middle part of a file (any number of times) */
        Intermediate = 2,
        /** End of a file */
        Last = 3
    }
    interface Options {
        /**
         * The domain to upload files to. If not specified, files will be uploaded directly to the TcHmiSrv domain.
         */
        domain?: string;
        /**
         * The symbol to upload files to. This symbol must take a writeValue containing the properties fileName
         * (full path and name of the file, delimited by forward slashes), data (base64 encoded file contents) and
         * chunkType (value of the enum FileUploader.ChunkType). Defaults to 'Upload'.
         */
        symbol?: string;
        /**
         * The chunk size to use while uploading. Defaults to the chunk size specified in the server config if not
         * given, or if greater than the server config chunk size.
         */
        chunkSize?: number;
    }
    interface QueueOptions {
        /**
         * A callback function that will be called with the upload progress or any errors whenever a chunk of the
         * file was uploaded.
         */
        progressCallback?: ProgressCallback;
        /**
         * Additional properties that are set in the write value. Properties named fileName, data or chunkType are
         * reserved for use by the file uploader and will be ignored.
         */
        additionalProperties?: Dictionary<any>;
    }
    interface QueuedFile {
        file: Blob;
        path: string;
        domainAndSymbol: string;
        additionalProperties?: QueueOptions['additionalProperties'];
        chunkSize?: number;
        offset: number;
        status: FileStatus;
        progressCallback: ProgressCallback;
    }
    type ProgressCallback = (result: ProgressResult) => void;
    interface ProgressResultSuccess extends IResultObject {
        error: Errors.NONE;
        uploadedBytes: number;
        totalBytes: number;
        status: FileStatus;
    }
    interface ProgressResultFail extends IResultObject {
        error: Exclude<Errors, Errors.NONE>;
        details: SelectableRequired<IErrorDetails, 'message' | 'reason' | 'domain'>;
    }
    type ProgressResult = ProgressResultSuccess | ProgressResultFail;
    interface Chunk {
        file: QueuedFile;
        data: string;
        type: ChunkType;
    }
    /** Common interface for all/most upload symbols */
    interface UploadWriteValue {
        /** Identifier for the uploaded file. */
        fileName: string;
        /** Data as base64. Not used with isDirectory. */
        data?: string;
        /**
         * The request should create a directory and not a file.
         * Not supported by all extensions.
         */
        isDirectory?: boolean;
        /** Not supported by all extensions. */
        checkSum?: string;
        /** Chunktype: 0=file is sent as a whole, 1=beginning of a file, 2=middle part of a file (any number of times), 3=end of a file */
        chunkType?: ChunkType;
    }
    /**
     * Options for opening a file dialog.
     */
    interface FileDialogOptions {
        /**
         * Set to true to allow selecting more than one file. Defaults to false.
         */
        multiple?: boolean;
        /**
         * An array of unique file type specifiers. A unique file type specifier can be a case-insensitive filename
         * extension starting with a dot, a valid MIME type string, or one of the strings 'audio/*', 'image/*' or
         * 'video/*'.
         * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
         * Leave empty to allow any file type to be selected.
         */
        acceptedFileTypes?: string[];
    }
}
//# sourceMappingURL=FileUploader.d.ts.map