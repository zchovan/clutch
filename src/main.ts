import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import '../dist_electron/index.css'
import Torrents from './components/Torrents/Torrents.vue'
import Connections from './components/Connections/Connections.vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import Store from 'electron-store'
import State from './models/state'

const store = new Store();
const routes = [
    { path: '/', component: Torrents },
    { path: '/connections', component: Connections },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


const app = createApp(App);
const vuexStore = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state:State) {
      state.count++
    }
  }
});
app.use(router);
app.use(vuexStore);

app.config.globalProperties.$storage = store;
app.mount('#app');
