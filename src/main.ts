// renderer

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Torrents from './components/Torrents/Torrents.vue';
import Connections from './components/Connections/Connections.vue';
import App from './App.vue';
import { store, key } from './store/store';
import Toast, { PluginOptions } from 'vue-toastification';
import config from '../formkit.config';
import { plugin, defaultConfig } from '@formkit/vue';

import '../dist_electron/index.css';
import 'vue-toastification/dist/index.css';

const routes = [
  { path: '/', component: Torrents },
  { path: '/connections', component: Connections },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
const toastOptions: PluginOptions = {
  // You can set your default options here
};

const app = createApp(App);

app.use(router);
app.use(store, key);
app.use(Toast, toastOptions);
app.use(plugin, defaultConfig(config));
app.mount('#app');
