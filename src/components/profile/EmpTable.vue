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

  <div class="m-5 description">
    <table class="table align-middle mb-0 bg-white">
      <thead>
        <th colspan="5" class="h3 bg-light desc">Description</th>
      </thead>
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

export default {
  data() {
    return {
      data: [],
      role:'',
      status:''
      
    };
  },
 
  components:{EmpEntries},
  
  mounted() {
    const id=this.$store.state.EmployeeData.id;
    axios.get(`http://127.0.0.1:8000/api/user/profile/${id}`).then((response) => {
      this.data = response.data;
      this.role=response.data.user_role.role_name;
      this.status=response.data.user_status.status;
    });
  },
};
</script>

<style>
.desc {
  font-family: "Dancing Script", cursive;
  font-size: 20px;
}
</style>