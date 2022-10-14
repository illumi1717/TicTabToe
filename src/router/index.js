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
  },
  {
    path: '/box',
    name: 'box',
    meta: {layout: 'empty-layout'},
    component: () => import('@/views/BoxView.vue')
  },
  {
    path: '/game-window-menu',
    name: 'game-window-menu',
    meta: {layout: 'empty-layout'},
    component: () => import('@/views/GameMenuView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
