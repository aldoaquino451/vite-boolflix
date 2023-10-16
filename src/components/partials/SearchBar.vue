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
    getApi(type) {
      const search = store.endPoint + type + '?api_key=3048ade5f6d1aeeef87dc9e824a28e98' + '&language=it-IT' +  '&query=' + store.textToSearch ;  
      axios.get(search)
      .then( res => {
        store.itemsList = res.data.results;
        store.message = 'Nessun risultato trovato'
        console.log(store.itemsList );
      })
      .catch( err => {
        console.log(err); 
      });
    },
  },
  computed: {
    
  },
}
</script>

<template>
  <div class="d-flex gap-4 align-items-center">

    <input @keyup.enter="getApi('tv')" type="text" class="form-control" placeholder="Scrivi il titolo" v-model="store.textToSearch">

    <select class="form-select">
      <option>Seleziona l'opzione</option>
      <option value="movie">Film</option>
      <option value="tv">Serie TV</option>
    </select>

    <button @click="getApi('movie') " class="btn btn-primary">Cerca</button>

  </div>
</template>

<style lang="scss" scoped>

</style>