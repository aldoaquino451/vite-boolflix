<script>
import SearchBar from './partials/SearchBar.vue';

export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>

<template>
  <div class="my-header d-flex justify-content-between p-4 "> 
    <div class="logo">
      <img src="public\logo-boolflix.png" alt="">
    </div>
    <SearchBar />
  </div>
</template>

<style lang="scss" scoped>

.my-header {
  background-color: rgba(0, 0, 0, 0.356);
  height: 100px;
  .logo {
    height: 100%;
    img {
      height: 100%;
    }
  }
}  

</style>
