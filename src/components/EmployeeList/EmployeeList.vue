<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Employee Details Heading -->
    <div > 
        <div class="mx-5">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <h3 class="ml-2">Employee List</h3>

                        <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                            <select class="form-select mb-3" aria-label=".form-select-lg example"
                                v-model="filter_by_status">
                                <option value="all">All</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </form>
                        <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                            <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="filter_by_role">
                                <option value="all">All</option>
                                <option value="Manager">Manager</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </form>
                        <form class="d-flex " role="search" @submit.prevent="onSearch">
                            <input class="form-control me-2" type="search" placeholder="Search Employee name"
                                aria-label="Search" v-model="input">
                        </form>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Employee Details -->
        <div class="mx-5 my-5">
            <table class="table  styled-table">
                <thead>
                    <tr>
                        <th scope="col">Emp Id.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Joining Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Save</th>
                    </tr>
                </thead>
                <tbody v-for="Employee in Employees" :key="Employee.id">
                    <emp-card :id=Employee.id :name=Employee.name :phone=Employee.phone :email=Employee.email
                        :role="Employee.user_role.role_name" :status="Employee.user_status.status"
                        :jod=Employee.joining_date @statusChanged="statusChanged">
                    </emp-card>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import EmpCard from './Cards/EmpCard.vue';
import axios from 'axios';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
import { mapMutations } from 'vuex';
export default {
    components: {
        'emp-card': EmpCard,
        dashboardNavigation
    },

    data() {
        return {
            input: '',
            filter_by_status: 'all',
            filter_by_role: 'all',
            // filterByRole:'all'
        };
    },
    methods: {
        ...mapMutations(['updateUsersData']),
        filter() {
            axios
                .post('http://127.0.0.1:8000/api/users/filter', {
                    filter_by_status: this.filter_by_status,
                    filter_by_role: this.filter_by_role,
                    input: this.input,
                    // filterByRole:this.filterByRole,
                })
                .then((response) => {
                    console.log(response);
                    this.updateUsersData(response.data);

                })
                .catch(() => {
                    console.error();
                });
        },
        statusChanged() {
            this.filter();
        }
    },
    beforeMount() {
        this.filter();
    },
    computed: {
        Employees() {
            return this.$store.state.UsersData;
        }
    },
    watch: {
        filter_by_status() {
            this.filter();
        },
        filter_by_role() {
            console.log(this.filter_by_role);
            this.filter();
        },
        input() {
            this.filter();
        }

    }

}
</script>

<style scoped>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}


</style>