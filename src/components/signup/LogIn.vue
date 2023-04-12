<template>
    <h1>Login</h1>
    <form @submit.prevent>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" v-model="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password" required>
        
        <button @click="getUserPost">Login</button>
    </form>
</template>


<script>
import setAuthHeader from '../AuthAPI/setAuthHeader'
import axios from "axios";
import router from '../../router';
export default {

  data() {
    return {
      email : "",
      password: "",
    };
  },

  methods: {
  
    getUserPost() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
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
          this.$store.state.EmployeeData = response.data;
          // console.log(this.EmployeeData);
        //   console.log(response.data);
          router.push('/Dashboard');
        })
        .catch(() => {
          alert("An error occurred. Please try again later.");
        });
    },
  },
};
</script>




<style scoped>
    body {
        margin: 0;
        padding: 0;
        background-color: #f7f7f7;
        font-family: Arial, sans-serif;
    }

    .container {
        max-width: inherit;
        background-color: #f8ceec;
        background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
        display: flex;
        flex-direction: row;
        height: 100vh;
        align-items: center;
        padding: 0;
    }
    form{
        display: flex;
        flex-direction: column;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 5px;
        width: 400px;
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    label {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    input[type="text"], input[type="password"] {
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 16px;
        font-family: Arial, sans-serif;
    }

    input[type="submit"] {
        background-color: #008CBA;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
        background-color: #006080;
    }
    .insidebox{
        width: 100%;
justify-content: center;
align-items: center;
display: flex;
    }

    .picture {
        background-image: url('https://www.w3schools.com/howto/img_parallax.jpg');
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 80%;
    }
    

    @media(max-width: 768px) {
        .container {
            flex-direction: column;
            max-width: inherit;
        }

        .picture {
            width: 100%;
            height: 400px;
        }

        .form-container {
            width: 100%;
        }
    }
</style>