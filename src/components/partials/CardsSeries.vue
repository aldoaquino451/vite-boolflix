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
    image_store(tv) {
      if (tv.backdrop_path) {
        return store.image_endpoint+ store.image_size + tv.backdrop_path 
      }
      return ''
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
          v-for="tv in store.showsArr"
          :key="tv.id"
          :image="image_store(tv)"
          :title="tv.name"
          :originalTitle="tv.original_name"
          :language="tv.original_language"
          :rating="tv.vote_average" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>