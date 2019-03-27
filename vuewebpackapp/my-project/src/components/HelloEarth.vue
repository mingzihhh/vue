<template>
  <div class="hello">
    <h1>Hello Earth</h1>
    <h2>Essential Links</h2>
    <p>{{$route.params.earthMsg}}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
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
