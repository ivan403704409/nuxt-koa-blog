<template>
  <section class="page-article">

    <nuxt-link class="button" to="/admin/article">
        Edit About page
    </nuxt-link>

    <div>
      <vue-markdown>{{article.content}}</vue-markdown>
    </div>

  </section>
</template>
<script>
import { getArticleById } from '../../model/article'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown,
  },
  async asyncData ({ req, params }) {
    try{
        console.log(params)
        let {data} = await getArticleById(params.id)
        return {
            article: data,
        }
    }catch(e){

    }
    
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-article{
  margin: 0 100px;
}
</style>
