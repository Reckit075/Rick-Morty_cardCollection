<template>
  <div class="wrapper">
    <h4>{{ name }}</h4>
    <img :src="image" :alt="name"/>
    <h2>{{ status }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    name: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
