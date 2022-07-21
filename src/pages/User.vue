<template>
  <div class="userBlogs">
    <section class="userInfo">
      <img :src="user.avatar" :alt="user.username">
      <p>{{user.username}}</p>
    </section>
    <section class="blogs">
      <router-link class="blog" v-for="blog in blogs" >
        <span class="date">{{friendlyDate(createdAt)}}</span>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
  </div>
</template>

<script>
import blog from '@/api/blog'


export default {
  data() {
    return {
      user: {},
      blogs: [],
      createdAt,
      page: 1,
    }
  },
 
 created() {
    blog.getBlogsByUserId({userId: 69 , page: 1})
      .then(res=>{
        console.log(res,'.........')
      })
 }



}


</script>


<style lang="less" scoped>
  .userBlogs {

    .blog-posts {
      .item {
        display: grid;
        align-items: flex-start;
        grid: auto auto / 100px 1fr;
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
        text-overflow: ellipsis;
        overflow: hidden;
      }
      }
    }

    .pagination {
      text-align: center;
    }
  }

</style>