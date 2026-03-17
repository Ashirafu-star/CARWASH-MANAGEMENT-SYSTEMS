<template>
  <footer class="footer">
    <p>© 2026 Car Management System | All Rights</p>
    <div class="footer-icon">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-instagram"></i>
      <i class="fa-brands fa-square-whatsapp"></i>
      <i class="fa-brands fa-telegram"></i>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer-icon
{
align-items: flex-start;
font-size: 30px;
cursor: pointer;
transition: color 0.3s;  
}
</style>
