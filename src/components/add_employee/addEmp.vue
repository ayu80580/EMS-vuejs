<template>
  <dashboardNavigation></dashboardNavigation>
  <div class="container-fluid bg-secondary">

    <div class=" d-flex justify-content-center">
      
      <form class="form-box" action="" @submit.prevent="UserData">
       
        <p v-if="isAdded" class="text-success">User Added Successfully</p>
        <ul>
          <li class="text-warning" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input name="name" type="text" class="form-control" id="name" placeholder="Full Name..."
            v-model="userDetails.name"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Email Address..." v-model="userDetails.email" required />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone Number</label>
          <input name="phone" type="text" class="form-control" id="phone" placeholder="phone number"
            v-model="userDetails.phone" required />
        </div>
        <div class="mb-3">
          <label for="city" class="form-label">City</label>
          <input name="city" type="text" class="form-control" id="city" placeholder="Your City" v-model="userDetails.city"
            required />
        </div>
        <div class="mb-3">
          <label for="Bio" class="form-label">Bio</label>
          <input name="Bio" type="text" class="form-control" id="bio" placeholder="about yourself"
            v-model="userDetails.Bio" required />
        </div>
        <div class="mb-3">
          <label for="file" class="form-label">Image</label>
          <input name="profilepic" type="file" class="form-control" id="file" />
        </div>
        <select class="form-select" aria-label="Default select example" v-model="userDetails.user_role_id" required>
          <option value="3">Employee</option>
          <option value="2">Manager</option>
          <option value="1">Admin</option>
        </select>
        <button type="submit" class="btn btn-outline-light mt-2">
          Submit
        </button>
      </form>
      <!-- <div class="col-sm my-5">
        
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dashboardNavigation from "../employeeDashboard/dashboardNavigation.vue";
export default {
  components: {
    dashboardNavigation,
  },
  data() {
    return {
      isAdded: false,
      errors: [],
      userDetails: {
        name: '',
        email: '',
        phone: '',
        user_role_id: '3',
        city: '',
        Bio: '',
      }

    }
  },
  methods: {
    UserData() {
      // console.log(this.userDetails);
      this.errors = [];
      axios
        .post("http://127.0.0.1:8000/api/register", this.userDetails)
        .then((response) => {
          console.log(response);
          this.userDetails.name = '';
          this.userDetails.email = '';
          this.userDetails.phone = '';
          this.userDetails.email = '';
          this.userDetails.city = '';
          this.userDetails.bio = '';
          this.isAdded = true;
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            // Validation failed, set errors data property
            this.errors = error.response.data.errors;
          } else {
            // Other error occurred, handle as needed
            console.log(error);
          }
        });
    }
  }
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
  padding: 5%;
}

.form-box {
  background-color: rgba(0, 0, 0, 0.507);
  padding: 15px;
  border-radius: 10px;
  height: fit-content;
  color: white;
  margin-top: 5%;
}

input,
select {
  color: white;
  background-color: rgba(0, 0, 0, 0.507);
}
</style>