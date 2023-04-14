<template>
    <tr>
        <th scope="row">{{ id }}</th>
        <!-- <td>
                <img src="" alt="">
            </td> -->
        <td>
            <a class="text-decoration-none" @click.prevent="" href="">{{ name }}</a>
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
export default {

    props: ['id', 'name', 'phone', 'email', 'role', 'status', 'jod',],
    data() {
        return {
            selected: this.status
        }
    }



}
</script>

<style scoped></style>