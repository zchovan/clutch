import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State, Status } from "@/models/state";
import Connection from "@/models/connection";
import ElectronStore from 'electron-store'

export const store = new ElectronStore();
// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const vuexStore = createStore({
    state () {
        return {
            status: Status.NOT_CONNECTED,
            currentConnection: <Connection>{},
        }
    },
    mutations: {
        setConnectionStatus(state:State, status:Status) {
            state.status = status;
        },
        setCurrentConnection (state:State, connection:Connection) {
            state.currentConnection = connection;
        }
    },
    actions: {
        connect(context) {
            context.commit('setConnectionStatus', Status.CONNECTING);
            store.get('connections');
        }
    },
    getters: {
        getCurrentConnection(state) {
            return state.currentConnection;
        }
    }
});