<script>
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';

export default {
  name: 'App',
  components: {
    Header,
    CardsContainer
  }
}
</script>

<template>
  <div>
    <Header />
    <CardsContainer />
  </div>
</template>

<style lang="scss">

@use './scss/main.scss';



</style>
