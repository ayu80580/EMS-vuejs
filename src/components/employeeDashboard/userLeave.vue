<template>
  <div class="col-md-6">
    <div class="card" style="height: 207px;">
      <transition name="fade" mode="out-in">
        <div class="card-body">
          <h5 class="card-title">Recent Leave Details</h5>
          <div class="row">
            <div class="col-sm-4">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <h6 class="card-title">Approval Status</h6>
                  <p class="card-text">{{ recentLeave.approval_status === 1 ? 'Approved' : 'Not Approved' }}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <h6 class="card-title">Leave Start Date</h6>
                  <p class="card-text">{{ recentLeave.leave_start_date }}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <h6 class="card-title">Leave End Date</h6>
                  <p class="card-text">{{ recentLeave.leave_end_date}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      id: this.$store.state.EmployeeData.id,
    };
  },
  computed:{
    recentLeave(){
      return this.$store.state.Leave;
    }
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
.fade-enter-active,
.card-body {
  flex: 1 1 auto;
  /* padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x); */
  /* color: var(--bs-card-color); */
  padding:10px;

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
