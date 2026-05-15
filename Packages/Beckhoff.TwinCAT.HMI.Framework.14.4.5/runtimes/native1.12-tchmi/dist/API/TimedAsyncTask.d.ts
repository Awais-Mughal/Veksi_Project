/**
 * Infrastructure to have calls which are sync but async if the time (in ms) is too long.
 */
export declare class TimedAsyncTask {
    /**
     * constructor
     * @param duration Milliseconds for the threshold value
     */
    constructor(duration: number);
    __duration: number;
    protected __than: number;
    /**
     * Call a callback.
     * Sync if time is not later than the threshold value of the instance.
     * Returns 0 if the callback is sync, otherwise the timeout id
     * @param callback function to call (sync or async)
     */
    do(callback: () => void): number;
    /**
     * Returns false if time is not later than the threshold value of the instance.
     */
    timeQuotaReached(): boolean;
}
//# sourceMappingURL=TimedAsyncTask.d.ts.map