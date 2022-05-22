/**
 *
 * @export
 * @class NewTorrentDescriptor
 */
export class SessionConfig {
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _altSpeedDown?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _altSpeedEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _altSpeedTimeBegin?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _altSpeedTimeEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _altSpeedTimeEnd?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _altSpeedTimeDay?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _altSpeedUp?: number;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _blocklistUrl?: string;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _blocklistEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _blocklistSize?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _cacheSizeMb?: number;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _configDir?: string;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _downloadDir?: string;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _downloadQueueSize?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _downloadQueueEnabled?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _dhtEnabled?: boolean;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _encryption?: string;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _idleSeedingLimit?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _idleSeedingLimitEnabled?: boolean;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _incompleteDir?: string;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _incompleteDirEnabled?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _lpdEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _peerLimitGlobal?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _peerLimitPerTorrent?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _pexEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _peerPort?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _peerPortRandomOnStart?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _portForwardingEnabled?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _queueStalledEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _queueStalledMinutes?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _renamePartialFiles?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _rpcVersion?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _rpcVersionMinimum?: number;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _rpcVersionSemver?: number;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _scriptTorrentAddedFilename?: string;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _scriptTorrentAddedEnabled?: boolean;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _scriptTorrentDoneFilename?: string;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _scriptTorrentDoneEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _seedRatioLimit?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _seedRatioLimited?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _seedQueueSize?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _seedQueueEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _speedLimitDown?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _speedLimitDownEnabled?: boolean;
  /**
     *
     * @private
     * @type {number}
     * @memberof SessionConfig
     */
  private _speedLimitUp?: number;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _speedLimitUpEnabled?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _startAddedTorrents?: boolean;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _trashOriginalTorrentFiles?: boolean;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _units?: Units;
  /**
     *
     * @private
     * @type {boolean}
     * @memberof SessionConfig
     */
  private _utpEnabled?: boolean;
  /**
     *
     * @private
     * @type {string}
     * @memberof SessionConfig
     */
  private _version?: string;

  get altSpeedDown(): number {
    return <number>this._altSpeedDown;
  }

  set altSpeedDown(value: number) {
    this._altSpeedDown = value;
  }

  get altSpeedEnabled(): boolean {
    return <boolean>this._altSpeedEnabled;
  }

  set altSpeedEnabled(value: boolean) {
    this._altSpeedEnabled = value;
  }

  get altSpeedTimeBegin(): number {
    return <number>this._altSpeedTimeBegin;
  }

  set altSpeedTimeBegin(value: number) {
    this._altSpeedTimeBegin = value;
  }

  get altSpeedTimeEnabled(): boolean {
    return <boolean>this._altSpeedTimeEnabled;
  }

  set altSpeedTimeEnabled(value: boolean) {
    this._altSpeedTimeEnabled = value;
  }

  get altSpeedTimeEnd(): number {
    return <number>this._altSpeedTimeEnd;
  }

  set altSpeedTimeEnd(value: number) {
    this._altSpeedTimeEnd = value;
  }

  get altSpeedTimeDay(): number {
    return <number>this._altSpeedTimeDay;
  }

  set altSpeedTimeDay(value: number) {
    this._altSpeedTimeDay = value;
  }

  get altSpeedUp(): number {
    return <number>this._altSpeedUp;
  }

  set altSpeedUp(value: number) {
    this._altSpeedUp = value;
  }

  get blocklistUrl(): string {
    return <string>this._blocklistUrl;
  }

  set blocklistUrl(value: string) {
    this._blocklistUrl = value;
  }

  get blocklistEnabled(): boolean {
    return <boolean>this._blocklistEnabled;
  }

  set blocklistEnabled(value: boolean) {
    this._blocklistEnabled = value;
  }

  get blocklistSize(): number {
    return <number>this._blocklistSize;
  }

  set blocklistSize(value: number) {
    this._blocklistSize = value;
  }

  get cacheSizeMb(): number {
    return <number>this._cacheSizeMb;
  }

  set cacheSizeMb(value: number) {
    this._cacheSizeMb = value;
  }

  get configDir(): string {
    return <string>this._configDir;
  }

  set configDir(value: string) {
    this._configDir = value;
  }

  get downloadDir(): string {
    return <string>this._downloadDir;
  }

  set downloadDir(value: string) {
    this._downloadDir = value;
  }

  get downloadQueueSize(): number {
    return <number>this._downloadQueueSize;
  }

  set downloadQueueSize(value: number) {
    this._downloadQueueSize = value;
  }

  get downloadQueueEnabled(): boolean {
    return <boolean>this._downloadQueueEnabled;
  }

  set downloadQueueEnabled(value: boolean) {
    this._downloadQueueEnabled = value;
  }

  get dhtEnabled(): boolean {
    return <boolean>this._dhtEnabled;
  }

  set dhtEnabled(value: boolean) {
    this._dhtEnabled = value;
  }

  get encryption(): string {
    return <string>this._encryption;
  }

  set encryption(value: string) {
    this._encryption = value;
  }

  get idleSeedingLimit(): number {
    return <number>this._idleSeedingLimit;
  }

  set idleSeedingLimit(value: number) {
    this._idleSeedingLimit = value;
  }

  get idleSeedingLimitEnabled(): boolean {
    return <boolean>this._idleSeedingLimitEnabled;
  }

  set idleSeedingLimitEnabled(value: boolean) {
    this._idleSeedingLimitEnabled = value;
  }

  get incompleteDir(): string {
    return <string>this._incompleteDir;
  }

  set incompleteDir(value: string) {
    this._incompleteDir = value;
  }

  get incompleteDirEnabled(): boolean {
    return <boolean>this._incompleteDirEnabled;
  }

  set incompleteDirEnabled(value: boolean) {
    this._incompleteDirEnabled = value;
  }

  get lpdEnabled(): boolean {
    return <boolean>this._lpdEnabled;
  }

  set lpdEnabled(value: boolean) {
    this._lpdEnabled = value;
  }

  get peerLimitGlobal(): number {
    return <number>this._peerLimitGlobal;
  }

  set peerLimitGlobal(value: number) {
    this._peerLimitGlobal = value;
  }

  get peerLimitPerTorrent(): number {
    return <number>this._peerLimitPerTorrent;
  }

  set peerLimitPerTorrent(value: number) {
    this._peerLimitPerTorrent = value;
  }

  get pexEnabled(): boolean {
    return <boolean>this._pexEnabled;
  }

  set pexEnabled(value: boolean) {
    this._pexEnabled = value;
  }

  get peerPort(): number {
    return <number>this._peerPort;
  }

  set peerPort(value: number) {
    this._peerPort = value;
  }

  get peerPortRandomOnStart(): boolean {
    return <boolean>this._peerPortRandomOnStart;
  }

  set peerPortRandomOnStart(value: boolean) {
    this._peerPortRandomOnStart = value;
  }

  get portForwardingEnabled(): boolean {
    return <boolean>this._portForwardingEnabled;
  }

  set portForwardingEnabled(value: boolean) {
    this._portForwardingEnabled = value;
  }

  get queueStalledEnabled(): boolean {
    return <boolean>this._queueStalledEnabled;
  }

  set queueStalledEnabled(value: boolean) {
    this._queueStalledEnabled = value;
  }

  get queueStalledMinutes(): number {
    return <number>this._queueStalledMinutes;
  }

  set queueStalledMinutes(value: number) {
    this._queueStalledMinutes = value;
  }

  get renamePartialFiles(): boolean {
    return <boolean>this._renamePartialFiles;
  }

  set renamePartialFiles(value: boolean) {
    this._renamePartialFiles = value;
  }

  get rpcVersion(): number {
    return <number>this._rpcVersion;
  }

  set rpcVersion(value: number) {
    this._rpcVersion = value;
  }

  get rpcVersionMinimum(): number {
    return <number>this._rpcVersionMinimum;
  }

  set rpcVersionMinimum(value: number) {
    this._rpcVersionMinimum = value;
  }

  get rpcVersionSemver(): number {
    return <number>this._rpcVersionSemver;
  }

  set rpcVersionSemver(value: number) {
    this._rpcVersionSemver = value;
  }

  get scriptTorrentAddedFilename(): string {
    return <string>this._scriptTorrentAddedFilename;
  }

  set scriptTorrentAddedFilename(value: string) {
    this._scriptTorrentAddedFilename = value;
  }

  get scriptTorrentAddedEnabled(): boolean {
    return <boolean>this._scriptTorrentAddedEnabled;
  }

  set scriptTorrentAddedEnabled(value: boolean) {
    this._scriptTorrentAddedEnabled = value;
  }

  get scriptTorrentDoneFilename(): string {
    return <string>this._scriptTorrentDoneFilename;
  }

  set scriptTorrentDoneFilename(value: string) {
    this._scriptTorrentDoneFilename = value;
  }

  get scriptTorrentDoneEnabled(): boolean {
    return <boolean>this._scriptTorrentDoneEnabled;
  }

  set scriptTorrentDoneEnabled(value: boolean) {
    this._scriptTorrentDoneEnabled = value;
  }

  get seedRatioLimit(): number {
    return <number>this._seedRatioLimit;
  }

  set seedRatioLimit(value: number) {
    this._seedRatioLimit = value;
  }

  get seedRatioLimited(): boolean {
    return <boolean>this._seedRatioLimited;
  }

  set seedRatioLimited(value: boolean) {
    this._seedRatioLimited = value;
  }

  get seedQueueSize(): number {
    return <number>this._seedQueueSize;
  }

  set seedQueueSize(value: number) {
    this._seedQueueSize = value;
  }

  get seedQueueEnabled(): boolean {
    return <boolean>this._seedQueueEnabled;
  }

  set seedQueueEnabled(value: boolean) {
    this._seedQueueEnabled = value;
  }

  get speedLimitDown(): number {
    return <number>this._speedLimitDown;
  }

  set speedLimitDown(value: number) {
    this._speedLimitDown = value;
  }

  get speedLimitDownEnabled(): boolean {
    return <boolean>this._speedLimitDownEnabled;
  }

  set speedLimitDownEnabled(value: boolean) {
    this._speedLimitDownEnabled = value;
  }

  get speedLimitUp(): number {
    return <number>this._speedLimitUp;
  }

  set speedLimitUp(value: number) {
    this._speedLimitUp = value;
  }

  get speedLimitUpEnabled(): boolean {
    return <boolean>this._speedLimitUpEnabled;
  }

  set speedLimitUpEnabled(value: boolean) {
    this._speedLimitUpEnabled = value;
  }

  get startAddedTorrents(): boolean {
    return <boolean>this._startAddedTorrents;
  }

  set startAddedTorrents(value: boolean) {
    this._startAddedTorrents = value;
  }

  get trashOriginalTorrentFiles(): boolean {
    return <boolean>this._trashOriginalTorrentFiles;
  }

  set trashOriginalTorrentFiles(value: boolean) {
    this._trashOriginalTorrentFiles = value;
  }

  get units(): Units {
    return <Units>this._units;
  }

  set units(value: Units) {
    this._units = value;
  }

  get utpEnabled(): boolean {
    return <boolean>this._utpEnabled;
  }

  set utpEnabled(value: boolean) {
    this._utpEnabled = value;
  }

  get version(): string {
    return <string>this._version;
  }

  set version(value: string) {
    this._version = value;
  }
}

export class Units {
  speedUnits?: Array<string>;
  speedBytes?: number; 
  sizeUnits?: Array<string>;
  sizeBytes?: number; 
  memoryUnits?: Array<string>;  
  memoryBytes?: number;
}