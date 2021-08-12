<template>
  <Navbar></Navbar>
  <router-view :subjects="subjects"></router-view>
</template>

<script>
import Navbar from "./views/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      subjects: [
        {
          id: 1,
          name: "Programming",
        },
        {
          id: 2,
          name: "Data Structures",
        },
        {
          id: 3,
          name: "Algorithms",
        },
        {
          id: 4,
          name: "Database",
        },
        {
          id: 5,
          name: "Operating Systems",
        },
      ],
    };
  },
  methods: {

  },
};
</script>


