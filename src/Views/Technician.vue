<template>
  <div class="app-container">

    <!-- Header Navbar -->
    <header class="navbar">
      <h2 class="logo">My App</h2>

      <nav class="nav-links">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Technician', path: '/Technician' }
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50;
  color: white;
  padding: 15px 30px;
}

/* Logo */
.logo {
  margin: 0;
}

/* Links */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Content */
.main-content {
  padding: 20px;
}
</style>
