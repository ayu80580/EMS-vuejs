<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Employee Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Employee List</h3>
                    <form class="d-flex " role="search" @submit.prevent="onSearch">
                        <input class="form-control me-2" type="search" placeholder="Search Employee name"
                            aria-label="Search" v-model="input">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <!-- <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <form action="" @submit.prevent="">
                                <button class="btn btn-outline-success" type="submit">Add Employee</button>
                            </form>
                        </li>
                    </ul> -->
                </div>
            </div>
        </nav>
    </div>

    <!-- Employee Details -->
    <div class="mx-5 my-5">
        <table class="table table-info table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <!-- <th scope="col">Image</th> -->
                    <th scope="col">Name</th>
                    <th scope="col">phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>
                    <th scope="col">DOJ</th>
                    <th scope="col">Save</th>
                </tr>
            </thead>
            <tbody v-for="Employee in Employees" :key="Employee.id">

                <emp-card :id=Employee.id :name=Employee.name :phone=Employee.phone :email=Employee.email
                    :role="Employee.user_role.role_name" :status="Employee.user_status.status" :jod=Employee.joining_date>
                </emp-card>

            </tbody>
        </table>
    </div>
</template>

<script>
import EmpCard from './Cards/EmpCard.vue';
import axios from 'axios';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
export default {
    components: {
        'emp-card': EmpCard,
        dashboardNavigation
    },

    data() {
        return {
            // Employees: this.$store.state.UsersData,
        };
    },

    methods: {
        onSearch() {
            this.input = ''
        }
    },
    beforeMount() {
        axios
            .get("http://127.0.0.1:8000/api/users",)
            .then((response) => {
                this.$store.state.UsersData = response.data;
            })
            .catch(() => {
                console.error()
            });
    },
    computed: {
        Employees() {
            return this.$store.state.UsersData;
        }
    }

}
</script>

<style></style>