<template>
  <div class="detail">
    <section class="user-info">
      <router-link :to='`/user/${user.id}`'>
        <img :src="user.avatar" :alt="user.username">
      </router-link>
      <div class="title">
        <h3>{{title}}</h3>
        <p>{{user.username}} 发布于{{friendlyDate(createdAt)}}</p>
      </div>
    </section>
    <hr>
    <section class="article" v-html="markdown" style="word-break: break-all;"></section>
  </div>
</template>

<script>

import blog from '@/api/blog'
import marked from 'marked'

export default {
  data () {
    return {
      title: '',
      createdAt: '',
      user: {},
      rawContent: ''
    }
  },
  created() {
    blog.getDetail({ blogId: this.$route.params.blogId })
      .then(res=>{
        this.title = res.data.title
        this.createdAt = res.data.createdAt
        this.rawContent = res.data.content
        this.user = res.data.user

      })
  },
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .user-info {
    display: flex;

    img {
    width: 80px;
    margin: 10px 0;
    text-align: center;
    margin-right: 20px;
  }

  }


</style>
