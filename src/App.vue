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

main {
  margin: 0 230px;
}

@media (min-width: 768px) and (max-width: 992px) {
main {
  margin: 0 180px;
}
}

@media (max-width: 768px) {
main {
  margin: 0 60px;
}
}

</style>
