

<style scoped>
</style>
<template>
  <Header ></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './Views/Header.vue'
import Footer from './Views/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>