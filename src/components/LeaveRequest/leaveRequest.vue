<template>
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
            <leave-card :id="request.id" :name="request.name" :startDate="request.startDate" :endDate="request.endDate"
                :role="request.role"></leave-card>
        </tbody>
    </table>
</div>
</template>

<script>
import leaveCard from './leaveCard.vue';
export default {
    components: {
        'leave-card': leaveCard,
    },
    data() {
        return {
            requests: [
                {
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },{
                    id: 1,
                    name:'Aniket Kumar',
                    startDate: '2022/12/01',
                    endDate: '2022/12/05',
                    role: 'Employee',
                },

            ]
        }
    }
}
</script>