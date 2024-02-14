import { reactive } from "vue";

export const store = reactive({
  searchWord: "",
  apiMoviesURL:
    "https://api.themoviedb.org/3/search/movie?api_key=0df5a2eb5ea675b674ccceded6427c04&language=it_IT&query=",
  apiSeriesURL:
    "https://api.themoviedb.org/3/search/tv?api_key=0df5a2eb5ea675b674ccceded6427c04&language=it_IT&query=",
  moviesArray: [],
  seriesArray: [],
  moviesContainerOpened: false,
  seriesContainerOpened: false,
  remainingStars(vote) {
    return 5 - vote;
  },
  checkTitle(element) {
    let modifiedTitle = element.split(" ").join("").toLowerCase();

    return modifiedTitle;
  },
});
