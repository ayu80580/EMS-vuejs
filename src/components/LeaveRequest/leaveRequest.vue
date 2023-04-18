<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Leave Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Leave Details</h3>

                    <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                        <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="filter_by_status">
                            <option value="all">All</option>
                            <option value="2">Pending</option>
                            <option value="1">Approved</option>
                            <option value="0">Rejected</option>
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
        <table class="table table-light table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">startDate</th>
                    <th scope="col">endDate</th>
                    <th scope="col">Role</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Saved Status</th>
                </tr>
            </thead>
            <tbody v-for="request in requests" :key="request.id">
                <leave-card :id="request.id" :name="request.user.name" :startDate="request.leave_start_date"
                    :endDate="request.leave_end_date" :status="request.approval_status"
                    :role="request.user.user_role.role_name"
                    @statusChanged="statusChanged"></leave-card>
            </tbody>
            <!-- {{ requests }} -->
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import leaveCard from './leaveCard.vue';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
import { mapMutations } from 'vuex';
export default {
    components: {
        'leave-card': leaveCard,
        dashboardNavigation
    },
    data() {
        return {
            input:'',
            filter_by_status: 'all',
            filter_by_role:'all',
        }
    },
    methods: {
        ...mapMutations(['updateLeaveRequest']),
        filter() {
            axios
                .post("http://127.0.0.1:8000/api/leaves/filter",{
                    filter_by_status:this.filter_by_status,
                    filter_by_role:this.filter_by_role,
                    input:this.input,
                })
                .then((response) => {
                    console.log(response);
                    this.updateLeaveRequest(response.data);
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
        requests() {
            return this.$store.state.LeaveRequest;
        }
    },
    watch: {
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