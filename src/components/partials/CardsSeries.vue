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
<div class="my-container my-3">

  <h2>Serie TV</h2>

  <div class="my-cards d-flex flex-wrap justify-content-center  ">
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

.my-container {
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
  h2 {
    padding-bottom: 20px;
    border-bottom: 5px solid #bb2d3b ;
    margin-bottom: 40px;
    color: #bb2d3b;
    font-size: 3rem;
    font-weight: 700;
  }
  .my-cards {
    gap: 30px;
  }
}

</style>