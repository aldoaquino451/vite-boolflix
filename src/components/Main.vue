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
    <div class="message fw-bold fs-3" v-if="store.showsArr.length === 0">
      <p>{{ store.messageOutput }}</p>
    </div>
    <div v-else>
      <div class="image">
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
}
p {
  color: #bb2d3b;
}
.image {
  position: relative;
  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    left: 30px;
    bottom: 30px;
    padding: 20px;
    color: white;
    font-size: 80px;
    background-color: rgba(0, 0, 0, 0.2 );
  }
}



</style>