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
                  type="text"
                  class="form-control"
                  id="employee-name"
                  placeholder="Enter employee name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-start-date" class="col-sm-2 col-form-label"
                >Leave Start Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-start-date" />
              </div>
            </div>
            <div class="form-group row">
              <label for="leave-end-date" class="col-sm-2 col-form-label"
                >Leave End Date:</label
              >
              <div class="col-sm-10">
                <input type="date" class="form-control" id="leave-end-date" />
              </div>
            </div>
            <div class="form-group row">
              <label for="reason-for-leave" class="col-sm-2 col-form-label"
                >Reason for Leave:</label
              >
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="reason-for-leave"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12 text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>