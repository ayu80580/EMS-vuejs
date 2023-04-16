<template>
    <tr>
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
            <div class="form-group">
                <select class="form-select mb-3" aria-label=".form-select-lg example" v-model="selected">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
        </td>
        <td>
            {{ jod }}
        </td>
        <td>
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus">Save</button>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';
import router from '../../../router';
export default {

    props: ['id', 'name', 'phone', 'email', 'role', 'status', 'jod',],
    computed:{
        url(){
            return "/user/profile/"+this.id;
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
                .put("http://127.0.0.1:8000/api/users/update", {
                    'id': this.id,
                    'user_status_id': this.selected == 1 ? 2 : 1,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch(() => {
                    return "Error";
                });
        }
    }



}
</script>

<style scoped></style>