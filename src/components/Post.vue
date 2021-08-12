<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ post.postTitle }}</h4>
      <p class="card-text">{{ post.postBody }}</p>
      <a @click="showCmtSection()" class="card-link">Comments</a>
      <div v-show="commentShow">
        <Comments :postid="post.id"></Comments>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments.vue";

export default {
  name: "Post",
  components: {
      Comments,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      commentShow: Boolean,
    };
  },
  created() {
    this.commentShow = false;
  },
  methods: {
    showCmtSection() {
      this.commentShow = !this.commentShow;
    },
  },
};
</script>