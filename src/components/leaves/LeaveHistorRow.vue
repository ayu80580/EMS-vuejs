<template>
    <tr>
        <td>{{id}}</td>
        <td>{{applied_on}}</td>
        <td>{{ start_date }}</td>
        <td>{{end_date}}</td>
        <td>{{approved_by}}</td>
        <td>{{ status}}</td>
      </tr>
</template>

<script>
export default{
    props:['id','applied_on','start_date','end_date','approved_by','approval_status'],
    computed:{
        status(){
            if(this.approval_status==0){
                return 'Rejected';
            }
            else if(this.approval_status==1){
                return 'Approved';
            }
            else{
                return 'Pending';
            }
        }
    }
}

</script>