<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="submitForm">
    <label for="username"> Full Name:</label>
    <input type="text" id="username" name="username" v-model="name" required />
    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      v-model="password"
      required
    />

    <input type="submit" value="Let's Begin" />
  </form>
</template>
    

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      values:{}
    };
  },
  methods: {
    submitForm() {
        this.values={
            'name':this.name,
            'email':this.email,
            'password':this.password
        }
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/signup",
        data: this.values,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
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
form {
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

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-family: Arial, sans-serif;
}

input[type="submit"] {
  background-color: #008cba;
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
.insidebox {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.picture {
  background-image: url("https://www.w3schools.com/howto/img_parallax.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 80%;
}

@media (max-width: 768px) {
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