import { createApp } from 'vue'
import App from '@/App.vue'
import Torrents from '@/components/Torrents/Torrents.vue';
import Connections from '@/components/Connections/Connections.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import { store, key } from '@/vuex/store'

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
