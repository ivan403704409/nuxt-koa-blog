<template>
<div class="m-article">
  
  <nuxt-link class="button" to="/admin">
      About page
  </nuxt-link>

  <nuxt-link class="button" to="/article/list">
      Article page
  </nuxt-link>


  <mu-text-field v-model="article.title" label="标题" fullWidth labelFloat />
  <br/>

  <mu-text-field v-model="article.content" label="文章内容..." :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="20" :max-rows="20" fullWidth labelFloat/><br/>

  <mu-checkbox v-model="article.tags" :native-value="item.id+''" :label="item.name" v-for="item in tags" :key="item"/>

  <div class="text-right">
    <mu-raised-button @click="save" label="发布文章" class="demo-raised-button" primary/>
  </div>

</div>
</template>
<script>
import { getArticleById, updateArticle } from '../../../model/article'
export default {
  data(){
    return {
      article: {

      },
      // data: {
      //   title: '',
      //   content: '',
      //   tags: [],
      // },
      tags: [],
      multiLineInputErrorText: '',
    }
  },
  methods:{
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    },

    async save(){
      let {id, title, content} = this.article
      let reqData = { id, title, content }
      await updateArticle(reqData)
    },

  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  },

  async asyncData ({ params }) {
        try{
            let {data} = await getArticleById(params.id)
            return {
                article: data,
                tags: [],
                multiLineInputErrorText: '',
            }
        }catch(e){

        }
  },
}
</script>

<style lang="scss" scoped>
.m-article{
  margin: 40px 40px 0;
}
</style>
