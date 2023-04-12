<template>
    <!-- Employee Details Heading -->
    <div class="mx-5">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <h3 class="ml-2">Employee List</h3>
                    <a href="/Dashboard">Home</a>
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
                    <th  scope="col">#</th>
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
                    :role="Employee.role" :status=Employee.status :jod=Employee.jod>
                </emp-card>
            </tbody>
        </table>
    </div>
</template>

<script>
import EmpCard from './Cards/EmpCard.vue';
export default {
    components: {
        'emp-card': EmpCard
    },

    data() {
        return {
            input: '',
            Employees: [
                {
                    id: 1,
                    image: 'https://',
                    name: 'Aniket Kumar',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Manager',
                    status: 'active',
                    jod: '2022/12/18'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'inactive',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'inactive',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'inactive',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                },
                {
                    id: 2,
                    image: 'https://',
                    name: 'Rishav',
                    phone: '6205312978',
                    email: 'aniket@recruitcrm.io',
                    role: 'Employee',
                    status: 'active',
                    jod: '2023/06/02'
                }
            ]
        };
    },

    methods: {
        onSearch() {
            this.input = ''
        },
    }
}
</script>

<style></style>