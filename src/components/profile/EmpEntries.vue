<template>
    <tr>
        <th>Employee Id</th>
        <td>{{emp_id}}</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>{{name}}</td>
    </tr>
    <tr>
        <th>Role</th>
        <td>{{role}}</td>
    </tr>
    <tr>
        <th>Email</th>
        <td>{{email}}</td>
    </tr>
    <tr>
        <th>Status</th>
        <td>{{status==1?'Active':'Inactive'}}</td>
    </tr>
    
    
</template>

<script>

export default{
    props:['name','emp_id','role','email','status']
}
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anuphan&display=swap');
*{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-family: 'Anuphan', sans-serif;

  }
  body{
    font-size: larger;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
    font-family: 'Dancing Script', cursive;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
  }
  h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
  }
  
  /* Table Styles */
  
  .table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    width: 62%;
    position: relative;
    left: 15%;
    border-radius: 20%;
  }
  
  .fl-table {
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }
  
  .fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
  }
  .fl-table th {
    border-right: 1px solid #f8f8f8;
    font-size: 16px;
  }
  
  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 24px;
  }
  
  .fl-table tr td {
    color: #ffffff;
    background: #4FC3A1;
  }
  
  
  .fl-table tr th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }
  
  .fl-table tr:nth-child(even) {
    background: #F8F8F8;
  }
  
  /* Responsive */
  
  @media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table tr, .fl-table tbody, .fl-table tr th {
        display: block;
    }
    .fl-table tr th:last-child{
        border-bottom: none;
    }
    .fl-table tr {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table tr th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
  }
  
  </style>