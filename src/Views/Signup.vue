<template>
  <div class="signup">
    <h2>Create Account</h2>

    <form @submit.prevent="registerUser">
      <input type="text" placeholder="Full Name" v-model="name" required />

      <input type="email" placeholder="Email" v-model="email" required />

      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />

      <button type="submit">Signup</button>
    </form>

    <p>
      Already have account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerUser() {
      alert("Account Created");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.signup {
     width: 300px;
     margin: auto;
     margin-top: 100px;
     text-align: center;
}
</style>
