<template>
          <div class="card m-5">
        <div class="card-body">
          <h5 class="card-title">Leave Request Form</h5>
          <form>
            <div class="form-group row">
              <label for="employee-name" class="col-sm-2 col-form-label"
                >Employee Name:</label
              >
              <div class="col-sm-10">
                <input
                type="name" name="name" v-model="name"
              
                  class="form-control"
                  id="employee-name"
                  placeholder="Enter employee name"
                 
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-start-date" class="col-sm-2 col-form-label" :value="formattedStartDate" @input="updateStartDate"
                >Leave Start Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-start-date"  v-model="start"/>
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-end-date" class="col-sm-2 col-form-label"
                >Leave End Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-end-date" :min="minEndDate" v-model="end" />
              </div>
            </div>
            <p v-if="wrongEnd" style="color:red;">The End Date must be Greater than Start Date</p>
          
            <div class="form-group row">
              <div class="col-sm-12 text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>



<script>
import axios from "axios";
export default {
  created() {
    this.name = this.$store.state.EmployeeData.name;
  },
  data() {
    return {
      name: '',
      start: '',
      end : '',
      userId: this.$store.state.EmployeeData.id,
      // showUserIdField: true // set to false if not using user ID field
    }
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        start: this.start,
        end: this.end,
        user_id: this.userId 
      }
      axios.post('http://127.0.0.1:8000/api/leave-request', formData)
        .then(() =>{
          alert('Leave Applied Successfully');
          // handle success response
        })
        .catch(() => {
          alert('Leave Error!!!');
        })
    }
  }
}
</script>
