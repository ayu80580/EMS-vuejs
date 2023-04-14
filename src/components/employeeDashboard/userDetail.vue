<template>
    <div class="card m-5">
        <div class="card profile-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img
                  :src="this.$store.state.EmployeeData.image_path"
                  alt="Ayush Gupta"
                  class="profile-image rounded-circle img-fluid"
                />
              </div>
              <div class="col-md-6">
                <h3 class="profile-name">{{ this.$store.state.EmployeeData.name}}</h3>
                <h2>{{ this.$store.state.EmployeeData }}</h2>
                <h5 class="profile-designation">Trainee Software Engineer</h5>
                <p class="profile-description">
                  Your short bio or description goes here. You can use this
                  space to highlight your skills, experience, or achievements.
                </p>
                <ul class="profile-details list-unstyled">
                  <li><i class="fas fa-map-marker-alt"></i>Chennai</li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:ayush@recruitcrm.io">{{ this.$store.state.EmployeeData.email }}</a>
                  </li>
                  <li>
                    <i class="fas fa-link"></i>
                    <a href="www.google.com">www.google.com</a>
                  </li>
                </ul>
                <div class="profile-social-icons">
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-facebook"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                  <a href="your-social-media-profile-link"
                    ><i class="fab fa-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>