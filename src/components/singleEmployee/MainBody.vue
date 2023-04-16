<template>
    <div class="mainbody">

        <nav-bar ></nav-bar>
        <home-page></home-page>
    
    </div>

</template>

<script>
import NavBar from '../layout/NavBar.vue'
import  HomePage from './HomePage.vue'
export default{
  components: { NavBar,HomePage },
}

</script>

<style scoped>
*{
   padding: 0;
   margin: 0;
}

html, body {margin: 0; height: 100%; overflow-x: hidden}
.mainbody{
    padding: 0px;
    margin: 0;
    margin-left: 10px;
    box-sizing: border-box;
    list-style: none;
    width: 100%;
    height:100vh;
    display: flex;
    text-align: center;
}

</style>