// import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router';

import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
        EmployeeData: [],
        LatestSalary: [],
        Tax: []
        };
    },
    mutations: {
        updateLatestSalary(state, payload) {
          state.LatestSalary = payload;
        },
        updateTax(state, payload) {
            state.Tax= payload;
          }
      }
});

const app = createApp(App);
app.use(store);
app.use(router);


app.mount('#app');

