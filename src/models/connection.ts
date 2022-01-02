/**
 * 
 * @export
 * @interface Connection
 */
export interface Connection {
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
}
