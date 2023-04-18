<template>
  <div class="mainbox">
<div class="profilepic">
<!-- <img src="../../utils/images/img2.jpeg" alt="" srcset=""> -->

</div>

<router-view></router-view>
</div>
  
</template>



<style scoped>
.mainbox {
  width: 100%;
  margin-right: 20px;
  padding: 20px;
  margin-left: 270px;
}

.profilepic {
  /* border: 2px solid black; */
  display: inline-block;
}

img {
  border-radius: 50%;
  height: 200px;
  width: 200px;
}
</style>
