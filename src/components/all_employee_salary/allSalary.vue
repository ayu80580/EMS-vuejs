<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Leave Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Salary Details</h3>
                    <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                        <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="filter_by_status">
                            <option value="all">All</option>
                            <option value="1">Paid</option>
                            <option value="0">Unpaid</option>
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
    <div class="mx-5 my-5">
        <table class="table styled-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Month</th>
                    <th scope="col">Year</th>
                    <th scope="col">Leave Count</th>
                    <th scope="col">Payable Salary</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Saved Status</th>
                </tr>
            </thead>
            <tbody v-for="salary in salaries" :key="salary.id">
                <salary-card :id="salary.id" :name="salary.user.name" :role="salary.user.user_role.role_name"
                    :month="salary.month" :year="salary.year" :leave_count="salary.leave_count"
                    :payable_salary="salary.payable_salary" :status="salary.paid_status"
                    @statusChanged="statusChanged">
                </salary-card>
            </tbody>
            <!-- {{ requests }} -->
        </table>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
import salaryCard from './salaryCard.vue';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
export default {
    components: {
        'salary-card': salaryCard,
        dashboardNavigation
    },

    data() {
        return {

            filter_by_role: 'all',
            filter_by_status: 'all',
            input: '',
        }
    },
    methods: {
        ...mapMutations(['updateAllEmployeeSalary']),
        filter() {
            axios
                .post("http://127.0.0.1:8000/api/salaries/filter", {
                    filter_by_role: this.filter_by_role,
                    filter_by_status: this.filter_by_status,
                    input: this.input,
                })
                .then((response) => {
                    console.log(response.data);
                    this.updateAllEmployeeSalary(response.data);
                })
                .catch(() => {
                    console.error()
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
        salaries() {
            return this.$store.state.AllEmployeeSalary;
        }
    },
    watch:{
        filter_by_status(newValue) {
            console.log(newValue);
            this.filter();
        },
        filter_by_role() {
            this.filter();
        },
        input(newValue) {
            console.log(newValue);
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