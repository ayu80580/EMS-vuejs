<template>
   
<head>
	<title>Login Page</title>
</head>
<body>
	<div class="container">
		<div class="picture"></div>
        <div class="insidebox">
           

            <div class="form-container">
               <logIn></logIn>
            </div>
		</div>
	</div>
</body>


</template>


<script>
import LogIn from './LogIn.vue';

export default{
components:{
    LogIn,
  
},


}
</script>














<style scoped>
    body {
        margin: 0;
        padding: 0;
        background-color: #f7f7f7;
        font-family: Arial, sans-serif;
    }

    .buttons{
        display: flex;
        margin: 30px;
    }

    .container {
        max-width: inherit;
background-color: #f8ceec;
background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
        display: flex;
        flex-direction: row;
        height: 100vh;
        align-items: center;
        padding: 0;
    }
    form{
        display: flex;
        flex-direction: column;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 5px;
        width: 400px;
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    label {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    input[type="text"], input[type="password"] {
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 16px;
        font-family: Arial, sans-serif;
    }

    input[type="submit"] {
        background-color: #008CBA;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
        background-color: #006080;
    }
    .insidebox{
        width: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
    }

    .picture {
        background-image: url('https://www.w3schools.com/howto/img_parallax.jpg');
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 80%;
    }
    

    @media(max-width: 768px) {
        .container {
            flex-direction: column;
            max-width: inherit;
        }

        .picture {
            width: 100%;
            height: 400px;
        }

        .form-container {
            width: 100%;
        }
    }
</style>