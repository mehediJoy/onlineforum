<template>
  <div class="container">
    <div v-if="!regShow">
      <Login />
      <p>If you don't have account <a @click="linkClicked()" class="chgCur">Click Here</a></p>
    </div>
    <div v-if="regShow">
      <register />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      regShow: false,
    };
  },
  methods: {
    linkClicked() {
      this.regShow = !this.regShow;
    }
  },
};
</script>

<style scoped>
.chgCur:hover {
  cursor: pointer;
}
</style>