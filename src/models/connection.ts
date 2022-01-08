/**
 * 
 * @export
 * @interface Connection
 */
export default class Connection {
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Connection
     */
    url: string;
    /**
     * 
     * @type {number}
     * @memberof Connection
     */
    port: number;
    /**
     * 
     * @type {string}
     * @memberof Connection
     */
    rpc_path: string;
    /**
     * 
     * @type {boolean}
     * @memberof Connection
     */
    auth_required: boolean;
    /**
     * 
     * @type {string}
     * @memberof Connection
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Connection
     */
    password: string;

    constructor(
        name: string,
        url: string,
        port: number,
        rpc_path: string,
        auth_required: boolean,
        username: string,
        password: string,
    ) {
        this.name = name,
        this.url = url,
        this.port = port,
        this.rpc_path = rpc_path,
        this.auth_required = auth_required,
        this.username = username,
        this.password = password
    }
}
