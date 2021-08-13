<template>
  <!-- <Card name="Morty Smith" status="Alive" image="https://rickandmortyapi.com/api/character/avatar/2.jpeg" species="Human" location="Earth"/> -->
  <Container />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from './components/Container.vue';

export default defineComponent({
  name: 'App',
  components: {
    Container
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
