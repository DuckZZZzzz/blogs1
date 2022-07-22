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
        <p class="description" style="word-break: break-all;">{{blog.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
    </section>
        <section class="pagination">
      <el-pagination
        page-size="20"
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
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },

  created() {
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page }) 
      .then(res => {
        console.log(res,'...。。。')
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      })
  },

  methods: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: "/my", query: { page: newPage}})
      })
    },

    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },

    async onDelete(blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      await blog.deleteBlog({ blogId })
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id != blogId)
    },
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
    grid: auto auto auto / 80px 1fr;
    grid-gap: 0 20px;
    align-items: center;
    margin: 20px 0;

    .date {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      text-align: center;

      span {
        display: block;
        color: rgb(110, 134, 145);
      }
      .day {
        font-size: 40px;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
    }

    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }

    .actions {
      grid-column: 2;
      grid-row: 3;
      font-size: 12px;

      a {
        color: #0e5854;
      }
    }
  }

  .pagination {
    text-align: center;
  }
  

</style>