<template>
  <div class="detail">
    <section class="user-info">
      <router-link to="/user">
        <img :src="blog.user.avatar" :alt="blog.user.username">
      </router-link>
      <h3>{{title}}</h3>
      <p>{{user.username}} 发布于{{friendlyDate(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      article: '',
      user: {},
      rawcontent: {}
    }
  },
    created() {
      
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
