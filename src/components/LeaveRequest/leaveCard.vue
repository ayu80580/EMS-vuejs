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
                        :disabled="isDisabled"
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
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus" :disabled="isDisabled">Save</button>
            
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

import { mapMutations } from 'vuex';
export default {
    props: ['id', 'name', 'startDate', 'endDate','status', 'role'],
    data() {
        return {
            selected:this.status,
        }
    },
    methods :{
        ...mapMutations(['updateLeave']),
    getLeave() {
      axios
        .get(`http://127.0.0.1:8000/api/leave/${this.id}`)
        .then((response) => {
          this.updateLeave(response.data);
        })
        .catch(() => {
          alert('Leave Not fetched properly!!!');
        });
    },


        saveStatus() {
            
            if(this.selected===2) {
                alert('Please select any other option!');
                return;
            }
            axios 
            .put('http://127.0.0.1:8000/api/leaves/update',{
                'id':this.id,
                approval_status:this.selected,
                approved_by_id:this.$store.state.EmployeeData.id
            }).then((response)=>{
                console.log(response);
                this.$emit('statusChanged');
                this.getLeave();
            }).catch(()=>{
                return "Error";
            })
        },
    },
    computed:{
        isDisabled() {
            if(this.status!=2) return true;
            return false;
        }
    }
}
</script>

<style scoped>

</style>