import Connection from "./connection";

/**
 * 
 * @export
 * @interface State
 */
 export interface State {
    status: Status,
    currentConnection: Connection
}

export enum Status {
    NOT_CONNECTED,
    CONNECTING,
    CONNECTED
}