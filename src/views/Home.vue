<template>
  <div class="container">
    <div class="midCon" v-if="showComp">
      <p>You Can Login/Register Here.</p>
      <router-link to="/login" tag="button" class="btn btn-outline-primary">Login</router-link>
    </div>
    <div class="subb" v-else>
      <h1>Browse different topic from below.</h1>
      <Subject :subjects="subjects" />
    </div>
  </div>
</template>

<script>
import Subject from "../components/Subject.vue";

export default {
  name: "Home",
  data() {
    return {
      showComp: true,
    };
  },
  props: {
    subjects: Array,
  },
  mounted() {
    if (this.$store.state.loggedIn) {
      this.showComp = false;
    }
  },
  components: {
    Subject,
  },
};
</script>

<style scoped>
.midCon {
  margin: auto;
  text-align: center;
}
</style>
