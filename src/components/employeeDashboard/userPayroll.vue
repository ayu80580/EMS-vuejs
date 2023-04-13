<template>
    <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Payroll Management</h5>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card bg-light mb-3">
                      <div class="card-body">
                        <h6 class="card-title">Salary</h6>
                        <p class="card-text">{{ this.$store.state.LatestSalary.payable_salary }}</p>
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
                        <p class="card-text">$500</p>
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

