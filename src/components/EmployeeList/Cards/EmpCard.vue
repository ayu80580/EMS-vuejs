<template>
    <tr class>
        <th scope="row">{{ id }}</th>
        <td>
            <router-link :to="url">{{ name }}</router-link>
        </td>
        <td>
            {{ phone }}
        </td>
        <td>
            {{ email }}
        </td>
        <td>
            {{ role }}
        </td>
        <td>
            {{ jod }}
        </td>
        <td>
            <div class="form-group">
                <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="selected" :disabled="isDisabled">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus" :disabled="isDisabled">Save</button>
        </td>
    </tr>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
import router from '../../../router';
export default {

    props: ['id', 'name', 'phone', 'email', 'role', 'status', 'jod',],
    computed:{
        url(){
            return "/user/"+this.id+"/profile";
        },
        isDisabled() {
            if((this.$store.state.AuthRole !== 'Admin')) return true;
            return false;
        }
    },
    data() {
        return {
            selected: this.status
        }
    },
    methods: {
        
        goToUserProfile() {
            router.push('/profile/profile');
        },
        saveStatus() {
            
            axios
                .post("http://127.0.0.1:8000/api/users/update", {
                    user_id:this.$store.state.EmployeeData.id,
                    id: this.id,
                    user_status_id: this.selected == 1 ? 2 : 1,
                })
                .then((response) => {
                    console.log(response);
                    this.$emit('statusChanged');
                    swal("Status updated successfully!", {
            icon: "success",
          });
                })
                .catch(() => {
                    return "Error";
                });
        }
    }



}
</script>

<style scoped>

</style>