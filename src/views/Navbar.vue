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
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>