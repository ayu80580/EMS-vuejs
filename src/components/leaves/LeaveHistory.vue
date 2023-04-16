<template>
  <div class="m-5 description">
    <table class="table align-middle mb-0 bg-white">
      <tr>
        <th colspan="6" class="h3 bg-light desc">Leave History</th>
      </tr>
      <tr>
        <th class="bg-light">Leave Id</th>
        <th class="bg-light">Applied on</th>
        <th class="bg-light">Start Date</th>
        <th class="bg-light">End Date</th>
        <th class="bg-light">Approval sent to</th>
        <th class="bg-light">Approval Status</th>
      </tr>


      <tbody v-for="leave of leaves" :key="leave.leave_id">
        <LeaveHistorRow
          :id="leave.id"
          :applied_on="leave.created_at"
          :start_date="leave.leave_start_date"
          :end_date="leave.leave_end_date"
          :approved_by="leave.approved_by"
          :approval_status="leave.approval_status"
        ></LeaveHistorRow>
      </tbody>
    </table>

    <!-- <div class="both_paginators">
      <div class="pagination">
        <button v-if="currentPage > 1" @click="currentPage--">Previous</button>
       

        <button v-if="currentPage < totalPages" @click="currentPage++">
          Next
        </button>
      </div> -->

      <!-- <div><h6>Page {{currentPage}} of {{totalPages}}</h6> </div> -->


      <!-- <div>
        <div v-for="page of totalPages" :key="page" class="pagination2">
          <button @click="this.currentPage = page">
            <a :class="page == currentPage ? 'active' : ''">{{ page }}</a>
          </button>
        </div>
      </div> -->


    <!-- </div> -->
  </div>
</template>
    
    <script scoped>
import axios from "axios";
import LeaveHistorRow from "./LeaveHistorRow.vue"

import { mapMutations } from 'vuex';
export default {
  components: {
    LeaveHistorRow,
  },
  data() {
    return {
      itemsPerPage: 5,
      currentPage: 1,
      id:this.$store.state.EmployeeData.id
    };
  },
  computed: {
    leaves(){
      return this.$store.state.leaves;
    },
    // totalItems() {
    //   return this.leaves.length;
    // },
    // totalPages() {
    //   return Math.ceil(this.totalItems / this.itemsPerPage);
    // },
    // paginatedLeaves() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   return this.leave.slice(startIndex, endIndex);
    // },
  },

  methods: {
    ...mapMutations(['updateLeaves']),
    getLeave() {
      const id=this.$store.state.EmployeeData.id;
    axios.get(`http://127.0.0.1:8000/api/user/leaves/${id}`).then((response) => {
      this.$store.state.leaves = response.data;
      console.log(this.$store.state.leaves);
    });
    },
  },
  
  mounted() {
    this.getLeave();
  },

  
};
</script>
    
    <style>
.nodisplay {
  color: blue;
}

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
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
}

.pagination button:hover:not(.active) {
  background-color: #311414;
  color: white;
  border-radius: 5px;
}

.pagination2 {
  display: inline-block;
}


.pagination2 a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  
}

.pagination2 a.active, .pagination2 button:active {
  background-color: grey;
  color: white !important;
  border-radius: 20px;
}

.pagination2 a:hover:not(.active) {
  background-color: #311414;
  color: white;
  border-radius: 5px;
}
</style>