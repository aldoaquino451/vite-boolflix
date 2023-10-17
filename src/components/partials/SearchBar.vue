<script>
import { store } from '../../data/store';
import axios from 'axios';


export default {
  name: 'SearchBar',
  data() {
    return {
      store,
      selected: null
    }
  },
  methods: {
    getApi() {
      this.reset();
      store.showTypeOf = this.selected;

      axios.get(store.endpoint + store.showTypeOf, {
        params: {
          query: store.textToSearch,
          api_key: store.api_key,
          language: store.language
        }
      })
      .then( res => {
        store.showsArr = res.data.results;
        this.imageMain();
        
        console.log(store.showsArr);
        store.messageOutput = 'Nessun risultato trovato'
      })
      .catch( () => {
        store.messageOutput = 'Scegli la categoria' 
      });
    },

    imageMain() {
      store.showsArr.forEach( (show, index) => {
        if ( show.popularity > store.highestVote ) {
          store.imageMainIndex = index
          store.highestVote = show.popularity
          console.log(store.imageMainIndex);
          console.log(store.highestVote);
        }
      })
    },
    reset() {
      store.showsArr = [];
      store.highestVote = 0
      store.imageMainIndex = 0
    }
  },

}
</script>

<template>
  <div class="d-flex gap-3 align-items-center">

    <input @keyup.enter="getApi" type="text" class="form-control" placeholder="Scrivi il titolo" v-model="store.textToSearch">

    <select v-model="selected" class="form-select" >
      <option value="movie">Film</option>
      <option value="tv">Serie TV</option>
    </select>

    <button @click="getApi" class="btn btn-danger">Cerca</button>

  </div>
</template>

<style lang="scss" scoped>


</style>