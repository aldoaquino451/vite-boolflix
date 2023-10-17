<script>

export default {
  name: 'Card',
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
    image: String
  },
  computed: {
    stars() {
      return Math.round(this.rating / 2); 
    }
  },
  mounted() {
    
  },
}

</script>

<template>

<div class="my-card gap-2 ">

  <div class="image-cover">
    <img v-if="image !== ''" :src="image" :alt="title">
  </div>

  <div class="info ">
    <span class="title">{{ title }}</span>

    <span class="original-title">{{ originalTitle }}</span>

    <div class="language">
      <img
        v-if="language === 'en' "
        class="img-fluid"
        src="/en.png"
        alt="english">
      <img
        v-else-if="language === 'it'"
        src="/it.png"
        alt="italian">
      <span
        v-else>{{ language }}</span>
    </div>

    <div class="d-flex">
      <div v-for="i in 5">
        <i v-if="stars >= i" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
      </div>
      <span class="ps-3">{{ rating.toFixed(1) }}</span>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

.my-card {
  width: 320px;
  padding: 10px;
  border: 2px solid bisque;
  background-color: rgba(0, 0, 0, 0.8);
  height: 480px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 8px 0px black;
  animation: all;

  &:hover {
    transition: 0.2s;
    transform: scale(1.1);
    .info {
      transition: 1s cubic-bezier(.68,-0.55,.27,1.55);
      bottom: 0;    
    }
  }
  .image-cover {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    // display: none;
    display: flex; 
    position: absolute;
    bottom: -100%;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    flex-direction: column;
    font-size: 18px;
    height: 100%;
    overflow: auto;
    animation: all;
    .title {
    font-size: 1.4em;
    font-weight: bold;
    }

    .original-title {
      font-size: 1.2em;
      font-style: italic;
    }
    .language {
      margin: 1.3em 0;
      img {
        height: 40px;
      }
      span {
        font-style: italic;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
}

</style>