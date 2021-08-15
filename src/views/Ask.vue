<template>
  <div class="container">
    <form @submit.prevent>
      <div class="form-group">
        <label for="postTitle">Title</label>
        <input
          v-model="postTitle"
          type="text"
          class="form-control"
          id="postTitle"
        />
      </div>
      <div class="form-group">
        <label for="postBody">Body</label>
        <textarea
          v-model="postBody"
          class="form-control"
          rows="5"
          id="postBody"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="sel1">Select list:</label>
        <select class="form-control" v-model="category">
          <option
            :key="subject.id"
            v-for="subject in subjects"
            v-bind:value="subject.name"
          >
            {{ subject.name }}
          </option>
        </select>
      </div>
      <button
        @click="manageForm()"
        class="btn btn-outline-primary"
        type="button"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ask",
  props: {
    subjects: Array,
  },
  data() {
    return {
      postTitle: "",
      postBody: "",
      category: "",
    };
  },
  methods: {
    async manageForm() {
      const newPost = {
        postTitle: this.postTitle,
        postBody: this.postBody,
        category: this.category,
        authorid: "1"
      };

      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      this.$router.push({ path: `/posts/${this.category}` });
    },
  },
};
</script>