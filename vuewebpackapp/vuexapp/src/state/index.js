import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建状态仓库
export default new Vuex.Store({
  state: {
    num: 666
  },
  mutations: {
    //定义状态改变函数
    increase(state) {
      state.num += 100
    },
    decrease(state) {
      state.num -= 100
    }
  },
  actions: {
    //context为上下文
    decreaseAction(context) {
      context.commit('decrease')
    }
  },
  getters: {
    //对获取的状态进行处理
    getNum(state) {
      return state.num > 0 ? state.num : 0
    }
  }
})