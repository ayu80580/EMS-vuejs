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
                        :disabled="!enable"
                        >
                            <option value="pending">Pending</option>
                            <option value="approve">Approve</option>
                            <option value="reject">Reject</option>
                        </select>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-outline-primary" @click.prevent="saveStatus" :disabled="!enable">Save</button>
            
        </td>
    </tr>
</template>

<script>
export default {
    props: ['id', 'name', 'startDate', 'endDate', 'role'],
    data() {
        return {
            selected:'pending',
            enable:true,
        }
    },
    methods :{
        saveStatus() {
            if(this.selected==='pending') {
                alert('Please select any other option!');
                return;
            }
            this.enable = !this.enable;
            console.log(this.selected);
        }
    }
}
</script>