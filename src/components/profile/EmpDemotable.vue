<template>
  <!-- <h1>inside EmpDemotable</h1> -->
    <!-- <div>
      <ul>
        <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
      </ul>
      <div>
        <button v-if="currentPage > 1" @click="currentPage--">Previous</button>
        <button v-if="currentPage < totalPages" @click="currentPage++">Next</button>
      </div>
    </div> -->



    <div class="m-5 description">
      <table class="table align-middle mb-0 bg-white">
        <tr>
          <th colspan="5" class="h3 bg-light desc">Description</th>
        </tr>
        <tr>
          <td class="bg-light">Employee Id</td>
          <td class="bg-light">{{data.emp_id}}</td>
        </tr>
        <tr>

          <td class="bg-light">Name</td>
          <td>{{data.name}}</td>
        </tr>
        <tr>

          <td class="bg-light">Role</td>
          <td>{{data.role}}</td>
        </tr>
        <tr>

          
          <td class="bg-light">Email</td>
          <td>{{data.email}}</td>
        </tr>
        <tr>

          <td class="bg-light">Address</td>
          <td>{{data.address}}</td>
        </tr>
        
  
  </table>
  <div class="pagination">
    <button v-if="currentPage > 1" @click="currentPage--">Previous</button>
    <button v-if="currentPage < totalPages" @click="currentPage++">Next</button>
  </div>
 
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  // import EmpEntries from '../components/profile/EmpEntries.vue';
  export default {
    // components:{EmpEntries},
    data() {
      return {
        data: [],
        itemsPerPage: 5,
        currentPage: 1,
      };
    },
    computed: {
      totalItems() {
        return this.data.length;
      },
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      paginatedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.data.slice(startIndex,endIndex);
      },
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/users/get').then(response => {
        this.data = response.data.data[0];
        console.log(this.data);
      });
    },
  };
  </script>
  
  <style>
.desc {
  font-family: "Dancing Script", cursive;
  font-size: 20px;
}

.pagination {
  margin-top: 20px;
  display: inline-block;
}

.pagination button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination button.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.pagination button:hover:not(.active) {
  background-color: #311414;
  color: white;
  border-radius: 5px;
}

</style>