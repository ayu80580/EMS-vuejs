<template>
  <h1>Authenticaion Done</h1>

  <div>
    <h1>Employee Data:</h1>
   
    {{ EmployeeData.id}}
    <h2>{{ EmployeeData.username}}</h2>
    <h2>{{ EmployeeData.first_name}}</h2>
    <h2>{{ EmployeeData.last_name}}</h2>
  </div>
</template>


<script>
import setAuthHeader from './setAuthHeader'
import axios from "axios";
export default {

  data() {
    return {
      EmployeeData: [],
    };
  },
  mounted() {
    this.getUserPost();
   
  },
  methods: {
    getUserPost() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: "ayu8058020@gmail.com",
          password: "123456789",
        })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
        //   console.log(localStorage.getItem("access_token"));
          setAuthHeader(response.data.token);
          this.getEmployeeData();
        })
        .catch(() => {
          return "Error";
        });
    },
    getEmployeeData() {
     
      axios
        .get("http://127.0.0.1:8000/api/get-user")
        .then((response) => {
        //   console.log(response.data)
          this.EmployeeData = response.data;
          console.log(this.EmployeeData);
        //   console.log(response.data);
        })
        .catch(() => {
          alert("An error occurred. Please try again later.");
        });
    },
  },
};
</script>

