<template>
  <dashboardNavigation></dashboardNavigation>
  <div class="container-fluid">
      <div class=" d-flex justify-content-center"  style="height: 100vh;
      background: pink;
  ">
          <form action="" @submit.prevent="UserData" style="
          border: 2px solid black;
          padding: 40px;
          border-radius: 10px;
          height: fit-content;
          
          margin-top: 8%;
      ">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input name="name" type="text" class="form-control" id="name" placeholder="Full Name..." v-model="userDetails.name" required />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Email Address..." v-model="userDetails.email"  required/>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input name="phone" type="text" class="form-control" id="phone" placeholder="phone number"
                v-model="userDetails.phone" required/>
            </div>
            <div class="mb-3">
              <label for="file" class="form-label">Image</label>
              <input name="profilepic" type="file" class="form-control" id="file"  />
            </div>
            <select class="form-select" aria-label="Default select example" v-model="userDetails.user_role_id" required>
              <option value="3">Employee</option>
              <option value="2">Manager</option>
              <option value="1">Admin</option>
            </select>
            <button type="submit" class="btn btn-primary mt-2">
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
      userDetails:{
        name: '',
        email: '',
        phone: '',
        user_role_id: '3',
      }

    }
  },
  methods:{
    UserData() {
      // console.log(this.userDetails);
      axios
        .post("http://127.0.0.1:8000/api/register", this.userDetails)
        .then((response) => {
          console.log(response);
          this.userDetails.name='';
          this.userDetails.email='';
          this.userDetails.phone='';
          this.userDetails.email='';
        })
        .catch(() => {
          return "Error";
        });
    }
  }
};
</script>

<style scoped>
.container-fluid{
  padding: 0;
  margin: 0;
}
</style>