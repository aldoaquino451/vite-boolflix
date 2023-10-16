import { reactive } from 'vue';

export const store = reactive({
  endPoint: 'https://api.themoviedb.org/3/search/',
  type: '',
  itemsList: [],
  textToSearch: null,
  message: 'Inizia la ricerca',
})