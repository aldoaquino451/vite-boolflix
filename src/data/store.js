import { reactive } from 'vue';

export const store = reactive({
  API_endpoint: 'https://api.themoviedb.org/3/search/',
  API_key_language: '?api_key=3048ade5f6d1aeeef87dc9e824a28e98&language=it-IT',
  showsArr: [],
  showTypeOf: null,
  textToSearch: '',
  messageOutput: 'Inizia la ricerca',
})