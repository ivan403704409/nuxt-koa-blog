<template>
<div class="m-article">
  
  <nuxt-link class="button" to="/admin">
      About page
  </nuxt-link>


  <mu-text-field v-model="data.title" label="标题" fullWidth labelFloat />
  <br/>

  <mu-text-field v-model="data.content" label="文章内容..." :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="20" :max-rows="20" fullWidth labelFloat/><br/>

  <mu-checkbox :label="item.name" v-for="item in tags" :key="item"/>

  <div class="text-right">
    <mu-raised-button @click="save" label="发布文章" class="demo-raised-button" primary/>
  </div>

</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      data: {
        title: '',
        content: '',
        tags: [],
      },
      tags: [],
      multiLineInputErrorText: '',
    }
  },
  methods:{
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    },

    async save(){
      axios({
        url: 'http://localhost:9099/article/add',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          title: this.data.title,
          content: this.data.content,
        }
      })
    },

  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  },

  async asyncData (context) {
        try{
            let {data} = await axios.get('http://localhost:9099/tag/list')
            return {
                tags: data
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
