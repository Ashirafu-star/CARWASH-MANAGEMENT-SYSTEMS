// authStore.js (using Pinia)
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    role: null, // Will store 'Customer', 'Technician', 'Manager', etc.
    isAuthenticated: false
  }),
  
  actions: {
    setUser(userData) {
      this.user = userData;
      this.role = userData.role; // Get role from login response
      this.isAuthenticated = true;
      
      // Optional: Save to localStorage for persistence
      localStorage.setItem('userRole', userData.role);
    },
    
    logout() {
      this.user = null;
      this.role = null;
      this.isAuthenticated = false;
      localStorage.removeItem('userRole');
    }
  }
});