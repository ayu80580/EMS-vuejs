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
      <tr>
        <th colspan="5" class="h3 bg-light desc">Description</th>
      </tr>
      <tr>
        <th class="bg-light">Employee Id</th>
        <th class="bg-light">Name</th>
        <th class="bg-light">Role</th>
        <th class="bg-light">Email</th>
        <th class="bg-light">Address</th>
      </tr>
     

        <tbody v-for="values in data" :key="values.emp_id">
          
          <EmpEntries
          
          :key="emp_id"
          :name="values.name"
          :emp_id="values.emp_id"
          :role="values.role"
          :email="values.email"
          :address="values.address" 
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
    };
  },
  components:{EmpEntries},
  mounted() {
    axios.get("http://127.0.0.1:8000/api/users/get").then((response) => {
      this.data = response.data.data;
      console.log(response);
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