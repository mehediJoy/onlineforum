<template>
  <div class="container">
    <div :key="post.id" v-for="post in posts">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Posts",
  components: {
    Post
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts(subname) {
      const res = await fetch(`api/posts?category=${subname}`);

      const data = await res.json();

      return data;
    },
  },
  async created() {
    var id = this.$route.params.subname;
    this.posts = await this.getPosts(id);
  },
};
</script>