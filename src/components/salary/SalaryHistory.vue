<!-- <template>
     

<div class="m-5 description">


    <table class=" table align-middle mb-0 bg-white">
      <thead>
          <tr><th colspan="3" class=" bg-light desc">Payment History</th></tr>

          <tr >
           <th class="bg-light" >Month</th>
           <th class="bg-light" >Amount</th>
           <th class="bg-light" >Status</th>
           
         </tr>
        </thead>
        
        <tbody v-for="payment in payments" :key="payment.month" >

          <salary-row :month="months[payment.month-1]" :salary="payment.payable_salary" :status="payment.paid_status"></salary-row>
        </tbody>
       

        
       
     
    </table>
  
  </div>
</template> -->

<script>
import axios from 'axios';
import SalaryRow from './SalaryRow.vue';
import { mapMutations } from 'vuex';
export default{
  components:{
    'salary-row':SalaryRow
  },
    data(){
       return{
         months : [
    'January', 'February', 'March', 'April','May', 'June','July','August','September','October','November', 'December'
  ]
       }
    },
    computed:{
      payments(){
        return this.$store.state.payment;
      }
    },
    mounted(){
      this.getSalary();
    },

    methods: {
    ...mapMutations(['updateSalary']),
    getSalary() {
      // const id=this.$store.state.EmployeeData.id;
      const id=this.$route.params.id;
     axios.get(`http://127.0.0.1:8000/api/user/salary/${id}`).
     then((response)=>{
      this.$store.state.payment=response.data;
       console.log(this.$store.state.payment);
     })
    },
  },

}

</script>



<template>
  <h2 style="color:black"> Payments</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Month</th>
            <th>Salary</th>
            <th>Status</th>
           
        </tr>
        </thead>
        <tbody v-for="payment in payments" :key="payment.month" >

          <salary-row :month="months[payment.month-1]" :salary="payment.payable_salary" :status="payment.paid_status"></salary-row>
        </tbody>
    </table>
</div>
</template>





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