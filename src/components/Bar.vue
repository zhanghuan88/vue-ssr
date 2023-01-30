<template>
  <div class="bar">
    {{ $store.state.name }}
  </div>
</template>

<script>
export default {
  asyncData(store) {
    return store.dispatch('changeName')
  },
  name: "Bar"
}
</script>

<style scoped>
.bar {
  background: red;
}
</style>
