<script>
import { store } from "../../store";

export default {
  name: "AppGrid",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div :class="store.seriesArray.length === 0 ? 'd-none' : ''">
    <div
      class="movies-header"
      @click="store.moviesContainerOpened = !store.moviesContainerOpened"
      :class="store.moviesArray.length === 0 ? 'd-none' : ''"
    >
      <h1>Movies</h1>
      <i v-if="store.moviesContainerOpened" class="fas fa-chevron-down"></i>
      <i v-else class="fas fa-chevron-up"></i>
    </div>
    <div
      class="movies-container"
      :class="store.moviesContainerOpened ? 'd-none' : ''"
    >
      <div class="grid">
        <div class="card" v-for="element in store.moviesArray">
          <figure>
            <img
              :src="`https://image.tmdb.org/t/p/w342${element.poster}`"
              :alt="`poster: ${element.title}`"
            />
          </figure>
          <div class="card-info">
            <ul>
              <li><strong>Titolo:</strong> {{ element.title }}</li>
              <li>
                <strong>Titolo originale:</strong> {{ element.original_title }}
              </li>
              <li>
                <strong>Voto: </strong>
                <i v-for="star in element.vote" class="fas fa-star"></i>
              </li>
              <li><strong>Overview:</strong> {{ element.overview }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="series-header"
      @click="store.seriesContainerOpened = !store.seriesContainerOpened"
      :class="store.seriesArray.length === 0 ? 'd-none' : ''"
    >
      <h1>Series TV</h1>
      <i v-if="store.seriesContainerOpened" class="fas fa-chevron-down"></i>
      <i v-else class="fas fa-chevron-up"></i>
    </div>
    <div
      class="series-container"
      :class="store.seriesContainerOpened ? 'd-none' : ''"
    >
      <div class="grid">
        <div class="card" v-for="element in store.seriesArray">
          <figure>
            <img
              :src="`https://image.tmdb.org/t/p/w342${element.poster}`"
              :alt="`poster: ${element.title}`"
            />
          </figure>
          <div class="card-info">
            <ul>
              <li><strong>Titolo:</strong> {{ element.title }}</li>
              <li>
                <strong>Titolo originale:</strong> {{ element.original_title }}
              </li>
              <li>
                <strong>Voto: </strong>
                <i v-for="star in element.vote" class="fas fa-star"></i>
              </li>
              <li><strong>Overview:</strong> {{ element.overview }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    width: calc((100% - 20px * 2) / 3);
    position: relative;

    figure {
      height: 100%;

      img {
        height: 100%;
      }
    }

    &:hover .card-info {
      display: block;
    }

    .card-info {
      background-color: rgba($color: #000000, $alpha: 0.8);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 25px;
      color: white;
      padding: 50px 20px 0px;
      overflow: auto;
      display: none;

      i {
        color: yellow;
        font-size: 20px;
      }
    }
  }
}

.series-header,
.movies-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: $bg-container-header-color;
  padding-block: 10px;
  padding-inline: 20px;
  margin-bottom: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  i {
    font-size: 20px;
  }
}

.movies-container,
.series-container {
  background-color: $bg-container-color;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
}

.d-none {
  display: none;
}
</style>
