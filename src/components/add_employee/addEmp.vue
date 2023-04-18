<template>
  <dashboardNavigation></dashboardNavigation>
  <!-- <div class="container-fluid ">

    <div class=" d-flex justify-content-center">

      <form class="form-box" action="" @submit.prevent="UserData">

        <p v-if="isAdded" class="text-success">User Added Successfully</p>
        <ul>
          <li class="text-warning" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input name="name" type="text" class="form-control" id="name" placeholder="Full Name..."
            v-model="userDetails.name" />
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
    </div>
  </div> -->
  <div class="first-container">
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form action="" @submit.prevent="UserData">
          <p v-if="isAdded" class="text-success">User Added Successfully</p>
          <ul>
          <li class="text-warning" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="Enter your name" v-model="userDetails.name" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" v-model="userDetails.email" required>
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" v-model="userDetails.phone" required>
            </div>
            <div class="input-box">
              <span class="details">City</span>
              <input type="text" placeholder="City..." v-model="userDetails.city" required>
            </div>
            <div class="input-box">
              <span class="details">Bio</span>
              <input type="text" placeholder="About..." v-model="userDetails.Bio" required>
            </div>
            <div class="input-box">
              <span class="details">Role</span>
              <select class="select-role" v-model="userDetails.user_role_id" required>
                <option value="3">Employee</option>
                <option value="2">Manager</option>
              </select>
            </div>
          </div>
          <!-- <div class="gender-details">
            <input type="radio" name="gender" v-model="userDetails.user_role_id" id="dot-1">
            <input type="radio" name="gender" id="dot-2">
            <input type="radio" name="gender" id="dot-3">
            <span class="gender-title">Role</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Manager</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Employee</span>
              </label>
            </div>
          </div> -->

          <div class="button">
            <input type="submit" value="Register">
          </div>
        </form>
      </div>
    </div>
  </div>




  <!-- <div class="col-sm my-5">
        
      </div> -->
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
/* .container-fluid {
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
} */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.select-role {
  height: 45px;
  width: 100%;
  color:gray;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.select-role:focus,
.select-role:valid{
  border-color: #9b59b6;
  color:black;
}

.first-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: #ffffff85;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two,
#dot-3:checked~.category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}

form .button {
  height: 45px;
  margin: 35px 0
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media(max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  form .category {
    width: 100%;
  }

  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}

@media(max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }


}
</style>