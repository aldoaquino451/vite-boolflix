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
      CardsSeries
    },
    methods: {

    },
    computed: {
      imageMain() {
        return store.image_endpoint + 'original' + store.showsArr[store.imageMainIndex].backdrop_path 
      },
      titleMain() {
        return store.showsArr[store.imageMainIndex].name
      }
    },
  }
</script>



<template>
  <div>

    <div v-if="store.showsArr.length === 0" class="message" >
      <p class="fs-3 fw-bold">{{ store.messageOutput }}</p>
    </div>

    <div v-else>
      <div class="image-box">
        <img :src="imageMain" alt="">
        <h2>{{ titleMain }}</h2>
      </div>

      <!-- <CardsMovie v-if="store.showTypeOf === 'movie'" /> -->
      <CardsSeries v-if="store.showTypeOf === 'tv'"/>
    </div>

  </div>
</template>



<style lang="scss" scoped>
.message {
  padding: 120px 0 0 40px;
  p {
    color: #bb2d3b;
  }
}
.image-box {
  position: relative;
  height: 700px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    left: 100px;
    bottom: 50px;
    padding: 20px;
    color: white;
    font-size: 50px;
    background-color: rgba(0, 0, 0, 0.2 );
  }
}

</style>