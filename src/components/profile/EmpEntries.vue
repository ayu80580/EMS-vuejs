<template>
    <tr>
        <th>Employee Id</th>
        <td>{{emp_id}}</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>{{name}}</td>
    </tr>
    <tr>
        <th>Role</th>
        <td>{{role}}</td>
    </tr>
    <tr>
        <th>Email</th>
        <td>{{email}}</td>
    </tr>
    <tr>
        <th>Status</th>
        <td>{{status==1?'Active':'Inactive'}}</td>
    </tr>
    
    
</template>

<script>

export default{
    props:['name','emp_id','role','email','status']
}
</script>