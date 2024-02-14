<script>
import { store } from "../../store";

export default {
  name: "AppHeader",
  emits: ["search"],
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <h1>boolflix</h1>
  <div>
    <button
      :class="store.searchWord === '' ? 'disabled' : ''"
      @click="$emit('search')"
    >
      Cerca
    </button>
    <label for="searchBar"></label>
    <input
      id="searchBar"
      type="text"
      placeholder="Cerca Film o Serie TV"
      v-model="store.searchWord"
      @keydown.enter="$emit('search')"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
