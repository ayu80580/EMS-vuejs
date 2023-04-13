import { createWebHistory,createRouter } from "vue-router";


// import testApi from './components/testApi.vue'
import EntryPage from './components/signup/EntryPage.vue'
import Dashboard from './components/employeeDashboard/Dashboard.vue'
import EmployeeList from './components/EmployeeList/EmployeeList.vue'
import AddEmployee from './components/add_employee/addEmp.vue'
import MainBody from './components/singleEmployee/MainBody.vue'
const routes = [

   
    {
        name:'EntryPage',
        path:'/',
        component: EntryPage
    },
    {
        name:'Dashboard',
        path:'/Dashboard',
        component: Dashboard
    },
    {
        name:'EmployeeList',
        path:'/EmployeeList',
        component: EmployeeList
    },
    {
        name:'AddEmployee',
        path:'/AddEmployee',
        component: AddEmployee
    },
    {
        name:'Profile',
        path:'/Profile',
        component: MainBody
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;