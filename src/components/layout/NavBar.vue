<template>
  <div class="container">
    <div class="card">
      <!-- <div class="header ">
            <h3 class="mx-auto">Menu IU <i class="fas fa-angle-down iconM"></i></h3>
          </div> -->
          <!-- <a href="/Dashboard">Dashboard</a> -->
      <div class="body">
        <ul>
          <!-- <li ><button   @click="demoFun('emp-table')">Profile</button> </li>
              <li ><button  @click="demoFun('EmpDemotable')">Demo Table</button> </li>
              <li > <button @click="demoFun('salary-history')">Salary History</button> </li>
              <li><button @click="demoFun('leave-history')"> Leave History</button></li>
              <li><button >Apply for Leave</button></li>
              <li> Forms </li>
              <li>Charts</li> -->
          <li >
            <router-link to="/Dashboard" >Dashboard</router-link>
          </li>
          <li >
            <router-link :to="`${url}/profile`">Profile</router-link>
          </li>
          <li >
            <router-link :to="`${url}/leave`">Leave History</router-link>
          </li>
          <li>
            <router-link :to="`${url}/salaryHistory`">Salary History</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    
    data(){
        return{
            value:'profile',

        }
    },
    methods:{
        demoFun(val){
          this.value=val;
        },


    },
    computed:{
      url(){
        return "/user/"+this.$store.state.data.id;
      }
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
button {
  background: none;
  color: inherit;
  border: none;
}



.router-link-active{
  color: #2f89fc;
}

a{
  text-decoration: none;
  color: white;
}
.container {
  /* margin: 20px;
  width: 30%; */
  display: contents;
  border: 2px solid black;
  width: 30%;
  margin-right: 20px;
  padding: 20px;
}

.active {
  background: white;
  color: black !important;
}

.card {
  position: fixed;
  margin-top: 10px;
  width: 300px;
  height: 90vh;
  background-color: rgb(47, 105, 181);
  border-radius: 10px 10px;
}

.header {
  border-radius: 10px 10px 0px 0px;
  padding: 5px;
  background-color: #2a3942;
}

h3 {
  color: black;
  font-family: "Roboto", sans-serif;
  margin-left: 1rem;
}

.iconM {
  font-size: 18px;
  margin-left: 170px;
  color: #2f89fc;
}

.icon {
  margin-right: 8px;
}

.body li {
  transition: 1s all;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 25px;

  margin-top: 0px;
  color: #fff;
  list-style: none;
  display: block;
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
}

li:hover {
  transition: 1s all;
  color: #2f89fc;
  background-color: rgba(42, 56, 65, 0.82);
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  cursor: pointer;
}

.body > li {
  float: left;
}

.body li ul {
  background: #1e2b32;
  margin-left: 280px;
  margin-top: -38px;
  display: none;
  position: absolute;
  border-top-right-radius: 15px 15px;
  border-bottom-right-radius: 15px 15px;
  padding-left: 0;
}
ul {
  padding-left: 0;
}

.body li:hover > ul {
  display: block;
  cursor: pointer;
}
</style>