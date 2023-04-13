<template>
    <tr>
        <td>{{id}}</td>
        <td>{{applied_on}}</td>
        <td>{{ start_date }}</td>
        <td>{{end_date}}</td>
        <td>{{leave_count}}</td>
        <td>{{ approval_status }}</td>
      </tr>
</template>

<script>
export default{
    props:['id','applied_on','start_date','end_date','leave_count','approval_status']
}

</script>