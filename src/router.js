import { createWebHistory,createRouter } from "vue-router";


// import testApi from './components/testApi.vue'
import EntryPage from './components/signup/EntryPage.vue'
import EmployeeList from './components/EmployeeList/EmployeeList.vue'
import AddEmployee from './components/add_employee/addEmp.vue'
import MainBody from './components/singleEmployee/MainBody.vue'
import LeaveHistory from './components/leaves/LeaveHistory.vue'
import SalaryHistory from './components/salary/SalaryHistory.vue'
import LeaveRequest from './components/LeaveRequest/leaveRequest.vue'
import EmpTable from './components/profile/EmpTable.vue'
import newDash from './components/employeeDashboard/newDash.vue';
import errorPage from './components/signup/errorPage.vue'


const routes = [

  {
    name:'NewDashboard',
    path:'/Dashboard',
    component: newDash
},
{
  name:'ErrorPage',
  path:'/error',
  component: errorPage
},
    {
        name:'EntryPage',
        path:'/',
        component: EntryPage
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
        path: '/User',
        component: MainBody,
        
        children: [
          {
            path: 'profile/:id',
            props:{params:true},
            component: EmpTable,
            
          },
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