<template>
  <div id="app">
    <Header></Header>
    <main><router-view/></main>
    

  </div>
</template>

<script>
import Header from './components/Header.vue'



export default {
  name: 'App',
  components: {
    Header,
  }
  
}
</script>

<style>
@import "./assets/common.less";


</style>
