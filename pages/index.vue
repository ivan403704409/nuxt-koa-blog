<template>
  <section class="container">
    <nuxt-link class="button" to="/about">
      About page 
    </nuxt-link>
    <br>
    <br>
    <template v-for="item in users">
      <div class="button">
        {{item.name}}
      </div>
      <br>
      <br>

    </template>
    <div >
      
    </div>
  </section>
</template>

<script>
import articleItem from '~components/article-item.vue'
import axios from 'axios'

export default {
  components: {
    articleItem,
  },
  data(){
    return {
      users: [],
      name: '',
    }
  },
  methods: {
    
  },
  async asyncData (context) {

      return new Promise((resolve, reject) => {
        axios({
            url: 'http://127.0.0.1:9001',
          })
          .then(({
            data
          }) => {
            console.log(typeof data)
            resolve({
              users: data
            })
          })
      })

  }
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
