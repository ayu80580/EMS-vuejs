<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
            alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">





          <form @submit.prevent="login">
            <ul>
              <li class="text-warning" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3">Email address</label>
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Enter a valid email address" v-model="email" required />

            </div>
            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Password</label>
              <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Enter password"
                v-model="password" required />

            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>

            </div>
          </form>



        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    </div>
  </section>
</template>
    
    


<script>
import setAuthHeader from '../AuthAPI/setAuthHeader'
// import { mapMutations } from 'vuex';
import axios from "axios";
import router from '../../router';
export default {

  data() {
    return {
      errors:[],
      email: "",
      password: "",
    };
  },

  methods: {

    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              localStorage.setItem("access_token", response.data.token);
              setAuthHeader(response.data.token);
              this.getEmployeeData();
              // console.log(response.data.token);
            })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            // Validation failed, set errors data property
            this.errors = error.response.data.errors;
          } else {
            // Other error occurred, handle as needed
            console.log(error);
          }
          return "Error";
        });
    },

    getEmployeeData() {

      axios
        .get("http://127.0.0.1:8000/api/get-user")
        .then((response) => {
          this.$store.state.EmployeeData = response.data;
          this.$store.state.auth = 1;
          router.push('/Dashboard');
        })
        .catch(() => {
          router.push('/error')
        });
    },
  },
};
</script>
    
    
    
    
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>