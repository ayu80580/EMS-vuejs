<template>
    <dashboardNavigation></dashboardNavigation>
    <!-- Employee Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Employee List</h3>

                    <form class="d-inline-flex flex-row " role="search" @submit.prevent="onSearch">
                        <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="filterByStatus">
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
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
            input:'',
            filterByStatus: 'all',
            // filterByRole:'all'
        };
    },

    methods: {
        // onSearch() {
        //     axios
        //     .post('http://127.0.0.1:8000/api/users/search', {
        //         input:this.input,
                
        //     })
        //     .then((response)=>{
        //         console.log(response);
        //         this.$store.state.UsersData = response.data;
        //     })
        //     .catch(()=>{

        //     });
            
        // }
    },
    beforeMount() {
        axios
            .get("http://127.0.0.1:8000/api/users",)
            .then((response) => {
                console.log(response);
                this.$store.state.UsersData = response.data;
            })
            .catch(() => {
                console.error()
            });
    },
    // beforeUpdate() {

    // },
    computed: {
        Employees() {
            return this.$store.state.UsersData;
        }
    },
    watch: {
        filterByStatus(newValue) {
            axios
                .post('http://127.0.0.1:8000/api/users/filterbystatus', {
                    filterBy: newValue,
                    // filterByRole:this.filterByRole,
                })
                .then((response) => {
                    console.log(response);
                    this.$store.state.UsersData = response.data;
                })
                .catch(() => {
                    console.error();
                });

        },
        input(newValue) {
            axios
            .post('http://127.0.0.1:8000/api/users/search', {
                input:newValue,
                
            })
            .then((response)=>{
                console.log(response);
                this.$store.state.UsersData = response.data;
            })
            .catch(()=>{

            });
            
        }

    }

}
</script>

<style></style>