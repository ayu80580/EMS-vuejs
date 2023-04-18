// import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import createPersistedState from 'vuex-persistedstate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router';
import { createStore } from 'vuex';

const store = createStore({

  plugins: [createPersistedState({
    paths: ['EmployeeData' , 'LatestSalary' , 'Tax' , 'Leave', 'data','leaves','payment','auth', 'LeaveRequest','UsersData','role','AuthRole'],
  })],
  
    state(){
        return{
        EmployeeData: [],
        LatestSalary: [],
        Tax: [],
        UsersData:[],
        LeaveRequest:[],
        Leave :[],
        leaves:[],
        payment:[],
        data: [],
        role:'',
        AuthRole:'',
        status:'',
        auth:0
      
        };
    },
    mutations: {
      
        updateLatestSalary(state, payload) {
          state.LatestSalary = payload;
        },
        updateTax(state, payload) {
            state.Tax= payload;
        },
        updateLeave(state, payload) {
          state.Leave= payload;
        },
        updateEmpTable(state, payload) {
          state.data= payload;
        },
        updateLeaves(state,payload){
          state.leaves=payload;
        },
        updatePayment(state,payload){
          state.payment=payload;
        },
        updateAuth(state,payload){
          state.auth=payload;
        },
        updateLeaveRequest(state,payload){
          state.LeaveRequest=payload;
        },
        updateUsersData(state,payload){
          state.UsersData=payload;
        },
      },
});
const app = createApp(App);
app.use(store);
app.use(VueSweetalert2);
app.use(router);
app.mount('#app');
export default store

