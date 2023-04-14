<template>
   

        <tr >
            <td>{{month }}</td>
            <td>{{ salary }}</td>
            <td>{{status==1?'Paid':'Pending'}}</td>
        </tr>
</template>

<script>


export default{
    props:['month','salary','status'],
    data(){
        return{

        }
    }
}
</script>