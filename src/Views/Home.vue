<template>
  <div class="app-container">
    <!-- Drawer Toggle Button -->
    <button class="menu-toggle" @click="drawerOpen = !drawerOpen">
      ☰
    </button>

    <!-- Navigation Drawer -->
    <div class="navigation-drawer" :class="{ 'drawer-open': drawerOpen }">
      <div class="drawer-header">
        <h3>Services</h3>
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
        { name: 'SMALL CAR REPAIR SERVICES', path: '/repair' },
        { name: 'LARGER CAR REPAIR SERVICES', path: '/truck' },
        { name: 'CAR WASH SERVICES', path: '/carwash' },
        { name: 'CAR PAINTING SERVICES', path: '/painting'},
        { name: 'CAR BUYING AND SELLING SERVICES', path: '/trade'},
        { name: 'CAR PARKING AND STORAGE SERVICES', path: '/parking'},
        { name: 'CARGO TRANSPORTING SERVICES', path: '/cargo'},
        { name: 'SPECIAL HIRE BUSES', path: '/hire'}
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

/* Menu toggle button - FIXED at top left corner */
.menu-toggle {
  position: fixed;
  top: 20px;
  left: 30px;
  z-index: 1001;
  width:40px;
  font-size: 24px;
  padding: 8px 15px;
  cursor: pointer;
  background-color: hsl(234, 47%, 49%);
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin: 0;
  transform: none;
}

.menu-toggle:hover {
  background-color: #3aa876;
  transform: none;
}

/* Navigation drawer - opens BELOW the button */
.navigation-drawer {
  position: fixed;
  top: 70px;  /* Below the button */
  left: 20px;  /* Aligned with button */
  width: 280px;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  border-radius: 8px;
  z-index: 1000;
  overflow: hidden;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  
  /* Hidden state */
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

/* Drawer open state */
.navigation-drawer.drawer-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.drawer-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #eee;
}

.drawer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer-menu li {
  border-bottom: 1px solid #f0f0f0;
}

.drawer-menu a {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: background-color 0.2s;
}

.drawer-menu a:hover {
  background-color: #f5f5f5;
  color: #42b983;
}

/* Overlay */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
}

/* Main content */
.main-content {
  padding: 20px;
  margin-top: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .navigation-drawer {
    width: 100%;
    left: 0;
    top: 60px;
    max-height: calc(100vh - 60px);
    border-radius: 0;
  }
  
  .menu-toggle {
    top: 10px;
    left: 10px;
  }
}
</style>
