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

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>

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
      errorMessage: ""
    };
  },

  methods: {
    async loginUser() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter email and password";
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        const data = await response.json();

        if (data.success) {
          const user = data.user;

          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("userRole", user.role);

          const roleRoutes = {
            Customer: "/Home",
            Technician: "/technician",
            Manager: "/manager",
            Security: "/security"
          };

          alert(`Welcome ${user.role}`);
          this.$router.push(roleRoutes[user.role]);

        } else {
          // ✅ THIS SHOWS ERROR FROM BACKEND
          this.errorMessage = data.message || "Invalid login";
        }

      } catch (error) {
        console.error(error);
        this.errorMessage = "Server error. Try again.";
      }
    }
  }
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
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #3aa876;
}
</style>