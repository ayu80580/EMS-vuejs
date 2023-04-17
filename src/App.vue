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

//  import allSalary from './components/all_employee_salary/allSalary.vue';
  

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

