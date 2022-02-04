import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { State, Status } from '@/vuex/state';
import Connection from '@/models/connection';
import createPersistedState from 'vuex-persistedstate';
import {Torrent} from "@/models";
import Client from '@/util/client';

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
    state: function () {
        return {
            status: Status.NOT_CONNECTED,
            connections: <Array<Connection>>[],
            currentConnection: <Connection>{},
            selectedTorrent: <Torrent>{},
            client: <Client>{},
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
        },
        deleteConnection(state:State, connection:Connection) {
            const index = state.connections.indexOf(connection);
            state.connections.splice(index, 1);
        },
        selectTorrent(state:State, torrent:Torrent) {
            state.selectedTorrent = torrent;
        },
        setClient(state:State, client:Client) {
            state.client = client;
        },
        resetClient(state:State) {
            delete state.client;
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

                const transmissionClient = new Client(conn);

                context.commit('setCurrentConnection', conn);
                context.commit('setClient', transmissionClient);
            }
            context.commit('setConnectionStatus', Status.CONNECTED);
        },
        disconnect(context) {
            context.commit('setConnectionStatus', Status.NOT_CONNECTED);
        },
        deleteConnection(context, payload) {
            context.commit('deleteConnection', payload);
        },
        resetCurrentConnection(context) {
            context.state.currentConnection = new Connection('', '', -1, '', false, '', '');
            context.commit('setConnectionStatus', Status.NOT_CONNECTED);
        },
        selectTorrent(context, torrent) {
            context.commit('selectTorrent', torrent);
        },
        setClient(context, client) {
            context.commit('setClient', client)
        },
        resetClient(context) {
            context.commit('resetClient');
        }
    },
    getters: {
        getCurrentConnection(state) {
            return state.currentConnection;
        },
        getAllConnections(state) {
            return state.connections;
        },
        getSelectedTorrent(state) {
            return state.selectedTorrent;
        },
        getClient(state) : Client|undefined {
            if (state.client !== undefined) {
                return state.client;
            }
        }

    },
    plugins: [createPersistedState()]
});


// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
}
