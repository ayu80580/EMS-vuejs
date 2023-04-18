<template>
    <tr>
        <th scope="row">{{ id }}</th>
        <td>
            {{ name }}
        </td>
        <td>
            {{ role }}
        </td>
        <td>
            {{ month }}
        </td>
        <td>
            {{ year }}
        </td>
        <td>
            {{ leave_count }}
        </td>
        <td>
            {{ payable_salary }}
        </td>
        <td data-width="175px">
            <div class="row">
                <div >
                    <div class="form-group">
                        <select class="form-select mb-3" 
                        aria-label=".form-select-lg example" 
                        v-model="paid_status"
                        :disabled="isDisabled"
                        >
                            <option value="0">Unpaid</option>
                            <option value="1">Paid</option>
                        </select>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus" :disabled="isDisabled">Save</button>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';


export default {
    props:['id','name','role','month','year','payable_salary','leave_count','status'],
    data() {
        return {
            paid_status:this.status,
        }
    },
    methods:{
        saveStatus() {
            axios
            .post('http://127.0.0.1:8000/api/salaries/pay',{
                id:this.id,
                paid_status:this.paid_status,
            })
            .then(($response)=>{
                console.log($response.data);
                this.$emit('statusChanged');
            })
            .catch(($error)=>{
                console.log($error.data);
            });
        }
    },
    computed:{
        isDisabled(){
            if(this.paid_status===1) return true;
            return false;
        }
    }
}
</script>