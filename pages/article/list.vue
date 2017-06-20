<template>
  <section class="page-article">

    <nuxt-link class="button" to="/admin/article">
        Edit About page
    </nuxt-link>


    <div>
      <mu-card class="mgb-default" v-for="item in list">
        <mu-card-title 
          :title="item.title" 
          :subTitle="item.ctime"
          @click.native="$router.push('/article/' + item.id)"
        />

        <mu-flat-button 
          label="编辑" 
          @click.native="$router.push('/admin/article/' + item.id)"
        />
        <mu-card-text>
          <vue-markdown>{{item.content}}</vue-markdown>
        </mu-card-text>
        <mu-card-actions>
          <mu-flat-button :label="item.tag"/>
          <mu-flat-button 
            label="编辑" 
            @click.native="$router.push('/admin/article/' + item.id)"
          />
        </mu-card-actions>
      </mu-card>
    </div>
  </section>
</template>
<script>
import { getArticleList } from '../../model/article'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown,
  },
  async asyncData ({ req }) {
    try{
        let data = await getArticleList()
        return {
            list: data
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
