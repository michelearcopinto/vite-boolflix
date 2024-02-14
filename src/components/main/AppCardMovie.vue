<script>
import { store } from "../../store";

export default {
  name: "AppCardMovie",
  data() {
    return {
      store,
    };
  },
  props: ["propMovieElement"],
};
</script>

<template>
  <div class="card">
    <figure>
      <img
        :src="
          propMovieElement.poster
            ? `https://image.tmdb.org/t/p/w342${propMovieElement.poster}`
            : './src/assets/img/image-alt.webp'
        "
        :alt="`poster: ${propMovieElement.title}`"
      />
    </figure>
    <div class="card-info">
      <ul>
        <li><strong>Titolo:</strong> {{ propMovieElement.title }}</li>
        <li v-show="propMovieElement.original_title !== propMovieElement.title">
          <strong>Titolo originale:</strong>
          {{ propMovieElement.original_title }}
        </li>
        <li>
          <strong>Lingua: </strong>
          <span :class="`lang-icon lang-icon-${propMovieElement.language}`">
          </span>
          <span class="language-code">- {{ propMovieElement.language }}</span>
        </li>
        <li>
          <strong>Voto: </strong>
          <i v-for="star in propMovieElement.vote" class="fa-solid fa-star"></i>
          <i
            v-for="darkStar in store.remainingStars(propMovieElement.vote)"
            class="fa-regular fa-star"
          ></i>
        </li>
        <li><strong>Overview:</strong> {{ propMovieElement.overview }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

@include card-style;
</style>
