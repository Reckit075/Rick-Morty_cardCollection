import { ref } from "vue";
import Character from "../types/Character";

const useLoadCharacters = () => {
  const characters = ref<Array<Character>>([]);
  const error = ref(null);
  const phrase = ref<string>('');
  const numberOfPage = ref<number>(2);
  const useCharactersFetcher = () => {
    try {
      fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then((res) => res.json())
        .then((data) => {
          characters.value = data.results;
        });
    } catch (err) {
      error.value = err.message;
    }
  };
  const useLoadMore = () => {
    fetch(
        `https://rickandmortyapi.com/api/character/?page=${numberOfPage.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          characters.value.push(...data.results);
          numberOfPage.value = +numberOfPage.value + 1;
        });
  }
  const useFilter = (phraseValue: string) => {
    numberOfPage.value = 1;
    phrase.value = phraseValue
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${phraseValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        characters.value = data.results;
      });
  }

  return { characters,error, useCharactersFetcher,useLoadMore,useFilter,numberOfPage,phrase };
};

export default useLoadCharacters;
