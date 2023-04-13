import { createWebHistory,createRouter } from "vue-router";


// import testApi from './components/testApi.vue'
import EntryPage from './components/signup/EntryPage.vue'
import Dashboard from './components/employeeDashboard/Dashboard.vue'
import EmployeeList from './components/EmployeeList/EmployeeList.vue'
import AddEmployee from './components/add_employee/addEmp.vue'
import MainBody from './components/singleEmployee/MainBody.vue'
import LeaveHistory from './components/leaves/LeaveHistory.vue'
import SalaryHistory from './components/salary/SalaryHistory.vue'
import LeaveRequest from './components/LeaveRequest/leaveRequest.vue'

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
      name:'LeaveRequest',
      path:'/LeaveRequest',
      component: LeaveRequest
  },

   
    {
        name:'Profile',
        path: '/Profile',
        component: MainBody,
        children: [
          {
            path: 'leave',
            component: LeaveHistory
          },
          {
            path: 'salaryHistory',
            component: SalaryHistory
          }
        ]
      }

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;