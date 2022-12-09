import Index from '@/pages/index.vue';
import Login from '@/pages/Login.vue';
import Register1 from '@/pages/Register-1.vue';
import Register2 from '@/pages/Register-2.vue';
import Success from '@/pages/Success.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Login },
  { path: '/Success', component: Success },  
  { path: '/Register1', component: Register1 },
  { path: '/Register2', component: Register2 },  
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
