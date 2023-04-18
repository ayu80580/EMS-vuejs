<template>
    

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <router-link class="nav-link" to="/Dashboard">Dashboard</router-link>




      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>


      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/EmployeeList" v-if="this.$store.state.AuthRole == 'Admin' || this.$store.state.AuthRole === 'Manager'">Employee List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AddEmployee" v-if="this.$store.state.AuthRole == 'Admin'">
              Add Employee
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/leaveRequest" v-if="this.$store.state.AuthRole == 'Admin'">Leave Request</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/all" v-if="this.$store.state.AuthRole == 'Admin'">Employee Salary</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" :to="url">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 

</template>

<style scoped>
.router-link-active{
  color: #737437;
  border: 2px solid black;
  border-radius: 50px;
  margin: 10px;
}
.nav-link{
  
 
  margin: 10px;
}
</style>

<script>
import axios from 'axios';
export default{
  computed:{
    url(){
      return '/user/'+this.$store.state.EmployeeData.id+'/profile';
    },
    
  },
  methods: {
  
  logout() {
    axios.post('http://127.0.0.1:8000/api/logout')
      .then(response => {
        // handle success
        console.log(response.data);
        // redirect to login page
        window.location.href = '/login';
      })
      .catch(error => {
        // handle error
        console.log(error.response.data);
      });
  },
}
}
</script>
