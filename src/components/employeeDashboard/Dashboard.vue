<template>
  <dashboardNavigation></dashboardNavigation>
  <div>
    <div>
      <userDetail></userDetail>
      <div class="container">
        <div class="row">
          <userPayroll></userPayroll>
          <userLeave></userLeave>    
        </div>
      </div>
      <leaveRequest></leaveRequest>    
    </div>
  </div>

  <h2>{{ this.$store.state.LatestSalary }}</h2>
</template>
  



<script>
import userDetail from './userDetail.vue';
import userPayroll from './userPayroll.vue';
import userLeave from './userLeave.vue';
import leaveRequest from './leaveRequest.vue';
import dashboardNavigation from "./dashboardNavigation.vue";


export default {
  /* eslint-disable vue/multi-word-component-names */
  name: "Dashboard",
  // computed:{
  //   userSalary(){
  //     return this.$store.state.LatestSalary;
  //   }
  // },
  components: {
    dashboardNavigation,
    userDetail,
    userPayroll,
    userLeave,
    leaveRequest
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