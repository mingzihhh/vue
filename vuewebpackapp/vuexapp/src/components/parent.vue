<template>
  <div>
    <p>我是父组件</p> ------{{fromSonMsg}}<br>
    <p>我是全局状态：{{getNum}}</p>
    <son :msg='toSonMsg' @handle='getSonMsg'></son><br>
    <button @click='pAdd'>父组件改变状态</button>
    <button @click='pAddAction'>父组件改变状态(action)</button>

  </div>
</template>

<script>
import son from './son'
export default {
  name: 'parent',
  data () {
    return {
      fromSonMsg: '',
      toSonMsg: '我是父组件传递的数据'
    }
  },
  components: {
    son
  },
  methods: {
    getSonMsg(val) {
      this.fromSonMsg = val
    },
    pAdd(){
      this.$store.commit('increase')
    },
    pAddAction(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum:function() {
      return this.$store.getters.getNum
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
