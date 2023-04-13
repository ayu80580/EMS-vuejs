<template>
    <tr>

        <td>{{emp_id}}</td>
        <td>{{name}}</td>
        <td>{{role}}</td>
        <td>{{email}}</td>
        <td>{{address}}</td>
    </tr>
    
</template>

<script>

export default{
    props:['name','emp_id','role','email','address']
}
</script>