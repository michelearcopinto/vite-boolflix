<script>
import { store } from "../../store";
import axios from "axios";

export default {
  name: "AppCardMovie",
  data() {
    return {
      store,
      castMovieArray: [],
    };
  },
  props: ["propMovieElement"],
  async mounted() {
    await this.requestMovieActors(this.propMovieElement.id);
  },
  methods: {
    async requestMovieActors(id) {
      this.castMovieArray = [];

      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0df5a2eb5ea675b674ccceded6427c04`
        )
        .then((result) => {
          let slicedArray = result.data.cast.slice(0, 5);
          slicedArray.forEach((movie) => {
            this.castMovieArray.push({
              name: movie.name,
            });
          });

          console.log(this.castMovieArray);
          return this.castMovieArray;
        });
    },
  },
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
        <li
          v-show="
            store.checkTitle(propMovieElement.title) !==
            store.checkTitle(propMovieElement.original_title)
          "
        >
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
        <li>
          <strong>Attori:</strong>
          <span
            v-if="castMovieArray.length !== 0"
            v-for="(actor, index) in castMovieArray"
            :key="index"
            >{{
              index === castMovieArray.length - 1
                ? ` ${actor.name}`
                : ` ${actor.name},`
            }}
          </span>
          <span v-else> Database vuoto</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

@include card-style;
</style>
