<script>
import Card from './Card.vue';
import { store } from '../../data/store';

export default {
  name: 'CardsSeries',
  components: {
    Card
  },
  data() {
    return {
      store
    }
  },
  methods: {
    image_store(series) {
      if (series.backdrop_path) {
        return store.image_endpoint+ store.image_size + series.backdrop_path 
      }
      return false
    }
  },
}
</script>

<template>
  <div class="container my-3">
  
    <h1 class="p-3">Serie TV</h1>

    <div class="container-fluid">
      <div class="row ">
        <Card
          v-for="series in store.showsArr"
          :key="series.id"
          :title="series.name"
          :originalTitle="series.original_name"
          :language="series.original_language"
          :rating="series.vote_average" 
          :image="image_store(series)" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>