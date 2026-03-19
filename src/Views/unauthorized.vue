<template>
  <div class="unauthorized">
    <h1>403 - Unauthorized Access</h1>
    <p>You don't have permission to view this page.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style scoped>
.unauthorized {
  text-align: center;
  padding: 50px;
}
.unauthorized h1 {
  color: #e74c3c;
}
</style>