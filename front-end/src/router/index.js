import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '@/views/Start/Start.vue'
import Form from '@/views/Start/Form.vue'
import Missions from '@/views/Start/Missions.vue'
import Navbar from '@/components/Navbar.vue'
import Main from '@/views/GCS/Main.vue'
import MAC from '@/views/GCS/MAC.vue'
import ERU from '@/views/GCS/ERU.vue'
import MEA from '@/views/GCS/MEA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions
  },
  {
    path: '/gcs',
    name: 'GCS',
    component: Navbar,
    children: [
      {
        path: 'main',
        name: 'Main',
        component: Main
      },
      {
        path: 'mac',
        name: 'MAC',
        component: MAC
      },
      {
        path: 'eru',
        name: 'ERU',
        component: ERU
      },
      {
        path: 'mea',
        name: 'MEA',
        component: MEA
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
