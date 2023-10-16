<script>
import CardsMovie from './partials/CardsMovie.vue';
import CardsSeries from './partials/CardsSeries.vue';

export default {
  name: 'Main',
  components: {
    CardsMovie,
    CardsSeries,
  }
}
</script>

<template>
  <div>
    <CardsMovie />
    <!-- <CardsSeries /> -->
  </div>
</template>

<style lang="scss" scoped>

</style>