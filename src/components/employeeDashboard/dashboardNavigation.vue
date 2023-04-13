<template>
    

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
<<<<<<< HEAD
      <a class="navbar-brand" href="/Dashboard">Dashboard</a>
=======
      <router-link to="/Dashboard">Dashboard</router-link>
>>>>>>> Ayush
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
<<<<<<< HEAD
=======
        
>>>>>>> Ayush
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
<<<<<<< HEAD
            <a class="nav-link active" href="/EmployeeList">Employees List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/AddEmployee">Add Employee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/leaveRequest">Leave Request</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              href="/Profile"
              >Profile</a>
=======
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
>>>>>>> Ayush
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>


