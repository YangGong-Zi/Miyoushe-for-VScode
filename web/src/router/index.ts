import { createRouter, createWebHistory } from 'vue-router'
import CosView from '../views/CosView.vue'
import HomeView from '../views/HomeView.vue';
import OfficialView from '../views/OfficialView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/CosView',
      name: 'CosView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CosView
    },
    {
      path: '/OfficialView',
      name: 'OfficialView',
      component: OfficialView
    },
  ]
})

export default router
