<template>
  <div class="to-do">
    <router-link class="items" to="/add">
      <i class="iconfont icon-duck1"></i>
      <h1>写博客</h1>
    </router-link>
    <router-link class="items" to="/blogs">
      <i class="iconfont icon-duck2"></i>
      <h1>阅读</h1>
    </router-link>
    <router-link class="items" to="/my">
      <i class="iconfont icon-duck3"></i>
      <h1>划水</h1>
    </router-link>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.to-do {
  padding: 50px;
  display: flex;
  justify-content: space-around;
}
.items {
  width: 200px;
  text-align: center;
}

h1 {
  user-select: none;
}

</style>
