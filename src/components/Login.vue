<template>
  <div class="container">
  <!--This is the head of login component-->
    <h3>Give Login Information.</h3>
    <form @submit.prevent>
      <div class="form-group">
        <label for="usr">Name:</label>
        <input v-model="username" type="text" class="form-control" id="usr" />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="pwd"
        />
      </div>
      <button @click="buttonClicked()" class="btn btn-outline-primary" type="button">
        Login
      </button>
    </form>
    <p>
      If you don't have account
      <router-link to="/register" tag="a">Click Here</router-link>
    </p>
    <div v-show="showRes">
      <h1 v-if="succPage">Login Successful</h1>
      <h1 v-if="failPage">Please give valid information.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      succPage: Boolean,
      showRes: Boolean,
      failPage: Boolean,
    };
  },
  created() {
    this.succPage = false;
    this.showRes = false;
  },
  methods: {
    async checkInfo(usr, pwd) {
      const res = await fetch(`https://csforumapi.herokuapp.com/users?username=${usr}&password=${pwd}`);

      const data = await res.json();
      var len = Object.keys(data).length;
      if (len !== 0) {
        this.succPage = true;
        this.$store.commit("setLoggedIn");
        this.$router.push({path: `/`});
      } else {
        this.failPage = true;
      }
    },
    buttonClicked() {
      this.checkInfo(this.username, this.password);
      this.showRes = true;
    },
  },
};
</script>