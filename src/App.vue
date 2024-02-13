<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppGrid from "./components/main/AppGrid.vue";
import { store } from "./store";

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
};
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppGrid />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
