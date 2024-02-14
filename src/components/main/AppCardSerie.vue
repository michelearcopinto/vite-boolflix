<script>
import { store } from "../../store";

export default {
  name: "AppCardSerie",
  data() {
    return {
      store,
    };
  },
  props: ["propSerieElement"],
};
</script>

<template>
  <div class="card">
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/w342${propSerieElement.poster}`"
        :alt="`poster: ${propSerieElement.title}`"
      />
    </figure>
    <div class="card-info">
      <ul>
        <li><strong>Titolo:</strong> {{ propSerieElement.title }}</li>
        <li>
          <strong>Titolo originale:</strong>
          {{ propSerieElement.original_title }}
        </li>
        <li>
          <strong>Voto: </strong>
          <i v-for="star in propSerieElement.vote" class="fa-solid fa-star"></i>
          <i
            v-for="darkStar in store.remainingStars(propSerieElement.vote)"
            class="fa-regular fa-star"
          ></i>
        </li>
        <li><strong>Overview:</strong> {{ propSerieElement.overview }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

@include card-style;
</style>
