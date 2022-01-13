import Connection from "../models/connection";

/**
 *
 * @export
 * @interface State
 */
 export interface State {
    connections: Array<Connection>,
    status: Status,
    currentConnection: Connection
}

export enum Status {
    NOT_CONNECTED,
    CONNECTING,
    CONNECTED
}