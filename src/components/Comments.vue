<template>
  <div v-for="comment in comments" :key="comment.id">
    <div class="card">
      <div class="card-body">{{ comment.body }}</div>
    </div>
  </div>
  <form @submit.prevent>
    <input
      v-model="newComment"
      class="form-control"
      type="text"
      placeholder="Add a Comment."
    />
    <button
      @click="addComment()"
      class="btn btn-outline-secondary"
      type="submit"
    >
      Add
    </button>
  </form>
  <p v-show="succ">Comment Added. :)</p>
</template>

<script>
export default {
  name: "Comments",
  props: {
    postid: Number,
  },
  data() {
    return {
      comments: [],
      newComment: "",
      succ: false
    };
  },
  methods: {
    async getComments(postid) {
      const res = await fetch(`api/comments?postid=${postid}`);
      const data = await res.json();
      return data;
    },
    async addComment() {
      const comment = {
        name: "",
        body: this.newComment,
        postid: this.postid,
      };

      const res = await fetch("api/comments", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const data = await res.json();
      console.log(typeof(data));
      this.succ = true;
    },
  },
  async created() {
    var id = this.postid;
    this.comments = await this.getComments(id);
    this.succ = false
  },
};
</script>