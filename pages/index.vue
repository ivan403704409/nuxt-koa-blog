<template>
  <section class="container">
    <article-item>123</article-item>

    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
import articleItem from '~components/article-item.vue'

export default {
  components: {
    articleItem,
  },
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
