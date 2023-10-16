import { reactive } from 'vue';

export const store = reactive({
  endPoint: 'https://api.themoviedb.org/3/search',
  typeOf: '/movie',
  moviesArr: [],
  textToSearch: null,
})