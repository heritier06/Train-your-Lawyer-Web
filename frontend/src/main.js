import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import 'aos/dist/aos.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';

import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
store.actions.initializeCount();
app.config.globalProperties.state = {
  sns: 'ok'
}
app.use(router);
app.mount('#app');