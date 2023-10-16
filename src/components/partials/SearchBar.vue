<script>

export default {
  name: 'SearchBar',

}
</script>

<template>
  <div class="d-flex gap-4 align-items-center">

    <input type="text" class="form-control" placeholder="Scrivi il titolo">

    <select class="form-select">
      <option>Seleziona l'opzione</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button class="btn btn-primary">Cerca</button>

  </div>
</template>

<style lang="scss" scoped>

</style>