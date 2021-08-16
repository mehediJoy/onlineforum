<template>
  <div class="container">
    <h4>Please Register Here.</h4>
    <form @submit.prevent>
      <div class="form-group">
        <label for="usr">Username:</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="usr"
          placeholder="Dont use space. One word only."
        />
      </div>
      <div class="form-group">
        <label for="pwd1">Password:</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="pwd1"
        />
      </div>
      <button class="btn btn-primary" type="button" @click="registerUser()">
        Register
      </button>
    </form>
    <successful-reg v-show="succPage"></successful-reg>
  </div>
</template>

<script>
import SuccessfulReg from "./SuccessfulReg.vue";

export default {
  name: "Register",
  components: {
    SuccessfulReg,
  },
  data() {
    return {
      username: "",
      password: "",
      succPage: Boolean,
    };
  },
  created() {
    this.succPage = false;
  },
  methods: {
    async registerUser() {
      const newUser = {
        username: this.username,
        password: this.password,
      };

      const res = await fetch("https://csforumapi.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      this.succPage = true;
      this.$router.push({path: "/login"});
    },
  },
};
</script>