<script>
import { store } from "../../store";
import AppCardMovie from "./AppCardMovie.vue";
import AppCardSerie from "./AppCardSerie.vue";

export default {
  name: "AppGrid",
  components: {
    AppCardMovie,
    AppCardSerie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div
    class="grid-container"
    :class="store.seriesArray.length === 0 ? 'd-none' : ''"
  >
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
        <AppCardMovie
          v-for="element in store.moviesArray"
          :propMovieElement="element"
        />
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
        <div class="grid">
          <AppCardSerie
            v-for="element in store.seriesArray"
            :propSerieElement="element"
          />
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
  border-radius: 10px;
}

.movies-container {
  margin-bottom: 30px;
}

.d-none {
  display: none;
}

.grid-container {
  padding-bottom: 50px;
}
</style>
