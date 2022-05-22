import axios, { AxiosInstance } from 'axios';
import Connection from '@/models/connection';
import {QUEUE, TORRENT_FIELDS} from '@/util/util';
import {TorrentParameters} from '@/models/torrentParams';
import {NewTorrentDescriptor} from '@/models/new-torrent-descriptor';
import {SessionConfig} from '@/models/session-config';
import {Torrent} from '@/models';

export default class Client {
  connection:Connection;
  client?:AxiosInstance;

  constructor(
    connection:Connection
  ) {
    this.connection = connection;
    this.initClient();
    this.setupInterceptors();
  }

  initClient() {
    if (this.connection.auth_required) {
      this.client = axios.create({
        baseURL: 'http://' + this.connection.url + ':' + this.connection.port,
        method: 'POST',
        headers: {
          'x-transmission-session-id':
                        (this.connection.csrf_token !== undefined) ? this.connection.csrf_token : ''
        },
        auth: {
          username: this.connection.username,
          password: this.connection.password
        },
      });
    } else {
      this.client = axios.create({
        baseURL: this.connection.url,
        method: 'POST',
        headers: {
          'x-transmission-session-id':
                        (this.connection.csrf_token !== undefined) ? this.connection.csrf_token : ''
        }
      });
    }
  }
  setupInterceptors() {
    if (this.client !== undefined) {
      const connection = this.connection;
      const axiosApiInstance = this.client;
      // axiosApiInstance.interceptors.request.use()
      axiosApiInstance.interceptors.response.use(
        function (response) {
          console.log('intercepted okay');
          // don't do anything if no errors present
          return response;
        },
        function (error) {
          console.log('intercepted rejection');
          const originalRequest = error.config;
          if (error.response.status == 409) {
            originalRequest._retry = true;
            console.log('interceptor csrf token: ', error.response.headers['x-transmission-session-id']);
            originalRequest.headers['x-transmission-session-id'] =
                            error.response.headers['x-transmission-session-id'];
            connection.csrf_token = error.response.headers['x-transmission-session-id'];
            return axiosApiInstance(originalRequest);
          } else {
            return Promise.reject(error);
          }
        });
    }

  }


  /**
     * Method name          | libtransmission function
     *    ---------------------+-------------------------------------------------
     *    "torrent-start"      | tr_torrentStart
     *    "torrent-start-now"  | tr_torrentStartNow
     *    "torrent-stop"       | tr_torrentStop
     *    "torrent-verify"     | tr_torrentVerify
     *    "torrent-reannounce" | tr_torrentManualUpdate ("ask tracker for more peers")
     *
     *    Request arguments: "ids", which specifies which torrents to use.
     *                   All torrents are used if the "ids" argument is omitted.
     *                   "ids" should be one of the following:
     *                   (1) an integer referring to a torrent id
     *                   (2) a list of torrent id numbers, sha1 hash strings, or both
     *                   (3) a string, "recently-active", for recently-active torrents
     */

  /**
     *
     * @param ids
     */
  async startTorrent(ids:number|Array<number>) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-start',
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     * @param ids
     */
  async startTorrentNow(ids:number|Array<number>) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-start-now',
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     * @param ids
     */
  async stopTorrent(ids:number|Array<number>) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-stop',
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     * @param ids
     */
  async verifyTorrent(ids:number|Array<number>) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-verify',
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     * @param ids
     */
  async reannounceTorrent(ids:number|Array<number>) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-reannounce',
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *  Method name: "torrent-set"
     *
     *    Request arguments:
     *
     *    string                | value type & description
     *    ----------------------+-------------------------------------------------
     *    "bandwidthPriority"   | number     this torrent's bandwidth tr_priority_t
     *    "downloadLimit"       | number     maximum download speed (KBps)
     *    "downloadLimited"     | boolean    true if "downloadLimit" is honored
     *    "files-wanted"        | array      indices of file(s) to download
     *    "files-unwanted"      | array      indices of file(s) to not download
     *    "honorsSessionLimits" | boolean    true if session upload limits are honored
     *    "ids"                 | array      torrent list, as described in 3.1
     *    "labels"              | array      array of string labels
     *    "location"            | string     new location of the torrent's content
     *    "peer-limit"          | number     maximum number of peers
     *    "priority-high"       | array      indices of high-priority file(s)
     *    "priority-low"        | array      indices of low-priority file(s)
     *    "priority-normal"     | array      indices of normal-priority file(s)
     *    "queuePosition"       | number     position of this torrent in its queue [0...n)
     *    "seedIdleLimit"       | number     torrent-level number of minutes of seeding inactivity
     *    "seedIdleMode"        | number     which seeding inactivity to use.  See tr_idlelimit
     *    "seedRatioLimit"      | double     torrent-level seeding ratio
     *    "seedRatioMode"       | number     which ratio to use.  See tr_ratiolimit
     *    "trackerAdd"          | array      strings of announce URLs to add
     *    "trackerRemove"       | array      ids of trackers to remove
     *    "trackerReplace"      | array      pairs of <trackerId/new announce URLs>
     *    "uploadLimit"         | number     maximum upload speed (KBps)
     *    "uploadLimited"       | boolean    true if "uploadLimit" is honored
     *
     *    Just as an empty "ids" value is shorthand for "all ids", using an empty array
     *    for "files-wanted", "files-unwanted", "priority-high", "priority-low", or
     *    "priority-normal" is shorthand for saying "all files".
     *
     *    Response arguments: none
     */
  async setTorrent(parameters:TorrentParameters, ids:number|Array<number>) {
    if (parameters.ids === undefined) {
      parameters.ids = ids;
    }
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-set',
          'arguments': JSON.stringify(parameters),
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    Request arguments:
     *
     *    (1) An optional "ids" array as described in 3.1.
     *    (2) A required "fields" array of keys. (see list below)
     *    (3) An optional "format" string specifying how to format the
     *        "torrents" response field. Allowed values are "objects" (default)
     *        and "table". (see "Response arguments" below)
     *
     *    Response arguments:
     *
     *    (1) A "torrents" array.
     *
     *        If the "format" request was "objects" (default), "torrents" will
     *        be an array of objects, each of which contains the key/value
     *        pairs matching the request's "fields" arg. This was the only
     *        format before Transmission 3 and has some obvious programmer
     *        conveniences, such as parsing directly into Javascript objects.
     *
     *        If the format was "table", then "torrents" will be an array of
     *        arrays. The first row holds the keys and each remaining row holds
     *        a torrent's values for those keys. This format is more efficient
     *        in terms of JSON generation and JSON parsing.
     *
     *    (2) If the request's "ids" field was "recently-active",
     *        a "removed" array of torrent-id numbers of recently-removed
     *        torrents.
     *
     *    List of all fields can be found at src/util/util::TORRENT_FILES
     */
  async getAllTorrents() : Promise<Torrent[]> {
    return new Promise<Torrent[]>((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-get',
          'arguments': {
            'fields': TORRENT_FIELDS,
          },
        }).then((response) => {
          const objArray : Record<string, unknown>[] = response.data.arguments.torrents;
          const typedArray : Torrent[] = [];
          for (let i = 0; i < objArray.length; i++) {
            typedArray.push(new Torrent(objArray[i]));
          }
          resolve(typedArray);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *   Request arguments:
     *
     *    key                  | value type & description
     *    ---------------------+-------------------------------------------------
     *    "cookies"            | string      pointer to a string of one or more cookies.
     *    "download-dir"       | string      path to download the torrent to
     *    "filename"           | string      filename or URL of the .torrent file
     *    "metainfo"           | string      base64-encoded .torrent content
     *    "paused"             | boolean     if true, don't start the torrent
     *    "peer-limit"         | number      maximum number of peers
     *    "bandwidthPriority"  | number      torrent's bandwidth tr_priority_t
     *    "files-wanted"       | array       indices of file(s) to download
     *    "files-unwanted"     | array       indices of file(s) to not download
     *    "priority-high"      | array       indices of high-priority file(s)
     *    "priority-low"       | array       indices of low-priority file(s)
     *    "priority-normal"    | array       indices of normal-priority file(s)
     *
     *    Either "filename" OR "metainfo" MUST be included.
     *    All other arguments are optional.
     *
     *    The format of the "cookies" should be NAME=CONTENTS, where NAME is the
     *    cookie name and CONTENTS is what the cookie should contain.
     *    Set multiple cookies like this: "name1=content1; name2=content2;" etc.
     *    <http://curl.haxx.se/libcurl/c/curl_easy_setopt.html#CURLOPTCOOKIE>
     *
     *    Response arguments: On success, a "torrent-added" object in the
     *                        form of one of 3.3's tr_info objects with the
     *                        fields for id, name, and hashString.
     *
     *                        On failure due to a duplicate torrent existing,
     *                        a "torrent-duplicate" object in the same form.
     *
     */
  async addTorrent(torrentDesc:NewTorrentDescriptor) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-add',
          'arguments': JSON.stringify(torrentDesc),
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *   Request arguments:
     *
     *    string                     | value type & description
     *    ---------------------------+-------------------------------------------------
     *    "ids"                      | array      torrent list, as described in 3.1
     *    "delete-local-data"        | boolean    delete local data. (default: false)
     *
     *    Response arguments: none
     */
  async removeTorrent(ids:number|Array<number>, deleteLocalData:boolean) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-remove',
          'arguments': {
            'ids': ids,
            'delete-local-data': deleteLocalData
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     *    Request arguments:
     *
     *    string                           | value type & description
     *    ---------------------------------+-------------------------------------------------
     *    "ids"                            | array      torrent list, as described in 3.1
     *    "location"                       | string     the new torrent location
     *    "move"                           | boolean    if true, move from previous location.
     *                                     |            otherwise, search "location" for files
     *                                     |            (default: false)
     *
     *    Response arguments: none
     */
  async moveTorrent(ids:number|Array<number>, location:string, move = false) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-move',
          'arguments': {
            'ids': ids,
            'location': location,
            'move': move
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    For more information on the use of this function, see the transmission.h
     *    documentation of tr_torrentRenamePath(). In particular, note that if this
     *    call succeeds you'll want to update the torrent's "files" and "name" field
     *    with torrent-get.
     *
     *    Request arguments:
     *
     *    string                           | value type & description
     *    ---------------------------------+-------------------------------------------------
     *    "ids"                            | array      the torrent torrent list, as described in 3.1
     *                                     |            (must only be 1 torrent)
     *    "path"                           | string     the path to the file or folder that will be renamed
     *    "name"                           | string     the file or folder's new name
     *
     *    Response arguments: "path", "name", and "id", holding the torrent ID integer
     */
  async renameTorrentPath(ids:number|Array<number>, path:string, name:string) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-rename-path',
          'arguments': {
            'ids': ids,
            'path': path,
            'name': name
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *
     *    Request arguments: one or more of SessionConfig's properties, except: "blocklist-size",
     *                       "config-dir", "rpc-version", "rpc-version-minimum",
     *                       "version", and "session-id"
     *                       Note, every property present will be overwritten.
     *    Response arguments: none
     */
  async sessionSet(sessionConfig:SessionConfig) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'session-set',
          'arguments': JSON.stringify(sessionConfig),
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     * Request arguments: an optional "fields" array of keys (see 4.1)
     * Response arguments: key/value pairs matching the request's "fields"
     *   argument if present, or all supported fields (see 4.1) otherwise.
     */
  async sessionGet() {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'session-get',
        }).then((response) => {
          resolve(response.data);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    Request arguments: none
     *
     *    Response arguments:
     *
     *    string                     | value type
     *    ---------------------------+-------------------------------------------------
     *    "activeTorrentCount"       | number
     *    "downloadSpeed"            | number
     *    "pausedTorrentCount"       | number
     *    "torrentCount"             | number
     *    "uploadSpeed"              | number
     *    ---------------------------+-------------------------------+
     *    "cumulative-stats"         | object, containing:           |
     *                               +------------------+------------+
     *                               | uploadedBytes    | number     | tr_session_stats
     *                               | downloadedBytes  | number     | tr_session_stats
     *                               | filesAdded       | number     | tr_session_stats
     *                               | sessionCount     | number     | tr_session_stats
     *                               | secondsActive    | number     | tr_session_stats
     *    ---------------------------+-------------------------------+
     *    "current-stats"            | object, containing:           |
     *                               +------------------+------------+
     *                               | uploadedBytes    | number     | tr_session_stats
     *                               | downloadedBytes  | number     | tr_session_stats
     *                               | filesAdded       | number     | tr_session_stats
     *                               | sessionCount     | number     | tr_session_stats
     *                               | secondsActive    | number     | tr_session_stats
     */
  async sessionStats() {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'session-stats',
          'arguments': {},
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    Request arguments: none
     *    Response arguments: a number "blocklist-size"
     */
  async blocklistUpdate() {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'blocklist-update',
          'arguments': {},
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    This method tests to see if your incoming peer port is accessible
     *    from the outside world.
     *
     *    Request arguments: none
     *    Response arguments: a bool, "port-is-open"
     */
  async portTest() {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'port-test',
          'arguments': {},
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    This method tells the transmission session to shut down.
     *
     *    Request arguments: none
     *    Response arguments: none
     */
  async sessionClose() {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'session-close',
          'arguments': {},
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     * Request arguments:
     *
     *    string      | value type & description
     *    ------------+----------------------------------------------------------
     *    "ids"       | array   torrent list, as described in 3.1.
     *
     *    Response arguments: none
     */
  async queueMove(ids:number|Array<number>, to:QUEUE) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-' + to,
          'arguments': {
            'ids': ids
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }

  /**
     *    This method tests how much free space is available in a
     *    client-specified folder.
     *
     *    Request arguments:
     *
     *    string      | value type & description
     *    ------------+----------------------------------------------------------
     *    "path"      | string  the directory to query
     *
     *    Response arguments:
     *
     *    string       | value type & description
     *    -------------+----------------------------------------------------------
     *    "path"       | string  same as the Request argument
     *    "size-bytes" | number  the size, in bytes, of the free space in that directory
     *    "total_size" | number  the total capacity, in bytes, of that directory
     */
  async freeSpace(path:string) {
    return new Promise((resolve, reject) => {
      if (this.client !== undefined) {
        this.client.post(this.connection.rpc_path, {
          'method': 'torrent-move',
          'arguments': {
            'path': path
          },
        }).then((response) => {
          resolve(response.data.arguments.torrents);
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Client is undefined');
      }
    });
  }
}