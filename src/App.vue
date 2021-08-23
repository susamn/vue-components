<template>
  <div id="app">
    <Components />
  </div>
</template>

<script>
import Components from "./components/Components.vue";

export default {
  name: "App",
  components: {
    Components,
  },
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
