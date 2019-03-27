<template>
  <div>
    <p>我是子组件</p>-----{{msg}}<br>
    <p>我是全局状态：{{getNum}}</p>
    <button @click='sendToParent'>向父组件传递数据</button>
    <button @click='sAdd'>子组件改变状态</button>
    <button @click='sAddAction'>子组件改变状态(action)</button>

  
  </div>
</template>

<script>
export default {
  name: 'son',
  data() {
    return {
      toParentMsg: '我是子组件传递的数据'
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendToParent() {
      this.$emit('handle',this.toParentMsg)
    },
    sAdd(){
      this.$store.commit('increase')
    },
    sAddAction(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum:function() {
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
