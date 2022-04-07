import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Torrents from './components/Torrents/Torrents.vue'
import Connections from './components/Connections/Connections.vue'
import App from './App.vue'
import { store, key } from './store/store'

import '../dist_electron/index.css'

const routes = [
    { path: '/', component: Torrents },
    { path: '/connections', component: Connections },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App);

app.use(router);
app.use(store, key);
app.mount('#app');
