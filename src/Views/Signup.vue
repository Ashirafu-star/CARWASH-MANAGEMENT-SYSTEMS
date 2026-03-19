<template>
      
  <div class="signup">
      <form @submit.prevent="registerUser">
             <h1>CREATE YOUR ACCOUNT</h1>
        <h2 v-if="role === 'Customer'">WELCOME CUSTOMER</h2>
        <h2 v-if="role === 'Technician'">WELCOME TECHINICIAN</h2>
        <h2 v-if="role ===  'Manager'">WELCOME OUR CUSTOMER</h2>
        <h2 v-if="role === 'Receptionist'">WELCOME SECRETARY</h2>
        <h2 v-if="role === 'Security'">WELCOME OUR SECURITY</h2>
     <div >
      <select v-model="role">
          <option disabled value="">Select Role</option>
          <option value="Customer">Customer</option> 
          <option value="Technician">Technician</option>
          <option value="Manager">Manager</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Security" >Security</option>
        </select>
      </div> 
      <div>
        <!--Name Details-->
        <input type="text" placeholder="First Name" v-model="Fisrt_name" required />
        <input type="text" placeholder="Last Name" v-model="Last_name" required />
      
      <!--Gender-->
      <div >
        <select v-model="Gender">
        <option disabled value="">Your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>
        <!--Marital Status-->
        <select v-model="Maritalstatus">
        <option disabled value="">Your Marital Status</option>
        <option value="Married">Married</option>
        <option value="Single">Single</option>
        <option value="Divorced">Divorced</option>
        </select>
      </div>

      
      

      <input type="date" require>
      <input type="tel" placeholder="Enter your Phone number" v-model="phone" required/>
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder=" Password" v-model="password" required 
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$"/>
      <input type="password" placeholder="Comfirm password" v-model="Confirmpassword"/>

      <p v-if="password && Confirmpassword !== Confirmpassword" style="color:red">Password don't match ❌</p>
      <p v-if="password && Confirmpassword !== Confirmpassword" style="color:green">Password Match ✅</p>
      </div>
      
     <!--Manager details-->
     <div v-if="role === 'Manager'">
     <input type="text" placeholder="StaffID" v-model="Manager" required  />
     <input type="text" placeholder="Education_Level" v-model="Mlevel" required  />
     </div>
    
     <!--Customers details-->
     <div v-if ="role === 'Customer'">
     <input type="text" placeholder="Address" v-model="address" required />
     <input type="text" placeholder="Vehicle Type/Brand"  v-model="vehicle" required/>
     </div>

     <!--Technician details-->
     <div v-if=" role === 'Technician'">
     <select v-model="Techn">
     <option disabled value ="">Which Vehicle You Specialize</option>
     <option value="Heavy-Vehicles" >Heavy-Vehicles</option>
     <option value="MinTrucks" >MinTrucks</option>
     <option value="YUTONG" >YUTONG</option>
     <option value="Common" >MOTORCYCLES ,GUTER,BAJAJ</option>
     </select>
     <input type="text" placeholder="StaffID" v-model="Techno" requiired />
     </div>

     <!--Receptionist-->
     <div v-if=" role === 'Receptionist'" >
     <input type="text" placeholder="EducationLevel" required v-model="Rlevel" />
      </div>

     <!--Security Staff-->
     <div v-if =" role === 'Security'">
     <input type="text" placeholder="Security Institution" v-model="Institution" required  />
     </div>
      <button type="submit">Signup</button>
      <p>
      Already have account?
      <router-link to="/login">Login</router-link>
    </p>
    </form>

    
  </div>

</template>

<script>
export default {
  data() {
    return {
      role: "",
      First_name: "",
      Last_name: "",
      Gender: "",
      Maritalstatus: "",
      phone: "",
      Email: "",
      Password: "",
      manager: "",
      Mlevel: "",
      address: "",
      vehicle: "",
      Techn: "",
      Techno: "",
      Institution: ""
      
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
   display:flex;
   height:80vh;
   width: 100%;
   text-align: center;
   align-items:center;
   justify-content:center;
   overflow-y:auto;
       
}


</style>
