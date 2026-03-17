import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '../Views/Welcome.vue'
import Login from '../Views/Login.vue'
import Signup from '../Views/Signup.vue'
import Home from '../Views/Home.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router