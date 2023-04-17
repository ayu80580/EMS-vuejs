<template>
  
<link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap" rel="stylesheet">
<div class="task-manager">
  <div class="left-bar">
    <div class="upper-part">
      <div class="actions">
        <div class="circle"></div>
        <div class="circle-2"></div>
      </div>
    </div>





    <!-- This is left navigation -->
    <div class="left-content">
      <ul class="action-list">

        

        <!-- EmployeeList -->
        <li class="item" v-if="this.$store.state.AuthRole == 'Admin' || this.$store.state.AuthRole == 'Manager'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
           <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
          </svg>
          <span>
            <router-link to="/EmployeeList" >Employee List</router-link>
          </span>
        </li>


        <!-- Add Employee -->
        <li class="item" v-if="this.$store.state.AuthRole == 'Admin'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
           <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <span> <router-link to="/AddEmployee">
              Add Employee
            </router-link></span>
        </li>



        <!-- Leave Request -->
        <li class="item" v-if="this.$store.state.AuthRole == 'Admin'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          <span> <router-link to="/leaveRequest" >Leave Request</router-link></span>
        </li>



        <!-- Profile -->
        <li class="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <span><router-link :to="url">Profile</router-link></span>
        </li>

        <!-- AllEmployee -->
        <li class="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-range" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z"/>
          </svg>
          <span><router-link to="/all">Employee Salary</router-link></span>
        </li>
       
</ul>





 



<!-- This is top navigation -->
      <ul class="category-list">
        
      </ul>
    </div>
  </div>

  
  
  
  
  <div class="page-content">
  <div class="header">Dashboard</div>


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
                        <h4 class="text-primary pt-3 pt-sm-5 pl-3 pl-lg-4 pr-3">Hi, welcome</h4>
                      </div>
                      <div class="col-sm-6 d-flex d-lg-block d-lg-block align-items-center justify-content-center order-0 order-sm-1">
                        <img src="https://gatoledo.com/proj-codepen/img/welcome-intranet.png" data-swap="https://gatoledo.com/proj-codepen/img/welcome-intranet-dark.png" id="welcome" class="img-fluid" style="margin-top: -25px;width: 75%;">
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
      <leaveRequest></leaveRequest>   
    </div>
  </div>

    <!-- logout button -->


  
  <div class="right-bar">
    <div class="top-part">
      <div class="dropdown">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-users">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>

        <!-- <div class="count">{{ this.$store.state.EmployeeData.name }}</div> -->
  <ul class="dropdown-menu">
    <li><a @click="logout">Logout</a></li>

  </ul>
</div>
</div>
      <!-- User Login/Logout -->
    



<!-- Right Nav -->
    <div class="header" style="
    padding: 21px;">User Details</div>
    <div class="right-content">
      <div class="task-box yellow">
        <div class="description-task">
          <div class="time">Name</div>
          <div class="task-name">{{ this.$store.state.EmployeeData.name}}</div>
        </div>
        </div>


        <div class="task-box yellow">
        <div class="description-task">
          <div class="time">Bio</div>
          <div class="task-name">{{this.$store.state.EmployeeData.Bio}}</div>
        </div>
        </div>


        <div class="task-box yellow">
        <div class="description-task">
          <div class="time">City</div>
          <div class="task-name">{{this.$store.state.EmployeeData.city}}</div>
        </div>
        </div>

        <div class="task-box yellow">
        <div class="description-task">
          <div class="time">E-mail</div>
          <div class="task-name"><a href="mailto:ayush@recruitcrm.io">{{ this.$store.state.EmployeeData.email }}</a></div>
        </div>
        </div>



        </div>

   </div>
</div>
</template>






<script>
// import userDetail from "./userDetail.vue";
import userPayroll from "./userPayroll.vue";
import userLeave from "./userLeave.vue";
import leaveRequest from "./leaveRequest.vue";
import router from '../../router';
// import dashboardNavigation from "./dashboardNavigation.vue";
// import { mapMutations } from 'vuex';

export default {
  
  /* eslint-disable vue/multi-word-component-names */
  name: "NewDashboard",
  // computed:{
  //   userSalary(){
  //     return this.$store.state.LatestSalary;
  //   }
  // },
  

  components: {
    // dashboardNavigation,
    // userDetail,
    userPayroll,
    userLeave,
    leaveRequest,

  },
  computed:{
    url(){
      return '/user/'+this.$store.state.EmployeeData.id+'/profile';
    }
  },


  methods:{
  logout() {
     localStorage.removeItem('vuex');
     localStorage.removeItem('access_token');
     router.push('/');
      }
  }
};





</script>











<style scoped>

a {
    color: #4e545d;
    text-decoration: none;
}
* {
  box-sizing: border-box;
  outline: none;
}

:root {
  --bg-color: #f5f8ff;
  --main-color: #353536;
  --secondary-color: #8e92a4;
  --main-text-color: #5d606b;
  --secondary-dark-color: #9496a5;
  --tag-color-one: #e0fbf6;
  --tag-color-text-one: #58c2a9;
  --tag-color-two: #ece7fe;
  --tag-color-text-two: #8972f3;
  --tag-color-three: #fde7ea;
  --tag-color-text-three: #e77f89;
  --tag-color-four: #f7f8fc;
  --tag-color-text-four: #a0a6b5;
  --checkbox-color: #009e90;
  --button-color: #49beb7;
  --box-color: #fff1d6;
  --box-color-2: #d3e6ff;
  --box-color-3: #ffd9d9;
  --box-color-4: #daffe5;
  --task-color: #777982;
}

.flex {
  display: flex;
  align-items: center;
}
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100vh;
  padding: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  background-image: linear-gradient(
      21deg,
      rgba(64, 83, 206, 0.3697003234675773) 68%,
      rgba(255, 206, 196, 0.5) 163%
    ),
    linear-gradient(
      163deg,
      rgba(49, 146, 170, 0.07944489965716128) 86%,
      rgba(239, 112, 138, 0.5) 40%
    ),
    linear-gradient(
      30deg,
      rgba(76, 79, 173, 0.6173675716587805) 22%,
      rgba(237, 106, 134, 0.5) 169%
    ),
    linear-gradient(
      48deg,
      rgba(31, 85, 147, 0.7323890641868473) 64%,
      rgba(247, 126, 132, 0.5) 43%
    );
  background-blend-mode: overlay, multiply, color, normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

.task-manager {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
    0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
    0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
    0 10px 80px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.left-bar {
  background-color: var(--bg-color);
  width: 230px;
  border-right: 1px solid #e3e7f7;
  position: relative;
}

.left-content {
  padding: 40px;
}

.item {
  display: flex;
  align-items: center;
  color: var(--main-color);
  margin-bottom: 14px;
  font-weight: 500;
}

.item svg {
  width: 14px;
  height: 14px;
  color: currentcolor;
  margin-right: 10px;
}

.category-list {
  margin-top: 50px;
}
.category-list .item {
  color: var(--secondary-color);
}

.actions {
  padding: 12px;
  display: flex;
  justify-content: space-between;
}

.circle {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #fe4d46;
  box-shadow: 14px 0 0 0 #fbc023, 28px 0 0 0 #7dd21f;
}

.circle-2 {
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background-color: #d5d7e3;
  box-shadow: -6px 0 0 0 #d5d7e3, 6px 0 0 0 #d5d7e3;
}

.right-bar {
  width: 320px;
  border-left: 1px solid #e3e7f7;
  display: flex;
  flex-direction: column;
}
.right-bar.header {
  font-size: 20px;
  color: var(--main-text-color);
  margin-left: 30px;
}

.top-part {
  padding: 30px;
  display: flex;
  align-items: center;
  align-self: flex-end;
}

.top-part svg {
  width: 14px;
  height: 14px;
  color: var(--main-color);
  margin-right: 14px;
}

.top-part .count {
  font-size: 12px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #623ce8;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-content {
  padding: 10px 40px;
  overflow-y: auto;
  flex: 1;
}

.task-box {
  position: relative;
  border-radius: 12px;
  width: 100%;
  margin: 20px 0;
  padding: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);
}

.task-box:hover {
  transform: scale(1.02);
}

.time {
  margin-bottom: 6px;
  opacity: 0.4;
  font-size: 10px;
}

.task-name {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
}

.yellow {
  background-color: var(--box-color);
}

.blue {
  background-color: var(--box-color-2);
}

.red {
  background-color: var(--box-color-3);
}

.green {
  background-color: var(--box-color-4);
}

.more-button {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #8e92a4;
  box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;
  opacity: 0.4;
  right: 20px;
  top: 30px;
  cursor: pointer;
}

.members {
  display: flex;
  margin-top: 14px;
}

.members img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 4px;
  object-fit: cover;
}

.page-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 20px 0 20px;
}

.page-content .header {
  font-size: 26px;
  color: var(--main-color);
  margin-top: -12px;
}

.content-categories {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}

.nav-item {
  display: none;
}

.category {
  font-weight: 500;
  color: var(--secondary-color);
  border-bottom: 1px solid #ddd;
  transition: 0.4s ease-in;
  padding: 20px 30px;
  cursor: pointer;
}

#opt-1:checked + label,
#opt-2:checked + label,
#opt-3:checked + label,
#opt-4:checked + label {
  color: var(--checkbox-color);
  border-bottom: 2px solid var(--checkbox-color);
}

.task-item {
  display: none;
}

.tasks-wrapper {
  padding: 30px 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding-right: 8px;
}

.task {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
  padding-left: 30px;
  color: var(--task-color);
  font-size: 13px;
  font-weight: 500;
}

.task:hover {
  transform: translateX(2px);
}

.task label {
  cursor: pointer;
}

label .label-text {
  position: relative;
}

label .label-text:before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid #ddd;
  border-radius: 2px;
  left: -24px;
  transition: 0.2s ease;
}

.task-item:checked + label .label-text:before {
  background-color: var(--checkbox-color);
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center;
  border: 1px solid var(--checkbox-color);
}

.tag {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
}

.tag.approved {
  background-color: var(--tag-color-one);
  color: var(--tag-color-text-one);
}

.tag.progress {
  background-color: var(--tag-color-two);
  color: var(--tag-color-text-two);
}

.tag.review {
  background-color: var(--tag-color-three);
  color: var(--tag-color-text-three);
}

.tag.waiting {
  background-color: var(--tag-color-four);
  color: var(--tag-color-text-four);
}

.upcoming {
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

@media screen and (max-width: 900px) {
  .left-bar {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .task-manager {
    flex-direction: column;
    overflow-y: auto;
  }

  .right-bar,
  .page-content {
    width: 100%;
    display: block;
  }

  .tasks-wrapper {
    height: auto;
  }
}

@media screen and (max-width: 520px) {
  .page-content {
    padding: 40px 10px 0 10px;
  }

  .right-content {
    padding: 10px 16px;
  }

  .category {
    padding: 20px;
  }
}





.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: -56px;
  z-index: 1;
  min-width: 100px;
}

.dropdown-menu li {
  display: block;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu li:hover a {
  background-color: #f5f5f5;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

</style>
