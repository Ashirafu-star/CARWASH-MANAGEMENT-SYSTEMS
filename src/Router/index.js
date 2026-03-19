import { createRouter, createWebHistory } from 'vue-router'

// Your existing imports - paths are correct now
import Welcome from '../Views/Welcome.vue'
import Login from '../Views/Login.vue'
import Signup from '../Views/Signup.vue'
import Home from '../Views/Home.vue'

// Import all dashboard components
import Technician from '../Views/Technician.vue'
import manager from '../Views/manager.vue'
import Security from '../Views/security.vue'
import Unauthorized from '../Views/unauthorized.vue'

const routes = [
  // Public routes
  { path: '/', component: Welcome, meta: { requiresAuth: false } },
  { path: '/login', component: Login, meta: { requiresAuth: false } },
  { path: '/signup', component: Signup, meta: { requiresAuth: false } },
  
  // Protected routes
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  
  // Role-based dashboard routes
  { 
    path: '/customer', 
    component: Home, // You might want to create a Customer.vue later
    meta: { requiresAuth: true, allowedRoles: ['Customer'] } 
  },
  { 
    path: '/technician', 
    component: Technician, 
    meta: { requiresAuth: true, allowedRoles: ['Technician'] } 
  },
  { 
    path: '/manager', 
    component: manager, 
    meta: { requiresAuth: true, allowedRoles: ['Manager'] } 
  },
  { 
    path: '/security', 
    component: Security, 
    meta: { requiresAuth: true, allowedRoles: ['Security'] } 
  },
  
  // Unauthorized page
  { 
    path: '/unauthorized', 
    component: Unauthorized, 
    meta: { requiresAuth: false } 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard - using localStorage
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  const userRole = localStorage.getItem('userRole')
  const isAuthenticated = !!user
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } 
  else if (to.meta.allowedRoles) {
    if (!to.meta.allowedRoles.includes(userRole)) {
      next('/unauthorized')
    } else {
      next()
    }
  }
  else {
    next()
  }
})

export default router