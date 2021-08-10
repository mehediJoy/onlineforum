<template>
  <div class="card" :key="subject.id" v-for="subject in subjects">
    <div class="card-body">
      {{ subject.name }}
      <router-link to="/ask">Posts</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "Subject",
  props: {
    subjects: Array,
  },
};
</script>