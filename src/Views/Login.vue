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
    
    <!-- Test credentials hint -->
    <div style="margin-top: 20px; font-size: 12px; color: #666;">
      <p><strong>Test emails:</strong></p>
      <p>customer@test.com (any password)</p>
      <p>technician@test.com (any password)</p>
      <p>manager@test.com (any password)</p>
      <p>security@test.com (any password)</p>
    </div>
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
      // Simple validation
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter email and password";
        return;
      }
      
      try {
        // For testing - determine role from email
        let role = 'Customer'; // default
        
        if (this.email.includes('technician')) {
          role = 'Technician';
        } else if (this.email.includes('manager')) {
          role = 'Manager';
        } else if (this.email.includes('security')) {
          role = 'Security';
        }
        
        // Create user object
        const userData = {
          email: this.email,
          role: role,
          name: this.email.split('@')[0]
        };
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userRole', role);
        
        // Redirect based on role
        const roleRoutes = {
          'Customer': '/Home',
          'Technician': '/technician',
          'Manager': '/manager',
          'Security': '/security'
        };
        
        // Show success message
        alert(`Login successful! Welcome ${role}`);
        
        // Redirect
        this.$router.push(roleRoutes[role]);
        
      } catch (error) {
        this.errorMessage = "Login failed. Please try again.";
        console.error(error);
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