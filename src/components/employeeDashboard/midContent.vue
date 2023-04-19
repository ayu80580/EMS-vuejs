<template>

      <!-- Middle content -->
      <div class="tasks-wrapper">
        <div class="row py-3">
          <div class="col-md-8">
            <div class="home display fadeInUp" style="display: block">
              <div class="container">
                <div class="row my-3 my-md-5">
                  <div class="card rounded-lg border-0 cards-short w-100">
                    <div class="row">
                      <div class="col-sm-6 order-1 order-sm-1">
                        <h4 class="text-primary pt-3 pt-sm-5 pl-3 pl-lg-4 pr-3">Hi {{ this.$store.state.EmployeeData.name }}, </h4>
                      </div>
                      <div
                        class="col-sm-6 d-flex d-lg-block d-lg-block align-items-center justify-content-center order-0 order-sm-1">
                        <img src="https://gatoledo.com/proj-codepen/img/welcome-intranet.png"
                          data-swap="https://gatoledo.com/proj-codepen/img/welcome-intranet-dark.png" id="welcome"
                          class="img-fluid" style="margin-top: -25px;width: 75%;">
                      </div>
                      <div class="col-12 order-2 order-sm-1">
                        <p class="px-3 pt-2 pb-3 text-banner" style="color: #5584bc; font-size: 15px">Hi {{ this.$store.state.EmployeeData.name }}, welcome to the Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <userPayroll></userPayroll>
            <userLeave></userLeave>
          </div>
        </div>
        <leaveRequest v-if="this.$store.state.AuthRole === 'Employee' || this.$store.state.AuthRole === 'Manager'">
        </leaveRequest>
        <div v-if="this.$store.state.AuthRole === 'Admin'" style="margin: 200px;"></div>
      </div>

</template>



      
<script>
import leaveRequest from "./leaveRequest.vue";
import userPayroll from "./userPayroll.vue";
import userLeave from "./userLeave.vue";


export default {
 /* eslint-disable vue/multi-word-component-names */
  name: "Middle",
  components: {
    userPayroll,
    userLeave,
    leaveRequest,
  },
};
</script>