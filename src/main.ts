import { createApp } from 'vue'
import App from './App.vue'
import '../dist_electron/index.css'
import Torrents from './components/Torrents/Torrents.vue'
import Connections from './components/Connections/Connections.vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import * as ejs from 'electron-json-storage'


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
app.config.globalProperties.$storage = ejs;
app.mount('#app');
