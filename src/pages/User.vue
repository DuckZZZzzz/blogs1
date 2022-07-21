<template>
  <div class="userBlogs">
    <section class="userInfo">
      <img :src="user.avatar" :alt="user.username">
      <span>{{user.username}}</span>
    </section>
    <hr>
    <section class="blogs">
      <router-link class="blog" v-for="blog in blogs" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span><br>
          <span class="year">{{splitDate(blog.createdAt).year}}年</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
        </div>
        <h3 style="word-break: break-all;">{{blog.title}}</h3>
        <p style="word-break: break-all;">{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
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
      page: 1,
      total: 0
    }
  },

  created() {
    this.userId = this.$route.params.userId
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, { page: this.page }) 
      .then(res => {
        console.log(res,'...。。。')
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        if(res.data.length > 0) {
          this.user = res.data[0].user
        }
      })
  },

  methods: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.userId, { page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})
      })
    },
    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  }



}


</script>


<style lang="less" scoped>

  .userInfo {
    span {
      font-weight: bold;
    }
    img {
      vertical-align: middle;
      width: 80px;
      margin: 10px  20px;
      text-align: center;
    }
  }

  .blog {
    display: grid;
    grid-gap: 0 30px;
    grid: auto auto  / 80px 1fr;

    .date {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      text-align: center;
      .day {
        font-size: 40px;
      }
    }

    h3 {
      grid-column: 2/3;
      
    }

    p {
      grid-column: 2/3;
    }
  }

    .pagination {
    text-align: center;
  }
  

h3, p {
  margin-top: 0;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>