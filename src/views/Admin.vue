<template>
  <div class="container">
    <div class="logPanel" v-show="showlogin">
      <h4>Wellcome to admin panel.</h4>
      <p>Please Login from below.</p>
      <form @submit.prevent>
        <label for="usr5">Admin:</label>
        <input v-model="adminUsername" type="text" class="form-control" id="usr5"/>
        <label for="pwd">Password:</label>
        <input v-model="adminPassword" type="password" class="form-control" id="pwd"/>
        <button
          @click="buttonClicked()" class="btn btn-outline-primary" type="button"> Login </button>
      </form>
    </div>
    <div class="infoPanel" v-show="showpanel">
        <Panel :adminName="adminName"></Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../components/Panel.vue";

export default {
  name: "Admin",
  data() {
    return {
      adminUsername: "",
      adminPassword: "",
      adminName: "",
      showlogin: true,
      showpanel: false,
    };
  },
  components: {
      Panel,
  },
  methods: {
    async adminLogin(usr, pwd) {
      const res = await fetch(
        `https://csforumapi.herokuapp.com/admins?adminUsername=${usr}&password=${pwd}`
      );

      const data = await res.json();
      var len = Object.keys(data).length;
      if (len > 0) {
        this.adminName = data[0].adminName;
        this.showlogin = false;
        this.showpanel = true;
      }
    },
    buttonClicked() {
      this.adminLogin(this.adminUsername, this.adminPassword);
    },
  },
};
</script>

<style scoepd>
.logPanel {
  margin: auto;
  width: 300px;
}
</style>