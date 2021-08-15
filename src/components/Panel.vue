<template>
  <h3>Wellcome, {{ adminName }}!</h3>
  <div class="postsPanel">
    <p>
      To Manage Posts <b><a @click="postButton" class="hov">Click Here</a></b>
    </p>
    <div v-for="post in posts" :key="post.id" v-show="postComp">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ post.postTitle }}</h4>
          <p class="card-text">{{ post.postBody }}</p>
          <button class="btn btn-info" @click="eidtPost(post.id)">Eidt</button>
          <button class="btn btn-danger" @click="deleteSomething(post.id, 1)">Delete</button>
        </div>
      </div>
    </div>
  </div>

  <div class="usersPanel">
    <p>
      To Manage Users <b><a class="hov" @click="userButton">Click Here</a></b>
    </p>
    <div v-for="user in users" :key="user.id" v-show="userComp">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ user.username }}</h4>
          <p class="card-text">{{ user.password }}</p>
          <button class="btn btn-danger" @click="deleteSomething(user.id, 2)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    adminName: String,
  },
  data() {
    return {
      posts: [],
      users: [],
      postComp: false,
      userComp: false,
    };
  },

  methods: {
    async getPosts() {
      const res = await fetch(`api/posts`);
      const data = await res.json();
      this.posts = data;
    },
    async getUsers() {
      const res = await fetch(`api/users`);
      const data = await res.json();
      this.users = data;
    },
    postButton() {
      this.getPosts();
      this.postComp = !this.postComp;
    },
    userButton() {
      this.getUsers();
      this.userComp = !this.userComp;
    },
    eidtPost(postid) {
      this.$router.push({ path: `/admin/posts/${postid}` });
    },
    async deleteSomething(id, comp) {
      if (comp === 1) {
        // eslint-disable-next-line no-unused-vars
        const res = await fetch(`api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        const res = await fetch(`api/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.hov {
  cursor: pointer;
}
</style>