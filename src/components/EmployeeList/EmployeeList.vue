<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Employee Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Employee List</h3>

                    <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                        <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="filter_by_status">
                            <option value="all">All</option>
                            <option value="2">Active</option>
                            <option value="1">Inactive</option>
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

    <!-- Employee Details -->
    <div class="mx-5 my-5">
        <table class="table table-light table-striped-columns">
           
            <tbody v-for="Employee in Employees" :key="Employee.id">
                <emp-card :id=Employee.id :name=Employee.name :phone=Employee.phone :email=Employee.email
                    :role="Employee.user_role.role_name" :status="Employee.user_status.status" :jod=Employee.joining_date
                    @statusChanged="statusChanged">
                </emp-card>
            </tbody>
        </table>
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
            input:'',
            filter_by_status: 'all',
            filter_by_role:'all',
            // filterByRole:'all'
        };
    },
    methods: {
        ...mapMutations(['updateUsersData']),
        filter() {
            axios
                .post('http://127.0.0.1:8000/api/users/filter', {
                    filter_by_status: this.filter_by_status,
                    filter_by_role:this.filter_by_role,
                    input:this.input,
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

<style scoped></style>