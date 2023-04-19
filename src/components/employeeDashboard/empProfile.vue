<template>
    <aside class="profile-card" style=" position: absolute;
    right: -121px;
    top: 48px;">
  <header>
    <!-- here’s the avatar -->
    <a target="_self" >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////p6env7+/h4eGoqKi3t7fz8/P7+/vb29ukpKTm5uZzc3Nra2vMzMxaWlqQkJCAgICJiYlhYWFUVFQTExPBwcEZGRmbm5stLS2urq5OTk6srKw7OzsfHx8NDQ1JSUkqKirHx8d5eXlCQkKVlZU0NDQ+Pj5ubm69vb0sLCzT09P6JELwAAAHV0lEQVR4nO2daXeyTAyGx6KIuC/V1r0ufdr6///fK/W1LiBCcicjc7y+e5zrAEPIZDKmpEJ153fW7dn8dWEWo4/P/nrr76o6f23k/6IWNj9MEvNmpSz/98KGgd9MlDvRGAayQxA1XN3TO9AcSg5CztDbvmby+6Uj91BKGdYb2fV+WXtCI5ExrOb1i+jKXEcRwy3BL+JNYjACht8LouD+/dHCDwduGLTJfhEN9Hjghi2W357RDjwisGGHK2jgTyPUMFgCBI1pI8cENXyZQwT3Ew7y3Qg0rIH8IoAROc6QPcdcUIONC2a4ggoaA5tSUYY7sCBOEWRYhgvCnkWMYVVA0BhMJI4xfBcxfIeMDWLIC0Vv00QMDmH4JiRoTAUwOoAh8k1/DWC2ARiiYrUkPh/BsCsoaEzHvqHkPRpRt274KWy4tG04FhY0xrdsKC5o2CPk/ZyaN8wD86XIMwwUBLkXkfdzuWjmHN5F5BmqCJq5PUNfx9CsrBkulQxZ6UWOocSHfTKc7CLHEJHgzkZoyXCkZsj5xGAYSsfc57xYMdR5GR6YWjFcKhoyZlO6oU7EdsSGIXad4h70dQy6ocZnxQl6bEo3HKgaflkw1HsbRtDz32RDT1XQGHJ9H9lQ830fQc65kQ2/lQ3JX1Bkw4qyITnlRjbsKRuSPy/IhpTqQw5ddcO+suHaeUPyamlhDPtPw6dhbrJtNMCh/xxqvy3IxcNkQ9nF7Tj678NQ2VA/ppFf/L1EPy7VTdMwShXJhi/KhuScMNlQN5nISCfSfyldZnLJPwuGuq+LngVD3cmUXlVDN9RbH42gLz4xFgToW9TywyhWYBhqRqaMLW0Mw6GiIWMvNMNQ843I2NHOWceXKmCPQ/78ZRrq3aacDfusiiE1Q9YgOT/WynvTAxquodb3BavWm1ebqJNw48wzXEOdRUTebktmAa7GYv6AN0SmocZFZG6Y5VbCyz+J3L3rXMO6uCGjaA9iKF5kyt74xN/ZlaOTEAFeFTvGUDZxym/nAth/KBm7seI1mGEpuRsbAsAGS4ihXHiK6AAC2cst9aEI6eOG2Y8vU/KNacUD6hqxFhAkV9Bcgur8gV/Wh7QbKAG7t0zAgryPwjNwHXiWjymI7KKETC7iBKGdsL5gguTCiwSg3cxQ9RmIhh9/YDvSYaJwbPNEcM+96pLtNwE3+YR3huSGN9A7NALf3bPGaam0YTf6iCHRoZV+GccCoxHpQevRlodl2uwKdUqu549TpVoli3W7ruert+lwk4Y3EexYHoRZ0xtLbg+aNGS7ztc693ONH2/4+fMc8ZMDym9pqzf9qaxeSeVshFKwm3Y3MblJz1c4GUHH8IBXbvnjSiWsTMf+rq50uEVJ09AWT8Pi8zQsPk/D4vM0LD5Pw+LzNCw+T8Pi8zQsPk9DJoFXa638sNPrdhv99mCy3PzbTAbtfrOx7va24fdqV64W8oTHoNyabpuDrNtM3ydf22lLKOuGNvRWlS65+HvR7o5b6BwV0LDs95aIPYnzSWcIzPFjDINaiN7m1Q9rmAcUYFgO0dVCRwYh4GArpmH1W6Ki7ZyGz3wwOYbeWKc75GBspRd0dSx1byYxGZOvJNFwqN1EaT/1EOtpKYaeXiPvS3qUoCC/4U7/8p0Y5K+Xymvo6zb8iPOetyIln6F266Rk8tV/5zGsaPaJSCVP06jshlqHWWQje/VGVsOW7efvmlnWxlHZDD299gnZaWYLAjIZap4RkIdMU04GQ1Y5pSyfGepV7hvaCmCycf8y3jN8ebQZ5prNve+OO4bavQMp3HlxpBvidlBIkr4FLM3Qe/Q79Mgs7U5NMcQfRC1HSj7ntmERHsET3/kNdY8g4XMzGL9lqN1El8+t5gs3DLU7PSO4MaUmGxZR8FZjvkRDm5kYDolbh5MMpdPYciTtzEww1D6bA0lCH4244WNkm6jEN/fFDLVPyEETO3Hn2lD7kCM814urV4bBwyQMyXykG8a3thSPfprhY2csshLeNtTulS9F+aZh8R/CAz+3DLWPHZGjl2zoyj0asUs0nNseFpCfJEM35tEjb3FD7RM5pKnGDHUPTpWneW1YpNRhNmpXhkVJ/mZncmm4sj0eAXYXhjPbwxGgfW7o0sv+RPnMULMIT4/myVD3yBg9vD/D4qXws9E5Gmofv6XG4mj4WNVOSFr/G7o5z0Q0D4ba58BrEvwaTm0PQ5Dhr6FrXxXnNCJDZ2fSXyJDF4PuE7W9YZEX0+4T7g1d/Kw40S4Ztx9D81oyxV9OS8cz7oZsB1bGrTRpnIpxZ7Eima5xYU00jaaRPQjHPq5fQWPkjoh5FFxZ9U3DdceF8/fpu3nEPVtI+sbVXOmRnilWSX5+fCN/gKFdXkzpcffeIZjtv/ErtgchyjjKJtoehCjOZ4R919ctBsfVNVcjt1FwXCF1dG1mcVoDLnk/tkcjwKx6UTHkXvB23Mv2V9dWdisEb/816zmrL633XKkwHZ03I7qs1S+Pu5mbHT4mo0336mCQ/wB74oWZR5lE5gAAAABJRU5ErkJggg==" >
    </a>


    <h1>
        {{empData.name}}
          </h1>

    
    <h2>
        {{ empData.email }}
          </h2>

    <p>City: {{empData.city}}</p>

  </header>


  <div class="profile-bio">
    <p>
        {{empData.Bio}}
    </p>

  </div>

 
</aside>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed:{
    empData() {
      return this.$store.state.EmployeeData;
    }
  }
}
</script>




<style scoped>
html {
  height: 100%;
}

h1,
h2 {
  font-weight: 500;
  margin: 0px 0px 5px 0px;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 16px;
}

p {
  margin: 0px;
}

.profile-card {
  background: #FFB300;
  width: 56px;
  height: 56px;
  /* position: absolute;
  left: 50%;
  top: 50%; */
  z-index: 2;
  overflow: hidden;
  opacity: 0;
  margin-top: 70px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  /* -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards; */
  animation: init 0.1s 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 0.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;
}

.profile-card header {
  width: 179px;
  height: 280px;
  padding: 40px 20px 30px 20px;
  display: inline-block;
  float: left;
  border-right: 2px dashed #EEEEEE;
  background: #FFFFFF;
  color: #000000;
  margin-top: 50px;
  opacity: 0;
  text-align: center;
  -webkit-animation: moveIn 1s 3.1s ease forwards;
  animation: moveIn 1s 3.1s ease forwards;
}

.profile-card header h1 {
  color: #506ebb
}

.profile-card header a {
  display: inline-block;
  text-align: center;
  position: relative;
  margin: 25px 30px;
}

.profile-card header a:after {
  position: absolute;
  content: "";
  bottom: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  border: 4px solid #FFFFFF;
  -webkit-transform: scale(0);
  transform: scale(0);
  background: -webkit-linear-gradient(top, #2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
  background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  -webkit-animation: scaleIn 0.3s 3.5s ease forwards;
  animation: scaleIn 0.3s 3.5s ease forwards;
}

.profile-card header a > img {
  width: 120px;
  max-width: 100%;
  -webkit-border-radius: 50%;
  border-radius: 21%;
  -webkit-transition: -webkit-box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
  -webkit-box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
}

.profile-card header a:hover > img {
  -webkit-box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
}

.profile-card .profile-bio {
  width: 175px;
  height: 180px;
  display: inline-block;
  float: right;
  padding: 50px 20px 30px 20px;
  background: #FFFFFF;
  color: #333333;
  margin-top: 50px;
  text-align: center;
  opacity: 0;
  -webkit-animation: moveIn 1s 3.1s ease forwards;
  animation: moveIn 1s 3.1s ease forwards;
}







@-webkit-keyframes init {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 56px;
    height: 56px;
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes init {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 56px;
    height: 56px;
    margin-top: 0px;
    opacity: 1;
  }
}

@-webkit-keyframes puff {
  0% {
    top: 100%;
    height: 0px;
    padding: 0px;
  }
  100% {
    top: 50%;
    height: 100%;
    padding: 0px 100%;
  }
}

@keyframes puff {
  0% {
    top: 100%;
    height: 0px;
    padding: 0px;
  }
  100% {
    top: 50%;
    height: 100%;
    padding: 0px 100%;
  }
}

@-webkit-keyframes borderRadius {
  0% {
    -webkit-border-radius: 50%;
  }
  100% {
    -webkit-border-radius: 0px;
  }
}

@keyframes borderRadius {
  0% {
    -webkit-border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@-webkit-keyframes moveDown {
  0% {
    top: 50%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 100%;
  }
}

@keyframes moveDown {
  0% {
    top: 50%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 100%;
  }
}

@-webkit-keyframes moveUp {
  0% {
    background: #FFB300;
    top: 100%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 50%;
    background: #E0E0E0;
  }
}

@keyframes moveUp {
  0% {
    background: #FFB300;
    top: 100%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 50%;
    background: #E0E0E0;
  }
}

@-webkit-keyframes materia {
  0% {
    background: #E0E0E0;
  }
  50% {
    -webkit-border-radius: 4px;
  }
  100% {
    width: 440px;
    height: 280px;
    background: #FFFFFF;
    -webkit-border-radius: 4px;
  }
}

@keyframes materia {
  0% {
    background: #E0E0E0;
  }
  50% {
    border-radius: 4px;
  }
  100% {
    width: 440px;
    height: 280px;
    background: #FFFFFF;
    border-radius: 4px;
  }
}

@-webkit-keyframes moveIn {
  0% {
    margin-top: 50px;
    opacity: 0;
  }
  100% {
    opacity: 1;
    margin-top: -20px;
  }
}

@keyframes moveIn {
  0% {
    margin-top: 50px;
    opacity: 0;
  }
  100% {
    opacity: 1;
    margin-top: -20px;
  }
}

@-webkit-keyframes scaleIn {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes ripple {
  0% {
    transform: scale3d(0, 0, 0);
  }
  50%,
  100% {
    -webkit-transform: scale3d(1, 1, 1);
  }
  100% {
    opacity: 0;
  }
}

@keyframes ripple {
  0% {
    transform: scale3d(0, 0, 0);
  }
  50%,
  100% {
    transform: scale3d(1, 1, 1);
  }
  100% {
    opacity: 0;
  }
}

@media screen and (min-aspect-ratio: 4/3) {
  body {
    background-size: cover;
  }
  body:before {
    width: 0px;
  }
}
@keyframes puff {
  0% {
    top: 100%;
    width: 0px;
    padding-bottom: 0px;
  }
  100% {
    top: 50%;
    width: 100%;
    padding-bottom: 100%;
  }
}

@keyframes materia {
  0% {
    background: #E0E0E0;
  }
  50% {
    border-radius: 4px;
  }
  100% {
    width: 280px;
    height: 440px;
    background: #FFFFFF;
    border-radius: 4px;
  }
}

.profile-card header {
  width: auto;
  height: auto;
  padding: 30px 20px;
  display: block;
  float: none;
  border-right: none;
}

.profile-card .profile-bio {
  width: auto;
  height: auto;
  padding: 15px 20px 30px 20px;
  display: block;
  float: none;
}

.profile-social-links {
  width: 100%;
  display: block;
  float: none;
}

</style>