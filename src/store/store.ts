import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { State, Status } from './state';
import Connection from '../models/connection';
import createPersistedState from 'vuex-persistedstate';
import Client from "@/util/client";

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
        },
        deleteConnection(state:State, connection:Connection) {
            const index = state.connections.indexOf(connection);
            state.connections.splice(index, 1);
        },
    },
    actions: {
        connect({commit, state}, payload) {
            return new Promise((resolve) => {
                commit('setConnectionStatus', Status.CONNECTING);
                const c = state.connections.find(conn => conn.name === payload.name);
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

                    commit('setCurrentConnection', conn);
                }
                commit('setConnectionStatus', Status.CONNECTED);
                resolve('connected');
            });
        },
        disconnect({commit}) {
            // return new Promise((resolve) => {
                commit('setConnectionStatus', Status.NOT_CONNECTED);
                commit('setCurrentConnection', null);
                // resolve('disconnected');
            // });
        },
        deleteConnection(context, payload) {
            context.commit('deleteConnection', payload);
        },
        resetCurrentConnection(context) {
            context.state.currentConnection = new Connection('', '', -1, '', false, '', '');
            context.commit('setConnectionStatus', Status.NOT_CONNECTED);
        }
    },
    getters: {
        getCurrentConnection(state: State) {
            return state.currentConnection;
        },
        getAllConnections(state: State) {
            return state.connections;
        },
        getStatus(state: State) : Status {
            return state.status;
        }
    },
    plugins: [createPersistedState()]
});


// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
}
