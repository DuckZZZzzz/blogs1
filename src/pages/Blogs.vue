<template>
  <div id="blogs">
    <section class="blog-posts"> 
      <router-link class="item" v-for="blog in blogs" :to="`/detail/`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption> 
          <p>{{(blog.createdAt)}}</p>
        </figure>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">

    </section>
  </div>
</template>

<script>
import blog from '../api/blog'
window.blog = blog


export default {
  data() {
    return {
      blogs: [],
      total: 1,
      page: 1,
    }
  },
  created() {
     this.page = parseInt(this.$route.query.page) 
     blog.getIndexBlogs({page: this.page})
      .then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
  },
  methods: {

  }
}

</script>

<style lang="less" scoped>
  #blogs {
    padding: 0 150px;
    .blog-posts {
      .item {
        display: grid;
        align-items: flex-start;
        grid: auto auto / 80px 1fr;
      .avatar {
        width: 50px;
        grid-column: 1;
        grid-row: 1 / span 2;
        margin: 10px 0;
        text-align: center;
      }
      h3 {
        margin-bottom: 0;
      }
      p {
        margin-top: 0;
      }
      }
    }
  }

</style>