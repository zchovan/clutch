/**
 * 
 * @export
 * @interface Peer
 */
export interface Peer {
    /**
     * 
     * @type {string}
     * @memberof Peer
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof Peer
     */
    clientName: string;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    clientIsChoked: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    clientIsInterested: boolean;
    /**
     * 
     * @type {string}
     * @memberof Peer
     */
    flagStr: string;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    isDownloadingFrom: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    isEncrypted: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    isIncoming: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    isUploadingTo: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    isUTP: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    peerIsChoked: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Peer
     */
    peerIsInterested: boolean;
    /**
     * 
     * @type {number}
     * @memberof Peer
     */
    port: number;
    /**
     * 
     * @type {number}
     * @memberof Peer
     */
    progress: number;
    /**
     * 
     * @type {number}
     * @memberof Peer
     */
    rateToClient: number;
    /**
     * 
     * @type {number}
     * @memberof Peer
     */
    rateToPeer: number;
}
