import { FileStats, Label, Peer, PeersFrom, Tracker, TrackerStats } from ".";

/**
 * 
 * @export
 * @class Torrent
 */
export class Torrent {
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _activityDate: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _addedDate: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _bandwidthPriority: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _comment: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _corruptEver: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _creator: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _dateCreated: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _desiredAvailable: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _doneDate: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _downloadDir: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _downloadedEver: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _downloadLimit: number | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _downloadLimited: boolean | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _editDate: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _error: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _errorString: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _eta: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _etaIdle: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _fileCount: number | undefined;
    /**
     *
     * @type {Array&lt;any&gt;}
     * @memberof Torrent
     */
    private _files: Array<File> | undefined;
    /**
     *
     * @type {Array&lt;FileStats&gt;}
     * @memberof Torrent
     */
    private _fileStats: Array<FileStats> | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _hashString: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _haveUnchecked: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _haveValid: number | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _honorsSessionLimits: boolean | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _id: number | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _isFinished: boolean | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _isPrivate: boolean | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _isStalled: boolean | undefined;
    /**
     *
     * @type {Array&lt;Label&gt;}
     * @memberof Torrent
     */
    private _labels: Array<Label> | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _leftUntilDone: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _magnetLink: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _manualAnnounceTime: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _maxConnectedPeers: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _metadataPercentComplete: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _name: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _peerLimit: number | undefined;
    /**
     *
     * @type {Array&lt;Peer&gt;}
     * @memberof Torrent
     */
    private _peers: Array<Peer> | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _peersConnected: number | undefined;
    /**
     *
     * @type {Array&lt;PeersFrom&gt;}
     * @memberof Torrent
     */
    private _peersFrom: Array<PeersFrom> | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _peersGettingFromUs: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _peersSendingToUs: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _percentDone: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _pieces: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _pieceCount: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _pieceSize: number | undefined;
    /**
     *
     * @type {Array&lt;number&gt;}
     * @memberof Torrent
     */
    private _priorities: Array<number> | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _primaryMimeType: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _queuePosition: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _rateDownloadBs: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _rateUploadBs: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _recheckProgress: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _secondsDownloading: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _secondsSeeding: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _seedIdleLimit: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _seedIdleMode: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _seedRatioLimit: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _seedRatioMode: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _sizeWhenDone: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _startDate: number | undefined;
    /**
     *
     * @type {string}
     * @memberof Torrent
     */
    private _status: TorrentStatusEnum | undefined;
    /**
     *
     * @type {Array&lt;Tracker&gt;}
     * @memberof Torrent
     */
    private _trackers: Array<Tracker> | undefined;
    /**
     *
     * @type {Array&lt;TrackerStats&gt;}
     * @memberof Torrent
     */
    private _trackerStats: Array<TrackerStats> | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _totalSize: number | undefined;
    /**
     * @type {string}
     * @memberof Torrent
     */
    private _torrentFile: string | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _uploadedEver: number | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _uploadLimit: number | undefined;
    /**
     *
     * @type {boolean}
     * @memberof Torrent
     */
    private _uploadLimited: boolean | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _uploadRatio: number | undefined;
    /**
     *
     * @type {Array&lt;boolean&gt;}
     * @memberof Torrent
     */
    private _wanted: Array<boolean> | undefined;
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof Torrent
     */
    private _webseeds: Array<string> | undefined;
    /**
     *
     * @type {number}
     * @memberof Torrent
     */
    private _webseedsSendingToUs: number | undefined;


    get activityDate(): number | undefined {
        return this._activityDate;
    }

    set activityDate(value: number | undefined) {
        this._activityDate = value;
    }

    get addedDate(): number | undefined {
        return this._addedDate;
    }

    set addedDate(value: number | undefined) {
        this._addedDate = value;
    }

    get bandwidthPriority(): number | undefined {
        return this._bandwidthPriority;
    }

    set bandwidthPriority(value: number | undefined) {
        this._bandwidthPriority = value;
    }

    get comment(): string | undefined {
        return this._comment;
    }

    set comment(value: string | undefined) {
        this._comment = value;
    }

    get corruptEver(): number | undefined {
        return this._corruptEver;
    }

    set corruptEver(value: number | undefined) {
        this._corruptEver = value;
    }

    get creator(): string | undefined {
        return this._creator;
    }

    set creator(value: string | undefined) {
        this._creator = value;
    }

    get dateCreated(): number | undefined {
        return this._dateCreated;
    }

    set dateCreated(value: number | undefined) {
        this._dateCreated = value;
    }

    get desiredAvailable(): number | undefined {
        return this._desiredAvailable;
    }

    set desiredAvailable(value: number | undefined) {
        this._desiredAvailable = value;
    }

    get doneDate(): number | undefined {
        return this._doneDate;
    }

    set doneDate(value: number | undefined) {
        this._doneDate = value;
    }

    get downloadDir(): string | undefined {
        return this._downloadDir;
    }

    set downloadDir(value: string | undefined) {
        this._downloadDir = value;
    }

    get downloadedEver(): number | undefined {
        return this._downloadedEver;
    }

    set downloadedEver(value: number | undefined) {
        this._downloadedEver = value;
    }

    get downloadLimit(): number | undefined {
        return this._downloadLimit;
    }

    set downloadLimit(value: number | undefined) {
        this._downloadLimit = value;
    }

    get downloadLimited(): boolean | undefined {
        return this._downloadLimited;
    }

    set downloadLimited(value: boolean | undefined) {
        this._downloadLimited = value;
    }

    get editDate(): number | undefined {
        return this._editDate;
    }

    set editDate(value: number | undefined) {
        this._editDate = value;
    }

    get error(): number | undefined {
        return this._error;
    }

    set error(value: number | undefined) {
        this._error = value;
    }

    get errorString(): string | undefined {
        return this._errorString;
    }

    set errorString(value: string | undefined) {
        this._errorString = value;
    }

    get eta(): number | undefined {
        return this._eta;
    }

    set eta(value: number | undefined) {
        this._eta = value;
    }

    get etaIdle(): number | undefined {
        return this._etaIdle;
    }

    set etaIdle(value: number | undefined) {
        this._etaIdle = value;
    }

    get fileCount(): number | undefined {
        return this._fileCount;
    }

    set fileCount(value: number | undefined) {
        this._fileCount = value;
    }

    get files(): Array<File> | undefined {
        return this._files;
    }

    set files(value: Array<File> | undefined) {
        this._files = value;
    }

    get fileStats(): Array<FileStats> | undefined {
        return this._fileStats;
    }

    set fileStats(value: Array<FileStats> | undefined) {
        this._fileStats = value;
    }

    get hashString(): string | undefined {
        return this._hashString;
    }

    set hashString(value: string | undefined) {
        this._hashString = value;
    }

    get haveUnchecked(): number | undefined {
        return this._haveUnchecked;
    }

    set haveUnchecked(value: number | undefined) {
        this._haveUnchecked = value;
    }

    get haveValid(): number | undefined {
        return this._haveValid;
    }

    set haveValid(value: number | undefined) {
        this._haveValid = value;
    }

    get honorsSessionLimits(): boolean | undefined {
        return this._honorsSessionLimits;
    }

    set honorsSessionLimits(value: boolean | undefined) {
        this._honorsSessionLimits = value;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get isFinished(): boolean | undefined {
        return this._isFinished;
    }

    set isFinished(value: boolean | undefined) {
        this._isFinished = value;
    }

    get isPrivate(): boolean | undefined {
        return this._isPrivate;
    }

    set isPrivate(value: boolean | undefined) {
        this._isPrivate = value;
    }

    get isStalled(): boolean | undefined {
        return this._isStalled;
    }

    set isStalled(value: boolean | undefined) {
        this._isStalled = value;
    }

    get labels(): Array<Label> | undefined {
        return this._labels;
    }

    set labels(value: Array<Label> | undefined) {
        this._labels = value;
    }

    get leftUntilDone(): number | undefined {
        return this._leftUntilDone;
    }

    set leftUntilDone(value: number | undefined) {
        this._leftUntilDone = value;
    }

    get magnetLink(): string | undefined {
        return this._magnetLink;
    }

    set magnetLink(value: string | undefined) {
        this._magnetLink = value;
    }

    get manualAnnounceTime(): number | undefined {
        return this._manualAnnounceTime;
    }

    set manualAnnounceTime(value: number | undefined) {
        this._manualAnnounceTime = value;
    }

    get maxConnectedPeers(): number | undefined {
        return this._maxConnectedPeers;
    }

    set maxConnectedPeers(value: number | undefined) {
        this._maxConnectedPeers = value;
    }

    get metadataPercentComplete(): number | undefined {
        return this._metadataPercentComplete;
    }

    set metadataPercentComplete(value: number | undefined) {
        this._metadataPercentComplete = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }

    get peerLimit(): number | undefined {
        return this._peerLimit;
    }

    set peerLimit(value: number | undefined) {
        this._peerLimit = value;
    }

    get peers(): Array<Peer> | undefined {
        return this._peers;
    }

    set peers(value: Array<Peer> | undefined) {
        this._peers = value;
    }

    get peersConnected(): number | undefined {
        return this._peersConnected;
    }

    set peersConnected(value: number | undefined) {
        this._peersConnected = value;
    }

    get peersFrom(): Array<PeersFrom> | undefined {
        return this._peersFrom;
    }

    set peersFrom(value: Array<PeersFrom> | undefined) {
        this._peersFrom = value;
    }

    get peersGettingFromUs(): number | undefined {
        return this._peersGettingFromUs;
    }

    set peersGettingFromUs(value: number | undefined) {
        this._peersGettingFromUs = value;
    }

    get peersSendingToUs(): number | undefined {
        return this._peersSendingToUs;
    }

    set peersSendingToUs(value: number | undefined) {
        this._peersSendingToUs = value;
    }

    get percentDone(): number | undefined {
        return this._percentDone;
    }

    set percentDone(value: number | undefined) {
        this._percentDone = value;
    }

    get pieces(): string | undefined {
        return this._pieces;
    }

    set pieces(value: string | undefined) {
        this._pieces = value;
    }

    get pieceCount(): number | undefined {
        return this._pieceCount;
    }

    set pieceCount(value: number | undefined) {
        this._pieceCount = value;
    }

    get pieceSize(): number | undefined {
        return this._pieceSize;
    }

    set pieceSize(value: number | undefined) {
        this._pieceSize = value;
    }

    get priorities(): Array<number> | undefined {
        return this._priorities;
    }

    set priorities(value: Array<number> | undefined) {
        this._priorities = value;
    }

    get primaryMimeType(): string | undefined {
        return this._primaryMimeType;
    }

    set primaryMimeType(value: string | undefined) {
        this._primaryMimeType = value;
    }

    get queuePosition(): number | undefined {
        return this._queuePosition;
    }

    set queuePosition(value: number | undefined) {
        this._queuePosition = value;
    }

    get rateDownloadBs(): number | undefined {
        return this._rateDownloadBs;
    }

    set rateDownloadBs(value: number | undefined) {
        this._rateDownloadBs = value;
    }

    get rateUploadBs(): number | undefined {
        return this._rateUploadBs;
    }

    set rateUploadBs(value: number | undefined) {
        this._rateUploadBs = value;
    }

    get recheckProgress(): number | undefined {
        return this._recheckProgress;
    }

    set recheckProgress(value: number | undefined) {
        this._recheckProgress = value;
    }

    get secondsDownloading(): number | undefined {
        return this._secondsDownloading;
    }

    set secondsDownloading(value: number | undefined) {
        this._secondsDownloading = value;
    }

    get secondsSeeding(): number | undefined {
        return this._secondsSeeding;
    }

    set secondsSeeding(value: number | undefined) {
        this._secondsSeeding = value;
    }

    get seedIdleLimit(): number | undefined {
        return this._seedIdleLimit;
    }

    set seedIdleLimit(value: number | undefined) {
        this._seedIdleLimit = value;
    }

    get seedIdleMode(): number | undefined {
        return this._seedIdleMode;
    }

    set seedIdleMode(value: number | undefined) {
        this._seedIdleMode = value;
    }

    get seedRatioLimit(): number | undefined {
        return this._seedRatioLimit;
    }

    set seedRatioLimit(value: number | undefined) {
        this._seedRatioLimit = value;
    }

    get seedRatioMode(): number | undefined {
        return this._seedRatioMode;
    }

    set seedRatioMode(value: number | undefined) {
        this._seedRatioMode = value;
    }

    get sizeWhenDone(): number | undefined {
        return this._sizeWhenDone;
    }

    set sizeWhenDone(value: number | undefined) {
        this._sizeWhenDone = value;
    }

    get startDate(): number | undefined {
        return this._startDate;
    }

    set startDate(value: number | undefined) {
        this._startDate = value;
    }

    get status(): TorrentStatusEnum | undefined {
        return this._status;
    }

    set status(value: TorrentStatusEnum | undefined) {
        this._status = value;
    }

    get trackers(): Array<Tracker> | undefined {
        return this._trackers;
    }

    set trackers(value: Array<Tracker> | undefined) {
        this._trackers = value;
    }

    get trackerStats(): Array<TrackerStats> | undefined {
        return this._trackerStats;
    }

    set trackerStats(value: Array<TrackerStats> | undefined) {
        this._trackerStats = value;
    }

    get totalSize(): number | undefined {
        return this._totalSize;
    }

    set totalSize(value: number | undefined) {
        this._totalSize = value;
    }

    get torrentFile(): string | undefined {
        return this._torrentFile;
    }

    set torrentFile(value: string | undefined) {
        this._torrentFile = value;
    }

    get uploadedEver(): number | undefined {
        return this._uploadedEver;
    }

    set uploadedEver(value: number | undefined) {
        this._uploadedEver = value;
    }

    get uploadLimit(): number | undefined {
        return this._uploadLimit;
    }

    set uploadLimit(value: number | undefined) {
        this._uploadLimit = value;
    }

    get uploadLimited(): boolean | undefined {
        return this._uploadLimited;
    }

    set uploadLimited(value: boolean | undefined) {
        this._uploadLimited = value;
    }

    get uploadRatio(): number | undefined {
        return this._uploadRatio;
    }

    set uploadRatio(value: number | undefined) {
        this._uploadRatio = value;
    }

    get wanted(): Array<boolean> | undefined {
        return this._wanted;
    }

    set wanted(value: Array<boolean> | undefined) {
        this._wanted = value;
    }

    get webseeds(): Array<string> | undefined {
        return this._webseeds;
    }

    set webseeds(value: Array<string> | undefined) {
        this._webseeds = value;
    }

    get webseedsSendingToUs(): number | undefined {
        return this._webseedsSendingToUs;
    }

    set webseedsSendingToUs(value: number | undefined) {
        this._webseedsSendingToUs = value;
    }
}


/**
    * @export
    * @enum {string}
    */
export enum TorrentStatusEnum {
    Stopped,
    QueuedToCheckFiles,
    CheckingFiles,
    QueuedToDonwload,
    Downloading,
    QueuedToSeed,
    Seeding
}

