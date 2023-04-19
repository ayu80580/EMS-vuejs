import { createWebHistory, createRouter } from "vue-router";

import store from './main'
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
import allSalary from './components/all_employee_salary/allSalary.vue'
import NewPro from './components/profile/NewPro.vue';
import ToDelete from './components/singleEmployee/ToDelete.vue'
import UpdateProfile from './components/profile/UpdateProfile.vue';
const routes = [

  {
    path:'/update',
    component:UpdateProfile
  },
  {
    name: 'NewDashboard',
    path: '/Dashboard',
    component: newDash,
    meta: { requiresAuth: true }
  },
  {
    name: 'ErrorPage',
    path: '/error',
    component: errorPage
  },
  {
    name: 'EntryPage',
    path: '/',
    component: EntryPage
  },
  {
    name: 'EmployeeList',
    path: '/EmployeeList',
    component: EmployeeList,
    beforeEnter: (_, _1, next) => {
      if ((store.state.AuthRole == "Admin" || store.state.AuthRole == "Manager" ) && store.state.auth) {
        next();
      } else {
        next("/Dashboard");
      }
    },
  },
  {
    name: 'AddEmployee',
    path: '/AddEmployee',
    component: AddEmployee,
    beforeEnter: (_, _1, next) => {
      if (store.state.AuthRole == "Admin" && store.state.auth) {
        next();
      } else {
        next("/Dashboard");
      }
    },
  },
  {
    name: 'LeaveRequest',
    path: '/LeaveRequest',
    component: LeaveRequest,
    beforeEnter: (_, _1, next) => {
      if (store.state.AuthRole == "Admin" && store.state.auth) {
        next();
      } else {
        next("/Dashboard");
      }
    },
  },




  {
    name: 'AllSalary',
    path: '/all',
    component: allSalary,
    beforeEnter: (_, _1, next) => {
      if (store.state.AuthRole == "Admin" && store.state.auth) {
        next();
      } else {
        next("/Dashboard");
      }
    },
    
  },
  {
    path: '/newpro',
    component: NewPro,
  },
  {
    path: '/demodelete',
    component: ToDelete
  }
  ,
  {
    path: '/mainbody',
    component: MainBody
  },


  {
    name: 'Profile',
    path: '/User/:id',
    component: MainBody,
    props: { params: true },

    children: [
      {
        path: 'profile',
        component: EmpTable,

      },
      {
        path: 'leave',
        component: LeaveHistory
      },
      {
        path: 'salaryHistory',
        component: SalaryHistory
      },

    ]
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});



export default router;