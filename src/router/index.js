import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CityView from "@/views/CityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/weather/:state',
      name: 'cityView',
      component: CityView
    },
    {
      path: '/settings',
      name: 'settingsView',
      component: () => import('@/views/SettingsView.vue'),
    }
  ],
})

export default router
