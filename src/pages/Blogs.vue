<template>
  <div id="blogs">
    <section class="blog-posts">
      <router-link
        class="item"
        v-for="blog in blogs"
        :to="`/detail/${blog.id}`"
      >
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{ blog.user.username }}</figcaption>
          <p>{{ friendlyDate(blog.createdAt) }}</p>
        </figure>
        <h3>{{ blog.title }}</h3>
        <p class="description" style="word-break: break-all">{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        page-size="20"
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import blog from "../api/blog";
window.blog = blog;

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1,
    };
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then((res) => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
      this.totalPage = res.totalPage;
    });
  },
  methods: {
    onPageChange(newPage) {
      blog.getIndexBlogs({ page: newPage }).then((res) => {
        console.log(res, "...");
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: "/blogs", query: { page: newPage } });
      });
    },
  },
};
</script>

<style lang="less" scoped>
#blogs {
  .blog-posts {
    .item {
      display: grid;
      align-items: flex-start;
      grid: auto auto  / 100px 1fr;
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
    }
  }

  .pagination {
    text-align: center;
  }
}
</style>