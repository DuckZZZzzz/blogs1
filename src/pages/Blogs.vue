<template>
  <div id="blogs">
    <section class="blog-posts"> 
      <router-link class="item" v-for="blog in blogs" :to="`/detail/`"></router-link>

    </section>
    <section>

    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blogs: [],
      total: 1,
      page: 1
    }
  },
  created() {
     
  }
}

</script>