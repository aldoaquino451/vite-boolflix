<script>
import axios from 'axios';
import { store } from '../../data/store';


export default {
  name: 'SearchBar',
  data() {
    return {
      store,
    }
  },
  methods: {
    getApi() {
      const searchMovie = store.endPoint + store.typeOf + '?api_key=3048ade5f6d1aeeef87dc9e824a28e98' + '&language=it-IT' +  '&query=';  
      axios.get( searchMovie + store.textToSearch )
      .then( res => {
        store.moviesArr = res.data.results;
        console.log(store.moviesArr );
      })
      .catch( err => {
        console.log(err); 
      });
      console.log(store.textToSearch);
    },
  }
}
</script>

<template>
  <div class="d-flex gap-4 align-items-center">

    <input type="text" class="form-control" placeholder="Scrivi il titolo" v-model="store.textToSearch">

    <select class="form-select">
      <option>Seleziona l'opzione</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="getApi " class="btn btn-primary">Cerca</button>

  </div>
</template>

<style lang="scss" scoped>

</style>