<template>
  <div class="nav">
    <div class="left_nav">
      <div class="nav_i brand">
        <router-link to="/" tag="a">Forum</router-link>
      </div>
      <div class="nav_i">
        <router-link to="/ask" tag="a">Ask</router-link>
      </div>
      <div class="nav_i">
        <router-link to="/about" tag="a">About</router-link>
      </div>
    </div>
    <div class="right_nav">
      <div class="nav_i">
        <router-link to="/ask" tag="a">Sign Up</router-link>
      </div>
      <div class="nav_i">
        <router-link to="/about" tag="a">Log In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #3e2c41;
}
.left_nav {
  display: flex;
}
.right_nav {
  display: flex;
}
.nav_i {
  font-size: 1.25rem;
  padding: 5px;
}
.nav_i:hover {
  background-color: #5c527f;
}

a {
  text-decoration: none;
  color: white;
}
</style>