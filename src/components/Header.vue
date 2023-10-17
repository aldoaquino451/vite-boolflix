<script>
import SearchBar from './partials/SearchBar.vue';
import { store } from '../data/store';

export default {
  name: 'Header',
  components: {
    SearchBar
  },
  data() {
    return {
      store
    }
  },
  methods: {
    reset() {
      store.showsArr = []
    }
  }
}
</script>

<template>
  <div class="my-header d-flex justify-content-between"> 
    <div class="logo" @click="reset">
      <img src="/logo-boolflix.png" alt="logo">
    </div>
    <SearchBar />
  </div>
</template>

<style lang="scss" scoped>

.my-header {
  background-color: rgba(0, 0, 0, 0.6 );
  height: 80px;
  gap: 20px;
  position: fixed;
  z-index: 999;
  width: 100%;
  padding: 15px 30px;
  .logo {
    height: 100%;
    cursor: pointer;

    img {
      height: 100%;
    }
  }
}  

</style>
