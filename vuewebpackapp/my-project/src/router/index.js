import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(router)

export default new router({
  routes: [
      {
           name: 'helloEarth',
           path: '/HelloEarth/:earthMsg',
           component: HelloEarth
       },
       {
           name: 'helloWorld',
           path: '/HelloWorld/:worldMsg',
           component: HelloWorld
       }
  ]
})