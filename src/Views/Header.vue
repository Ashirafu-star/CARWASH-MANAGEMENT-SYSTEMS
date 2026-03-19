<template>
  <header class="header">
    <h1 >CAR SERVICES MANAGEMENT SYSTEM</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  background: #1b2f43;
  color: white;
  align-items: center;   
  justify-content: center;
 
}

nav a {
  margin: 0 40px;
  color: white;
  text-decoration: none;

}
</style>