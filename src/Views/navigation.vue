<template>
  <nav>
    <ul>
      <li v-if="role === 'Manager'">
        <router-link to="/admin-panel">Admin Panel</router-link>
      </li>
      <li v-if="role === 'Technician'">
        <router-link to="/repairs">Repair Jobs</router-link>
      </li>
      <li v-if="role === 'Customer'">
        <router-link to="/my-vehicles">My Vehicles</router-link>
      </li>
      <li v-if="role === 'Receptionist'">
        <router-link to="/appointments">Appointments</router-link>
      </li>
      <li v-if="role === 'Security'">
        <router-link to="/gate-log">Gate Log</router-link>
      </li>
      <li v-if="role">
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    role() {
      // If using Vuex store
      if (this.$store) {
        return this.$store.state.auth?.role;
      }
      // Fallback to localStorage
      return localStorage.getItem('userRole');
    }
  },
  methods: {
    logout() {
      // Clear auth data
      if (this.$store) {
        this.$store.commit('logout');
      }
      localStorage.removeItem('user');
      localStorage.removeItem('userRole');
      
      // Redirect to login
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
li a {
  color: white;
  text-decoration: none;
}
li a:hover {
  text-decoration: underline;
}
button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
}
button:hover {
  background: white;
  color: #333;
}
</style>