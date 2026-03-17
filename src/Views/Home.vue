<template>
  <div>
    <h1>School Management Dashboard</h1>

    <div class="menu">
      <div class="card">
        <h3>Students</h3>
        <p>Manage all students</p>
      </div>

      <div class="card">
        <h3>Teachers</h3>
        <p>Manage teachers</p>
      </div>

      <div class="card">
        <h3>Classes</h3>
        <p>Manage school classes</p>
      </div>

      <div class="card">
        <h3>Activities</h3>
        <p>Manage school activities</p>
      </div>
    </div>
  </div>
</template>

<style>
.menu {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
}
</style>
