import Index from '@/pages/index.vue';
import Login from '@/pages/Login.vue';
import Register1 from '@/pages/Register-1.vue';
import Register2 from '@/pages/Register-2.vue';
import Success from '@/pages/Success.vue';
import Home from '@/pages/Home.vue';
import Lesson from '@/pages/Lesson.vue';
import Entrainement from '@/pages/Entrainement.vue';
import TD from '@/pages/TD.vue';
import Pack from '@/pages/Pack.vue';
import Article from '@/pages/Article.vue';
import Licence2 from '@/pages/Licence2.vue';
import Licence3 from '@/pages/Licence3.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/Success', component: Success },  
  { path: '/Register1', component: Register1 },
  { path: '/Register2', component: Register2 },  
  { path: '/Login', component: Login },
  { path: '/Lesson', component: Lesson },
  { path: '/Entrainement', component: Entrainement },
  { path: '/TD', component: TD },
  { path: '/Pack', component: Pack },
  { path: '/Article', component: Article },
  { path: '/Licence2', component: Licence2 },
  { path: '/Licence3', component: Licence3 },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
