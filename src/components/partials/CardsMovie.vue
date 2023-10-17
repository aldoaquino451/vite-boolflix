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
  
    <h1>Film</h1>

    <div class="row ">
      <Card
        v-for="movie in store.showsArr"
        :key="movie.id"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :rating="movie.vote_average" />
    </div>

  </div>
</template>

<style lang="scss" scoped>


</style>