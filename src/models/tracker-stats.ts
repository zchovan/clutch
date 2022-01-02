/**
 * 
 * @export
 * @interface TrackerStats
 */
export interface TrackerStats {
    /**
     * 
     * @type {string}
     * @memberof TrackerStats
     */
    announce: string;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    announceState: number;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    downloadCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    hasAnnounced: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    hasScraped: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackerStats
     */
    host: string;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    isBackup: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    lastAnnouncePeerCount: number;
    /**
     * 
     * @type {string}
     * @memberof TrackerStats
     */
    lastAnnounceResult: string;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    lastAnnounceStartTime: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    lastAnnounceSucceeded: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    lastAnnounceTime: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    lastAnnounceTimedOut: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackerStats
     */
    lastScrapeResult: string;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    lastScrapeStartTime: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    lastScrapeSucceeded: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    lastScrapeTime: number;
    /**
     * 
     * @type {boolean}
     * @memberof TrackerStats
     */
    lastScrapeTimedOut: boolean;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    leecherCount: number;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    nextAnnounceTime: number;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    nextScrapeTime: number;
    /**
     * 
     * @type {string}
     * @memberof TrackerStats
     */
    scrape: string;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    scrapeState: number;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    seederCount: number;
    /**
     * 
     * @type {number}
     * @memberof TrackerStats
     */
    tier: number;
}
