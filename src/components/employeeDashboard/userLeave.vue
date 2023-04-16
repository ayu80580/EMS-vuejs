<template>
  <div class="col-md-6">
          <div class="card" style="height: 207px;">
            <div class="card-body">
              <h5 class="card-title" >Recent Leave Details</h5>
              <div class="row">
                <div class="col-sm-4">
                  <div class="card bg-light mb-3">
                    <div class="card-body">
                      <h6 class="card-title">Approval Status</h6>
                      <p class="card-text">{{ this.$store.state.Leave.approval_status === 1 ? 'Leave Approved' : 'Leave Not Approved' }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card bg-light mb-3">
                    <div class="card-body">
                      <h6 class="card-title">Leave Start Date</h6>
                      <p class="card-text">{{ this.$store.state.Leave.leave_start_date }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card bg-light mb-3">
                    <div class="card-body">
                      <h6 class="card-title">Leave End Date</h6>
                      <p class="card-text">{{ this.$store.state.Leave.leave_end_date}}</p>
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
  ...mapMutations(['updateLeave']),
  getLeave() {
    axios
      .get(`http://127.0.0.1:8000/api/leave/${this.id}`)
      .then((response) => {
        this.updateLeave(response.data);
      })
      .catch(() => {
        alert('Leave Not fetched properly!!!');
      });
  },
},
mounted() {
  this.getLeave();
},
};
</script>
<style scoped>
.card-body {
  margin:6px;
  max-height: 125px;
  height: 125px;
  padding:0;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 7px;
  font-weight: 500;
  line-height: 1.2;
}
</style>






