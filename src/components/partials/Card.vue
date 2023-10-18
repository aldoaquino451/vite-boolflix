<script>
import Star from './Star.vue';

export default {
  name: 'Card',
  components: {
    Star
  },
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
    image: String,
    description: String
  },
  computed: {
    ratingOf5() {
      return (this.rating / 2).toFixed(1)
    },
    stars() {
      return Math.round(this.ratingOf5); 
    }
  }
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

      <span class="" :class="`lang-icon lang-icon-${language}`"></span>
      <!-- <img
        v-if="language === 'en' "
        class="img-fluid"
        src="../../assets/en.png"
        alt="english">
      <img
        v-else-if="language === 'it'"
        src="../../assets/it.png"
        alt="italian">
      <span
        v-else>{{ language }}</span> -->
    </div>

    <div class="stars d-flex">
      <div v-for="i in 5">
        <i v-if="stars >= i" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
      </div>
      <span class="ps-3">{{ ratingOf5 }} / 5.0</span>
    </div>

    <p class="mt-2 fs-6">
      <strong><i>Descrizione:&nbsp;&nbsp;</i></strong>
      <span>{{ description }}</span>
    </p>

    <!-- <Star /> -->

  </div>

</div>

</template>

<style lang="scss" scoped>


.lang-icon {
  background-image: url(@textabledev/langs-flags-list/lang-flags.png );
  margin: 5px 15px;
  scale: 2;
}
.my-card {
  width: 320px;
  height: 480px;
  position: relative;
  padding: 10px;
  border: 2px solid bisque;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
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
    height: 100%;
    display: flex; 
    flex-direction: column;
    position: absolute;
    bottom: -100%;
    right: 0;
    left: 0;
    padding: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
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
      margin-top: 1em;
      img {
        height: 1.7em;
      }
      span {
        font-weight: 700;
        font-style: italic;
        text-transform: uppercase;
      }
    }
    .stars {
      margin: 0.8rem 0;
    }
  }
}

</style>