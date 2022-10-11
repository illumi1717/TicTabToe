<template>
  <component :is="this.$route.meta.layout">
    <router-view/>
  </component>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout';
  import EmptyLayout from '@/layouts/EmptyLayout';

  export default {
    components: {
      'main-layout' : MainLayout,
      'empty-layout' : EmptyLayout
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>