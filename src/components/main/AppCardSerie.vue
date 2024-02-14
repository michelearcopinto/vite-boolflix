<script>
import { store } from "../../store";
import axios from "axios";

export default {
  name: "AppCardSerie",
  data() {
    return {
      store,
      castSerieArray: [],
    };
  },
  props: ["propSerieElement"],
  async mounted() {
    await this.requestSerieActors(this.propSerieElement.id);
  },
  methods: {
    async requestSerieActors(id) {
      this.castSeriesArray = [];

      await axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=0df5a2eb5ea675b674ccceded6427c04`
        )
        .then((result) => {
          let slicedArray = result.data.cast.slice(0, 5);
          slicedArray.forEach((serie) => {
            this.castSerieArray.push({
              name: serie.name,
            });
          });

          console.log(this.castSerieArray);
          return this.castSerieArray;
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
          propSerieElement.poster
            ? `https://image.tmdb.org/t/p/w342${propSerieElement.poster}`
            : './src/assets/img/image-alt.webp'
        "
        :alt="`poster: ${propSerieElement.title}`"
      />
    </figure>
    <div class="card-info">
      <ul>
        <li><strong>Titolo:</strong> {{ propSerieElement.title }}</li>
        <li
          v-show="
            store.checkTitle(propSerieElement.title) !==
            store.checkTitle(propSerieElement.original_title)
          "
        >
          <strong>Titolo originale:</strong>
          {{ propSerieElement.original_title }}
        </li>
        <li>
          <strong>Lingua: </strong>
          <span :class="`lang-icon lang-icon-${propSerieElement.language}`">
          </span>
          <span class="language-code">- {{ propSerieElement.language }}</span>
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
        <li>
          <strong>Attori:</strong>
          <span
            v-if="castSerieArray.length !== 0"
            v-for="(actor, index) in castSerieArray"
            :key="index"
            >{{
              index === castSerieArray.length - 1
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
