<template>
  <div class="container">
    <div class="signup">
      <form class="form-card" @submit.prevent="registerUser">
        <h1>CREATE ACCOUNT</h1>

        <h2 v-if="role === 'Customer'">WELCOME CUSTOMER</h2>
        <h2 v-if="role === 'Technician'">WELCOME TECHNICIAN</h2>
        <h2 v-if="role === 'Manager'">WELCOME MANAGER</h2>
        <h2 v-if="role === 'Security'">WELCOME SECURITY</h2>

        <!-- Role -->
        <div class="form-group full">
          <select v-model="role" style="padding-bottom:10px;padding-left:2.5px;width:170px" required>
            <option disabled value="">Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Technician">Technician</option>
            <option value="Manager">Manager</option>
            <option value="Security">Security</option>
          </select>
        </div>

        <!-- Grid layout -->
        <div class="form-grid">
          <input type="text" placeholder="First Name" v-model="first_name" required />
          <input type="text" placeholder="Last Name" v-model="last_name" required />

          <select v-model="gender" style="padding-bottom:10px;width:170px" required>
            <option disabled value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select v-model="marital_status" style="padding-bottom:10px;width:170px" required>
            <option disabled value="">Marital Status</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
          </select>

          <input type="date" v-model="dob" required />
          <input type="tel" placeholder="Phone Number" v-model="phone" required />
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="text" placeholder="Job Title" v-model="job" />
          <input type="password" placeholder="Password" v-model="password" required />
          <input type="password" placeholder="Confirm Password" v-model="confirmPassword" />
        </div>

        <p v-if="passwordMismatch" style="color: red; text-align: center;">Passwords do not match!</p>

        <!-- Dynamic Sections -->
        <div class="form-grid" v-if="role === 'Manager'">
          <input type="text" placeholder="Staff ID" v-model="staff_id" required />
          <input type="text" placeholder="Education Level" v-model="education_level" required />
        </div>

        <div class="form-grid" v-if="role === 'Customer'">
          <input type="text" placeholder="Address" v-model="address" required />
          <input type="text" placeholder="Vehicle Type" v-model="vehicle_type" required />
        </div>

        <div class="form-grid" v-if="role === 'Technician'">
          <select v-model="specialization" required>
            <option disabled value="">Specialization</option>
            <option value="Heavy-Vehicles">Heavy Vehicles</option>
            <option value="MinTrucks">Mini Trucks</option>
            <option value="YUTONG">YUTONG</option>
            <option value="Common">Motorcycles / Bajaj</option>
          </select>
          <input type="text" placeholder="Staff ID" v-model="staff_id" required />
        </div>

        <div class="form-grid" v-if="role === 'Security'">
          <input type="text" placeholder="Institution" v-model="institution" required />
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Creating Account...' : 'Create Account' }}
        </button>

        <p>
          Already have account?
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "",
      first_name: "",
      last_name: "",
      gender: "",
      marital_status: "",
      dob: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      job: "",
      
      // Role specific
      address: "",
      vehicle_type: "",
      staff_id: "",
      education_level: "",
      specialization: "",
      institution: "",
      
      loading: false
    };
  },
  
  computed: {
    passwordMismatch() {
      return this.password && this.confirmPassword && this.password !== this.confirmPassword;
    }
  },
  
  methods: {
    async registerUser() {
      // Validation
      if (this.passwordMismatch) {
        alert("Passwords do not match!");
        return;
      }
      
      if (!this.role) {
        alert("Please select a role");
        return;
      }
      
      this.loading = true;
      
      try {
        // Build the object matching backend keys
        const userData = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          role: this.role,
          phone: this.phone,
          gender: this.gender,
          marital_status: this.marital_status,
          dob: this.dob,
          job: this.job,
          
          // Role specific fields
          address: this.address,
          vehicle_type: this.vehicle_type,
          staff_id: this.staff_id,
          education_level: this.education_level,
          specialization: this.specialization,
          institution: this.institution
        };
        
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert(data.message || "Registration successful!");
          this.$router.push("/login");
        } else {
          alert(data.message || "Registration failed");
        }
        
      } catch (error) {
        console.error(error);
        alert("Signup failed. Please check if backend server is running.");
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.signup {
  margin-top: 300px;
  max-height: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}

.container {
  padding: 10px;
  background: linear-gradient(140deg, #f9fafe, rgb(250, 250, 251));
  min-height: 100vh;
}

/* Card */
.form-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  color: rgb(28, 27, 27);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Title */
.form-card h1 {
  text-align: center;
  margin-bottom: 15px;
}

.form-card h2 {
  text-align: center;
  margin-bottom: 10px;
  opacity: 0.8;
}

/* Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 0px;
}

/* Full width */
.full {
  width: 100%;
  margin-bottom: 0px;
}

/* Inputs */
input,
select {
  border-radius: 10px;
  outline: none;
  font-size: 12px;
  background: rgb(250, 250, 250);
  color: rgb(12, 12, 12);
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  border: 1px solid #ddd;
}

/* Placeholder */
input::placeholder {
  color: #0f0e0e;
}

/* Button */
button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #00c6ff;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

button:hover {
  transform: scale(1.05);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Link */
p {
  text-align: center;
  margin-top: 10px;
}

a {
  color: #00c6ff;
  text-decoration: none;
}
</style>