<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './data/store';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApi() {
      axios.get( store.endpointApi )
        .then( (res) => {
          console.log(res.data);
        } )
        .catch( (err) => {
          console.log(err);

        } )
    }
  },
  mounted() {
    this.getApi();
  }

}
</script>

<template>
  <div>
    <Header />
    <Main />
    <footer>dimmi qualcosa: {{ store.saluto }}</footer>
  </div>
</template>

<style lang="scss">

@use './scss/main.scss';



</style>
