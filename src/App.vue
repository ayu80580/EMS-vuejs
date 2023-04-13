<template>
<!-- <EmployeeDetails></EmployeeDetails> -->
<!-- <Dashboard></Dashboard> -->
<!-- <user-login></user-login> -->



<router-view></router-view>


</template>

<script>
// import UserLogin from './components/auth/UserLogin.vue';

// import Dashboard from './components/Dashboard.vue'
// import EmployeeDetails from './components/EmployeeDetails.vue';

// import EmployeeNav from './components/EmployeeList/EmployeeNav.vue';

 
  

export default {
  name: 'App',
  data() {
      return{
        Employees:
          {
            id: 123,
            name: 'CHaran',
            email: 'charan@example.com',
            phone: '0123 456 789'
          }
      };
    },
  components: {
    
    //  EmployeeDetails
    // Dashboard
    // EmployeeNav
    // UserLogin
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
