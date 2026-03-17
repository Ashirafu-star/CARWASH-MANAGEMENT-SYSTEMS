<template>
  <div class="login">
    <h2>Login</h2>

    <form @submit.prevent="loginUser">
      <input type="email" placeholder="Email" v-model="email" required />

      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />

      <button type="submit">Login</button>
    </form>

    <p>
      Don't have account?
      <router-link to="/signup">Signup</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      alert("Login Successful");
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.login {
  width: 300px;
  margin: auto;
  margin-top: 100px;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
</style>
