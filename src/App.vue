<template>
  <component :is="this.$route.meta.layout">
    <router-view/>
  </component>
</template>

<script>
  import MainLayout from "@/layouts/MainLayout"

  export default {
    components: {
      'main-layout' : MainLayout
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>