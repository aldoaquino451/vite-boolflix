<script>
import Card from './Card.vue';
import { store } from '../../data/store';

export default {
  name: 'CardsMovie',
  components: {
    Card
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container my-3">
  
    <h1 class="p-3">Film</h1>

    <div class="container-fluid">
      <div class="row ">
        <Card
          v-for="movie in store.showsArr"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :language="movie.original_language"
          :rating="movie.vote_average" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>


</style>