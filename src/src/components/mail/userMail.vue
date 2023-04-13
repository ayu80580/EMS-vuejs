<template>

</template>


<script>
  const form = document.getElementById('email-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    axios.post('/api/send-email', formData)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
</script>