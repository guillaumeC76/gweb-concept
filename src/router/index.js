import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projet from '../views/Projet.vue'
import Offres from '../views/Offres.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projet',
    name: 'Projet',
    component: Projet
  },
  {
    path: '/offres',
    name: 'Offres',
    component: Offres
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
