<template>
   <!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>

  <!-- Navigation section -->
  <h>Dashboard</h>
  <div class="sidebar">
    <a class="active" href="#">Button 1</a>
    <a href="#">Button 2</a>
    <a href="#">Button 3</a>
  </div>
  
  <!-- Divider -->
  <div class="divider"></div>
  
  <!-- Login message -->
  <div class="card">
<div class="card profile-card">
  <div class="card-body">
    <div class="row">
      <div class="col-md-4">
        <img src="@/assets/logo.png" alt="Ayush Gupta" class="profile-image rounded-circle img-fluid">
      </div>
      <div class="col-md-8">
        <h3 class="profile-name">Ayush Gupta</h3>
        <h5 class="profile-designation">Trainee Software Engineer</h5>
        <p class="profile-description">Your short bio or description goes here. You can use this space to highlight your skills, experience, or achievements.</p>
        <ul class="profile-details list-unstyled">
          <li><i class="fas fa-map-marker-alt"></i>Chennai</li>
          <li><i class="fas fa-envelope"></i> <a href="mailto:ayush@recruitcrm.io">ayush@recruitcrm.io</a></li>
          <li><i class="fas fa-link"></i> <a href="www.google.com">www.google.com</a></li>
        </ul>
        <div class="profile-social-icons">
          <a href="your-social-media-profile-link"><i class="fab fa-twitter"></i></a>
          <a href="your-social-media-profile-link"><i class="fab fa-facebook"></i></a>
          <a href="your-social-media-profile-link"><i class="fab fa-linkedin"></i></a>
          <a href="your-social-media-profile-link"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>









  
      <div class="container-fluid mt-5">
        <div class="row row-cols-1 row-cols-md-4 g-4">


          <div class="card">
          <div class="card-body">
           <h5 class="card-title">Leave Balance</h5>
           <div class="row">
         <div class="col-sm-6">
          <div class="card bg-primary">
            <div class="card-body text-white">
              <h6 class="card-title">Total Leaves</h6>
              <p>10</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card bg-success">
            <div class="card-body text-white">
              <h6 class="card-title">Remaining</h6>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


   
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Payroll Management</h5>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Salary</h6>
              <p class="card-text">$5000</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Tax and Deductions</h6>
              <p class="card-text">$1000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Increment</h6>
              <p class="card-text">$500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

            


          <div class="col">
            <div class="card">
              <div class="card-body">
    <h5 class="card-title">Employee Information</h5>
    <div class="row">
      <div class="col-sm-4">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <h6 class="card-title">Employee ID</h6>
            <p class="card-text">12345</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <h6 class="card-title">Employee Status</h6>
            <p class="card-text">Active</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <h6 class="card-title">Employee Role</h6>
            <p class="card-text">Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 


<div class="col">
            <div class="card m-5">
              <div class="card-body">
                <div class="cardLeave">
    <h5 class="card-title">Leave Request</h5>
    <p class="card-text">You have requested a leave from April 1 to April 5.</p>
    <div class="button-group">
      <button type="button" class="btn btn-primary">Leave Request</button>
      <button type="button" class="btn btn-success">Leave Granted</button>
    </div>
  </div>
</div>
</div>
</div>
 </div>

        </div>


   
  
  <!-- Logout button -->
  <div class="logout">
    <button>Logout</button>
  </div>

</body>
</html>

  </template>
  
  <script>
 import 'bootstrap/dist/css/bootstrap.css'; 
  export default {
 /* eslint-disable vue/multi-word-component-names */  
 
    data() {
      return {
        employee: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          role: 'Developer'
        }
      }
    },
    methods: {
      logout() {
        // Perform logout operation here
        console.log('Logging out...')
      }
    }
  }
  </script>

<style>
/* Styles for navigation section */
.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.sidebar a:hover {
  background-color: #ddd;
}

.active {
  background-color: #4CAF50;
  color: white;
}

/* Styles for divider */
.divider {
  height: 100%;
  border-right: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 200px;
}

/* Styles for login message */
.login-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
}

/* Styles for logout button */
.logout {
  position: absolute;
  top: 10px;
  right: 10px;
}

.payroll{
  background-color: #7cffcb;
background-image:linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
 }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 14px;
    color: #555;
  }
  
  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }

  /*profile style*/
  .profile-card {
  border: none;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.profile-name {
  font-size: 28px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 5px;
}

.profile-designation {
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
}

.profile-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.profile-details li {
  font-size: 16px;
  margin-bottom: 10px;
}

.profile-details li i {
  margin-right: 10px;
  font-size: 20px;
  color: #999;
}

.profile-details li a {
  color: #333;
}

.profile-social-icons a {
  display: inline-block;
  margin-right: 10px;
  color: #333;
  transition: all 0.3s ease-in-out;
}

.profile-social-icons a:hover {
  transform: translateY(-3px);
}


/*leave request */
.cardLeave {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.btn {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>
  