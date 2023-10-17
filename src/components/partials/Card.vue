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

<div class="aa-card gap-2 ">

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
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

.aa-card {
  width: 280px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8  );
  height: 400px;
  overflow: hidden;
  position: relative;

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
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5 );
    padding: 10px;
    display: flex;
    flex-direction: column;
    .title {
    font-size: 1.4rem;
    font-weight: bold;
    }

    .original-title {
      font-size: 1.2rem;
      font-style: italic;
    }
    .language {
      img {
        height: 30px;
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