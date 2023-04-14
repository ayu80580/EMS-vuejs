<template>
    <dashboardNavigation></dashboardNavigation>
    <div class="mx-5 my-5">
    <table class="table table-info table-striped-columns">
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
            <leave-card :id="request.id" :name="request.user.name" :startDate="request.leave_start_date" :endDate="request.leave_end_date"
                :role="request.user.user_role.role_name"></leave-card>
        </tbody>
        <!-- {{ requests }} -->
    </table>
</div>
</template>

<script>
import axios from 'axios';
import leaveCard from './leaveCard.vue';
import dashboardNavigation from '../employeeDashboard/dashboardNavigation.vue';
export default {
    components: {
        'leave-card': leaveCard,
        dashboardNavigation
    },
    data() {
        return {
            // requests: [
                
            // ]
        }
    },
    methods:{
        
    },
    beforeMount() {
        axios
        .get("http://127.0.0.1:8000/api/activeLeaves", )
        .then((response) => {
          this.$store.state.ActiveLeaveRequest = response.data;
        })
        .catch(() => {
          console.error()
        });
    },
    computed:{
        requests() {
            return this.$store.state.ActiveLeaveRequest;
        }
    }
}
</script>