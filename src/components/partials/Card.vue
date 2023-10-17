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

<div class="col-3 my-4">
  <div class="card gap-2 ">

    <img v-if="image !== ''" :src="image" :alt="title">

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

.card {
  padding: 20px 10px;
  background-color: bisque;
  min-height: 300px;
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

</style>