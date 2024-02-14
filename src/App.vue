<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppGrid from "./components/main/AppGrid.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppGrid,
  },
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
              id: movie.id,
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
              id: serie.id,
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
  <header>
    <AppHeader
      @search="
        searchMovies();
        searchSeries();
      "
    />
  </header>

  <main>
    <AppGrid />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
