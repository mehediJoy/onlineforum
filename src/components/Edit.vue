<template>
  <div class="container">
    <form @submit.prevent>
      <label for="usr">Title:</label>
      <input v-model="postTitle" type="text" class="form-control" id="usr" />
      <label for="comment">Comment:</label>
      <textarea
        v-model="postBody"
        class="form-control"
        rows="5"
        id="comment"
      ></textarea>
      <button class="btn btn-primary" @click="editDoc()">Save</button>
    </form>
    <p v-show="succPage">Edited Successfully</p>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      postTitle: "",
      postBody: "",
      id: Number,
      succPage: false,
    };
  },
  async created() {
    this.id = this.$route.params.id;
    const res = await fetch(`api/posts/${this.id}`);
    const data = await res.json();
    this.postTitle = data.postTitle;
    this.postBody = data.postBody;
  },
  methods: {
    async editDoc() {
      const newPost = {
        id: this.id,
        postTitle: this.postTitle,
        postBody: this.postBody,
      };
      const res = await fetch(`api/posts/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      console.log(data);
      this.succPage = true;
    },
  },
};
</script>

<style>
</style>