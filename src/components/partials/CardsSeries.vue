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
<div class="aa-container my-3">

  <h1>Serie TV</h1>

  <div class="aa-cards d-flex flex-wrap justify-content-center  ">
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