/**
 * 
 * @export
 * @interface FileStats
 */
export interface FileStats {
    /**
     * 
     * @type {number}
     * @memberof FileStats
     */
    bytesCompleted: number;
    /**
     * 
     * @type {boolean}
     * @memberof FileStats
     */
    wanted: boolean;
    /**
     * 
     * @type {number}
     * @memberof FileStats
     */
    priority: number;
}
