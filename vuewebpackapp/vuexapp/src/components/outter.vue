<template>
  <div>
    <p>我是outter</p><br>
    <p>我是全局状态：{{getNum}}</p>
    <button @click='oAdd'>外组件改变状态</button>
    <button @click='oAddAction'>外组件改变状态(action)</button>

  
  </div>
</template>

<script>
export default {
  name: 'outter',
  data() {
    return {
      toParentMsg: '我是子组件传递的数据'
    }
  },
  computed: {
    getNum:function() {
      return this.$store.state.num
    }
  },
  methods: {
    oAdd(){
      this.$store.commit('increase')
    },
    oAddAction(){
      this.$store.dispatch('decreaseAction')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
