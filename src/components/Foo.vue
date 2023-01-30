<template>
  <div class="foo" @click="show">
    foo
  </div>
</template>

<script>
export default {
  name: "Foo",
  methods: {
    show() {
      alert("1")
    }
  }
}
</script>

<style scoped>
.foo {
}
</style>
