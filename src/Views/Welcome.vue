<template>
  <div class="container">
    <h2 style="color:aliceblue">WELCOME TO OUR SERVICES</h2>
   
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.overflow = "hidden"; // disable scroll
  },
}
</script>


<style>
.container {
  height: 100vh;
  width: 100%;
  text-align: center;
  background-image: url('../assets/car.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
}
</style>
