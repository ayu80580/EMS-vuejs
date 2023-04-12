<template>
     

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
        <!-- <tr  >
            <td>January</td>
            <td>10000</td>
            <td>paid</td>
        </tr> -->
        <tbody v-for="payment in payments" :key="payment.month" >

          <salary-row :month="payment.month" :salary="payment.amount" :status="payment.status"></salary-row>
        </tbody>
       

        
       
     
    </table>
  
  </div>
</template>

<script>
import axios from 'axios';
import SalaryRow from './SalaryRow.vue';
export default{
  components:{
    'salary-row':SalaryRow
  },
    data(){
       return{
         payments:[]
       }
    },
    mounted(){
      axios.get('http://127.0.0.1:8000/api/payments/get').
      then((response)=>{
        this.payments=response.data.data;
        // console.log(this.data);
      })
    }
}

</script>