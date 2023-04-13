<template>
    

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <router-link to="/Dashboard">Dashboard</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>


      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/EmployeeList">Employee List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AddEmployee">Add Employee</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/leaveRequest">Leave Request</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/Profile">Profile</router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
.router-link-active{
  color: #2f89fc;
}
</style>


