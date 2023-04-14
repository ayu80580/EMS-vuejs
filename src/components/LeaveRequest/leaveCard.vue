<template>
    <tr>
        <th scope="row">{{ id }}</th>
        <td>
            {{ name }}
        </td>
        <td>
            {{ startDate }}
        </td>
        <td>
            {{ endDate }}
        </td>
        <td>
            {{ role }}
        </td>
        <td data-width="175px">
            <div class="row">
                <div class="col-sm-7">
                    <div class="form-group">
                        <select class="form-select mb-3" 
                        aria-label=".form-select-lg example" 
                        v-model="selected"
                        :disabled="disableButton"
                        >
                            <option value="2">Pending</option>
                            <option value="1">Approve</option>
                            <option value="0">Reject</option>
                        </select>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus" :disabled="disableButton">Save</button>
            
        </td>
    </tr>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id', 'name', 'startDate', 'endDate','status', 'role'],
    data() {
        return {
            selected:this.status,
            disableButton:false
        }
    },
    methods :{
        saveStatus() {
            
            if(this.selected===2) {
                alert('Please select any other option!');
                return;
            }
            // console.log({
            //     'id':this.id,
            //     approval_status:this.selected,
            //     approved_by_id:this.$store.state.EmployeeData.id
            // });
            axios 
            .put('http://127.0.0.1:8000/api/activeleaves/update',{
                'id':this.id,
                approval_status:this.selected,
                approved_by_id:this.$store.state.EmployeeData.id
            }).then((response)=>{
                console.log(response);
                this.disableButton=true;
            }).catch(()=>{
                return "Error";
            })
            this.enable = !this.enable;
            console.log(this.selected);
        },
    }
}
</script>