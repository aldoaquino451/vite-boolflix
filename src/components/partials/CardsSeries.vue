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
      store,
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
          v-for="series in store.itemsList"
          :title="series.name"
          :originalTitle="series.original_name"
          :language="series.original_language"
          :rating="series.vote_average" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>