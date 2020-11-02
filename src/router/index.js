import Vue from 'vue'
import VueRouter from 'vue-router'
import Awal from '../components/Awal.vue'
import Pengenalan from '../components/Pengenalan.vue'
import Teori from '../components/Teori.vue'
import Kuis from '../components/Kuis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Awal',
    component: Awal
  },
  {
    path: '/pengenalan',
    name: 'Pengenalan',
    component: Pengenalan
  },
  {
    path: '/teori',
    name: 'Teori',
    component: Teori
  },
  {
    path: '/kuis',
    name: 'Kuis',
    component: Kuis
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  hash: false
})

export default router
