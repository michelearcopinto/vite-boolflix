<script>
import { store } from "../../store";
import axios from "axios";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  methods: {
    calcVote(num) {
      return Math.round(num / 2);
    },
    async searchMovies() {
      store.moviesArray = [];

      await axios
        .get(`${store.apiMoviesURL}${store.searchWord}`)
        .then((result) => {
          result.data.results.forEach((movie) => {
            store.moviesArray.push({
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: this.calcVote(movie.vote_average),
              poster: movie.poster_path,
              overview: movie.overview,
            });
          });

          console.log(store.moviesArray);
        });
    },
    async searchSeries() {
      store.seriesArray = [];

      await axios
        .get(`${store.apiSeriesURL}${store.searchWord}`)
        .then((result) => {
          result.data.results.forEach((serie) => {
            store.seriesArray.push({
              title: serie.name,
              original_title: serie.original_name,
              language: serie.original_language,
              vote: this.calcVote(serie.vote_average),
              poster: serie.poster_path,
              overview: serie.overview,
            });
          });

          console.log(store.seriesArray);
        });
    },
  },
};
</script>

<template>
  <h1>boolflix</h1>
  <div>
    <button
      :class="store.searchWord === '' ? 'disabled' : ''"
      @click="
        searchMovies();
        searchSeries();
      "
    >
      Cerca
    </button>
    <label for="searchBar"></label>
    <input
      id="searchBar"
      type="text"
      placeholder="Cerca Film o Serie TV"
      v-model="store.searchWord"
      @keydown.enter="
        searchMovies();
        searchSeries();
      "
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
