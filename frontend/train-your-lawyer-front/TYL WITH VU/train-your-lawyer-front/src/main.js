import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Register1 from '@/components/Register1.vue'
import Login from '@/components/Login.vue'
import './assets/main.css'

createApp(App).mount('#app')

const router = {
  '/': Login,
}

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/Register1',
            name: 'Register1',
            component: Register1,
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        }
    ]
})