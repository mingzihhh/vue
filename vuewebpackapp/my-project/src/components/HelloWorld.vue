<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h2>Essential Links</h2>
    <p>{{$route.params.worldMsg}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
