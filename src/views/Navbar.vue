<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand/logo -->
    <a class="navbar-brand" href="#">Forum</a>

    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" tag="a" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ask" tag="a" class="nav-link">Ask</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" tag="a" class="nav-link">About</router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"
          ><span class="glyphicon glyphicon-user"></span> Sign Up / Login</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
</style>