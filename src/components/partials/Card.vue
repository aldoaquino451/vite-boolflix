<script>
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default {
  name: 'Card',
  data() {
    return {
      faCircle
    }
  },
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
  },
  methods: {
    getStars() {
      console.log(this.rating);
    }
  },
  mounted() {
    this.getStars();
  },
}

</script>

<template>

<div class="col-4 my-4">
  <div class="card">

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

    <div>
      {{ faCircle }}
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>

  </div>
</div>

</template>

<style lang="scss" scoped>

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

</style>