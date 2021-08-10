<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="postTitle">Title</label>
        <input type="text" class="form-control" id="postTitle" />
      </div>
      <div class="form-group">
        <label for="postBody">Body</label>
        <textarea class="form-control" rows="5" id="postBody"></textarea>
      </div>
      <div class="form-group">
        <label for="sel1">Select list:</label>
        <select class="form-control">
          <option :key="subject.id" v-for="subject in subjects">{{subject.name}}</option>
        </select>
      </div>
      <button class="btn btn-outline-primary" type="button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ask",
  props: {
      subjects: Array,
  },
};
</script>