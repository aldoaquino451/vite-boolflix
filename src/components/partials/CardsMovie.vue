<script>
import Card from './Card.vue';

export default {
  name: 'CardsMovie',
  components: {
    Card
  }
}
</script>

<template>
  <div class="container border my-3">
  
    <h1>Film</h1>

    <div class="container-fluid">
      <div class="row ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>



</style>