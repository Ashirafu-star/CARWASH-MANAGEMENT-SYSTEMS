<template>
  <Header v-if="$route.name !== 'Login'"></Header>
  
  <!-- Add the role-based navigation -->
  <Navigation v-if="isAuthenticated && $route.name !== 'Login'" />
  
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './Views/Header.vue'
import Footer from './Views/Footer.vue'
import Navigation from './Views/navigation.vue' // You need to create this file

export default {
  components: {
    Header,
    Footer,
    Navigation
  },
  computed: {
    isAuthenticated() {
      // Check if user is logged in (from store or localStorage)
      if (this.$store) {
        return this.$store.state.auth?.isAuthenticated;
      }
      return !!localStorage.getItem('user');
    }
  }
}
</script>

<style scoped>
/* Your existing styles */
</style>