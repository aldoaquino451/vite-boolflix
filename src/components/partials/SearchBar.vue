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
      store.showTypeOf = this.selected
      const research = store.API_endpoint + store.showTypeOf + store.API_key_language + '&query=' + store.textToSearch ;  
      axios.get(research)
      .then( res => {
        store.showsArr = res.data.results;
        store.messageOutput = 'Nessun risultato trovato'
        console.log(store.showsArr);
      })
      .catch( () => {
        store.messageOutput = 'Scegli la categoria' 
      });
    },
  },

}
</script>

<template>
  <div class="d-flex gap-4 align-items-center">

    <input @keyup.enter="getApi" type="text" class="form-control" placeholder="Scrivi il titolo" v-model="store.textToSearch">

    <select v-model="selected" class="form-select" >
      <option value="movie">Film</option>
      <option value="tv">Serie TV</option>
    </select>

    <button @click="getApi" class="btn btn-primary">Cerca</button>

  </div>
</template>

<style lang="scss" scoped>

</style>