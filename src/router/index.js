import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    meta: {layout: 'main-layout'},
    component: () => import('@/views/MainView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {layout: 'main-layout'},
    component: () => import('@/views/SettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
