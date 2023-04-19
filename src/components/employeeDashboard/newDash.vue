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
      <leftNavigation></leftNavigation>
    </div>
    <div class="page-content">
      <div class="header">Dashboard</div>


      <!-- Middle content -->
      <midContent></midContent>
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
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>

          <!-- <div class="count">{{ this.$store.state.EmployeeData.name }}</div> -->
          <ul class="dropdown-menu">
            <li><a @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>

      <!-- Right Nav -->
      <empProfile></empProfile>
    </div>
  </div>
</template>






<script>
import router from '../../router';
import empProfile from "./empProfile.vue";
import midContent from './midContent.vue';
import leftNavigation from './leftNavigation.vue';


export default {
 /* eslint-disable vue/multi-word-component-names */
  name: "NewDashboard",
  components: {
    empProfile,
    midContent,
    leftNavigation

  },
  methods: {
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
  background-image: linear-gradient(21deg,
      rgba(64, 83, 206, 0.3697003234675773) 68%,
      rgba(255, 206, 196, 0.5) 163%),
    linear-gradient(163deg,
      rgba(49, 146, 170, 0.07944489965716128) 86%,
      rgba(239, 112, 138, 0.5) 40%),
    linear-gradient(30deg,
      rgba(76, 79, 173, 0.6173675716587805) 22%,
      rgba(237, 106, 134, 0.5) 169%),
    linear-gradient(48deg,
      rgba(31, 85, 147, 0.7323890641868473) 64%,
      rgba(247, 126, 132, 0.5) 43%);
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

#opt-1:checked+label,
#opt-2:checked+label,
#opt-3:checked+label,
#opt-4:checked+label {
  color: var(--checkbox-color);
  border-bottom: 2px solid var(--checkbox-color);
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
}
.dropdown {
  position: relative;
  display: inline-block;
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
