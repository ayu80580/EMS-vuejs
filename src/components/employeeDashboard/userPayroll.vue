<template>
    <div class="col-md-6">
            <div class="card" style="height: 207px;">
              <div class="card-body">
                <h5 class="card-title">Payroll Management</h5>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Salary</h6>
                        <p class="card-text">{{ this.$store.state.LatestSalary.payable_salary?this.$store.state.LatestSalary.payable_salary:'Pending' }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Tax</h6>
                        <p class="card-text">{{ this.$store.state.Tax.tax }} %</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Deductions</h6>
                        <p class="card-text">{{ this.$store.state.Tax.deductions }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>



<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {

data(){
    return {
         id : this.$store.state.EmployeeData.id
    };
},
  methods: {
    ...mapMutations(['updateLatestSalary']),
    getSalary() {
       
      axios
        .get(`http://127.0.0.1:8000/api/latestSalary/${this.id}`)
        .then((response) => {
          this.updateLatestSalary(response.data);
        })
        .catch(() => {
          alert('Salary Not fetched properly!!!');
        });
    },

    ...mapMutations(['updateTax']),
    getTax() {
      axios
        .get(`http://127.0.0.1:8000/api/Tax/${this.id}`)
        .then((response) => {
          this.updateTax(response.data);
        })
        .catch(() => {
          alert('Tax Not fetched properly!!!');
        });
    },
  },
  mounted() {
    this.getSalary();
    this.getTax();
  },
};
</script>

<style scoped>
.card-body {
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    color: var(--bs-card-color);
    max-height: 125px;
    height: 125px;
}
h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 7px;
 
    font-weight: 500;
    line-height: 1.2;
}

</style>