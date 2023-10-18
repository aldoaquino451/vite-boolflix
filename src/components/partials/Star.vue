<script>
export default {
  
}
</script>

<template>
  <div class="star">
    <!-- <i class="fa-solid fa-star"></i> -->
    <i class="fa-regular fa-star"></i>
    <span class="fa-span"></span>
  </div>
</template>

<style lang="scss" scoped>

.star {
  position: relative;
  font-size: 20px;
  .fa-solid {
    position: absolute;
    left: 0;
    top: 0;
  }
  .fa-regular {
    position: absolute;
    left: 0;
    top: 0;
    
  }
  .fa-span {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255, 0, 0, 0.4);
    width: 23px;
    height: 20px;
    color: white;
  }
}

</style>