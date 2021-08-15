<template>
  <input
    v-model="filterValue"
    type="text"
    placeholder="Search"
    @input="filter($event.target.value)"
    class="searchBar"
  />
  <div v-if="error">{{ error }}</div>
  <div v-if="characters.length">
    <div class="wrapper">
      <div v-for="character in characters" :key="character.id">
        <Card
          :name="character.name"
          :status="character.status"
          :image="character.image"
          :species="character.species"
          :location="character.location.name"
        />
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>

  <button v-if="numberOfPage < 35" @click="loadMore()" class="button">
    Load more⬇️.
  </button>
  <p v-else>That's all what we have🙂.</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Card from "./Card.vue";
import useLoadCharacters from "../Composables/useLoadCharacters";

export default defineComponent({
  name: "Container",
  components: {
    Card,
  },
  setup() {
    const { characters, error, useCharactersFetcher, useLoadMore, useFilter, numberOfPage } =
      useLoadCharacters();

    onMounted(() => {
      useCharactersFetcher();
    });

    const filter = (phrase: string) => useFilter(phrase);
    const loadMore = () => useLoadMore();

    return { characters, error, useCharactersFetcher, filter, loadMore, numberOfPage };
  },
});
</script>

<style scoped>
.searchBar {
  background-color: rgb(34, 34, 34);
  border: 1px solid black;
  border-radius: 20px;
  width: 40vw;
  height: 5vh;
  color: white;
  font-size: 15px;
  text-align: center;
  margin-bottom: 2vh;
}
.searchBar:focus {
  outline: none;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.button {
  @keyframes sheen {
    0% {
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  padding: 0.75em 2em;
  text-align: center;
  text-decoration: none;
  color: #2194e0;
  border: 2px solid #2194e0;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
}
.button:before {
  content: "";
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -4.5em;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}
.button:hover {
  cursor: pointer;
  background-color: #2194e0;
  color: #fff;
  border-bottom: 4px solid darken(#2194e0, 10%);
}
.button:hover:before {
  transform: skewX(-45deg) translateX(13.5em);
  transition: all 0.5s ease-in-out;
}
</style>
