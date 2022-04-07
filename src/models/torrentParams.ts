export class TorrentParameters {
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _bandwidthPriority?:number;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _downloadLimit?:number;
    /**
     *
     * @private
     * @type {boolean}
     * @memberof TorrentParameters
     */
    private _downloadLimited?:boolean;
    /**
     *
     * @private
     * @type {Array<string>}
     * @memberof TorrentParameters
     */
    private _filesWanted?: Array<string>;
    /**
     *
     * @private
     * @type {Array<string>}
     * @memberof TorrentParameters
     */
    private _filesUnwanted?:Array<string>;
    /**
     *
     * @private
     * @type {boolean}
     * @memberof TorrentParameters
     */
    private _honorsSessionLimits?:boolean;
    /**
     *
     * @private
     * @type {Array<number>}
     * @memberof TorrentParameters
     */
    private _ids?:number | Array<number>;
    /**
     *
     * @private
     * @type {string}
     * @memberof TorrentParameters
     */
    private _labels?:Array<string>;
    /**
     *
     * @private
     * @type {string}
     * @memberof TorrentParameters
     */
    private _location?:string;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _peerLimit?:number;
    /**
     *
     * @private
     * @type {Array<number>}
     * @memberof TorrentParameters
     */
    private _priorityHigh?:Array<number>;
    /**
     *
     * @private
     * @type {Array<number>}
     * @memberof TorrentParameters
     */
    private _priorityLow?:Array<number>;
    /**
     *
     * @private
     * @type {Array<number>}
     * @memberof TorrentParameters
     */
    private _priorityNormal?:Array<number>;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _queuePosition?:number;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _seedIdleLimit?:number;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _seedIdleMode?:number;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _seedRatioLimit?:number;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _seedRatioMode?:number;
    /**
     *
     * @private
     * @type {Array<string>}
     * @memberof TorrentParameters
     */
    private _trackerAdd?:Array<string>;
    /**
     *
     * @private
     * @type {Array<string>}
     * @memberof TorrentParameters
     */
    private _trackerRemove?:Array<string>;
    /**
     *
     * @private
     * @type {Array<string>}
     * @memberof TorrentParameters
     */
    private _trackerReplace?:Array<string>;
    /**
     *
     * @private
     * @type {number}
     * @memberof TorrentParameters
     */
    private _uploadLimit?:number;
    /**
     *
     * @private
     * @type {boolean}
     * @memberof TorrentParameters
     */
    private _uploadLimited?:boolean;


    get bandwidthPriority(): number {
        return <number>this._bandwidthPriority;
    }

    set bandwidthPriority(value: number) {
        this._bandwidthPriority = value;
    }

    get downloadLimit(): number {
        return <number>this._downloadLimit;
    }

    set downloadLimit(value: number) {
        this._downloadLimit = value;
    }

    get downloadLimited(): boolean {
        return <boolean>this._downloadLimited;
    }

    set downloadLimited(value: boolean) {
        this._downloadLimited = value;
    }

    get filesWanted(): Array<string> | undefined {
        return this._filesWanted;
    }

    set filesWanted(value: Array<string> | undefined) {
        this._filesWanted = value;
    }

    get filesUnwanted(): Array<string> | undefined  {
        return this._filesUnwanted;
    }

    set filesUnwanted(value: Array<string> | undefined) {
        this._filesUnwanted = value;
    }

    get honorsSessionLimits(): boolean {
        return <boolean>this._honorsSessionLimits;
    }

    set honorsSessionLimits(value: boolean) {
        this._honorsSessionLimits = value;
    }

    get ids(): number | Array<number> | undefined  {
        return this._ids;
    }

    set ids(value: number | Array<number> | undefined) {
        this._ids = value;
    }

    get labels(): Array<string> | undefined  {
        return this._labels;
    }

    set labels(value: Array<string> | undefined) {
        this._labels = value;
    }

    get location(): string {
        return <string>this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get peerLimit(): number {
        return <number>this._peerLimit;
    }

    set peerLimit(value: number) {
        this._peerLimit = value;
    }

    get priorityHigh(): Array<number> {
        return <Array<number>>this._priorityHigh;
    }

    set priorityHigh(value: Array<number>) {
        this._priorityHigh = value;
    }

    get priorityLow(): Array<number> {
        return <Array<number>>this._priorityLow;
    }

    set priorityLow(value: Array<number>) {
        this._priorityLow = value;
    }

    get priorityNormal(): Array<number> {
        return <Array<number>>this._priorityNormal;
    }

    set priorityNormal(value: Array<number>) {
        this._priorityNormal = value;
    }

    get queuePosition(): number {
        return <number>this._queuePosition;
    }

    set queuePosition(value: number) {
        this._queuePosition = value;
    }

    get seedIdleLimit(): number {
        return <number>this._seedIdleLimit;
    }

    set seedIdleLimit(value: number) {
        this._seedIdleLimit = value;
    }

    get seedIdleMode(): number {
        return <number>this._seedIdleMode;
    }

    set seedIdleMode(value: number) {
        this._seedIdleMode = value;
    }

    get seedRatioLimit(): number {
        return <number>this._seedRatioLimit;
    }

    set seedRatioLimit(value: number) {
        this._seedRatioLimit = value;
    }

    get seedRatioMode(): number {
        return <number>this._seedRatioMode;
    }

    set seedRatioMode(value: number) {
        this._seedRatioMode = value;
    }

    get trackerAdd(): Array<string>  {
        return  <Array<string>>this._trackerAdd;
    }

    set trackerAdd(value: Array<string>) {
        this._trackerAdd = value;
    }

    get trackerRemove(): Array<string>{
        return <Array<string>>this._trackerRemove;
    }

    set trackerRemove(value: Array<string>) {
        this._trackerRemove = value;
    }

    get trackerReplace(): Array<string> {
        return <Array<string>>this._trackerReplace;
    }

    set trackerReplace(value: Array<string>) {
        this._trackerReplace = value;
    }

    get uploadLimit(): number {
        return <number>this._uploadLimit;
    }

    set uploadLimit(value: number) {
        this._uploadLimit = value;
    }

    get uploadLimited(): boolean {
        return <boolean>this._uploadLimited;
    }

    set uploadLimited(value: boolean) {
        this._uploadLimited = value;
    }
}