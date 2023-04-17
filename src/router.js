import { createWebHistory,createRouter } from "vue-router";

// import store from './main'
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
import updateProfile from './components/profile/updateProfile.vue'


const routes = [

  {
    name:'NewDashboard',
    path:'/Dashboard',
    component: newDash,
    meta: { requiresAuth: true }
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
    name:'updateProfile',
    path:'/update',
    component: updateProfile,
    // meta: { requiresAuth: true }
},


   
    {
        name:'Profile',
        path: '/User/:id',
        component: MainBody,
        props:{params:true},
        
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
          }
        ]
      }

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

// router.beforeEach((to ) => {
//   const auth=store.state.auth;
//   const isAuthenticated = !!localStorage.getItem('access_token');
//   console.log(isAuthenticated);
//   if (to.path !== "/"  && auth==0) {
//     router.push('/');
//   }
//   // else if(from != to  && !isAuthenticated){
//   //   router.push('/error');
//   // }
// });

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('access_token');

//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     // Redirect to login page if the route requires authentication and user is not authenticated
//     next({ path: '/error' });
//   } else if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
//     // Redirect to home page if the route requires guest (not authenticated) access and user is authenticated
//     next({ path: '/' });
//   } else {
//     next();
//   }
// });





export default router;