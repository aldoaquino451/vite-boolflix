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
      // ho scelto con select lo show da cercare
      store.showTypeOf = this.selected;

      // resetto
      this.reset();

      // parte la chiamata 
      axios.get(store.endpoint + store.showTypeOf, {
        params: {
          query: store.textToSearch,
          api_key: store.api_key,
          language: store.language
        }
      })
      // ottengo il risultato 
      .then( res => {
        store.showsArr = res.data.results;
        this.imageMain();
        
        console.log(store.imageMainIndex);
        console.log(store.highestVote);
        console.log(store.showsArr);

        store.messageOutput = 'Nessun risultato trovato'
      })
      // ottengo un errore
      .catch( () => {
        store.messageOutput = 'Scegli la categoria' 
      });
    },

    // ottengo l'immagine che compare in copertina
    imageMain() {
      store.showsArr.forEach( (show, index) => {
        if ( show.popularity > store.highestVote ) {
          store.imageMainIndex = index
          store.highestVote = show.popularity
        }
      })
    },

    // resetto la lista di film/serietv ogni volta che faccio partire una ricerca
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