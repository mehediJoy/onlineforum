<template>
    <div class="container">
        <h1>Browse different topic from below.</h1>
        <Subject :subjects="subjects"/>
    </div>
</template>

<script>
import Subject from "../components/Subject.vue";

export default {
    name: "Home",
    props: {
        subjects: Array,
    },
    components: {
        Subject
    },  
}
</script>
