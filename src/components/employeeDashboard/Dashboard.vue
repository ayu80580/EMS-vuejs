<template>
  <dashboardNavigation></dashboardNavigation>
  <div>
    <div>
      <div class="card m-5">
        <div class="card profile-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="@/assets/logo.png"
                  alt="Ayush Gupta"
                  class="profile-image rounded-circle img-fluid"
                />
              </div>
              <div class="col-md-6">
                <h3 class="profile-name">{{ data.first_name +' '+data.last_name }}</h3>
                <h5 class="profile-designation">Trainee Software Engineer</h5>
                <p class="profile-description">
                  Your short bio or description goes here. You can use this
                  space to highlight your skills, experience, or achievements.
                </p>
                <ul class="profile-details list-unstyled">
                  <li><i class="fas fa-map-marker-alt"></i>Chennai</li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:ayush@recruitcrm.io">{{ data.email }}</a>
                  </li>
                  <li>
                    <i class="fas fa-link"></i>
                    <a href="www.google.com">www.google.com</a>
                  </li>
                </ul>
                <div class="profile-social-icons">
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-facebook"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Payroll Management</h5>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Salary</h6>
                        <p class="card-text">$5000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Tax and Deductions</h6>
                        <p class="card-text">$1000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Increment</h6>
                        <p class="card-text">$500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Leave Balance</h5>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Employee ID</h6>
                        <p class="card-text">12345</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Employee Status</h6>
                        <p class="card-text">Active</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Employee Role</h6>
                        <p class="card-text">Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card m-5">
        <div class="card-body">
          <h5 class="card-title">Leave Request Form</h5>
          <form>
            <div class="form-group row">
              <label for="employee-name" class="col-sm-2 col-form-label"
                >Employee Name:</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="employee-name"
                  placeholder="Enter employee name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-start-date" class="col-sm-2 col-form-label"
                >Leave Start Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-start-date" />
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-end-date" class="col-sm-2 col-form-label"
                >Leave End Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-end-date" />
              </div>
            </div>
            <div class="form-group row">
              <label for="reason-for-leave" class="col-sm-2 col-form-label"
                >Reason for Leave:</label
              >
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="reason-for-leave"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  



<script>
import dashboardNavigation from "./dashboardNavigation.vue";

export default {
  /* eslint-disable vue/multi-word-component-names */
  name: "Dashboard",
  computed:{
    data(){
      return this.$store.state.EmployeeData;
    }
  },
  components: {
    dashboardNavigation,
  },
  methods: {
    toggleSystemManagement() {
      // Toggle System Management list
    },
    toggleUserManagement() {
      // Toggle User Management list
    },
    logout() {
      // Logout functionality
    },
  },
};
</script>


<style scoped>
.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
  color: #555;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

/*profile style*/
.profile-card {
  border: none;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.profile-name {
  font-size: 36px;
  font-weight: 1000;
  margin-top: 18px;
  margin-bottom: 13px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.profile-designation {
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
  font: caption;
}

.profile-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  font: caption;
}

.profile-details li {
  font-size: 16px;
  margin-bottom: 10px;
  font: caption;
}

.profile-details li i {
  margin-right: 10px;
  font-size: 20px;
  color: #999;
}

.profile-details li a {
  color: #333;
}

.profile-social-icons a {
  display: inline-block;
  margin-right: 10px;
  color: #333;
  transition: all 0.3s ease-in-out;
}

.profile-social-icons a:hover {
  transform: translateY(-3px);
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0062cc;
  border-color: #005cbf;
}
</style>