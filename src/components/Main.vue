<script>
import CardsMovie from './partials/CardsMovie.vue';
import CardsSeries from './partials/CardsSeries.vue';
import { store } from '../data/store';

export default {
  name: 'Main',
  data() {
    return {
      store,
    }
  },
  components: {
    CardsMovie,
    CardsSeries,
  }
}
</script>

<template>
  <div>
    <div class="p-5 fw-bold fs-3" v-if="store.itemsList.length === 0">
      <p>{{ store.message }}</p>
    </div>
    <div v-else>
      <CardsMovie v-if="store.type === 'movie'" />
      <CardsSeries v-if="store.type === 'tv'"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>