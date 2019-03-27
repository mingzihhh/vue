<template>
    <ul>
      <li>
          <router-link :to="{name:'helloEarth',params:{earthMsg:'你好地球'}}">Hello Earth</router-link>
     </li>
      <li>
         <router-link :to="{name:'helloWorld',params:{worldMsg:'你好世界'}}">Hello World</router-link>
      </li>

    </ul>
</template>

<script>
export default {
    name: 'list'
}
</script>

<style>

</style>

