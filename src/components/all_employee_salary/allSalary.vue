<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Leave Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Employee Salary Details</h3>
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
                            <option value="2">Manager</option>
                            <option value="3">Employee</option>
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
        <table class="table table-light table-striped-columns">
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
            <tbody v-for="salary in salaries" :key="salary.id" >
                <salary-card
                :id="salary.id"
                :name="salary.user.name"
                :role="salary.user.user_role.role_name"
                :month="salary.month"
                :year="salary.year"
                :leave_count="salary.leave_count"
                :payable_salary="salary.payable_salary"
                :status="salary.paid_status"
                >
                </salary-card>
            </tbody>
            <!-- {{ requests }} -->
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import salaryCard from './salaryCard.vue';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
    export default {
        components:{
            'salary-card':salaryCard,
            dashboardNavigation
        },

        data() {
            return {
                salary:[
                    
                ]
            }
        },
        methods:{
            filter() {
            axios
                .get("http://127.0.0.1:8000/api/salaries")
                .then((response) => {
                    console.log(response);
                    this.salary = response.data;
                })
                .catch(() => {
                    console.error()
                });
        },
        
        },
        beforeMount() {
            this.filter();    
        },
        computed:{
            salaries() {
                return this.salary;
            }
        }
    }
</script>
<style scoped>
    
</style>