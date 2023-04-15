// import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import createPersistedState from 'vuex-persistedstate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router';
import { createStore } from 'vuex';

const store = createStore({

  plugins: [createPersistedState({
    paths: ['EmployeeData' , 'LatestSalary' , 'Tax' , 'Leave', 'data'],
  })],
  
    state(){
        return{
        EmployeeData: [],
        LatestSalary: [],
        Tax: [],
        UsersData:[],
        ActiveLeaveRequest:[],
        Leave :[],
        data: [],
        role:'',
        status:''
      
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
        }
      },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

