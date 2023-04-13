<template>
    
    <nav class="navbar navbar-expand-lg" style="background-color: gainsboro;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search Employee name" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <h3 class="mx-auto">Employee List</h3>
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <form action="" @submit.prevent="">
                            <button class="btn btn-outline-success" type="submit">Add Employee</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>

export default {
    name: 'EmployeeNav',
    data() {
        return {
            count: 40
        }
    }
}
</script>

<style scoped></style>