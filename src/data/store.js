import { reactive } from 'vue';

export const store = reactive({
  endpoint: 'https://api.themoviedb.org/3/search/',
  textToSearch: '',
  api_key: '3048ade5f6d1aeeef87dc9e824a28e98',
  language: 'it-IT',
  showsArr: [],
  showTypeOf: null,
  messageOutput: 'Inizia la ricerca',
  // API_info: {
  //   api_key: '3048ade5f6d1aeeef87dc9e824a28e98',
  //   language: 'it-IT',
  //   textToSearch: '',
  // },
  image_endpoint: 'https://image.tmdb.org/t/p/',
  image_size: 'w300',
  image_store: 'backdrop_path'
})