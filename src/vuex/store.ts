import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { State, Status } from '@/vuex/state';
import Connection from '@/models/connection';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
    state: function () {
        return {
            status: Status.NOT_CONNECTED,
            connections: <Array<Connection>>[],
            currentConnection: <Connection>{}
        }
    },
    mutations: {
        setConnectionStatus(state:State, status:Status) {
            state.status = status;
        },
        setCurrentConnection (state:State, connection:Connection) {
            state.currentConnection = connection;
        },
        addConnection(state:State, connection:Connection) {
            state.connections.push(connection);
        }
    },
    actions: {
        connect(context, payload) {
            context.commit('setConnectionStatus', Status.CONNECTING);
            const c = context.state.connections.find(conn => conn.name === payload.name);
            if (c != undefined) {
                const conn = new Connection(
                    c.name,
                    c.url,
                    c.port,
                    c.rpc_path,
                    c.auth_required,
                    c.username,
                    c.password
                );

                let axios_instance;
                if (conn.auth_required) {
                    axios_instance = axios.create({
                        baseURL: 'http://' + conn.url + ':' + conn.port,
                        method: 'POST',
                        headers: {},
                        auth: {
                            username: conn.username,
                            password: conn.password
                        },
                    });
                } else {
                    axios_instance = axios.create({
                        baseURL: conn.url,
                        method: 'POST',
                        headers: {}
                    });
                }

                axios_instance.post(conn.rpc_path, {
                    'method': 'torrent-get',
                    'arguments': {
                        'fields': [ 'id', 'name' ],
                        'ids': [1]
                    },
                }).then(() => {
                    console.log('this should not succeed');
                }).catch((error) => {
                    if (error.response.status == 409) {
                        console.log(error.response.headers['x-transmission-session-id']);
                        conn.csrf_token = error.response.headers['x-transmission-session-id'];
                    } else {
                        console.log(error);
                    }
                });

                context.commit('setCurrentConnection', conn);
            }
            context.commit('setConnectionStatus', Status.CONNECTED);
        },
        disconnect(context) {
            context.commit('setConnectionStatus', Status.NOT_CONNECTED);
        },
        deleteConnection(context, payload) {
            context.state.connections = context.state.connections.filter(c => c.name !== payload.name);
        },
        resetCurrentConnection(context) {
            context.state.currentConnection = new Connection('', '', -1, '', false, '', '');
            context.commit('setConnectionStatus', Status.NOT_CONNECTED);
        }
    },
    getters: {
        getCurrentConnection(state) {
            return state.currentConnection;
        },
        getAllConnections(state) {
            return state.connections;
        }
    },
    plugins: [createPersistedState()]
});


// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
}
