<template>
  <div v-for="comment in comments" :key="comment.id">
    <div class="card">
      <div class="card-body">{{ comment.body }}</div>
    </div>
  </div>
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
    };
  },
  methods: {
    async getComments(postid) {
      const res = await fetch(`api/comments?postid=${postid}`);

      const data = await res.json();

      console.log(data);
      return data;
    },
  },
  async created() {
    var id = this.postid;
    this.comments = await this.getComments(id);
  },
};
</script>