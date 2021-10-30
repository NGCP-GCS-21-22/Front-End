import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import MAC from '../views/MAC.vue'
import ERU from '../views/ERU.vue'
import MEA from '../views/MEA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/mac',
    name: 'MAC',
    component: MAC
  },
  {
    path: '/eru',
    name: 'ERU',
    component: ERU
  },
  {
    path: '/mea',
    name: 'MEA',
    component: MEA
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
