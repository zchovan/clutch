import Connection from "../models/connection";
import {Torrent} from "@/models";
import Client from "@/util/client";

/**
 *
 * @export
 * @interface State
 */
 export interface State {
    connections: Array<Connection>,
    status: Status,
    currentConnection: Connection,
    selectedTorrent: Torrent,
    client: Client|undefined,
}

export enum Status {
    NOT_CONNECTED,
    CONNECTING,
    CONNECTED
}