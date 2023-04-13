<template>
    <h1>Connect VueJS with Laravel</h1>
    
   
        <div v-for="({id , name , email } , i) in userData"
        :key="id">
    <h2>
        {{ ++i }}
        name: {{ name }}<div></div>
        Email: {{ email}}
    </h2>

</div>
  
</template>

<script>
import axios from 'axios';
export default{

    data(){
        return{
            userData : []
        }
    },
mounted(){
    this.getUserData();
},
methods:{
    getUserData(){
        axios.get("http://127.0.0.1:8000/api/user").then(res => {
            console.log(res);
            this.userData = res.data;
        });
    }
}
}
</script>
