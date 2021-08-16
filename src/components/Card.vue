<template>
  <div class="wrapper">
    <div class="card_image" :style="{ backgroundImage: 'url(' + image + ')' }">
      >
    </div>
    <div class="card_data">
      <h4 class="card_name">{{ name }}</h4>
      <div class="card_stats">
        <div class="section">
          <h4 class="text_gray">status:</h4>
          <span
            v-if="status === 'Alive'"
            class="status_dot status_dot_green"
          ></span>
          <span
            v-else-if="status === 'Dead'"
            class="status_dot status_dot_red"
          ></span>
          <span v-else class="status_dot status_dot_gray"></span>
          <h4 class="data_text">{{ status }}</h4>
        </div>
        <div class="section">
          <h4 class="text_gray">species:</h4>
          <h4 class="data_text">{{ species }}</h4>
        </div>
        <div class="section">
          <h4 class="text_gray">location:</h4>
          <h4 class="data_text">{{ location }}</h4>
        </div>
      </div>
    </div>
    <button v-if="isInFav" class="button" @click="removeFromFav(id, name)">
      Remove from favourite characters.
    </button>
    <button v-else class="button" @click="addToFav(id, name)">
      Add to favourite characters.
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import useLocalStorage from "../Composables/useLocalStorage";

export default defineComponent({
  name: "Card",
  setup(props) {
    const isInFav = ref<boolean>(false);
    const { useCheckIsInFav, useAddToFav, useRemoveFromFav } =
      useLocalStorage();

    onMounted(() => {
      checkIsInFav(props.id, props.name);
    });

    const checkIsInFav = (id: number, name: string) =>
      (isInFav.value = useCheckIsInFav(id, name));
    const addToFav = (id: number, name: string) => {
      isInFav.value = true;
      useAddToFav(id, name);
    };
    const removeFromFav = (id: number, name: string) => {
      isInFav.value = false;
      useRemoveFromFav(id, name);
    };
    return { isInFav, checkIsInFav, addToFav, removeFromFav };
  },
  props: {
    id: {
      required: true,
      type: Number,
    },
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
    species: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped>
.wrapper {
  background: rgb(255, 255, 255);
  width: 300px;
  height: 82vh;
  display: inline-block;
  margin-left: 1.4vw;
  margin-bottom: 10vh;
  border-radius: 20px;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
}
.card_data {
  text-align: center;
  width: 100%;
}
.section {
  display: flex;
  margin-bottom: -10px;
  align-items: center;
}
.text_gray {
  color: rgb(133, 133, 133);
}
.data_text {
  text-transform: uppercase;
  margin-left: 5px;
}
.card_stats {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.status_dot {
  height: 0.8rem;
  width: 0.8rem;
  margin-left: 0.375rem;
  border-radius: 50%;
}
.status_dot_red {
  background: rgb(148, 0, 0);
}
.status_dot_green {
  background: rgb(44 189 23);
}
.status_dot_gray {
  background: rgb(90, 90, 90);
}
.card_name {
  font-size: 26px;
  color: black;
  font-weight: 600;
}
.card_image {
  grid-area: image;
  width: 300px;
  height: 300px;
  background-size: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
@media only screen and (max-width: 600px) {
  .wrapper{
    height:92vh
  }
}
</style>
