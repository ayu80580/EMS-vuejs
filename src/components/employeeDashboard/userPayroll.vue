<!-- <template>
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
          this.$store.state.AuthRole = response.data.role_name;
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

</style> -->




<template>
  <div class="col-md-6">
    <div class="card" style="height: 207px;">  
      <transition name="fade" mode="out-in">
      <div class="card-body bg-gradient-primary">
        <h5 class="card-title text-white-">Payroll Management</h5>
        <div class="row">
          <div class="col-sm-4">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h6 class="card-title text-white-">Salary</h6>
                <p class="card-text">{{ this.$store.state.LatestSalary.payable_salary ? this.$store.state.LatestSalary.payable_salary : 'Pending' }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h6 class="card-title text-white-">Tax</h6>
                <p class="card-text">{{ this.$store.state.Tax.tax }}%</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h6 class="card-title text-white-">Deduction</h6>
                <p class="card-text">{{ this.$store.state.Tax.deductions }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
  max-height: 125px;
  height: 125px;
}

.h6,
.h5,
.h4,
.h3,
.h2,
.h1 {
  margin-top: 7px;
  font-weight: 500;
  line-height: 1.2;
}

/* Animation */
.card {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Color Scheme */
.bg-gradient-primary {
  background-image: linear-gradient(to bottom right, #007
  d8c, #00a0e9);
}

.card {
border: none;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
font-size: 18px;
}

.card-text {
font-size: 14px;
}

.card-body .card {
background-color: #f8f9fa;
}

.card-body .card-title {
color: #506ebb;
}

.card-body .card-text {
color: #6c757d;
}

.card-body .card-title.text-primary {
color: #fff;
}

.card-body .card-text.text-primary {
color: #007d8c;
}

.card-body .card-title.text-white {
color: #fff;
}

.card-body .card-text.text-white {
color: #506ebb;
}

/* Responsive */
@media (max-width: 576px) {
.card-body {
max-height: none;
height: auto;
overflow: auto;
}
}

</style>










<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      id: this.$store.state.EmployeeData.id
    };
  },
  methods: {
    ...mapMutations(['updateLatestSalary', 'updateTax']),
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
    getTax() {
      axios
        .get(`http://127.0.0.1:8000/api/Tax/${this.id}`)
        .then((response) => {
          this.updateTax(response.data);
          this.$store.state.AuthRole = response.data.role_name;
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