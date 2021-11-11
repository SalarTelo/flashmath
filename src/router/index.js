import Vue from 'vue'
import VueRouter from 'vue-router'
import landingpage from "@/views/landingpage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: landingpage
  },
  {
    path: '/operator',
    name: 'Operator',
    component: () => import('../views/operatorpage.vue')
  },
  {
    path: '/quiz',
    name: 'Game',
    component: () => import('../views/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
