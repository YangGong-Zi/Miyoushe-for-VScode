import { createRouter, createWebHistory } from 'vue-router'
import CosView from '@/views/CosView.vue'
import StrategyView from '@/views/StrategyView.vue';
import OfficialView from '@/views/OfficialView.vue';
import StrategyDetailView from '@/views/StrategyDetailView.vue';
import OfficialDetailView from '@/views/OfficialDetailView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'OfficialView',
      component: OfficialView
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
      path: '/StrategyView',
      name: 'StrategyView',
      component: StrategyView
    },
    {
      path: '/StrategyDetailView',
      name: 'StrategyDetailView',
      component: StrategyDetailView
    },
    {
      path: '/OfficialDetailView',
      name: 'OfficialDetailView',
      component: OfficialDetailView
    },
  ]
})

export default router
