<!-- <template>
  <div class="m-5 description">
    <table class="table align-middle mb-0 bg-white">
      <tr>
        <th colspan="2" class="h3 bg-light desc">Description</th>
      </tr>
      <tr>
        <th class="bg-light">Name</th>
        <td>Amanpati Tripathi</td>
      </tr>
      <tr>
        <th class="bg-light">Employee Id</th>
        <td>10012001</td>
      </tr>
      <tr>
        <th class="bg-light">Role</th>
        <td>SDE Intern</td>
      </tr>
      <tr>
        <th class="bg-light">Email</th>
        <td>tripathiaman777@gmail.com</td>
      </tr>
      <tr>
        <th class="bg-light">Address</th>
        <td>Ballia, U.P.</td>
      </tr>
    </table>
  </div>
</template> -->

<template>

  <h2 style="color:black"> Description</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <!-- <th colspan="5" class="h3 bg-light desc">Description</th> -->
      <!-- </thead> -->
      <!-- <tr>
        <th class="bg-light">Employee Id</th>
        <th class="bg-light">Name</th>
        <th class="bg-light">Role</th>
        <th class="bg-light">Email</th>
        <th class="bg-light">Address</th>
      </tr> -->
     
      
        <tbody  >
          
          <EmpEntries
          
          :key="data.id"
          :name="data.name"
          :emp_id="data.id"
          :role="role"
          :email="data.email"
          :status="status" 
          ></EmpEntries>


</tbody>



</table>
</div>



</template>



<script>
import axios from "axios";
import EmpEntries from "./EmpEntries.vue";
import { mapMutations } from 'vuex';
export default {
  
  
  computed:{
    data(){
      return this.$store.state.data;
    },
    role(){
      return this.$store.state.role;
    }
  },
 
  components:{EmpEntries},
  


  methods: {
    ...mapMutations(['updateEmpTable']),
    getEmpTable() {
      // const id=this.$store.state.EmployeeData.id;
    const id=this.$route.params.id;
    // console.log(id);
    axios.get(`http://127.0.0.1:8000/api/user/profile/${id}`).then((response) => {
      this.$store.state.data = response.data;
      console.log(this.$store.state.data);
      this.$store.state.role=response.data.user_role.role_name;
      this.$store.state.status=response.data.user_status.status;
    });
    },
  },
  
  mounted() {
    this.getEmpTable();
  },

};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Poppins&family=Roboto:wght@700&display=swap');

*{
  font-family: 'Dancing Script', cursive;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
  background: rgba( 71, 147, 227, 1);
}
h2{
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  padding: 30px 0;
}

/* Table Styles */

.table-wrapper{
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
  width: 62%;
  position: relative;
  left: 15%;
  border-radius: 20%;
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td, .fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}

.fl-table thead th {
  color: #ffffff;
  background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

.fl-table tr:nth-child(even) {
  background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
  .fl-table {
      display: block;
      width: 100%;
  }
  .table-wrapper:before{
      content: "Scroll horizontally >";
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
  }
  .fl-table thead, .fl-table tbody, .fl-table thead th {
      display: block;
  }
  .fl-table thead th:last-child{
      border-bottom: none;
  }
  .fl-table thead {
      float: left;
  }
  .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
  }
  .fl-table td, .fl-table th {
      padding: 20px .625em .625em .625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
  }
  .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
  }
  .fl-table tbody tr {
      display: table-cell;
  }
  .fl-table tbody tr:nth-child(odd) {
      background: none;
  }
  .fl-table tr:nth-child(even) {
      background: transparent;
  }
  .fl-table tr td:nth-child(odd) {
      background: #F8F8F8;
      border-right: 1px solid #E6E4E4;
  }
  .fl-table tr td:nth-child(even) {
      border-right: 1px solid #E6E4E4;
  }
  .fl-table tbody td {
      display: block;
      text-align: center;
  }
}

</style>