<template>
  <dashboardNavigation></dashboardNavigation>
  <div class="mx-5 my-5">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Full Name..."
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email Address..."
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="phone number"
        />
      </div>
      <div class="mb-3">
        <label for="file" class="form-label">Image</label>
        <input type="file" class="form-control" id="file" />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Employee
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Manager
        </label>
      </div>
      <button type="submit" class="btn btn-primary" @submit.prevent="">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import dashboardNavigation from "../employeeDashboard/dashboardNavigation.vue";
export default {
  components: {
    dashboardNavigation,
  },
};
</script>