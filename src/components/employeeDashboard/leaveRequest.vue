<template>
  <transition name="fade">
    <div class="card m-5">
      <div class="card-body" style="color: #506ebb;">
        <h5 class="card-title">Leave Request Form</h5>
        <form @submit.prevent="submitForm">
          <div class="form-group row">
            <label for="employee-name" class="col-sm-2 col-form-label">Employee Name:</label>
            <div class="col-sm-10">
              <input
                type="name"
                name="name"
                v-model="name"
                class="form-control"
                id="employee-name"
                placeholder="Enter employee name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="leave-start-date"
              class="col-sm-2 col-form-label"
              :value="formattedStartDate"
              @input="updateStartDate"
              >Leave Start Date:</label
            >
            <div class="col-sm-10">
              <input type="date" class="form-control" id="leave-start-date" v-model="leave_start_date" />
            </div>
          </div>

          <div class="form-group row">
            <label for="leave-end-date" class="col-sm-2 col-form-label">Leave End Date:</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="leave-end-date" :min="minEndDate" v-model="leave_end_date" />
            </div>
          </div>
          <p v-if="wrongEnd" class="error-message">The End Date must be Greater than Start Date</p>

          <div class="form-group row">
            <div class="col-sm-12 text-right">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>



<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.col-form-label {
  font-weight: bold;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
}

.error-message {
  color: red;
}
</style>






















<script>
import axios from "axios";
import { mapMutations } from 'vuex';
export default {
  created() {
    this.name = this.$store.state.EmployeeData.name;
  },
  data() {
    return {
      approved_by: '',
      leave_start_date: '',
      leave_end_date: '',
      userId: this.$store.state.EmployeeData.id,
      // showUserIdField: true // set to false if not using user ID field
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


    submitForm() {
      const formData = {
        // name: this.name,
        leave_start_date: this.leave_start_date,
        leave_end_date: this.leave_end_date,
        user_id: this.userId,
      }
      // console.log(formData);
      
      axios.post('http://127.0.0.1:8000/api/leave-request',formData)
        .then((response) =>{
          console.log(response);
          this.getLeave();
          alert('Leave Applied Successfully');
        })
        .catch(() => {
          alert('Leave Error!!!');
        })
    }
  }
}
</script>
