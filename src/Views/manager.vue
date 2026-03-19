<template>
  <div class="app-container">
    <!-- Drawer Toggle Button -->
    <button class="menu-toggle" @click="drawerOpen = !drawerOpen">
      ☰
    </button>

    <!-- Navigation Drawer -->
    <div class="navigation-drawer" :class="{ 'drawer-open': drawerOpen }">
      <div class="drawer-header">
        <h2>My App</h2>
        <button class="close-btn" @click="drawerOpen = false">×</button>
      </div>
      
      <ul class="drawer-menu">
        <li v-for="item in menuItems" :key="item.path">
          <router-link :to="item.path" @click="drawerOpen = false">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Overlay (closes drawer when clicked) -->
    <div v-if="drawerOpen" class="drawer-overlay" @click="drawerOpen = false"></div>

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
      drawerOpen: false,
      menuItems: [
        { name: 'CUSTOMER ', path: '/customer' },
        { name: 'BUSINESS REPORT', path: '/report' },
        { name: 'STAFF', path: '/staff' },
        { name: 'STOCK', path: '/stock'},
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

.menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  font-size: 24px;
  padding: 10px 15px;
  cursor: pointer;
}

.navigation-drawer {
  position: fixed;
  top: 0;
  left: -280px; /* Hidden by default */
  width: 280px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: left 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

.navigation-drawer.drawer-open {
  left: 0; /* Show when open */
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
}

.drawer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer-menu li {
  border-bottom: 1px solid #eee;
}

.drawer-menu a {
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #333;
}

.drawer-menu a:hover {
  background-color: #f5f5f5;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
}

.main-content {
  padding: 20px;
  margin-left: 0;
  transition: margin-left 0.3s ease;
}

/* Optional: Push content when drawer opens on large screens */
@media (min-width: 768px) {
  .main-content.drawer-push {
    margin-left: 280px;
  }
}
</style>