<template>
  <div class="to-do">
    <div class="items">
      <i class="iconfont icon-duck1"></i>
      <h1>写博客</h1>
    </div>
    <div class="items">
      <i class="iconfont icon-duck2"></i>
      <h1>阅读</h1>
    </div>
    <div class="items">
      <i class="iconfont icon-duck3"></i>
      <h1>划水</h1>
    </div>
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

</style>
