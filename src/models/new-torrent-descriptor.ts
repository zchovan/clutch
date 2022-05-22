/**
 *
 * @export
 * @class NewTorrentDescriptor
 */
export class NewTorrentDescriptor {
  /**
     *
     * @private
     * @type {string}
     * @memberof Torrent
     */
  private _cookies?:string;

  /**
     *
     * @private
     * @type {string}
     * @memberof Torrent
     */
  private _downloadDir?:string;

  /**
     *
     * @private
     * @type {string}
     * @memberof Torrent
     */
  private _filename?:string;

  /**
     *
     * @private
     * @type {string}
     * @memberof Torrent
     */
  private _metainfo?:string;

  /**
     *
     * @private
     * @type {boolean}
     * @memberof Torrent
     */
  private _paused?:boolean;

  /**
     *
     * @private
     * @type {number}
     * @memberof Torrent
     */
  private _peerLimit?:number;

  /**
     *
     * @private
     * @type {number}
     * @memberof Torrent
     */
  private _bandwidthPriority?:number;

  /**
     *
     * @private
     * @type {Array<number>}
     * @memberof Torrent
     */
  private _filesWanted?:Array<number>;

  /**
     *
     * @private
     * @type {Array<number>}
     * @memberof Torrent
     */
  private _filesUnwanted?:Array<number>;

  /**
     *
     * @private
     * @type {Array<number>}
     * @memberof Torrent
     */
  private _priorityHigh?:Array<number>;

  /**
     *
     * @private
     * @type {Array<number>}
     * @memberof Torrent
     */
  private _priorityLow?:Array<number>;

  /**
     *
     * @private
     * @type {Array<number>}
     * @memberof Torrent
     */
  private _priorityNormal?:Array<number>;


  get cookies(): string {
    return <string>this._cookies;
  }

  set cookies(value: string) {
    this._cookies = value;
  }

  get downloadDir(): string {
    return <string>this._downloadDir;
  }

  set downloadDir(value: string) {
    this._downloadDir = value;
  }

  get filename(): string {
    return <string>this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }

  get metainfo(): string {
    return <string>this._metainfo;
  }

  set metainfo(value: string) {
    this._metainfo = value;
  }

  get paused(): boolean {
    return <boolean>this._paused;
  }

  set paused(value: boolean) {
    this._paused = value;
  }

  get peerLimit(): number {
    return <number>this._peerLimit;
  }

  set peerLimit(value: number) {
    this._peerLimit = value;
  }

  get bandwidthPriority(): number {
    return <number>this._bandwidthPriority;
  }

  set bandwidthPriority(value: number) {
    this._bandwidthPriority = value;
  }

  get filesWanted(): Array<number> {
    if (this._filesWanted !== undefined) {
      return this._filesWanted;
    } else {
      return [];
    }
  }

  set filesWanted(value: Array<number>) {
    this._filesWanted = value;
  }

  get filesUnwanted(): Array<number> {
    if (this._filesUnwanted !== undefined) {
      return this._filesUnwanted;
    } else {
      return [];
    }
  }

  set filesUnwanted(value: Array<number>) {
    this._filesUnwanted = value;
  }

  get priorityHigh(): Array<number> {
    if (this._priorityHigh !== undefined) {
      return this._priorityHigh;
    } else {
      return [];
    }
  }

  set priorityHigh(value: Array<number>) {
    this._priorityHigh = value;
  }

  get priorityLow(): Array<number> {
    if (this._priorityLow !== undefined) {
      return this._priorityLow;
    } else {
      return [];
    }

  }

  set priorityLow(value: Array<number>) {
    this._priorityLow = value;
  }

  get priorityNormal(): Array<number> {
    if (this._priorityNormal !== undefined) {
      return this._priorityNormal;
    } else {
      return [];
    }
  }

  set priorityNormal(value: Array<number>) {
    this._priorityNormal = value;
  }
}
