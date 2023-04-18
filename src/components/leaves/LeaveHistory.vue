<template>
  <h2 style="color:black"> Leave History</h2>
<div class="table-wrapper">
    <table class="fl-table">
     <thead>

       <tr>
         <th >Leave Id</th>
         <th >Applied on</th>
         <th >Start Date</th>
         <th >End Date</th>
         <th >Approval sent to</th>
         <th >Approval Status</th>
        </tr>
      </thead>


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
    
    <script>
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
      const id=this.$store.state.data.id;
      // const id=this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/user/leaves/${id}`).then((response) => {
      this.$store.state.leaves = response.data;
    });
    },
  },
  
  mounted() {
    this.getLeave();
  },

  
};
</script>



<style scoped>*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
body{
  font-family: Helvetica;
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


    
<!-- <style scoped>
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



</style> -->