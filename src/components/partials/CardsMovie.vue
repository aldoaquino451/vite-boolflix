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
  methods: {
    image_store(movie) {
      if (movie.backdrop_path) {
        return store.image_endpoint+ store.image_size + movie.backdrop_path 
      }
      return ''
    }
  },
}
</script>

<template>
<div class="aa-container my-3">

  <h1>Film</h1>

  <div class="aa-cards d-flex flex-wrap justify-content-center  ">
    <Card
      v-for="movie in store.showsArr"
      :key="movie.id"
      :image="image_store(movie)"
      :title="movie.title"
      :originalTitle="movie.original_title"
      :language="movie.original_language"
      :rating="movie.vote_average" />
  </div>

</div>
</template>


<style lang="scss" scoped>

.aa-container {
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  h1 {
    padding-bottom: 20px;
    border-bottom: 2px solid lightsteelblue ;
    margin-bottom: 40px;
  }
  .aa-cards {
    gap: 30px;
  }
}

</style>