<template>
  <div class="card" :key="sub.id" v-for="sub in subjects">
    <div class="card-body">
      <p>{{sub.name}}</p>
      <router-link :to="{name:'Posts', params: {subname: sub.name}}">Posts</router-link>
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