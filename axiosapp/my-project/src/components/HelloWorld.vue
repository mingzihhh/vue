<template>
  <div class="hello">
    <h1>我是axiosApp，用来发送请求，拦截响应</h1>
    <button @click = 'getData'>发送请求</button>
    <ul>
      <li v-for='item in items'>
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getData() {
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params: {
          page: 1,
          limit: 10
        }
      })
        .then(ret => {
          this.items = ret.data.data
          console.log(ret.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postData() {
      this.$http.get(url,qs.stringify({
          page: 1,
          limit: 10
        })) .then(ret => {
          this.items = ret.data.data
          console.log(ret.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
