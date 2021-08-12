<template>
  <h4>Please Register Here.</h4>
  <form action="">
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr" />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" />
    </div>
    <div class="form-group">
      <label for="pwd">Retype Password:</label>
      <input type="password" class="form-control" id="pwd" />
    </div>
    <button class="btn btn-primary" type="button">Register</button>
  </form>
</template>

<script>
export default {
  name: "Register",
};
</script>