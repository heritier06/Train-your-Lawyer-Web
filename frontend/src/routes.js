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
import Penal from '@/pages/Penal.vue';
import Cours from '@/pages/Cours.vue';
import Seance1 from '@/pages/Seance1.vue';
import Penalent from '@/pages/Penalent.vue';
import Dissertrep from '@/pages/Dissertrep.vue';
import Penalent2 from '@/pages/Penalent2.vue';
import Arretrep from '@/pages/Arretrep.vue';
import Penalent3 from '@/pages/Penalent3.vue';
import Casrep from '@/pages/Casrep.vue';
import VidPenal from '@/pages/VidPenal.vue';
import QcmPenal from '@/pages/QcmPenal.vue';
import NotFound from '@/pages/not-found.vue';
import New from '@/pages/New.vue';
import Profil from '@/pages/Profil.vue';

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
  { path: '/Penal', component: Penal },
  { path: '/Licence2', component: Licence2 },
  { path: '/Licence3', component: Licence3 },
  { path: '/Cours', component: Cours },
  { path: '/Seance1', component: Seance1 },
  { path: '/Penalent', component: Penalent },
  { path: '/Dissertrep', component: Dissertrep },
  { path: '/Penalent2', component: Penalent2 },
  { path: '/Arretrep', component: Arretrep },
  { path: '/Penalent3', component: Penalent3 },
  { path: '/Casrep', component: Casrep },
  { path: '/VidPenal', component: VidPenal },
  { path: '/QcmPenal', component: QcmPenal },
  { path: '/:path(.*)', component: NotFound },
  { path: '/New', component: New },
  { path: '/Profil', component: Profil },
];

export default routes;
